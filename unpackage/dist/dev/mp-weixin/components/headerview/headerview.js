"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "headerview",
  props: ["title", "data"],
  emits: ["movie-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const clickMovie = (item) => {
      emit("movie-click", item);
    };
    const Lookscreen = (title) => {
      common_vendor.index.navigateTo({
        url: `/headerPackage/screenMovei/screenMovei?id=${title}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.o(($event) => Lookscreen(__props.title)),
        c: common_vendor.f(__props.data, (item, k0, i0) => {
          return {
            a: item.cover_image,
            b: common_vendor.t(item.name),
            c: item._id,
            d: common_vendor.o(($event) => clickMovie(item), item._id)
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/headerview/headerview.js.map
