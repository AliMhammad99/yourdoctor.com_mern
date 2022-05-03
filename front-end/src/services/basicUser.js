import http from "../http-common";

class BasicUserDataService {
  static insertBasicUser(BasicUserInfos) {
    console.log("basic service");
    return http.post("/basicUser", BasicUserInfos);
  }
}

export default BasicUserDataService;
