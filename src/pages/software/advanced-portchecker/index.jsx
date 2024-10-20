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

const AdvancedPortCheckerPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    main: file(relativePath: { eq: "Advanced PortChecker/ap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    settings: file(relativePath: { eq: "Advanced PortChecker/ap_general_settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    about: file(relativePath: { eq: "Advanced PortChecker/ap_about.png" }) {
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
      <PageHeader title="Advanced PortChecker" subTitle="Scan for open TCP ports" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container spacing={2} sx={{ mt: 10 }}>
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
                      Port scanning
                    </Typography>
                    <Typography component="p">
                      Scanning TCP/IP ports has never been this easy. Watch how Advanced
                      PortChecker scans for open ports in seconds!
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.main.childImageSharp.gatsbyImageData}
                      alt="Advanced PortChecker main window"
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
                      image={data.settings.childImageSharp.gatsbyImageData}
                      alt="Advanced PortChecker settings"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography component="p">
                      Need a specific time-out set for port scanning? Want a
                      different theme or would you like to disable automatic
                      updates? It’s all possible, thanks to our intuitive and
                      easy to use GUI.
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
                      Advanced PortChecker can export any and all data that it
                      finds for you in a couple of different formats including:
                      HTML, JSON, CSV and of course plain text.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.about.childImageSharp.gatsbyImageData}
                      alt="Advanced PortChecker about"
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
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/Advanced%20PortChecker/advanced-portchecker_2.1.0_x64_en-US.msi');
                setDonateOpen(true);
              }}
            >
              Installer
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/Advanced%20PortChecker/advanced-portchecker_2.1.0_amd64.AppImage');
                setDonateOpen(true);
              }}
            >
              AppImage
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              macOS
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/Advanced%20PortChecker/advanced-portchecker_2.1.0_aarch64.dmg');
                setDonateOpen(true);
              }}
            >
              DMG
            </Button>
          </Grid>
          <Grid size={12}>
            <Typography variant="h6" align="center">
              Android
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              href="https://play.google.com/store/apps/details?id=com.codedead.advancedportchecker"
            >
              Play Store
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 5  }}>
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
                  Handy tool providing you with results in real time
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;On an ending note, Advanced PortChecker is an easy-to-use program helping
                    you effortlessly find open ports you can connect to. It can spot both TCP and
                    UDP ports, letting you compile them in lists you can subsequently use, but its
                    core advantage is that it helps you see the potential of your network in real
                    time.&quot;
                  </i>
                </Typography>
                <Typography>
                  <b>Anca Roman</b>
                </Typography>
                <Typography>
                  Softpedia editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://www.softpedia.com/get/Network-Tools/IP-Tools/Advanced-PortChecker.shtml"
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
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Button
              color="primary"
              variant="contained"
              href="/software/advanced-portchecker/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/Advanced%20PortChecker/gpl.pdf"
              target="_blank"
              fullWidth
            >
              License
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Button
              color="primary"
              variant="contained"
              href="https://github.com/CodeDead/Advanced-PortChecker"
              target="_blank"
              fullWidth
            >
              Source code (Desktop)
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Button
              color="primary"
              variant="contained"
              href="https://github.com/CodeDead/Advanced-PortChecker-android"
              target="_blank"
              fullWidth
            >
              Source code (Android)
            </Button>
          </Grid>
        </Grid>
        {donateOpen ? <DonationAlert onClose={() => setDonateOpen(false)} /> : null}
      </Container>
    </Layout>
  );
};

export default AdvancedPortCheckerPage;
