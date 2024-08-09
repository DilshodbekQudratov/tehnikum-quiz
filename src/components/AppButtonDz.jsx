import React from "react";

export const AppButtonDZ = ({buttonTextDZ="Далее", isDisabled}) => {
    return (
        <button disabled={isDisabled} id="next-btn">
              {buttonTextDZ}
            </button>

    );
};