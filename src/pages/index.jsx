import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {
  graphql, useStaticQuery, navigate, Link,
} from 'gatsby';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import BuildIcon from '@material-ui/icons/Build';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';

const Home = () => {
  const data = useStaticQuery(graphql`
  query {
    deadhash: file(relativePath: { eq: "DeadHash/DeadHash.png" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    memplus: file(relativePath: { eq: "MemPlus/memplus.png" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    pkfinder: file(relativePath: { eq: "PK Finder/pkfinder.png" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
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
              Our tools
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Link to="/software/memplus">
                      <Img fluid={{
                        ...data.memplus.childImageSharp.fluid,
                        aspectRatio: 21 / 9,
                      }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6" color="textPrimary" paragraph>
                      MemPlus
                    </Typography>
                    <Typography color="textSecondary" paragraph>
                      MemPlus can be used to reduce the amount of RAM that is being used by
                      applications on your system. In essence, freeing up memory so that more memory
                      is available to you!
                    </Typography>
                    <Button
                      style={{ width: '100%' }}
                      color="primary"
                      variant="outlined"
                      onClick={() => navigate('/software/memplus')}
                    >
                      Download now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Link to="/software/deadhash">
                      <Img fluid={{
                        ...data.deadhash.childImageSharp.fluid,
                        aspectRatio: 21 / 9,
                      }}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6" color="textPrimary" paragraph>
                      DeadHash
                    </Typography>
                    <Typography color="textSecondary" paragraph>
                      Calculate file hashes on any platform with ease thanks to an easy to use GUI,
                      drag and drop functionality and help documentation that are all included!
                    </Typography>
                    <Button
                      style={{ width: '100%' }}
                      color="primary"
                      variant="outlined"
                      onClick={() => navigate('/software/deadhash')}
                    >
                      Download now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Link to="/software/pk-finder">
                      <Img fluid={{
                        ...data.pkfinder.childImageSharp.fluid,
                        aspectRatio: 21 / 9,
                      }}
                      />
                    </Link>
                  </Grid>

                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6" color="textPrimary" paragraph>
                      PK Finder
                    </Typography>
                    <Typography color="textSecondary" paragraph>
                      Easily recover your Windows Product Key with PK Finder. As soon as you open PK
                      Finder,
                      you’ll be able to view your product key.
                    </Typography>
                    <Button
                      style={{ width: '100%' }}
                      color="primary"
                      variant="outlined"
                      onClick={() => navigate('/software/pk-finder')}
                    >
                      Download now
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
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
              See all
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
