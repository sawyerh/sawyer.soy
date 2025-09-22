import Link from "next/link";
import styles from "styles/blog-post-list.module.css";
import { getHostFromURL } from "utils/getHostFromURL";
import { getPosts, postToUrl } from "./mdx-helpers";

export default async function Links() {
  const posts = await getPosts();
  const links = posts.filter((post) => post.category === "Link" && !post.draft);

  return (
    <>
      {links.map((post) => (
        <Link
          href={postToUrl(post)}
          key={post.slug}
          className={styles["linkroll-link"]}
        >
          {post.title} {post.draft && "✏ [Draft] "}{" "}
          {post.external_url && (
            <span className={styles["linkroll-link__host"]}>
              {getHostFromURL(post.external_url)}
            </span>
          )}
        </Link>
      ))}
    </>
  );
}
