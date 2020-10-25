import React, { useContext } from "react";
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
import { UserContext } from "../providers/UserProvider";

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

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
  const user = useContext(UserContext) || { uid: 12345 };

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
                  {/* this actually is not likely to be a link to anything - rather this is a button with a logout action in its click handler */}
                  {/* <Link color="textSecondary" underline="none" href="#">
                    Logout
                  </Link> */}
                  {/* this styling may not be quite right i just pulled the button in - i left the link element commented above in case it contains styling information */}
                  <Button variant="text" onClick={logoutUser}>
                    Logout
                  </Button>
                </Grid>
              ) : //when there is no user show nothing
              null}
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
