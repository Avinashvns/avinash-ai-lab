/**
 * Sidebar navigation config (data-only).
 * Phase 1: ML populated from components/Sidebar.jsx.
 * Phase 2+: wire Sidebar.jsx to render from this config.
 */

import { getDsaSidebarPages } from "./dsa/topics";

/** @typedef {'route' | 'hash'} SidebarLinkKind */

/**
 * @typedef {Object} SidebarLink
 * @property {string} label
 * @property {string} href
 * @property {string} [icon] - topic emoji prefix
 * @property {SidebarLinkKind} [kind] - inferred in Phase 2 if omitted (href starting with # → hash)
 */

/**
 * @typedef {Object} SidebarPageNav
 * @property {string} title - shown in inner sidebar heading
 * @property {'inner'} [variant] - maps to .inner-sidebar in Sidebar.jsx (Phase 2)
 * @property {SidebarLink[]} links
 */

/**
 * @typedef {Object} SidebarRoadmapPhase
 * @property {string} id - stable slug (e.g. "foundations")
 * @property {string} icon - phase emoji prefix
 * @property {string} label - phase heading (e.g. "Phase 1 — Foundations")
 * @property {SidebarLink[]} topics
 */

/**
 * @typedef {Object} SidebarSectionConfig
 * @property {string} id - matches Sidebar `type` prop (e.g. "ml")
 * @property {string} title - section heading (sidebar-title)
 * @property {string} basePath - route prefix for this section
 * @property {string} hubPath - exact pathname where topic links are shown
 * @property {SidebarLink[]} topics - flat hub links (sidebar-links; current renderer)
 * @property {SidebarRoadmapPhase[]} [roadmapPhases] - grouped roadmap (DSA hub renderer)
 * @property {Record<string, SidebarPageNav>} pages - pathname → detail / in-page nav
 */

/** Sidebar section ids — matches Sidebar `type` prop values */
export const SIDEBAR_TYPES = {
  ML: "ml",
  DSA: "dsa",
  DL: "dl",
  NLP: "nlp",
  GENAI: "genai",
};

/** @type {SidebarRoadmapPhase[]} */
const dsaRoadmapPhases = [
  {
    id: "foundations",
    icon: "🚀",
    label: "Phase 1 — Foundations",
    topics: [
      {
        icon: "📘",
        label: "Complexity Analysis",
        href: "/dsa/complexity-analysis",
        kind: "route",
      },
      {
        icon: "📘",
        label: "Arrays & Strings",
        href: "/dsa/arrays-and-strings",
        kind: "route",
      },
      {
        icon: "📘",
        label: "Hashing",
        href: "/dsa/hashing",
        kind: "route",
      },
      {
        icon: "📘",
        label: "Recursion & Backtracking",
        href: "/dsa/recursion-and-backtracking",
        kind: "route",
      },
    ],
  },
  {
    id: "linear-structures",
    icon: "⚡",
    label: "Phase 2 — Linear Data Structures",
    topics: [
      {
        icon: "📗",
        label: "Linked List",
        href: "/dsa/linked-list",
        kind: "route",
      },
      {
        icon: "📗",
        label: "Stack",
        href: "/dsa/stack",
        kind: "route",
      },
      {
        icon: "📗",
        label: "Queue",
        href: "/dsa/queue",
        kind: "route",
      },
      {
        icon: "📗",
        label: "Deque",
        href: "/dsa/deque",
        kind: "route",
      },
    ],
  },
  {
    id: "algorithms-basics",
    icon: "🧠",
    label: "Phase 3 — Algorithms Basics",
    topics: [
      {
        icon: "📙",
        label: "Sorting",
        href: "/dsa/sorting",
        kind: "route",
      },
      {
        icon: "📙",
        label: "Searching",
        href: "/dsa/searching",
        kind: "route",
      },
      {
        icon: "📙",
        label: "Bit Manipulation",
        href: "/dsa/bit-manipulation",
        kind: "route",
      },
    ],
  },
  {
    id: "trees",
    icon: "🌳",
    label: "Phase 4 — Trees",
    topics: [
      {
        icon: "🌲",
        label: "Trees",
        href: "/dsa/trees",
        kind: "route",
      },
      {
        icon: "🌲",
        label: "BST",
        href: "/dsa/bst",
        kind: "route",
      },
      {
        icon: "🌲",
        label: "Heap",
        href: "/dsa/heap",
        kind: "route",
      },
      {
        icon: "🌲",
        label: "Trie",
        href: "/dsa/trie",
        kind: "route",
      },
    ],
  },
  {
    id: "graphs-optimization",
    icon: "🌐",
    label: "Phase 5 — Graphs & Optimization",
    topics: [
      {
        icon: "🔷",
        label: "Graphs",
        href: "/dsa/graphs",
        kind: "route",
      },
      {
        icon: "🔷",
        label: "Greedy Algorithms",
        href: "/dsa/greedy-algorithms",
        kind: "route",
      },
      {
        icon: "🔷",
        label: "Dynamic Programming",
        href: "/dsa/dynamic-programming",
        kind: "route",
      },
    ],
  },
  {
    id: "advanced-dsa",
    icon: "🔥",
    label: "Phase 6 — Advanced DSA",
    topics: [
      {
        icon: "💎",
        label: "Segment Tree",
        href: "/dsa/segment-tree",
        kind: "route",
      },
      {
        icon: "💎",
        label: "Fenwick Tree",
        href: "/dsa/fenwick-tree",
        kind: "route",
      },
      {
        icon: "💎",
        label: "Disjoint Set Union",
        href: "/dsa/disjoint-set-union",
        kind: "route",
      },
      {
        icon: "💎",
        label: "Advanced Graph Algorithms",
        href: "/dsa/advanced-graph-algorithms",
        kind: "route",
      },
      {
        icon: "💎",
        label: "Advanced Dynamic Programming",
        href: "/dsa/advanced-dynamic-programming",
        kind: "route",
      },
      {
        icon: "💎",
        label: "String Algorithms",
        href: "/dsa/string-algorithms",
        kind: "route",
      },
    ],
  },
];

