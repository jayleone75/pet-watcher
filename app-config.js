window.FIREBASE_CONFIG = {
  enabled: false,
  tripId: "leone-weekend-trip",
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

window.SUPABASE_CONFIG = {
  enabled: true,
  url: "https://iulejldfhvzyqlijvxka.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1bGVqbGRmaHZ6eXFsaWp2eGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MDMxNjEsImV4cCI6MjA5NjE3OTE2MX0.OE-J--0Dfo-YD9klQbaY-4Kv_zLTIAhd8wNbFn9pEAU",
  tableName: "pet_watcher_trips",
  tripId: "leone-july-2026-trip"
};

window.PASSCODE_CONFIG = {
  enabled: true,
  ownerPasscode: "ownerrocket",
  sitterPasscode: "rocketlola",
  rememberDevice: true
};
window.APP_CONFIG = {
  householdName: "Leone House",
  tripLabel: "July vacation",
  dateRange: "Sat, Jul 18 - Sat, Jul 25",
  calendarTitle: "July 18-25 Plan",
  ownerNames: "Jay and family",
  sitterName: "Neighbor",
  ownerNote:
    "Thanks again for watching everyone. We are away Saturday July 18 through Saturday July 25. Care starts the evening of the 18th and runs through the evening of the 25th. The dogs have a dog door, so no walks or potty checks are needed. The main thing is food twice a day and fresh water.",
  days: [
    { id: "jul-18", label: "Sat 18", active: true },
    { id: "jul-19", label: "Sun 19", active: true },
    { id: "jul-20", label: "Mon 20", active: true },
    { id: "jul-21", label: "Tue 21", active: true },
    { id: "jul-22", label: "Wed 22", active: true },
    { id: "jul-23", label: "Thu 23", active: true },
    { id: "jul-24", label: "Fri 24", active: true },
    { id: "jul-25", label: "Sat 25", active: true }
  ],
  tasks: [
    {
      id: "jul18-dogs-dinner",
      day: "jul-18",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "First feeding of the trip. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office next to Rocket's bowl.",
      priority: true,
      complete: false
    },
    {
      id: "jul18-water",
      day: "jul-18",
      period: "Evening",
      time: "Evening",
      title: "Quick water check",
      detail: "Make sure the dog water in my office is full and clean.",
      priority: false,
      complete: false
    },
    {
      id: "jul19-dogs-breakfast",
      day: "jul-19",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul19-queso-feeding",
      day: "jul-19",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul19-queso-cage",
      day: "jul-19",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul19-dogs-dinner",
      day: "jul-19",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul20-dogs-breakfast",
      day: "jul-20",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul20-queso-feeding",
      day: "jul-20",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul20-queso-cage",
      day: "jul-20",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul20-tater-worm",
      day: "jul-20",
      period: "Morning",
      time: "Anytime",
      title: "Feed Tater Tot red worms",
      detail: "Give her 3 to 4 red worms - only the ones in the small round cup, that is the only food she is eating reliably right now. Grab each worm with the tweezers, rinse off any dirt, and try to float it in front of her face. It is OK if she does not eat right away - just leave them in the tank.",
      priority: true,
      complete: false
    },
    {
      id: "jul20-dogs-dinner",
      day: "jul-20",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul21-dogs-breakfast",
      day: "jul-21",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul21-queso-feeding",
      day: "jul-21",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul21-queso-cage",
      day: "jul-21",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul21-tater-worm-check",
      day: "jul-21",
      period: "Morning",
      time: "Anytime",
      title: "Check Tater Tot's tank",
      detail: "If you still see any of Monday's worms floating around in the tank, please remove them.",
      priority: false,
      complete: false
    },
    {
      id: "jul21-dogs-dinner",
      day: "jul-21",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul22-dogs-breakfast",
      day: "jul-22",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul22-queso-feeding",
      day: "jul-22",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul22-queso-cage",
      day: "jul-22",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul22-dogs-dinner",
      day: "jul-22",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul23-dogs-breakfast",
      day: "jul-23",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul23-queso-feeding",
      day: "jul-23",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul23-queso-cage",
      day: "jul-23",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul23-tater-worm",
      day: "jul-23",
      period: "Morning",
      time: "Anytime",
      title: "Feed Tater Tot red worms",
      detail: "Second feeding. Give her 3 to 4 red worms - only the ones in the small round cup, that is the only food she is eating reliably right now. Grab each worm with the tweezers, rinse off any dirt, and try to float it in front of her face. It is OK if she does not eat right away - just leave them in the tank.",
      priority: true,
      complete: false
    },
    {
      id: "jul23-dogs-dinner",
      day: "jul-23",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul24-dogs-breakfast",
      day: "jul-24",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul24-queso-feeding",
      day: "jul-24",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul24-queso-cage",
      day: "jul-24",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul24-tater-worm-check",
      day: "jul-24",
      period: "Morning",
      time: "Anytime",
      title: "Check Tater Tot's tank",
      detail: "If you still see any of Thursday's worms floating around in the tank, please remove them.",
      priority: false,
      complete: false
    },
    {
      id: "jul24-dogs-dinner",
      day: "jul-24",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul25-dogs-breakfast",
      day: "jul-25",
      period: "Morning",
      time: "After 7 AM",
      title: "Feed Rocket and Lola",
      detail: "Any time after 7:00 AM - they are fine waiting. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul25-queso-feeding",
      day: "jul-25",
      period: "Morning",
      time: "With the dogs",
      title: "Feed Queso",
      detail: "Give Queso a small handful of the cut-up vegetables and berries from the fridge (take out the old ones) plus 5 to 6 roaches or superworms. Feed him with or around the dogs, any time after 7:00 AM, so his basking light is on for the rest of the day after he eats. If the dogs get fed early, shift Queso to early evening instead - no later than about 6:00 PM, so he can bask a couple of hours before his light turns off at 8:00 PM. A separate trip is fine if that fits your schedule better.",
      priority: true,
      complete: false
    },
    {
      id: "jul25-queso-cage",
      day: "jul-25",
      period: "Morning",
      time: "Morning",
      title: "Check Queso's cage",
      detail: "Check the tank for poop. If you find any, doggy bags are next to the tank - take it out along with a handful of the sand around it. Does not have to be perfect.",
      priority: false,
      complete: false
    },
    {
      id: "jul25-dogs-dinner",
      day: "jul-25",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "Last feeding of the trip. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "jul25-water-final",
      day: "jul-25",
      period: "Evening",
      time: "Evening",
      title: "Final water check",
      detail: "Make sure the dog water is clean and full before you head out.",
      priority: false,
      complete: false
    }
  ],
  pets: [
    {
      name: "Rocket",
      type: "8 year old black and white Staffordshire Terrier",
      note: "Has access to the dog door. No walks or potty checks needed. Feed one full scoop from Rocket's food bin and keep the water fresh in the office next to his bowl.",
      tags: ["8 years old", "One full scoop", "Dog door", "Water in office"],
      photo: "assets/rocket.jpg",
      bg: "linear-gradient(135deg, #4d6f63, #b7c7a3)"
    },
    {
      name: "Lola",
      type: "4 year old pug",
      note: "Has access to the dog door. No walks or potty checks needed. Feed one scoop from the dog food jar in the kitchen. Please keep an eye out in case she pees or poops in the house, and clean it up if you spot anything.",
      tags: ["4 years old", "One scoop", "Kitchen food jar", "Watch for accidents"],
      photo: "assets/lola.jpg",
      bg: "linear-gradient(135deg, #d6b18a, #7f5f48)"
    },
    {
      name: "Tater Tot",
      type: "Axolotl",
      note: "Only needs food a couple of times during the trip - Monday and Thursday. Give her 3 to 4 red worms, only the ones in the small round cup - that is the only food she is eating reliably right now. Grab each worm with the tweezers, rinse off any dirt, and try to float it in front of her face. It is OK if she does not eat right away, but if worms are still floating in the tank the next day, please remove them.",
      tags: ["Red worms only", "3-4 worms Mon and Thu", "Small round cup", "Remove uneaten next day"],
      photo: "assets/tater-tot.jpg",
      bg: "linear-gradient(135deg, #f5c6d6, #8fc7d7)"
    },
    {
      name: "Queso",
      type: "Bearded dragon",
      note: "One feeding a day: a small handful of the cut-up vegetables and berries from the fridge (remove the old ones) plus 5 to 6 roaches or superworms. Best done with the dogs' feeding, any time after 7:00 AM, so his basking light is on the rest of the day. If the dogs get fed early, feed Queso in the early evening instead - no later than about 6:00 PM (his light turns off at 8:00 PM). A separate trip is fine too. Check the tank for poop - doggy bags are next to the tank; take it out with a handful of the surrounding sand, no need to be perfect. Heat lamp and lights are automatic. If a bulb burns out, just let Jay know and we can swap in a new one.",
      tags: ["One feeding daily", "After 7 AM with dogs", "By 6 PM if evening", "Scoop poop"],
      photo: "assets/queso.jpg",
      bg: "linear-gradient(135deg, #d8b052, #8c9b4a)"
    }
  ],
  home: {
    "Wi-Fi": "Add guest network and password",
    "Entry": "Add key, garage, or door code instructions",
    "Trash": "Add pickup day if relevant",
    "House notes": "Add lights, thermostat, doors, plants, mail, or anything else"
  },
  contacts: [
    { name: "Jay", label: "Primary contact", phone: "+15550101420" },
    { name: "Family contact", label: "Backup contact", phone: "+15550101421" },
    { name: "Veterinarian", label: "Primary vet", phone: "+15550101888" },
    { name: "Emergency pet hospital", label: "After-hours care", phone: "+15550101999" }
  ]
};
