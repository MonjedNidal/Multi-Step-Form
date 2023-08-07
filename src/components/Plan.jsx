import { useEffect } from "react";

function Plan(props) {
  const {
    name,
    monthlyPrice,
    yearlyPrice,
    imgSource,
    selectedPlan,
    isYearlyPlan,
    handlePlanClick,
    id,
  } = props;
  let price = isYearlyPlan ? yearlyPrice : monthlyPrice;

  useEffect(() => {
    price = isYearlyPlan ? yearlyPrice : monthlyPrice;
  }, [isYearlyPlan]);

  return (
    <div
      className={`plan ${selectedPlan.id === id ? "selected" : ""} ${
        isYearlyPlan ? "yearlyPlan" : ""
      }`}
      onClick={() => handlePlanClick({ id, name })}
    >
      <img src={imgSource} alt="" />
      <div>
        <h6>{name}</h6>
        <p>{`$${price}/${isYearlyPlan ? "yr" : "mo"}`}</p>
        {isYearlyPlan ? (
          <p className="freeMonths position-absolute">2 months free</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Plan;
