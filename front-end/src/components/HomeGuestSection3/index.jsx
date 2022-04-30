import React from "react";
import "./styles.css";
//import PhoneImage from "../../assets/homeGuestSection3.svg";
import PhoneImage from "../../assets/homeGuestPhone.svg";
import Button from "../Button";

function HomeGuestSection3() {
  return (
    <div className="HomeGuestSection3_fullDiv">
      <div id="HomeGuestSection3_text">
        <h2>Book your favourite doctor faster using the YourDoctor app</h2>
        <h4>Available on iOS and Android</h4>
        <Button id="t" buttonName="Download the app" />
      </div>
      <img src={PhoneImage} alt="Doctor" />
    </div>
  );
}

export default HomeGuestSection3;
