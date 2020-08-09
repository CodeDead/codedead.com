import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";

const AboutPage = () => {

  return (
    <Layout>
      <PageHeader title={"About"} subTitle={"Solving problems using software!"}/>
      Hi. I'm a programmer. Nice to meet you!
    </Layout>
  );
};

export default AboutPage;
