import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo_complete.svg";
import "./YourDoctorLogo.scss";
import { Link } from "react-router-dom";

const YourDoctorLogo = () => {
  return (
    <picture className="logo">
      <Link to="/home">
        <LogoSVG />
      </Link>
    </picture>
  );
};
export default YourDoctorLogo;
