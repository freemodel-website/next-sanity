import React from "react";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import Bluebar from "../../../components/bluebar";
import Paragraph from "../../../components/paragraph";
import Sixgrid from "../../../components/index/sixgrid";

const MarketingPage = ({ data, footer }) => {
  console.log("DEBUG data: ", JSON.stringify(data));

  return (
    <div>
      <Head></Head>

      <Navbar data={footer.navbar} />
      <main>
        <Hero
          hero={{ title: data.title }}
          image={urlFor(data.mainImage).url()}
        />

        {data.text && <Bluebar body={data.text} />}

        <div className="max-w-3xl mx-auto mt-10 mb-10">
          <Paragraph text={data.body} />
        </div>
        {data.sec2title && (
          <Sixgrid title={data.sec2title} imageArray={data.sec2imageArray} />
        )}
      </main>
      <Footer data={footer} />
    </div>
  );
};

export default MarketingPage;

export const getServerSideProps = async (context) => {
  const { marketing = "" } = context.params;

  const query = `*[_type == "marketing" && slug.current == $marketing] {
    _id,
    title,
    slug,
    text,
    sectionhead,
    mainImage {
      crop, 
      hotspot,
        asset->{
            _ref,
            _type,
            altText,
            description,
            "tags": opt.media.tags[]->name.current,
            title,
            url
        }
    },
    body,
    sec2title,
    sec2imageArray,
    //----SEO
    seoTitle,
    seoDescription,
  }[0]`;

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

  const data = await client.fetch(query, { marketing });

  return {
    props: {
      data,
      footer,
    },
  };
};
