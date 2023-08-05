import { useState } from "react";

function AddOn({
  id,
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  isYearlyPlan,
  handleCheckedAddOnsChanged,
}) {
  const [addOnChecked, setAddOnChecked] = useState(false);
  const handleAddOnChecked = () => {
    setAddOnChecked(!addOnChecked);
    handleCheckedAddOnsChanged(id, addOnChecked);
  };
  return (
    <div
      onClick={handleAddOnChecked}
      className={`addOn d-flex align-items-center justify-content-between ${
        addOnChecked ? "selected" : ""
      }`}
    >
      <div className="d-flex align-items-center">
        <div className="form-check">
          <input
            className="form-check-input mx-1"
            type="checkbox"
            checked={addOnChecked}
            onChange={() => {}}
          />
        </div>
        <div className="addOnText">
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </div>
      <span className="addOnPrice">
        +${isYearlyPlan ? yearlyPrice : monthlyPrice}/
        {isYearlyPlan ? "yr" : "mo"}
      </span>
    </div>
  );
}

export default AddOn;
