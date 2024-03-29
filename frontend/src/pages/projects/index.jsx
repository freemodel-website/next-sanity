import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import { client, urlFor } from "../../../client";
import Projectcard from "../../../components/atoms/projectcard";
import { FaArrowUp } from "react-icons/fa";
import { useRouter } from "next/router";
const IsotopeReact = dynamic(() => import("../../../components/isotopereact"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Set this to false to avoid server-side rendering for this component
});

import Footer from "../../../components/footer";

export default function Projects({
  casestudies,
  page,
  propertytype,
  spacetype,
  locationstype,
  footer,
}) {
  const [scrolling, setScrolling] = useState(false);
  const divIdToScroll = "searchSection"; // Replace 'yourDivId' with the ID of the div to use as the threshold

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById(divIdToScroll);
      if (targetDiv && window.scrollY > targetDiv.offsetTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divIdToScroll]);

  const scrollToDiv = () => {
    const targetDiv = document.getElementById(divIdToScroll);
    if (targetDiv) {
      window.scrollTo({
        top: targetDiv.offsetTop,
        behavior: "smooth",
      });
    }
  };
  //get all the cities from locationstype with more than 0 case studies
  const cities = locationstype.filter((item) => item.caseStudies.length > 0);

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  //sort the casestudies by date
  casestudies.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <Head>
        <title>{`Projects | Freemodel`}</title>
        <meta name="description" content={page?.seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={page?.seoTitle} />
        <meta property="og:description" content={page?.seoDescription} />
        {page?.seoImage ? (
          <meta property="og:image" content={urlFor(page.seoImage).url()} />
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
      </Head>
      <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: page.title }}
          image={urlFor(page.mainImage).url()}
        />

        {/* Highlight studies */}
        <div className="flex flex-col items-center py-20 bg-FM-blue">
          <h2 className="text-4xl font-bold text-center text-white">
            {page.highlighttitle}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mt-10">
            {page.projecthighlight.map((item) => (
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
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 mb-10">
          <h2 id="searchSection" className="text-4xl font-bold ">
            Customize your search
          </h2>
        </div>

        <IsotopeReact
          casestudies={casestudies}
          propertytype={propertytype}
          spacetype={spacetype}
          locationstype={cities}
        />

        <div className="mb-56"></div>

        <Footer data={footer} />
        {scrolling && (
          <button
            className="fixed bottom-10 right-10 p-3 bg-FM-orange text-white rounded-full cursor-pointer"
            onClick={scrollToDiv}
          >
            <FaArrowUp />
          </button>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const pagequery = `*[_type == "projects"][0] {

    title,
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
    highlighttitle,
    projecthighlight []->{
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
        bool,
        durationmonths,
  },
  seoTitle,
  seoDescription,
  seoImage,
    }
  `;
  const query = ` *[_type == "caseStudy"] {
      _id,
      title,
      date,
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
      slug {
        current
      },
      beds,
      baths,
      bool,
      durationmonths,

      spacetype[]->{
        name,
        slug {
          current
        },
      },
      
      
        "location": *[_id == ^.cities._ref][0],
        

      hometype->{
        _id,
        name,
        mainImage{
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
        slug {
          current
        }
      },
      }`;

  const housequery = `*[_type == "houseType"] {
    _id,
    name,
    mainImage{
      crop, 
      hotspot,
    },
    slug {
      current
    }
    }`;

  const spacequery = `*[_type == "spaceType"] {
        _id,
        name,
        mainImage{
          crop, 
      hotspot,
        },
        slug {
          current
        }
        }`;

  const citiestypes = `*[_type == "cities"] {
          _id,
          name,
          image{
            crop, 
      hotspot,
          },
          state,
          "caseStudies": *[_type == "caseStudy" && references(^._id)]{
            _id,
            title,
          },
          "location": *[_id == ^.state._ref][0],
          slug {
            current
          }
          }
          `;

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

  const casestudies = await client.fetch(query);
  const page = await client.fetch(pagequery);
  //Filter by property type
  const propertytype = await client.fetch(housequery);
  const spacetype = await client.fetch(spacequery);
  const locationstype = await client.fetch(citiestypes);

  return {
    props: {
      casestudies,
      page,
      propertytype,
      spacetype,
      locationstype,
      footer,
    },

    revalidate: 10,
  };
}
