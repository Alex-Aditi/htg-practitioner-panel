import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

// potentially refactor Footer into this file
const HeaderFooter = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default HeaderFooter;
