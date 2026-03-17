"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_my = require("../../apis/my.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_Error2 = common_vendor.resolveComponent("Error");
  _easycom_Error2();
}
const _easycom_Error = () => "../../components/Error/Error.js";
if (!Math) {
  _easycom_Error();
}
const _sfc_main = {
  __name: "Login",
  setup(__props) {
    const uiserData = store_user.useUserStore();
    const goqueueMovie = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const phone = common_vendor.ref();
    const password = common_vendor.ref();
    const reg = /^1[3-9]\d{9}$/;
    const reg2 = /^[a-zA-Z0-9]+$/;
    const gologin = () => {
      if (phone.value && password.value) {
        if (reg.test(phone.value)) {
          if (reg2.test(password.value)) {
            apis_my.addPhonePasswApi({ phone: phone.value, password: password.value }).then((res) => {
              if (res.code == 200) {
                showError4();
                setTimeout(() => {
                  common_vendor.index.switchTab({
                    url: "/pages/my/my"
                  });
                }, 2e3);
                common_vendor.index.setStorage({
                  key: "user_token",
                  data: res.data.token,
                  success() {
                    uiserData.getUserInfo();
                  }
                });
              } else {
                showError5();
              }
            });
          } else {
            showError2();
          }
        } else {
          showError();
        }
      } else {
        showError3();
      }
    };
    const register = () => {
      common_vendor.index.navigateTo({
        url: "/myPackage/registerD2/registerD2"
      });
    };
    const toastRef = common_vendor.ref();
    const showError = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("请输入正确手机号");
    };
    const showError2 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("密码格式错误");
    };
    const showError3 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("手机或密码不能为空");
    };
    const showError4 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("登陆成功");
    };
    const showError5 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("账号或密码错误");
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
        i: common_vendor.o(register),
        j: common_vendor.sr(toastRef, "2a2270aa-0", {
          "k": "toastRef"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/myPackage/Login/Login.js.map
