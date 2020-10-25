import React from "react";
import Nav from "./Nav";

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

const HeaderFooter = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default HeaderFooter;
