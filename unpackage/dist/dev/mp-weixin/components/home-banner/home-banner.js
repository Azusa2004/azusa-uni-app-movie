"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  setup(__props) {
    const imgdata = common_vendor.ref();
    common_vendor.onMounted(() => {
      getdata();
    });
    const getdata = () => {
      common_vendor.index.request({
        url: "http://nocat.life:3014/banner/search",
        method: "POST",
        success(res) {
          imgdata.value = res.data.data.rows;
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(imgdata.value, (item, k0, i0) => {
          return {
            a: item.image,
            b: item._id
          };
        }),
        b: common_vendor.gei(_ctx, "")
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/home-banner/home-banner.js.map
