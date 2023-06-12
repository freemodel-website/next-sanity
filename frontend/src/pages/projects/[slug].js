import React from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Image from "next/image";
import Stats from "../../../components/case-study/stats";
import { PortableText } from "@portabletext/react";
import { env } from "process";
import Paragraph from "../../../components/paragraph";
import BeforeAfter from "../../../components/case-study/beforeafter";

const ProjectSlug = ({ item }) => {
  console.log(`item`, item);
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <div className="relative w-full h-[35vw]">
          <Image
            src={urlFor(item.mainImage).url()}
            alt={item.mainImage.asset.altText}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <Stats
          data={{
            title: item.title,
            dollarprofit: item.dollarprofit,
            percentreturn: item.percentreturn,
            soldfor: item.soldfor,
            asis: item.asis,
            renovationprice: item.renovationprice,
            location: item.location,
            beds: item.beds,
            baths: item.baths,
            durationmonths: item.durationmonths,
          }}
        />

        <Paragraph text={item.body} />
        <BeforeAfter />
      </main>
    </div>
  );
};

export default ProjectSlug;

export const getServerSideProps = async ({ params }) => {
  const { slug = "" } = params;

  const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug {
        current
    },
    mainImage {
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
    dollarprofit,
    percentreturn,
    soldfor,
    asis,
    renovationprice,
    "location": *[_id == ^.cities._ref][0],
    beds,
    baths,
    durationmonths,
    body,
    casestudytestimonials,
    beforeimages,
    afterimages,
    moreimages,
    casestudycalltoaction,
    
    }`;

  const caseStudy = await client.fetch(query, { slug: slug });

  return {
    props: {
      item: caseStudy,
    },
  };
};
