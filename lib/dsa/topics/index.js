import { arraysAndStrings } from "./arrays-and-strings.js";

const lessonSidebarLinks = [

  {
    label: "What?",
    href: "#what",
    kind: "hash",
  },

  {
    label: "Why?",
    href: "#why",
    kind: "hash",
  },

  {
    label: "Visualization",
    href: "#visualize",
    kind: "hash",
  },

  {
    label: "Working",
    href: "#working",
    kind: "hash",
  },

  {
    label: "Complexity",
    href: "#complexity",
    kind: "hash",
  },

  {
    label: "Dry Run",
    href: "#dry-run",
    kind: "hash",
  },

  {
    label: "Optimize",
    href: "#optimize",
    kind: "hash",
  },

  {
    label: "Patterns",
    href: "#patterns",
    kind: "hash",
  },

  {
    label: "Practice",
    href: "#practice",
    kind: "hash",
  },

];

/** @type {Record<string, typeof arraysAndStrings>} */
export const dsaTopicsBySlug = {
  "arrays-and-strings": arraysAndStrings,
};

export const dsaTopicSlugs = Object.keys(dsaTopicsBySlug);

/**
 * @param {string} slug
 */
export function getTopicBySlug(slug) {
  return dsaTopicsBySlug[slug] ?? null;
}

/** Sidebar inner-nav entries for implemented topic routes */
export function getDsaSidebarPages() {
  const categoryPages = Object.fromEntries(
    Object.values(dsaTopicsBySlug).map((topic) => [
      `/dsa/${topic.slug}`,
      {
        title: `${topic.icon} ${topic.title}`,
        variant: "inner",
        links: topic.sidebarAnchors.map((link) => ({
          ...link,
          kind: "hash",
        })),
      },
    ])
  );

  return {
    ...categoryPages,
    // "/dsa/arrays-and-strings/basic-array": {
    //   title: "📘 Basic Array",
    //   variant: "inner",
    //   links: [
    //     { label: "What?", href: "#what", kind: "hash" },
    //     { label: "Why?", href: "#why", kind: "hash" },
    //     { label: "Visualization", href: "#visualize", kind: "hash" },
    //     { label: "Working", href: "#working", kind: "hash" },
    //     { label: "Complexity", href: "#complexity", kind: "hash" },
    //     { label: "Dry Run", href: "#dry-run", kind: "hash" },
    //     { label: "Optimize", href: "#optimize", kind: "hash" },
    //     { label: "Patterns", href: "#patterns", kind: "hash" },
    //     { label: "Practice", href: "#practice", kind: "hash" },
    //   ],
    // },

     /* ============================================= */
    /* ARRAYS & STRINGS LESSONS */
    /* ============================================= */

    "/dsa/arrays-and-strings/basic-array": {

      title: "📘 Basic Array",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/array-operations": {

      title: "⚡ Array Operations",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/reverse-array": {

      title: "🔄 Reverse Array",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/prefix-sum": {

      title: "➕ Prefix Sum",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/sliding-window": {

      title: "🪟 Sliding Window",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/kadane-basics": {

      title: "🔥 Kadane Basics",

      variant: "inner",

      links: lessonSidebarLinks,

    },

    "/dsa/arrays-and-strings/string": {

      title: "🔤 String",

      variant: "inner",

      links: lessonSidebarLinks,

    },
    
  };
}
