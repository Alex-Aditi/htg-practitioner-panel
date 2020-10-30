import React, { Component } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

export default class MultiStepForm extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <>
            <Section1 nextStep={this.nextStep} />
          </>
        );
      case 2:
        return (
          <>
            <Section2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <Section3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      case 4:
        return (
          <>
            <Section4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      case 5:
        return (
          <>
            <Section5
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      case 6:
        return (
          <>
            <Section6
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      case 7:
        return (
          <>
            <Section7
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </>
        );
      default:
        return <></>;
    }
  }
}
