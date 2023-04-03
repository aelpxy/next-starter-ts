import type { NextPage } from "next";
import Layout from "@layouts/Layout";

import Code from "@components/Code";

const Home: NextPage = () => {
  return (
    <Layout title="next-starter-ts">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <Code className="text-3xl font-bold border rounded bg-gray-100">
            <span className="select-none">~$ </span>
            npx degit aelpxy/next-starter-ts
          </Code>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
