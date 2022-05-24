import http from "../http-common";

class BasicUserDataService {
  static insertBasicUser(BasicUserInfos) {
    return http.post("/basicUser", BasicUserInfos);
  }

  static updateBasicUser(BasicUserInfos) {
    //console.log("basic service image insert");
    return http.patch("/basicUser/profilePicture/add", BasicUserInfos);
  }

  static getBasicUser() {
    //console.log("basic service image insert");
    return http.get("/basicUser/infos/accountId");
  }

  static getBasicUserByID(id) {
    //console.log("basic service image insert");
    return http.get(`/basicUser/${id}`);
  }
}

export default BasicUserDataService;
