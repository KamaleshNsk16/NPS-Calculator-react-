import React, { Component } from "react";
import Details from "./Details";

class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      interest: this.props.interest,
      lumpsum: this.props.lumpsum,
      investment: this.props.investment,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return <Details onClick={this.handleSubmit} onChange={this.handleChange} />;
  }
}

export default Calculation;
