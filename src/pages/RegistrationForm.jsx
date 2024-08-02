import React from "react";
import { HeaderDZ } from "../components/HeaderDZ";
import { AppImputDZ} from "../components/AppImputDZ"
import { AppButtonDZ } from "../components/AppButtonDz";

const RegistrationForm = () => {
    return(
        <div className="container">
        <div className="wrapper">
        <div className="welcome">
          <HeaderDZ/>
          <form className="welcome__form">
            <AppImputDZ 
            imputTextDz="Ваше имя" 
            errorTextDZ="Введите имя в правильном формате например"
            inputPlaceholderDZ="Введите ваше имя"
            imputTypeDZ="text"
            />  

           <AppImputDZ 
            imputTextDz="Ваше имя" 
            errorTextDZ="Введите имя в правильном формате например"
            inputPlaceholderDZ="Введите ваше имя"
            imputTypeDZ="text"
            />  

               
            <AppImputDZ 
            imputTextDz="Ваш номер" 
            errorTextDZ="Введите номер в правильном формате например"
            inputPlaceholderDZ="Введите ваш номер"
            imputTypeDZ="tel"
            />  

            <AppImputDZ 
            imputTextDz="Почта" 
            errorTextDZ="Введите имя в правильном формате например"
            inputPlaceholderDZ="Введите почту"
            imputTypeDZ="text"
            /> 

             <AppImputDZ 
            imputTextDz="Пароль" 
            errorTextDZ="Введите имя в правильном формате например"
            inputPlaceholderDZ="Введите пароль"
            imputTypeDZ="password"
            /> 
             <AppButtonDZ
            isDisabled={true}/>
           
            
          </form>
        </div>
      </div>
    </div>

    );
};
export default RegistrationForm;