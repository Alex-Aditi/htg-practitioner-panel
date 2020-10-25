import { Button, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { firebaseAuth } from "../firebase/firebase";

const updateState = (stateFunction) => (event) =>
  stateFunction(event.target.value);
const SignUpFlow = () => {
  const [newUserEmail, setNewUserEmail] = useState();
  const [newUserPassword, setNewUserPassword] = useState();
  const [returningUserEmail, setReturningUserEmail] = useState();
  const [returningUserPassword, setReturningUserPassword] = useState();

  const handleSignUp = () =>
    firebaseAuth
      .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
      .then((userObject) => console.log(userObject))
      .catch((error) => console.error(error));

  return (
    <div>
      <Typography variant="h6">Sign Up</Typography>
      <Input
        placeholder="email"
        value={newUserEmail}
        onChange={updateState(setNewUserEmail)}
      ></Input>
      <Input
        placeholder="password"
        value={newUserPassword}
        onChange={updateState(setNewUserPassword)}
      ></Input>
      <Button color={"primary"} onClick={handleSignUp}>
        Sign Up
      </Button>
      <br></br>
      <Typography variant="h6">Sign In</Typography>
      <Input
        placeholder="email"
        value={returningUserEmail}
        onChange={updateState(setReturningUserEmail)}
      ></Input>
      <Input
        placeholder="password"
        value={returningUserPassword}
        onChange={updateState(setReturningUserPassword)}
      ></Input>
      <Button
        color={"primary"}
        onClick={() => {
          alert(returningUserEmail);
          alert(returningUserPassword);
        }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignUpFlow;