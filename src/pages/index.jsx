import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const Home = () => (
  <Layout>
    <PageHeader title="Home" subTitle="Hello world!" />
    <Container maxWidth="md">
      Test
    </Container>
  </Layout>
);

export default Home;
