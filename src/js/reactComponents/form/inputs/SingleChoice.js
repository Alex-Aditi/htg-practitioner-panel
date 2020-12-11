import { Typography } from "@material-ui/core";
import React from "react";

const SingleChoice = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Single choice inputs</p>
    </>
  );
};

export default SingleChoice;
