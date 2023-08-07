import { useContext } from "react";
import "../css/AddOns.css";
import AddOn from "./AddOn";
import { CheckedAddOnsContext } from "../App";
import { addOnsData } from "../data/data";
function AddOnsForm({ isYearlyPlan }) {
  const { checkedAddOns, setCheckedAddOns } = useContext(CheckedAddOnsContext);

  const handleCheckedAddOnsChanged = (addOn, addOnChecked) => {
    if (!addOnChecked) {
      setCheckedAddOns([...checkedAddOns, addOn]);
    } else {
      const updatedAddOns = checkedAddOns.filter(
        (selectedAddOn) => selectedAddOn.id !== addOn.id
      );
      setCheckedAddOns(updatedAddOns);
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
    <div>
      <div className="formHeader">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      {addOnsArray}
    </div>
  );
}

export default AddOnsForm;
