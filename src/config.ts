/**
 * Site-wide configuration: links, copy shared between pages and the page list used for the sitemap.
 * Chapters, glossary and topics are copied from the app's assets/content folder.
 */
import chapterData from "./data/chapters.json";
import glossary from "./data/glossary.json";
import topics from "./data/topics.json";
export { glossary, topics };
export const parts = chapterData.parts;
export const chapters = chapterData.chapters;

/** Absolute site details used for links, canonical URLs and structured data. */
const GITHUB = "https://github.com/vishesh0x/gitaverse";
export const SITE = {
  name: "GitaVerse",
  url: "https://gitaverse.visheshraghuvanshi.in",
  desc: "An offline, ad-free Bhagavad Gita reader for Android. Sanskrit, transliteration, Hindi and English, with word-by-word meanings and your own notes.",
  play: "https://play.google.com/store/apps/details?id=in.visheshraghuvanshi.gitaverse",
  source: GITHUB,
  release: GITHUB + "/releases/latest",
  gitaText: "https://github.com/gita/gita",
  mail: "mail@visheshraghuvanshi.in",
  author: "Vishesh Raghuvanshi",
  version: "2.0.1",
  updated: "2026-11-05",
};

/** Indexable pages. The sitemap and breadcrumbs are generated from this list. */
export const PAGES = [
  { path: "/", name: "Home", priority: 1, freq: "monthly" },
  { path: "/features", name: "Features", priority: 0.8, freq: "monthly" },
  { path: "/chapters", name: "Chapters", priority: 0.8, freq: "yearly" },
  {
    path: "/credits",
    name: "Credits and licences",
    priority: 0.4,
    freq: "yearly",
  },
  { path: "/privacy", name: "Privacy policy", priority: 0.5, freq: "yearly" },
  { path: "/terms", name: "Terms", priority: 0.3, freq: "yearly" },
];

/** Store listing images in public/shots with the caption used for each one's alt text. */
export const phone: [string, string][] = [
  ["01", "The Gita in your pocket"],
  ["02", "Every word, explained"],
  ["03", "A verse for every day"],
  ["04", "Find any verse in seconds"],
  ["05", "18 chapters, 700 verses"],
  ["06", "Build a daily reading habit"],
  ["07", "Three languages, one verse"],
  ["08", "Light or dark, your choice"],
];
export const tablet: [string, string][] = [
  ["01", "The Gita on every screen"],
  ["02", "Every word, explained"],
  ["03", "Sanskrit, Hindi and English"],
  ["04", "18 chapters, 700 verses"],
  ["05", "Search by verse, word or topic"],
  ["06", "Your pace, your reading"],
  ["07", "Light or dark, your choice"],
];

/** Verse 2.47 as shipped in the app's content files (Ved Vyas Foundation text, public domain). */
export const verse = {
  ref: "2.47",
  words: [
    ["कर्मणि", "in action", "कर्म में"],
    ["एव", "alone", "ही"],
    ["अधिकारः", "right", "अधिकार"],
    ["ते", "your", "तेरा"],
    ["मा", "never", "नहीं"],
    ["फलेषु", "in the fruits", "फलों में"],
    ["कदाचन", "ever", "कभी"],
    ["मा", "not", "मत"],
    ["कर्मफलहेतुः", "motivated by fruit of action", "कर्मफल का हेतु"],
    ["भूः", "be", "बन"],
    ["मा", "not", "न"],
    ["ते", "your", "तेरी"],
    ["सङ्गः", "attachment", "आसक्ति"],
    ["अस्तु", "let be", "हो"],
    ["अकर्मणि", "in inaction", "अकर्म में"],
  ],
  split: 7,
  translit: [
    "karmaṇy-evādhikāras te mā phaleṣhu kadāchana |",
    "mā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi ||",
  ],
  hindi:
    "कर्तव्य-कर्म करनेमें ही तेरा अधिकार है, फलोंमें कभी नहीं। अतः तू कर्मफलका हेतु भी मत बन और तेरी अकर्मण्यतामें भी आसक्ति न हो।",
  english:
    "Your right is only to work, but not to its results; do not let the results of action be your motive, nor let your attachment be to inaction.",
};

/** Feature copy shown on the home page (first two items per group) and on the Features page. */
export const groups: [string, [string, string][]][] = [
  [
    "Reading",
    [
      [
        "Four layers",
        "Sanskrit, transliteration, Hindi and English. Switch each one on or off to suit how you read.",
      ],
      [
        "Word by word",
        "Tap a word to see its meaning in English, Hindi or both. Glossary terms work the same way.",
      ],
      [
        "Reading mode",
        "Text size from 90% to 140%. Reopen the app and you are on the exact verse you left.",
      ],
      [
        "Takeaways",
        "Verses that have a key takeaway or a reflection prompt show them. None of the bundled verses have them yet.",
      ],
    ],
  ],
  [
    "Your own space",
    [
      [
        "Notes and saves",
        "Save any verse and write private notes on it. Export your notes as plain text through the share sheet.",
      ],
      [
        "A daily habit",
        "A reading goal, a streak counter and an optional reminder, plus a home-screen widget that shows both.",
      ],
      [
        "Backup and restore",
        "Back up saved verses and notes to a file and restore them on a new phone. A restore only adds, it never removes. No storage permission needed.",
      ],
      [
        "Verse of the day",
        "A shuffle through all verses, each once before any repeats. Limit it to featured verses if you like, or tap “Show another verse”.",
      ],
    ],
  ],
  [
    "Finding things",
    [
      [
        "Search",
        "Search verses, chapters and topics, or type a verse number such as 2.47 and jump straight there.",
      ],
      [
        "Saved search",
        "Search your saved verses, your notes and words on the Saved screen.",
      ],
      [
        "Glossary and topics",
        "Key Sanskrit terms in a glossary, and topic shortcuts on Home.",
      ],
    ],
  ],
  [
    "Made for the device",
    [
      [
        "Look",
        "Material 3 Expressive. Light, dark or system, an optional pure-black AMOLED theme, and either the GitaVerse palette or Material You colours.",
      ],
      [
        "Screens",
        "Phones, tablets and foldables, in portrait and landscape. On wide screens the chapter list sits beside the open chapter. Predictive back gestures.",
      ],
      [
        "Keyboard",
        "Every control works from the keyboard, with shortcuts for tabs, search and the reader.",
      ],
      [
        "Language",
        "The interface is in English or हिन्दी, chosen in the welcome tour or under Me, Appearance.",
      ],
    ],
  ],
];
