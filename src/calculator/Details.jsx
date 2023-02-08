import React, { Fragment } from "react";
import "./details.css";
import { useState } from "react";
import { useEffect } from "react";
import Calculation from "./calculation";


  let details = (props) =>{
    let {age,noYears,investment,interest}=props.values
    let [ageChk,setAge] = useState(true);
    let [investmentChk,setInvestment]=useState(true);
    let [interestChk,setInterest]=useState(true);
    let [noYearsChk,setNoYears]=useState(true);
    let [isMaturityBreak,setMaturityBreak] = useState(false);

    useEffect(()=>{
      setAge(!(age<18 || age>60));
      setInterest(!(interest>15));
      setInvestment(!(investment<1000));
      setNoYears(noYears<42 || noYears<(60-parseInt(age))) ;
      setMaturityBreak(!(parseInt(noYears)===0))

    })
    
    return (
      <Fragment> 
        <form
          onSubmit={(event) => {
            props.onClick(event);
          }}
        >
          <label>
            Enter the investment amount
            <input
              type="number"
              name="investment"
              value={props.values.investment}
              placeholder="Investment should greater than 1000"
              min={1000}
              onChange={(event) => {
                props.onChange(event);
              }}
              required
            />{investmentChk?<span> </span>:<span className="error"> only above 1000</span>}
          </label>
          <br />
          <label>
            Your age
            <input
              type="number"
              name="age"
              value={props.values.age}
              placeholder="Age must be above 18"
              min={18}
              max={60}
              onChange={(event) => {
                props.onChange(event);
              }}
              required
            />{ageChk?<span> </span>:<span className="error"> b/w 18 and 60</span>}
          </label>
          <br />
          <label>
            No of Years of Investment
            <input
              type="number"
              name="noYears"
              value={props.values.noYears}
              min={0}
              max={40}
              onChange={(event) => {
                props.onChange(event);
              }}
            />{noYearsChk?<span></span>:<span className="error"> provide valid value</span>}
          </label>
          <br />
          <label>
            Rate of Interest
            <input
              type="number"
              name="interest"
              value={props.values.interest}
              min={5}
              max={15}
              onChange={(event) => {
                props.onChange(event);
              }}
              required
            />{interestChk?<span> </span>:<span className="error"> only below 15%</span>}
          </label>
          <br />
          <label>Enter the Lumpsum percentage 
            {isMaturityBreak?<input
                type="number"
                name="lumpsum"
                value={80}
                disabled
              />:<input
              type="number"
              name="lumpsum"
              value={props.values.lumpsum}
              min={20}
              max={100}
              onChange={(event) => {
                props.onChange(event);
              }}
            />
            }
          </label>
          <br />
          <label>
            Yearly increase in investment
            <input
              type="number"
              name="updatedInvestment"
              value={props.values.updatedInvestment}
              onChange={(event) => {
                props.onChange(event);
              }}
            />
          </label>
          <br />
          <label>
            Enter the rate of Annuity
            <input
              type="number"
              name="annuityRate"
              value={props.values.annuityRate}
              min={5}
              max={10}
              onChange={(event) => {
                props.onChange(event);
              }}
            />
          </label>
          <br />
          <button className="submit">Submit</button>
        </form>
        <Calculation
        value={props} 
        validations={[ageChk,investmentChk,interestChk,noYearsChk]}/>
      </Fragment>
      
    );
  }


export default details;
