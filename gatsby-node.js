const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const BlogTemplate = path.resolve('./src/templates/BlogTemplate/index.jsx');

  const result = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`);

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query!');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: BlogTemplate,
      context: {},
    });
  });
};
