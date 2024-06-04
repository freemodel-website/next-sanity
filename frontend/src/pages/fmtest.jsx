import React, { use, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import ThreeSection from "../../components/careers/threesection";
import { client, urlFor } from "../../client";
import WorkableEmbed from "../../components/careers/workableEmbed";
import { useRouter } from "next/router";
import Videocaroucel from "../../components/videocaroucel";

export default function Career({ data, footer }) {
  let test;

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  const videoData1 = [
    {
      horizontalslider: false,
      videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
      title: "Cumque cupiditate tempore eius error.",
      description:
        "Vero cupiditate sed delectus. Nobis velit autem. Repellendus pariatur dolorum commodi rerum assumenda nemo neque minima. Sit dolorem dolorum ab dolor cupiditate.",
    },
    // {
    //   horizontalslider: false,
    //   videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
    //   title: "Title 2",
    //   description: "Description 2",
    // },
    // {
    //   horizontalslider: false,
    //   videourl: "https://player.vimeo.com/video/903438744?h=d43eaf3756",
    //   title: "Title 3",
    //   description: "Description 3",
    // },
  ];

  const videoData2 = [
    {
      horizontalslider: true,
      videourl: "https://player.vimeo.com/video/823489509?h=a68bf7750d",
      title: "Title 3",
      description: "Description 3",
    },
    {
      horizontalslider: true,
      videourl: "https://player.vimeo.com/video/823489509?h=a68bf7750d",
      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <div>
      <Head>
        <title>{`TEST`}</title>
        {/* Don't crawl */}
        <meta name="robots" content="noindex, nofollow" />
        {/* Don't cache */}
      </Head>
      <Navbar data={footer.navbar} />
      {/* START */}

      <main>
        <Hero hero={{ title: "TEST PAGE" }} image={"/testhouse.jpg"} />

        <h1 className="text-4xl text-center font-bold sm:text-5xl my-10 pt-10">
          TESTING
        </h1>

        <Videocaroucel videoData={videoData1} horizontalslider={false} />
        <br />
        <br />

        <h1 className="text-4xl text-center font-bold sm:text-5xl my-10 pt-10">
          TESTING
        </h1>
        <Videocaroucel videoData={videoData2} horizontalslider={true} />

        {/* Emtpy section */}
        <div className="h-20 "></div>
      </main>

      {/* END */}
      <Footer data={footer} />
    </div>
  );
}
export const getStaticProps = async () => {
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
      footer,
    },

    revalidate: 10,
  };
};
