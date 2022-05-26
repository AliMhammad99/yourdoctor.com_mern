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

  static getDoctorCardBySpecialtyId(specialtyId) {
    return http.get(`/doctor/get/doctor_card?specialty_id=${specialtyId}`);
  }
  static getDoctorDetailsByBasicUserId(basicUserId) {
    return http.get(`/doctor/get/doctor_details/${basicUserId}`);
  }
}

export default DoctorDataService;
