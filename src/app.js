import React from "react";
import Calculation from "./calculator/Calculation";

const App = () => {
  return <Calculation investment={5000} age={25} interest={12} lumpsum={50} />;
};

export default App;