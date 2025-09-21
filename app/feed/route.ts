import RSS from "rss";
import { getPosts, postToUrl } from "../blog/mdx-helpers";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getPosts();
  const rss = new RSS({
    title: "Sawyer Hollenshead",
    feed_url: "https://sawyer.soy/feed",
    site_url: "https://sawyer.soy",
  });

  posts.forEach((post) => {
    rss.item({
      title: post.title,
      description: post.excerpt,
      url: `https://sawyer.soy${postToUrl(post)}`,
      guid: post.slug,
      date: post.published_at,
    });
  });

  return new Response(rss.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
