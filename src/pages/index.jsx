import React, { useContext, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import {
  graphql, useStaticQuery, navigate, Link,
} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BuildIcon from '@mui/icons-material/Build';
import CardActionArea from '@mui/material/CardActionArea';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import { MainContext } from '../contexts/MainContextProvider';
import { setPageIndex } from '../reducers/MainReducer/Actions';
import BlogList from '../components/BlogList';

const Home = () => {
  const data = useStaticQuery(graphql`
  query {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1) {
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
  deadhash: file(relativePath: {eq: "DeadHash/DeadHash.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  memplus: file(relativePath: {eq: "MemPlus/memplus.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  opal: file(relativePath: {eq: "Opal/Opal.png"}) {
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
      <PageHeader title="Welcome" subTitle="CodeDead provides free and open-source applications to make your life easer." />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <BuildIcon color="inherit" />
              {' Highlighted tools'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid size={12}>
            <Card
              elevation={2}
            >
              <CardActionArea
                onClick={() => navigate('/software/memplus')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
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
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                      <Typography variant="h6" color="textPrimary" component="p" gutterBottom>
                        MemPlus
                      </Typography>
                      <Typography color="textSecondary" component="p">
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

          <Grid size={12}>
            <Card elevation={2}>
              <CardActionArea
                onClick={() => navigate('/software/deadhash')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
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
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                      <Typography variant="h6" color="textPrimary" component="p" gutterBottom>
                        DeadHash
                      </Typography>
                      <Typography color="textSecondary" component="p">
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

          <Grid size={12}>
            <Card
              elevation={2}
            >
              <CardActionArea
                onClick={() => navigate('/software/opal')}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                      <Link to="/software/opal">
                        <GatsbyImage
                          image={{
                            ...data.opal.childImageSharp.gatsbyImageData,
                            aspectRatio: 21 / 9,
                          }}
                          alt="PK Finder"
                        />
                      </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                      <Typography variant="h6" color="textPrimary" component="p" gutterBottom>
                        Opal
                      </Typography>
                      <Typography color="textSecondary" component="p">
                        A free and open source music player that will help you relax. Opal has
                        30+ sounds available that will help you relax. It runs on Windows and Linux.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid size={12}>
            <Button
              sx={{
                mt: 2,
                float: 'right',
              }}
              variant="outlined"
              onClick={() => navigate('/software')}
            >
              More
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <AnnouncementIcon color="inherit" />
              {' Latest news'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12}>
            <BlogList blogPosts={data.allMarkdownRemark.edges} />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3, mb: 10 }}>
          <Grid size={12}>
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
