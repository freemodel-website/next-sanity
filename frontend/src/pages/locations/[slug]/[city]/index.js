import React from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../../../../../client";
import Head from "next/head";
import Navbar from "../../../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../../../../components/hero";
import Bluebar from "../../../../../components/bluebar";
import Footer from "../../../../../components/footer";
import Paragraph from "../../../../../components/paragraph";
import Projectcard from "../../../../../components/atoms/projectcard";
import Ctabutton from "../../../../../components/atoms/ctabutton";

const ProjectSlug = ({ item }) => {
  console.log(`item`, item);
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
          {/* <div className="w-full">
            <Projectcard
              title={"title C"}
              slug={"slug"}
              image={"/testhouse.jpg"}
            />
          </div>

          <div className="w-full">
            <Projectcard
              title={"title C"}
              slug={"slug"}
              image={"/testhouse.jpg"}
            />
          </div> */}
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

        {/* Projects */}
        {item.pdtitle && (
          <h1 className="text-4xl text-center font-bold my-20">
            {item.pdtitle}
          </h1>
        )}

        {/* Projects */}
        <h1 className="text-4xl text-center font-bold my-20">
          {item.ctaTitle}
        </h1>
        <div className="text-center mb-32">
          <Ctabutton text={item.ctaText} href={"/lets-talk"} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectSlug;

export const getServerSideProps = async ({ params }) => {
  const { city = "" } = params;

  const query = `*[_type == "cities" && slug.current == $city][0] {
    name,
    slug,
    image,
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
    }
  }`;

  const item = await client.fetch(query, { city });

  return {
    props: { item },
  };
};
