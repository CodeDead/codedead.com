import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { CssBaseline } from '@material-ui/core';
import DefaultAppBar from '../DefaultAppBar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`query {
      site {
        siteMetadata {
          title,
          github,
          twitter,
          reddit,
          facebook
        }
      }
     }`);

  return (
    <>
      <CssBaseline />
      <DefaultAppBar
        title={data.site.siteMetadata.title}
        githubUrl={data.site.siteMetadata.github}
        twitterUrl={data.site.siteMetadata.twitter}
        facebookUrl={data.site.siteMetadata.facebook}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
