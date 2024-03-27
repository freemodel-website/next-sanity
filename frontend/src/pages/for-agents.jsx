import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Ourprocess from "../../components/for-agents/ourprocess";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import Sixgrid from "../../components/index/sixgrid";
import { useRouter } from "next/router";

export default function ForAgents({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`For Agents | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={data?.seoTitle} />
        <meta property="og:description" content={data?.seoDescription} />
        {data?.seoImage ? (
          <meta property="og:image" content={urlFor(data.seoImage).url()} />
        ) : (
          <meta
            property="og:image"
            href="https://freemodel.com/SEODefaultLogo.png"
          />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main className="mb-20">
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <Bluebar
          theme={"leftimg"}
          body={data.bluebartext}
          img={data.bluebarimage}
        />

        {/* Temp, Re-add with Sanity data */}
        <Sixgrid title={data.title1} imageArray={data.imageArray} />

        <Ourprocess
          image={data.questionimage}
          faqsList={data.questionsanswers}
          buttontitle={data.buttontitle}
        />
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "foragents"][0]{
    title,
    mainImage {
      crop,
      hotspot,
      asset -> {
        _id,
        url
      }
    },
    titlebutton,
    bluebartext,
    bluebarimage {
      crop,
      hotspot,
      asset -> {
        _id,
        alt,
        url
      }
    },
    title1,
    imageArray,
    questionimage {
      crop,
      hotspot,
      asset -> {
        _id,
        alt,
        url
      }
    },
    questionsanswers,
    buttontitle
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
