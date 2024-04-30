import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Paragraph from "../../components/paragraph";
import AccordianListWhite from "../../components/atoms/accordianlistwhite";
import Ctabutton from "../../components/atoms/ctabutton";
import Image from "next/image";
import Sixgrid from "../../components/index/sixgrid";
import Doublesection from "../../components/doublesection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projectcard from "../../components/atoms/projectcard";
import { useRouter } from "next/router";

export default function RenovationService({ data, footer }) {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  const MotionDiv = motion.div;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animations will only trigger once when becoming visible
    threshold: 0.2, // Adjust this threshold as needed
  });

  return (
    <div>
      <Head>
        <title>{`Renovation Services | Freemodel`}</title>
        <meta name="description" content={footer.description} />
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
          image={urlFor(data.mainImage).url()}
          buttontext={data.titlebutton}
        />
        <Bluebar body={data.bluebarbody} />
        {/* Text Block */}
        <Paragraph text={data.body} />

        {/* Q&A */}
        <div className="flex flex-col items-center p-8 lg:p-0 bg-FM-blue">
          <div className="mt-12">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              {data.qatitle}
            </h1>
          </div>

          <div className="flex flex-col items-center my-8 w-full sm:w-3/4 sm:flex-row md:w-5/6 lg:w-5/6 xl:w-3/4">
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
              <AccordianListWhite faqsList={data.questionsanswers} />
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={urlFor(data.rightImage).url()}
                alt="rightImage"
                height={800}
                width={800}
                className="object-cover w-96 h-64 mb-6 rounded-2xl shadow-lg lg:h-80 xl:h-96 lg:mt-24"
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

        {/* Media 
        {data.media && (
          <div className="flex flex-col mx-auto items-center max-w-[85vw] my-28">
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
              {/* map through casestudyselect 
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
        */}
        {/* Featured Project */}
        {/* Highlight studies */}
        <div className="flex flex-col items-center py-20 bg-FM-blue">
          <h2 className="text-4xl font-bold text-center sm:text-5xl text-white">
            {data.projecttitle}
          </h2>
          <div className="flex flex-col lg:flex-row max-w-full gap-8 justify-center items-center mt-10">
            <MotionDiv
              ref={ref} // Attach the ref to the MotionDiv
              className="grid gap-12 row-gap-8 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Animate based on inView status
            >
              {data.projects.map((item, index) => (
                <MotionDiv
                  className="text-center "
                  key={index}
                  variants={itemVariants}
                >
                  <Projectcard
                    key={Math.random() * 100000000000000}
                    title={item.title}
                    slug={item.slug.current}
                    image={urlFor(item.mainImage).url()}
                    beds={item.beds}
                    baths={item.baths}
                    duration={item.durationmonths}
                    bool={item.bool}
                  />
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-FM-blue">
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
  const mainquery = await client.fetch(`*[_type == "renovationservices"][0]{
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
    //----Featured Projects
    projecttitle,
    projects []-> {
      _id,
      title,
      mainImage,
      beds,
      baths,
      durationmonths,
      bool,
      slug {
        current
      }
    },
    //----Bottom Section
    bottomtitle,
    bottomtitlebutton,
    bottombody,
    //----SEO
    seoTitle,
    seoDescription,
    seoImage,
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
