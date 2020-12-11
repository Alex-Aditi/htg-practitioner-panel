import { Typography } from "@material-ui/core";
import React from "react";

const LongText = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Long text input</p>
    </>
  );
};

export default LongText;
