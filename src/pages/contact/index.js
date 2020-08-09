import React from "react";
import PageHeader from "../../components/PageHeader";
import Container from "@material-ui/core/Container";
import Layout from "../../components/Layout";

const ContactPage = () => {

  return (
    <Layout>
      <PageHeader title={"Contact"} subTitle={"Have a question or need support?"}/>
      <Container>
        Hello world
      </Container>
    </Layout>
  );
};

export default ContactPage;
