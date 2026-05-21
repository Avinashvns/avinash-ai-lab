import { arraysAndStrings } from "./arrays-and-strings";

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
  return Object.fromEntries(
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
}
