import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Container } from '@material-ui/core';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';

const DeadHashPage = () => {
  const data = useStaticQuery(graphql`
  query {
    deadhash: file(relativePath: { eq: "DeadHash/DeadHash.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    },
    deadhashresult: file(relativePath: { eq: "DeadHash/deadhash_result.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    },
    deadhashtext: file(relativePath: { eq: "DeadHash/deadhash_text.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`);

  return (
    <Layout>
      <PageHeader title="DeadHash" subTitle="File and text hash calculator" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              General
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h6">
                  Simplicity
                </Typography>
                <Typography paragraph>
                  Calculate file and text hashes with ease thanks to an easy to use GUI, drag and
                  drop functionality and help documentation that are all included!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Img fixed={data.deadhash.childImageSharp.fixed} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Img fixed={data.deadhashresult.childImageSharp.fixed} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h6">
                  Formats
                </Typography>
                <Typography paragraph>
                  MD4, MD5, SHA1, SHA3-224, SHA3-256, SHA3-384, SHA3-512, SHA224, SHA256, SHA384,
                  SHA512 and RIPEMD160 are all supported out of the box.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h6">
                  Cross platform
                </Typography>
                <Typography paragraph>
                  DeadHash is available for Android, Linux and Windows out of the box, offering a
                  similar look and feel on all platforms.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Img fixed={data.deadhashtext.childImageSharp.fixed} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
              Download
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" align="center">
              Android
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="outlined"
              color="primary"
              href="https://play.google.com/store/apps/details?id=com.codedead.deadhash"
              target="_blank"
            >
              Google Play
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="outlined"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash%20Setup%202.0.3.exe"
            >
              Installer
            </Button>
            <Button
              style={{
                width: '100%',
                marginTop: 10,
              }}
              variant="outlined"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash%202.0.3.exe"
            >
              Portable
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="outlined"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash-2.0.3.AppImage"
            >
              AppImage
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" color="textPrimary">
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
                  A handy document hasher
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;All things considered, DeadHash proves to be a practical and useful
                    application that can successfully calculate hash strings for your files or
                    compare them to discover if they have been modified or not.&quot;
                  </i>
                </Typography>
                <Typography>
                  <b>Marina Dan</b>
                </Typography>
                <Typography>
                  Softpedia editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://www.softpedia.com/get/Security/Security-Related/DeadHash.shtml"
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
              variant="outlined"
              href="/software/deadhash/requirements"
              style={{ width: '100%' }}
            >
              Requirements
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="outlined"
              href="https://codedead.com/Software/DeadHash/help.pdf"
              target="_blank"
              style={{ width: '100%' }}
            >
              Help documentation
            </Button>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="outlined"
              href="https://codedead.com/Software/DeadHash/gpl.pdf"
              target="_blank"
              style={{ width: '100%' }}
            >
              License
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button
              color="primary"
              variant="outlined"
              href="https://github.com/CodeDead/DeadHash-js"
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

export default DeadHashPage;
