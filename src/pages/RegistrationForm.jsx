import React, { useEffect, useState } from "react";
import { HeaderDZ } from "../components/HeaderDZ";
import { AppImputDZ } from "../components/AppImputDZ";
import { AppButtonDZ } from "../components/AppButtonDz";

const RegistrationForm = () => {
  const [nameDz, setNameDz] = useState("");
  const [surnameDz, setSurnameDz] = useState("");
  const [phoneDz, setPhoneDz] = useState("");
  const [postDz, setPostDz] = useState("");
  const [parolDz, setParolDz] = useState("");

  const regex = /^[A-Za-zА-Яа-яЁё]+$/;
  const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const [buttonErrorDz, setButtonErrorDz] = useState(true);

  useEffect(() => {
    if (
      regex.test(nameDz) &&
      regexNum.test(phoneDz) &&
      regex.test(surnameDz) &&
      regexEmail.test(postDz) &&
      regexPassword.test(parolDz)
    ) {
      setButtonErrorDz(false);
    } else {
      setButtonErrorDz(true);
    }
  }, [nameDz, phoneDz, surnameDz, postDz, parolDz]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <HeaderDZ />
          <form className="welcome__form">
            <AppImputDZ
              imputTextDz="Ваше имя"
              errorTextDZ="Введите имя в правильном формате"
              inputPlaceholderDZ="Введите ваше имя"
              imputTypeDZ="text"
              inputValue={nameDz}
              setInputValue={setNameDz}
            />
            <AppImputDZ
              imputTextDz="Ваша фамилия"
              errorTextDZ="Введите фамилию в правильном формате"
              inputPlaceholderDZ="Введите вашу фамилию"
              imputTypeDZ="text"
              inputValue={surnameDz}
              setInputValue={setSurnameDz}
            />
            <AppImputDZ
              imputTextDz="Ваш номер"
              errorTextDZ="Введите номер в правильном формате"
              inputPlaceholderDZ="Введите ваш номер"
              imputTypeDZ="tel"
              inputValue={phoneDz}
              setInputValue={setPhoneDz}
            />
            <AppImputDZ
              imputTextDz="Почта"
              errorTextDZ="Введите почту в правильном формате"
              inputPlaceholderDZ="Введите почту"
              imputTypeDZ="text"
              inputValue={postDz}
              setInputValue={setPostDz}
            />
            <AppImputDZ
              imputTextDz="Пароль"
              errorTextDZ="Пароль должен содержать минимум 8 символов, одну букву и одну цифру."
              inputPlaceholderDZ="Введите пароль"
              imputTypeDZ="password"
              inputValue={parolDz}
              setInputValue={setParolDz}
            />
            <AppButtonDZ isDisabled={buttonErrorDz} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
