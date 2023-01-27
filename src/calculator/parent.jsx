import React, { Component } from "react";
import Details from "./Details";
import Calculation from "./calculation";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 25,
      interest: 12,
      lumpsum: 50,
      investment: 5000,
      noYears: 0,
      updatedInvestment: 0,
      annuityRate: 10,
      isSubmitted: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, isSubmitted:false });
  };

  setValue = ()=>{
    this.setState({lumpsum:80})
  }

  render() {
    return (
      <div>
        <Details
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          values={this.state}
          setValue={this.setValue}
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
