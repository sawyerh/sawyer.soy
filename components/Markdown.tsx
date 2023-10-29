import hljs from "highlight.js";
import { useId } from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

function CodeBlock(props: { lang?: string; value: string }) {
  const lang = props.lang;

  const highlighted = lang
    ? hljs.highlight(props.value, {
        language: lang,
      })
    : hljs.highlightAuto(props.value);

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlighted.value }}></code>
    </pre>
  );
}

function MarkdownImage(
  props?: Partial<{ url: string; alt: string; caption: string }>,
) {
  const id = useId();
  if (!props?.url) return <></>;
  const caption = props.caption;
  const alt = props.alt ?? caption;

  return (
    <>
      <img
        src={props.url}
        alt={alt}
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
        code_block: CodeBlock,
      }}
    />
  );
}
