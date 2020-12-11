import { Typography } from "@material-ui/core";
import React from "react";
import MultiChoice from "../inputs/MultiChoice";
import MultiChoiceMaybeShortText from "../inputs/MultiChoiceMaybeShortText";

function SectionThreeProfessionalInformation() {
  return (
    <>
      <Typography variant="h3">Section 3: Professional Information</Typography>
      {/*  */}
      <MultiChoiceMaybeShortText header="Professon Permit" />
      {/*  */}
      <MultiChoice header="Profession Not Regulated" />
      {/*  */}
      <MultiChoice header="Associations" />
      {/*  */}
      <p>Back/Next Button Group</p>
    </>
  );
}

export default SectionThreeProfessionalInformation;
