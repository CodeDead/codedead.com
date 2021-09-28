import React, { useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import GetAppIcon from '@mui/icons-material/GetApp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PageHeader from '../../../components/PageHeader';
import Layout from '../../../components/Layout';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';

const DeadHashPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    deadhash: file(relativePath: { eq: "DeadHash/DeadHash.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    deadhashresult: file(relativePath: { eq: "DeadHash/deadhash_result.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    deadhashtext: file(relativePath: { eq: "DeadHash/deadhash_text.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }`);

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="DeadHash" subTitle="File and text hash calculator" />
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
                      Simplicity
                    </Typography>
                    <Typography paragraph>
                      Calculate file and text hashes and checksums with ease thanks to an easy
                      to use GUI, drag and drop functionality and help documentation
                      that are all included!
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <GatsbyImage
                      image={data.deadhash.childImageSharp.gatsbyImageData}
                      alt="DeadHash main window"
                    />
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
                    <GatsbyImage
                      image={data.deadhashresult.childImageSharp.gatsbyImageData}
                      alt="DeadHash result"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6">
                      Formats
                    </Typography>
                    <Typography paragraph>
                      MD4, MD5, SHA1, SHA3-224, SHA3-256, SHA3-384, SHA3-512,
                      SHA224, SHA256, SHA384, SHA512, RIPEMD160, CRC1, CRC8,
                      CRC16, CRC24 and CRC32 are all supported out of the box.
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
                      Cross platform
                    </Typography>
                    <Typography paragraph gutterBottom>
                      DeadHash is available for Android, Linux and Windows,
                      offering a similar look and feel on all platforms.
                    </Typography>

                    <Typography paragraph>
                      Additionally, DeadHash can be compiled manually to run on macOS.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <GatsbyImage
                      image={data.deadhashtext.childImageSharp.gatsbyImageData}
                      alt="DeadHash text"
                    />
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
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant="h6" align="center">
              Android
            </Typography>
            <Button
              style={{ width: '100%' }}
              variant="contained"
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
              variant="contained"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash%20Setup%202.1.3.exe"
            >
              Installer
            </Button>
            <Button
              style={{
                width: '100%',
                marginTop: 10,
              }}
              variant="contained"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash%202.1.3.exe"
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
              variant="contained"
              color="primary"
              href="https://codedead.com/Software/DeadHash/DeadHash-2.1.3.AppImage"
            >
              AppImage
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
                  variant="contained"
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
              variant="contained"
              href="/software/deadhash/requirements"
              style={{ width: '100%' }}
            >
              Requirements
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="contained"
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
              variant="contained"
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
              variant="contained"
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
