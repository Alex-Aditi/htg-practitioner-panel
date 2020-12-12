import { Button } from "@material-ui/core";
import React from "react";

const NextButton = ({ nextFunc }) => (
  <Button onClick={nextFunc}>Next Section</Button>
);

export default NextButton;
