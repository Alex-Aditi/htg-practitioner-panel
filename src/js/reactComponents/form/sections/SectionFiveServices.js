import { Typography } from "@material-ui/core";
import React from "react";
import IndiShortText from "../inputs/IndiShortText";
import LongText from "../inputs/LongText";
import MultiChoice from "../inputs/MultiChoice";
import MultiChoiceOther from "../inputs/MultiChoiceOther";
import MultiShortText from "../inputs/MultiShortText";
import SingleChoice from "../inputs/SingleChoice";

function SectionFiveServices() {
  return (
    <>
      <Typography variant="h3">Section 5: Services</Typography>
      {/*  */}
      <MultiChoice header="Who do you provide services to?" />
      {/*  */}
      <MultiChoiceOther header="Your Treatment Approaches" />
      {/*  */}
      <MultiChoiceOther header="Needs/Experiences" />
      {/*  */}
      <MultiShortText header="Address" />
      {/*  */}
      <SingleChoice header="Fixed address?" />
      {/*  */}
      <SingleChoice header="Remotely" />
      {/*  */}
      <MultiChoiceOther header="if remotely, how?" />
      {/*  */}
      <MultiChoice header="Accessible Facilities" />
      {/*  */}
      <IndiShortText header="Hourly rate" />
      {/*  */}
      <MultiChoice header="Payment methods?" />
      {/*  */}
      <SingleChoice header="Sliding scale?" />
      {/*  */}
      <SingleChoice header="Barter/trade" />
      {/*  */}
      <SingleChoice header="Insurance coverage" />
      {/*  */}
      <SingleChoice header="Trans attestation letters" />
      {/*  */}
      <LongText header="personal bio" />
      {/*  */}
      <LongText header="personal bio in french" />
      {/*  */}
      <p>Back/Next Button Group</p>
    </>
  );
}

export default SectionFiveServices;
