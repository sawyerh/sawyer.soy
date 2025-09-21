import classNames from "clsx";
import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import { Metadata } from "next";
import LocalFont from "next/font/local";
import Link from "next/link";
import styles from "styles/blog-post-permalink.module.css";
import { getHostFromURL } from "utils/getHostFromURL";
import { getPost, getPostSlugs } from "../mdx-helpers";

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
  const slugs = getPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = await getPost(params.slug);
  const image = post.cover?.image_url;

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

export default async function Page(props: Props) {
  const params = await props.params;
  const { PostBody, ...post } = await getPost(params.slug);

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
      {post.category === "Link" && post.external_url && (
        <div className={styles["original-source"]}>
          <Link href={post.external_url} target="_blank">
            View the original post on {getHostFromURL(post.external_url)}
          </Link>{" "}
          or read <span className="font-marker">my notes</span> below.
        </div>
      )}
      <h1 className={styles["post__title"]}>{post.title}</h1>
      <FormattedDate
        className={styles["post__date"]}
        value={post.published_at}
      />
      <div className={styles["post__body"]}>
        <PostBody />
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

export const dynamicParams = false;
