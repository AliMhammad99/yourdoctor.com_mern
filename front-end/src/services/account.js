import http from "../http-common";

class AccountDataService {
  static insertAccount(AccountInfos) {
    return http.post("/account", AccountInfos);
  }
  static logIn(account) {
    return http.post("/account/authentication/login", account);
  }
  static isLoggedIn() {
    return http.get("/account/authentication/is_logged_in");
  }
  static logOut() {
    return http.get("/account/authentication/logout");
  }
}

export default AccountDataService;
