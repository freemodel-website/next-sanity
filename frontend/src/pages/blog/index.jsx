import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { client, urlFor } from "../../../client";
import Image from "next/image";
import Hero from "../../../components/hero";

export default function Blog({ data, blogpage, footer }) {
  console.log("data", data);

  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      <Head>
        <title>Freemodel</title>
      </Head>

      <Navbar />
      <main>
        <Hero
          hero={{ title: blogpage.title }}
          buttontext={blogpage.titlebutton}
          image={urlFor(blogpage.mainImage).url()}
        />

        <div className="flex flex-col items-center mb-40 mt-16 sm:px-16">
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center">
            {currentData.map((item, key) => (
              <div
                className="relative w-full mx-auto group px-4 pb-10 sm:max-w-lg"
                key={key}
              >
                <a href={`/blog/${item.slug.current}`}>
                  <div className="relative h-80 w-full">
                    <Image
                      src={urlFor(item.mainImage).url()}
                      alt={item.title}
                      fill
                      className="w-full object-cover rounded-lg"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
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
          {/* Pagination */}
          <div className="my-4 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`mx-2 py-2 px-4 rounded ${
                  currentPage === index + 1
                    ? "bg-FM-orange text-white font-bold"
                    : "bg-gray-200 font-bold"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = await client.fetch(`*[_type == "post"]{
    title,
    slug,
    publishedAt,
    projectdirector->{
      name,
      slug
    },
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
    body,
    excerpt,
  }`);

  const blogpage = await client.fetch(`*[_type == "blogpage"][0]{
    title,
    titlebutton,
    mainImage {
      hotspot,
      crop,
      asset->{
        _id,
        url
      }
    },
  }`);

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

  return {
    props: {
      data: mainquery,
      footer,
      blogpage,
    },

    revalidate: 10,
  };
};
