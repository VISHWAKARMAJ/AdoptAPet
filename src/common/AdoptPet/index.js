import React, { useContext } from "react";
import "./AdoptPet.css";
import Button from "../button";
import { userContext, userPrev } from "../../Home";

const AdoptPet = () => {
  const clickNext = useContext(userPrev);
  return (
    <div>
      <div className="header">
        <div className="heading"> Adopt a Pet</div>
      </div>
      <div className="bdr"></div>
      <div className="contain">
        <div className="heading-small"> Add pet for adoption</div>
        <div className="paragram">
          lorem ipsum dolor sit amet, consectatur adipiscing elit.
        </div>
        <div className="input-box">
          <div>span</div>
          <div> Own for lifetime</div>
        </div>
        <div className="input-box">
          <div>span</div>
          <div> Adopt for 1 year</div>
        </div>
        <div>Name</div>
        <div className=" input-box ">
          <input style={{ border: "none" }} />
        </div>
        <div> Given name</div>
        <div className=" input-box ">
          <input style={{ border: "none" }} />
        </div>
        <div> price</div>
        <div className="input-box">
          <div className="dolor">$</div>
          <input style={{ border: "none" }} />
        </div>

        <Button
          // onclick={}
          buttonText="Next"
          customClass="buttonAd input-box"
        />
        <Button
          // onclick={clickNext}
          buttonText="cancel"
          customClass="buttonCancel input-box"
        />
      </div>
    </div>
  );
};
export default AdoptPet;
