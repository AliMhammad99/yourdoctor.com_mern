import { useEffect, useState, useContext } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";
import LoadingSpinner from "../SearchForm/LoadingSpinner";
import "./DoctorDetails.scss";
import Button from "../Button";
import AvailableDate from "./AvailableDate";
import DoctorDataService from "../../services/doctor";
import AppointmentDataService from "../../services/appointment";
import AvailableDateDataService from "../../services/availableDate";
import moment from "moment";
import GlobalStates from "../../utils/GlobalStates";
/*
  1. Front-end: available dates and bio Done
  2. fetch from db Done
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
  const [selectedDateId, setSelectedDateId] = useState("");
  // const [selectedDateIndex, setSelectedDateIndex] = useState();
  const globalStates = useContext(GlobalStates);
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

  const bookSelectedAppointment = () => {
    // console.log(selectedDateId);
    AppointmentDataService.bookAppointmentByAvailableDateId({
      available_date_id: selectedDateId,
    })
      .then((res0) => {
        AvailableDateDataService.bookAvailableDate(selectedDateId)
          .then((res1) => {
            console.log(res1.data);
            setSelectedDateId("");
            console.log(res0);
            // deleteOneAvailableDate(res0.data.available_date_id);
            globalStates.showSnackBar(
              "Appointment Booked Successfully!",
              "success"
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const deleteOneAvailableDate = (available_date_id) => {
  //   console.log(doctorDetails.available_dates);
  //   // const newDoctorDetails = doctorDetails.available_dates.filter(
  //   //   (element) => element._id === available_date_id
  //   // );
  //   // setDoctorDetails(newDoctorDetails);
  // };
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
            {doctorDetails.available_dates.length === 0 ? (
              <p>No Available dates</p>
            ) : (
              doctorDetails.available_dates.map((availableDate, index) => {
                return (
                  <AvailableDate
                    key={index}
                    date={moment(availableDate.from).format("LL")}
                    timeFrom={moment(availableDate.from).format("LT")}
                    timeTo={moment(availableDate.to).format("LT")}
                    selected={selectedDateId === availableDate._id}
                    onClick={() => {
                      setSelectedDateId(availableDate._id);
                    }}
                  />
                );
              })
            )}
          </div>
          <Button
            buttonName="Book Appointment"
            disabled={selectedDateId === ""}
            onClick={bookSelectedAppointment}
          />
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
