import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import DesignQA from "../../components/designqa";
import ImageLeftTextRight from "../../components/imagelefttextright";
import Testimonial from "../../components/atoms/testimonial";
import { FourByThreeWindy } from "../../components/fourbythreewindy";
import Becomeapd from "../../components/becomeapd";
import Imageteamgrid from "../../components/imageteamgrid";
import { useRouter } from "next/router";

export default function ForDesigners({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`For Designers | Freemodel`}</title>
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
          hero={{ title: data?.title }}
          image={urlFor(data.mainImage).url()}
          buttontext={data.titlebutton}
        />
        <Bluebar
          theme={"rightimg"}
          body={data.bluebarbody}
          img={data.bluebarimage}
        />
        {/* Text Block */}
        <Paragraph text={data.body} />
        <DesignQA
          title={data.qatitle}
          image={data.questionimage}
          faqsList={data.questionsanswers}
          buttontitle={data.buttontitle}
        />

        <ImageLeftTextRight
          image={data.lirtimage}
          title={data.lirttitle}
          text={data.lirttext}
        />
        {/* Testimonial Section */}
        <div className="flex flex-col items-center pt-16 mt-12 bg-FM-blue">
          <h1 className="text-4xl font-extrabold text-center text-white sm:text-5xl">
            {data.pdtitle}
          </h1>
          <Testimonial
            image={urlFor(data.pdimage).url()}
            quote={data.pdquote}
            name={data.pdname}
            jobtitle={data.pdjobtitle}
          />
        </div>

        {/* Windy Section */}
        <FourByThreeWindy
          data={data.windySection}
          title={data.windySectionTitle}
        />
        {/* Become a Project Director */}
        <Becomeapd
          title={data.becomepdtitle}
          texth={data.becomepdec1}
          button={data.becomepdbutton}
          texth2={data.becomepdec2}
          button2={data.becomepdbutton2}
        />
        {/* Team Image Grid */}
        <Imageteamgrid
          title={data.amazingtitle}
          images={data.amazingteamimages}
          button={data.amazingbutton}
        />
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(` *[_type == "fordesigners"][0]{
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
        bluebarimage,
        body,
        //-----QA
        qatitle,
        questionimage,
        questionsanswers,
        //-----lirt
        lirtimage,
        lirttitle,
        lirttext,
        //-----pd 
        pdtitle,
        pdimage,
        pdquote,
        pdname,
        pdjobtitle,
        //-----Windy Section
        windySectionTitle,
        windySection,
        //-----Become a PD
        becomepdtitle,
        becomepdec1,
        becomepdtext,
        becomepdbutton,
        becomepdec2,
        becomepdtext2,
        becomepdbutton2,
        //-----Team
        amazingtitle,
        amazingteamimages,
        amazingbutton,
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
