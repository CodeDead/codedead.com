/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  polyfill: false,
  /* Your site config here */
  siteMetadata: {
    title: 'CodeDead',
    description: 'Solving problems using code',
    siteUrl: 'https://codedead.com',
    author: 'CodeDead',
    github: 'https://github.com/CodeDead',
    twitter: 'https://twitter.com/C0DEDEAD',
    reddit: 'https://reddit.com/r/CodeDead/',
    facebook: 'https://facebook.com/deadlinecodedead',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/markdown/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-theme-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
