import React from "react";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function NextBackButtonGroup({ nextSection, prevSection }) {
  return (
    <>
      <NextButton nextFunc={nextSection} />
      <PrevButton prevFunc={prevSection} />
    </>
  );
}

export default NextBackButtonGroup;
