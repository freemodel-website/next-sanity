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
      //Designer to Team
      {
        source: "/designer/:slug*",
        destination: "/team/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //project-director to Team
      {
        source: "/project-director/:slug*",
        destination: "/team/:slug*",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
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

      //------Redirects to freemodel.com--------

      //meet-the-team
      {
        source: "/meet-the-team",
        destination: "/team",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      {
        source: "/contractors",
        destination: "/for-contractors",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      {
        source: "/form-lets-talk-homeowner",
        destination: "/lets-talk",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      {
        source: "/century21award",
        destination: "/c21affiliated",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },

      {
        source: "/contra-costa-county-east-bay",
        destination: "/alameda-contra-costa-east-bay",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      {
        source: "/alameda-east-bay",
        destination: "/alameda-contra-costa-east-bay",
        permanent: true, // Set this to true if it's a permanent redirect (301)
      },
      //
      //------Redirects to get.freemodel.com--------
      //
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
        source: "/warranty",
        destination: "https://get.freemodel.com/warranty",
        permanent: true,
      },
      {
        source: "/themls",
        destination: "https://www.get.freemodel.com/the-mls",
        permanent: true,
      },

      {
        source: "/corcoranicon",
        destination: "/corcoran",
        permanent: true,
      },
      {
        source: "/lets-talk",
        destination: "/contact-us",
        permanent: true,
      },
      // {
      //   source: "/for-designers",
      //   destination: "https://get.freemodel.com/for-designers",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
