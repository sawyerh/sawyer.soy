import classNames from "classnames";
import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import Markdown from "components/Markdown";
import PostEditLink from "components/PostEditLink";
import { Metadata } from "next";
import LocalFont from "next/font/local";
import Link from "next/link";
import styles from "styles/blog-post-permalink.module.css";
import { getPost, getPosts, getPostSlug } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

interface Props {
  params: { slug: string };
}

const monospaceFont = LocalFont({
  src: "../../../public/fonts/monaspace/MonaspaceNeon-Regular.woff2",
  variable: "--font-mono",
});

const monospaceHandwrittenFont = LocalFont({
  src: "../../../public/fonts/monaspace/MonaspaceRadon-Regular.woff2",
  variable: "--font-mono-handwritten",
});

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: getPostSlug(post),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  const image = post.cover.image_url;

  const description =
    post.category === "Link"
      ? "Here's a link and my notes on it."
      : post.excerpt;

  return {
    title: `${post.title} | Sawyer Hollenshead`,
    description,
    openGraph: {
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article
      className={classNames(
        styles.post,
        styles[`post__${post.category.toLowerCase()}`],
        monospaceFont.variable,
        monospaceHandwrittenFont.variable,
      )}
    >
      <Cover
        className={styles["post__cover"]}
        {...post.cover}
        external_url={post.external_url}
      />
      <h1 className={styles["post__title"]}>
        {post.title}
        <PostEditLink filename={post.filename} />
      </h1>
      <FormattedDate
        className={styles["post__date"]}
        value={post.published_at}
      />
      {post.category === "Link" && post.external_url && (
        <div className={styles["original-source"]}>
          <Link href={post.external_url} className="font-bold" target="_blank">
            View the original post on {getHostFromURL(post.external_url)}
            <span className="ml-1 mr-2 inline-block font-marker">↗</span>
          </Link>{" "}
          or read <span className="font-marker">my notes</span> below.
        </div>
      )}
      <div className={styles["post__body"]}>
        <Markdown content={post.body} />
      </div>
      {post.category === "Article" && post.external_url && (
        <>
          {post.excerpt && <blockquote>{post.excerpt}</blockquote>}
          <p>
            <Link href={post.external_url}>
              This post of mine was originally published on{" "}
              {getHostFromURL(post.external_url)}. You can read it there.
            </Link>
          </p>
        </>
      )}
    </article>
  );
}
