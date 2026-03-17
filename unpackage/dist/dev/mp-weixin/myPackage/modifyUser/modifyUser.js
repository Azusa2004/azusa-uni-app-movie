"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _component_uni_file_picker = common_vendor.resolveComponent("uni-file-picker");
  _component_uni_file_picker();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0$4,
    b: common_assets._imports_1$1,
    c: _ctx.avatarUrl || "/static/avatar.png",
    d: common_vendor.o(_ctx.onAvatarSelect),
    e: common_vendor.p({
      limit: "1",
      ["file-mediatype"]: "image",
      mode: "grid",
      ["image-styles"]: _ctx.imageStyles
    }),
    f: common_assets._imports_1$1,
    g: common_assets._imports_0$4,
    h: common_assets._imports_1$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8ba7cf40"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/myPackage/modifyUser/modifyUser.js.map
