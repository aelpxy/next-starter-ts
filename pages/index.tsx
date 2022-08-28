import type { NextPage } from "next";
import Head from "next/head";

import HelloWorld from "../components/HelloWorld";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js + TypeScript + TailwindCSS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <HelloWorld />
      </div>
    </div>
  );
};

export default Home;
