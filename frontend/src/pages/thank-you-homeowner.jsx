import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { client, urlFor } from "../../client";
import Hero from "../../components/hero";
import Paragraph from "../../components/paragraph";
import {
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsPinterest,
} from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export default function ThankYouAgent({ data, footer }) {
  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        <Hero
          hero={{ title: data.title }}
          buttontext={data.titlebutton}
          image={urlFor(data.mainImage).url()}
        />

        <div className="text-center">
          <Paragraph text={data.homeownerbody} />

          <div className="flex flex-col items-center justify-center">
            <p className="text-xl">Follow us on:</p>
            <div className="pt-4 mb-40 flex gap-6 max-w-xs items-center lg:max-w-sm">
              {/* instagram facebook linkedin twitter */}
              {data.instagram?.link && (
                <a
                  href={data.instagram?.link}
                  target="_blank"
                  className="text-4xl text-black"
                >
                  <BsInstagram className="text-3xl text-black" />
                </a>
              )}
              {data.facebook?.link && (
                <a
                  href={data.facebook?.link}
                  target="_blank"
                  className="text-4xl text-black"
                >
                  <FaFacebookF className="text-2xl text-black" />
                </a>
              )}
              {data.linkedin?.link && (
                <a
                  href={data.linkedin?.link}
                  target="_blank"
                  className="text-4xl text-black"
                >
                  <FaLinkedinIn className="text-3xl text-black" />
                </a>
              )}
              {data.pinterest?.link && (
                <a
                  href={data.pinterest?.link}
                  target="_blank"
                  className="text-4xl text-black"
                >
                  <BsPinterest className="text-3xl text-black" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "thankyous"][0] {
      title,
      mainImage,
      titlebutton,
      homeownerbody,
      agentbody,
        instagram,
        facebook,
        linkedin,
        pinterest,

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
