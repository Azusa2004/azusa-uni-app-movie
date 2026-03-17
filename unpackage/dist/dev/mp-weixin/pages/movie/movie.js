"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_movieApi = require("../../apis/movieApi.js");
if (!Array) {
  const _easycom_navigate2 = common_vendor.resolveComponent("navigate");
  const _easycom_position2 = common_vendor.resolveComponent("position");
  const _easycom_up_loadmore2 = common_vendor.resolveComponent("up-loadmore");
  (_easycom_navigate2 + _easycom_position2 + _easycom_up_loadmore2)();
}
const _easycom_navigate = () => "../../components/navigate/navigate.js";
const _easycom_position = () => "../../components/position/position.js";
const _easycom_up_loadmore = () => "../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_navigate + _easycom_position + _easycom_up_loadmore)();
}
const _sfc_main = {
  __name: "movie",
  setup(__props) {
    const addmoviedata = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      addmovie();
    });
    const addmovie = () => {
      apis_movieApi.addMovieApi().then((res) => {
        if (res.code == 200) {
          addmoviedata.value = res.data.rows;
        }
      });
    };
    const cinemaDetails = (cinemaID) => {
      common_vendor.index.navigateTo({
        url: `/MoviePackage/cinemaDetails/cinemaDetails?id=${cinemaID}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: addmoviedata.value.length != 0
      }, addmoviedata.value.length != 0 ? {
        c: common_vendor.f(addmoviedata.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.distance ? item.distance + "km" : "..."),
            d: item._id,
            e: common_vendor.o(($event) => cinemaDetails(item._id), item._id)
          };
        }),
        d: common_assets._imports_1
      } : {}, {
        e: common_vendor.p({
          loadmoreText: "没有更多了",
          dashed: true,
          line: true
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/movie/movie.js.map
