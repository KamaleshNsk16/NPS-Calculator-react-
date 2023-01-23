import React, { Component } from "react";
import Details from "./Details";
import Calculation from "./calculation";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      interest: this.props.interest,
      lumpsum: this.props.lumpsum,
      investment: this.props.investment,
      noYears: this.props.noYears,
      updatedInvestment: this.props.updatedInvestment,
      annuityRate: this.props.annuityRate,
      isSubmitted: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ isSubmitted: false });
  };

  render() {
    return (
      <div>
        <Details
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          values={this.state}
        />
        <Calculation
          isSubmitted={this.state.isSubmitted}
          values={this.state}
        ></Calculation>
      </div>
    );
  }
}

export default Parent;
