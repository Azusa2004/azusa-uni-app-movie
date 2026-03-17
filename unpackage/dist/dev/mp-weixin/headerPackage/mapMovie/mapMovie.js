"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_amapWx_130 = require("../../utils/amap-wx.130.js");
const _sfc_main = {
  __name: "mapMovie",
  setup(__props) {
    let amapWX;
    common_vendor.onLoad(() => {
      amapWX = new utils_amapWx_130.AMapWX({
        key: "1db92a17014c44196522ad83448dc53f"
      });
    });
    const mapData = common_vendor.ref({
      latitude: 30.6667,
      longitude: 104.0667
    });
    const mapImg = common_vendor.computed(() => {
      return [
        {
          id: 1,
          ...mapData.value,
          iconPath: "/static/avatar.png",
          width: 28,
          height: 28
        }
      ];
    });
    common_vendor.onShow(() => {
      gatusergetLocation();
    });
    const gatusergetLocation = () => {
      amapWX.getRegeo({
        success(res) {
          if (res && Array.isArray(res) && res.length > 0) {
            const location = res[0];
            mapData.value.latitude = location.latitude, mapData.value.longitude = location.longitude;
          }
        },
        fail(err) {
          common_vendor.index.__f__("log", "at headerPackage/mapMovie/mapMovie.vue:49", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: mapData.value.latitude,
        b: mapData.value.longitude,
        c: mapImg.value,
        d: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efb5d94e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/headerPackage/mapMovie/mapMovie.js.map
