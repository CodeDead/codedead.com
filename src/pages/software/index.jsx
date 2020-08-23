import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { navigate } from 'gatsby';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';

const Software = () => (
  <Layout>
    <PageHeader title="Software" subTitle="Our work" />
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="textPrimary">
            Security
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/deadhash')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  DeadHash
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Calculate file hashes on any platform with ease thanks to an easy to use GUI, drag
                  and drop functionality and help documentation that are all included!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/advanced-passgen')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  Advanced PassGen
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Easily generate thousands of passwords using Advanced PassGen. You can even go so
                  far as to define your own character set!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="textPrimary">
            System
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/memplus')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  MemPlus
                </Typography>
                <Typography color="textSecondary" paragraph>
                  MemPlus can be used to reduce the amount of RAM that is being used by applications
                  on your system. In essence, freeing up memory so that more memory is available to
                  you!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/pk-finder')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  PK Finder
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Easily recover your Windows Product Key with PK Finder. As soon as you open PK
                  Finder, you’ll be able to view your product key.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h5" color="textPrimary">
            Utilities
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: 10 }}>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/advanced-portchecker')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  Advanced PortChecker
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Scanning TCP and UDP ports has never been this easy. Watch how Advanced
                  PortChecker updates you with real-time information while it’s scanning!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/deadlock')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  DeadLock
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Unlock files and folders, take full ownership over them and remove, move or copy
                  them, free of charge! Windows Explorer integration is also possible.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/deadpix')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  DeadPix
                </Typography>
                <Typography color="textSecondary" paragraph>
                  Fix dead or stuck pixels on your screen with just a couple of mouse clicks, free
                  of charge! DeadPix can fix stuck or dead pixels by rapidly cycling the color value
                  of the pixel. Please note that this tool does not provide a 100% success rate.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardActionArea
              style={{ height: '100%' }}
              onClick={() => navigate('/software/aniview')}
            >
              <CardContent>
                <Typography variant="h6" color="textPrimary" paragraph>
                  AniView
                </Typography>
                <Typography color="textSecondary" paragraph>
                  AniView is a free and open source GIF image viewer. You can watch GIF images your
                  way, thanks to all the options that are available in AniView.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

export default Software;
