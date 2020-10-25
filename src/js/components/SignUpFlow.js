import { Button, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { updateStateOnChange } from "../updateState";
import SignUp from "./SignUp";

const SignUpFlow = () => {
  const [returningUserEmail, setReturningUserEmail] = useState();
  const [returningUserPassword, setReturningUserPassword] = useState();

  const handleSignIn = () => {
    alert("Signing In");
  };

  return (
    <div>
      <SignUp />
      <br></br>
      <Typography variant="h6">Sign In</Typography>
      <Input
        placeholder="email"
        value={returningUserEmail}
        onChange={updateStateOnChange(setReturningUserEmail)}
      ></Input>
      <Input
        placeholder="password"
        value={returningUserPassword}
        onChange={updateStateOnChange(setReturningUserPassword)}
      ></Input>
      <Button color={"primary"} onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default SignUpFlow;
