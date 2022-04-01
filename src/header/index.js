import React from "react";
import Button from "../common/button";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="heading"> Adopt a Pet</div>
        <Button buttonText={"Add a Pet"} customClass={"buttonflex"} />
      </div>
      <div className="bdr"></div>
    </div>
  );
};
export default Header;
