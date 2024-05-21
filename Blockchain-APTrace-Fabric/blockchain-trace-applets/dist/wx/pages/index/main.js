require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(18);


// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6893c514_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6893c514"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6893c514_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6893c514", Component.options)
  } else {
    hotAPI.reload("data-v-6893c514", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			value6: 123,
			value7: 3454,
			cropsInfo: '',
			visible1: false,
			traceId: '',
			retailerInfo: '', //零售点信息
			productInfo: '', //产品信息
			blockNumber: '',
			blockInfo: ''
		};
	},


	methods: {
		getTraceId: function getTraceId(trace) {
			console.log('res   ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(trace));
			this.traceId = trace.mp.detail.value;
		},
		queryInfo: function queryInfo() {
			var _this = this;

			this.$httpBlock.get(this.$httpUrl + '/retailerapi/queryRetailerById?id=' + this.traceId).then(function (res) {
				_this.retailerInfo = res.data; //零售
				_this.$httpBlock.get(_this.$httpUrl + '/productapi/queryProductInfoByCropsId?id=' + res.data.crops_id).then(function (res) {
					_this.productInfo = res.data[0].Record; //产品信息
					var totalData = {
						product_id: _this.retailerInfo.product_id,
						crops_id: _this.retailerInfo.crops_id,
						product_name: _this.productInfo.product_name,
						retailer: _this.retailerInfo.retailer,
						retailer_name: _this.retailerInfo.retailer_name,
						retailer_tel: _this.retailerInfo.retailer_tel,
						factory: _this.productInfo.factory,
						Net_Content: _this.productInfo.Net_Content,
						workshop: _this.productInfo.workshop,
						mixed_ingredients: _this.productInfo.mixed_ingredients,
						keep_mathod: _this.productInfo.keep_mathod,
						cooking_recommend: _this.productInfo.cooking_recommend,
						work_hours: _this.productInfo.work_hours,
						leader: _this.productInfo.leader,
						leader_tel: _this.productInfo.leader_tel,
						remarks: _this.productInfo.remarks
					};
					var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(totalData);
					wx.navigateTo({
						url: '/pages/product/main?data=' + encodeURIComponent(data)
					});
				}).catch(function (err) {
					_this.msgError('查询异常 ' + err);
				});

				wx.navigateTo({
					url: '/pages/product/main?data=' + encodeURIComponent(data)
				});
			}).catch(function (err) {
				console.log('调用失败 ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(err));
			});
		}
	},

	created: function created() {
		var _this2 = this;

		this.$httpBlock.get(this.$httpUrl + '/blockexplorerapi/channelBlockInfo').then(function (res) {
			_this2.blockNumber = res.data.height.low + 10000;
			var number = Number(res.data.height.low - 1);
			_this2.$httpBlock.get(_this2.$httpUrl + '/blockexplorerapi/queryBlockInfo?number=' + number).then(function (res) {
				_this2.blockInfo = res;
			}).catch(function (err) {
				console.log('err ' + err);
			});
		});
	}
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "padding-top": "50px"
    }
  }, [_c('l-card', {
    attrs: {
      "type": "primary",
      "l-img-class": "right-card",
      "position": "left",
      "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=154562898,2539807908&fm=15&gp=0.jpg",
      "mpcomid": '0'
    }
  }, [_c('view', {
    staticClass: "content"
  }, [_vm._v("基于区块链的农产品溯源平台，凭借着区块链的不可篡改，去中心化，可追溯特性，让每件农产品从农田到餐桌整个过程透明化")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding-top": "10px"
    }
  }, [_c('l-card', {
    attrs: {
      "type": "primary",
      "l-img-class": "right-card",
      "position": "right",
      "image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2720209114,2971830483&fm=26&gp=0.jpg",
      "mpcomid": '11'
    }
  }, [_c('view', {
    staticClass: "content"
  }, [_vm._v("\n\t\t\t\t区块高度:\n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "blue",
      "mpcomid": '1'
    }
  }, [_vm._v(_vm._s(_vm.blockNumber))])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('view', {
    staticClass: "content"
  }, [_vm._v("\n\t\t\t\t参与方:\n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "green",
      "mpcomid": '2'
    }
  }, [_vm._v("种植户")]), _vm._v("\n\t\t\t\t  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "blue",
      "mpcomid": '3'
    }
  }, [_vm._v("原料厂商")]), _vm._v("\n\t\t\t\t  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "red",
      "mpcomid": '4'
    }
  }, [_vm._v("生产厂商")]), _vm._v("\n\t\t\t\t  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "yellow",
      "mpcomid": '5'
    }
  }, [_vm._v("零售商")]), _vm._v("\n\t\t\t\t  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "name": "区块高度",
      "color": "default",
      "mpcomid": '6'
    }
  }, [_vm._v("物流公司")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('view', {
    staticClass: "content"
  }, [_vm._v("\n\t\t\t\t技术：\n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "color": "default",
      "mpcomid": '7'
    }
  }, [_vm._v("Node.js")]), _vm._v("  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "color": "blue",
      "mpcomid": '8'
    }
  }, [_vm._v("Vue")]), _vm._v("  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "color": "red",
      "mpcomid": '9'
    }
  }, [_vm._v("Hyperledger Fabric")]), _vm._v("  \n\t\t\t\t"), _c('i-tag', {
    staticClass: "i-tags",
    attrs: {
      "color": "green",
      "mpcomid": '10'
    }
  }, [_vm._v("Express")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding-top": "15px",
      "padding-bottom": "15px"
    }
  }, [_c('l-notice-bar', {
    attrs: {
      "show": true,
      "type": "roll",
      "speed": "10000",
      "mpcomid": '12'
    }
  }, [_vm._v("\n\t\t              最新区块:" + _vm._s(_vm.blockInfo.data.header.data_hash) + "\n\t\t")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding-bottom": "15px"
    }
  }, [_c('div', [_c('l-search-bar', {
    attrs: {
      "shape": "circle",
      "placeholder": "溯源ID",
      "show-cancel": false,
      "eventid": '0',
      "mpcomid": '13'
    },
    on: {
      "linconfirm": _vm.queryInfo,
      "linchange": _vm.getTraceId
    }
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6893c514", esExports)
  }
}

/***/ })

},[17]);