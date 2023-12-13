import Head from "next/head";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import React, { useState } from "react";
import { client, urlFor } from "../../client";
import { useRouter } from "next/router";

export default function LetsTalk({ data, footer }) {
  const tabItems = ["I am an Agent", "I am a Homeowner"];
  const [selectedItem, setSelectedItem] = useState(0);

  const tabContent = [
    <div key={0} className={selectedItem === 0 ? "block" : "hidden"}>
      {/* Content for Overview */}
      <div className="max-w-6xl mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: data.html1,
          }}
        />
      </div>
    </div>,
    <div key={1} className={selectedItem === 1 ? "block" : "hidden"}>
      {/* Content for Billing */}
      <div className="max-w-6xl mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: data.html2,
          }}
        />
      </div>
    </div>,
    <div key={2} className={selectedItem === 2 ? "block" : "hidden"}>
      {/* Content for Transactions */}
      Transactions Content
    </div>,
  ];

  // Get the current URL
  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <div>
      <Head>
        <title>{"Let's Talk | Freemodel"}</title>
        <meta name="description" content={data?.seoDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={data?.seoTitle} />
        <meta property="og:description" content={data?.seoDescription} />
        {data?.seoImage && (
          <meta property="og:image" content={urlFor(data.seoImage).url()} />
        )}
        <meta
          property="og:url"
          content={`https://freemodel.com${currentURL}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar data={footer.navbar} />

      <main>
        <Hero
          hero={{ title: "Let's Talk" }}
          image={urlFor(data.mainImage).url()}
        />

        <div className="px-4 mx-auto md:px-8 md: py-10">
          <ul
            role="tablist"
            className="hidden w-80 mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-100 rounded-lg sm:flex"
            style={{ justifyContent: "center" }}
          >
            {tabItems.map((item, idx) => (
              <li key={idx} className="py-2">
                <button
                  role="tab"
                  aria-selected={selectedItem === idx}
                  aria-controls={`tabpanel-${idx + 1}`}
                  className={`py-2.5 px-4 rounded-lg duration-150 hover:text-FM-orange hover:bg-white active:bg-white/50 font-medium ${
                    selectedItem === idx
                      ? "bg-white text-FM-orange shadow-sm"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedItem(idx)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="relative text-gray-500 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
            >
              {/* ... (SVG path) */}
            </svg>
            <select
              value={tabItems[selectedItem]}
              className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
              onChange={(e) =>
                setSelectedItem(tabItems.indexOf(e.target.value))
              }
            >
              {tabItems.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pb-24">{tabContent}</div>
      </main>

      <Footer data={footer} />
    </div>
  );
}

export const getStaticProps = async () => {
  const mainquery = `*[_type == "letstalk"][0] {
  title,
  mainImage,
  titlebutton,
  html1,
  html2,
  seoTitle,
  seoDescription,
  seoImage,
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

  const data = await client.fetch(mainquery);

  return {
    props: {
      data,
      footer,
    },

    revalidate: 10,
  };
};
