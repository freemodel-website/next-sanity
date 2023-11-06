import "@/styles/globals.css";
import { Noto_Serif, Pontano_Sans } from "next/font/google";
import { LayoutPageRenderer } from "next-page-layout";
//Google Analytics
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../../lib/gtag";

const noto_serif = Noto_Serif({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-noto-serif",
});

const pontano_sans = Pontano_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add more weight variations here
  variable: "--font-pontano-sans",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <main className={`${noto_serif.variable} ${pontano_sans.variable}`}>
        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "adonis-web", serif;
            font-weight: 700;
            font-style: normal;
          }
          p,
          a,
          li {
            font-family: ${pontano_sans.style.fontFamily};
          }
        `}</style>
        {/* <Component {...pageProps} /> */}
        <LayoutPageRenderer page={Component} initialProps={pageProps} />
      </main>
    </>
  );
}
