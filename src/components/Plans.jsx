import React from "react";
import arcadeSVG from "../assets/images/icon-arcade.svg";
import advancedSVG from "../assets/images/icon-advanced.svg";
import proSVG from "../assets/images/icon-pro.svg";

function Plans({ selectedPlan, handlePlanClick, isYearlyPlan }) {
  return (
    <div className="plans d-flex justify-content-between">
      <div
        className={`plan ${selectedPlan === "arcade" ? "selectedPlan" : ""} ${
          isYearlyPlan ? "yearlyPlan" : ""
        }`}
        onClick={() => handlePlanClick("arcade")}
      >
        <img src={arcadeSVG} alt="" />
        <h6>Arcade</h6>
        <p>{isYearlyPlan ? "$90/yr" : "$9/mo"}</p>
        {isYearlyPlan ? (
          <p className="freeMonths position-absolute">2 months free</p>
        ) : (
          ""
        )}
      </div>
      <div
        className={`plan  ${
          selectedPlan === "Advanced" ? "selectedPlan" : ""
        } ${isYearlyPlan ? "yearlyPlan" : ""}`}
        onClick={() => handlePlanClick("Advanced")}
      >
        <img src={advancedSVG} alt="" />
        <h6>Advanced</h6>
        <p>{isYearlyPlan ? "$120/yr" : "$12/mo"}</p>
        {isYearlyPlan ? (
          <p className="freeMonths position-absolute">2 months free</p>
        ) : (
          ""
        )}
      </div>
      <div
        className={`plan ${selectedPlan === "Pro" ? "selectedPlan" : ""} ${
          isYearlyPlan ? "yearlyPlan" : ""
        }`}
        onClick={() => handlePlanClick("Pro")}
      >
        <img src={proSVG} alt="" />
        <h6>Pro</h6>
        <p>{isYearlyPlan ? "$150/yr" : "$15/mo"}</p>
        {isYearlyPlan ? (
          <p className="freeMonths position-absolute">2 months free</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Plans;
