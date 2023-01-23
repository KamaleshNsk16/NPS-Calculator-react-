import React, { Component } from "react";
import "./details.css";

class Details extends Component {

  render() {
    return (
      <div>
      <form onSubmit={(event)=>{this.props.onClick(event)}}>
        <label>
          Enter the investment amount :
          <input type="number" name="investment" min={1000} defaultValue={5000} onChange={(event)=>{this.props.onChange(event)}} required />
        </label>
        <br />
        <br />
        <label>
          Your age :
          <input type="number" name="age" min={18} max={60} defaultValue={25} onChange={(event)=>{this.props.onChange(event)}} required/>
        </label>
        <br />
        <br />
        <label>
          No of Years of Investment :
          <input type="number" name="noYears" max={40} onChange={(event)=>{this.props.onChange(event)}}/>
        </label>
        <br />
        <br />
        <label>
          Rate of Interest :
          <input type="number" name="interest" min={5} max={15} defaultValue={12} onChange={(event)=>{this.props.onChange(event)}}required />
        </label>
        <br /><br />
        <label>
          Lumpsum percentage :
          <input type="number" name="lumpsum" min={20} max={100} defaultValue={50} onChange={(event)=>{this.props.onChange(event)}} />
        </label>
        <br />
        <br />
        <label>
          Yearly increase in investment :
          <input type="number" name="updatedInvestment" min={1000} onChange={(event)=>{this.props.onChange(event)}}></input>
        </label>
        <br />
        <br />
        <button className="btn btn-primary btn-large">Submit</button>
      </form>
      </div>
    );
  }
}

export default Details;
