"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_navigate2 = common_vendor.resolveComponent("navigate");
  _easycom_navigate2();
}
const _easycom_navigate = () => "../../components/navigate/navigate.js";
if (!Math) {
  _easycom_navigate();
}
const _sfc_main = {
  __name: "mall",
  setup(__props) {
    const MovieData = common_vendor.ref();
    const useStore = store_user.useUserStore();
    common_vendor.onMounted(() => {
      MovieData.value = useStore.orderData;
      common_vendor.index.__f__("log", "at pages/mall/mall.vue:45", "订单也", MovieData.value);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_assets._imports_0,
        b: MovieData.value
      }, MovieData.value ? {
        c: common_vendor.f(MovieData.value, (item, index, i0) => {
          var _a2, _b2, _c, _d;
          return {
            a: common_vendor.t((_a2 = item._rawValue) == null ? void 0 : _a2.name),
            b: common_vendor.t((_b2 = item._rawValue) == null ? void 0 : _b2.cinema),
            c: common_vendor.t((_c = item._rawValue) == null ? void 0 : _c.moviedate),
            d: common_vendor.t((_d = item._rawValue) == null ? void 0 : _d.weekday),
            e: index
          };
        }),
        d: common_assets._imports_0$1,
        e: common_assets._imports_2
      } : {}, {
        f: ((_a = MovieData.value) == null ? void 0 : _a.length) == 0
      }, ((_b = MovieData.value) == null ? void 0 : _b.length) == 0 ? {
        g: common_assets._imports_4
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6808f5eb"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mall/mall.js.map
