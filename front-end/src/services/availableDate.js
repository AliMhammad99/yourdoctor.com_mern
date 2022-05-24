import http from "../http-common";

class AvailableDateDataService {
  // static insertBasicUser(AppointmentInfos) {
  //   return http.post("/basicUser", AppointmentInfos);
  // }

  // static updateAppointment(AppointmentInfos) {
  //   //console.log("basic service image insert");
  //   return http.patch("/basicUser/profilePicture/add", AppointmentInfos);
  // }

  static getAvailableDateByID(available_date_id) {
    return http.get(`/availableDate/getSpecificDate/${available_date_id}`);
  }
}

export default AvailableDateDataService;
