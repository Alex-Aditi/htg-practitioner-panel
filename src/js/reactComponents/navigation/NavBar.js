import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";

import cureLogo from "../../../static/img/cure-logo.png";
import LogOutButton from "./LogOutButton";

// where elsewhere we might use useStyles from material UI, here we
// just add a style objec to the style prop of the img tag of the logo below
//
// this is because <img> is a simple tag and NOT a MaterialUI component and so cannot have its theming modified by the useStyles pattern
const logo = {
  height: "3em",
  width: "auto",
  alignSelf: "center",
};

//note that the component doesn't receive user as a prop but receives it from useContext below
export default function NavBar() {
  return (
    <>
      <Grid container direction="row" alignContent="center" alignItems="center">
        {/* xs indicates how much of a 12 column grid this item takes up on the smallest screen - here it takes up the whole width */}
        {/* because we only set xs which indicates the smallest screen size, this is the value for other screen sizes also */}
        {/* https://material-ui.com/components/grid/ */}
        <Grid item xs={12}>
          {/* material UI convention is to wrap children of an AppBa in a Toolbar - 
          it is standard practice to make a Toolbar layout look right in MUI */}
          <AppBar position="sticky">
            {/* note - all xs values below toolbar need to add up to 12 */}
            <Toolbar>
              {/* by making this take up 11 columns (with xs={11}), it forces all other items to be on the extreme right end */}
              <Grid item xs={11}>
                {/* style={logo} here takes inline styling from the object defined above */}
                <img src={cureLogo} alt="Cure Concordia Logo" style={logo} />
              </Grid>
              <LogOutButton />
              <Grid item xs={1}>
                <Button variant="text">FR</Button>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
}
