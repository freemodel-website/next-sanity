import React, { use, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import ThreeSection from "../../components/careers/threesection";
import { client, urlFor } from "../../client";
import WorkableEmbed from "../../components/careers/workableEmbed";
import { useRouter } from "next/router";

export default function Via({ data, footer }) {
  let test;

  useEffect(() => {
    let test = data.scriptform;
  }, []);

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`${data.title}`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Freemodel" />
        <meta property="og:description" content={footer.description} />
        <meta property="og:image" content={urlFor(footer.footerimage).url()} />
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main></main>

      <Footer data={footer} />
    </div>
  );
}
export const getStaticProps = async () => {
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
