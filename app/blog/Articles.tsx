import FormattedDate from "components/FormattedDate";
import Link from "next/link";
import styles from "styles/blog-post-list.module.css";
import { getHostFromURL } from "utils/getHostFromURL";
import { getPosts, postToUrl } from "./mdx-helpers";

export default async function Articles() {
  const posts = await getPosts();
  const articles = posts.filter((post) => post.category === "Article");

  return (
    <section>
      {articles.map((post) => (
        <Link
          key={post.slug}
          href={post.external_url ? post.external_url : postToUrl(post)}
          target={post.external_url ? "_blank" : undefined}
          className={styles["article"]}
        >
          <h2 className={styles["article-title"]}>
            {post.title} {post.draft && "✏ [Draft] "}
            <span className={styles["article-title__icon"]}>
              {post.external_url ? "↗" : "→"}
            </span>
          </h2>
          <FormattedDate
            className="mb-1 block font-marker text-xs"
            value={post.published_at}
          />
          {post.excerpt && <p>{post.excerpt}</p>}
          {post.external_url && (
            <div className={styles["article-external-url"]}>
              Read this post on {getHostFromURL(post.external_url)}
            </div>
          )}
        </Link>
      ))}
    </section>
  );
}
