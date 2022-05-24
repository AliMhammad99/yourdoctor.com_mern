import http from "../http-common";

class DoctorDataService {
  static getAllDoctors() {
    return http.get("/doctor/aggregate/basic_user");
  }
  static getDoctorByName(doctorName) {
    return http.get(`/doctor/aggregate/basic_user?doctor_name=${doctorName}`);
  }

  static getDoctorByBasicUserID(id) {
    return http.get(`/doctor/byBasicUserID/${id}`);
  }
}

export default DoctorDataService;
