import React, { Component } from "react";
import Details from "./Details";

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
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  setValue = ()=>{
    this.setState({lumpsum:80})
  }

  render() {
    return (
        <Details
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          values={this.state}
          setValue={this.setValue}
        />
    );
  }
}

export default Parent;
