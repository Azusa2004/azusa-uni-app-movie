"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Error",
  setup(__props, { expose: __expose }) {
    const show = common_vendor.ref(false);
    const message = common_vendor.ref("");
    const hide = () => {
      show.value = false;
    };
    const showError = (msg) => {
      message.value = msg;
      show.value = true;
      setTimeout(() => {
        hide();
      }, 3e3);
    };
    __expose({ showError });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: show.value
      }, show.value ? {
        b: common_vendor.t(message.value),
        c: common_vendor.o(hide),
        d: common_vendor.gei(_ctx, "")
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5d1b555f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Error/Error.js.map
