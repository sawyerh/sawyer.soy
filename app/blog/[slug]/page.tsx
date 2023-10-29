import Cover from "components/Cover";
import FormattedDate from "components/FormattedDate";
import { HeaderNav } from "components/HeaderNav";
import Markdown from "components/Markdown";
import { Metadata } from "next";
import styles from "styles/blog.module.css";
import { getPost } from "tina/helpers";

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
        <Cover className={styles.cover} {...post.cover} />
        <h1>{post.title}</h1>
        <FormattedDate
          className={styles["publish-time"]}
          value={post.published_at}
        />
        <Markdown content={post.body} />
      </article>
    </div>
  );
}
