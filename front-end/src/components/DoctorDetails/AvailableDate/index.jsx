import "./AvailableDate.scss";
function AvailableDate({ date, timeFrom, timeTo, selected, onClick }) {
  return (
    <div
      className={`available-date-time ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="available-date">{date}</div>
      <div className="available-time">
        {timeFrom}-{timeTo}
      </div>
    </div>
  );
}
export default AvailableDate;
