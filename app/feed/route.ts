import RSS from "rss";
import { getPosts } from "tina/helpers";

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
      url: `https://sawyer.soy/blog/${post.filename}`,
      guid: post.filename,
      date: post.published_at,
    });
  });

  return new Response(rss.xml(), {
    headers: {
      "content-type": "application/rss+xml",
    },
  });
}
