"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_my = require("../../apis/my.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "register",
  setup(__props) {
    const uiserData = store_user.useUserStore();
    const rollback = () => {
      common_vendor.index.switchTab({
        url: `/pages/header/header`
      });
    };
    const gologin = () => {
      common_vendor.index.navigateTo({
        url: "/myPackage/Login/Login"
      });
    };
    const getPhone = ({ detail }) => {
      if (detail.iv) {
        common_vendor.index.login({
          success(res) {
            apis_my.addMyPhoneApi({
              appId: "wx68207d56593a85a6",
              appSecret: "ccd214eb392dce4c69e3606fefd1ace4",
              code: res.code,
              encryptedData: detail.encryptedData,
              iv: detail.iv
            }).then((res2) => {
              if (res2.code == 200) {
                common_vendor.index.__f__("log", "at myPackage/register/register.vue:45", res2);
                common_vendor.index.showToast({
                  title: "登陆成功"
                });
                common_vendor.index.setStorage({
                  key: "user_token",
                  data: res2.data.token,
                  success() {
                    uiserData.getUserInfo();
                  }
                });
                setTimeout(() => {
                  common_vendor.index.navigateBack({
                    delta: 1
                  });
                }, 500);
              }
            });
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: common_assets._imports_0$3,
        c: common_vendor.o(rollback),
        d: common_assets._imports_1$4,
        e: common_vendor.o(getPhone),
        f: common_vendor.o(gologin),
        g: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3b796c6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/myPackage/register/register.js.map