/** @type {Record<string, SidebarSectionConfig>} */
export const sidebarConfig = {
  [SIDEBAR_TYPES.ML]: {
    id: SIDEBAR_TYPES.ML,
    title: "🤖 Machine Learning",
    basePath: "/machine-learning",
    hubPath: "/machine-learning",
    topics: [
      {
        label: "📈 Linear Regression",
        href: "/machine-learning/linear-regression",
        kind: "route",
      },
      {
        label: "📊 Logistic Regression",
        href: "/machine-learning/logistic-regression",
        kind: "route",
      },
      {
        label: "📍 KNN",
        href: "/machine-learning/knn",
        kind: "route",
      },
      {
        label: "🎯 K-Means",
        href: "/machine-learning/kmeans",
        kind: "route",
      },
      {
        label: "🌳 Decision Tree",
        href: "/machine-learning/decision-tree",
        kind: "route",
      },
      {
        label: "🌲 Random Forest",
        href: "/machine-learning/random-forest",
        kind: "route",
      },
    ],
    pages: {
      "/machine-learning/linear-regression": {
        title: "📘 Linear Regression",
        variant: "inner",
        links: [
          { label: "Overview", href: "#overview", kind: "hash" },
          { label: "Mathematics", href: "#mathematics", kind: "hash" },
          { label: "Visualization", href: "#visualization", kind: "hash" },
          { label: "From Scratch", href: "#manual", kind: "hash" },
          { label: "Scikit Learn", href: "#sklearn", kind: "hash" },
          { label: "Applications", href: "#applications", kind: "hash" },
          { label: "Mini Project", href: "#project", kind: "hash" },
          { label: "Interview Questions", href: "#interview", kind: "hash" },
        ],
      },
    },
  },

  [SIDEBAR_TYPES.DSA]: {
    id: SIDEBAR_TYPES.DSA,
    title: "📊 Data Structures & Algorithms",
    basePath: "/dsa",
    hubPath: "/dsa",
    roadmapPhases: dsaRoadmapPhases,
    topics: dsaRoadmapPhases.flatMap((phase) => phase.topics),
    pages: getDsaSidebarPages(),
  },

  // Phase 3 — placeholder hub topics (routes TBD)
  [SIDEBAR_TYPES.DL]: {
    id: SIDEBAR_TYPES.DL,
    title: "🧠 Deep Learning",
    basePath: "/deep-learning",
    hubPath: "/deep-learning",
    topics: [
      {
        label: "🖼️ CNN",
        href: "/deep-learning/cnn",
        kind: "route",
      },
      {
        label: "🔁 RNN",
        href: "/deep-learning/rnn",
        kind: "route",
      },
      {
        label: "⚡ Transformers",
        href: "/deep-learning/transformers",
        kind: "route",
      },
      {
        label: "🧩 Autoencoders",
        href: "/deep-learning/autoencoders",
        kind: "route",
      },
    ],
    pages: {},
  },

  [SIDEBAR_TYPES.NLP]: {
    id: SIDEBAR_TYPES.NLP,
    title: "💬 NLP",
    basePath: "/nlp",
    hubPath: "/nlp",
    topics: [
      {
        label: "🔤 Tokenization",
        href: "/nlp/tokenization",
        kind: "route",
      },
      {
        label: "📚 Word Embeddings",
        href: "/nlp/word-embeddings",
        kind: "route",
      },
      {
        label: "🎯 Attention",
        href: "/nlp/attention",
        kind: "route",
      },
      {
        label: "🤖 BERT",
        href: "/nlp/bert",
        kind: "route",
      },
    ],
    pages: {},
  },

  [SIDEBAR_TYPES.GENAI]: {
    id: SIDEBAR_TYPES.GENAI,
    title: "✨ Generative AI",
    basePath: "/generative-ai",
    hubPath: "/generative-ai",
    topics: [
      {
        label: "💬 LLMs",
        href: "/generative-ai/llms",
        kind: "route",
      },
      {
        label: "✍️ Prompt Engineering",
        href: "/generative-ai/prompt-engineering",
        kind: "route",
      },
      {
        label: "🔍 RAG",
        href: "/generative-ai/rag",
        kind: "route",
      },
      {
        label: "🎨 Diffusion Models",
        href: "/generative-ai/diffusion-models",
        kind: "route",
      },
    ],
    pages: {},
  },
};

/**
 * Resolve section config by Sidebar `type` prop.
 * @param {string} type
 * @returns {SidebarSectionConfig | undefined}
 */
export function getSidebarConfig(type) {
  return sidebarConfig[type];
}
