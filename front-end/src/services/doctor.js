import http from "../http-common";

class DoctorDataService {
  static getAllDoctors() {
    return http.get("/doctor/aggregate/basic_user");
  }
  static getDoctorByName(doctorName) {
    return http.get(`/doctor/aggregate/basic_user?doctor_name=${doctorName}`);
  }
}

export default DoctorDataService;
