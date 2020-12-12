import { Button, Typography } from "@material-ui/core";
import React from "react";

function SectionOneIntro({ nextSection }) {
  return (
    <>
      <Typography variant="h3">Section 1: Title</Typography>
      {/*  */}
      <Typography variant="h5">Professional Guidelines</Typography>
      <p>text block to read</p>
      {/*  */}
      <Button onClick={nextSection} color="primary">
        Next Section
      </Button>
    </>
  );
}

export default SectionOneIntro;
