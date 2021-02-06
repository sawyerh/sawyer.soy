import Head from "next/head";
import { Fragment } from "react";
import RichText from "../components/RichText";
import { getPageBySlug } from "../lib/contentful";

const Page = ({ contents }) => {
  console.log(contents);

  return (
    <>
      <Head>
        <title>{contents.title}</title>
      </Head>

      <h1>{contents.title}</h1>
      <RichText>{contents.lead}</RichText>

      {contents.entries.map(({ fields, sys }) => (
        <Fragment key={sys.id}>
          <h2>{fields.title}</h2>
          <RichText>{fields.description}</RichText>
        </Fragment>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const contents = await getPageBySlug("index");

  return {
    props: {
      contents,
    },
  };
}

export default Page;
