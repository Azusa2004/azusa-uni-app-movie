"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_headrApi = require("../../apis/headrApi.js");
if (!Array) {
  const _easycom_navigate2 = common_vendor.resolveComponent("navigate");
  const _easycom_position2 = common_vendor.resolveComponent("position");
  const _easycom_home_banner2 = common_vendor.resolveComponent("home-banner");
  const _easycom_headerview2 = common_vendor.resolveComponent("headerview");
  const _easycom_up_loadmore2 = common_vendor.resolveComponent("up-loadmore");
  (_easycom_navigate2 + _easycom_position2 + _easycom_home_banner2 + _easycom_headerview2 + _easycom_up_loadmore2)();
}
const _easycom_navigate = () => "../../components/navigate/navigate.js";
const _easycom_position = () => "../../components/position/position.js";
const _easycom_home_banner = () => "../../components/home-banner/home-banner.js";
const _easycom_headerview = () => "../../components/headerview/headerview.js";
const _easycom_up_loadmore = () => "../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_navigate + _easycom_position + _easycom_home_banner + _easycom_headerview + _easycom_up_loadmore)();
}
const _sfc_main = {
  __name: "header",
  setup(__props) {
    const getpopularMovie = common_vendor.ref([]);
    const getsoonMovie = common_vendor.ref([]);
    const gatgradeMovie = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      gatgradeMovieapi();
    });
    const gatgradeMovieapi = () => {
      apis_headrApi.addgradeApi({ type: "score", pageSize: 6 }).then((res) => {
        if (res.code == 200) {
          gatgradeMovie.value = res.data.rows;
        }
      });
      apis_headrApi.addsoonApi({ type: "coming", pageSize: 6 }).then((res) => {
        if (res.code == 200) {
          getsoonMovie.value = res.data.rows;
        }
      });
      apis_headrApi.addpopularApi({ type: "hot", pageSize: 6 }).then((res) => {
        if (res.code == 200) {
          getpopularMovie.value = res.data.rows;
        }
      });
    };
    const MovieClick = (movie) => {
      common_vendor.index.navigateTo({
        url: `/headerPackage/headerMovei/headerMovei?id=${movie._id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(MovieClick),
        c: common_vendor.p({
          title: "正在热映",
          data: getpopularMovie.value
        }),
        d: common_vendor.o(MovieClick),
        e: common_vendor.p({
          title: "即将上映",
          data: getsoonMovie.value
        }),
        f: common_vendor.o(MovieClick),
        g: common_vendor.p({
          title: "最高评分",
          data: gatgradeMovie.value
        }),
        h: common_vendor.p({
          loadmoreText: "没有更多了",
          dashed: true,
          line: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9675d35c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/header/header.js.map
