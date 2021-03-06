import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
  graphql, useStaticQuery, navigate, Link,
} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import BuildIcon from '@material-ui/icons/Build';
import CardActionArea from '@material-ui/core/CardActionArea';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import BlogList from '../components/BlogList';

const Home = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
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
    },
    deadhash: file(relativePath: { eq: "DeadHash/DeadHash.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    memplus: file(relativePath: { eq: "MemPlus/memplus.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    pkfinder: file(relativePath: { eq: "PK Finder/pkfinder.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }`);

  const [, dispatch] = useContext(MainContext);

  useEffect(() => {
    dispatch(setPageIndex(0));
  }, []);

  return (
    <Layout>
      <PageHeader title="Home" subTitle="Welcome" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <BuildIcon color="inherit" />
              {' '}
              Highlighted tools
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardActionArea
                onClick={() => navigate('/software/memplus')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Link to="/software/memplus">
                        <GatsbyImage
                          image={{
                            ...data.memplus.childImageSharp.gatsbyImageData,
                            aspectRatio: 21 / 9,
                          }}
                          alt="MemPlus"
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Typography variant="h6" color="textPrimary" paragraph>
                        MemPlus
                      </Typography>
                      <Typography color="textSecondary" paragraph>
                        MemPlus can be used to reduce the amount of RAM that is being used by
                        applications on your system. In essence, freeing up memory so that more
                        memory is available to you!
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardActionArea
                onClick={() => navigate('/software/deadhash')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Link to="/software/deadhash">
                        <GatsbyImage
                          image={{
                            ...data.deadhash.childImageSharp.gatsbyImageData,
                            aspectRatio: 21 / 9,
                          }}
                          alt="DeadHash"
                        />
                      </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Typography variant="h6" color="textPrimary" paragraph>
                        DeadHash
                      </Typography>
                      <Typography color="textSecondary" paragraph>
                        Calculate file and text hashes on any platform with ease thanks to an easy
                        to use GUI, drag and drop functionality and help documentation that are
                        all included!
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardActionArea
                onClick={() => navigate('/software/pk-finder')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Link to="/software/pk-finder">
                        <GatsbyImage
                          image={{
                            ...data.pkfinder.childImageSharp.gatsbyImageData,
                            aspectRatio: 21 / 9,
                          }}
                          alt="PK Finder"
                        />
                      </Link>
                    </Grid>

                    <Grid item xs={12} md={6} lg={6}>
                      <Typography variant="h6" color="textPrimary" paragraph>
                        PK Finder
                      </Typography>
                      <Typography color="textSecondary" paragraph>
                        Easily recover your Windows Product Key with PK Finder. As soon as you open
                        PK Finder, you’ll be able to view your product key.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Button
              style={{
                marginTop: 10,
                float: 'right',
              }}
              variant="outlined"
              onClick={() => navigate('/software')}
            >
              More
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <AnnouncementIcon color="inherit" />
              {' '}
              Latest news
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <BlogList blogPosts={data.allMarkdownRemark.edges} />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12} style={{ marginTop: 10 }}>
            <Button variant="outlined" onClick={() => navigate('/blog')}>
              Check out our blog
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
