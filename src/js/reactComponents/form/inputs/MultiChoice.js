import { Typography } from "@material-ui/core";
import React from "react";

const MultiChoice = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Multiple choice inputs</p>
    </>
  );
};

export default MultiChoice;
