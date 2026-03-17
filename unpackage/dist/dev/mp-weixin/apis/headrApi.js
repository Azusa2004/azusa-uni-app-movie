"use strict";
const utils_request = require("../utils/request.js");
const addpopularApi = (data) => {
  return utils_request.httpPost("/movies/search", data);
};
const addsoonApi = (data) => {
  return utils_request.httpPost("/movies/search", data);
};
const addgradeApi = (data) => {
  return utils_request.httpPost("/movies/search", data);
};
const addarrangementApi = (data) => {
  return utils_request.httpPost("/schedules/search", data);
};
const getcinemaSelectApi = (data) => {
  return utils_request.httpGet("/schedules/getById", data);
};
exports.addarrangementApi = addarrangementApi;
exports.addgradeApi = addgradeApi;
exports.addpopularApi = addpopularApi;
exports.addsoonApi = addsoonApi;
exports.getcinemaSelectApi = getcinemaSelectApi;
//# sourceMappingURL=../../.sourcemap/mp-weixin/apis/headrApi.js.map
