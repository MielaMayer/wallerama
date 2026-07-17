// ============================================================================
// Wallerama Summer Fest — all editable text lives here.
// To tweak wording, edit the strings below (or use in-browser Admin Edit mode).
// Design by Preeti Iyer; recreated as a living webpage.
// ============================================================================

export const links = {
  partiful: "https://partiful.com/e/Th4yTi5bFaxb8zml9V3Q",
  whatsapp: "https://chat.whatsapp.com/FBCcmWDPU76Baxe4HzQTAo",
  ridesGearSheet:
    "https://docs.google.com/spreadsheets/d/1FrfW1llJnogz0Ki2t4KZtLuRPZUdtjRyCmk_gnrSJLI/edit?gid=861965859#gid=861965859",
  contributeForm: "https://mielz.notion.site/f3662f6205f54a45877408d969dad295?pvs=105",
  scheduleSheet: "https://docs.google.com/spreadsheets/d/1FrfW1llJnogz0Ki2t4KZtLuRPZUdtjRyCmk_gnrSJLI/edit?usp=drivesdk",
  venue: "https://www.gatewaymendocino.com/gallery",
  venmo: "https://venmo.com/u/Miela-Mayer",
  podcastDrive: "https://drive.google.com/file/d/1r33UGSxWb7MZi9Ps6nJBXY0c4ECIboQm/view?usp=sharing",
};

export const expect = {
  heading: "What to Expect",
  body:
    "We are celebrating a number of birthdays and all of our creative and wonderful friends (that's YOU!). Expect Lake vibes, Yoga and Art workshops/stations, open music jam sessions, ceremonies, dancing, DJ sets, World Cup viewing, and playful meandering. Got something you'd like to host, lead, organize, do? Let us know. Your ridiculous ideas are our fuel, and what this whole thing is set up to enable.",
  themes: [
    { day: "Friday", theme: "Western", icon: "🤠" },
    { day: "Saturday", theme: "Disco", icon: "🪩" },
    { day: "Sunday", theme: "World Cup", icon: "⚽" },
  ],
  birthdays: "🎂 bdays being celebrated this fine weekend: Preeti Iyer • Timour Kosters • Cedric Whitney • Jono Kline • Miela Mayer :)",
};

export type Slot = { time: string; title: string; color: string; note?: string };

export const lineupNote =
  "The below lineup is a general idea. A detailed lineup will be posted at the event.";

export const lineup: { day: string; slots: Slot[] }[] = [
  {
    day: "Friday",
    slots: [
      { time: "1:00 PM", title: "Early arrivals — set up camp & get settled in (all help welcome!)", color: "purple" },
      { time: "4:00 PM", title: "Opening — pre-dinner drinks on the lawn", color: "purple" },
      { time: "7:00 PM", title: "Dinner", color: "tan" },
      { time: "9:00 PM", title: "Opening Circle", color: "gold" },
      { time: "10:00 PM", title: "Line Dance Yeeeeehaw", color: "purple" },
      { time: "12:00 AM", title: "DJ sets", color: "purple" },
    ],
  },
  {
    day: "Saturday",
    slots: [
      { time: "10:00 AM", title: "Brunch", color: "tan" },
      { time: "1:00 – 5:30 PM", title: "Field Day Activities + Birthday games", color: "olive", note: "runs long & spills into Floatchella" },
      { time: "1:00 – 3:00 PM", title: "Art, Yoga & Acro workshops · Open Jam Sessions", color: "sky" },
      { time: "5:00 PM", title: "FLOATCHELLA (lake DJ set)", color: "sky" },
      { time: "6:30 PM", title: "Dinner", color: "tan" },
      { time: "10:00 PM", title: "Live Music Performances", color: "purple" },
      { time: "11:00 PM", title: "Persian Fire Ceremony", color: "rust" },
      { time: "12:00 AM", title: "DJ Sets", color: "purple" },
    ],
  },
  {
    day: "Sunday",
    slots: [
      { time: "11:00 AM", title: "Brunch", color: "tan" },
      { time: "1:00 PM", title: "World Cup Finals Viewing Party", color: "gold" },
      { time: "3:30 PM", title: "Closing Circle", color: "gold" },
      { time: "Afternoon", title: "Clean Up & pack out", color: "tan" },
    ],
  },
];

export type Group = { heading: string; icon: string; items: string[] };

export const bring: Group[] = [
  {
    heading: "Clothing",
    icon: "👢",
    items: [
      "If you're looking for clothing inspo: the themes are Friday: Western, Saturday: Disco, Sunday: World Cup",
      "It's going to be hot. Be ready for the sun/heat and bring a bathing suit for the lake.",
    ],
  },
  {
    heading: "Camping",
    icon: "⛺",
    items: [
      "Be ready to camp! There is shade from the sun you can set your tent under, but bring any sun shade you can.",
      "There are showers on site that can be used.",
      "Reach out if you need help with gear or don't know what to bring.",
    ],
  },
  {
    heading: "Fun",
    icon: "🦩",
    items: [
      "Floaties for the lake, lawn games",
      "Art supplies",
      "Instruments for jam sessions",
      "There will be some alcohol provided but please bring whatever specifics you want",
      "Hammocks",
    ],
  },
  {
    heading: "Helpful / Communal",
    icon: "🏮",
    items: [
      "Extra EZ-UPs",
      "Rugs",
      "Bean bags, floor cushions, big comfy poofy fluffy",
      "Ambiance (drapes, vibey lighting, etc.)",
      "Hammocks",
    ],
  },
  {
    heading: "Food",
    icon: "🍴",
    items: [
      "If you are not buying into the catered food for the weekend ($40) then please bring food or plan to get food nearby.",
      "There is a kitchen and refrigerator space.",
      "Venmo $40 to @Miela-Mayer to join the food program.",
    ],
  },
];

export const foodProgram = {
  price: "$40",
  venmo: "@Miela-Mayer",
  blurb: "to join the food program",
};

// Reminders can contain link tokens: {sheet} {whatsapp} {partiful} {form} {venmo}
export const reminders: string[] = [
  "ASAP: Venmo $60 for your ticket and $40 if you are buying into the food catering to {venmo}. $$ should never be the reason ya don't come — if it's tight just reach out and we'll sort it.",
  "Please update your {partiful} attendance if your status has changed.",
  "{sheet} for coordinating rides and gear.",
  "Join the {whatsapp} for weekend coordination.",
  "Think up & reach out with any activities, games, ideas, or performances you'd like to do/lead — {form}.",
];

export const eventMeta = {
  title: "Wallerama Summer Fest 2026",
  dates: "July 17–19",
  window: "Friday, July 17, 5:00 PM – Sunday, July 19, 4:00 PM",
  venue: "Gateway Mendocino",
  address: "13771 US-101, Hopland, CA",
};
