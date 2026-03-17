"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_my = require("../../apis/my.js");
if (!Array) {
  const _easycom_Error2 = common_vendor.resolveComponent("Error");
  _easycom_Error2();
}
const _easycom_Error = () => "../../components/Error/Error.js";
if (!Math) {
  _easycom_Error();
}
const _sfc_main = {
  __name: "registerD2",
  setup(__props) {
    const phone = common_vendor.ref();
    const password = common_vendor.ref();
    const reg = /^1[3-9]\d{9}$/;
    const reg2 = /^[a-zA-Z0-9]+$/;
    const goqueueMovie = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const gologin = () => {
      common_vendor.index.__f__("log", "at myPackage/registerD2/registerD2.vue:38", phone.value);
      common_vendor.index.__f__("log", "at myPackage/registerD2/registerD2.vue:39", password.value);
      if (phone.value && password.value) {
        if (reg.test(phone.value) && reg2.test(password.value)) {
          apis_my.addregisterApi({ phone: phone.value, password: password.value }).then((res) => {
            if (res.code == 200) {
              yes();
              setTimeout(() => {
                common_vendor.index.navigateTo({
                  url: "/myPackage/Login/Login"
                });
              }, 2e3);
              common_vendor.index.__f__("log", "at myPackage/registerD2/registerD2.vue:50", res);
            } else {
              nophonetype();
            }
          });
        } else {
          phonetype();
        }
      } else {
        isphone();
      }
    };
    const toastRef = common_vendor.ref();
    const isphone = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("手机密码不能为空");
    };
    const phonetype = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("手机密码格式错误，密码只能包含字母或数字");
    };
    const nophonetype = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("注册失败");
    };
    const yes = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("注册成功！");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: common_assets._imports_0$3,
        c: common_vendor.o(goqueueMovie),
        d: phone.value,
        e: common_vendor.o(($event) => phone.value = $event.detail.value),
        f: password.value,
        g: common_vendor.o(($event) => password.value = $event.detail.value),
        h: common_vendor.o(gologin),
        i: common_vendor.sr(toastRef, "0ff6c977-0", {
          "k": "toastRef"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/myPackage/registerD2/registerD2.js.map
