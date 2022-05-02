import http from "../http-common";

class SignUpDataService {
  static insertBasicUser(BasicUserInfos) {
    return http.post("/basicUser", BasicUserInfos);
  }
}

export default SignUpDataService;
