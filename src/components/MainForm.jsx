import React, { useState } from "react";
import sidebarImg from "../assets/images/bg-sidebar-desktop.svg";
import PersonalInfoForm from "./PersonalInfoForm";
function MainForm() {
  const [stepCounter, setStepCounter] = useState(1);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleSubmitPersonalInfo = () => {
    if (!nameValue || !emailValue || !phoneValue) {
      if (!nameValue) {
        setNameError(true);
      }
      if (!emailValue) {
        setEmailError(true);
      }
      if (!phoneValue) {
        setPhoneError(true);
      }
    } else {
      setStepCounter(stepCounter + 1);
    }
  };

  return (
    <div className="mainform d-flex">
      <div className="sidebar position-relative">
        <img src={sidebarImg} alt="sidebar" />
        <div className="stepsColumn position-absolute top-0 start-0 mx-4 my-4">
          <div className="d-flex flex-row align-items-center my-3">
            <h4
              className={`stepNumber col-3 ${
                stepCounter === 1 ? "activeStep" : ""
              }`}
            >
              1
            </h4>
            <div className="stepText col">
              <p>Step 1 </p>
              <h5>Your info</h5>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center my-3">
            <h4
              className={`stepNumber col-3 ${
                stepCounter === 2 ? "activeStep" : ""
              }`}
            >
              2
            </h4>
            <div className="stepText col">
              <p>Step 2 </p>
              <h5>Select plan </h5>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center my-3">
            <h4
              className={`stepNumber col-3 ${
                stepCounter === 3 ? "activeStep" : ""
              }`}
            >
              3
            </h4>
            <div className="stepText col">
              <p>Step 3 </p>
              <h5>Add-ons </h5>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center my-3">
            <h4
              className={`stepNumber col-3 ${
                stepCounter === 4 ? "activeStep" : ""
              }`}
            >
              4
            </h4>
            <div className="stepText col">
              <p>Step 4 </p>
              <h5>Summary</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="formsContainer  d-flex flex-column">
        {stepCounter === 1 ? (
          <PersonalInfoForm
            setNameValue={setNameValue}
            setPhoneValue={setPhoneValue}
            setEmailValue={setEmailValue}
            nameError={nameError}
            emailError={emailError}
            phoneError={phoneError}
            setNameError={setNameError}
            setEmailError={setEmailError}
            setPhoneError={setPhoneError}
          />
        ) : stepCounter === 2 ? (
          <form></form>
        ) : stepCounter === 3 ? (
          "3"
        ) : (
          "4"
        )}
        <div className="d-flex flex-row justify-content-between">
          <a
            onClick={() => {
              setStepCounter(stepCounter - 1);
            }}
            className="backBtn"
            href="#s"
          >
            {stepCounter > 1 ? "Go Back" : ""}
          </a>
          <a onClick={handleSubmitPersonalInfo} className=" nextBtn" href="#-">
            Next Step
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
