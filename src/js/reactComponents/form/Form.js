//this might end up being multiple files etc
import { Typography } from "@material-ui/core";
import React from "react";
import IndiShortText from "./inputs/IndiShortText";
import MultiShortText from "./inputs/MultiShortText";
import MultiChoice from "./inputs/MultiChoice";
import MultiChoiceOther from "./inputs/MultiChoiceOther";
import SingleChoiceOther from "./inputs/SingleChoiceOther";
import SingleChoice from "./inputs/SingleChoice";
import MultiChoiceMaybeShortText from "./inputs/MultiChoiceMaybeShortText";
import ShortTextAddMore from "./inputs/ShortTextAddMore";
import LongText from "./inputs/LongText";

const Form = () => {
  return (
    <>
      {/* Section 1: Title */}
      <Typography variant="h3">Section 1: Title</Typography>
      {/*  */}
      <Typography variant="h5">Professional Guidelines</Typography>
      <p>text block to read</p>
      {/*  */}
      <p>Next Button</p>

      {/* Section 2: Contact Info */}
      <Typography variant="h3">Section 2: Contact Info</Typography>

      <MultiShortText header="Name" />
      <IndiShortText header="Email" />
      <MultiShortText header="Phone #" />
      <IndiShortText header="Website" />
      <ShortTextAddMore header="Social media platforms" />
      {/*  */}
      <p>Back/Next Button Group</p>

      {/* Section 3: Professional Information */}
      <Typography variant="h3">Section 3: Professional Information</Typography>
      {/*  */}
      <MultiChoiceMaybeShortText header="Professon Permit" />
      {/*  */}
      <MultiChoice header="Profession Not Regulated"/>
      {/*  */}
      <MultiChoice header="Associations"/>
      {/*  */}
      <p>Back/Next Button Group</p>

      {/* Section 4: Personal Informatuion */}
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

      {/* Section 5: Services */}
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

      {/* Section 6:Review & Submit */}
      <Typography variant="h3">Section 6: Review & Submit</Typography>
      {/*  */}
      <p>Submit Button Group</p>

      {/* Section 7: Thank You & Confirmation */}
      <Typography variant="h3">Section 7: Thank You & Confirmation</Typography>
      {/*  */}
      <Typography variant="h5">Connfirmation</Typography>
      <p>text block to read</p>
      {/*  */}
      <Typography variant="h5">Thank You</Typography>
      <p>text block to read</p>
      {/*  */}
    </>
  );
};

export default Form;
