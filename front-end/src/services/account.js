import http from "../http-common";

class AccountDataService {
  static insertAccount(AccountInfos) {
    return http.post("/account", AccountInfos);
  }
  static logIn(account) {
    return http.post("/account/login", account);
  }
}

export default AccountDataService;
