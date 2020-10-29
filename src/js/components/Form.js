//this might end up being multiple files etc
import React from "react";

import HeaderFooter from './HeaderFooter';

import { Button } from "@material-ui/core";

const Form = () => {
  return (
    <>
      <HeaderFooter>
        <Button color="primary">Begin</Button>
      </HeaderFooter>
    </>
  );
};

export default Form;
