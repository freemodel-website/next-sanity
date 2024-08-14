import React, { use, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import ThreeSection from "../../components/careers/threesection";
import { client, urlFor } from "../../client";
import WorkableEmbed from "../../components/careers/workableEmbed";
import { useRouter } from "next/router";
import Bluebar from "../../components/bluebar";
import ImageCaroucel from "../../components/imageCaroucel";
import Sixgrid from "../../components/index/sixgrid";
import Paragraph from "../../components/paragraph";

export default function Via({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        {/* <title>{`${data.title}`}</title> */}
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

      <main>
        <Hero
          hero={data}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
          pomp={true}
        />

        <Bluebar body={data.bluebartext} />

        <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold my-20">
          {data.htmltitle}
        </h1>
        <div className="flex-auto max-w-3xl justify-center items-center mx-auto px-5">
          <div
            className="pb-10 overflow-auto"
            dangerouslySetInnerHTML={{
              __html: data.htmlbody,
            }}
          />
        </div>

        <Bluebar body={data.secondbluebartext} />

        <Sixgrid
          title={data.gridtitle}
          text={data.gridtext}
          imageArray={data.gridimageArray}
        />

        <div className="text-center pt-10 pb-20 bg-FM-blue">
          <h1 className="text-5xl text-center text-white font-bold">
            {data.imageGallaryTitle}
          </h1>
          {data.imageGallaryBody && (
            <div className="max-w-3xl mx-auto !text-3xl text-white">
              <style>
                {`
                  .custom-styling-broker {
                    font-size: 24px !important;
                    margin-bottom: -20px;
                  }
                    .pgh1custom{
                    font-size: 50px;
                    }
                `}
              </style>
              <Paragraph text={data.imageGallaryBody} />
            </div>
          )}
          <ImageCaroucel gallery={data.imagesGallery} />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}
export const getStaticProps = async () => {
  const mainquery = `*[_type == "viapage"]{
    title,
    mainImage {
      crop,
      hotspot,
      asset-> {
        _id,
        url
      }
    },
    bluebartext,
    htmltitle,
    htmlbody,
    secondbluebartext,
    gridtitle,
    gridtext,
    gridimageArray,
    imageGallaryBody,
    imagesGallery
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

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      footer,
    },

    revalidate: 10,
  };
};
