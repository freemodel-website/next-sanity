import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Steps from "../../components/steps";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";
import Paragraph from "../../components/paragraph";
import Ctabutton from "../../components/atoms/ctabutton";
import Iconrightleftright from "../../components/iconrightleftright";
import { ImageBulletPoints } from "../../components/imagebulletpoints";
import { FourByThreeWindy } from "../../components/fourbythreewindy";
import ImageCaroucel from "../../components/imageCaroucel";
import Caroucel from "../../components/caroucel";
import Videocaroucel from "../../components/videocaroucel";

export default function ForHomeowners({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`For Homeowners | Freemodel`}</title>
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
        <Bluebar body={data.bluebarbody} />

        {/* Text Block */}
        <Paragraph text={data.body} />

        <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold mb-20 px-8">
          {data.lowerbodytitle}
        </h1>
        <div className="mb-24 text-center">
          <Ctabutton
            text={data.bodytitlebutton}
            href="/renovation-services"
            className="mt-12"
          />
        </div>
        <Iconrightleftright
          title={data.leftrightlefttitle}
          imageArray={data.leftrightleftbody}
        />
        <ImageBulletPoints
          title={data.bullettitle}
          image={urlFor(data.bulletImage).url()}
          data={data.bulletSection}
        />

        <FourByThreeWindy
          data={data.windySection}
          title={data.windySectionTitle}
        />
        {data.videoData && (
          <Videocaroucel
            videoData={data.videoData}
            horizontalslider={data.horizontalslider}
            title={data.videotitle}
          />
        )}
        <div className="text-center mt-20  py-20 bg-FM-blue">
          <h1 className="text-5xl text-center text-white font-bold mb-14">
            {data.sec3title}
          </h1>
          <Caroucel projects={data.projects} />
        </div>

        <div className="text-center text-4xl mt-20">
          <style jsx global>{`
            .pgh1custom {
              font-size: 2.5rem;
              line-height: 1.2;
              font-weight: 700;
            }
          `}</style>
          <Paragraph text={data.bottomtitle} />
        </div>

        <div className="mb-8 text-center">
          <Ctabutton
            text={data.bottomtitlebutton}
            href="/lets-talk"
            className="mt-12"
          />
        </div>
        <p className="text-center text-2xl max-w-4xl mx-auto px-4 mb-20">
          {data.bottombody}
        </p>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(` *[_type == "forhomeowners"][0]{ 
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
      //----Icon Right Left Right
      leftrightlefttitle,
      bullettitle,
      leftrightleftbody,
      //----Bullet Points
      bullettitle,
      bulletImage,
      bulletSection,
      //----Windy Section
      windySectionTitle,
      windySection,
      sec3title,
      //----Video Caroucel
      videotitle,
      horizontalslider,
      videoData,
      //----Projects
      projects []-> {
        _id,
        title,
        mainImage,
        beds,
        baths,
        durationmonths,
        slug,
        bool
      },
      bottomtitle,
      bottomtitlebutton,
      bottombody,
      //----SEO
      seoTitle,
      seoDescription,
      seoImage,
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
