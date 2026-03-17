"use strict";
const common_vendor = require("../common/vendor.js");
const apis_my = require("../apis/my.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      userInfo: null,
      orderData: []
    };
  },
  actions: {
    async getUserInfo() {
      try {
        const res = await apis_my.gatuserApi();
        const result = res;
        if (result.code == 200) {
          this.userInfo = result.data;
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at store/user.ts:20", "getUserInfo执行失败：", error);
      }
    },
    saveMovieData(data) {
      this.orderData.push(data);
    }
  }
});
exports.useUserStore = useUserStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/user.js.map
