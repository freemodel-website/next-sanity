import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import Accordianlist from "../../components/atoms/accordianlist";
import Ctabutton from "../../components/atoms/ctabutton";
import Image from "next/image";
import Sixgrid from "../../components/index/sixgrid";

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
        {/* Text Block */}
        <Paragraph text={data.body} />

        {/* Q&A */}
        <div className="flex flex-col items-center p-8 lg:p-0">
          <div className="mt-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {data.qatitle}
            </h1>
          </div>
          <div className="flex flex-col items-center mt-8 w-full sm:w-3/4 md:w-1/2 lg:flex-row lg:w-1/3 xl:w-3/4">
            <div className="flex flex-col items-center">
              <Image
                src={urlFor(data.leftImage).url()}
                alt="leftImage"
                height={800}
                width={800}
                className="object-cover w-96 h-64 mb-6 rounded-2xl shadow-lg lg:h-80 xl:h-96"
              />
            </div>
            <div className="mt-14 mb-20">
              <Accordianlist faqsList={data.questionsanswers} />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={urlFor(data.rightImage).url()}
                alt="rightImage"
                height={800}
                width={800}
                className="object-cover w-96 h-64 mb-6 rounded-2xl shadow-lg lg:h-80 xl:h-96 xl:mt-24"
              />
            </div>
          </div>
        </div>
        <Sixgrid title={""} imageArray={data.twosecimageArray} />
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(` *[_type == "renovationservices"][0]{
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
      body,
      lowerbodytitle,
      bodytitlebutton,
      //----Q&A
      qatitle,
      leftImage {
        hotspot,
        crop,
        asset->{
          _id,
          url
        }
      },
      rightImage {
        hotspot,
        crop,
        asset->{
          _id,
          url
        }
      },
      questionsanswers,
      //----TwoSection
      twosecimageArray,
      //----Bottom Section
      bottomtitle,
      bottomtitlebutton,
      bottombody,
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
