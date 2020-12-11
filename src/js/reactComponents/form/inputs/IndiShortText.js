import { Typography } from "@material-ui/core";
import React from "react";

const IndiShortText = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Individual short text input</p>
    </>
  );
};

export default IndiShortText;
