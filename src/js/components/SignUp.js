import { Button, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase/firebase";
import { updateStateOnChange } from "../updateState";

const SignUp = () => {
  const [newUserEmail, setNewUserEmail] = useState();
  const [newUserPassword, setNewUserPassword] = useState();

  const handleSignUp = () =>
    firebaseAuth
      .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
      .then((userObject) => console.log(userObject))
      .catch((error) => console.error(error));

  return (
    <>
      <Typography variant="h6">Sign Up</Typography>
      <Input
        placeholder="email"
        value={newUserEmail}
        onChange={updateStateOnChange(setNewUserEmail)}
      ></Input>
      <Input
        placeholder="password"
        value={newUserPassword}
        onChange={updateStateOnChange(setNewUserPassword)}
      ></Input>
      <Button color={"primary"} onClick={handleSignUp}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUp;