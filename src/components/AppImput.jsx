import React from "react";

export const AppImput = ({imputText, errorText, inputPlaceholder, imputType}) => {
    return(
        <label className="input-wrapper" htmlFor="username">
              {imputText}
              <input
                required
                type={imputType}
                name="username"
                id="username"
                placeholder={inputPlaceholder}
              />
              <span id="error-message">
                {errorText}
              </span>
            </label>
    );
};