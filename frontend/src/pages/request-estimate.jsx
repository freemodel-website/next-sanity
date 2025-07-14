import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import React, { useState } from "react";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";
import Bluebar from "../../components/bluebar";

export default function requestEstimate({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{"Request Estimate | Freemodel"}</title>
        <meta name="description" content={data?.seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={data?.seoTitle} />
        <meta property="og:description" content={data?.seoDescription} />
        {data?.seoImage && (
          <meta property="og:image" content={urlFor(data.seoImage).url()} />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: "Request Estimate" }}
          image={urlFor(data.mainImage).url()}
        />

        <Bluebar body={data.bluetitle} />

        <div className="">
          <div
            className="p-16 overflow-auto"
            dangerouslySetInnerHTML={{
              __html:
                '<div data-paperform-id="g4aknysq"></div><script>(function() {var script = document.createElement("script"); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })()</script>',
            }}
          />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "requestestimate"][0] {
  title,
  mainImage,
  titlebutton,
  bluetitle,
  seoTitle,
  seoDescription,
  seoImage,
}`;

  const footer = await client.fetch(`*[_type == "footersettings"][0]{
  footerimage {
    hotspot,
    crop,
    asset->{
      _id,
      url
    }
  },
  linkedin,
  instagram,
  facebook,
  pinterest,
  leftItems,
  description,
  rightItems,
  navbar
}`);

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      footer,
    },

    revalidate: 10,
  };
};
