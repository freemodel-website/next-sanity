import React from "react";
import { client, urlFor } from "../../client";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import PortableText from "@sanity/block-content-to-react";
import Projectcard from "../../components/atoms/projectcard";
import Image from "next/image";
import ImageCaroucel from "../../components/imageCaroucel";
import { useRouter } from "next/router";
import Paragraph from "../../components/paragraph";
import { useState, useEffect } from "react";

const Brokerage = ({ data, footer }) => {
  let brokerage = data;
  const [imageType, setImageType] = useState(false);

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  // If there is no gallery, set a default image

  useEffect(() => {
    // If there is no gallery, set a default image
    if (!brokerage.imageArray) {
      setImageType(true);

      brokerage.imageArray = [
        //1
        {
          text: "A local project director to design, plan, and manage renovations.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-1.webp",
            },
          },
        },
        //2
        {
          text: "Designers selecting top selling design trends.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-2.webp",
            },
          },
        },
        //3
        {
          text: "Licensed contractors to ensure project quality.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-3.webp",
            },
          },
        },
        //4
        {
          text: "No upfront cost, no interest, saving $ for everyone.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-4.webp",
            },
          },
        },
        //5
        {
          text: "Any renovation size from single-rooms to full home transformations.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-5.webp",
            },
          },
        },
        //6
        {
          text: "An easy approval process; no credit or background checks.",
          image: {
            asset: {
              url: "/defaultSixGrid/six-6.webp",
            },
          },
        },
      ];
    }
  }, [brokerage.imageArray]);

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
          hero={{ title: brokerage.title }}
          image={urlFor(brokerage.mainImage.asset.url).url()}
        />

        {brokerage.text && <Bluebar body={brokerage.text} />}

        {/* Title */}
        <h1
          className={`text-4xl font-bold text-center mt-20 max-w-5xl mx-auto`}
        >
          {brokerage.bodyTitle}
        </h1>

        {/* Body */}
        {brokerage.body && (
          <div className="max-w-3xl mx-auto mt-10 mb-10">
            <PortableText blocks={brokerage.body} />
          </div>
        )}

        {/* Projects */}
        {brokerage.projects && (
          <div className="max-w-7xl mx-auto mb-20">
            {/* <h2 className="text-4xl font-bold text-center my-20">
              {brokerage.title} Projects
            </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {brokerage.projects.map((project) => (
                <div key={project._id}>
                  <Projectcard
                    title={project.title}
                    image={urlFor(project.mainImage.asset.url).url()}
                    beds={project.beds}
                    baths={project.baths}
                    duration={project.durationmonths}
                    slug={project.slug.current}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {brokerage.callout && (
          <Bluebar body={brokerage.callout} className="mt-20" />
        )}

        {/* Image Array */}
        {brokerage.imageArray && (
          <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-5xl font-bold text-center mt-20 mb-10">
              {brokerage.sectionhead ? brokerage.sectionhead : "Why Freemodel?"}
            </h2>

            <div className="flex justify-center items-center px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                {brokerage.imageArray.map((item) => (
                  <a
                    key={item._id}
                    href={item.link}
                    target="_blank"
                    className="group mx-auto w-full flex items-center"
                  >
                    <div className="flex flex-col w-full dark:text-gray-100">
                      <div className="relative h-64 sm:h-64 sm:w-96 !w-full">
                        {!imageType && (
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.title}
                            fill
                            className="flex-shrink-0 object-cover rounded-lg aspect-square w-full"
                          />
                        )}
                        {imageType && (
                          <Image
                            src={item.image.asset.url}
                            alt={item.title}
                            fill
                            className="flex-shrink-0 object-cover rounded-lg aspect-square w-full"
                          />
                        )}
                      </div>

                      <div className="w-full">
                        <h2
                          className={`text-xl text-black font-semibold mt-3
                ${item.link ? "group-hover:underline" : ""}
              `}
                        >
                          {item.title}
                        </h2>
                        {item.text && (
                          <p className="mt-2 line-clamp-3 text-base/relaxed text-black min-h-[52px]">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Image Gallery */}
        <div className="text-center py-20 bg-FM-blue">
          <h1 className="text-5xl text-center text-white font-bold">
            {brokerage.imageGallaryTitle}
          </h1>
          {brokerage.imageGallaryBody && (
            <div className="max-w-3xl mx-auto !text-3xl text-white">
              <style>
                {`
                  .custom-styling-broker {
                    font-size: 24px !important;
                    margin-bottom: -20px;
                  }
                `}
              </style>
              <Paragraph text={brokerage.imageGallaryBody} />
            </div>
          )}

          <ImageCaroucel gallery={brokerage.imagesGallery} />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
};

export default Brokerage;

export const getServerSideProps = async (context) => {
  const { brokerage = "" } = context.params;

  const query = `*[_type == "brokerage" && slug.current == $brokerage] {
    _id,
    title,
    slug,
    text,
    sectionhead,
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
    body,
    bodyTitle,
    "projects" : *[_type == "caseStudy" && references(^._id)]{
      _id,
      title,
      slug,
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
      durationmonths,
      bool
    },
    callout,
    imageArray,
    imageGallaryTitle,
    imageGallaryBody,
    imagesGallery []{
      title,
      image{
        crop, 
      hotspot,
      asset->{
        _id,
        url
      }
    }
    },
  }[0]`;

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

  const data = await client.fetch(query, { brokerage });

  //get the case studies for this brokerage

  return {
    props: {
      data,
      footer,
    },
  };
};
