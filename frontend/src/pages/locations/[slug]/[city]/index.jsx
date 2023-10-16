import React from "react";
import { client, urlFor } from "../../../../../client";
import Head from "next/head";
import Navbar from "../../../../../components/navbar";
import Hero from "../../../../../components/hero";
import Bluebar from "../../../../../components/bluebar";
import Footer from "../../../../../components/footer";
import Paragraph from "../../../../../components/paragraph";
import Projectcard from "../../../../../components/atoms/projectcard";
import Ctabutton from "../../../../../components/atoms/ctabutton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TeamList from "../../../../../components/team/teamlist";

const ProjectSlug = ({ item, footer }) => {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  console.log("city", item);

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
          hero={{ title: item.name }}
          buttontext={"Let's Talk"}
          image={urlFor(item.image).url()}
        />
        <Bluebar theme={"Find your dream home"} body={item.bluebartext} />

        {/* Text Block */}

        <Paragraph text={item.description} />

        {/* Form */}
        {item.htmlform && (
          <div className="max-w-3xl mx-auto my-20">
            <div
              dangerouslySetInnerHTML={{
                __html: item.htmlform,
              }}
            />
          </div>
        )}

        {/* CTA */}
        {!item.htmlform && (
          <div className="text-center mb-32">
            <Ctabutton text={item.ctaText} href={"/lets-talk"} />
          </div>
        )}

        {/* Projects */}
        {item.projects != 0 && (
          <h1 className="text-4xl text-center font-bold my-20">Projects</h1>
        )}
        <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-3 justify-center items-center sm:w-3/4 gap-10 my-28 mx-auto">
          {item.projects
            .filter((project) => project.slug)
            .map((project) => (
              <div key={project._id} className="w-full">
                <Projectcard
                  title={project.title}
                  image={urlFor(project.mainImage).url()}
                  slug={project.slug.current}
                  beds={project.beds}
                  baths={project.baths}
                  duration={project.durationmonths}
                  bool={project.bool}
                />
              </div>
            ))}
        </div>
        {item.serviceList && (
          <div className="bg-gray-800">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl font-extrabold text-white mx-auto sm:text-[38px] sm:max-w-4xl">
                We Service
              </h2>
              <p className="mt-3 text-xl mx-auto text-gray-300 sm:mt-4 sm:max-w-4xl">
                {item.serviceList}
              </p>
            </div>
          </div>
        )}

        {/* Project Directors */}
        {item.pdtitle && (
          <TeamList title={item.pdtitle} team={item.projectdirector} />
        )}

        {/* Projects */}
        <h1 className="text-4xl text-center font-bold my-20">
          {item.ctaTitle}
        </h1>
        <div className="text-center mb-32">
          <Ctabutton text={item.ctaText} href={"/lets-talk"} />
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
};

export default ProjectSlug;

export const getServerSideProps = async ({ params }) => {
  const { city = "" } = params;

  const query = `*[_type == "cities" && slug.current == $city][0] {
    name,
    slug,
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
    bluebartext,
    description,
    serviceList,
    pdtitle,
    ctaTitle,
    ctaText,
    htmlform,
    "projects" : *[_type == "caseStudy" && references(^._id)]{
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
      bool,
    },
    "projectdirector" : *[_type == "projectdirector" && references(^._id)]{
      name,
      slug,
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
      position,
    },
    state,
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

  const item = await client.fetch(query, { city });

  return {
    props: {
      item,
      footer,
    },
  };
};
