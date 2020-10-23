import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import cureLogo from "../../static/img/cure-logo.png";

const logo = {
  height: '3em',
  width: 'auto',
  paddingTop: '0.3em'
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
        <img
          src={cureLogo}
          alt="Cure Concordia Logo"
          style={logo}
        />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link color="textSecondary" underline="none" href="#">Login</Link>
          <Button variant="text">FR</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
