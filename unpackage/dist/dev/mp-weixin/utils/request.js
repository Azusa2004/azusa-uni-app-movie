"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://nocat.life:3014";
const request = async (url, method, data = {}) => {
  try {
    const res = await common_vendor.index.request({
      url: BASE_URL + url,
      method,
      data,
      timeout: 5e3,
      header: {
        Authorization: common_vendor.index.getStorageSync("user_token")
      }
    });
    return res.data;
  } catch (err) {
    common_vendor.index.showToast({
      title: "网络错误~",
      icon: "error",
      duration: 2e3
    });
    throw err;
  }
};
const httpGet = (url, data) => {
  return request(url, "GET", data);
};
const httpPost = (url, data) => {
  return request(url, "POST", data);
};
exports.httpGet = httpGet;
exports.httpPost = httpPost;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
