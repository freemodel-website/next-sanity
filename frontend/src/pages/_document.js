import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import * as gtag from "../../lib/gtag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function (u, n, i, v, e, r, s, a, l) { u[r] = {}; u[r].uid = '14b33be1-0fb5-4bdf-8f14-12e12f329861'; u[r].m = ['getReferrerInfo', 'identify', 'integrationsReady', 'on', 'ready', 'track']; u[r].queue = []; u[r].f = function(t) { return function() { var l = Array.prototype.slice.call(arguments); l.unshift(t); u[r].queue.push(l); return u[r].queue; }; }; for (var t = 0; t < u[r].m.length; t++) { l = u[r].m[t]; u[r][l] = u[r].f(l); } a = n.createElement(v); a.src = e + '/us-' + u[r].uid + '.js'; a.async = s; n.getElementsByTagName(i)[0].appendChild(a); })(window, document, 'head', 'script', 'https://snippet.freemodel.com', 'mbsy', true);
          `,
          }}
        />

        {/* Google Analytics */}
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
        {/* Google Tag Manager */}
        <script
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
        {/* Hubspot */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/6664059.js"
        ></script>
        {/* End Hubspot */}
        {/* Facebook Pixel */}
        <script
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
      </Head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TSFT6WGW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
