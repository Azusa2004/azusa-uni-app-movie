"use strict";
const utils_request = require("../utils/request.js");
const addMyPhoneApi = (data) => {
  return utils_request.httpPost("/users/wxLogin", data);
};
const gatuserApi = (data) => {
  return utils_request.httpGet("/users/getInfoByToken", data);
};
const addPhonePasswApi = (data) => {
  return utils_request.httpPost("/users/login", data);
};
const addregisterApi = (data) => {
  return utils_request.httpPost("/users/register", data);
};
exports.addMyPhoneApi = addMyPhoneApi;
exports.addPhonePasswApi = addPhonePasswApi;
exports.addregisterApi = addregisterApi;
exports.gatuserApi = gatuserApi;
//# sourceMappingURL=../../.sourcemap/mp-weixin/apis/my.js.map
