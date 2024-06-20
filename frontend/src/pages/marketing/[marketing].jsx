import React, { useState } from "react";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Hero from "../../../components/hero";
import Bluebar from "../../../components/bluebar";
import Paragraph from "../../../components/paragraph";
import Sixgrid from "../../../components/index/sixgrid";
import ImageCaroucel from "../../../components/imageCaroucel";
import Rightleftright from "../../../components/index/rightleftright";
import Image from "next/image";

const MarketingPage = ({ data, footer }) => {
  const [imageType, setImageType] = useState(false);

  return (
    <div>
      <Head></Head>

      <Navbar data={footer.navbar} />
      <main>
        <Hero
          hero={{ title: data.title }}
          image={urlFor(data.mainImage).url()}
        />

        {data.text && <Bluebar body={data.text} />}

        <Paragraph text={data.body} />

        {data.sec2title && (
          <Sixgrid title={data.sec2title} imageArray={data.sec2imageArray} />
        )}
        {/* Right Left Right Image Text */}
        {data.sec3title && (
          <Rightleftright
            title={data.sec3title}
            imageArray={data.sec3imageArray}
          />
        )}

        {/* Image Array */}
        {data.imageArray && (
          <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-5xl font-bold text-center mt-20 mb-10">
              {data.sectionhead ? data.sectionhead : "Why Freemodel?"}
            </h2>

            <div className="flex justify-center items-center px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                {data.imageArray.map((item) => (
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
      </main>
      <div className="text-center py-20 mt-10 bg-FM-blue">
        <ImageCaroucel gallery={data.imagesGallery} />
      </div>
      <Footer data={footer} />
    </div>
  );
};

export default MarketingPage;

export const getServerSideProps = async (context) => {
  const { marketing = "" } = context.params;

  const query = `*[_type == "marketing" && slug.current == $marketing] {
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
    sec2title,
    sec2imageArray,
    imagesGallery,
    sectionhead,
    imageArray,
    sec3title,
    sec3imageArray,
    //-----------------------SEO
    seoTitle,
    seoDescription,
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

  const data = await client.fetch(query, { marketing });

  return {
    props: {
      data,
      footer,
    },
  };
};
