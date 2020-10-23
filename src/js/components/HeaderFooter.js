import { AppBar, Button, makeStyles } from "@material-ui/core";
import React from "react";

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

const HeaderFooter = ({ children }) => {
  //this will pull the user from the UserProvider in future;
  const user = { uid: 12345, validated: true };
  return (
    <>
      {/* everything inside AppBar can be replaced with you own navbar design, just make sure it can show some clickable logout element */}
      <AppBar position="sticky">
        {/* this only shows the logout button if the user is logged in */}
        {user && user.validated ? (
          <Button onClick={logoutUser}>logout</Button>
        ) : null}
      </AppBar>
      {children}
    </>
  );
};

export default HeaderFooter;
