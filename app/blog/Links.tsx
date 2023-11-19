import Link from "next/link";
import styles from "styles/blog-post-list.module.css";
import { getPosts, postToUrl } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

export default async function Links() {
  const posts = await getPosts();
  const links = posts.filter((post) => post.category === "Link");

  return (
    <>
      {links.map((post) => (
        <Link
          href={postToUrl(post)}
          key={post.filename}
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
