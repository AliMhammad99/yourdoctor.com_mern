import GuestNav from "../components/GuestNav";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import HeroSection from "../components/HeroSection";
import HomeGuestSection2 from "../components/HomeGuestSection2";
import HomeGuestSection3 from "../components/HomeGuestSection3";
import HomeGuestFooter from "../components/HomeGuestFooter";
import Loading from "../components/Loading";
function Guest() {
  return (
    <>
      <Loading />
      <GuestNav />
      <SignIn />
      <SignUp />
      <HeroSection />
      <HomeGuestSection2 />
      <HomeGuestSection3 />
      <HomeGuestFooter />
    </>
  );
}

export default Guest;
