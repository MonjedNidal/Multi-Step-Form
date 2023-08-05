import "../css/AddOns.css";
import AddOn from "./AddOn";
import { useState } from "react";
function AddOnsForm({ isYearlyPlan, addOnsData }) {
  const [checkedAddOns, setCheckedAddOns] = useState([]);

  const handleCheckedAddOnsChanged = (id, addOnChecked) => {
    if (addOnChecked) {
      setCheckedAddOns([...checkedAddOns, id]);
    } else {
      let newArr = checkedAddOns;
      setCheckedAddOns(newArr.filter((addOn) => addOn !== id));
    }
  };
  const addOnsArray = addOnsData.map((addOn, index) => (
    <div key={addOn.name}>
      <AddOn
        id={index}
        name={addOn.name}
        description={addOn.description}
        monthlyPrice={addOn.monthlyPrice}
        yearlyPrice={addOn.yearlyPrice}
        isYearlyPlan={isYearlyPlan}
        handleCheckedAddOnsChanged={handleCheckedAddOnsChanged}
      />
    </div>
  ));

  return (
    <div className="">
      <div className="formHeader">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {addOnsArray}
    </div>
  );
}

export default AddOnsForm;
