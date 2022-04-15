import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo_complete.svg";
import "./YourDoctorLogo.scss";

const YourDoctorLogo = () => {
  return (
    <picture className="logo">
      <LogoSVG />
    </picture>
  );
};
export default YourDoctorLogo;
