import HeroSection from "../components/HeroSection";
import HomeGuestSection2 from "../components/HomeGuestSection2";
import HomeGuestSection3 from "../components/HomeGuestSection3";
import HomeGuestFooter from "../components/HomeGuestFooter";
import GlobalStates from "../utils/GlobalStates";
import { useContext } from "react";
function Home() {
  const globalStates = useContext(GlobalStates);
  const handleLogout = () => {
    globalStates.setAuthenticated(false);
  };
  return (
    <>
      <nav>Main Nav</nav>
      <button onClick={handleLogout}>Logout</button>
      <HeroSection />
      <HomeGuestSection2 />
      <HomeGuestSection3 />
      <HomeGuestFooter />
    </>
  );
}

export default Home;
