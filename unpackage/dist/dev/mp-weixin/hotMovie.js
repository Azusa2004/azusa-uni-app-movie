"use strict";
const common_vendor = require("./common/vendor.js");
const apis_headrApi = require("./apis/headrApi.js");
const _sfc_main = {
  __name: "hotMovie",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const hotMovie = common_vendor.ref([]);
    const soonMovie = common_vendor.ref([]);
    const ishotisoonData = common_vendor.ref([]);
    const count = common_vendor.useModel(__props, "modelValue");
    common_vendor.onMounted(() => {
      apis_headrApi.addsoonApi({ type: "hot" }).then((res) => {
        var _a;
        if (res.code == 200) {
          hotMovie.value = (_a = res.data) == null ? void 0 : _a.rows;
        }
      });
      apis_headrApi.addsoonApi({ type: "coming" }).then((res) => {
        var _a;
        if (res.code == 200) {
          soonMovie.value = (_a = res.data) == null ? void 0 : _a.rows;
        }
      });
    });
    common_vendor.watchEffect(() => {
      if (count.value == 0) {
        ishotisoonData.value = hotMovie.value;
      } else {
        ishotisoonData.value = soonMovie.value;
      }
    });
    const buyTicket = (id) => {
      common_vendor.index.navigateTo({
        url: `/headerPackage/headerMovei/headerMovei?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(ishotisoonData.value, (item, k0, i0) => {
          return {
            a: item.cover_image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.typeIds.map((item2) => item2.name).join("，")),
            d: common_vendor.t(item.duration),
            e: common_vendor.t(item.score ? item.score : "无"),
            f: common_vendor.o(($event) => buyTicket(item._id))
          };
        }),
        b: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c9b92e73"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/hotMovie.js.map
