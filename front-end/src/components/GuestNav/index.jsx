import React from "react";
import YourDoctorLogo from "../YourDoctorLogo";
import NavButton from "../NavButton";
import "./GuestNav.scss";
//The nav to be displayed for guests
function GuestNav() {
  //Buttons can be changed here (edit, add, or remove)
  const navButtonsNames = ["Search", "Login", "Signup"];

  return (
    <header className="header">
      <YourDoctorLogo />
      <nav className="nav-bar">
        <ul>
          {navButtonsNames.map((name, index) => {
            return (
              <li key={index}>
                <NavButton buttonName={name} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
export default GuestNav;
