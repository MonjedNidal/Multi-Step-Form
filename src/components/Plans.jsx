import React from "react";
import Plan from "./Plan";
function Plans({ selectedPlan, handlePlanClick, isYearlyPlan, plansData }) {
  const plansArray = plansData.map((plan, index) => {
    return (
      <div key={index}>
        <Plan
          id={index}
          name={plan.name}
          monthlyPrice={plan.monthlyPrice}
          yearlyPrice={plan.yearlyPrice}
          imgSource={plan.imgSource}
          selectedPlan={selectedPlan}
          isYearlyPlan={isYearlyPlan}
          handlePlanClick={handlePlanClick}
        />
      </div>
    );
  });
  return (
    <div className="plans d-flex justify-content-between">{plansArray}</div>
  );
}

export default Plans;
