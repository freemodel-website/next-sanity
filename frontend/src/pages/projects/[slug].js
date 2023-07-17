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
import Ctabutton from "../../../components/atoms/ctabutton";
import Footer from "../../../components/footer";
import Projectcard from "../../../components/atoms/projectcard";

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
        <div className="relative w-full h-96 sm:h-[35vw]">
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
        <BeforeAfter
          beforeimages={item.beforeimages}
          afterimages={item.afterimages}
          moreimages={item.moreimages}
        />

        {/* More case studies */}
        <div className="flex flex-col items-center my-28">
          <h2 className="text-4xl font-bold mb-10">More Case Studies</h2>
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
            {/* map through casestudyselect */}
            {item.casestudyselect.map((item) => (
              <Projectcard
                key={item._id}
                title={item.title}
                slug={item.slug.current}
                image={urlFor(item.mainImage.asset.url).url()}
                beds={item.beds}
                baths={item.baths}
                duration={item.durationmonths}
              />
            ))}
          </div>
        </div>

        <div className="text-center my-28">
          <h2 className="text-4xl font-bold mb-10">
            {item.casestudycalltoaction}
          </h2>
          <Ctabutton text={item.casestudybuttontext} href="/lets-talk" />
        </div>
      </main>
      <Footer />
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
    beforeimages[] {
        beforeimage {
            asset->{
                _ref,
                _type,
                altText,
                description,
                "tags": opt.media.tags[]->name.current,
                title,
                url
            }
        }
    },
    afterimages[] {
        afterimage {
            asset->{
                _ref,
                _type,
                altText,
                description,
                "tags": opt.media.tags[]->name.current,
                title,
                url
            }
        }

    },
    moreimages[] {
        moreimage {
            asset->{
                _ref,
                _type,
                altText,
                description,
                "tags": opt.media.tags[]->name.current,
                title,
                url
            }
        }
    },
    casestudycalltoaction,
    casestudybuttontext,
    casestudyselect[]->{
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
          beds,
          baths,
          durationmonths,
    },
    }`;

  const caseStudy = await client.fetch(query, { slug: slug });

  return {
    props: {
      item: caseStudy,
    },
  };
};
