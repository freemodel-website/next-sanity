// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { client } from "../../../client";

export const getServerSideProps = async (ctx) => {
  try {
    // Fetch data from sanity.io
    const sanityData = await client.fetch(`*[_type == "caseStudy"]{
        slug {
          current
        }
      }`);

    // Extract URLs from sanityData and create an array of URLs
    const urls = sanityData.map((item) => {
      // Construct the URL based on your data structure
      // For example, assuming each item has a "slug" field
      return `https://freemodel.com/projects/${item.slug.current}.xml`;
    });

    // Return the sitemap index using the URLs
    return getServerSideSitemapIndexLegacy(ctx, urls);
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: {} }; // or handle the error appropriately
  }
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
