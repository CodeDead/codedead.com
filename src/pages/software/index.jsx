import React, { useContext, useEffect, useState } from 'react';
import { Container, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SecurityIcon from '@material-ui/icons/Security';
import ComputerIcon from '@material-ui/icons/Computer';
import AppsIcon from '@material-ui/icons/Apps';
import PageHeader from '../../components/PageHeader';
import Layout from '../../components/Layout';
import { MainContext } from '../../contexts/MainContextProvider';
import { setPageIndex } from '../../reducers/MainReducer/Actions';
import Application from '../../components/Application';

const Software = () => {
  const [, dispatch] = useContext(MainContext);
  const [searchValue, setSearchValue] = useState('');

  const applications = [{
    name: 'DeadHash',
    url: '/software/deadhash',
    description: 'Calculate file hashes on any platform with ease thanks to an easy to use GUI, drag and drop functionality and help documentation that are all included!',
    tags: ['DeadHash', 'hashing', 'file'],
  }, {
    name: 'Advanced PassGen',
    url: '/software/advanced-passgen',
    description: 'Easily generate thousands of passwords using Advanced PassGen. You can even go so far as to define your own character set!',
    tags: ['Advanced PassGen', 'password', 'generator'],
  }, {
    name: 'MemPlus',
    url: '/software/memplus',
    description: 'MemPlus can be used to reduce the amount of RAM that is being used by applications on your system. In essence, freeing up memory so that more memory is available to you!',
    tags: ['MemPlus', 'RAM', 'Random access memory'],
  }, {
    name: 'PK Finder',
    url: '/software/pk-finder',
    description: 'Easily recover your Windows Product Key with PK Finder. As soon as you open PK Finder, you’ll be able to view your product key.',
    tags: ['PK Finder', 'Product key', 'serial', 'license'],
  }, {
    name: 'Advanced PortChecker',
    url: '/software/advanced-portchecker',
    description: 'Scanning TCP and UDP ports has never been this easy. Watch how Advanced PortChecker updates you with real-time information while it’s scanning!',
    tags: ['Advanced PortChecker', 'scanner'],
  }, {
    name: 'DeadLock',
    url: '/software/deadlock',
    description: 'Unlock files and folders, take full ownership over them and remove, move or copy them, free of charge! Windows Explorer integration is also possible.',
    tags: ['DeadLock', 'file', 'folder'],
  }, {
    name: 'DeadPix',
    url: '/software/deadpix',
    description: 'Fix dead or stuck pixels on your screen with just a couple of mouse clicks, free of charge! DeadPix can fix stuck or dead pixels by rapidly cycling the color value of the pixel. Please note that this tool does not provide a 100% success rate.',
    tags: ['DeadPix', 'Pixel', 'Screen', 'LCD'],
  }, {
    name: 'AniView',
    url: '/software/aniview',
    description: 'AniView is a free and open source GIF image viewer. You can watch GIF images your way, thanks to all the options that are available in AniView.',
    tags: ['AniView', 'images', 'GIF', 'viewer'],
  }];

  useEffect(() => {
    dispatch(setPageIndex(1));
  }, []);

  let searchResult;
  if (searchValue && searchValue.length > 0) {
    searchResult = applications.filter((application) => {
      for (let i = 0; i < application.tags.length; i += 1) {
        if (application.tags[i].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    })
      .map((application) => (
        <Grid item xs={12} md={3} lg={4} key={application.name}>
          <Application
            name={application.name}
            description={application.description}
            url={application.url}
          />
        </Grid>
      ));
  }

  return (
    <Layout>
      <PageHeader title="Software" subTitle="Our work" />
      <Container maxWidth="md" style={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <TextField
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  variant="outlined"
                  placeholder="Search"
                  style={{ width: '100%' }}
                />
              </CardContent>
            </Card>
          </Grid>
          {/* eslint-disable-next-line no-mixed-operators */}
          {searchResult && searchResult.length > 0 || (searchValue && searchValue.length > 0)
            ? null
            : (
              <>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="h5" color="textPrimary">
                    <SecurityIcon color="inherit" />
                    {' '}
                    Security
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Divider />
                </Grid>
              </>
            )}
        </Grid>

        {/* eslint-disable-next-line no-nested-ternary */}
        {searchResult && searchResult.length > 0 ? (
          <Grid container spacing={2}>
            {searchResult}
          </Grid>
        ) : searchValue && searchValue.length > 0 ? (
          <Card style={{ marginTop: 10 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                No results
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Your search query did not return any results
              </Typography>
            </CardContent>
          </Card>
        ) : null}

        {/* eslint-disable-next-line no-mixed-operators */}
        {searchResult && searchResult.length > 0 || (searchValue && searchValue.length > 0)
          ? null
          : (
            <Grid container spacing={2} style={{ marginTop: 10 }}>
              <Grid item xs={12} md={3} lg={4}>
                <Application
                  name={applications.filter((item) => item.name === 'DeadHash')[0].name}
                  description={applications.filter((item) => item.name === 'DeadHash')[0].description}
                  url={applications.filter((item) => item.name === 'DeadHash')[0].url}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={4}>
                <Application
                  name={applications.filter((item) => item.name === 'Advanced PassGen')[0].name}
                  description={applications.filter((item) => item.name === 'Advanced PassGen')[0].description}
                  url={applications.filter((item) => item.name === 'Advanced PassGen')[0].url}
                />
              </Grid>
            </Grid>
          )}

        {/* eslint-disable-next-line no-mixed-operators */}
        {searchResult && searchResult.length > 0 || (searchValue && searchValue.length > 0)
          ? null
          : (
            <Grid container spacing={2} style={{ marginTop: 20 }}>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h5" color="textPrimary">
                  <ComputerIcon color="inherit" />
                  {' '}
                  System
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Divider />
              </Grid>
            </Grid>
          )}

        {/* eslint-disable-next-line no-mixed-operators */}
        {searchResult && searchResult.length > 0 || (searchValue && searchValue.length > 0)
          ? null
          : (
            <Grid container spacing={2} style={{ marginTop: 10 }}>
              <Grid item xs={12} md={3} lg={4}>
                <Application
                  name={applications.filter((item) => item.name === 'MemPlus')[0].name}
                  description={applications.filter((item) => item.name === 'MemPlus')[0].description}
                  url={applications.filter((item) => item.name === 'MemPlus')[0].url}
                />
              </Grid>
              <Grid item xs={12} md={3} lg={4}>
                <Application
                  name={applications.filter((item) => item.name === 'PK Finder')[0].name}
                  description={applications.filter((item) => item.name === 'PK Finder')[0].description}
                  url={applications.filter((item) => item.name === 'PK Finder')[0].url}
                />
              </Grid>
            </Grid>
          )}

        {/* eslint-disable-next-line no-mixed-operators */}
        {searchResult && searchResult.length > 0 || (searchValue && searchValue.length > 0)
          ? null
          : (
            <>
              <Grid container spacing={2} style={{ marginTop: 20 }}>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="h5" color="textPrimary">
                    <AppsIcon color="inherit" />
                    {' '}
                    Utilities
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Divider />
                </Grid>
              </Grid>

              <Grid container spacing={2} style={{ marginTop: 10 }}>
                <Grid item xs={12} md={3} lg={4}>
                  <Application
                    name={applications.filter((item) => item.name === 'Advanced PortChecker')[0].name}
                    description={applications.filter((item) => item.name === 'Advanced PortChecker')[0].description}
                    url={applications.filter((item) => item.name === 'Advanced PortChecker')[0].url}
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                  <Application
                    name={applications.filter((item) => item.name === 'DeadLock')[0].name}
                    description={applications.filter((item) => item.name === 'DeadLock')[0].description}
                    url={applications.filter((item) => item.name === 'DeadLock')[0].url}
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                  <Application
                    name={applications.filter((item) => item.name === 'DeadPix')[0].name}
                    description={applications.filter((item) => item.name === 'DeadPix')[0].description}
                    url={applications.filter((item) => item.name === 'DeadPix')[0].url}
                  />
                </Grid>
                <Grid item xs={12} md={3} lg={4}>
                  <Application
                    name={applications.filter((item) => item.name === 'AniView')[0].name}
                    description={applications.filter((item) => item.name === 'AniView')[0].description}
                    url={applications.filter((item) => item.name === 'AniView')[0].url}
                  />
                </Grid>
              </Grid>
            </>
          )}
      </Container>
    </Layout>
  );
};

export default Software;
