import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

const LogOutButton = () => {
  //this is able to receive user as context because UserProvider is built higher into the react chain
  //i tested this with dummy data from UserProvider and it seems to work
  const user = useContext(UserContext);
  return (
    <>
      {user /* && add a validation check here based on the user object we receive from firebase auth */ ? (
        <Grid item xs={1}>
          {/* this actually is not likely to be a link to anything - rather this is a button with a logout action in its click handler */}
          {/* <Link color="textSecondary" underline="none" href="#">
                    Logout
                  </Link> */}
          {/* this styling may not be quite right i just pulled the button in - i left the link element commented above in case it contains styling information */}
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
