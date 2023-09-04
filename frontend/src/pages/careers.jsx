import React, { use, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import ThreeSection from "../../components/careers/threesection";
import { client, urlFor } from "../../client";
import WorkableEmbed from "../../components/careers/workableEmbed";

export default function Career({ data }) {
  console.log(data);

  let test;

  useEffect(() => {
    let test = data.scriptform;
  }, []);

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <ThreeSection imageArray={data.imageArray} />

        <h1 className="text-4xl text-center font-bold my-20">We're Hiring!</h1>
        <div className="bg-white flex md:ml-16 overflow-auto">
          <WorkableEmbed />
        </div>
      </main>

      <Footer />
    </div>
  );
}
export const getStaticProps = async () => {
  const mainquery = `*[_type == "careers"]{
    title,
    mainImage {
      crop,
      hotspot,
      asset-> {
        _id,
        url
      }
    },
    titlebutton,
    imageArray []{
      image {
        crop,
        hotspot,
        asset-> {
          _id,
          url
        }
      },
      title,
      text
    },
    scriptform
  }[0]`;

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
    },

    revalidate: 10,
  };
};