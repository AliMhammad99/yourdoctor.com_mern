import VerifiedIcon from "@mui/icons-material/Verified";
import LocationIcon from "@mui/icons-material/LocationOn";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AppointmentDataService from "../../services/appointment";
import BasicUserDataService from "../../services/basicUser";
import AvailableDateDataService from "../../services/availableDate";
import DoctorDataService from "../../services/doctor";
import SpecialityDataService from "../../services/specialty";
import { useState, useEffect } from "react";
import "./CalendarCard.scss";

class Inf {
  constructor(
    fname,
    lname,
    speciality,
    location,
    date,
    month,
    hours,
    minutes,
    year
  ) {
    this.fname = fname;
    this.lname = lname;
    this.speciality = speciality;
    this.location = location;
    this.date = date;
    this.month = month;
    this.hours = hours;
    this.minutes = minutes;
    this.year = year;
  }
}

function CalendarCard() {
  const [info, setInfo] = useState([]);
  // const [flag, setFlag] = useState();

  let arr = [];
  // var date;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    BasicUserDataService.getBasicUser().then((response) => {
      // console.log(response.data._id);
      AppointmentDataService.getAppointmentByPatientID(response.data._id).then(
        (res) => {
          // console.log(res.data.length);
          for (let i = 0; i < res.data.length; i++) {
            //console.log(res.data[i].available_date_id);
            AvailableDateDataService.getAvailableDateByID(
              res.data[i].available_date_id
            ).then((resp) => {
              var date = new Date(resp.data.from);
              //  console.log(date.toDateString());
              // console.log(date.getTime());
              let [month, day, year] = [
                date.getMonth(),
                date.getDate(),
                date.getFullYear(),
              ];
              let [hour, minutes, seconds] = [
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
              ];

              BasicUserDataService.getBasicUserByID(
                resp.data.doctor_user_id
              ).then((r) => {
                //console.log(r.data);

                DoctorDataService.getDoctorByBasicUserID(
                  resp.data.doctor_user_id
                ).then((res1) => {
                  //  console.log(res1.data[0].clinic.location.region_name);
                  console.log(res1.data.length);

                  SpecialityDataService.getSpecialtyByID(
                    res1.data[0].specialty_id
                  ).then((spec_res) => {
                    //   console.log(spec_res.data.specialty_name);

                    // console.log(spec_res.data);

                    arr.push(
                      new Inf(
                        r.data.first_name,
                        r.data.last_name,
                        spec_res.data.specialty_name,
                        res1.data[0].clinic.location.region_name,
                        date.getDate(),
                        date.getMonth(),
                        date.getHours(),
                        date.getMinutes(),
                        date.getFullYear()
                      )
                    );

                    if (i === res.data.length - 1) {
                      console.log(arr);
                      setInfo(arr);
                      setLoading(false);
                    }
                  });
                });
              });
            });
          }
        }
      );
    });
  }, []);

  // async function r() {
  //   await setInfo("r.data.first_name");
  // }

  // console.log("after");

  //console.log(arr.length);

  //console.log(Object.keys(infos).length);
  return (
    <div>
      {isLoading === false ? (
        info.map((response, index) => {
          return (
            <section key={index} className="calendar-card">
              <div className="calendar-left-div">
                <div className="calendar-info">
                  <h2 className="calendar-name">
                    Dr. {response.fname} {response.lname} -{" "}
                    {response.speciality}
                  </h2>

                  <h2 className="calendar-locatio">
                    <LocationIcon />
                    <span>{response.location}</span>
                  </h2>
                </div>
                <div className="calendar-date-time">
                  <h2 className="calendar-name">
                    <EventNoteIcon />
                    <span>
                      Date: {response.date}/{response.month}/{response.year}{" "}
                    </span>
                  </h2>

                  <h2 className="calendar-location">
                    <AccessTimeFilledIcon />
                    <span>
                      Time: {response.hours}:{response.minutes}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="calendar-arrow-forward">
                <DeleteOutlineIcon />
              </div>
            </section>
          );
        })
      ) : (
        <div className="App">Loading...</div>
      )}
    </div>
  );
}
export default CalendarCard;
