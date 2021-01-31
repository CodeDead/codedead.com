import React, { useContext, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Img from 'gatsby-image';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InfoIcon from '@material-ui/icons/Info';
import GetAppIcon from '@material-ui/icons/GetApp';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import PageHeader from '../../../components/PageHeader';
import Layout from '../../../components/Layout';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';

const PkFinderPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    pkfinder: file(relativePath: { eq: "PK Finder/pkfinder.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    },
    general: file(relativePath: { eq: "PK Finder/pkgeneral.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    },
    theme: file(relativePath: { eq: "PK Finder/pktheme.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`);

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="PK Finder" subTitle="Find your Windows product key" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
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
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6">
                      Product key
                    </Typography>
                    <Typography paragraph>
                      Easily recover your Windows product key with PK Finder. As soon as you open PK
                      Finder, you’ll be able to view your product key.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Img fixed={data.pkfinder.childImageSharp.fixed} />
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
                    <Img fixed={data.general.childImageSharp.fixed} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography paragraph>
                      Want a different theme or would you like to disable automatic updates?
                      It’s all possible, thanks to our intuitive and easy to use GUI.
                    </Typography>
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
                    <Typography variant="h6">
                      Exporting
                    </Typography>
                    <Typography paragraph>
                      You can export your product key in any of the supported formats,
                      including: HTML, Excel, CSV and of course plain text format.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Img fixed={data.theme.childImageSharp.fixed} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <GetAppIcon color="inherit" />
              {' '}
              Download
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              style={{ width: '100%' }}
              href="https://codedead.com/Software/PK%20Finder/PK_setup.exe"
            >
              Installer
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              style={{ width: '100%' }}
              href="https://codedead.com/Software/PK%20Finder/PK_portable.zip"
            >
              Portable
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              <FormatQuoteIcon color="inherit" />
              {' '}
              What others say
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
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  A reliable tool for retrieving Windows keys
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;In case you want to reinstall your operating system but cannot find or
                    extract the serial key through the traditional methods, then perhaps PK Finder
                    could come in handy.&quot;
                  </i>
                </Typography>
                <Typography>
                  <b>Alexandra Sava</b>
                </Typography>
                <Typography>
                  Softpedia editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://www.softpedia.com/get/System/System-Info/PK-Finder.shtml"
                  target="_blank"
                >
                  Source
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              Extra
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="contained"
              href="/software/pk-finder/requirements"
              style={{ width: '100%' }}
            >
              Requirements
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/PK%20Finder/help.pdf"
              target="_blank"
              style={{ width: '100%' }}
            >
              Help documentation
            </Button>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/PK%20Finder/gpl.pdf"
              target="_blank"
              style={{ width: '100%' }}
            >
              License
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              href="https://github.com/CodeDead/PK-Finder"
              target="_blank"
              style={{ width: '100%' }}
            >
              Source code
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PkFinderPage;
