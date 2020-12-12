import { Button } from "@material-ui/core";
import React from "react";

const NextButton = ({ nextFunc }) => (
  <Button onClick={nextFunc} color="primary">
    Next Section
  </Button>
);

export default NextButton;
