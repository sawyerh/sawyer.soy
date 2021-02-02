import Head from "next/head";
import getPosts from "../lib/getPosts";

const Page = () => {
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
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Page;
