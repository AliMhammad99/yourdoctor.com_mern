import Nav from "../components/Nav";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import DoctorCard from "../components/DoctorCard";
import { useEffect, useState } from "react";
import DoctorDataService from "../services/doctor";
import { useParams } from "react-router-dom";
function FindYourDoctor() {
  const { specialty_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // if(specialty_id=="all")
    DoctorDataService.getDoctorCardBySpecialtyId(specialty_id)
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
    </>
  );
}

export default FindYourDoctor;
