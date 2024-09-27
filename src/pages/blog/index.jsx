import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';
import { MainContext } from '../../contexts/MainContextProvider';
import { setBlogLimit, setPageIndex } from '../../reducers/MainReducer/Actions';
import BlogList from '../../components/BlogList';

const Blog = () => {
  const [state, dispatch] = useContext(MainContext);
  const { blogLimit } = state;
  const skip = 10;

  const { allMarkdownRemark } = useStaticQuery(graphql`
  query {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        frontmatter {
          path
          title
          date(formatString: "MMMM DD, YYYY")
          abstract
        }
      }
    }
  }
}`);

  /**
   * Go to the next slice of blog posts
   */
  const gotoNext = () => {
    let newLimit = blogLimit + skip;
    if (newLimit > allMarkdownRemark.edges.length) {
      newLimit = allMarkdownRemark.edges.length;
    }
    dispatch(setBlogLimit(newLimit));
  };

  /**
   * Go to the first slice of blog posts
   */
  const gotoFirst = () => {
    dispatch(setBlogLimit(0));
  };

  /**
   * Go to the last page
   */
  const gotoLast = () => {
    const mod = allMarkdownRemark.edges.length % skip;
    let newLimit = Math.floor(allMarkdownRemark.edges.length / skip) * skip - skip;
    if (mod > 0) {
      newLimit = Math.floor(allMarkdownRemark.edges.length / skip) * skip;
    }
    dispatch(setBlogLimit(newLimit));
  };

  /**
   * Go to the previous slice of blog posts
   */
  const gotoPrevious = () => {
    let newLimit = blogLimit - skip;
    if (newLimit < 0) {
      newLimit = 0;
    }
    dispatch(setBlogLimit(newLimit));
  };

  useEffect(() => {
    dispatch(setPageIndex(2));
  }, []);

  let maxSlice = blogLimit + skip;
  if (maxSlice > allMarkdownRemark.edges.length) {
    maxSlice = allMarkdownRemark.edges.length;
  }

  return (
    <Layout>
      <PageHeader title="Blog" subTitle="Read our status updates" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <BlogList blogPosts={allMarkdownRemark.edges.slice(blogLimit, maxSlice)} />
          </Grid>
          <Grid size={12}>
            {maxSlice < allMarkdownRemark.edges.length ? (
              <>
                <Button
                  sx={{
                    mt: 2,
                    float: 'right',
                  }}
                  variant="outlined"
                  onClick={gotoLast}
                  title="Last"
                >
                  <LastPageIcon color="inherit" />
                </Button>
                <Button
                  sx={{
                    mt: 2,
                    mr: 1,
                    float: 'right',
                  }}
                  variant="outlined"
                  onClick={gotoNext}
                  title="Next"
                >
                  <SkipNextIcon color="inherit" />
                </Button>
              </>
            ) : null}
            {blogLimit !== 0 ? (
              <>
                <Button
                  sx={{
                    mt: 2,
                    mr: maxSlice < allMarkdownRemark.edges.length ? 1 : 0,
                    float: 'right',
                  }}
                  variant="outlined"
                  onClick={gotoPrevious}
                  title="Previous"
                >
                  <SkipPreviousIcon color="inherit" />
                </Button>
                <Button
                  sx={{
                    mt: 2,
                    mr: 1,
                    float: 'right',
                  }}
                  variant="outlined"
                  onClick={gotoFirst}
                  title="First"
                >
                  <FirstPageIcon color="inherit" />
                </Button>
              </>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Blog;
