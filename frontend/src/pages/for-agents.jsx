import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Ourprocess from "../../components/for-agents/ourprocess";
import Footer from "../../components/footer";
import { client,urlFor } from "../../client";
import Sixgrid from "../../components/index/sixgrid";

export default function ForAgents({ data, footer}) {

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main className="mb-20">
      <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <Bluebar theme={"leftimg"}
          body={data.bluebartext}
          img={data.bluebarimage}
         />

        {/* Temp, Re-add with Sanity data */}
        <Sixgrid
          title={data.title1}
          imageArray={data.imageArray}
         
        />

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
    leftItems,
    rightItems,
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