import React, { Component } from "react";
import SquareCard from "../styleElements/SquareCard";
import ArrowBackward from "../styleElements/ArrowBackward";
import { Typography, Button } from "@material-ui/core";

export default class Section2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // for when we eventually handle state
    // const { handleChange } = this.props;
    return (
      <SquareCard title="Review & Submit">
        <Typography>Answers</Typography>
        <ArrowBackward onClick={this.back} />
        <Button color="primary" onClick={this.continue}>
          CONFIRM SUBMISSION
        </Button>
      </SquareCard>
    );
  }
}
