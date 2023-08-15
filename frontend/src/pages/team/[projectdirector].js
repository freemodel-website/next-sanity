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

const ProjectDirector = ({ item }) => {
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
        <TeamHeader item={item[0]} />

        {item[0].bio && <Paragraph text={item[0].bio} />}

        {/* Projects */}
        {item[0].projects && (
          <div className="flex flex-col items-center mx-auto mx-12 my-28">
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
      </main>
      <Footer />
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
    linkedin,
    instagram,
    pinterest,
    website,
    email,
    image {
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

  return {
    props: { item },
  };
};
