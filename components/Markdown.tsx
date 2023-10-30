import hljs from "highlight.js";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import MarkdownImage, { MarkdownImageProps } from "./MarkdownImage";

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

export default function Markdown(props: { content: TinaMarkdownContent }) {
  if (!props.content) return null;

  return (
    <TinaMarkdown<{ MarkdownImage: MarkdownImageProps }>
      content={props.content}
      components={{
        img: MarkdownImage,
        code_block: CodeBlock,
        // @ts-expect-error Pretty sure TinaMarkdown types are wrong. This functionality works.
        MarkdownImage,
      }}
    />
  );
}
