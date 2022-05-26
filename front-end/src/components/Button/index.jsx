import React, { memo } from "react";
import "./Button.scss";
function Button({ buttonName, disabled = false, onClick }) {
  return (
    <button
      className={`our-button ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
export default memo(Button);
