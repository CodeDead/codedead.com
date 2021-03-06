import React, { useContext, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const AniViewPage = () => {
  const [, dispatch] = useContext(MainContext);
  const data = useStaticQuery(graphql`
  query {
    main: file(relativePath: { eq: "AniView/aniview.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    settings: file(relativePath: { eq: "AniView/settings.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    },
    image: file(relativePath: { eq: "AniView/av_settings_image.png" }) {
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
      <PageHeader title="AniView" subTitle="GIF Image Viewer" />
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
                      GIF
                    </Typography>
                    <Typography paragraph>
                      AniView is a free and open source GIF image viewer. You
                      can watch GIF images your way, thanks to all the
                      options that are available in AniView.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <GatsbyImage
                      image={data.main.childImageSharp.gatsbyImageData}
                      alt="AniView main window"
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
                      image={data.settings.childImageSharp.gatsbyImageData}
                      alt="AniView settings"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h6">
                      Preferences
                    </Typography>
                    <Typography paragraph>
                      Want a different theme or would you like to disable automatic
                      updates? Don’t want your GIF’s to loop? It’s all possible,
                      thanks to our intuitive and easy to use GUI.
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
                      Frame extraction
                    </Typography>
                    <Typography paragraph>
                      As an added bonus, you can also extract each individual
                      frame inside a GIF image to a format of your liking.
                      Particularly interesting if you’re only interested in a
                      single frame.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <GatsbyImage
                      image={data.image.childImageSharp.gatsbyImageData}
                      alt="AniView image"
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
          <Grid item xs={12} md={6} lg={6}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              style={{ width: '100%' }}
              href="https://codedead.com/Software/AniView/AV_setup.exe"
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
              href="https://codedead.com/Software/AniView/AV_portable.zip"
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
                  A humdrum GIF viewer with a surprising amount of customization options
                </Typography>
                <Typography gutterBottom>
                  <i>
                    &quot;
                    To change the format, simply visit the app’s Settings section. Since we are on
                    the subject, from the General tab, you can enable or disable the following
                    features: automatic updates, drag and drop functionality, automatic window
                    resizing, full-screen support. What is more, you can also change the repeat
                    behavior or even create custom ones.
                    <br />
                    <br />
                    Despite its simplicity, you might be surprised to hear that the app also comes
                    with a few UI customization options. For example, within the Theme Tab, you can
                    change the app’s interface style, the metro brush’s color and even the border
                    thickness.
                    &quot;
                  </i>
                </Typography>
                <Typography>
                  <b>Vladimir Ciobica</b>
                </Typography>
                <Typography>
                  Softpedia editor
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href="https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Viewers/AniView.shtml"
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
              href="/software/aniview/requirements"
              style={{ width: '100%' }}
            >
              Requirements
            </Button>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Button
              color="primary"
              variant="contained"
              href="https://codedead.com/Software/AniView/help.pdf"
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
              href="hhttps://codedead.com/Software/AniView/gpl.pdf"
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
              href="https://github.com/CodeDead/AniView"
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

export default AniViewPage;
