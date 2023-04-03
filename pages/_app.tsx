import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;