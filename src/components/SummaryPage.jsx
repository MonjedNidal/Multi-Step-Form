import { useContext } from "react";
import { CheckedAddOnsContext } from "../App";
import { plansData, addOnsData } from "../data/data";
import "../css/SummaryPage.css";
function SummaryPage({ setStepCounter, isYearlyPlan, selectedPlan }) {
  const { checkedAddOns } = useContext(CheckedAddOnsContext);

  const sortedcheckedAddOns = checkedAddOns.sort((a, b) => a.id - b.id);

  let planTemp = plansData.filter((val) => {
    return val.id === selectedPlan.id;
  });
  const planPrice = isYearlyPlan
    ? planTemp[0].yearlyPrice
    : planTemp[0].monthlyPrice;
  let totalPrice = parseInt(planPrice, 10);

  const addOnsArray = sortedcheckedAddOns.map((addOn) => {
    const temp = addOnsData.filter((val) => {
      return val.id === addOn.id;
    });
    const tempPrice = isYearlyPlan ? temp[0].yearlyPrice : temp[0].monthlyPrice;
    totalPrice += parseInt(tempPrice, 10);
    return (
      <div
        key={addOn.name}
        className="addOnSummary d-flex justify-content-between align-items-center"
      >
        <p>{addOn.name}</p>
        <span>{`+$${tempPrice}/${isYearlyPlan ? "yr" : "mo"}`}</span>
      </div>
    );
  });

  return (
    <div className="d-flex flex-column">
      <div className="formHeader">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary">
        <div className="planSummery d-flex justify-content-between align-items-center">
          <div>
            <h6>
              {selectedPlan && selectedPlan.name}(
              {`${isYearlyPlan ? "Yearly" : "Monthly"}`})
            </h6>
            {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                href="#"
                onClick={() => {
                  setStepCounter(2);
                }}
              >
                Change
              </a>
            }
          </div>
          <span className="planPrice">{`$${planPrice}/${
            isYearlyPlan ? "yr" : "mo"
          }`}</span>
        </div>
        <hr />
        {addOnsArray}
      </div>
      <div className="total d-flex justify-content-between">
        <h6>Total (per {`${isYearlyPlan ? "year" : "month"}`})</h6>
        <span className="totalPrice">
          +${totalPrice}/{isYearlyPlan ? "yr" : "mo"}
        </span>
      </div>
    </div>
  );
}

export default SummaryPage;
