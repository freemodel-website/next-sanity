import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import React, { useState } from "react";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";

export default function ContactUs({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{"Contact Us | Freemodel"}</title>
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
          hero={{ title: "Contact Us" }}
          image={urlFor(data.mainImage).url()}
        />

        <div className="">
          <div
            className="p-16 overflow-auto"
            dangerouslySetInnerHTML={{
              __html:
                '<script src="https://js.hsforms.net/forms/embed/6664059.js" defer></script><div class="hs-form-frame" data-region="na1" data-form-id="3ddf3cc9-2533-435e-b98a-76685bd6b1ee" data-portal-id="6664059"></div>',
            }}
          />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "letstalk"][0] {
  title,
  mainImage,
  titlebutton,
  html1,
  html2,
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
