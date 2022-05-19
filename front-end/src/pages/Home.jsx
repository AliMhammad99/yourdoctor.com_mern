import HeroSection from "../components/HeroSection";
import HomeGuestFooter from "../components/HomeGuestFooter";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import UploadPhoto from "../components/UploadPhoto";
import AlertDialogSlide from "../components/EditProfilePopUp";

function Home() {
  return (
    <>
      <Loading />
      <Nav />
      <AlertDialogSlide />
      <HeroSection />
      <HomeGuestFooter />
    </>
  );
}

export default Home;
