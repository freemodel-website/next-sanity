import React from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import AccordianList from "../../components/atoms/accordianlist";
import Ctabutton from "../../components/atoms/ctabutton";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";

export default function FAQ({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`FAQ | Freemodel`}</title>
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

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center font-bold sm:text-5xl my-20">
            Frequently Asked Questions
          </h1>

          <AccordianList faqsList={data.questionsanswers} />

          <div className="my-20">
            <Ctabutton text={data.ctabutton} href="/lets-talk" />
          </div>
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "faqpage"]{
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
    bluetitle,
    body,
    questionsanswers,
    ctabutton
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
      data: data[0],
      footer,
    },

    revalidate: 10,
  };
};
