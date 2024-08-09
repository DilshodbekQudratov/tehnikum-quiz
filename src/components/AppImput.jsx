import React, { useState } from "react";

export const AppImput = ({
  imputText,
  errorText,
  inputPlaceholder,
  imputType,
  inputValue,
  setInputValue // Добавляем проп для установки значения
}) => {
    // Определяем функцию inputChange
    const inputChange = (value) => {
        setInputValue(value); // Обновляем значение в родительском компоненте
    };

    return (
        <label className="input-wrapper" htmlFor="username">
            {imputText}
            <input
                required
                type={imputType}
                name="username"
                id="username"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(event) => inputChange(event.target.value)}
            />
            <span id="error-message">
                {errorText}
            </span>
        </label>
    );
};
