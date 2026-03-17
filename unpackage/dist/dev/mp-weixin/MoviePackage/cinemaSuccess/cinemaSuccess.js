"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  __name: "cinemaSuccess",
  setup(__props) {
    const movieDataArr = common_vendor.ref([]);
    const useStore = store_user.useUserStore();
    common_vendor.onLoad((options) => {
      const decodedString = decodeURIComponent(options.payment);
      const dateInfo = JSON.parse(decodedString);
      movieDataArr.value = { ...dateInfo };
      common_vendor.index.__f__("log", "at MoviePackage/cinemaSuccess/cinemaSuccess.vue:79", "接收4", movieDataArr.value);
    });
    const buyticket = () => {
      useStore.saveMovieData(movieDataArr.value);
      common_vendor.index.__f__("log", "at MoviePackage/cinemaSuccess/cinemaSuccess.vue:84", "Pinia中的数据:", useStore.orderData);
      common_vendor.index.switchTab({
        url: "/pages/header/header"
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
      return {
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: (_b = (_a = movieDataArr.value) == null ? void 0 : _a._value) == null ? void 0 : _b.image,
        c: common_vendor.t((_d = (_c = movieDataArr.value) == null ? void 0 : _c._value) == null ? void 0 : _d.name),
        d: common_vendor.t((_f = (_e = movieDataArr.value) == null ? void 0 : _e._value) == null ? void 0 : _f.cinema),
        e: common_vendor.t((_h = (_g = movieDataArr.value) == null ? void 0 : _g._value) == null ? void 0 : _h.moviedate),
        f: common_vendor.t((_j = (_i = movieDataArr.value) == null ? void 0 : _i._value) == null ? void 0 : _j.weekday),
        g: common_vendor.f((_l = (_k = movieDataArr.value) == null ? void 0 : _k._value) == null ? void 0 : _l.seat, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.row),
            b: common_vendor.t(item.col),
            c: item._id
          };
        }),
        h: common_vendor.t((_n = (_m = movieDataArr.value) == null ? void 0 : _m._value) == null ? void 0 : _n.Time),
        i: common_vendor.t((_q = (_p = (_o = movieDataArr.value) == null ? void 0 : _o._value) == null ? void 0 : _p.seat) == null ? void 0 : _q.length),
        j: common_assets._imports_0$1,
        k: common_vendor.o(buyticket),
        l: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2e1e2ca2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MoviePackage/cinemaSuccess/cinemaSuccess.js.map
