import "../css/PlanForm.css";
import { useState } from "react";
import Plans from "./Plans";
import Switch from "./Switch";
function PlanForm({ isYearlyPlan, setIsYearlyPlan, plansData }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (id) => {
    if (selectedPlan === id) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(id);
    }
  };

  const handlePlanIntervalChange = (isYearly) => {
    setIsYearlyPlan(isYearly);
  };

  return (
    <form className="planForm">
      <div className="formHeader">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <Plans
        plansData={plansData}
        isYearlyPlan={isYearlyPlan}
        selectedPlan={selectedPlan}
        handlePlanClick={handlePlanClick}
      />
      <div className="planTime d-flex justify-content-center py-3">
        <h6 className={`${!isYearlyPlan ? "checkedTime" : ""}`}>Monthly</h6>
        <Switch handlePlanIntervalChange={handlePlanIntervalChange} />
        <h6 className={`${isYearlyPlan ? "checkedTime" : ""}`}>Yearly</h6>
      </div>
    </form>
  );
}

export default PlanForm;
