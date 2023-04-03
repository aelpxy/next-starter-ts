import type { NextPage } from "next";
import Link from "next/link";

import Layout from "@layouts/Layout";

const NotFound: NextPage = () => {
  return (
    <Layout title="404 | Not Found">
      <h1 className="text-red-600">404 | Page not found</h1>
      <Link href={"/"}>
        <a className="text-blue-500 hover:text-blue-700">Go back</a>
      </Link>
    </Layout>
  );
};

export default NotFound;
