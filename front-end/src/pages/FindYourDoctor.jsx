import Nav from "../components/Nav";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState } from "react";
import DoctorDataService from "../services/doctor";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/SearchForm/LoadingSpinner";
import "./styles/FindYourDoctor.scss";
import DoctorDetails from "../components/DoctorDetails";
function FindYourDoctor() {
  const { specialty_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [doctorDetailsOpen, setDoctorDetailsOpen] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const specialtyId = specialty_id == "all" ? "" : specialty_id;
    DoctorDataService.getDoctorCardBySpecialtyId(specialtyId)
      .then((result) => {
        setDoctors(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, [specialty_id]);

  //Click on doctor card
  const handleClickOnCard = (doctorId) => {
    // cardsSectionRef.current.style.width = "37vw";
    setSelectedDoctorId(doctorId);
    setDoctorDetailsOpen(true);
  };

  return (
    <>
      <Loading />
      <Nav />
      <SearchForm className={"menu-below-box"} />
      <main className="main-section">
        <section
          className={`doctor-cards-section ${
            doctorDetailsOpen ? "doctor-details-open" : ""
          }`}
        >
          {isLoading && (
            <LoadingSpinner id="find-your-doctor-loading-spinner" />
          )}
          {!isLoading &&
            doctors.map((doctor, index) => {
              return (
                <DoctorCard
                  onClick={() => {
                    handleClickOnCard(doctor.basic_user_id);
                  }}
                  key={index}
                  isSelected={doctor.basic_user_id === selectedDoctorId}
                  profilePicture={doctor.basic_user_details.profile_picture}
                  fullName={
                    doctor.basic_user_details.first_name +
                    " " +
                    doctor.basic_user_details.last_name
                  }
                  specialty={doctor.specialty.specialty_name}
                  location={
                    doctor.clinic.name +
                    ", " +
                    doctor.clinic.location.region_name
                  }
                  rating={4.4}
                />
              );
            })}
        </section>
        <DoctorDetails
          open={doctorDetailsOpen}
          setOpen={setDoctorDetailsOpen}
          selectedDoctorId={selectedDoctorId}
          setSelectedDoctorId={setSelectedDoctorId}
        />
      </main>
    </>
  );
}

export default FindYourDoctor;
