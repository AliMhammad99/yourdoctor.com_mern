import http from "../http-common";

class DoctorDataService {
  static getAllDoctors() {
    return http.get("/doctor/aggregate/basic_user");
  }
}

export default DoctorDataService;
