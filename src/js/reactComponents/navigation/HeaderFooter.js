import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

// potentially refactor Footer into this file
const HeaderFooter = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooter;
