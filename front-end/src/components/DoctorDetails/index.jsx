import { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import LoadingSpinner from "../SearchForm/LoadingSpinner";
import "./DoctorDetails.scss";
import Button from "../Button";
import AvailableDate from "./AvailableDate";
import DoctorDataService from "../../services/doctor";
import moment from "moment";
/*
  1. Front-end: available dates and bio
  2. fetch from db
  3. booking system
  1.doctorId is available here
 */

function DoctorDetails({
  open,
  setOpen,
  selectedDoctorId,
  setSelectedDoctorId,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [doctorDetails, setDoctorDetails] = useState({});
  useEffect(() => {
    if (selectedDoctorId != "") {
      setIsLoading(true);
      DoctorDataService.getDoctorDetailsByBasicUserId(selectedDoctorId)
        .then((res) => {
          setDoctorDetails(res.data[0]);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }
  }, [selectedDoctorId]);

  return (
    <section className={`doctor-details ${open ? "open" : ""}`}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="top-div">
            <picture className="doctor-profile-picture">
              <img
                src={doctorDetails.basic_user_details.profile_picture}
                alt="Doctor's profile pictue"
              />
            </picture>
            <div className="doctor-info">
              <h2 className="doctor-name">
                Dr.{" "}
                {doctorDetails.basic_user_details.first_name +
                  " " +
                  doctorDetails.basic_user_details.last_name}
              </h2>
              <h2 className="doctor-specialty">
                <VerifiedIcon />
                <span>{doctorDetails.specialty.specialty_name}</span>
              </h2>
              <h2 className="doctor-location">
                <LocationIcon />
                <span>
                  {doctorDetails.clinic.name +
                    ", " +
                    doctorDetails.clinic.location.region_name}
                </span>
              </h2>
              <h2 className="doctor-rating">
                <Rating name="read-only" value={4.4} precision={0.1} readOnly />
                {/* Stars rating https://mui.com/material-ui/react-rating/ */}
                <span>4/5</span>
              </h2>
            </div>
          </div>
          <h4>Available Dates:</h4>
          <div className="available-dates">
            {doctorDetails.available_dates.map((availableDate, index) => {
              return (
                <AvailableDate
                  key={index}
                  date={moment(availableDate.from).format("LL")}
                  timeFrom={moment(availableDate.from).format("LT")}
                  timeTo={moment(availableDate.to).format("LT")}
                />
              );
            })}
          </div>
          <Button buttonName="Book Appointment" />
          <div className="doctor-bio">
            <h4>Experience</h4>
            <p>{doctorDetails.professional_biography}</p>
          </div>
        </>
      )}
      <button
        className="close-btn"
        onClick={() => {
          setOpen(false);
          setSelectedDoctorId("");
        }}
      >
        <CloseIcon />
      </button>
      {/* Doctor's Details {selectedDoctorId} */}
    </section>
  );
}
export default DoctorDetails;
