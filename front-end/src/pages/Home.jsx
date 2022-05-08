import HeroSection from "../components/HeroSection";
import HomeGuestSection2 from "../components/HomeGuestSection2";
import HomeGuestSection3 from "../components/HomeGuestSection3";
import HomeGuestFooter from "../components/HomeGuestFooter";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
function Home() {
  return (
    <>
      <Loading />
      <Nav />
      <HeroSection />
      <HomeGuestSection2 />
      <HomeGuestSection3 />
      <HomeGuestFooter />
    </>
  );
}

export default Home;
