import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DefaultAppBar from '../DefaultAppBar';

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
      <DefaultAppBar
        title={data.site.siteMetadata.title}
        githubUrl={data.site.siteMetadata.github}
        twitterUrl={data.site.siteMetadata.twitter}
        redditUrl={data.site.siteMetadata.reddit}
        facebookUrl={data.site.siteMetadata.facebook}
      />
      {children}
    </>
  );
};

export default Layout;
