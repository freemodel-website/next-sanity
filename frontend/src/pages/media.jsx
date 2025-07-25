import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import MediaList from "../../components/media/medialist";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";

export default function Media({ data, mediadata, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`Media | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={mediadata?.seoTitle} />
        <meta property="og:description" content={mediadata?.seoDescription} />
        {mediadata?.seoImage ? (
          <meta
            property="og:image"
            content={urlFor(mediadata.seoImage).url()}
          />
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
          hero={{ title: mediadata.title }}
          buttontext={mediadata.titlebutton}
          image={urlFor(mediadata.mainImage).url()}
        />

        <Bluebar
          theme={"titleandbutton"}
          title={"For any press inquiries please contact"}
          buttontext="Contact Us"
        />

        <MediaList media={data} />
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "media"]|order(orderRank){
    name,
    url,
    image {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    }
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

  const mediapage = `*[_type == "mediapage"][0]{
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
    //----SEO
    seoTitle,
    seoDescription,
    seoImage,
  }
  `;

  const data = await client.fetch(mainquery);
  const mediadata = await client.fetch(mediapage);

  return {
    props: {
      data: data,
      mediadata: mediadata,
      footer: footer,
    },

    revalidate: 10,
  };
};
