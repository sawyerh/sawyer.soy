import classNames from "classnames";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Link from "next/link";
import styles from "styles/blog.module.css";
import { getPosts, postToUrl } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

export default async function Page() {
  const posts = await getPosts();
  const articles = posts.filter((post) => post.category === "Article");
  const links = posts.filter((post) => post.category === "Link");

  return (
    <div className="sm:flex">
      <div className="sm:w-golden-large relative px-md sm:px-lg">
        <HeaderNav />
        <img
          src="/illo-writing.gif"
          loading="lazy"
          className={styles["posts-illustration"]}
          alt="Illustration of a man typing at a computer with a cat resting next to him"
        />
        <h1 className={classNames(styles["post-lists-heading"], "mb-md")}>
          My latest posts
        </h1>
        <section>
          <div className="">
            {articles.map((post) => (
              <article key={post.id} className={styles["list-article"]}>
                <Link
                  href={post.external_url ? post.external_url : postToUrl(post)}
                  target={post.external_url ? "_blank" : undefined}
                >
                  <h2>
                    {post.title}{" "}
                    <span className={styles["list-article__title-icon"]}>
                      {post.external_url ? "↗" : "→"}
                    </span>
                  </h2>
                  {post.external_url && (
                    <div className={styles["list-article__external-url"]}>
                      Read this post on {getHostFromURL(post.external_url)}
                    </div>
                  )}
                  {post.excerpt && <p>{post.excerpt}</p>}
                  <FormattedDate
                    className="font-marker text-xs"
                    value={post.published_at}
                  />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className={styles["linkroll"]}>
        <h2 className={classNames(styles["post-lists-heading"])}>Linkroll</h2>
        <p>Things shaping my thinking as an engineer</p>
        {links.map((post) => (
          <Link
            href={postToUrl(post)}
            key={post.filename}
            className={styles["linkroll-post"]}
          >
            {post.title}{" "}
            {post.external_url && (
              <span className={styles["linkroll-host"]}>
                {getHostFromURL(post.external_url)}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
