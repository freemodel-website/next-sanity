import React from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { client, urlFor } from "../../../client";
import Paragraph from "../../../components/paragraph";
import Image from "next/image";

const Blog = ({ data, footer }) => {
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

  return (
    <div>
      <Head>
        <title>Freemodel</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ENicon.svg" /> */}
      </Head>

      <Navbar />

      <main>
        {/* Title Header Section */}
        <section className="bg-gray-800 py-14">
          <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
            <div className="max-w-xl">
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                {data.title}
              </h3>
              <p className="mt-3 text-gray-300">{result}</p>
              {data.projectdirector && (
                <p className="mt-3 text-gray-300">
                  Written By: {data.projectdirector}
                </p>
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
        projectdirector,

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
  }`);

  const data = await client.fetch(query, { blog });

  return {
    props: {
      data: data[0],
      footer,
    },
  };
};