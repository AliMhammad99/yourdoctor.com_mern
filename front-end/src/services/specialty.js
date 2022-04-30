import http from "../http-common";

class SpecialtyDataService {
  static async getSpecialty(query) {
    return await http.get(`?${query}`);
  }
}

export default SpecialtyDataService;
