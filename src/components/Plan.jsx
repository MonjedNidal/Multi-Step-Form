import React from "react";

function Plan({
  name,
  monthlyPrice,
  yearlyPrice,
  imgSource,
  selectedPlan,
  isYearlyPlan,
  handlePlanClick,
  id,
}) {
  return (
    <div
      className={`plan ${selectedPlan === id ? "selected" : ""} ${
        isYearlyPlan ? "yearlyPlan" : ""
      }`}
      onClick={() => handlePlanClick(id)}
    >
      <img src={imgSource} alt="" />
      <h6>{name}</h6>
      <p>{isYearlyPlan ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`}</p>
      {isYearlyPlan ? (
        <p className="freeMonths position-absolute">2 months free</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Plan;
