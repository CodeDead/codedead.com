import React, { useContext, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
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
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Typography gutterBottom>
              {`${frontmatter.author} | ${frontmatter.date} | ${frontmatter.categories}`}
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </CardContent>
        </Card>
        <Divider />
      </Container>
    </Layout>
  );
};

export default BlogTemplate;
