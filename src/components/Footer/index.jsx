import React, { useContext } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { MainContext } from '../../contexts/MainContextProvider';
import { setThemeIndex } from '../../reducers/MainReducer/Actions';

const Footer = () => {
  const [state, dispatch] = useContext(MainContext);
  const currentYear = new Date().getFullYear();

  const { themeIndex } = state;

  /**
   * Change the theme
   */
  const changeTheme = () => {
    dispatch(setThemeIndex(themeIndex === 1 ? 0 : 1));
  };

  return (
    <BottomNavigation showLabels style={{ marginTop: 20 }}>
      <BottomNavigationAction label={`Copyright © ${currentYear} CodeDead`} />
      <BottomNavigationAction
        icon={themeIndex === 0 ? <Brightness5Icon /> : <Brightness7Icon />}
        onClick={changeTheme}
      />
    </BottomNavigation>
  );
};

export default Footer;
