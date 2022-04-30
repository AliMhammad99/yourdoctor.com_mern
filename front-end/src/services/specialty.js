import http from "../http-common";

class SpecialtyDataService{
    static getSpecialty(query){
        return http.get(`?${query}`);
    }
}

export default SpecialtyDataService;