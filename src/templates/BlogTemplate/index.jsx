import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import { graphql } from 'gatsby';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
      <Container maxWidth="lg">
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Typography gutterBottom>
              {`${frontmatter.author} | ${frontmatter.date} | ${frontmatter.categories}`}
            </Typography>
            <Divider />
            <div
              color="textSecondary"
              /* eslint-disable-next-line react/no-danger */
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
