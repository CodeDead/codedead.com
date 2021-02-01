import React, { useContext, useEffect } from 'react';
import { Container, SvgIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import { graphql, useStaticQuery } from 'gatsby';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import GitHubIcon from '../../components/GithubIcon';
import LinkedInIcon from '../../components/LinkedInIcon';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';
import RedditIcon from '../../components/RedditIcon';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';

const AboutPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`query {
      site {
        siteMetadata {
          github,
          reddit,
        }
      }
     }`);

  /**
   * Open a website
   * @param url The website that should be opened
   */
  const openSite = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    dispatch(setPageIndex(4));
  }, []);

  return (
    <Layout>
      <PageHeader title="About" subTitle="Solving problems using software!" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <InfoIcon color="inherit" />
              {' '}
              General
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Card style={{ marginTop: 10 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="textPrimary">
              Our story
            </Typography>
            <Typography variant="body2" color="textSecondary">
              CodeDead is based in Belgium. We try to help solve problems by writing code.
              The concept and idea behind CodeDead started in december 2014 and
              we&apos;ve been releasing free and open-source applications ever since!
            </Typography>

            <Typography variant="h6" gutterBottom color="textPrimary">
              Our mission
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Our mission is to release software that can help users achieve their goal. We will
              always aim to release high quality software and update our software if necessary.
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <GroupIcon color="inherit" />
              {' '}
              Team
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Card style={{
              marginTop: 10,
              height: '100%',
            }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Alessandro Mercier
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  I was born in Gent, Belgium. I always enjoyed making programs, apps and websites
                  and I decided to create this website so that other people can easily find and
                  download our software.
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  color="inherit"
                  onClick={() => openSite(data.site.siteMetadata.github)}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => openSite('https://be.linkedin.com/in/alessandro-mercier-aab153125')}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" onClick={() => openSite(data.site.siteMetadata.reddit)}>
                  <SvgIcon>
                    <RedditIcon />
                  </SvgIcon>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Card style={{
              marginTop: 10,
              height: '100%',
            }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  You
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Throughout the years, there have been various people working on CodeDead
                  projects. Translations,
                  code
                  contributions, donations, issue reporting and more. Thanks to all the people
                  who&apos;ve made this a possibility!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <SvgIcon color="inherit">
                <GitHubIcon />
              </SvgIcon>
              {' '}
              Open Source
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardActionArea onClick={() => window.open('https://github.com/CodeDead/codedead.com/', '_blank')}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Did you know that this website is completely open-source?
                    You are free to edit, build and create pull requests to make
                    this website even better!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="body2" align="center">
              Logo and favicon by
              {' '}
              <a rel="noopener noreferrer" target="_blank" href="https://icons8.com">icons8</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutPage;
