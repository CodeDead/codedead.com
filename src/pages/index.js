import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <Layout>
      <PageHeader title={"Home"} subTitle={"Hello world!"}/>
      <div>Hello world!</div>
      <div>Testing</div>
    </Layout>
  );
};

export default Home;
