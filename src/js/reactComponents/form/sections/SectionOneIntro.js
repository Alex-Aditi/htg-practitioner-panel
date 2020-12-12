import { Button, Typography } from "@material-ui/core";
import React from "react";
import NextButton from "./buttonGroup/NextButton";

function SectionOneIntro({ nextSection }) {
  return (
    <>
      <Typography variant="h3">Section 1: Title</Typography>
      {/*  */}
      <Typography variant="h5">Professional Guidelines</Typography>
      <p>text block to read</p>
      {/*  */}
      <NextButton nextFunc={nextSection} />
    </>
  );
}

export default SectionOneIntro;
