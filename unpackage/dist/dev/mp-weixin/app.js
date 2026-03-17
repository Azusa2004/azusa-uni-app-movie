"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_user = require("./store/user.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/header/header.js";
  "./pages/mall/mall.js";
  "./pages/movie/movie.js";
  "./pages/my/my.js";
  "./headerPackage/headerMovei/headerMovei.js";
  "./headerPackage/headerMovei/queueMovie.js";
  "./headerPackage/headerMovei/introduction.js";
  "./headerPackage/screenMovei/screenMovei.js";
  "./headerPackage/hotMovie/hotMovie.js";
  "./headerPackage/mapMovie/mapMovie.js";
  "./MoviePackage/cinemaDetails/cinemaDetails.js";
  "./MoviePackage/cinemaSelect/cinemaSelect.js";
  "./MoviePackage/cinemaPay/cinemaPay.js";
  "./MoviePackage/cinemaSuccess/cinemaSuccess.js";
  "./myPackage/register/register.js";
  "./myPackage/modifyUser/modifyUser.js";
  "./myPackage/Login/Login.js";
  "./myPackage/registerD2/registerD2.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const usertoken = store_user.useUserStore();
    common_vendor.onLaunch(() => {
      if (common_vendor.index.getStorageSync("user_token")) {
        usertoken.getUserInfo();
      }
    });
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(common_vendor.createPinia());
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
