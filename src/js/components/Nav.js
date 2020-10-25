import React, { useContext } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Link,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import cureLogo from "../../static/img/cure-logo.png";
import { UserContext } from "../providers/UserProvider";

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
  //this is able to receive user as context because UserProvider is built higher into the react chain
  //i tested this with dummy data from UserProvider and it seems to work
  const user = useContext(UserContext);

  return (
    <div>
      <Grid container direction="row" alignContent="center" alignItems="center">
        <Grid item xs={12}>
          <AppBar position="sticky">
            <Toolbar>
              <Grid item xs={10}>
                <img src={cureLogo} alt="Cure Concordia Logo" style={logo} />
              </Grid>
              {user /* && add a validation check here based on the user object we receive from firebase auth */ ? (
                <Grid item xs={1}>
                  <Link color="textSecondary" underline="none" href="#">
                    Logout
                  </Link>
                </Grid>
              ) : (
                <Grid item xs={1}>
                  <Link color="textSecondary" underline="none" href="#">
                    Login
                  </Link>
                </Grid>
              )}
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
