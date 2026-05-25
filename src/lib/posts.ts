import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}

export async function getAllTags() {
  const posts = await getPublishedPosts();
  const tags = new Set(posts.flatMap((post) => post.data.tags));

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}
