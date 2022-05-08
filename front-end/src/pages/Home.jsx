import HeroSection from "../components/HeroSection";
import HomeGuestSection2 from "../components/HomeGuestSection2";
import HomeGuestSection3 from "../components/HomeGuestSection3";
import HomeGuestFooter from "../components/HomeGuestFooter";
import GlobalStates from "../utils/GlobalStates";
import Nav from "../components/Nav";
import { useContext } from "react";
function Home() {
  const globalStates = useContext(GlobalStates);
  const handleLogout = () => {
    globalStates.setAuthenticated(false);
  };
  return (
    <>
      <Nav />
      <HeroSection />
      <HomeGuestSection2 />
      <HomeGuestSection3 />
      <HomeGuestFooter />
    </>
  );
}

export default Home;
