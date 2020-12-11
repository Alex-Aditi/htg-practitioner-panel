//this might end up being multiple files etc
import { Typography } from "@material-ui/core";
import React from "react";
import IndiShortText from "./inputs/IndiShortText";
import MultiShortText from "./inputs/MultiShortText";
import ShortTextAddMore from "./inputs/ShortTextAddMore";

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
      <Typography variant="h5">Professon Permit</Typography>
      <p>
        Multiple choice inputs with conditional short text inputs depending on
        selections made
      </p>
      {/*  */}
      <Typography variant="h5">Profession Not Regulated</Typography>
      <p>Multiple choice inputs</p>
      {/*  */}
      <Typography variant="h5">Associations</Typography>
      <p>Multiple choice inputs</p>
      {/*  */}
      <p>Back/Next Button Group</p>

      {/* Section 4: PErsonal Informatuion */}
      <Typography variant="h3">Section 4: Personal Information</Typography>
      {/*  */}
      <Typography variant="h5">Ethnicity/Race</Typography>
      <p>Individual short text input</p>
      {/*  */}
      <Typography variant="h5">Ethnicity/Race in French</Typography>
      <p>Individual short text input</p>
      {/*  */}
      <Typography variant="h5">Languages</Typography>
      <p>Multiple choice inputs with "other" short text input</p>
      {/*  */}
      <Typography variant="h5">Gender</Typography>
      <p>Single choice inputs with "other" short text input</p>
      {/*  */}
      <Typography variant="h5">LGTBTQ2S+</Typography>
      <p>Single choice inputs</p>
      {/*  */}
      <Typography variant="h5">Trans Identify</Typography>
      <p>Single choice inputs</p>
      {/*  */}
      <p>Back/Next Button Group</p>

      {/* Section 5: Services */}
      <Typography variant="h3">Section 5: Services</Typography>
      {/*  */}
      <Typography variant="h5">Who do you provide services to?</Typography>
      <p>Multiple choice inputs</p>
      {/*  */}
      <Typography variant="h5">Your Treatment Approaches</Typography>
      <p>Multiple choice inputs with "other" short text input</p>
      {/*  */}
      <Typography variant="h5">Needs/Experiences</Typography>
      <p>Multiple choice inputs with "other" short text input</p>
      {/*  */}
      <Typography variant="h5">Address</Typography>
      <p>Multiple short text inputs</p>
      {/*  */}
      <Typography variant="h5">Fixed address?</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">Remotely</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">if remotely, how?</Typography>
      <p>Multiple choice inputs with "other" short text input</p>
      {/*  */}
      <Typography variant="h5">Accessible Facilities</Typography>
      <p>Multiple choice inputs</p>
      {/*  */}
      <Typography variant="h5">Hourly rate</Typography>
      <p>Individual short text inputs</p>
      {/*  */}
      <Typography variant="h5">Payment methods?</Typography>
      <p>Multiple choice inputs</p>
      {/*  */}
      <Typography variant="h5">Sliding scale?</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">Barter/trade</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">Insurance coverage</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">Trans attestation letters</Typography>
      <p>Single choice input</p>
      {/*  */}
      <Typography variant="h5">personal bio</Typography>
      <p>Long text input</p>
      {/*  */}
      <Typography variant="h5">personal bio in french</Typography>
      <p>Long text input</p>
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
