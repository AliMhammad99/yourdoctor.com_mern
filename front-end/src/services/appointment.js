import http from "../http-common";

class AppointmentDataService {
  static insertBasicUser(AppointmentInfos) {
    return http.post("/basicUser", AppointmentInfos);
  }

  static updateAppointment(AppointmentInfos) {
    //console.log("basic service image insert");
    return http.patch("/basicUser/profilePicture/add", AppointmentInfos);
  }

  static getAppointmentByPatientID(patient_user_id) {
    return http.get(`/appointment/patientID/${patient_user_id}`);
  }


  // static deleteAppointment(patient_user_id) {
  //   return http.delete(`/appointment/patientID/${patient_user_id}`);
  // }

  static bookAppointmentByAvailableDateId(available_date_id) {
    return http.post("/appointment/book/appointment", available_date_id);
  }

}

export default AppointmentDataService;
