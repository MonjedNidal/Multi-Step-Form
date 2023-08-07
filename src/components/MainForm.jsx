import { useState, useEffect } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import PlanForm from "./PlanForm";
import SideBar from "./SideBar";
import AddOnsForm from "./AddOnsForm";
import SummaryPage from "./SummaryPage";
import LastPage from "./LastPage";
import ButtonsSet from "./ButtonsSet";

function MainForm({ stepCounter, setStepCounter }) {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({ id: 1, name: "Advanced" });

  const handleNextPageClicked = () => {
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
      if (stepCounter === 2 && !selectedPlan) {
        alert("Please Select a plan");
      } else {
        setStepCounter(stepCounter + 1);
      }
    }
  };

  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  // Function to update the page width on window resize
  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="mainform d-flex">
        <SideBar stepCounter={stepCounter} />
        <div className="formsContainer  d-flex flex-column justify-content-between">
          {stepCounter === 1 ? (
            <PersonalInfoForm
              setNameValue={setNameValue}
              setPhoneValue={setPhoneValue}
              setEmailValue={setEmailValue}
              nameError={nameError}
              emailValue={emailValue}
              nameValue={nameValue}
              phoneValue={phoneValue}
              emailError={emailError}
              phoneError={phoneError}
              setNameError={setNameError}
              setEmailError={setEmailError}
              setPhoneError={setPhoneError}
            />
          ) : stepCounter === 2 ? (
            <PlanForm
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              isYearlyPlan={isYearlyPlan}
              setIsYearlyPlan={setIsYearlyPlan}
            />
          ) : stepCounter === 3 ? (
            <AddOnsForm isYearlyPlan={isYearlyPlan} />
          ) : stepCounter === 4 ? (
            <SummaryPage
              isYearlyPlan={isYearlyPlan}
              selectedPlan={selectedPlan}
              setStepCounter={setStepCounter}
            />
          ) : (
            <LastPage />
          )}
          {pageWidth > 700 ? (
            <ButtonsSet
              stepCounter={stepCounter}
              setStepCounter={setStepCounter}
              className={"buttons"}
              handleNextPageClicked={handleNextPageClicked}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {pageWidth < 700 && stepCounter <= 4 ? (
        <ButtonsSet
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
          className={"smallButtonsSet"}
          handleNextPageClicked={handleNextPageClicked}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MainForm;
