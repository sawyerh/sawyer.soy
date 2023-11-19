/**
 * @file Custom methods for making it easier to access Tina CMS content.
 */
import { cache } from "react"; // Likely not necessary since we're exporting as a static site
import { client } from "tina/__generated__/client";

type RawBlogPost = Awaited<
  ReturnType<typeof client.queries.post>
>["data"]["post"];
type Cover = NonNullable<RawBlogPost["cover"]>;

// What actually gets returned to consumers of these helpers
export interface BlogPost extends Omit<RawBlogPost, "cover"> {
  cover: Omit<Cover, "__typename">;
  filename: string;
}

export const getPosts = cache(async () => {
  const filter =
    process.env.NODE_ENV === "development" ? {} : { draft: { eq: false } };

  const { data } = await client.queries.postConnection({
    sort: "published_at",
    filter,
  });
  const posts = data.postConnection.edges ?? [];

  return posts
    .filter(filterNullish)
    .map((post) => post.node)
    .map(setPostDefaults)
    .reverse(); // newest published_at first
});

export const getPost = cache(async (filenameWithoutExtension: string) => {
  const { data } = await client.queries.post({
    relativePath: `${filenameWithoutExtension}.mdx`,
  });

  return setPostDefaults(data.post);
});

export function getPostSlug(post: BlogPost) {
  return post.filename;
}

export function postToUrl(post: BlogPost) {
  return `/blog/${getPostSlug(post)}`;
}

function setPostDefaults(post: RawBlogPost): BlogPost {
  return {
    ...post,
    cover: post.cover ?? {},
    filename: post._sys.filename,
  };
}

/**
 * Tina types often have nullish values. This helps narrow things.
 */
function filterNullish<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
