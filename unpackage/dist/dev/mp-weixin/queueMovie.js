"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
const apis_movieApi = require("./apis/movieApi.js");
if (!Math) {
  common_vendor.unref(Error)();
}
const Error = () => "./components/Error/Error.js";
const _sfc_main = {
  __name: "queueMovie",
  props: ["MovieId", "SelectId"],
  setup(__props) {
    const props = __props;
    const MoveiData = common_vendor.ref([]);
    const allData = common_vendor.ref({
      date: "",
      weekday: "",
      MovieTime: ""
    });
    const gocinemaSelect = () => {
      if (allData.value.date == "") {
        showError3();
      } else if (allData.value.MovieTime == "") {
        showError4();
      } else {
        const dataToSend = {
          date: allData.value.date,
          weekday: allData.value.weekday,
          time: allData.value.MovieTime
        };
        const encodedData = encodeURIComponent(JSON.stringify(dataToSend));
        common_vendor.index.navigateTo({
          url: `/MoviePackage/cinemaSelect/cinemaSelect?id=${props.SelectId}&dateInfo=${encodedData}`
        });
      }
    };
    common_vendor.watch(props, () => {
      apis_movieApi.addMovieApi({ movieId: props == null ? void 0 : props.MovieId }).then((res) => {
        var _a;
        if (res.code == 200) {
          MoveiData.value = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.rows;
        }
      });
    });
    const Moviedate = common_vendor.ref(getNextSevenDays());
    const BackcolorKey = common_vendor.ref("");
    const Backcolor = (itemkey2) => {
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      const isExpired = Currentdate.value === todayStr ? passTime.value.some((item) => item.key === itemkey2.key) : CurrentdatePass.value.some((item) => item.key === itemkey2.key);
      if (!isExpired) {
        if (BackcolorKey.value == itemkey2.key) {
          BackcolorKey.value = "";
          allData.value.MovieTime = "";
        } else {
          BackcolorKey.value = itemkey2.key;
          allData.value.MovieTime = itemkey2.Time;
        }
      } else {
        showError();
      }
    };
    const Currentdate = common_vendor.ref();
    const passTime = common_vendor.ref([]);
    const CurrentdatePass = common_vendor.ref([]);
    const weekBackcolorId = common_vendor.ref(Moviedate.value[0].date);
    const weekBackcolor = (id, weekday) => {
      Currentdate.value = id;
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      if (id === todayStr) {
        CurrentdatePass.value = [...passTime.value];
        if (passTime.value.length == MovieTime.length) {
          showError2();
        }
      } else {
        CurrentdatePass.value = [];
      }
      if (weekBackcolorId.value == id) {
        weekBackcolorId.value = "";
        allData.value.date = "";
        allData.value.weekday = "";
      } else {
        weekBackcolorId.value = id;
        allData.value.date = id;
        allData.value.weekday = weekday;
      }
    };
    const isPass = (itemkey) => {
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      if (Currentdate.value === todayStr) {
        return passTime.value.some((item) => item.key === itemkey);
      } else {
        return CurrentdatePass.value.some((item) => item.key === itemkey);
      }
    };
    function getNextSevenDays() {
      const dates = [];
      const today = /* @__PURE__ */ new Date();
      for (let i = 0; i < 7; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const year = futureDate.getFullYear();
        const month = String(futureDate.getMonth() + 1).padStart(2, "0");
        const day = String(futureDate.getDate()).padStart(2, "0");
        const dateString = `${year}-${month}-${day}`;
        const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const weekday = weekdays[futureDate.getDay()];
        dates.push({
          date: dateString,
          weekday
        });
      }
      return dates;
    }
    function getNowTime() {
      const date = /* @__PURE__ */ new Date();
      const hour = date.getHours().toString().padStart(2, "0");
      const minute = date.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minute}`;
    }
    common_vendor.onMounted(() => {
      allData.value.date = Moviedate.value[0].date;
      allData.value.weekday = Moviedate.value[0].weekday;
      ifMovieTime();
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      Currentdate.value = todayStr;
      CurrentdatePass.value = [...passTime.value];
    });
    function ifMovieTime() {
      const now = getNowTime();
      const expiredTimes = MovieTime.filter((item) => {
        return item.Time < now;
      });
      passTime.value = expiredTimes;
    }
    const toastRef = common_vendor.ref();
    const showError = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("该场次已经结束了喵~");
    };
    const showError2 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("今天的票卖完了喵~");
    };
    const showError3 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("请选择观影日期喵~");
    };
    const showError4 = () => {
      var _a;
      (_a = toastRef.value) == null ? void 0 : _a.showError("请选择观影时间喵~");
    };
    let counter = 0;
    const MovieTime = [
      {
        key: ++counter,
        Time: "11:00"
      },
      {
        key: ++counter,
        Time: "13:00"
      },
      {
        key: ++counter,
        Time: "15:00"
      },
      {
        key: ++counter,
        Time: "17:00"
      },
      {
        key: ++counter,
        Time: "19:00"
      },
      {
        key: ++counter,
        Time: "21:00"
      },
      {
        key: ++counter,
        Time: "23:00"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(Moviedate.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item == null ? void 0 : item.date.slice(5, 10)),
            b: common_vendor.t(item == null ? void 0 : item.weekday),
            c: common_vendor.n({
              "Backcolor": weekBackcolorId.value == (item == null ? void 0 : item.date)
            }),
            d: item == null ? void 0 : item.date,
            e: common_vendor.o(($event) => weekBackcolor(item.date, item.weekday), item == null ? void 0 : item.date)
          };
        }),
        b: common_vendor.f(MoveiData.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item == null ? void 0 : item.name),
            b: common_vendor.t(item == null ? void 0 : item.min_price),
            c: common_vendor.t(item == null ? void 0 : item.distance),
            d: common_vendor.t(item == null ? void 0 : item.address),
            e: common_vendor.f(item == null ? void 0 : item.serverIds, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2 == null ? void 0 : item2.name),
                b: item2 == null ? void 0 : item2._id
              };
            }),
            f: common_vendor.f(item == null ? void 0 : item.hallTypeIds, (item3, k1, i1) => {
              return {
                a: common_vendor.t(item3 == null ? void 0 : item3.name),
                b: item3 == null ? void 0 : item3._id
              };
            }),
            g: common_vendor.f(MovieTime, (item2, k1, i1) => {
              return {
                a: common_vendor.t(item2.Time),
                b: common_vendor.n({
                  "Backcolor": BackcolorKey.value == (item2 == null ? void 0 : item2.key),
                  "Passcolor": isPass(item2 == null ? void 0 : item2.key)
                }),
                c: item2 == null ? void 0 : item2.key,
                d: common_vendor.o(($event) => Backcolor(item2), item2 == null ? void 0 : item2.key)
              };
            }),
            h: item == null ? void 0 : item._id
          };
        }),
        c: common_assets._imports_1,
        d: common_vendor.sr(toastRef, "c997f4ac-0", {
          "k": "toastRef"
        }),
        e: common_vendor.o(gocinemaSelect),
        f: common_vendor.gei(_ctx, "")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c997f4ac"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=../.sourcemap/mp-weixin/queueMovie.js.map
