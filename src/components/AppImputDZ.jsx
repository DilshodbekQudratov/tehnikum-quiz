import React from "react";

export const AppImputDZ = ({imputTextDz, errorTextDZ, inputPlaceholderDZ, imputTypeDZ}) => {
    return(
        <label className="input-wrapper" htmlFor="username">
              {imputTextDz}
              <input
                required
                type={imputTypeDZ}
                name="username"
                id="username"
                placeholder={inputPlaceholderDZ}
              />
              <span id="error-message">
                {errorTextDZ}
              </span>
            </label>
    );
};