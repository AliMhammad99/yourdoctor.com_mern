import { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import "./DoctorDetails.scss";
import Button from "../Button";

function DoctorDetails({
  open,
  setOpen,
  selectedDoctorId,
  setSelectedDoctorId,
}) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section className={`doctor-details ${open ? "open" : ""}`}>
      <div className="top-div">
        <picture className="doctor-profile-picture">
          <img
            src="data:image/jpeg;base64,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"
            alt="Doctor's profile pictue"
          />
        </picture>
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. fullName</h2>
          <h2 className="doctor-specialty">
            <VerifiedIcon />
            <span>specialty</span>
          </h2>
          <h2 className="doctor-location">
            <LocationIcon />
            <span>location</span>
          </h2>
          <h2 className="doctor-rating">
            <Rating name="read-only" value={4} precision={0.1} readOnly />
            {/* Stars rating https://mui.com/material-ui/react-rating/ */}
            <span>4/5</span>
          </h2>
        </div>
      </div>
      <div className="available-dates">
        <h2>Available Dates:</h2>
        <div className="available-date-time">
          <div className="available-date">Thu 25 May</div>
          <div className="available-time">12:00</div>
        </div>
        <Button buttonName="Book Appointment" />
      </div>
      <button
        className="close-btn"
        onClick={() => {
          setOpen(false);
          setSelectedDoctorId("");
        }}
      >
        <CloseIcon />
      </button>
      Doctor's Details {selectedDoctorId}
    </section>
  );
}
export default DoctorDetails;
