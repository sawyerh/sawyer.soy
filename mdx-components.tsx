import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import Card from "./components/Card";
import MarkdownImage from "./components/MarkdownImage";

// Code.theme = {
//   dark: "github-dark",
//   light: "github-light",
// };
Code.theme = "github-light";

function CodeBlock(props: { lang?: string; children: React.ReactNode }) {
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
        {props.children}
      </Code>
    </pre>
  );
}

const components: MDXComponents = {
  img: MarkdownImage,
  code_block: CodeBlock,
  pre: CodeBlock,
  Card,
  MarkdownImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
