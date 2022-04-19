import React from "react";
import { memo } from "react";
import "./GuestNavButton.scss";
function GuestNavButton(props) {
  return <button className="nav-btn">{props.buttonName}</button>;
}
export default memo(GuestNavButton);
