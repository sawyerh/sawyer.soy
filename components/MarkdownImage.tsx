import classNames from "classnames";
import { useId } from "react";
import styles from "styles/blog-post-permalink.module.css";

export interface MarkdownImageProps {
  url: string;
  alt: string;
  caption: string;
  className: string;
  size: string;
}

export default function MarkdownImage(props: MarkdownImageProps) {
  const id = useId();
  if (!props?.url) return <></>;
  const caption = props.caption;
  const alt = props.alt ?? caption;

  return (
    <span
      className={classNames(styles["post__image"], {
        "max-w-sm": props.size === "small",
        "max-w-prose": props.size === "prose",
        "max-w-screen-sm": props.size === "medium",
      })}
    >
      <img
        src={props.url}
        alt={alt}
        aria-describedby={caption ? `caption_${id}` : undefined}
        loading="lazy"
        className={props.className}
      />
      {caption && (
        <span className="img-caption" id={`caption_${id}`}>
          {caption}
        </span>
      )}
    </span>
  );
}
