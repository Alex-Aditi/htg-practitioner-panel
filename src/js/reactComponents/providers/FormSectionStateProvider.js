import React, { createContext, useState } from "react";

const FormSectionStateContext = createContext();

function FormSectionStateProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(1);

  const nextSection = () => setCurrentSection(currentSection + 1);

  const prevSection = () => setCurrentSection(currentSection - 1);

  const formState = {
    currentSection: currentSection,
    nextSection: nextSection,
    prevSection: prevSection,
  };

  return (
    <FormSectionStateContext.Provider value={formState}>
      {children}
    </FormSectionStateContext.Provider>
  );
}

export default FormSectionStateProvider;
export { FormSectionStateContext };
