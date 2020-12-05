import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { firebaseAuth } from "../../firebase/firebase";
import { UserContext } from "../providers/UserProvider";

const logoutUser = () => firebaseAuth.signOut();

const LogOutButton = () => {
  //this is able to receive user as context because UserProvider is built higher into the react chain
  //i tested this with dummy data from UserProvider and it seems to work
  const user = useContext(UserContext);
  return (
    <>
      {user /* && add a validation check here based on the user object we receive from firebase auth */ ? (
        <Grid item xs={1}>
          <Button variant="text" onClick={logoutUser}>
            Logout
          </Button>
        </Grid>
      ) : //when there is no user show nothing
      null}
    </>
  );
};

export default LogOutButton;
