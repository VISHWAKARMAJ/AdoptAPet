import React, { useState, useContext } from "react";
import AdoptPet from "../common/AdoptPet";
import Button from "../common/button";
import Dashboard from "../Dashboard";
import Nav from "../Nav";

export const userContext = React.createContext();
export const userPrev = React.createContext();
const Home = () => {
  const [step, setStep] = useState(1);

  const data = () => {
    switch (step) {
      case 1:
        return <Dashboard />;
      case 2:
        return <AdoptPet />;
      default:
        return;
    }
  };
  const next = () => {
    if (step > 1) {
      return;
    }
    setStep(step + 1);
  };
  const Prev = () => {
    if (step > 1) setStep(step - 1);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "700px",
          maxHeight: "500px",
          marginLeft: "200px"
        }}
      >
        <Nav />
        <userContext.Provider value={next}>
          <userPrev value={Prev}>
            {/* <Header /> */}
            {data()}
          </userPrev>
        </userContext.Provider>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      ></div>
      <div style={{ marginTop: "150px" }}>
        <button onClick={Prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};
export default Home;
