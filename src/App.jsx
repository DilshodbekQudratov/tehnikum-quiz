import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import RegistrationForm from "./pages/RegistrationForm";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Test } from "./pages/Test";

const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<RegistrationForm/>
    
  },
  { 
    path:"/step-One",
    element:<StepOne/>,
  },
  { 
    path:"/step-Two",
    element:<StepTwo/>,
  },
  { 
    path:"/step-Three",
    element:<StepThree/>,
  },
  { 
    path:"/step-Four",
    element:<StepFour/>,
  },
  { 
    path:"/thanks",
    element:<Thanks/>,
  },
 
]); 
  return <RouterProvider router={router}/>
};    

export default App;
