import "@/styles/globals.css";
import { Noto_Serif, Pontano_Sans } from "next/font/google";
import { LayoutPageRenderer } from "next-page-layout";
//Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";
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
        <meta
          name="facebook-domain-verification"
          content="5pc9nltxw34updxgju5hx3etg0917m"
        />
        {/* Facebook Pixel */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '491975082291134');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=491975082291134&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel */}

        {/* Hubspot */}
        {/* <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/6664059.js"
        ></Script> */}
        {/* End Hubspot */}

        {/* GetAmbassador */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function (u, n, i, v, e, r, s, a, l) { u[r] = {}; u[r].uid = '14b33be1-0fb5-4bdf-8f14-12e12f329861'; u[r].m = ['identify', 'on', 'ready', 'track']; u[r].queue = []; u[r].f = function(t) { return function() { var l = Array.prototype.slice.call(arguments); l.unshift(t); u[r].queue.push(l); return u[r].queue; }; }; for (var t = 0; t < u[r].m.length; t++) { l = u[r].m[t]; u[r][l] = u[r].f(l); } a = n.createElement(v); a.src = e + '/us-' + u[r].uid + '.js'; a.async = s; n.getElementsByTagName(i)[0].appendChild(a); })(window, document, 'head', 'script', 'https://cdn.getambassador.com', 'mbsy', true); 
          `,
          }}
        />
        {/* End GetAmbassador */}
        {/* Google Tag Manager */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TSFT6WGW');
      `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics */}
        <Script
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
        {/* End Google Analytics */}

        {/* Google Analytics 2 */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F8409LCB3N"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-F8409LCB3N');
            `,
          }}
        /> */}
        {/* End Google Analytics 2 */}
        {/* Facebook Pixel */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '345684356691659');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=345684356691659&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel */}
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      {/* End Global Site Tag (gtag.js) - Google Analytics */}
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
        {/* Vercel Analytics */}
        <Analytics />
      </main>
    </>
  );
}
