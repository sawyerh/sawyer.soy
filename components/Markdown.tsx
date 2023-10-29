import { useId } from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

function MarkdownImage(
  props?: Partial<{ url: string; alt: string; caption: string }>,
) {
  const id = useId();
  if (!props?.url) return <></>;
  const caption = props.caption;

  return (
    <>
      <img
        src={props.url}
        alt={props.alt}
        aria-describedby={caption ? `caption_${id}` : undefined}
        loading="lazy"
      />
      {caption && (
        <span className="img-caption" id={`caption_${id}`}>
          {caption}
        </span>
      )}
    </>
  );
}

export default function Markdown(props: { content: TinaMarkdownContent }) {
  return (
    <TinaMarkdown
      content={props.content}
      components={{
        img: MarkdownImage,
      }}
    />
  );
}
