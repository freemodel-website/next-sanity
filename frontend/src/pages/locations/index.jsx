import React from "react";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import Bluebar from "../../../components/bluebar";
import Image from "next/image";
import Footer from "../../../components/footer";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Locations({ data, states, norcal, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`Locations | Freemodel`}</title>
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
        <Bluebar theme={"Find your dream home"} body={data.bluetitle} />
      </main>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center w-2/3 gap-10 my-28 mx-auto">
        {norcal
          .filter(
            (state) =>
              state.statename != "Partnerships" &&
              state.statename != "In-House Design Team" &&
              state.statename != "Author"
          )
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((state) => (
            <>
              {!state?.hide && (
            <div key={state._id} className="w-full">
              <Link
                href={"/locations/norcal/" + state.slug.current}
                className="mx-auto w-5/6 md:w-[30vw]"
              >
                <div className="relative h-52 md:h-[20vw]">
                  <Image
                    alt="Lava"
                    src={urlFor(state.image).url()}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="py-4">
                  <h3 className="text-3xl text-FM-orange">{state.name}</h3>
                </div>
              </Link>
            </div>
              )}
            </>
          ))}
      </div>
      <Footer data={footer} />
    </div>
  );
}

export async function getStaticProps() {
  const mainquery = await client.fetch(`*[_type == "locationspage"][0]{
    title,
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
    bluetitle,
    //----SEO
    seoTitle,
    seoDescription,
    seoImage,
  }`);

  const norcal =
    await client.fetch(`*[_type == "states" && slug.current == "norcal"] {
  "cities": *[
    _type == "cities" &&
    references(^._id) &&
    name != "Sacramento"
  ] {
        _id,
        name,
        slug,
        hide,
        image {
          crop, 
      hotspot,
            asset->{
                _ref,
                _type,
                altText,
                description,
                "tags": opt.media.tags[]->name.current,
                title,
                url
            }
          },
    }
    }[0].cities`);

  const states = await client.fetch(`*[_type == "states"]{
    _id,
    statename,
    stateabbr,
    hero,
    slug,
    image{
      crop, 
      hotspot,
      asset->{
        _id,
        url
      },
    },
    
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
      states,
      norcal,
      footer,
      data: mainquery,
    },

    revalidate: 10,
  };
}
