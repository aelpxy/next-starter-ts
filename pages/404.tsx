import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 | Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className="text-red-600">404 | Page not found</h1>
        <Link href={"/"}>
          <a className="text-blue-500 hover:text-blue-700">Go back</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
