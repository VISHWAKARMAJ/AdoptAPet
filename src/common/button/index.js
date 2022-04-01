import React, { useContext } from "react";
import { userContext } from "../../Home";
import "./button.css";

const Button = ({ onchange, buttonText, customClass }) => {
  const next = useContext(userContext);
  return (
    <div>
      <button className={`button ${customClass}`} onClick={next}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
