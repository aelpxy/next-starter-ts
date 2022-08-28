import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

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
        <div>
        <div className="flex flex-col space-y-4 m-20">
        <p className="text-lg text-center">Get started by</p>
          <span className="font-mono text-center">
            npx degit aelpxy/nextjs-template
          </span>
        </div>
        <div className="flex flex-col space-y-4 m-20">
        <p className="text-lg text-center mb-15">Deployed on</p>
          <Image
            src={"/vercel.svg"}
            alt={"Vercel"}
            loading={"lazy"}
            width={"100px"}
            height={"100px"}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
