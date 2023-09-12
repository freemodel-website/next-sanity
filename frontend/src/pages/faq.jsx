import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import AccordianList from "../../components/atoms/accordianlist";
import Ctabutton from "../../components/atoms/ctabutton";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";

export default function FAQ({ data, footer }) {
  return (
    <div>
      <Head>
        <title>Freemodel</title>
      </Head>

      <Navbar />

      <main>
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <Bluebar body={data.bluetitle} />

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center font-bold my-20">
            Frequently Asked Questions
          </h1>

          <AccordianList faqsList={data.questionsanswers} />

          <div className="my-20">
            <Ctabutton text={data.ctabutton} href="/lets-talk" />
          </div>
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "faqpage"]{
    title,
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
    titlebutton,
    bluetitle,
    body,
    questionsanswers,
    ctabutton
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
    rightItems,
  }`);

  const data = await client.fetch(mainquery);

  return {
    props: {
      data: data[0],
      footer,
    },

    revalidate: 10,
  };
};
