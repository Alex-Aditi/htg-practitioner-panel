import React, { Component } from "react";
import SquareCard from "../styleElements/SquareCard";
import ArrowForward from "../styleElements/ArrowForward";
import ArrowBackward from "../styleElements/ArrowBackward";
import { Typography } from "@material-ui/core";

export default class Section2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // for when we eventually handle state
    // const { handleChange } = this.props;
    return (
      <SquareCard title="Contact Information">
        <Typography>Questions</Typography>
        <ArrowBackward onClick={this.back}/>
        <ArrowForward onClick={this.continue}/>
      </SquareCard>
    );
  }
}
