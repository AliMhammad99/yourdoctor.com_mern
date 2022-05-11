import Nav from "../components/Nav";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import DoctorCard from "../components/DoctorCard";
function FindYourDoctor() {
  return (
    <>
      <Loading />
      <Nav />
      <SearchForm className={"menu-below-box"} />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </>
  );
}

export default FindYourDoctor;
