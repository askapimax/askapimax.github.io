import rss from "@astrojs/rss";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: "Max Digital Garden",
    description: "A personal blog about ideas, projects, and digital trails.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`
    }))
  });
}
