import { Typography } from "@material-ui/core";
import React from "react";

const SingleChoiceOther = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Single choice inputs with "other" short text input</p>
    </>
  );
};
export default SingleChoiceOther;
