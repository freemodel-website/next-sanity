import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Steps from "../../components/steps";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";

export default function ForHomeowners({ data, footer }) {
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        {/* <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        /> */}
        {/* <Bluebar
          theme={"titletext"}
          title={data.bluebartitle}
          body={data.bluebarbody}
        /> */}
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  //   const mainquery = await client.fetch(`*[_type == "howitworks"][0]{
  //     title,
  //     mainImage {
  //       hotspot,
  //       crop,
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
  //     bluebartitle,
  //     bluebarbody,
  //     threesectiontitle,
  //     threeSecArray
  //   }`);

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
