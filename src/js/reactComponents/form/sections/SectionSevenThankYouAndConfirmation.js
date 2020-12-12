import { Typography } from "@material-ui/core";
import React from "react";
import PrevButton from "./buttonGroup/PrevButton";

function SectionSevenThankYouAndConfirmation({ prevSection }) {
  return (
    <>
      <Typography variant="h3">Section 7: Thank You & Confirmation</Typography>
      {/*  */}
      <Typography variant="h5">Confirmation</Typography>
      <p>text block to read</p>
      {/*  */}
      <Typography variant="h5">Thank You</Typography>
      <p>text block to read</p>
      {/*  */}
      {/* this is just for testing to go back and forth in the flow */}
      <PrevButton prevFunc={prevSection} />
    </>
  );
}

export default SectionSevenThankYouAndConfirmation;
