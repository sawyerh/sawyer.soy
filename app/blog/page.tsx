import classNames from "classnames";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Link from "next/link";
import styles from "styles/blog-post-list.module.css";
import { getPosts, postToUrl } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

export default async function Page() {
  const posts = await getPosts();
  const articles = posts.filter((post) => post.category === "Article");
  const links = posts.filter((post) => post.category === "Link");

  return (
    <div className="sm:flex">
      <div className="relative border-l-moss-800 border-t-moss-800 px-md sm:w-golden-large sm:border-l-8 sm:border-t-8 md:px-lg">
        <HeaderNav />
        <video
          className={styles["desk-illustration"]}
          autoPlay
          loop
          muted
          playsInline
          role="presentation"
        >
          <source src="/illo-writing.webm" type="video/webm" />
          <source src="/illo-writing.mp4" type="video/mp4" />
        </video>
        <h1 className={classNames(styles["section-heading"], "mb-md")}>
          My latest posts
        </h1>
        <section>
          {articles.map((post) => (
            <Link
              key={post.id}
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
              {post.external_url && (
                <div className={styles["article-external-url"]}>
                  Read this post on {getHostFromURL(post.external_url)}
                </div>
              )}
              {post.excerpt && <p>{post.excerpt}</p>}
              <FormattedDate
                className="font-marker text-xs"
                value={post.published_at}
              />
            </Link>
          ))}
        </section>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className={styles["linkroll"]}>
          <h2 className={styles["section-heading"]}>Linkroll</h2>
          <p>Things shaping my perspective as an engineer</p>
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
        </div>
      )}
    </div>
  );
}
