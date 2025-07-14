import React from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../../../../client";
import Head from "next/head";
import Navbar from "../../../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../../components/footer";
import Hero from "../../../../components/hero";
import Bluebar from "../../../../components/bluebar";

const ProjectSlug = ({ item, footer }) => {
  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  let description;
  if (item.description) {
    description = item.description;
  } else {
    description = "Find your dream home";
  }

  return (
    <div>
      <Head>
        <title>{`${item.statename} | Freemodel`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={`${item.statename} | Freemodel`} />
        <meta property="og:description" content={description} />
        {item.image ? (
          <meta property="og:image" content={urlFor(item.image).url()} />
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
          hero={{ title: item.statename }}
          buttontext={"Request Estimate"}
          buttonurl={"/request-estimate"}
          image={urlFor(item.image).url()}
        />
        <Bluebar theme={"Find your dream home"} body={description} />

        <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center items-center w-2/3 gap-10 my-28 mx-auto">
          {item.cities
            .filter(
              (city) =>
                city.name != "Partnerships" &&
                city.name != "In-House Design Team" &&
                city.name != "Author"
            )
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((city) => (
              <>
                {!city?.hide && (
                  <div key={city._id} className="w-full">
                    <a
                      href={
                        "/locations/" +
                        item.slug.current +
                        "/" +
                        city.slug.current
                      }
                      className="mx-auto w-5/6 md:w-[30vw]"
                    >
                      <div className="relative h-52 md:h-[20vw]">
                        <Image
                          alt={city.image.altText}
                          src={urlFor(city.image).url()}
                          fill
                          className="rounded-xl object-cover"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-3xl text-FM-blue">{city.name}</h3>
                      </div>
                    </a>
                  </div>
                )}
              </>
            ))}
        </div>
      </main>
      <Footer data={footer} />
    </div>
  );
};

export default ProjectSlug;

export const getServerSideProps = async ({ params }) => {
  const { slug = "" } = params;

  const query = `*[_type == "states" && slug.current == $slug][0] {
    _id,
    statename,
    slug,
    description,
    image {
      crop,
      hotspot,
      asset->{
        _id,
        url
      },
    },
    "cities": *[_type == "cities" && references(^._id)]{
        _id,
        name,
        slug,
        hide,
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

  const item = await client.fetch(query, { slug });

  return {
    props: {
      item,
      footer,
    },
  };
};
