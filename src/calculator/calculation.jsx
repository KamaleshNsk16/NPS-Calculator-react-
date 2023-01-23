import React, { Component } from "react";

class Calculation extends Component {

  getResult() {
    let { age, investment, noYears, interest, lumpsum, annuityRate, updatedInvestment} = this.props.values;
    age = parseInt(age);
    investment = parseInt(investment);
    noYears = parseInt(noYears);
    interest = parseInt(interest);
    lumpsum = parseInt(lumpsum);
    annuityRate = parseInt(annuityRate);
    updatedInvestment = parseInt(updatedInvestment)
    let principle = investment;
    let years = 0;
    let amountEarned;
    let interestEarned;
    let lumpsumAmount;
    let annuity;
    let annuityAmount;
    let numberOfYears;
    numberOfYears = noYears === 0 ? 60 - age : noYears;

    let totalMonths = 12;
    while (years < numberOfYears) {
      for (let month = 1; month <= totalMonths; month++) {
        interestEarned = (principle * interest) / (100 * 12);
        amountEarned = interestEarned + principle;
        principle =
          years === 1 && month === 1 ? amountEarned : amountEarned + investment;
      }
      investment += updatedInvestment;
      years++;
    }
    lumpsumAmount = noYears
      ? (principle * 80) / 100
      : (principle * lumpsum) / 100;
    annuityAmount = principle-lumpsumAmount
    annuity = (annuityAmount/12)*(annuityRate/100)
    console.log(annuityRate)

    const element = <form>
        <label>
      Total Amount Available :
      <input type="textbox" value={parseInt(principle)} disabled />
    </label><br />
    <label>
      Lumpsum Amount :
      <input type="textbox" value={parseInt(lumpsumAmount)} disabled />
    </label><br />
    <label >
      Annuity Value :
        <input type="textbox" value={parseInt(annuity)} disabled/>
    </label>
    
  </form>

  return element
    
  }

  render() {
    if (this.props.isSubmitted) {
      return this.getResult();
    }
    return <p>Enter valid value</p>;
  }
}
export default Calculation;
