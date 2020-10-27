import { Button, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase/firebase";
import { updateStateOnChange } from "../updateState";

const SignIn = () => {
  const [returningUserEmail, setReturningUserEmail] = useState();
  const [returningUserPassword, setReturningUserPassword] = useState();

  const handleSignIn = () => {
    firebaseAuth
      .signInWithEmailAndPassword(returningUserEmail, returningUserPassword)
      .catch((error) => {
        const { code, message } = error;
        alert(code);
        alert(message);
      });
  };
  return (
    <>
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
    </>
  );
};

export default SignIn;
