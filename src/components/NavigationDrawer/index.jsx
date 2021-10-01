import React, { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import { navigate } from 'gatsby';
import { Box } from '@mui/material';
import { MainContext } from '../../contexts/MainContextProvider';

const NavigationDrawer = ({ open, onClose }) => {
  const [state] = useContext(MainContext);
  const theme = useTheme();

  const { pageIndex } = state;

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
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: 220,
          flexShrink: 0,
        }}
      >
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/')} selected={pageIndex === 0}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/software')} selected={pageIndex === 1}>
            <ListItemIcon><BuildIcon /></ListItemIcon>
            <ListItemText>Software</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/blog')} selected={pageIndex === 2}>
            <ListItemIcon><AnnouncementIcon /></ListItemIcon>
            <ListItemText>Blog</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/donate')} selected={pageIndex === 3}>
            <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
            <ListItemText>Donate</ListItemText>
          </ListItem>
          <ListItem button onClick={() => navigate('/about')} selected={pageIndex === 4}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem button onClick={() => navigate('/privacy')} selected={pageIndex === 5}>
            <ListItemIcon><VisibilityIcon /></ListItemIcon>
            <ListItemText>Privacy</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/contact')} selected={pageIndex === 6}>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
