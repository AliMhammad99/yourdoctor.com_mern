import React, { memo } from "react";
import "./Button.scss";
function Button({ buttonName }) {
  return <button className="our-button">{buttonName}</button>;
}
export default memo(Button);
