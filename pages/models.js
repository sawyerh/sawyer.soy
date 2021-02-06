import Head from "next/head";
import { getFrameworks } from "../lib/contentful";

const Page = (props) => {
  console.log(props);

  return (
    <>
      <Head>
        <title>Models and Frameworks</title>
      </Head>
      <h1>Models and Frameworks</h1>
    </>
  );
};

export async function getStaticProps() {
  const frameworks = await getFrameworks();

  return {
    props: {
      frameworks,
    },
  };
}

export default Page;
