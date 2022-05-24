import Nav from "../components/Nav";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState } from "react";
import DoctorDataService from "../services/doctor";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/SearchForm/LoadingSpinner";
import "./styles/FindYourDoctor.scss";
function FindYourDoctor() {
  const { specialty_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // if(specialty_id=="all")
    const specialtyId = specialty_id == "all" ? "" : specialty_id;
    DoctorDataService.getDoctorCardBySpecialtyId(specialtyId)
      .then((result) => {
        console.log(result.data);
        setDoctors(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <Loading />
      <Nav />
      <SearchForm className={"menu-below-box"} />
      <main className="main-section">
        {isLoading && <LoadingSpinner id="find-your-doctor-loading-spinner" />}
        {!isLoading &&
          doctors.map((doctor, index) => {
            return (
              <DoctorCard
                key={index}
                profilePicture={doctor.basic_user_details.profile_picture}
                fullName={
                  doctor.basic_user_details.first_name +
                  " " +
                  doctor.basic_user_details.last_name
                }
                specialty={doctor.specialty.specialty_name}
                location={
                  doctor.clinic.name + ", " + doctor.clinic.location.region_name
                }
                rating={4.4}
              />
            );
          })}
      </main>
    </>
  );
}

export default FindYourDoctor;
