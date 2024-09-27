import React, { useContext, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GatsbyImage } from 'gatsby-plugin-image';
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
import DonationAlert from '../../../components/DonationAlert';

const PkFinderPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    pkfinder: file(relativePath: { eq: "PK Finder/pkfinder.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    general: file(relativePath: { eq: "PK Finder/pkgeneral.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    theme: file(relativePath: { eq: "PK Finder/pktheme.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }`);

  const [donateOpen, setDonateOpen] = useState(false);

  /**
   * Open a link
   * @param link The link to open
   */
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    dispatch(setPageIndex(-1));
  }, []);

  return (
    <Layout>
      <PageHeader title="PK Finder" subTitle="Find your Windows product key" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <InfoIcon color="inherit" />
              {' General'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Product key
                    </Typography>
                    <Typography component="p">
                      Easily recover your Windows product key with PK Finder. As soon as you open PK
                      Finder, you’ll be able to view your product key.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.pkfinder.childImageSharp.gatsbyImageData}
                      alt="PK Finder main window"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.general.childImageSharp.gatsbyImageData}
                      alt="PK Finder general settings"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography component="p">
                      Want a different theme or would you like to disable automatic updates?
                      It’s all possible, thanks to our intuitive and easy to use GUI.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Exporting
                    </Typography>
                    <Typography component="p">
                      You can export your product key in any of the supported formats,
                      including: HTML, Excel, JSON, CSV and of course plain text format.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.theme.childImageSharp.gatsbyImageData}
                      alt="PK Finder theme settings"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <GetAppIcon color="inherit" />
              {' Download'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/PK%20Finder/PK-Finder-Setup-2.0.exe');
                setDonateOpen(true);
              }}
            >
              Installer
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/PK%20Finder/PK-Finder-2.0.zip');
                setDonateOpen(true);
              }}
            >
              Portable
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              <FormatQuoteIcon color="inherit" />
              {' What others say'}
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
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

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={12}>
            <Typography variant="h5" color="textPrimary">
              Extra
            </Typography>
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="/software/pk-finder/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/PK%20Finder/help.pdf"
              target="_blank"
              fullWidth
            >
              Help documentation
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/PK%20Finder/gpl.pdf"
              target="_blank"
              fullWidth
            >
              License
            </Button>
          </Grid>
          <Grid size={12}>
            <Button
              color="primary"
              variant="contained"
              href="https://github.com/CodeDead/PK-Finder"
              target="_blank"
              fullWidth
            >
              Source code
            </Button>
          </Grid>
        </Grid>
        {donateOpen ? <DonationAlert onClose={() => setDonateOpen(false)} /> : null}
      </Container>
    </Layout>
  );
};

export default PkFinderPage;
