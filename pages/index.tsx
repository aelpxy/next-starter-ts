import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HelloWorld from "../components/HelloWorld";

const Home: NextPage = () => {
  return (
    <div className={"container"}>
      <Head>
        <title>next-starter-ts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={"main"}>
        <HelloWorld />
        <p className={"description"}>
          <code className={"code"}>npx degit aelpxy/next-starter-ts</code>
        </p>
      </main>

      <footer className={"footer"}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={"logo"}>
            <Image src="/vercel.svg" alt="Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
