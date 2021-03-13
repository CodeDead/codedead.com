import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

export const blogPageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq :$path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
        categories
      }
  }
}`;

const BlogTemplate = ({ data }) => {
  const [, dispatch] = useContext(MainContext);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader
        backButton
        title={frontmatter.title}
      />
      <Container maxWidth="md">
        <Typography variant="subtitle1" gutterBottom style={{ marginTop: 10 }}>
          {frontmatter.author}
          {' | '}
          {frontmatter.date}
          {' | '}
          {frontmatter.categories}
        </Typography>
        <Divider />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
};

export default BlogTemplate;
