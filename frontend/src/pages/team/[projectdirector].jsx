import React from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../../../client";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/footer";
import { TeamHeader } from "../../../components/team/teamheader";
import Paragraph from "../../../components/paragraph";
import Projects from "../projects/index";
import Projectcard from "../../../components/atoms/projectcard";
import { BsInstagram } from "react-icons/bs";
import QuoteSlider from "../../../components/quoteslider";
import Ctabutton from "../../../components/atoms/ctabutton";

const ProjectDirector = ({ item, footer }) => {
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
        <TeamHeader item={item[0]} />

        {item[0].bio && <Paragraph text={item[0].bio} />}

        {/* Projects */}
        {item[0].projects && (
          <div className="flex flex-col items-center mx-auto my-12">
            <h2 className="text-4xl font-bold mb-10">Projects</h2>

            <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap gap-8">
              {/* map through casestudyselect */}
              {item[0].projects.map((item) => (
                <div key={item._id} className="max-w-lg">
                  <Projectcard
                    title={item.title}
                    slug={item.slug.current}
                    image={urlFor(item.mainImage.asset.url).url()}
                    beds={item.beds}
                    baths={item.baths}
                    duration={item.durationmonths}
                    bool={item.bool}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media */}
        {item[0].media && (
          <div className="flex flex-col mx-auto items-center max-w-[85vw] my-28">
            <h2 className="text-4xl font-bold mb-10">Media</h2>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
              {/* map through casestudyselect */}
              {item[0].media.map((item) => (
                <a
                  key={item._id}
                  href={item.url}
                  target="_blank"
                  className="group mx-auto"
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

        {/* Testimonials */}
        {item[0].testimonials && (
          <QuoteSlider testimonials={item[0].testimonials} />
        )}

        <div className=" flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl text-center max-w-6xl text-black font-bold mb-10">
            {"Ready to prepare your clients’ homes for sale? Contact us today!"}
          </h1>

          <Ctabutton href="/lets-talk" text={"Let's Talk"} />
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
};

export default ProjectDirector;

export const getServerSideProps = async ({ params }) => {
  const { projectdirector = "" } = params;

  const item = await client.fetch(
    `*[_type == "projectdirector" && slug.current == $projectdirector] {
    name,
    slug,
    quote,
    linkedin,
    instagram,
    facebook,
    pinterest,
    website,
    email,
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
        }
    },
    title,
    bio,
    location->{
        name,
        slug
    },
    testimonials[]->{
      _id,
      testimonialperson,
      testimonialquote,
      testimonialimage,
      testimonialposition,
      brokerage,
    },
    projects[]->{
        _id,
        title,
        slug,
        beds,
        baths,
        durationmonths,
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
        },
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
        }
}
`,
    { projectdirector }
  );

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
      item,
      footer,
    },
  };
};
