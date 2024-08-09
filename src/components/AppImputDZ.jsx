import React from "react";

export const AppImputDZ = ({
  imputTextDz,
  errorTextDZ,
  inputPlaceholderDZ,
  imputTypeDZ,
  inputValue, // Переименовано для согласованности
  setInputValue, // Переименовано для согласованности
}) => {
  const inputChange = (value) => {
    setInputValue(value); // Обновляем значение в родительском компоненте
  };

  return (
    <label className="input-wrapper" htmlFor="username">
      {imputTextDz}
      <input
        required
        type={imputTypeDZ}
        name="username"
        id="username"
        placeholder={inputPlaceholderDZ}
        value={inputValue} // Изменено с inputValueDz на inputValue
        onChange={(event) => inputChange(event.target.value)} // Изменено с inputChangeDz на inputChange
      />
      <span id="error-message">{errorTextDZ}</span>
    </label>
  );
};
