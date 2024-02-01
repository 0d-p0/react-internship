import React from "react";
import "./button.css";
function ButtonComponent({ title, type }) {
  return <button type={type}>{title}</button>;
}

export default ButtonComponent;
