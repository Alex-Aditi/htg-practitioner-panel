import { Typography } from "@material-ui/core";
import React from "react";
import MultiChoice from "../inputs/MultiChoice";
import MultiChoiceMaybeShortText from "../inputs/MultiChoiceMaybeShortText";
import NextBackButtonGroup from "./buttonGroup/NextBackButtonGroup";

function SectionThreeProfessionalInformation({ nextSection, prevSection }) {
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
      <NextBackButtonGroup
        nextSection={nextSection}
        prevSection={prevSection}
      />
    </>
  );
}

export default SectionThreeProfessionalInformation;
