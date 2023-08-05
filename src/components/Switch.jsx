import React, { useState } from "react";
import "../css/Switch.css"; // Import custom CSS for switch styling

const Switch = ({ handlePlanIntervalChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (e) => {
    setIsChecked(e.target.checked);
    handlePlanIntervalChange(e.target.checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
