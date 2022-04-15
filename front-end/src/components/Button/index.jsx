import React, { memo } from "react";
import "./Button.scss";
function Button(props) {
  return <button className="our-button">{props.buttonName}</button>;
}
export default memo(Button);
