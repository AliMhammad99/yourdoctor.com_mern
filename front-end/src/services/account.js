import http from "../http-common";

class AccountDataService {
  static insertAccount(AccountInfos) {
    return http.post("/account", AccountInfos);
  }
}

export default AccountDataService;
