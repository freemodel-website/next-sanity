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

const ProjectDirector = ({ item, footer, caseStudies }) => {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  console.log("DEBUG caseStudy", caseStudies);

  return (
    <div>
      <Head>
        <title>
          {`${item[0].name} | ${item[0].location.name} | Freemodel`}
        </title>
        <meta name="description" content={footer.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={item[0].name} />
        <meta property="og:description" content={item[0].seoDescription} />
        {item[0].image ? (
          <meta property="og:image" content={urlFor(item[0].image).url()} />
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
        <TeamHeader item={item[0]} />

        {item[0].bio && <Paragraph text={item[0].bio} />}

        {/* divider line*/}
        {/* {item[0].bio.length > 1 && (
          <div className="border-b-2 border-gray-300 w-1/2 mx-auto mt-10 mb-16 jj"></div>
        )} */}

        {/* Projects */}
        {item[0].projects ||
          (caseStudies.length > 0 && (
            <div className="flex flex-col items-center mx-auto my-12">
              <h2 className="text-5xl font-bold mb-10 mt-10">Projects</h2>

              <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap gap-8">
                {item[0].projects && (
                  <>
                    {/* map through casestudyselect */}
                    {item[0].projects.map((item) => (
                      <div key={item._id} className="max-w-lg">
                        <Projectcard
                          title={item.title}
                          slug={item.slug.current}
                          image={urlFor(item.mainImage).url()}
                          beds={item.beds}
                          baths={item.baths}
                          duration={item.durationmonths}
                          bool={item.bool}
                        />
                      </div>
                    ))}
                  </>
                )}
                {caseStudies.length > 0 &&
                  caseStudies.map((item) => (
                    <div key={item._id} className="max-w-lg">
                      <Projectcard
                        title={item.title}
                        slug={item.slug.current}
                        image={urlFor(item.mainImage).url()}
                        beds={item.beds}
                        baths={item.baths}
                        duration={item.durationmonths}
                        bool={item.bool}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}

        {/* divider line*/}
        {/* {item[0].media && (
          <div className="border-b-2 border-gray-300 w-1/2 mx-auto mt-20 "></div>
        )} */}

        {/* Media */}
        {item[0].media && (
          <div className="flex flex-col mx-auto items-center max-w-[85vw] my-28">
            <h2 className="text-5xl font-bold mb-10 mt-10">Media</h2>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8">
              {/* map through casestudyselect */}
              {item[0].media.map((item) => (
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

        {/* Testimonials */}
        {item[0].testimonials && (
          <div className=" mb-12">
            <QuoteSlider
              testimonials={item[0].testimonials}
              title={
                item[0].testimonialTitle
                  ? item[0].testimonialTitle
                  : "Kudos from Clients"
              }
            />
          </div>
        )}

        {!item[0].testimonials && (
          <div className="border-b-2 border-gray-300 w-1/2 mx-auto mt-20 mb-10"></div>
        )}

        <div className=" flex flex-col items-center justify-center pt-10 pb-24">
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
    testimonialTitle,
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
        },
        //----SEO
    seoTitle,
    seoDescription,
    seoImage,
}
`,
    { projectdirector }
  );

  const caseStudies = await client.fetch(
    `*[_type == "caseStudy" && projectdirectors[0]->slug.current == $projectdirector] {
    slug,
    beds,
    baths,
    bool,
    durationmonths,
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
    projectdirectors[]->{
        _id,
        name,
        slug,
        quote,
        linkedin,
        instagram,
        facebook,
        pinterest,
        website,
        email,
        title,
        bio,
        testimonialTitle,
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
      caseStudies,
    },
  };
};
