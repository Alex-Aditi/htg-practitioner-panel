import { AppBar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import Nav from './Nav'

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

const HeaderFooter = ({ children }) => {
  //this will pull the user from the UserProvider in future;
  const user = { uid: 12345, validated: true };
  return (
    <>
      <Nav user={user} /> 
      {children}
    </>
  );
};

export default HeaderFooter;
