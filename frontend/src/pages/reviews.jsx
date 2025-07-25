import React, { use, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import ThreeSection from "../../components/careers/threesection";
import { client, urlFor } from "../../client";
import WorkableEmbed from "../../components/careers/workableEmbed";
import { useRouter } from "next/router";
import { useState } from "react";
import Ctabutton from "../../components/atoms/ctabutton";
import Videocaroucel from "../../components/videocaroucel";
import Logogrid from "../../components/logogrid";

export default function Career({ data, footer }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    // Redirect to homepage
    router.push("/");
  }, [router]);

  return null; // Or <p>Redirecting...</p> if you'd like a message
}

// return (
//   <div>
//     <Head>
//       <title>{`${data.title}`}</title>
//       <meta name="description" content={footer.description} />
//       <link rel="icon" href="/favicon.ico" />

//       {/* Open Graph meta tags for social media sharing */}
//       <meta property="og:title" content="Freemodel" />
//       <meta property="og:description" content={footer.description} />
//       <meta property="og:image" content={urlFor(footer.footerimage).url()} />
//       <meta
//         property="og:url"
//         content={`https://freemodel.com${currentURL}`}
//       />
//       <meta property="og:type" content="website" />
//       <script
//         type="text/javascript"
//         src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
//         async
//       ></script>
//     </Head>

//     <Navbar data={footer.navbar} />

//     <main>
//       <Hero
//         hero={{ title: data.title }}
//         buttontext={data.titlebutton}
//         image={urlFor(data.mainImage).url()}
//       />

//       <ThreeSection imageArray={data.imageArray} reverseIndexBg />

//       <h1 className="text-4xl text-center font-bold sm:text-5xl my-20">
//         {data.sec2title}
//       </h1>

//       {/* Trustpilot Widget: Only render on client to avoid hydration mismatch */}
//       {isClient && (
//         <div className="my-10">
//           <div
//             className="trustpilot-widget"
//             data-locale="en-US"
//             data-template-id="539adbd6dec7e10e686debee"
//             data-businessunit-id="64dfddfdddd3121e198d462b"
//             data-style-height="800px"
//             data-style-width="100%"
//             data-stars="4,5"
//             data-review-languages="en"
//           >
//             <a
//               href="https://www.trustpilot.com/review/freemodel.com"
//               target="_blank"
//               rel="noopener"
//             >
//               Trustpilot
//             </a>
//           </div>
//         </div>
//       )}

//       <ThreeSection
//         imageArray={data.imageArray2}
//         sec3title={data.sec3title}
//         sec3link={data.sec3link}
//         newpage={true}
//       />
//       {/* CTA button */}
//       {/* <div className="flex justify-center pb-10 bg-FM-blue">
//         <Ctabutton href={data.sec3link} text={data.sec3title} />
//       </div> */}

//       {data.videoData && (
//         <Videocaroucel
//           videoData={data.videoData}
//           horizontalslider={data.horizontalslider}
//           title={data.videotitle}
//         />
//       )}

//       <Logogrid
//         logoArray={data.logoslist}
//         title={data.logostitle}
//         subtitle={data.logossubtitle}
//       />

//       {/* CTA2 button */}
//       <div className="flex justify-center pb-16">
//         <Ctabutton href={data.lastbuttonlink} text={data.lastbuttontitle} />
//       </div>
//     </main>

//     <Footer data={footer} />
//   </div>
// );
//}
export const getStaticProps = async () => {
  const mainquery = `*[_type == "reviews"]{
    title,
    mainImage {
      crop,
      hotspot,
      asset-> {
        _id,
        url
      }
    },
    titlebutton,
    imageArray []{
      image {
        crop,
        hotspot,
        asset-> {
          _id,
          url
        }
      },
      title,
      text
    },
    imageArray2 []{
      image {
        crop,
        hotspot,
        asset-> {
          _id,
          url
        }
      },
      title,
      text
    },
    sec2title,
    sec3title,
    sec3link,
    videotitle,
    horizontalslider,
    videoData,
    logostitle,
    logossubtitle,
    logoslist []{
      image {
        crop, 
        hotspot,
        asset->{
          _id,
          url
        }
      }
    },
    lastbuttontitle,
    lastbuttonlink,
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

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      footer,
    },

    revalidate: 10,
  };
};
