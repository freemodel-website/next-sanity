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

export default function ForHomeowners({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  console.log("data", data);

  return (
    <div>
      <Head>
        <title>{`For Homeowners | Freemodel`}</title>
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
        <Bluebar body={data.bluebarbody} />

        {/* Text Block */}
        <Paragraph text={data.body} />

        <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold mb-20">
          If you are not selling your home but still interested in a fully
          managed, custom renovation, check out our Renovation Services page:
        </h1>
        <div className="mb-24 text-center">
          <Ctabutton
            text="Renovation Services"
            href="/lets-talk"
            className="mt-12"
          />
        </div>
        <Iconrightleftright
          title={data.title}
          imageArray={data.sec2imageArray}
        />
        <ImageBulletPoints />
        <FourByThreeWindy
          data={data.windySection}
          title={data.windySectionTitle}
        />
        <div className="text-center mt-20  py-20 bg-FM-blue">
          <h1 className="text-5xl text-center text-white font-bold mb-14">
            {data.sec3title}
          </h1>
          <Caroucel projects={data.projects} />
        </div>

        <h1 className="text-4xl text-center max-w-4xl mx-auto font-bold my-20">
          Interested in working with Freemodel? For starters, make sure we’re in
          your area. If so, drop us a line:
        </h1>
        <div className="mb-24 text-center">
          <Ctabutton text="Let's Talk" href="/lets-talk" className="mt-12" />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(`*[_type == "forhomeowners"][0]{
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
      sec2imageArray,
      windySectionTitle,
      windySection,
      sec3title,
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
