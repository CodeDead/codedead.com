import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import FacebookIcon from '../FacebookIcon';
import GitHubIcon from '../GithubIcon';
import MastodonIcon from '../MastodonIcon';

const Footer = ({ facebookUrl, githubUrl, mastodonUrl }) => {
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
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction
          icon={(
            <SvgIcon>
              <FacebookIcon />
            </SvgIcon>
          )}
          label="Facebook"
          onClick={() => openSite(facebookUrl)}
        />
        <BottomNavigationAction
          icon={(
            <SvgIcon>
              <MastodonIcon />
            </SvgIcon>
          )}
          label="Mastodon"
          onClick={() => openSite(mastodonUrl)}
        />
        <BottomNavigationAction
          icon={(
            <SvgIcon>
              <GitHubIcon />
            </SvgIcon>
          )}
          label="GitHub"
          onClick={() => openSite(githubUrl)}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
