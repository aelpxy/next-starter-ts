import Head from "next/head";


export default function Layout(props: { children: any; title: string }) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta lang="en_US" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots " content="index, follow" />
                <meta name="title" content={props.title} />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </Head>
            <div>
                {props.children}
            </div>
        </>
    );
}