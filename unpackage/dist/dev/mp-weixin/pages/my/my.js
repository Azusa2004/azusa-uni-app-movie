"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const uiserData = store_user.useUserStore();
    common_vendor.onShow(() => {
      const token = common_vendor.index.getStorageSync("user_token");
      if (!token) {
        common_vendor.index.navigateTo({
          url: "/myPackage/register/register"
        });
      }
    });
    const logout = () => {
      common_vendor.index.removeStorage({
        key: "user_token"
      });
      const token = common_vendor.index.getStorageSync("user_token");
      if (!token) {
        common_vendor.index.navigateTo({
          url: "/myPackage/register/register"
        });
      }
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: (_a = common_vendor.unref(uiserData).userInfo) == null ? void 0 : _a.avatar,
        c: common_vendor.t((_b = common_vendor.unref(uiserData).userInfo) == null ? void 0 : _b.nickname),
        d: common_assets._imports_0$2,
        e: common_assets._imports_1$1,
        f: common_assets._imports_2$1,
        g: common_assets._imports_1$1,
        h: common_assets._imports_3,
        i: common_assets._imports_1$1,
        j: common_vendor.o(logout)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
