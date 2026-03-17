"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const apis_headrApi = require("../../apis/headrApi.js");
const apis_movieApi = require("../../apis/movieApi.js");
if (!Array) {
  const _easycom_up_loadmore2 = common_vendor.resolveComponent("up-loadmore");
  _easycom_up_loadmore2();
}
const _easycom_up_loadmore = () => "../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
if (!Math) {
  _easycom_up_loadmore();
}
const _sfc_main = {
  __name: "cinemaDetails",
  setup(__props) {
    const cinemadata = common_vendor.ref([]);
    const Moviedata = common_vendor.ref([]);
    common_vendor.onMounted(() => {
      addcinemaMovie();
    });
    const addcinemaMovie = () => {
      apis_headrApi.addsoonApi({ theatreId: cinemaid.value }).then((res) => {
        if (res.code == 200) {
          Moviedata.value = res.data.rows;
        }
      });
      apis_movieApi.getcinemaApi({ _id: cinemaid.value }).then((res) => {
        if (res.code == 200) {
          cinemadata.value = res.data;
        }
      });
    };
    const skipMovie = (id) => {
      common_vendor.index.__f__("log", "at MoviePackage/cinemaDetails/cinemaDetails.vue:96", id);
      common_vendor.index.navigateTo({
        url: `/headerPackage/headerMovei/headerMovei?id=${id}`
      });
    };
    const cinemaid = common_vendor.ref();
    common_vendor.onLoad((options) => {
      cinemaid.value = options.id;
    });
    const rollback = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const MovieTime = [
      {
        key: "1",
        Time: "11:00"
      },
      {
        key: "2",
        Time: "12:00"
      },
      {
        key: "3",
        Time: "13:00"
      },
      {
        key: "4",
        Time: "14:00"
      },
      {
        key: "5",
        Time: "15:00"
      }
    ];
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: cinemadata.value.image
      }, cinemadata.value.image ? {
        b: common_vendor.index.getWindowInfo().statusBarHeight + "px",
        c: common_assets._imports_0$3,
        d: common_vendor.o(($event) => rollback()),
        e: `url(${cinemadata.value.image})`
      } : {}, {
        f: common_vendor.t(cinemadata.value.name),
        g: common_vendor.t(cinemadata.value.address),
        h: common_assets._imports_1,
        i: common_vendor.t(cinemadata.value.distance ? `${cinemadata.value.distance}` : "？"),
        j: common_vendor.t(cinemadata.value.distance ? `${cinemadata.value.distance * 5}` : "0"),
        k: common_assets._imports_2$2,
        l: common_assets._imports_2$2,
        m: common_assets._imports_2$2,
        n: common_assets._imports_2$2,
        o: common_assets._imports_3$1,
        p: Moviedata.value.length != 0
      }, Moviedata.value.length != 0 ? {
        q: common_vendor.f(Moviedata.value, (item, k0, i0) => {
          return {
            a: item.cover_image,
            b: common_vendor.t(item.name),
            c: common_vendor.f(MovieTime, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2.Time),
                b: item2.key
              };
            }),
            d: item._id,
            e: common_vendor.o(($event) => skipMovie(item._id), item._id)
          };
        }),
        r: common_vendor.p({
          loadmoreText: "没有更多了",
          dashed: true,
          line: true
        })
      } : {}, {
        s: Moviedata.value.length == 0
      }, Moviedata.value.length == 0 ? {
        t: common_assets._imports_4
      } : {}, {
        v: common_vendor.gei(_ctx, "")
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77aa4935"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/MoviePackage/cinemaDetails/cinemaDetails.js.map
