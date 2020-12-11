import { Typography } from "@material-ui/core";
import React from "react";
import IndiShortText from "../inputs/IndiShortText";
import MultiShortText from "../inputs/MultiShortText";
import ShortTextAddMore from "../inputs/ShortTextAddMore";

function SectionTwoContactInfo() {
  return (
    <>
      <Typography variant="h3">Section 2: Contact Info</Typography>

      <MultiShortText header="Name" />
      <IndiShortText header="Email" />
      <MultiShortText header="Phone #" />
      <IndiShortText header="Website" />
      <ShortTextAddMore header="Social media platforms" />
      {/*  */}
      <p>Back/Next Button Group</p>
    </>
  );
}

export default SectionTwoContactInfo;
