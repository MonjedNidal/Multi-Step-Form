import React, { useState } from "react";
import "../css/CustomCheckbox.css"; // Import custom CSS for checkbox styling

const CustomCheckbox = ({ label, defaultChecked, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  const handleChange = (event) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
