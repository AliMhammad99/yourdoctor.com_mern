import React from "react";
import "./styles.css";
import DoctorImage from "../../assets/homeGuestSection2.png";

function HomeGuestSection2() {
  return (
    <div className="HomeGuestSection2_fullDiv">
      <img src={DoctorImage} alt="Doctor" />
      <div id="HomeGuestSection2_text">
        <h2>Respiratory Clinics - COVID-19 Testing</h2>
        <h4>
          The Lebanese Government is rapidly establishing GP respiratory clinics
          around the country to clinically assess people with mild to moderate
          COVID-19 symptoms (a fever, cough, shortness of breath, a sore throat
          and/or tiredness).
        </h4>
      </div>
    </div>
  );
}

export default HomeGuestSection2;
