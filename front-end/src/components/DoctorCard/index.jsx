import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import "./DoctorCard.scss";
function DoctorCard({
  doctorId,
  profilePicture,
  fullName,
  specialty,
  location,
  rating,
}) {
  return (
    <section className="doctor-card">
      <div className="left-div">
        <picture className="doctor-profile-picture">
          <img src={profilePicture} alt="Doctor's profile pictue" />
        </picture>
        <div className="doctor-info">
          <h2 className="doctor-name">Dr. {fullName}</h2>
          <h2 className="doctor-specialty">
            <VerifiedIcon />
            <span>{specialty}</span>
          </h2>
          <h2 className="doctor-location">
            <LocationIcon />
            <span>{location}</span>
          </h2>
          <h2 className="doctor-rating">
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
            {/* Stars rating https://mui.com/material-ui/react-rating/ */}
            <span>{rating}/5</span>
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
