const APP_CONFIG = window.APP_CONFIG;
const FIREBASE_CONFIG = window.FIREBASE_CONFIG;
const SUPABASE_CONFIG = window.SUPABASE_CONFIG;
const STORAGE_KEY = "pet-watcher-state-v2";
const DEVICE_KEY = "pet-watcher-device-id";
const channel = "BroadcastChannel" in window ? new BroadcastChannel("pet-watcher") : null;
const deviceId = getDeviceId();

let state = loadState();
let remoteReady = false;
let remoteSave = null;
let applyingRemoteUpdate = false;
let lastAlertedCompletions = new Set(
  state.tasks.filter((task) => task.complete).map((task) => task.id)
);

render();
connectRealtime();

function getDeviceId() {
  const existing = localStorage.getItem(DEVICE_KEY);
  if (existing) return existing;

  const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  localStorage.setItem(DEVICE_KEY, id);
  return id;
}

function initialState() {
  return {
    ...structuredClone(APP_CONFIG),
    role: "owner",
    selectedDay: APP_CONFIG.days[0]?.id || "today",
    lastUpdatedBy: deviceId,
    lastUpdatedAt: new Date().toISOString()
  };
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return initialState();

  try {
    const parsed = JSON.parse(stored);
    return {
      ...initialState(),
      ...parsed,
      tasks: mergeTasks(APP_CONFIG.tasks, parsed.tasks || []),
      days: APP_CONFIG.days,
      pets: APP_CONFIG.pets,
      contacts: APP_CONFIG.contacts,
      home: APP_CONFIG.home
    };
  } catch {
    return initialState();
  }
}

function mergeTasks(configTasks, savedTasks) {
  return configTasks.map((task) => {
    const saved = savedTasks.find((item) => item.id === task.id);
    return saved ? { ...task, ...saved } : task;
  });
}

function saveState(announce = true) {
  state.lastUpdatedBy = deviceId;
  state.lastUpdatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  if (announce && channel) channel.postMessage(state);
  if (announce && remoteSave && !applyingRemoteUpdate) remoteSave(state);
}

async function connectRealtime() {
  if (SUPABASE_CONFIG?.enabled) {
    await connectSupabaseRealtime();
    return;
  }

  if (!FIREBASE_CONFIG.enabled || !FIREBASE_CONFIG.apiKey || !FIREBASE_CONFIG.projectId) {
    setSyncStatus("Local preview");
    return;
  }

  try {
    const [{ initializeApp }, firestore] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js")
    ]);

    const {
      doc,
      getDoc,
      getFirestore,
      onSnapshot,
      serverTimestamp,
      setDoc
    } = firestore;

    const app = initializeApp(firebasePublicConfig());
    const db = getFirestore(app);
    const tripRef = doc(db, "petWatcherTrips", FIREBASE_CONFIG.tripId);

    remoteSave = async (nextState) => {
      await setDoc(
        tripRef,
        {
          state: nextState,
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
    };

    const existing = await getDoc(tripRef);
    if (!existing.exists()) await remoteSave(state);

    onSnapshot(tripRef, (snapshot) => {
      const data = snapshot.data();
      if (!data?.state) return;

      const incoming = data.state;
      const previous = state;
      applyingRemoteUpdate = true;
      state = incoming;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      applyingRemoteUpdate = false;
      render();

      if (incoming.lastUpdatedBy !== deviceId) {
        alertNewCompletions(previous.tasks, incoming.tasks);
      }
    });

    remoteReady = true;
    setSyncStatus("Live sync on");
  } catch (error) {
    console.warn("Firebase realtime sync unavailable", error);
    setSyncStatus("Local fallback");
  }
}

