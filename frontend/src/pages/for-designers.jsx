import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import DesignQA from "../../components/designqa";

export default function ForDesigners({ data, footer }) {
  return (
    <div>
      <Head>
        <title>{`For Designers | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero hero={{ title: data.title }} buttontext={data.titlebutton} />
        <Bluebar
          theme={"rightimg"}
          body={data.bluebarbody}
          img={data.bluebarimage}
        />
        {/* Text Block */}
        <Paragraph text={data.body} />
        <DesignQA
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
  const mainquery = await client.fetch(` *[_type == "fordesigners"][0]{
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
        bluebarbody,
        bluebarimage,
        body,
        //
        questionimage,
        questionsanswers,
      }`);

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
      data: mainquery,
      footer,
    },

    revalidate: 10,
  };
};
