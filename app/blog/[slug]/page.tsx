import classNames from "classnames";
import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Markdown from "components/Markdown";
import PostEditLink from "components/PostEditLink";
import SocialFooter from "components/SocialFooter";
import { Metadata } from "next";
import Link from "next/link";
import styles from "styles/blog-post-permalink.module.css";
import { getPost } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

interface Props {
  params: { slug: string };
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
    <div className="wrapper">
      <HeaderNav className="mb-md" />

      <article
        className={classNames(
          styles.post,
          styles[`post__${post.category.toLowerCase()}`],
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
          <div className="mb-md border-b-2 pb-md">
            <Link
              href={post.external_url}
              className="font-bold"
              target="_blank"
            >
              View the original post on {getHostFromURL(post.external_url)}
              <span className="ml-2 inline-block font-marker">↗</span>
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

      <SocialFooter className="border-t-2 pb-lg pt-md" />
    </div>
  );
}
