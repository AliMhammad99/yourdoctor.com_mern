import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./CalendarCard.scss";
function DoctorCard() {
  return (
    <section className="calendar-card">
      <div className="calendar-left-div">
        <div className="calendar-info">
          <h2 className="calendar-name">Dr. Marwan Mcheik-Cardiologist</h2>

          <h2 className="calendar-locatio">
            <LocationIcon />
            <span>Baalbeck, Lebanon</span>
          </h2>
        </div>
        <div className="calendar-date-time">
          <h2 className="calendar-name">
            <EventNoteIcon />
            <span>Date: 13/05/2022</span>
          </h2>

          <h2 className="calendar-location">
            <AccessTimeFilledIcon />
            <span>Time: 2:15 AM</span>
          </h2>
        </div>
      </div>
      <div className="calendar-arrow-forward">
        <DeleteOutlineIcon />
      </div>
    </section>
  );
}
export default DoctorCard;
