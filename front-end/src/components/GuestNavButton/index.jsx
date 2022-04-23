import React from "react";
import { memo } from "react";
import "./GuestNavButton.scss";

function NavBarButtonsClickListener(button_clicked) {
  if (button_clicked === "Search") {
  } else if (button_clicked === "Login") {
    document.querySelector(".sign-in-form").style.display = "flex";
    document.querySelector(".back-div-signin").style.display = "flex";
  } else {
    document.querySelector(".back-div").style.display = "flex";
    document.querySelector(".sign-up-form").style.display = "flex";
  }
}

function NavButton(props) {
  return (
    <button
      onClick={() => NavBarButtonsClickListener(props.buttonName)}
      className="nav-btn"
    >
      {props.buttonName}
    </button>
  );
}

export default NavButton;
