import React from "react";
import SectionOneIntro from "./sections/SectionOneIntro";
import SectionTwoContactInfo from "./sections/SectionTwoContactInfo";
import SectionThreeProfessionalInformation from "./sections/SectionThreeProfessionalInformation";
import SectionFourPersonalInformation from "./sections/SectionFourPersonalInformation";
import SectionFiveServices from "./sections/SectionFiveServices";
import SectionSixReviewAndSubmit from "./sections/SectionSixReviewAndSubmit";
import SectionSevenThankYouAndConfirmation from "./sections/SectionSevenThankYouAndConfirmation";

const Form = () => {
  return (
    <>
      <SectionOneIntro />
      <SectionTwoContactInfo />
      <SectionThreeProfessionalInformation />
      <SectionFourPersonalInformation />
      <SectionFiveServices />
      <SectionSixReviewAndSubmit />
      <SectionSevenThankYouAndConfirmation />
    </>
  );
};

export default Form;
