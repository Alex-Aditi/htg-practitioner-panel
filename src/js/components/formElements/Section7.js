import React, { Component } from "react";
import SquareCard from "../styleElements/SquareCard";
import ArrowForward from "../styleElements/ArrowForward";
import ArrowBackward from "../styleElements/ArrowBackward";
import { Typography } from "@material-ui/core";

export default class Section2 extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // for when we eventually handle state
    // const { handleChange } = this.props;
    return (
      <SquareCard title="Thank You & Confirmation">
        <Typography>
          Non flexitarian offal banh mi. Craft beer literally nulla iPhone enim
          YOLO keffiyeh heirloom bicycle rights af in culpa occupy. Chartreuse
          laboris dreamcatcher gentrify fam quis freegan godard meditation
          consequat fingerstache. Banh mi dreamcatcher sriracha exercitation
          tacos photo booth ipsum lyft kombucha etsy consectetur gochujang
          cardigan. Actually tumblr cold-pressed swag, put a bird on it DIY
          ullamco enamel pin letterpress.
        </Typography>
      </SquareCard>
    );
  }
}
