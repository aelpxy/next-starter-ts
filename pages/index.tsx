import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Code from "../components/Code";

const Home: NextPage = () => {
  return (
    <main className={"main"}>
      <Head>
        <title>next-starter-ts</title>
      </Head>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <Code className="text-3xl font-bold border rounded bg-gray-100">
            <span className={"select-none"}>~$ </span>
            npx degit aelpxy/next-starter-ts
          </Code>
        </div>
      </div>
    </main>
  );
};

export default Home;
