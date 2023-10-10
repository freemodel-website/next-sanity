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

export default function AboutUs({ data, footer }) {
  console.log(data);

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>Freemodel</title>
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

        <Bluebar body={data.bluetitle} />

        <LearnSection faqsList={data.questionsanswers} />

        <div className="text-center py-20 bg-FM-blue">
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
