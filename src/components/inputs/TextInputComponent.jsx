import React from "react";
import "./input.css";
function TextInputComponent({ title, type, onChange, value, style }) {
  return (
    <div>
      <h3>{title}</h3>
      <textarea
        type={type}
        required
        onChange={onChange}
        value={value || ""}
        className="field"
        style={style}
        rows={6}
      />
    </div>
  );
}

export default TextInputComponent;
