import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import { graphql, useStaticQuery } from 'gatsby';
import InfoIcon from '@mui/icons-material/Info';
import GetAppIcon from '@mui/icons-material/GetApp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Layout from '../../../components/Layout';
import PageHeader from '../../../components/PageHeader';
import { MainContext } from '../../../contexts/MainContextProvider';
import { setPageIndex } from '../../../reducers/MainReducer/Actions';
import DonationAlert from '../../../components/DonationAlert';

const MemPlusPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    memplus: file(relativePath: { eq: "MemPlus/memplus.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    analyzer: file(relativePath: { eq: "MemPlus/memplus_analyzer.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    optimizer: file(relativePath: { eq: "MemPlus/memplus_settings_monitor.png" }) {
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
      <PageHeader title="MemPlus" subTitle="RAM Optimizer" />
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
                      Memory optimization
                    </Typography>
                    <Typography component="p">
                      MemPlus can be used to reduce the amount of RAM that is being used by
                      applications on your system. In essence, freeing up memory so that
                      more memory is available to you!
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.memplus.childImageSharp.gatsbyImageData}
                      alt="MemPlus main window"
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
                      image={data.analyzer.childImageSharp.gatsbyImageData}
                      alt="MemPlus analyzer"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <Typography variant="h6">
                      RAM Analyzer
                    </Typography>
                    <Typography component="p">
                      MemPlus can help recover the specification of the RAM that is
                      installed on your system. This information can be exported in
                      TEXT, HTML, CSV and Excel formats.
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
                      Preferences
                    </Typography>
                    <Typography component="p">
                      Need MemPlus to automatically optimize your RAM in the background? Want a
                      different theme or start MemPlus when your computer starts up? You got it!
                      MemPlus offers a myriad of settings to make MemPlus truly yours.
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                    <GatsbyImage
                      image={data.optimizer.childImageSharp.gatsbyImageData}
                      alt="MemPlus Optimizer"
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
                openLink('https://github.com/CodeDead/MemPlus/releases/download/1.3.2/MP_setup.exe');
                setDonateOpen(true);
              }}
            >
              installer
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                openLink('https://github.com/CodeDead/MemPlus/releases/download/1.3.2/MP_portable.zip');
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
                  A straightforward tool for managing RAM more efficiently
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;While it is true that certain problems cannot be fixed unless you add more
                    physical memory to your system, MemPlus has the role of helping you with
                    maintenance and to keep your PC running smooth.&quot;
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
                  href="https://www.softpedia.com/get/Tweak/Memory-Tweak/MemPlus-CodeDead.shtml"
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
              href="/software/memplus/requirements"
              fullWidth
            >
              Requirements
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/MemPlus/help.pdf"
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
              href="https://codedead.com/Software/MemPlus/gpl.pdf"
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
              href="https://github.com/CodeDead/MemPlus"
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

export default MemPlusPage;
