import http from "../http-common";

class SpecialtyDataService {
  static getAllSpecialties() {
    return http.get("/specialty");
  }
  static getSpecialtyByName(specialtyName) {
    return http.get(`/specialty?specialty_name=${specialtyName}`);
  }
  static getSpecialtyById(specialtyId){
    return http.get(`/specialty/${specialtyId}`);
  }
}

export default SpecialtyDataService;
