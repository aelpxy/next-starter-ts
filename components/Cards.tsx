import Link from "next/link";

const Cards = () => {
  return (
    <div className={"grid"}>
      <Link
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={"card"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={"className"}>
          Docs <span>-&gt;</span>
        </h2>
        <p className={"className"}>
          Find in-depth information about Next.js features and&nbsp;API.
        </p>
      </Link>

      <Link
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={"card"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={"className"}>
          Learn <span>-&gt;</span>
        </h2>
        <p className={"className"}>
          Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
      </Link>

      <Link
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={"card"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={"className"}>
          Templates <span>-&gt;</span>
        </h2>
        <p className={"className"}>
          Discover and deploy boilerplate example Next.js&nbsp;projects.
        </p>
      </Link>

      <Link
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={"card"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={"className"}>
          Deploy <span>-&gt;</span>
        </h2>
        <p className={"className"}>
          Instantly deploy your Next.js site to a shareable URL
          with&nbsp;Vercel.
        </p>
      </Link>
    </div>
  );
};

export default Cards;
