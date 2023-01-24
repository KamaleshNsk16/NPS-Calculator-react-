import React, { Component, Fragment } from "react";
import "./details.css";

class Details extends Component {

  render() {
    return (
      <Fragment>
      <form onSubmit={(event)=>{this.props.onClick(event)}}>
        <label>
          Enter the investment amount
          <input type="number" name="investment" value={this.props.values.investment} placeholder="Investment should greater than 1000" min={1000} onChange={(event)=>{this.props.onChange(event)}} required />
        </label>
        <br />
        <label>
          Your age
          <input type="number" name="age" value={this.props.values.age} placeholder="Age must be above 18" min={18} max={60} onChange={(event)=>{this.props.onChange(event)}} required/>
        </label>
        <br />
        <label>
          No of Years of Investment
          <input type="number" name="noYears" max={40} onChange={(event)=>{this.props.onChange(event)}}/>
        </label>
        <br />
        <label>
          Rate of Interest
          <input type="number" name="interest" value={this.props.values.interest} min={5} max={15} onChange={(event)=>{this.props.onChange(event)}}required />
        </label>
        <br />
        <label>
          Lumpsum percentage 
          <input type="number" name="lumpsum" value={this.props.values.lumpsum} min={20} max={100} onChange={(event)=>{this.props.onChange(event)}} />
        </label>
        <br />
        <label>
          Yearly increase in investment
          <input type="number" name="updatedInvestment" onChange={(event)=>{this.props.onChange(event)}} />
        </label>
        <br />
        <label>Enter the rate of Annuity
          <input type="number" name="annuityRate" value={this.props.values.annuityRate} min={5} max={10} onChange={(event)=>{this.props.onChange(event)}} />
        </label>
        <br />
        <button className="submit">Submit</button>
      </form>
      </Fragment>
    );
  }
}

export default Details;
