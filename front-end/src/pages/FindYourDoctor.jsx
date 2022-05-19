import Nav from "../components/Nav";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState } from "react";
import DoctorDataService from "../services/doctor";
function FindYourDoctor() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    DoctorDataService.getAllDoctors()
      .then((result) => {
        setDoctors(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(doctors);
  return (
    <>
      <Loading />
      <Nav />
      <SearchForm className={"menu-below-box"} />
      {doctors.map((doctor, index) => {
        return (
          <DoctorCard
            key={index}
            profilePicture={doctor.basic_user_details.profile_picture}
            fullName={doctor.basic_user_details.full_name}
            specialty={doctor.specialty_id}
            location={
              doctor.clinic.name + ", " + doctor.clinic.location.region_name
            }
            rating={4.4}
          />
        );
      })}
    </>
  );
}

export default FindYourDoctor;
