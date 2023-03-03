import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import NavigationDrawer from '../NavigationDrawer';
import { MainContext } from '../../contexts/MainContextProvider';
import { setThemeIndex } from '../../reducers/MainReducer/Actions';

const DefaultAppBar = ({
  title,
}) => {
  const [state, dispatch] = useContext(MainContext);

  const { themeIndex } = state;

  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * Change the theme
   */
  const changeTheme = () => {
    dispatch(setThemeIndex(themeIndex === 1 ? 0 : 1));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{
              marginRight: theme.spacing(2),
            }}
            color="inherit"
            aria-label="Menu"
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

          <div style={{ flexGrow: 1 }} />

          <IconButton
            color="inherit"
            onClick={changeTheme}
            aria-label="Theme"
          >
            {themeIndex === 1 ? <Brightness5Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
        <NavigationDrawer onClose={() => setDrawerOpen(false)} open={drawerOpen} />
      </AppBar>
    </div>
  );
};

export default DefaultAppBar;
