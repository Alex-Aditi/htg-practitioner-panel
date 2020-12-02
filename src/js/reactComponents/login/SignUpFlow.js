import { Grid } from "@material-ui/core";

import React from "react";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import Card from "../UI/customComponents/SquareCard";

import lavenderJpg from "../../../static/img/header.jpg";
import SignInAndSignUp from "./SignInAndSignUp";

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
        <Card>
          {/* we can load anything into this card based on state of signup actions of user */}
          <SignInAndSignUp />
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpFlow;
