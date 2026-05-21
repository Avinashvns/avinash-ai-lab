/**
 * Sidebar navigation config (data-only).
 * Phase 1: ML populated from components/Sidebar.jsx.
 * Phase 2+: wire Sidebar.jsx to render from this config.
 */

/** @typedef {'route' | 'hash'} SidebarLinkKind */

/**
 * @typedef {Object} SidebarLink
 * @property {string} label
 * @property {string} href
 * @property {SidebarLinkKind} [kind] - inferred in Phase 2 if omitted (href starting with # → hash)
 */

/**
 * @typedef {Object} SidebarPageNav
 * @property {string} title - shown in inner sidebar heading
 * @property {'inner'} [variant] - maps to .inner-sidebar in Sidebar.jsx (Phase 2)
 * @property {SidebarLink[]} links
 */

/**
 * @typedef {Object} SidebarSectionConfig
 * @property {string} id - matches Sidebar `type` prop (e.g. "ml")
 * @property {string} title - section heading (sidebar-title)
 * @property {string} basePath - route prefix for this section
 * @property {string} hubPath - exact pathname where topic links are shown
 * @property {SidebarLink[]} topics - hub-level links (sidebar-links)
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

  // Phase 2+ — same shape; topics/pages filled when sections are built
  [SIDEBAR_TYPES.DSA]: {
    id: SIDEBAR_TYPES.DSA,
    title: "📊 Data Structures & Algorithms",
    basePath: "/dsa",
    hubPath: "/dsa",
    topics: [
      {
        label: "📋 Arrays",
        href: "/dsa/arrays",
        kind: "route",
      },
      {
        label: "🔗 Linked List",
        href: "/dsa/linked-list",
        kind: "route",
      },
      {
        label: "📚 Stack",
        href: "/dsa/stack",
        kind: "route",
      },
      {
        label: "🚶 Queue",
        href: "/dsa/queue",
        kind: "route",
      },
      {
        label: "🌳 Trees",
        href: "/dsa/trees",
        kind: "route",
      },
      {
        label: "🕸️ Graphs",
        href: "/dsa/graphs",
        kind: "route",
      },
      {
        label: "⚡ Dynamic Programming",
        href: "/dsa/dynamic-programming",
        kind: "route",
      },
    ],
    pages: {},
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
