import { useId } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

function CodeBlock(props: { lang?: string; value: string }) {
  const showLineNumbers = props.value.split("\n").length > 4;

  return (
    <SyntaxHighlighter
      language={props.lang}
      useInlineStyles={false}
      showLineNumbers={showLineNumbers}
    >
      {props.value}
    </SyntaxHighlighter>
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
