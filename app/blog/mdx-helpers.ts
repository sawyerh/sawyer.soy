import fs from "fs";
import path from "path";

export interface PostCover {
  image_alt?: string;
  image_url?: string;
  caption?: string;
  embed?: string;
}

export interface Post {
  PostBody: React.ComponentType;
  category: string;
  cover?: PostCover;
  draft?: boolean;
  excerpt?: string;
  external_url?: string;
  published_at: string;
  slug: string;
  title: string;
}

export const getPostSlugs = () => {
  const postsPath = path.join(process.cwd(), "content", "post");

  return fs
    .readdirSync(postsPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx?$/, ""));
};

export const getPost = async (slug: string): Promise<Post> => {
  const contents = await import(`../../content/post/${slug}.mdx`);
  return { ...contents.frontmatter, PostBody: contents.default, slug };
};

export const getPosts = async (): Promise<Post[]> => {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
  return posts;
};

export const postToUrl = (post: Post) => {
  return `/blog/${post.slug}`;
};
