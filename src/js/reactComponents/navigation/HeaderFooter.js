import React from "react";
import NavBar from "./NavBar";

// potentially refactor Footer into this file
const HeaderFooter = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default HeaderFooter;
