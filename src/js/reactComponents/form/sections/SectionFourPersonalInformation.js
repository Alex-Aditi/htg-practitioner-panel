import { Typography } from "@material-ui/core";
import React from "react";
import IndiShortText from "../inputs/IndiShortText";
import MultiChoiceOther from "../inputs/MultiChoiceOther";
import SingleChoice from "../inputs/SingleChoice";
import SingleChoiceOther from "../inputs/SingleChoiceOther";

function SectionFourPersonalInformation() {
  return (
    <>
      <Typography variant="h3">Section 4: Personal Information</Typography>
      {/*  */}
      <IndiShortText header="Ethnicity/Race" />
      {/*  */}
      <IndiShortText header="Ethnicity/Race in French" />
      {/*  */}
      <MultiChoiceOther header="Languages" />
      {/*  */}
      <SingleChoiceOther header="Gender" />
      {/*  */}
      <SingleChoice header="LGTBTQ2S+" />
      {/*  */}
      <SingleChoice header="Trans Identify" />
      {/*  */}
      <p>Back/Next Button Group</p>
    </>
  );
}

export default SectionFourPersonalInformation;
