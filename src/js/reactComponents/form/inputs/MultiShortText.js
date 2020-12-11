import { Typography } from "@material-ui/core";
import React from "react";

const MultiShortText = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Multiple short text inputs</p>
    </>
  );
};

export default MultiShortText;
