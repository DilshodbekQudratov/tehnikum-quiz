import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppImput } from "../components/AppImput";
import { AppButton } from "../components/AppButton";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const regex = /^[A-Za-zА-Яа-яЁё]+$/
  const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/

  const [buttonError, setButtonError]=useState(true)
  useEffect(()=>{
    if (regex.test(name) && regexNum.test(phone)){
      setButtonError(false)
    }

  }, [name, phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header
          headerType="h1" HeaderText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppImput 
            imputText="Ваше имя" 
            errorText="Введите имя в правильном формате например"
            inputPlaceholder="Введите ваше имя"
            imputType="text"
            inputValue={name}
            setInputValue={setName}
            />  
               
            <AppImput 
            imputText="Ваш номер" 
            errorText="Введите номер в правильном формате например"
            inputPlaceholder="Введите ваш номер"
            imputType="tel"
            inputValue={phone}
            setInputValue={setPhone}
            />  
            <Link to="/step-One">
            <AppButton isDisabled={buttonError}/>
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
