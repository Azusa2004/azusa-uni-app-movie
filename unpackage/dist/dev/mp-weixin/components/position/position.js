"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "position",
  setup(__props) {
    const skipMap = () => {
      common_vendor.index.navigateTo({
        url: "/headerPackage/mapMovie/mapMovie"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$5,
        b: common_assets._imports_1$5,
        c: common_vendor.o(skipMap),
        d: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/position/position.js.map
