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

  //Redirects to subdomain sitee
  async redirects() {
    return [
      {
        source: "/fairtraderealestate",
        destination: "https://get.freemodel.com/fairtraderealestate",
        permanent: true,
      },
      {
        source: "/c21-award",
        destination: "https://get.freemodel.com/c21-award",
        permanent: true,
      },
      {
        source: "/psir",
        destination: "https://get.freemodel.com/psir",
        permanent: true,
      },
      {
        source: "/partner/sold-marketplace",
        destination: "https://get.freemodel.com/partner/sold-marketplace",
        permanent: true,
      },
      {
        source: "/kiavi",
        destination: "https://get.freemodel.com/kiavi",
        permanent: true,
      },
      {
        source: "/haven-1",
        destination: "https://get.freemodel.com/haven-1",
        permanent: true,
      },
      {
        source: "/haven-2",
        destination: "https://get.freemodel.com/haven-2",
        permanent: true,
      },
      {
        source: "/haven-3",
        destination: "https://get.freemodel.com/haven-3",
        permanent: true,
      },
      {
        source: "/haven-4",
        destination: "https://get.freemodel.com/haven-4",
        permanent: true,
      },
      {
        source: "/homeconcierge",
        destination: "https://get.freemodel.com/homeconcierge",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "https://get.freemodel.com/resources",
        permanent: true,
      },
      {
        source: "/addanewcontractor",
        destination: "https://get.freemodel.com/addanewcontractor",
        permanent: true,
      },
      {
        source: "/addanewcontractor-1",
        destination: "https://get.freemodel.com/addanewcontractor-1",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://get.freemodel.com/support",
        permanent: true,
      },
      {
        source: "/agents/we-remodel-you-sell-for-more-020223",
        destination:
          "https://get.freemodel.com/agents/we-remodel-you-sell-for-more-020223",
        permanent: true,
      },
      {
        source: "/agents/agents-claim-33m-in-profit-for-sellers-0223",
        destination:
          "https://get.freemodel.com/agents/agents-claim-33m-in-profit-for-sellers-0223",
        permanent: true,
      },
      {
        source: "/neighbor",
        destination: "https://get.freemodel.com/neighbor",
        permanent: true,
      },
      {
        source: "/via",
        destination: "https://get.freemodel.com/via",
        permanent: true,
      },
      {
        source: "/agents/increase-your-sales-price-1023",
        destination:
          "https://get.freemodel.com/agents/increase-your-sales-price-1023",
        permanent: true,
      },
      {
        source: "/agents/increase-your-sales-price-1023",
        destination:
          "https://get.freemodel.com/agents/increase-your-sales-price-1023",
        permanent: true,
      },
      {
        source: "/media/john-garner-america-trends",
        destination:
          "https://get.freemodel.com/media/john-garner-america-trends",
        permanent: true,
      },
      {
        source: "/newproject",
        destination: "https://get.freemodel.com/newproject",
        permanent: true,
      },
      {
        source: "/justsold",
        destination: "https://get.freemodel.com/justsold",
        permanent: true,
      },
      {
        source: "/1000marketing",
        destination: "https://get.freemodel.com/1000marketing",
        permanent: true,
      },
      {
        source: "/printmarketing",
        destination: "https://get.freemodel.com/printmarketing",
        permanent: true,
      },
      {
        source: "/agent-appreciation",
        destination: "https://get.freemodel.com/agent-appreciation",
        permanent: true,
      },
      {
        source: "/for-homeowners",
        destination: "https://get.freemodel.com/for-homeowners",
        permanent: true,
      },
      {
        source: "/design-services",
        destination: "https://get.freemodel.com/design-services",
        permanent: true,
      },
      {
        source: "/renovation-services",
        destination: "https://get.freemodel.com/renovation-services",
        permanent: true,
      },
      {
        source: "/for-designers",
        destination: "https://get.freemodel.com/for-designers",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
