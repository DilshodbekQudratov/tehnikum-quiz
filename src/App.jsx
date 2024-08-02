import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import RegistrationForm from "./pages/RegistrationForm";

const App = () => {
  return (
    <div className="App">
     <Welcome /> 
     <RegistrationForm/>
      
    </div>
  );
};

export default App;
