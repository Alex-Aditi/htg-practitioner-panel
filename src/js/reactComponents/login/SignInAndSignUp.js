import { Typography } from "@material-ui/core";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInAndSignUp = () => {
  return (
    <>
      <Typography variant="h1" id="announce">
        Welcome to the Practitioner Panel
      </Typography>
      <SignUp />
      <br></br>
      <SignIn />
    </>
  );
};

export default SignInAndSignUp;
