import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import Accordianlist from "../../components/atoms/accordianlist";
import Ctabutton from "../../components/atoms/ctabutton";
import Image from "next/image";
import Sixgrid from "../../components/index/sixgrid";
import Doublesection from "../../components/doublesection";

export default function RenovationService({ data, footer }) {
  console.log(`DEBUG ${JSON.stringify(data.media)}`);
  return (
    <div>
      <Head>
        <title>{`Renovation Service | Freemodel`}</title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero hero={{ title: data.title }} buttontext={data.titlebutton} />
        <Bluebar body={data.bluebarbody} />
        {/* Text Block */}
        <Paragraph text={data.body} />

        {/* Q&A */}
        <div className="flex flex-col items-center p-8 lg:p-0">
          <div className="mt-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {data.qatitle}
            </h1>
          </div>
          <div className="flex flex-col items-center mt-8 w-full sm:w-3/4 md:w-1/2 lg:flex-row lg:w-1/3 xl:w-3/4">
            <div className="flex flex-col items-center">
              <Image
                src={urlFor(data.leftImage).url()}
                alt="leftImage"
                height={800}
                width={800}
                className="object-cover w-96 h-64 mb-6 rounded-2xl shadow-lg lg:h-80 xl:h-96"
              />
            </div>
            <div className="mt-14 mb-20">
              <Accordianlist faqsList={data.questionsanswers} />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={urlFor(data.rightImage).url()}
                alt="rightImage"
                height={800}
                width={800}
                className="object-cover w-96 h-64 mb-6 rounded-2xl shadow-lg lg:h-80 xl:h-96 xl:mt-24"
              />
            </div>
          </div>
        </div>

        <Doublesection imageArray={data.twosecimageArray} />
        <div className="mb-8 text-center">
          <Ctabutton
            text={data.doubletitlebutton}
            href="/lets-talk"
            className="mt-12"
          />
        </div>

        {/* Media */}
        {data.media && (
          <div className="flex flex-col mx-auto items-center max-w-[85vw] my-28">
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
              {/* map through casestudyselect */}
              {data.media.map((item) => (
                <a
                  key={item._id}
                  href={item.url}
                  target="_blank"
                  className="group"
                >
                  <div className="flex flex-col max-w-md p-6 dark:text-gray-100">
                    <div className="relative h-64 sm:h-64">
                      <Image
                        src={urlFor(item.image).url()}
                        alt=""
                        fill
                        className="flex-shrink-0 object-cover rounded-lg aspect-square"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl text-black font-semibold mt-3 group-hover:underline">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="bg-gray-800">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              {data.bottombody}
            </h2>

            <div className="mb-8 mt-16 text-center">
              <Ctabutton
                text={data.bottomtitlebutton}
                href="/lets-talk"
                className="mt-12"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(` *[_type == "renovationservices"][0]{
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
      bluebarbody,
      body,
      lowerbodytitle,
      bodytitlebutton,
      //----Q&A
      qatitle,
      leftImage {
        hotspot,
        crop,
        asset->{
          _id,
          url
        }
      },
      rightImage {
        hotspot,
        crop,
        asset->{
          _id,
          url
        }
      },
      questionsanswers,
      //----TwoSection
      twosecimageArray,
      doubletitlebutton,
      media[]->{
        _id,
        name,
        url,
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
            },
        },
    },
      //----Bottom Section
      bottomtitle,
      bottomtitlebutton,
      bottombody,
    }`);

  // Footer data
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
      data: mainquery,
      footer,
    },

    revalidate: 10,
  };
};
