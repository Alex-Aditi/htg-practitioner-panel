import { Typography, Grid } from "@material-ui/core";

import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Card from "../UI/customComponents/SquareCard";

import lavenderJpg from "../../../static/img/header.jpg";

const SignUpFlow = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        background: `url(${lavenderJpg}) no-repeat top center/100% fixed`,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h1" id="announce" style={{ margin: "0 auto" }}>
          Welcome to the Practitioner Panel
        </Typography>
        <SignUp />
        <br></br>
        <SignIn />
      </Grid>
    </Grid>
  );
};

export default SignUpFlow;
