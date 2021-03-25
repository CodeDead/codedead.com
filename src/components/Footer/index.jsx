import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { SvgIcon } from '@material-ui/core';
import FacebookIcon from '../FacebookIcon';
import TwitterIcon from '../TwitterIcon';
import GitHubIcon from '../GithubIcon';

const Footer = ({ facebookUrl, githubUrl, twitterUrl }) => {
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
    <BottomNavigation
      showLabels
      style={{
        position: 'fixed', bottom: 0, width: '100%',
      }}
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
            <TwitterIcon />
          </SvgIcon>
        )}
        label="Twitter"
        onClick={() => openSite(twitterUrl)}
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
  );
};

export default Footer;
