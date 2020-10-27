import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import cureLogo from "../../static/img/cure-logo.png";
import LogOutButton from "./LogOutButton";

const logo = {
  height: "3em",
  width: "auto",
  alignSelf: "center",
  // paddingTop: '0.3em',
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
}));

//note that the component doesn't receive user as a prop but receives it from useContext below
export default function Nav() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" alignContent="center" alignItems="center">
        <Grid item xs={12}>
          <AppBar position="sticky">
            <Toolbar>
              <Grid item xs={10}>
                <img src={cureLogo} alt="Cure Concordia Logo" style={logo} />
              </Grid>
              <LogOutButton />
              <Grid item xs={1}>
                <Button variant="text">FR</Button>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  edge="end"
                  disableRipple={true}
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}
