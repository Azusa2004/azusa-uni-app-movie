"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_headrApi = require("../../apis/headrApi.js");
if (!Array) {
  const _easycom_navigate2 = common_vendor.resolveComponent("navigate");
  _easycom_navigate2();
}
const _easycom_navigate = () => "../../components/navigate/navigate.js";
if (!Math) {
  (_easycom_navigate + queueMovie + introduction)();
}
const queueMovie = () => "./queueMovie2.js";
const introduction = () => "./introduction2.js";
const _sfc_main = {
  __name: "headerMovei",
  setup(__props) {
    const MovieId = common_vendor.ref();
    const MovieData = common_vendor.ref();
    const SelectId = common_vendor.ref();
    common_vendor.onLoad((options) => {
      MovieId.value = options.id;
    });
    const isActive = common_vendor.ref("one");
    const Primary = (number, que) => {
      isActive.value = number;
      current.value = que;
    };
    common_vendor.onMounted(() => {
      addarrangement();
    });
    const addarrangement = () => {
      apis_headrApi.addarrangementApi({ movieId: MovieId.value }).then((res) => {
        var _a, _b;
        if (res.code == 200) {
          MovieData.value = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.rows[0];
          SelectId.value = (_b = MovieData == null ? void 0 : MovieData.value) == null ? void 0 : _b._id;
        }
      });
    };
    const current = common_vendor.ref("queueMovie");
    const rollback = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return common_vendor.e({
        a: common_assets._imports_0$3,
        b: common_vendor.o(rollback),
        c: MovieData.value
      }, MovieData.value ? {
        d: `url(${(_b = (_a = MovieData.value) == null ? void 0 : _a.movieId) == null ? void 0 : _b.cover_image})`
      } : {}, {
        e: !MovieData.value
      }, !MovieData.value ? {} : {}, {
        f: (_d = (_c = MovieData.value) == null ? void 0 : _c.movieId) == null ? void 0 : _d.cover_image,
        g: common_vendor.t((_f = (_e = MovieData.value) == null ? void 0 : _e.movieId) == null ? void 0 : _f.name),
        h: common_vendor.f((_h = (_g = MovieData.value) == null ? void 0 : _g.movieId) == null ? void 0 : _h.typeIds, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name)
          };
        }),
        i: (_i = MovieData.value) == null ? void 0 : _i._id,
        j: common_vendor.t((_j = MovieData.value) == null ? void 0 : _j.price),
        k: common_vendor.t((_l = (_k = MovieData.value) == null ? void 0 : _k.movieId) == null ? void 0 : _l.score),
        l: isActive.value === "one" ? 1 : "",
        m: common_vendor.o(($event) => Primary("one", "queueMovie")),
        n: isActive.value === "two" ? 1 : "",
        o: common_vendor.o(($event) => Primary("two", "introduction")),
        p: current.value === "queueMovie",
        q: common_vendor.p({
          MovieId: MovieId.value,
          SelectId: SelectId.value
        }),
        r: current.value === "introduction",
        s: MovieData.value,
        t: !MovieData.value
      }, !MovieData.value ? {
        v: common_assets._imports_4
      } : {}, {
        w: common_vendor.gei(_ctx, "")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a82da58"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/headerPackage/headerMovei/headerMovei.js.map
