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
  tripId: "leone-weekend-trip"
};

window.PASSCODE_CONFIG = {
  enabled: true,
  ownerPasscode: "ownerrocket",
  sitterPasscode: "rocketlola",
  rememberDevice: true
};
window.APP_CONFIG = {
  householdName: "Leone House",
  tripLabel: "Weekend away",
  dateRange: "Short weekend",
  calendarTitle: "Weekend Plan",
  ownerNames: "Jay and family",
  sitterName: "Neighbor",
  ownerNote:
    "Thanks again for watching everyone. The dogs have a dog door, so no walks or potty checks are needed. The main thing is food twice a day and fresh water.",
  days: [
    { id: "friday", label: "Friday", active: true },
    { id: "saturday", label: "Saturday", active: true },
    { id: "sunday", label: "Sunday", active: true }
  ],
  tasks: [
    {
      id: "fri-dogs-dinner",
      day: "friday",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office next to Rocket's bowl.",
      priority: true,
      complete: false
    },
    {
      id: "fri-water",
      day: "friday",
      period: "Evening",
      time: "Evening",
      title: "Quick water check",
      detail: "Make sure the dog water in my office is full and clean.",
      priority: false,
      complete: false
    },
    {
      id: "sat-dogs-breakfast",
      day: "saturday",
      period: "Morning",
      time: "Morning",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "sat-queso-roaches",
      day: "saturday",
      period: "Morning",
      time: "Morning",
      title: "Feed Queso",
      detail: "Give Queso the bearded dragon about 6 roaches when you feed the dogs. He already had fresh vegetables Friday.",
      priority: true,
      complete: false
    },
    {
      id: "sat-dogs-dinner",
      day: "saturday",
      period: "Evening",
      time: "Evening",
      title: "Feed Rocket and Lola",
      detail: "No exact time needed. Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office.",
      priority: true,
      complete: false
    },
    {
      id: "sun-dogs-breakfast",
      day: "sunday",
      period: "Morning",
      time: "Morning",
      title: "Feed Rocket and Lola",
      detail: "Rocket gets one full scoop from his food bin. Lola gets one scoop from the dog food jar in the kitchen. Freshen the water in my office next to Rocket's bowl.",
      priority: true,
      complete: false
    },
    {
      id: "sun-water-final",
      day: "sunday",
      period: "Afternoon",
      time: "Before leaving",
      title: "Final water check",
      detail: "Make sure the dog water is clean and full. Tater Tot does not need anything this weekend.",
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
      type: "3 year old pug",
      note: "Has access to the dog door. No walks or potty checks needed. Feed one scoop from the dog food jar in the kitchen. Please keep an eye out in case she pees or poops in the house, and clean it up if you spot anything.",
      tags: ["3 years old", "One scoop", "Kitchen food jar", "Watch for accidents"],
      photo: "assets/lola.jpg",
      bg: "linear-gradient(135deg, #d6b18a, #7f5f48)"
    },
    {
      name: "Tater Tot",
      type: "Axolotl",
      note: "Does not need anything this weekend. She will be fed before the family leaves.",
      tags: ["No weekend care", "Already fed", "Axolotl"],
      photo: "assets/tater-tot.jpg",
      bg: "linear-gradient(135deg, #f5c6d6, #8fc7d7)"
    },
    {
      name: "Queso",
      type: "Bearded dragon",
      note: "Fresh vegetables and Friday feeding will be handled before the family leaves. On Saturday morning, give him about 6 roaches when feeding the dogs.",
      tags: ["Saturday only", "About 6 roaches", "Fresh vegetables Friday"],
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
