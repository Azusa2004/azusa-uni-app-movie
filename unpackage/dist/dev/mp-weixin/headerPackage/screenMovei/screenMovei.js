"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_up_subsection2 = common_vendor.resolveComponent("up-subsection");
  _easycom_up_subsection2();
}
const _easycom_up_subsection = () => "../../uni_modules/uview-plus/components/u-subsection/u-subsection.js";
if (!Math) {
  (_easycom_up_subsection + hotMovie)();
}
const hotMovie = () => "../hotMovie/hotMovie2.js";
const _sfc_main = {
  __name: "screenMovei",
  setup(__props) {
    const list = common_vendor.ref(["正在热映", "即将上映"]);
    const curNow = common_vendor.ref(0);
    common_vendor.onLoad((options) => {
      if (options.id == "即将上映") {
        curNow.value = 1;
      }
    });
    const sectionChange = (index) => {
      curNow.value = index;
    };
    const rollback = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: common_assets._imports_0$3,
        c: common_vendor.o(rollback),
        d: common_vendor.o(sectionChange),
        e: common_vendor.p({
          list: list.value,
          mode: "button",
          current: curNow.value,
          bgColor: "#233052",
          inactiveColor: "#ffffff",
          fontSize: "27rpx"
        }),
        f: common_vendor.o(($event) => curNow.value = $event),
        g: common_vendor.p({
          modelValue: curNow.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c81a0e3e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/headerPackage/screenMovei/screenMovei.js.map
