import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NavigationDrawer from '../NavigationDrawer';
import { MainContext } from '../../contexts/MainContextProvider';
import { setThemeIndex } from '../../reducers/MainReducer/Actions';

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
  title,
}) => {
  const [state, dispatch] = useContext(MainContext);

  const { themeIndex } = state;

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * Change the theme
   */
  const changeTheme = () => {
    dispatch(setThemeIndex(themeIndex === 1 ? 0 : 1));
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

          <IconButton color="inherit" onClick={changeTheme}>
            {themeIndex === 1 ? <Brightness5Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
        <NavigationDrawer onClose={() => setDrawerOpen(false)} open={drawerOpen} />
      </AppBar>
    </div>
  );
};

export default DefaultAppBar;
