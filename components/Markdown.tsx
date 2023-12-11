import { Code } from "bright";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import Card from "./Card";
import MarkdownImage, { MarkdownImageProps } from "./MarkdownImage";

// Code.theme = {
//   dark: "github-dark",
//   light: "github-light",
// };
Code.theme = "github-light";

function CodeBlock(props: { lang?: string; value: string }) {
  /**
   * Markdown code block opening tags can be written as:
   * ```js
   * or
   * ```filepath/file.js
   */
  let lang = props.lang;
  let title: string | undefined;

  if (lang?.includes(".")) {
    lang = lang.split(".")[1];
    title = props.lang;
  }

  return (
    <pre>
      <Code lang={lang} title={title}>
        {props.value}
      </Code>
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
        Card,
        // @ts-expect-error Pretty sure TinaMarkdown types are wrong. This functionality works.
        MarkdownImage,
      }}
    />
  );
}
