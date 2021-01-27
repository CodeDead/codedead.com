import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

const Blog = () => {
  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(2));
  }, []);

  return (
    <Layout>
      <PageHeader title="Blog" subTitle="Read our status updates" />
      <Container maxWidth="sm">
        T.B.D.
      </Container>
    </Layout>
  );
};

export default Blog;
