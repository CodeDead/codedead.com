import React from "react";
import DefaultAppBar from "../DefaultAppBar";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql
    `query {
      site {
        siteMetadata {
          title
        }
      }
     }`
  );

  return (
    <>
      <DefaultAppBar title={data.site.siteMetadata.title}/>
      {children}
    </>
  );
};

export default Layout;
