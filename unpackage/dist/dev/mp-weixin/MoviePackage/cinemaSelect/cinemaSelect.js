"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_headrApi = require("../../apis/headrApi.js");
if (!Math) {
  common_vendor.unref(Error)();
}
const Error = () => "../../components/Error/Error.js";
const _sfc_main = {
  __name: "cinemaSelect",
  setup(__props) {
    const cinemaSelect = common_vendor.ref([]);
    const movieTime = common_vendor.ref();
    const goqueueMovie = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    common_vendor.onLoad((options) => {
      const decodedString = decodeURIComponent(options.dateInfo);
      const dateInfo = JSON.parse(decodedString);
      movieTime.value = { ...dateInfo };
      apis_headrApi.getcinemaSelectApi({ _id: options.id }).then((res) => {
        if (res.code == 200) {
          cinemaSelect.value = res.data;
        }
      });
    });
    const selectSeat = common_vendor.ref([]);
    const clickitem2 = (item) => {
      if (item.is_sold) {
        showError();
      } else if (selectSeat.value.find((item3) => item3._id == item._id)) {
        selectSeat.value = selectSeat.value.filter((item4) => item4._id != item._id);
      } else {
        if (selectSeat.value.length < 6) {
          selectSeat.value.push(item);
        } else {
          showError2();
        }
      }
    };
    const buyticket = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (selectSeat.value.length != 0) {
        const setmovieData = {
          image: (_b = (_a = cinemaSelect.value) == null ? void 0 : _a.movieId) == null ? void 0 : _b.cover_image,
          name: (_d = (_c = cinemaSelect.value) == null ? void 0 : _c.movieId) == null ? void 0 : _d.name,
          cinema: (_f = (_e = cinemaSelect.value) == null ? void 0 : _e.theatreId) == null ? void 0 : _f.name,
          moviedate: (_g = movieTime.value) == null ? void 0 : _g.date,
          weekday: (_h = movieTime.value) == null ? void 0 : _h.weekday,
          seat: selectSeat.value,
          price: selectSeat.value.length * ((_i = cinemaSelect.value) == null ? void 0 : _i.price),
          Time: (_j = movieTime.value) == null ? void 0 : _j.time
        };
        const encodedData = encodeURIComponent(JSON.stringify(setmovieData));
        common_vendor.index.navigateTo({
          url: `/MoviePackage/cinemaPay/cinemaPay?encoded=${encodedData}`
        });
      } else {
        showError3();
      }
    };
    const toastRef = common_vendor.ref();
    const showError = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("该位置已经被占了 T^T");
    };
    const showError2 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("一次最多只能买6个座位");
    };
    const showError3 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("你还没有选座位喵~");
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        b: common_assets._imports_0$3,
        c: common_vendor.o(goqueueMovie),
        d: common_assets._imports_1$2,
        e: common_vendor.f(cinemaSelect.value.seats, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2.row + "-" + item2.col),
                b: item2._id,
                c: common_vendor.n({
                  "sellCinema": item2.is_sold,
                  "element": item2.is_empty,
                  "buyCinema": selectSeat.value.map((item3) => item3._id).includes(item2._id)
                }),
                d: common_vendor.o(($event) => clickitem2(item2), item2._id)
              };
            }),
            b: index
          };
        }),
        f: movieTime.value
      }, movieTime.value ? {
        g: common_vendor.t((_b = (_a = cinemaSelect.value) == null ? void 0 : _a.movieId) == null ? void 0 : _b.name),
        h: common_vendor.t((_d = (_c = cinemaSelect.value) == null ? void 0 : _c.theatreId) == null ? void 0 : _d.name),
        i: common_vendor.t((_e = movieTime.value) == null ? void 0 : _e.date),
        j: common_vendor.t((_f = movieTime.value) == null ? void 0 : _f.weekday),
        k: common_vendor.t((_g = movieTime.value) == null ? void 0 : _g.time)
      } : {}, {
        l: common_vendor.f(selectSeat.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.row),
            b: common_vendor.t(item.col),
            c: item._id
          };
        }),
        m: common_vendor.t(selectSeat.value.length * ((_h = cinemaSelect.value) == null ? void 0 : _h.price)),
        n: common_vendor.o(buyticket),
        o: common_vendor.sr(toastRef, "4b5b9e03-0", {
          "k": "toastRef"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4b5b9e03"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MoviePackage/cinemaSelect/cinemaSelect.js.map
