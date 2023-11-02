import { YouTubeEmbed } from "@next/third-parties/google"; // Experimental. https://github.com/vercel/next.js/tree/canary/packages/third-parties
import { BlogPost } from "tina/helpers";

export default function Cover(props: {
  className?: string;
  image_url?: BlogPost["cover"]["image_url"];
  image_alt?: BlogPost["cover"]["image_alt"];
  embed?: BlogPost["cover"]["embed"];
  external_url?: BlogPost["external_url"];
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
        <img src={props.image_url} alt={props.image_alt ?? undefined} />
      </div>
    );
  }

  return null;
}
