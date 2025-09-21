import { YouTubeEmbed } from "@next/third-parties/google"; // Experimental. https://github.com/vercel/next.js/tree/canary/packages/third-parties
import type { Post, PostCover } from "../app/blog/mdx-helpers";

export default function Cover(props: {
  className?: string;
  image_url?: PostCover["image_url"];
  image_alt?: PostCover["image_alt"];
  embed?: PostCover["embed"];
  external_url?: Post["external_url"];
}) {
  if (props.external_url) {
    /**
     * Get YouTube ID from URL like one of:
     * - https://www.youtube.com/watch?v=yhF7OmuIILc
     * - https://youtu.be/yhF7OmuIILc
     */
    const youtubeId = props.external_url.match(
      /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/,
    )?.[1];

    if (youtubeId) {
      return (
        <div className={props.className}>
          <YouTubeEmbed videoid={youtubeId} />
        </div>
      );
    }
  }

  if (props.embed) {
    return (
      <div
        className={props.className}
        dangerouslySetInnerHTML={{
          __html: props.embed,
        }}
      />
    );
  }

  if (props.image_url) {
    return (
      <div className={props.className}>
        <img
          fetchPriority="high"
          src={props.image_url}
          alt={props.image_alt ?? undefined}
        />
      </div>
    );
  }

  return null;
}