async function connectSupabaseRealtime() {
  if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
    setSyncStatus("Supabase config missing");
    return;
  }

  if (!window.supabase?.createClient) {
    setSyncStatus("Supabase script missing");
    return;
  }

  try {
    const supabase = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );

    remoteSave = async (nextState) => {
      const { error } = await supabase
        .from(SUPABASE_CONFIG.tableName)
        .upsert({
          id: SUPABASE_CONFIG.tripId,
          state: nextState,
          updated_by: deviceId,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
    };

    const { data, error } = await supabase
      .from(SUPABASE_CONFIG.tableName)
      .select("state")
      .eq("id", SUPABASE_CONFIG.tripId)
      .maybeSingle();

    if (error) throw error;

    if (data?.state) {
      state = mergeRemoteState(data.state);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      render();
    } else {
      await remoteSave(state);
    }

    supabase
      .channel(`pet-watcher-${SUPABASE_CONFIG.tripId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: SUPABASE_CONFIG.tableName,
          filter: `id=eq.${SUPABASE_CONFIG.tripId}`
        },
        (payload) => {
          const incoming = payload.new?.state;
          if (!incoming) return;

          const previous = state;
          applyingRemoteUpdate = true;
          state = mergeRemoteState(incoming);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
          applyingRemoteUpdate = false;
          render();

          if (state.lastUpdatedBy !== deviceId) {
            alertNewCompletions(previous.tasks, state.tasks);
          }
        }
      )
      .subscribe((status) => {
        remoteReady = status === "SUBSCRIBED";
        setSyncStatus(remoteReady ? "Live sync on" : "Connecting...");
      });
  } catch (error) {
    console.warn("Supabase realtime sync unavailable", error);
    setSyncStatus("Local fallback");
  }
}

function mergeRemoteState(remoteState) {
  return {
    ...initialState(),
    ...remoteState,
    tasks: mergeTasks(APP_CONFIG.tasks, remoteState.tasks || []),
    days: APP_CONFIG.days,
    pets: APP_CONFIG.pets,
    contacts: APP_CONFIG.contacts,
    home: APP_CONFIG.home
  };
}

function firebasePublicConfig() {
  return {
    apiKey: FIREBASE_CONFIG.apiKey,
    authDomain: FIREBASE_CONFIG.authDomain,
    projectId: FIREBASE_CONFIG.projectId,
    storageBucket: FIREBASE_CONFIG.storageBucket,
    messagingSenderId: FIREBASE_CONFIG.messagingSenderId,
    appId: FIREBASE_CONFIG.appId
  };
}

function render() {
  document.getElementById("appTitle").textContent = state.householdName;
  document.getElementById("dateRange").textContent = state.dateRange;
  document.getElementById("tripLabel").textContent = `${state.tripLabel} for ${state.householdName}`;
  document.getElementById("calendarTitle").textContent = state.calendarTitle;
  document.getElementById("ownerNote").textContent = state.ownerNote;

  renderRole();
  renderDayTabs();
  renderTasks();
  renderCalendar();
  renderProfiles();
  renderContacts();
}

function renderRole() {
  document.querySelectorAll(".role-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === state.role);
  });
}

function renderDayTabs() {
  const container = document.getElementById("dayTabs");
  container.innerHTML = "";

  state.days.forEach((day) => {
    const button = document.createElement("button");
    button.className = `day-tab${day.id === state.selectedDay ? " active" : ""}`;
    button.type = "button";
    button.textContent = day.label;
    button.addEventListener("click", () => {
      state.selectedDay = day.id;
      saveState();
      renderDayTabs();
      renderTasks();
    });
    container.append(button);
  });
}

function renderTasks() {
  const groups = ["Morning", "Afternoon", "Evening"];
  const visibleTasks = state.tasks.filter((task) => task.day === state.selectedDay);
  const container = document.getElementById("taskGroups");
  container.innerHTML = "";

  groups.forEach((group) => {
    const tasks = visibleTasks.filter((task) => task.period === group);
    if (!tasks.length) return;

    const section = document.createElement("article");
    section.className = "task-group";
    section.innerHTML = `<h3>${group}</h3>`;

    tasks.forEach((task) => {
      const row = document.createElement("button");
      row.className = `task-row${task.complete ? " complete" : ""}`;
      row.type = "button";
      row.setAttribute("aria-pressed", String(task.complete));
      row.innerHTML = `
        <span class="check" aria-hidden="true">x</span>
        <span class="task-copy">
          <strong>${task.title}${task.priority ? '<span class="priority">Priority</span>' : ""}</strong>
          <span>${task.detail}</span>
          ${task.complete ? `<small>Completed ${formatCompleted(task)}</small>` : ""}
        </span>
        <span class="task-meta">${task.time}</span>
      `;
      row.addEventListener("click", () => toggleTask(task.id));
      section.append(row);
    });

    container.append(section);
  });

  const completeCount = visibleTasks.filter((task) => task.complete).length;
  const percent = visibleTasks.length ? Math.round((completeCount / visibleTasks.length) * 100) : 0;
  const degrees = Math.round((percent / 100) * 360);
  const ring = document.getElementById("progressRing");
  ring.style.background = `conic-gradient(var(--accent) ${degrees}deg, var(--line) ${degrees}deg)`;
  document.getElementById("progressText").textContent = `${percent}%`;
}

function toggleTask(id) {
  const actor = state.role === "sitter" ? state.sitterName : state.ownerNames;
  state.tasks = state.tasks.map((task) => {
    if (task.id !== id) return task;

    const complete = !task.complete;
    return {
      ...task,
      complete,
      completedBy: complete ? actor : "",
      completedAt: complete ? new Date().toISOString() : ""
    };
  });

  saveState();
  renderTasks();
}

function formatCompleted(task) {
  if (!task.completedAt) return "";

  const time = new Date(task.completedAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
  return `by ${task.completedBy || "sitter"} at ${time}`;
}

function renderCalendar() {
  const planner = document.getElementById("plannerList");
  planner.innerHTML = "";

  state.days.forEach((day) => {
    const dayTasks = state.tasks.filter((task) => task.day === day.id);
    const completeCount = dayTasks.filter((task) => task.complete).length;
    const row = document.createElement("button");
    row.type = "button";
    row.className = `planner-item${day.id === state.selectedDay ? " active" : ""}`;
    row.innerHTML = `
      <strong>${day.label}</strong>
      <span>${completeCount} of ${dayTasks.length} tasks completed</span>
    `;
    row.addEventListener("click", () => {
      state.selectedDay = day.id;
      saveState();
      showView("todayView");
      render();
    });
    planner.append(row);
  });
}

function renderProfiles() {
  const grid = document.getElementById("profileGrid");
  grid.innerHTML = "";

  state.pets.forEach((pet) => {
    const card = document.createElement("article");
    card.className = "pet-card";
    const imageStyle = pet.photo
      ? `background-image: url('${pet.photo}')`
      : `--pet-bg: ${pet.bg}`;
    card.innerHTML = `
      <div class="pet-hero">
        <div class="pet-image${pet.photo ? " has-photo" : ""}" style="${imageStyle}" aria-hidden="true"></div>
        <div>
          <h3>${pet.name}</h3>
          <p>${pet.type}</p>
          <p>${pet.note}</p>
        </div>
      </div>
      <div class="tag-list">
        ${pet.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    `;
    grid.append(card);
  });

  const details = document.getElementById("homeDetails");
  details.innerHTML = "";
  Object.entries(state.home).forEach(([term, value]) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<dt>${term}</dt><dd>${value}</dd>`;
    details.append(wrapper);
  });
}

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  state.contacts.forEach((contact) => {
    const link = document.createElement("a");
    link.className = "contact-row";
    link.href = `tel:${contact.phone}`;
    link.innerHTML = `
      <span>
        <strong>${contact.name}</strong>
        <span>${contact.label}</span>
      </span>
      <span class="call-pill">Call</span>
    `;
    list.append(link);
  });
}

