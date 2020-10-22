import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
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
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button variant="text">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
