//this might end up being multiple files etc
import React from "react";

import HeaderFooter from './HeaderFooter';
import SquareCard from "./styleElements/SquareCard";

import { Button } from "@material-ui/core";


const Form = () => {
  return (
    <>
      <HeaderFooter>
        <SquareCard>
          <Button color="primary">Begin</Button>
        </SquareCard>
      </HeaderFooter>
    </>
  );
};

export default Form;
