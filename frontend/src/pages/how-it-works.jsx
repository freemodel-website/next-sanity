import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Steps from "../../components/steps";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";

export default function HowItWorks({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`How It Works | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={data?.seoTitle} />
        <meta property="og:description" content={data?.seoDescription} />
        {data?.seoImage ? (
          <meta property="og:image" content={urlFor(data.seoImage).url()} />
        ) : (
          <meta
            property="og:image"
            content="https://freemodel.com/SEODefaultLogo.png"
          />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
        {/* END: Open Graph */}
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />
        <Bluebar
          theme={"titletext"}
          title={data.bluebartitle}
          body={data.bluebarbody}
        />
        <Steps title={data.threesectiontitle} data={data.threeSecArray} />

        {data.videoData && (
          <Videocaroucel
            videoData={data.videoData}
            horizontalslider={data.horizontalslider}
            title={data.videotitle}
          />
        )}
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(`*[_type == "howitworks"][0]{
    title,
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
    bluebartitle,
    bluebarbody,
    threesectiontitle,
    threeSecArray,
    //----SEO
    seoTitle,
    seoDescription,
    seoImage,
    //----Video Caroucel
     videotitle,
      horizontalslider,
      videoData,
  }`);

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
