import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Ourprocess from "../../components/for-agents/ourprocess-dark";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import Sixgrid from "../../components/index/sixgrid";
import { useRouter } from "next/router";
import Videocaroucel from "../../components/videocaroucel";
import Paragraph from "../../components/paragraph";
import Ourprocessdark from "../../components/for-agents/ourprocess-dark";
import { ThreeByTwoWindy } from "../../components/threebytwowindy";
import QuoteSlider from "../../components/quoteslider";
import Ctabutton from "../../components/atoms/ctabutton";
import ImageLeftTextRight from "../../components/imagelefttextright";

export default function PartnerWithFreemodel({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`Partner with Freemodel | Freemodel`}</title>
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

      <main className="mb-20">
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
          buttonurl="/careers"
        />

        <Bluebar theme="titletext" title={data.bluebartext} />

        {/* Text Block */}
        <Paragraph text={data.body} />

        {/* QA with image */}
        <div className="bg-FM-blue">
          <Ourprocessdark
            image={data.questionimage}
            faqsList={data.questionsanswers}
            buttontitle={data.buttontitle}
            title={data.title1}
            buttonurl={data.buttonurl}
          />
        </div>

        {/* For By Three */}
        <ThreeByTwoWindy
          data={data.windySection}
          title={data.windySectionTitle}
        />
        {/* line break */}
        <hr className="mt-20 w-96 mx-auto" />

        {/* Image Left Text Right */}
        <ImageLeftTextRight
          image={data.leftimage}
          title={data.righttitle}
          text={data.righttext}
        />

        <QuoteSlider
          title={data.testimonialstitle}
          testimonials={data.testimonials}
        />

        {/* Title */}
        <h2 className="text-center text-5xl font-bold mt-20">
          {data.bottomtitle}
        </h2>
        {/* Text Block */}
        <Paragraph text={data.bottombody} />
        <div className="text-center">
          <Ctabutton text={data.buttontitle2} href={data.buttonlink} />
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "partnerwithfreemodel"][0]{
    title,
    mainImage {
      crop,
      hotspot,
      asset -> {
        _id,
        url
      }
    },
    titlebutton,
    buttonurl,
    bluebartext,
    bluebarimage {
      crop,
      hotspot,
      asset -> {
        _id,
        alt,
        url
      }
    },
    title1,
    body,
    imageArray,
    questionimage {
      crop,
      hotspot,
      asset -> {
        _id,
        alt,
        url
      }
    },
    questionsanswers,
    buttontitle,
    seoTitle,
    seoDescription,
    seoImage,
     //----Video Caroucel
     videotitle,
      horizontalslider,
      videoData,
       windySectionTitle,
      windySection,
      testimonialstitle,
    testimonials[]->{
      _id,
      testimonialperson,
      testimonialquote,
      testimonialimage,
      testimonialposition,
      brokerage,
    },
    bottomtitle,
    bottombody,
    buttontitle2,
    buttonlink,
    leftimage,
    righttitle,
    righttext

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
