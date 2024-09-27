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
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import DonationAlert from '../../../components/DonationAlert';

const DeadPixPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    main: file(relativePath: { eq: "DeadPix/deadpix.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    settings: file(relativePath: { eq: "DeadPix/settings.png" }) {
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
      <PageHeader title="DeadPix" subTitle="Fix broken pixels" />
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
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <Typography variant="h6">
                      Fix your display
                    </Typography>
                    <Typography component="p">
                      Fix dead or stuck pixels on your screen with just a couple of mouse
                      clicks, free of charge!
                    </Typography>
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}} >
                    <GatsbyImage
                      image={data.main.childImageSharp.gatsbyImageData}
                      alt="DeadPix main window"
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
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <GatsbyImage
                      image={data.settings.childImageSharp.gatsbyImageData}
                      alt="DeadPix settings"
                    />
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <Typography variant="h6">
                      Method of action
                    </Typography>
                    <Typography component="p">
                      DeadPix can fix stuck or dead pixels by rapidly cycling the color value of the
                      pixel. Please note that this tool does not provide a 100% success rate.
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
                  <Grid size={12}>
                    <Typography variant="h6" gutterBottom>
                      Installation
                    </Typography>
                    <Typography component="p">
                      DeadPix can be installed using the installer or if you don’t want to install
                      it, you can always use the portable version!
                    </Typography>
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
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Typography variant="h6" align="center">
              Android
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              href="https://play.google.com/store/apps/details?id=com.codedead.deadpix"
            >
              Play Store
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 6, lg: 6}}>
            <Typography variant="h6" align="center">
              Windows
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/DeadPix/DP_setup.exe');
                setDonateOpen(true);
              }}
            >
              Installer
            </Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ mt: 1 }}
              onClick={() => {
                openLink('https://codedead.com/Software/DeadPix/DP_Port.zip');
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
                  A handy dead pixel finder
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;Overall, DeadPix proves to be a practical program that you can resort to
                    for locating and trying to fix stuck pixels on your screen by flashing random
                    colors for a lengthier period of time; however, you should not expect
                    miracles.&quot;
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
                  href="https://www.softpedia.com/get/Others/Miscellaneous/DeadPix.shtml"
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
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              color="primary"
              variant="contained"
              href="/software/deadpix/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/DeadPix/help.pdf"
              target="_blank"
              fullWidth
            >
              Help documentation
            </Button>
          </Grid>

          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/DeadPix/gpl.pdf"
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
              href="https://github.com/CodeDead/DeadPix"
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

export default DeadPixPage;
