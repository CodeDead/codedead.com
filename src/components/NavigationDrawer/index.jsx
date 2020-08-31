import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import { navigate } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const NavigationDrawer = ({ open, onClose }) => {
  const classes = useStyles();

  /**
   * Close the drawer
   * @param e The event argument
   */
  const closeDrawer = (e) => {
    if (e) e.preventDefault();
    if (onClose) onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={closeDrawer}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText>
            Home
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/software')}>
          <ListItemIcon><BuildIcon /></ListItemIcon>
          <ListItemText>Software</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/blog')}>
          <ListItemIcon><AnnouncementIcon /></ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/donate')}>
          <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
          <ListItemText>Donate</ListItemText>
        </ListItem>
        <ListItem button onClick={() => navigate('/about')}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
        <ListItem button onClick={() => navigate('/contact')}>
          <ListItemIcon><EmailIcon /></ListItemIcon>
          <ListItemText>Contact</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
