import React, { Component } from 'react'

export default class MultiStepForm extends Component {
    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
