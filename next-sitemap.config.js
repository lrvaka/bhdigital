/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.blockhead.digital",
  generateRobotsTxt: true, // (optional)
  exclude: ["/landing-page"],
  // ...other options
};
