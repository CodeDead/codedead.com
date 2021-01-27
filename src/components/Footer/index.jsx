import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <BottomNavigation showLabels style={{ marginTop: 20 }}>
      <BottomNavigationAction label={`Copyright © ${currentYear} CodeDead`} />
    </BottomNavigation>
  );
};

export default Footer;
