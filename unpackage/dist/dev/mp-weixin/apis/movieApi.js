"use strict";
const utils_request = require("../utils/request.js");
const addMovieApi = (data) => {
  return utils_request.httpPost("/theatres/search", data);
};
const getcinemaApi = (data) => {
  return utils_request.httpGet("/theatres/getById", data);
};
exports.addMovieApi = addMovieApi;
exports.getcinemaApi = getcinemaApi;
//# sourceMappingURL=../../.sourcemap/mp-weixin/apis/movieApi.js.map
