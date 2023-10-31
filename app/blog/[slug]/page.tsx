import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Markdown from "components/Markdown";
import PostEditLink from "components/PostEditLink";
import { Metadata } from "next";
import Link from "next/link";
import styles from "styles/blog.module.css";
import { getPost } from "tina/helpers";
import { getHostFromURL } from "utils/getHostFromURL";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  const image = post.cover.image_url;

  return {
    title: `${post.title} | Sawyer Hollenshead`,
    description: post.excerpt,
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

      <article className={styles.post}>
        <Cover
          className={styles.cover}
          {...post.cover}
          external_url={post.external_url}
        />
        <h1>
          {post.title}
          <PostEditLink filename={post.filename} />
        </h1>
        <FormattedDate
          className={styles["publish-time"]}
          value={post.published_at}
        />
        <div className={styles["post-body"]}>
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
    </div>
  );
}
