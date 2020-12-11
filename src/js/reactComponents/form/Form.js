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
      {/* <Typography variant="h5">Who do you provide services to?</Typography>
      <p>Multiple choice inputs</p> */}
      {/*  */}
      <MultiChoiceOther header="Your Treatment Approaches" />
      {/* <Typography variant="h5">Your Treatment Approaches</Typography>
      <p>Multiple choice inputs with "other" short text input</p> */}
      {/*  */}
      <MultiChoiceOther header="Needs/Experiences" />
      {/* <Typography variant="h5">Needs/Experiences</Typography>
      <p>Multiple choice inputs with "other" short text input</p> */}
      {/*  */}
      <MultiShortText header="Address" />
      {/* <Typography variant="h5">Address</Typography>
      <p>Multiple short text inputs</p> */}
      {/*  */}
      <SingleChoice header="Fixed address?" />
      {/* <Typography variant="h5">Fixed address?</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <SingleChoice header="Remotely" />
      {/* <Typography variant="h5">Remotely</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <MultiChoiceOther header="if remotely, how?" />
      {/* <Typography variant="h5">if remotely, how?</Typography>
      <p>Multiple choice inputs with "other" short text input</p> */}
      {/*  */}
      <MultiChoice header="Accessible Facilities" />
      {/* <Typography variant="h5">Accessible Facilities</Typography>
      <p>Multiple choice inputs</p> */}
      {/*  */}
      <IndiShortText header="Hourly rate" />
      {/* <Typography variant="h5">Hourly rate</Typography>
      <p>Individual short text inputs</p> */}
      {/*  */}
      <MultiChoice header="Payment methods?" />
      {/* <Typography variant="h5">Payment methods?</Typography>
      <p>Multiple choice inputs</p> */}
      {/*  */}
      <SingleChoice header="Sliding scale?" />
      {/* <Typography variant="h5">Sliding scale?</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <SingleChoice header="Barter/trade" />
      {/* <Typography variant="h5">Barter/trade</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <SingleChoice header="Insurance coverage" />
      {/* <Typography variant="h5">Insurance coverage</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <SingleChoice header="Trans attestation letters" />
      {/* <Typography variant="h5">Trans attestation letters</Typography>
      <p>Single choice input</p> */}
      {/*  */}
      <LongText header="personal bio" />
      {/* <Typography variant="h5">personal bio</Typography>
      <p>Long text input</p> */}
      {/*  */}
      <LongText header="personal bio in french" />
      {/* <Typography variant="h5">personal bio in french</Typography>
      <p>Long text input</p> */}
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
