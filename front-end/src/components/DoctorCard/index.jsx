import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import "./DoctorCard.scss";
function DoctorCard() {
  return (
    <section className="doctor-card">
      <div className="left-div">
        <picture className="doctor-profile-picture">
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/43/81/94/1000_F_143819453_Eai3IbcXhhGGoCWY5lso1ijI9nH387yC.jpg"
            alt="Doctor's profile pictue"
          />
        </picture>
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. Marwan Mcheik</h2>
          <h2 className="doctor-specialty">
            <VerifiedIcon />
            <span>Cardiologist</span>
          </h2>
          <h2 className="doctor-location">
            <LocationIcon />
            <span>Baalbeck, Lebanon</span>
          </h2>
          <h2 className="doctor-rating">
            <Rating name="read-only" value={4.3} precision={0.1} readOnly />
            {/* Stars rating https://mui.com/material-ui/react-rating/ */}
            <span>4.3/5</span>
          </h2>
        </div>
      </div>
      <div className="arrow-forward">
        <ArrowIcon />
      </div>
    </section>
  );
}
export default DoctorCard;
