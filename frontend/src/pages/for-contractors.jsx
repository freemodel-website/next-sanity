import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Threesegment from "../../components/threesegment";
import Quoteslider from "../../components/quoteslider";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import Paragraph from "../../components/paragraph";
import Sixgrid from "../../components/index/sixgrid";
import ThreeSegment from "../../components/threesegment";
import { useRouter } from "next/router";

export default function ForContractors({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`For Contractors | Freemodel`}</title>
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
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />
        <Bluebar body={data.bluebar} />

        {/* Text Block */}

        <Paragraph text={data.body} />

        <Bluebar body={data.bluebar2} />

        {/* <Threesegment /> */}

        <Sixgrid title={data.sec2title} imageArray={data.sec2imageArray} />

        {/* <Quoteslider
          title="Kudos from clients"
          testimonials={data.testimonials}
        /> */}

        <ThreeSegment
          title={data.testimonialstitle}
          testimonials={data.testimonials}
        />

        <h1 className="text-4xl text-center font-bold my-20">
          {data.sec3title}
        </h1>

        {/* <div className="bg-stone-500 h-96 flex items-center justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html: data.sec3html,
            }}
          />
        </div> */}

        <div className="flex items-center justify-center overflow-auto">
          <div
            className="pb-10 overflow-auto"
            dangerouslySetInnerHTML={{
              __html: data.sec3html,
            }}
          />
        </div>

        <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold my-20">
          {data.sec4title}
        </h1>
        <div className="flex-auto max-w-3xl justify-center items-center mx-auto px-5">
          <div
            className="pb-10 overflow-auto"
            dangerouslySetInnerHTML={{
              __html: data.sec4html,
            }}
          />
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "forcontractors"][0]{
    title,
    mainImage,
    titlebutton,
    bluebar,
    body,
    bluebar2,
    sec2title,
    sec2imageArray,
    testimonialstitle,
    testimonials[]->{
      _id,
      testimonialperson,
      testimonialquote,
      testimonialimage,
      testimonialposition,
      brokerage,
    },
    sec3title,
    sec3html,
    sec4title,
    sec4html,
    
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
