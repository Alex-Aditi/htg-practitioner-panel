import { Typography } from "@material-ui/core";
import React from "react";
import NextBackButtonGroup from "./buttonGroup/NextBackButtonGroup";

function SectionSixReviewAndSubmit({ nextSection, prevSection }) {
  return (
    <>
      <Typography variant="h3">Section 6: Review & Submit</Typography>
      {/*  */}
      {/* this should have a submit button somehow */}
      {/*  */}
      <NextBackButtonGroup
        nextSection={nextSection}
        prevSection={prevSection}
      />
    </>
  );
}

export default SectionSixReviewAndSubmit;
