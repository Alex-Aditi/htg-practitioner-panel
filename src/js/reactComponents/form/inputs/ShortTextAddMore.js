import { Typography } from "@material-ui/core";
import React from "react";

const ShortTextAddMore = ({ header }) => {
  return (
    <>
      <Typography variant="h5">{header}</Typography>
      <p>Short text input with option to add or delete more of its type</p>
    </>
  );
};

export default ShortTextAddMore;
