/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      //Northern California
      {
        source: "/projects/california/norcal/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //Northern California-2
      {
        source: "/projects/california/norcal-2/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //Northern California-2
      {
        source: "/projects/california/norcal-3/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //Southern California
      {
        source: "/projects/california/socal/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //Florida
      {
        source: "/projects/florida/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //Texas
      {
        source: "/projects/texas/:slug*",
        destination: "/projects/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
    ];
  },
};

module.exports = nextConfig;
