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

const ProjectSlug = ({ item, footer }) => {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{`${item.title} | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta
          property="og:title"
          content={item.title ? item.title : item?.seoTitle}
        />
        <meta property="og:description" content={item?.seoDescription} />
        {item?.mainImage ? (
          <meta property="og:image" content={urlFor(item.mainImage).url()} />
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
        <div className="relative w-full h-96 sm:h-[35vw]">
          <img
            src={urlFor(item.mainImage).url()}
            alt={item.mainImage.asset.altText}
            fill
            className="object-cover w-full h-full"
            priority={true}
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",

              background:
                "linear-gradient(126deg, rgba(0, 0, 0, 0.5) 0%, rgb(0 0 0 / 29%) 100%)",
            }}
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
            locationwritein: item.locationwritein,
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
          moreimagestitle={item.moreimagestitle}
        />

        {/* More case studies */}
        {item.casestudyselect && (
          <div className="flex flex-col items-center my-28">
            <h2 className="text-4xl font-bold mb-10">{"More Case Studies"}</h2>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
              {/* map through casestudyselect */}
              {item.casestudyselect.map((item) => (
                <Projectcard
                  key={item._id}
                  title={item.title}
                  slug={item.slug.current}
                  image={urlFor(item.mainImage).url()}
                  beds={item.beds}
                  baths={item.baths}
                  duration={item.durationmonths}
                  bool={item.bool}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center my-28">
          <h2 className="text-4xl font-bold mb-10">
            {item.casestudycalltoaction}
          </h2>
          <Ctabutton text={item.casestudybuttontext} href="/request-estimate" />
        </div>
      </main>
      <Footer data={footer} />
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
      crop,
      hotspot,
      asset->{
        _ref,
        _id,
        _type,
        altText,
        description,
        "tags": opt.media.tags[]->name.current,
        title,
        url,
        crop,
      }
    },
    dollarprofit,
    percentreturn,
    soldfor,
    asis,
    renovationprice,
    "location": *[_id == ^.cities._ref][0],
    locationwritein,
    beds,
    baths,
    durationmonths,
    body,
    casestudytestimonials,
    beforeimages[] {
        beforeimage {
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
        }
    },
    afterimages[] {
        afterimage {
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
        }

    },
    moreimagestitle,
    moreimages[] {
        moreimage {
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
          beds,
          baths,
          bool,
          durationmonths,
    },
    //----SEO
    seoTitle,
    seoDescription,
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

  const caseStudy = await client.fetch(query, { slug: slug });

  return {
    props: {
      item: caseStudy,
      footer,
    },
  };
};
