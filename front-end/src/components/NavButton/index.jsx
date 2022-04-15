import React from "react";
import "./NavButton.scss";
function NavButton(props) {
  return <button className="nav-btn">{props.buttonName}</button>;
}
export default NavButton;
