import { Typography } from "@material-ui/core";
import React from "react";

const MultiChoiceOther = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Multiple choice inputs with "other" short text input</p>
    </>
  );
};

export default MultiChoiceOther;
