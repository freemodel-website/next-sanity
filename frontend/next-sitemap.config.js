/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://freemodel.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap-index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://freemodel.com/server-sitemap-index.xml", // <==== Add here
    ],
  },
};
