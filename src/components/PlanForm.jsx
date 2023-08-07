import "../css/PlanForm.css";
import Plans from "./Plans";
import Switch from "./Switch";
import { plansData } from "../data/data";
function PlanForm({
  selectedPlan,
  setSelectedPlan,
  isYearlyPlan,
  setIsYearlyPlan,
}) {
  const handlePlanClick = (plan) => {
    if (selectedPlan.id !== null) {
      if (selectedPlan.id !== plan.id) {
        setSelectedPlan(plan);
        console.log(plan);
      }
      return;
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
        <Switch
          isYearlyPlan={isYearlyPlan}
          handlePlanIntervalChange={handlePlanIntervalChange}
        />
        <h6 className={`${isYearlyPlan ? "checkedTime" : ""}`}>Yearly</h6>
      </div>
    </form>
  );
}

export default PlanForm;
