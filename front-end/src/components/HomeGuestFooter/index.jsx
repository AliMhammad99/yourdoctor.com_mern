import React from "react";
import "./styles.css";
import DoctorImage from "../../assets/logo_complete.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import YourDoctorLogo from "../YourDoctorLogo";

function HomeGuestFooter() {
  return (
    <footer id="HomeGuestFooter">
      {/* <img src={DoctorImage} alt="Doctor" /> */}
      <YourDoctorLogo />
      <h2>Connect with Us:</h2>
      <div id="HomeGuestFooterSocialMedia">
        <AiFillFacebook className="GuestFotterIcons" />
        <AiFillInstagram className="GuestFotterIcons" />
        <AiFillLinkedin className="GuestFotterIcons" />
      </div>
      <div id="HomeGuestFooterCopyright">
        <h4>Lebanese Owned & Operated</h4>
        <h4>© 2022 YourDoctor Online Pty Ltd</h4>
      </div>
    </footer>
  );
}

export default HomeGuestFooter;
