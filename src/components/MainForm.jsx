import React, { useState } from "react";
import arcadeSVG from "../assets/images/icon-arcade.svg";
import advancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";
import PersonalInfoForm from "./PersonalInfoForm";
import PlanForm from "./PlanForm";
import SideBar from "./SideBar";
import AddOnsForm from "./AddOnsForm";

function MainForm() {
  const [stepCounter, setStepCounter] = useState(3);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [nameValue, setNameValue] = useState("s");
  const [emailValue, setEmailValue] = useState("s");
  const [phoneValue, setPhoneValue] = useState("s");
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  const plansData = [
    {
      name: "Arcade",
      monthlyPrice: "9",
      yearlyPrice: "90",
      imgSource: arcadeSVG,
    },
    {
      name: "Advanced",
      monthlyPrice: "12",
      yearlyPrice: "120",
      imgSource: advancedSVG,
    },
    {
      name: "Pro",
      monthlyPrice: "15",
      yearlyPrice: "150",
      imgSource: proSVG,
    },
  ];
  const addOnsData = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

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
      <SideBar stepCounter={stepCounter} />
      <div className="formsContainer  d-flex flex-column justify-content-between">
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
          <PlanForm
            plansData={plansData}
            isYearlyPlan={isYearlyPlan}
            setIsYearlyPlan={setIsYearlyPlan}
          />
        ) : stepCounter === 3 ? (
          <AddOnsForm addOnsData={addOnsData} isYearlyPlan={isYearlyPlan} />
        ) : (
          "4"
        )}
        <div className="d-flex flex-row justify-content-between my-3">
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