function alertNewCompletions(previousTasks, incomingTasks) {
  incomingTasks
    .filter((task) => task.complete)
    .filter((task) => !previousTasks.find((oldTask) => oldTask.id === task.id)?.complete)
    .filter((task) => !lastAlertedCompletions.has(task.id))
    .forEach((task) => {
      lastAlertedCompletions.add(task.id);
      const message = `${task.title} was completed by ${task.completedBy || state.sitterName}.`;
      showToast(message);
      showBrowserNotification(message);
    });
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.getElementById("toastStack").append(toast);
  window.setTimeout(() => toast.remove(), 5200);
}

function showBrowserNotification(message) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  new Notification("Pet Watcher", { body: message });
}

function setSyncStatus(label) {
  const status = document.getElementById("syncStatus");
  status.textContent = label;
  status.classList.toggle("live", remoteReady);
}

function showView(viewId) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

document.querySelectorAll(".role-option").forEach((button) => {
  button.addEventListener("click", () => {
    state.role = button.dataset.role;
    saveState();
    renderRole();
  });
});

document.getElementById("syncButton").addEventListener("click", () => {
  saveState();
  render();
  showToast(remoteReady ? "Live data refreshed." : "Local data refreshed.");
});

document.getElementById("notificationButton").addEventListener("click", async () => {
  if (!("Notification" in window)) {
    showToast("This browser does not support notifications.");
    return;
  }

  const result = await Notification.requestPermission();
  showToast(result === "granted" ? "Completion alerts are on." : "Completion alerts are off.");
});

if (channel) {
  channel.addEventListener("message", (event) => {
    const previous = state;
    state = event.data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    render();

    if (state.lastUpdatedBy !== deviceId) {
      alertNewCompletions(previous.tasks, state.tasks);
    }
  });
}

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY && event.newValue) {
    const previous = state;
    state = JSON.parse(event.newValue);
    render();

    if (state.lastUpdatedBy !== deviceId) {
      alertNewCompletions(previous.tasks, state.tasks);
    }
  }
});
