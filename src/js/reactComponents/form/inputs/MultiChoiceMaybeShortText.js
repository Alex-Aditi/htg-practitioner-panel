import { Typography } from "@material-ui/core";
import React from "react";

const MultiChoiceMaybeShortText = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>
        Multiple choice inputs with conditional short text inputs depending on
        selections made
      </p>
    </>
  );
};

export default MultiChoiceMaybeShortText;
