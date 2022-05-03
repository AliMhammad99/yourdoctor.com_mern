import http from "../http-common";

class PatientDataService {
  static insertPatient(PatientInfos) {
    return http.post("/patient", PatientInfos);
  }
}

export default PatientDataService;
