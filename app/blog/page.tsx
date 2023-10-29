import classNames from "classnames";
import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Link from "next/link";
import styles from "styles/blog.module.css";
import { getPosts } from "tina/helpers";

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="wrapper">
      <HeaderNav />
      <section className={styles["post-list"]}>
        {posts.map((post) => (
          <article key={post.id}>
            <Link
              href={`/blog/${post._sys?.filename}`}
              className={styles["post-preview"]}
            >
              <Cover {...post.cover} />
              <h1>{post.title}</h1>
              <FormattedDate
                className={classNames(styles["publish-time"])}
                value={post.published_at}
              />
              {post.excerpt && <p>{post.excerpt}</p>}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
