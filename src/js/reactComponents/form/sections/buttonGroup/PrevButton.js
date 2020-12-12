import { Button } from "@material-ui/core";
import React from "react";

const PrevButton = ({ prevFunc }) => (
  <Button onClick={prevFunc}>Previous Section</Button>
);

export default PrevButton;
