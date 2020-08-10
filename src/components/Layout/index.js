import React from "react";
import DefaultAppBar from "../DefaultAppBar";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql
    `query {
      site {
        siteMetadata {
          title,
          github,
          twitter,
          reddit,
          facebook
        }
      }
     }`
  );

  return (
    <>
      <DefaultAppBar title={data.site.siteMetadata.title} githubUrl={data.site.siteMetadata.github}
                     twitterUrl={data.site.siteMetadata.twitter} redditUrl={data.site.siteMetadata.reddit}
                     facebookUrl={data.site.siteMetadata.facebook}/>
      {children}
    </>
  );
};

export default Layout;
