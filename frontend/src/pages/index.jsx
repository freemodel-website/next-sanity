import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Sixgrid from "../../components/index/sixgrid";
import Rightleftright from "../../components/index/rightleftright";
import CarouselAlias from "../../components/caroucel";
import Quoteslider from "../../components/quoteslider";
import Homelocation from "../../components/index/homelocation";
import Footer from "../../components/footer";
import "keen-slider/keen-slider.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home({ data, states, footer }) {
  let [form, setForm] = useState(<script></script>);

  useEffect(() => {
    setForm(data.htmlform);
  }, []);

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        <meta name="description" content={data?.seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={data?.seoTitle} />
        <meta property="og:description" content={data?.seoDescription} />
        {data?.seoImage && (
          <meta property="og:image" content={urlFor(data?.seoImage).url()} />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={data}
          buttontext={data.titlebutton}
          buttontext2={data.titlebutton2}
          buttonurl={data.buttonurl}
          buttonurl2={data.buttonurl2}
          image={urlFor(data.mainImage).url()}
          pomp={true}
        />
        <Sixgrid
          title={data.sec1title}
          imageArray={data.imageArray}
          buttontext={data.sec1button}
        />
        <Rightleftright
          title={data.sec2title}
          imageArray={data.sec2imageArray}
        />

        <div className="text-center mt-20 mb-40">
          <h1 className="text-5xl text-center text-black font-bold mb-14">
            {data.sec3title}
          </h1>
          <CarouselAlias projects={data.projects} />
        </div>

        <Quoteslider
          title={data.testimonialstitle}
          testimonials={data.testimonials}
        />

        <Homelocation states={states} buttontext={data.statesbutton} />

        <div className="px-4 py-16 bg-FM-blue md:px-24 lg:px-8 lg:py-10">
          <div className="grid sm:gap-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:grid-cols-2">
            <div className="lg:pr-10 md: my-auto">
              <h5 className="mb-4 text-4xl text-white font-extrabold leading-none">
                {data.htmltitle}
              </h5>
              <p className="mb-6 text-white">{data.htmlbody}</p>
            </div>
            <div>
              {/* html form */}
              {data.htmlform && (
                <div className="max-w-3xl mx-auto my-10">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.htmlform,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "home"][0] {
    _id,
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
    titlebutton2,
    buttonurl,
    buttonurl2,
    sec1title,
    imageArray,
    sec1button,
    sec2title,
    sec2imageArray,
    sec2button,
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
    testimonialstitle,
    testimonials[]->{
      _id,
      testimonialperson,
      testimonialquote,
      testimonialimage,
      testimonialposition,
      brokerage,
    },
    statesbutton,
    htmltitle,
    htmlbody,
    htmlform, 
    seoTitle,
    seoDescription,
    seoImage,
}`;

  const states = await client.fetch(`*[_type == "states"]{
  _id,
  statename,
  stateabbr,
  hero,
  slug,
  image
  
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

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      states,
      footer,
    },

    revalidate: 10,
  };
};
