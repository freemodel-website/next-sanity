import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";

export default function RenovationService({ data, footer }) {
  return (
    <div>
      <Head>
        <title>{`Renovation Service | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: "Give your home the love it deserves." }}
          buttontext={"Let's Talk"}
        />
        <Bluebar
          body={"Fully managed. Hassle-free. Custom designs. Easy payments."}
        />
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  // const mainquery = await client.fetch(` *[_type == "forhomeowners"][0]{
  //     title,
  //     mainImage {
  //       hotspot,
  //       crop,
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
  //     titlebutton,
  //     bluebarbody,
  //     body,
  //     lowerbodytitle,
  //     bodytitlebutton,
  //     //----Icon Right Left Right
  //     leftrightlefttitle,
  //     bullettitle,
  //     leftrightleftbody,
  //     //----Bullet Points
  //     bullettitle,
  //     bulletImage,
  //     bulletSection,
  //     //----Windy Section
  //     windySectionTitle,
  //     windySection,
  //     sec3title,
  //     projects []-> {
  //       _id,
  //       title,
  //       mainImage,
  //       beds,
  //       baths,
  //       durationmonths,
  //       slug,
  //       bool
  //     },
  //     bottomtitle,
  //     bottomtitlebutton,
  //     bottombody,
  //   }`);

  // Footer data
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

  return {
    props: {
      //data: mainquery,
      footer,
    },

    revalidate: 10,
  };
};
