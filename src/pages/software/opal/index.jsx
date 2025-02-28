import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import GetAppIcon from '@mui/icons-material/GetApp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CardActions from '@mui/material/CardActions';
import PageHeader from '../../../components/PageHeader';
import Layout from '../../../components/Layout';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import DonationAlert from '../../../components/DonationAlert';

const OpalPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    opal: file(relativePath: { eq: "Opal/Opal.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    opalSettings: file(relativePath: { eq: "Opal/opal_settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    opalTimer: file(relativePath: { eq: "Opal/opal_timer.png" }) {
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
      <PageHeader title="Opal" subTitle="Relaxing music player" />
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
                      Simplicity
                    </Typography>
                    <Typography component="p" gutterBottom>
                      Select the sounds (30+ relaxing tracks are available) that you want to hear,
                      turn them on and you can listen to and enjoy the music for as long as you
                      want, without interruption.
                    </Typography>
                    <Typography component="p" gutterBottom>
                      You can listen to the sound of:
                    </Typography>
                    <ul>
                      <li>Rain</li>
                      <li>Wind</li>
                      <li>Thunder</li>
                      <li>A river</li>
                      <li>Fire</li>
                      <li>Office background noises</li>
                      <li>And much, much more!</li>
                    </ul>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.opal.childImageSharp.gatsbyImageData}
                      alt="Opal main window"
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
                      image={data.opalTimer.childImageSharp.gatsbyImageData}
                      alt="Opal timer"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Timer
                    </Typography>
                    <Typography component="p">
                      You can enable a timer to turn off all music after a specified amount of time.
                      An incredibly useful feature for when you are about to fall asleep.
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
                      Cross platform
                    </Typography>
                    <Typography component="p" gutterBottom>
                      Opal is available for Linux, Windows and macOS. All offering the same
                      easy-to-use look and feel. No matter what device you use it on,
                      you will always feel right at home.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.opalSettings.childImageSharp.gatsbyImageData}
                      alt="Opal settings"
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
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                openLink('https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-1.5.0.msi');
                setDonateOpen(true);
              }}
            >
              Installer
            </Button>
            <Button
              fullWidth
              sx={{ mt: 1 }}
              variant="contained"
              color="primary"
              onClick={() => {
                openLink('https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-win-portable.zip');
                setDonateOpen(true);
              }}
            >
              Portable
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              macOS
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                openLink('https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-1.5.0.dmg');
                setDonateOpen(true);
              }}
            >
              dmg
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Typography variant="h6" align="center">
              Linux
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                openLink('https://github.com/CodeDead/opal/releases/download/v1.5.0/Opal-x86_64-1.5.0.AppImage');
                setDonateOpen(true);
              }}
            >
              AppImage
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
                  A simple app that includes different sound groupings to suit anyone,
                  from office to fantasy
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;Opal is a simple app that includes different sound groupings to suit
                    anyone, from office to fantasy. All have volume controls so you can keep faint
                    in the background or bring them forward.
                    You can also set up a delay timer from the settings tab to remind you to take a
                    break. You also have the option to combine multiple sounds at varying volumes
                    to produce the perfect background noise.&quot;
                  </i>
                </Typography>
                <Typography>
                  <b>MajorGeeks</b>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://www.majorgeeks.com/files/details/opal.html"
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
              variant="contained"
              href="/software/opal/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              variant="contained"
              href="https://codedead.com/Software/Opal/help.pdf"
              target="_blank"
              fullWidth
            >
              Help documentation
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              variant="contained"
              href="https://codedead.com/Software/Opal/gpl.pdf"
              target="_blank"
              fullWidth
            >
              License
            </Button>
          </Grid>
          <Grid size={12}>
            <Button
              variant="contained"
              href="https://github.com/CodeDead/Opal"
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

export default OpalPage;
