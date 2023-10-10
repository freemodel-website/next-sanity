import React from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { client, urlFor } from "../../../client";
import Paragraph from "../../../components/paragraph";
import Image from "next/image";
import { useRouter } from "next/router";

const Blog = ({ data, footer }) => {
  console.log(data);
  // Create a Date object from the input string
  var dateObj = new Date(data.publishedAt);
  // Define an array for month names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Get the month and day components
  var month = monthNames[dateObj.getMonth()]; // Get month name
  var day = dateObj.getDate(); // Get day of the month
  // Format the day with zero-padding if needed
  var formattedDay = day < 10 ? "0" + day : day;
  // Combine the components to get the desired format
  var result = month + " " + formattedDay;

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
        <meta property="og:description" content={data.title} />
        <meta property="og:image" content={urlFor(data.mainImage).url()} />
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        {/* Title Header Section */}
        <section className="bg-gray-800 py-14">
          <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
            <div className="max-w-6xl">
              <h3 className="text-white text-3xl font-semibold sm:text-5xl">
                {data.title}
              </h3>
              <p className="mt-3 text-gray-300">{result}</p>
              {data.projectdirector && (
                <div className="text-white font-bold">
                  Written By: &nbsp;
                  <a
                    href={`/team/${data.projectdirector.slug.current}`}
                    className="text-white hover:underline"
                  >
                    {data.projectdirector.name}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="">
          <div className="relative h-96 mx-auto md:h-[70vh] md:max-w-[72vw]">
            <Image
              className="object-cover shadow-lg"
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>
        </section>

        <Paragraph text={data.body} />

        {/* More blog posts */}
        {data.relatedPosts && (
          <div className="flex flex-col items-center mb-40">
            <h2 className="text-4xl font-bold mb-10">More Posts</h2>
            <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-10">
              {/* map through relatedPosts */}
              {data.relatedPosts.map((item, key) => (
                <div
                  className="relative w-full mx-auto group px-8 sm:max-w-lg"
                  key={key}
                >
                  <a href={item.slug.current}>
                    <div className="relative h-80 w-full">
                      <Image
                        src={urlFor(item.mainImage).url()}
                        alt={item.title}
                        fill
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-3 space-y-2">
                      <h3 className="text-2xl text-gray-800 duration-150 group-hover:underline font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer data={footer} />
    </div>
  );
};

export default Blog;

export const getServerSideProps = async (context) => {
  const { blog = "" } = context.params;

  const query = `*[_type == "post" && slug.current == $blog] {
        title,
        slug,
        body,
        mainImage,
        publishedAt,
        projectdirector->{
            name,
            slug,
            image,
            },
        relatedPosts[]->{
            title,
            slug,
            mainImage,
            publishedAt,
            projectdirector->{
                name,
                slug,
                image,
                },
            },
        
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

  const data = await client.fetch(query, { blog });

  return {
    props: {
      data: data[0],
      footer,
    },
  };
};
