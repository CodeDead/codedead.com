import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import { SvgIcon } from '@material-ui/core';
import NavigationDrawer from '../NavigationDrawer';
import GitHubIcon from '../GithubIcon';
import TwitterIcon from '../TwitterIcon';
import FacebookIcon from '../FacebookIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const DefaultAppBar = ({
  title, githubUrl, twitterUrl, facebookUrl,
}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * Open a website
   * @param site The website that should be opened
   */
  const openSite = (site) => {
    if (site) {
      window.open(site, '_blank');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{
              color: 'inherit',
              textDecoration: 'inherit',
            }}
          >
            <Typography variant="h6">
              {title}
            </Typography>
          </Link>

          <div className={classes.title} />

          <IconButton color="inherit" onClick={() => openSite(facebookUrl)}>
            <SvgIcon>
              <FacebookIcon />
            </SvgIcon>
          </IconButton>
          <IconButton color="inherit" onClick={() => openSite(twitterUrl)}>
            <SvgIcon>
              <TwitterIcon />
            </SvgIcon>
          </IconButton>
          <IconButton color="inherit" onClick={() => openSite(githubUrl)}>
            <SvgIcon>
              <GitHubIcon />
            </SvgIcon>
          </IconButton>
        </Toolbar>
        <NavigationDrawer onClose={() => setDrawerOpen(false)} open={drawerOpen} />
      </AppBar>
    </div>
  );
};

export default DefaultAppBar;
