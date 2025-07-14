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
import Videocaroucel from "../../components/videocaroucel";
import Ctabutton from "../../components/atoms/ctabutton";

export default function ForAgents({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  console.log(
    "DEBUG data.questionsanswers: ",
    JSON.stringify(data.questionsanswers)
  );

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
            content="https://freemodel.com/SEODefaultLogo.png"
          />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
        {/* END: Open Graph */}
      </Head>

      <Navbar data={footer.navbar} />

      <main className="mb-20">
        <Hero
          hero={{ title: data.title }}
          //buttontext={data.titlebutton}
          buttontext="Request Estimate"
          buttonurl="/request-estimate"
          image={urlFor(data.mainImage).url()}
        />

        <Bluebar
          theme={"leftimg"}
          body={data.bluebartext}
          img={data.bluebarimage}
        />

        <div className="flex flex-col items-center justify-center overflow-auto my-24">
          <p className="text-xl font-semibold tracking-wide text-center sm:text-xl">
            Resources for Agents
          </p>
          <p className="text-lg text-center text-gray-600 sm:text-xl">
            We have a variety of resources to help you succeed as an agent.
          </p>
          {/* line */}
          <div className="w-16 h-1 mx-auto mt-4 mb-10 bg-FM-blue"></div>

          <Ctabutton
            text="Resources"
            href="https://www.get.freemodel.com/resources"
          />
        </div>

        {/* Temp, Re-add with Sanity data */}
        <Sixgrid title={data.title1} imageArray={data.imageArray} />

        <Ourprocess
          image={data.questionimage}
          faqsList={data.questionsanswers}
          buttontitle={data.buttontitle}
        />

        {data.videoData && (
          <Videocaroucel
            videoData={data.videoData}
            horizontalslider={data.horizontalslider}
            title={data.videotitle}
          />
        )}
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
    buttontitle,
    seoTitle,
    seoDescription,
    seoImage,
     //----Video Caroucel
     videotitle,
      horizontalslider,
      videoData,
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
