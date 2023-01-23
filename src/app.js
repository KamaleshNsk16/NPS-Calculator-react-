import React from "react";
import Parent from "./calculator/parent";

const App = () => {
  return <Parent investment={5000} age={25} interest={12} lumpsum={50} noYears={0} updatedInvestment={0} annuityRate={10} />
};

export default App;
