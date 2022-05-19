import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import "./CalendarCard.scss";
function DoctorCard() {
  return (
    <section className="doctor-card">
      <div className="left-div">
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
