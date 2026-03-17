"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_loading_icon2 + _easycom_up_popup2)();
}
const _easycom_up_loading_icon = () => "../../uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "cinemaPay",
  setup(__props) {
    const movieDataArr = common_vendor.ref();
    common_vendor.onLoad((options) => {
      const decodedString = decodeURIComponent(options.encoded);
      const dateInfo = JSON.parse(decodedString);
      movieDataArr.value = { ...dateInfo };
    });
    const payment = () => {
      isLoading.value = true;
      setTimeout(() => {
        const encodedData = encodeURIComponent(JSON.stringify(movieDataArr));
        common_vendor.index.redirectTo({
          url: `/MoviePackage/cinemaSuccess/cinemaSuccess?payment=${encodedData}`
        });
      }, 2e3);
    };
    const goqueueMovie = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const unixTimestamp = Math.floor(Date.now() / 1e3);
    common_vendor.ref(false);
    const show = common_vendor.ref(false);
    const isLoading = common_vendor.ref(false);
    function open() {
      show.value = true;
    }
    function close() {
      show.value = false;
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      return common_vendor.e({
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: common_assets._imports_0$3,
        c: common_vendor.o(goqueueMovie),
        d: (_a = movieDataArr.value) == null ? void 0 : _a.image
      }, ((_b = movieDataArr.value) == null ? void 0 : _b.image) ? {
        e: (_c = movieDataArr.value) == null ? void 0 : _c.image
      } : {}, {
        f: common_vendor.t(common_vendor.unref(unixTimestamp)),
        g: common_vendor.t((_d = movieDataArr.value) == null ? void 0 : _d.name),
        h: common_vendor.t((_e = movieDataArr.value) == null ? void 0 : _e.cinema),
        i: common_vendor.t((_f = movieDataArr.value) == null ? void 0 : _f.moviedate),
        j: common_vendor.t((_g = movieDataArr.value) == null ? void 0 : _g.weekday),
        k: common_vendor.f((_h = movieDataArr.value) == null ? void 0 : _h.seat, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.row),
            b: common_vendor.t(item.col),
            c: item._id
          };
        }),
        l: common_vendor.t((_i = movieDataArr.value) == null ? void 0 : _i.price),
        m: common_vendor.t((_j = movieDataArr.value) == null ? void 0 : _j.Time),
        n: common_vendor.t((_k = movieDataArr.value) == null ? void 0 : _k.seat.length),
        o: common_vendor.t(((_l = movieDataArr.value) == null ? void 0 : _l.price) + 4999),
        p: common_assets._imports_1$3,
        q: common_vendor.p({
          show: isLoading.value,
          color: "#000"
        }),
        r: common_vendor.t(((_m = movieDataArr.value) == null ? void 0 : _m.price) + 4999),
        s: common_vendor.o(payment),
        t: common_vendor.o(close),
        v: common_vendor.o(open),
        w: common_vendor.p({
          show: show.value
        }),
        x: common_vendor.o(($event) => show.value = true),
        y: common_vendor.gei(_ctx, "")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-84bc4dee"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MoviePackage/cinemaPay/cinemaPay.js.map
