import React, { useState } from "react";
import SectionOneIntro from "./sections/SectionOneIntro";
import SectionTwoContactInfo from "./sections/SectionTwoContactInfo";
import SectionThreeProfessionalInformation from "./sections/SectionThreeProfessionalInformation";
import SectionFourPersonalInformation from "./sections/SectionFourPersonalInformation";
import SectionFiveServices from "./sections/SectionFiveServices";
import SectionSixReviewAndSubmit from "./sections/SectionSixReviewAndSubmit";
import SectionSevenThankYouAndConfirmation from "./sections/SectionSevenThankYouAndConfirmation";

const Form = () => {
  const [currentSection, setCurrentSection] = useState(1);
  return (
    <>
    {currentSection === 1 && (
      <SectionOneIntro />
    )}
    {currentSection === 2 && (
      <SectionTwoContactInfo />
    )}
    {currentSection === 3 && (
      <SectionThreeProfessionalInformation />
    )}
    {currentSection === 4 && (
      <SectionFourPersonalInformation />
    )}
    {currentSection === 5 && (
      <SectionFiveServices />
    )}
    {currentSection === 6 && (
      <SectionSixReviewAndSubmit />
    )}
    {currentSection === 7 && (
      <SectionSevenThankYouAndConfirmation />
    )}
    
    </>
  );
};

export default Form;
