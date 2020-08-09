/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  polyfill: false,
  /* Your site config here */
  siteMetadata: {
    title: "CodeDead",
    description: "Solving problems using code",
    siteUrl: "https://codedead.com"
  },
  plugins: [
    `gatsby-theme-material-ui`
  ]
};
