import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const RichText = ({ children }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(children) }} />
  );
};

export default RichText;
