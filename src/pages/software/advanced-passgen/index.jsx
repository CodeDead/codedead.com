import React, { useContext, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

const AdvancedPassGenPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    advancedpassgen: file(relativePath: { eq: "Advanced PassGen/ap.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    advancedpassgensettings: file(relativePath: { eq: "Advanced PassGen/ap_theme_settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    advancedpassgensettingsadvanced: file(relativePath: { eq: "Advanced PassGen/ap_advanced_settings.png" }) {
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
      <PageHeader title="Advanced PassGen" subTitle="Generate passwords with ease" />
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
                      Password generation
                    </Typography>
                    <Typography component="p">
                      Easily generate thousands of passwords using the options that are available in
                      Advanced PassGen. You can even go so far as to define your own character set
                      that Advanced PassGen can use to generate passwords!
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage image={data.advancedpassgen.childImageSharp.gatsbyImageData} alt="Advanced PassGen" />
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
                    <GatsbyImage image={data.advancedpassgensettings.childImageSharp.gatsbyImageData} alt="Advanced PassGen settings" />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography component="p">
                      Want a different theme or would you like to disable automatic updates? Don’t
                      want to export a certain field? It’s all possible, thanks to our intuitive and
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
                      Advanced PassGen can export any and all data that it generates for you in a
                      couple of different formats including: CSV, JSON and of course
                      plain text. A simple copy is also available!
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.advancedpassgensettingsadvanced.childImageSharp.gatsbyImageData}
                      alt="Advanced PassGen advanced settings"
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
                openLink('https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_x64_en-US.msi');
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
                openLink('https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_amd64.AppImage');
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
                openLink('https://github.com/CodeDead/Advanced-PassGen/releases/download/v2.5.2/advanced-passgen_2.5.2_aarch64.dmg');
                setDonateOpen(true);
              }}
            >
              dmg
            </Button>
          </Grid>
          <Grid size={12}>
            <Typography variant="h6" align="center">
              Web
            </Typography>
            <Button
              size="large"
              color="primary"
              variant="contained"
              style={{ width: '100%' }}
              href="https://advancedpassgen.codedead.com"
            >
              Web version
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
                  Generates various passwords based on the specified parameters
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;This application allows you to generate multiple passwords with ease, by
                    defining a series of parameters. It is possible to toggle the inclusion of
                    several elements within your passkeys, such as uppercase or lowercase
                    characters, symbols and numbers.
                    <br />
                    <br />
                    Additionally, you can define the minimum and maximum string lengths for your
                    entries, specify a custom character set or generate a random seed. It is also
                    possible to specify a fixed string length size and the amount of passwords
                    that
                    the application can generate during a session.&quot;
                  </i>
                </Typography>
                <Typography>
                  <b>Vlad Constantinescu</b>
                </Typography>
                <Typography>
                  Softpedia editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://www.softpedia.com/get/Security/Password-Managers-Generators/Advanced-PassGen.shtml"
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
              href="/software/advanced-passgen/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/Advanced%20PassGen/gpl.pdf"
              target="_blank"
              style={{ width: '100%' }}
            >
              License
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="https://github.com/CodeDead/Advanced-PassGen"
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

export default AdvancedPassGenPage;
