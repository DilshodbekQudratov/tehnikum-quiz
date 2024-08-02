import React from "react";
import { Header } from "../components/Header";
import { AppImput } from "../components/AppImput";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header/>
          <form className="welcome__form">
            <AppImput 
            imputText="Ваше имя" 
            errorText="Введите имя в правильном формате например"
            inputPlaceholder="Введите ваше имя"
            imputType="text"
            />  
               
            <AppImput 
            imputText="Ваш номер" 
            errorText="Введите номер в правильном формате например"
            inputPlaceholder="Введите ваш номер"
            imputType="tel"
            />  
            <AppButton
            isDisabled={true}/>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
