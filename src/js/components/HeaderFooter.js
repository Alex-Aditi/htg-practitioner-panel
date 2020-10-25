import React from "react";
import Nav from "./Nav";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default HeaderFooter;
