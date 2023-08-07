import { useState, useContext, useEffect } from "react";
import { CheckedAddOnsContext } from "../App";
function AddOn({
  id,
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  isYearlyPlan,
  handleCheckedAddOnsChanged,
}) {
  const { checkedAddOns } = useContext(CheckedAddOnsContext);
  let checked = false;
  if (checkedAddOns.find((addOn) => addOn.id === id)) {
    checked = true;
  }

  const [addOnChecked, setAddOnChecked] = useState(checked);
  let price = isYearlyPlan ? yearlyPrice : monthlyPrice;

  useEffect(() => {
    price = isYearlyPlan ? yearlyPrice : monthlyPrice;
  }, [isYearlyPlan]);

  const handleAddOnChecked = () => {
    setAddOnChecked(!addOnChecked);
    handleCheckedAddOnsChanged({ id, name }, addOnChecked);
  };

  return (
    <div
      onClick={handleAddOnChecked}
      className={`addOn d-flex align-items-center justify-content-between ${
        addOnChecked ? "selected" : ""
      }`}
    >
      <div className="addOnCheckbox d-flex align-items-center">
        <div className="form-check">
          <input
            className="form-check-input mx-1"
            type="checkbox"
            checked={addOnChecked}
            onChange={() => {}}
          />
        </div>
        {/* <div></div> */}
        <div className="addOnText">
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </div>
      <span className="addOnPrice">
        +${price}/{isYearlyPlan ? "yr" : "mo"}
      </span>
    </div>
  );
}

export default AddOn;
