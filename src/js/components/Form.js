import React from "react";

import HeaderFooter from './HeaderFooter';
import MultiStepForm from "./formElements/MultiStepForm";

import { Grid } from "@material-ui/core";

const GridStyles = {
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
}

const Form = () => {
  return (
    <>
      <HeaderFooter>
        <Grid container style={GridStyles}>
          <Grid item xs={8}>
           <MultiStepForm />
          </Grid>
        </Grid>
      </HeaderFooter>
    </>
  );
};

export default Form;
