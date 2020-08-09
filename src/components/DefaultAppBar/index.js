import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "gatsby";
import NavigationDrawer from "../NavigationDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const DefaultAppBar = ({ title }) => {

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon/>
          </IconButton>
          <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Link>
        </Toolbar>
        <NavigationDrawer onClose={() => setDrawerOpen(false)} open={drawerOpen} />
      </AppBar>
    </div>
  );
};

export default DefaultAppBar;
