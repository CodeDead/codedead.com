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

const DeadLockPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    main: file(relativePath: { eq: "DeadLock/deadlock.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    settings: file(relativePath: { eq: "DeadLock/settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    about: file(relativePath: { eq: "DeadLock/about.png" }) {
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
      <PageHeader title="DeadLock" subTitle="Unlock files and folders" />
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
                      Unlocking
                    </Typography>
                    <Typography component="p">
                      Unlock files and folders, take full ownership over them
                      and remove, move or copy them, free of charge!
                    </Typography>
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <GatsbyImage
                      image={data.main.childImageSharp.gatsbyImageData}
                      alt="DeadLock main window"
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
                      alt="DeadLock settings"
                    />
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography component="p">
                      Want a different theme or would you like to disable automatic updates? Want to
                      enable Windows Explorer integration? It’s all possible thanks to our many
                      settings!
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
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <Typography variant="h6">
                      Commandline interface
                    </Typography>
                    <Typography component="p">
                      You don’t have to open the GUI to unlock files or folders.
                      You can jump straight into PowerShell or CMD to pass along
                      arguments to DeadLock!
                    </Typography>
                  </Grid>
                  <Grid size={{xs: 12, md: 6, lg: 6}}>
                    <GatsbyImage
                      image={data.about.childImageSharp.gatsbyImageData}
                      alt="Deadlock about"
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
          <Grid size={12  }>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://codedead.com/Software/DeadLock/dl_setup.exe');
                setDonateOpen(true);
              }}
            >
              Installer
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
                  Scans your items on VirusTotal
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;
                    Aside from the functions mentioned above, this application also allows you to
                    perform scans on your files with the online VirusTotal service.
                    <br />
                    <br />
                    To sum it up, DeadLock is a lightweight application that enables you to unlock
                    files that are restricted by certain processes on your computer in a convenient,
                    effortless manner. It comes with a minimalistic, yet efficient user interface
                    and despite its high overall accessibility, it also features extensive help
                    documentation.
                    &quot;
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
                  href="https://www.softpedia.com/get/System/File-Management/DeadLock-CodeDead.shtml"
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
              href="/software/deadlock/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{xs: 12, md: 4, lg: 4}}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/DeadLock/help.pdf"
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
              href="https://codedead.com/Software/DeadLock/gpl.pdf"
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
              href="https://github.com/CodeDead/DeadLock"
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

export default DeadLockPage;
