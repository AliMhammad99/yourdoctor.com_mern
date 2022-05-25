import "./AvailableDate.scss";
function AvailableDate({ date, timeFrom, timeTo, selected }) {
  return (
    <div className={`available-date-time ${selected ? "selected" : ""}`}>
      <div className="available-date">{date}</div>
      <div className="available-time">
        {timeFrom}-{timeTo}
      </div>
    </div>
  );
}
export default AvailableDate;
