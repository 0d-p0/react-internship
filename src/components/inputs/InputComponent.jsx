import React from "react";
import "./input.css";
function InputComponent({ title, type, onChange, value }) {
  return (
    <div>
      <h3>{title}</h3>
      <input
        required
        type={type}
        onChange={onChange}
        value={value || ""}
        className="feild"
      />
    </div>
  );
}

export default InputComponent;
