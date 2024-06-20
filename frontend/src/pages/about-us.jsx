import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import LearnSection from "../../components/about-us/learnsection";
import Carousel from "../../components/caroucel";
import { client, urlFor } from "../../client";
import ImageCaroucel from "../../components/imageCaroucel";
import { useRouter } from "next/router";
import Videocaroucel from "../../components/videocaroucel";

export default function AboutUs({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`${data.title} | Freemodel`}</title>
        <meta name="description" content={data.bluetitle} />
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

        <Bluebar body={data.bluetitle} />

        <LearnSection faqsList={data.questionsanswers} />

        {data.videoData && (
          <Videocaroucel
            videoData={data.videoData}
            horizontalslider={data.horizontalslider}
            title={data.videotitle}
          />
        )}

        <div className="text-center py-20 mt-10 bg-FM-blue">
          <ImageCaroucel gallery={data.imagesGallery} />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "aboutus"][0]{
    title,
    mainImage {
      crop {
        _type,
        top,
        bottom,
        left,
        right
      },
      hotspot {
        _type,
        x,
        y,
        height,
        width
      },
      asset-> {
        _id,
        url
      }
    },
    titlebutton,
    bluetitle,
    questionsanswers,
    imagesGallery,
    //----Video Caroucel
    videotitle,
      horizontalslider,
      videoData,
    //----SEO
    seoTitle,
    seoDescription,
    seoImage,
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
