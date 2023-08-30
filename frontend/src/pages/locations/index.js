import React from "react";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import Bluebar from "../../../components/bluebar";
import Image from "next/image";
import Footer from "../../../components/footer";
import Link from "next/link";

export default function Locations({ states }) {
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <Hero hero={{ title: "Locations" }} />
        <Bluebar
          theme={"Find your dream home"}
          body={
            "We have a wide range of properties in the most sought-after locations in the city. Find your dream home today."
          }
        />
      </main>
      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center w-2/3 gap-10 my-28 mx-auto">
        {states
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
                    className=" rounded-xl object-cover"
                  />
                </div>

                <div className="py-4">
                  <h3 className="text-3xl text-FM-orange">{state.statename}</h3>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      states,
    },
  };
}
