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

export default function Locations({ data, states, footer }) {
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
        <Bluebar
          theme={"Find your dream home"}
          body={
            "We have a wide range of properties in the most sought-after locations in the city. Find your dream home today."
          }
        />
      </main>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center w-2/3 gap-10 my-28 mx-auto">
        {states
          .filter(
            (state) =>
              state.statename != "Partnerships" &&
              state.statename != "In-House Design Team" &&
              state.statename != "Author"
          )
          .sort((a, b) => a.statename.localeCompare(b.statename))
          .map((state) => (
            <div key={state._id} className="w-full">
              <Link
                href={"/locations/" + state.slug.current}
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
                  <h3 className="text-3xl text-FM-orange">{state.statename}</h3>
                </div>
              </Link>
            </div>
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
  }`);

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
      footer,
      data: mainquery,
    },
  };
}
