import rss from "@astrojs/rss";
import { site } from "../site";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: `Blog · ${site.person}`,
    description: site.description,
    site: context.site,
    trailingSlash: false,
    customData: `<language>pt-BR</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
  });
}
