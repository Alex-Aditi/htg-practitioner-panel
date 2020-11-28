import React from "react";
import Footer from "./Footer";
import Nav from './Nav'

//this will trigger a logout action from firebaseAuth in future;
const logoutUser = () => alert("logging out");

// potentially refactor Footer into this file
const HeaderFooter = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  );
};

export default HeaderFooter;