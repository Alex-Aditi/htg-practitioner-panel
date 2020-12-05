import { Grid } from "@material-ui/core";

import React from "react";
import SquareCard from "../UI/customComponents/SquareCard";

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
        background: `url(${lavenderJpg}) no-repeat top center/200% fixed`,
        height: "100vh", // scrollbar now shows up
      }}
    >
      <Grid item xs={12}>
        <SquareCard>
          {/* we can load anything into this card based on state of signup actions of user */}
          <SignInAndSignUp />
        </SquareCard>
      </Grid>
    </Grid>
  );
};

export default SignUpFlow;
