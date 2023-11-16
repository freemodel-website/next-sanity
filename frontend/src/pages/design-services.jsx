import React from "react";
import Head from "next/head";
import { client, urlFor } from "../../client";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Bluebar from "../../components/bluebar";
import Footer from "../../components/footer";
import Projectcard from "../../components/atoms/projectcard";
import ImageCaroucel from "../../components/design-services/imagecaroucel";
import MeetTheTeam from "../../components/design-services/meettheteam";
import Ctabutton from "../../components/atoms/ctabutton";
import Paragraph from "../../components/paragraph";
import TeamList from "../../components/team/teamlist";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the library
import { useRouter } from "next/router";

const MotionDiv = motion.div;

export default function DesignServices({ data, footer }) {
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

        <Bluebar body={data.bluetitle} />

        {/* Text Block */}

        <Paragraph text={data.body} />

        {/* Featured Project */}
        {/* Highlight studies */}
        <div className="flex flex-col items-center py-20 bg-FM-blue">
          <h2 className="text-4xl font-bold text-center sm:text-5xl text-white">
            Featured Projects
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

        <ImageCaroucel images={data.imagesGallery} />

        <TeamList
          title={data.projectdirectortitle}
          team={data.projectdirectors}
        />

        <div className=" flex flex-col bg-FM-blue items-center justify-center py-28">
          <h1 className="text-4xl text-center max-w-6xl text-white font-bold mb-10">
            {data.ctatitle}
          </h1>

          <Ctabutton href="/lets-talk" text={data.ctabutton} />
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "designservices"][0]{
    title,
    mainImage {
      crop {
        _type,
        top,
        bottom,
        left,
        right
      },
      hotspot {
        _type,
        x,
        y,
        height,
        width
      },
      asset-> {
        _id,
        url
      }
    },
    titlebutton,
    bluetitle,
    body,
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
    imagesGallery,
    ctabutton,
    ctatitle,
    projectdirectortitle,
    projectdirectors[]-> {
      _id,
      name,
      image,
      slug {
        current
      }
    }

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

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      footer,
    },

    revalidate: 10,
  };
};
