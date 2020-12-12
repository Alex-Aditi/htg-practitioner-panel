import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function NextBackButtonGroup({ nextSection, prevSection }) {
  return (
    <>
      <PrevButton prevFunc={prevSection} />
      <NextButton nextFunc={nextSection} />
    </>
  );
}

export default NextBackButtonGroup;
