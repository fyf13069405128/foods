require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(30);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40892313_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_40892313_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\product\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40892313", Component.options)
  } else {
    hotAPI.reload("data-v-40892313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
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
			productData: '',
			current: 'homepage',
			cropsProcessDetailsArray: [],
			cropsDriverArray: [],
			operationArray: [],
			machingInfo: '',
			cropsDetails: '',
			verticalCurrent: 2,
			len: '',
			showDriver: false,
			showPlant: false,
			showMaching: false,
			showProcess: false,
			showCropsInfo: false,
			photo: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=154562898,2539807908&fm=15&gp=0.jpg']
		};
	},


	methods: {
		traceCropsInfo: function traceCropsInfo() {
			var _this = this;

			this.showCropsInfo = true;
			this.showDriver = false;
			this.showMaching = false;
			this.showPlant = false;
			this.showProcess = false;
			this.$httpBlock.get(this.$httpUrl + '/farmerapi/queryCropsById?id=' + this.productData.crops_id).then(function (res) {
				_this.cropsDetails = res.data;
			}).catch(function (err) {});
		},
		productProcess: function productProcess() {
			var _this2 = this;

			this.showProcess = true;
			this.showCropsInfo = false;
			this.showDriver = false;
			this.showMaching = false;
			this.showPlant = false;
			this.$httpBlock.get(this.$httpUrl + '/productapi/queryOperationByCropsId?id=' + this.productData.crops_id).then(function (res) {
				var array = [];
				for (var i = 0; i < res.data.length; i++) {
					array.push(res.data[i].Record);
				}
				_this2.operationArray = array;
			}).catch(function (err) {
				_this2.msgError('查询异常 ' + err);
			});
		},
		traceCheck: function traceCheck() {
			var _this3 = this;

			this.showMaching = true;
			this.showCropsInfo = false;
			this.showDriver = false;
			this.showPlant = false;
			this.showProcess = false;
			this.$httpBlock.get(this.$httpUrl + '/materialapi/queryMachiningByCropsId?id=' + this.productData.crops_id).then(function (res) {
				_this3.machingInfo = res.data[0].Record;
			}).catch(function (err) {});
		},
		traceDriver: function traceDriver() {
			var _this4 = this;

			this.showDriver = true;
			this.showCropsInfo = false;
			this.showMaching = false;
			this.showPlant = false;
			this.showProcess = false;
			this.$httpBlock.get(this.$httpUrl + '/driverapi/queryTransportByCropsId?id=' + this.productData.crops_id).then(function (res) {
				var array = [];
				_this4.len = res.data.length;
				for (var i = 0; i < res.data.length; i++) {
					array.push(res.data[i].Record);
				}
				_this4.cropsDriverArray = array;
				console.log("array " + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(array));
			}).catch(function (err) {});
		},
		tracePlant: function tracePlant() {
			var _this5 = this;

			this.showPlant = true;
			this.showCropsInfo = false;
			this.showDriver = false;
			this.showMaching = false;
			this.showProcess = false;
			this.$httpBlock.get(this.$httpUrl + '/farmerapi/queryCropsProcessByCropsId?id=' + this.productData.crops_id).then(function (res) {
				var array = [];
				for (var i = 0; i < res.data.length; i++) {
					array.push(res.data[i].Record);
				}
				_this5.cropsProcessDetailsArray = array;
				console.log("array " + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(array));
			}).catch(function (err) {});
		},
		handleChange: function handleChange(_ref) {
			var detail = _ref.detail;

			current: detail.key;
		},
		query: function query() {
			this.$httpBlock.get(this.$httpUrl + '/retailerapi/queryRetailerById?id=' + this.productData.crops_id).then(function (res) {
				wx.navigateTo({
					url: '/pages/product/main'
				});
				console.log('res ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res.data));
			}).catch(function (err) {
				console.log('调用失败 ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(err));
			});
		}
	},

	created: function created() {},
	mounted: function mounted() {
		this.productData = JSON.parse(decodeURIComponent(this.$root.$mp.query.data));
	}
});

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-divider', {
    attrs: {
      "color": "#2d8cf0",
      "lineColor": "#2d8cf0",
      "mpcomid": '0'
    }
  }, [_vm._v("零售商")]), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.product_id,
      "title": "产品ID",
      "disabled": "",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.product_name,
      "title": "产品名称",
      "disabled": "",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.retailer,
      "title": "零售点",
      "disabled": "",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.retailer_name,
      "title": "零售店负责人",
      "disabled": "",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.retailer_tel,
      "title": "零售店负责人电话",
      "disabled": "",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('i-divider', {
    attrs: {
      "color": "#2d8cf0",
      "lineColor": "#2d8cf0",
      "mpcomid": '6'
    }
  }, [_vm._v("产品基本信息")]), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.factory,
      "title": "生产厂商",
      "disabled": "",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.leader,
      "title": "生产厂商负责人",
      "disabled": "",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.leader_tel,
      "title": "生产厂商负责人电话",
      "disabled": "",
      "mpcomid": '9'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.Net_Content,
      "title": "净含量",
      "disabled": "",
      "mpcomid": '10'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.workshop,
      "title": "生产车间",
      "disabled": "",
      "mpcomid": '11'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.work_hours,
      "title": "生产工时",
      "disabled": "",
      "mpcomid": '12'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.keep_mathod,
      "title": "保存方法",
      "disabled": "",
      "mpcomid": '13'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.cooking_recommend,
      "title": "食用推荐",
      "disabled": "",
      "mpcomid": '14'
    }
  }), _vm._v(" "), _c('i-input', {
    attrs: {
      "value": _vm.productData.remarks,
      "title": "备注",
      "disabled": "",
      "mpcomid": '15'
    }
  }), _vm._v(" "), _c('i-divider', {
    attrs: {
      "color": "#2d8cf0",
      "lineColor": "#2d8cf0",
      "mpcomid": '16'
    }
  }, [_vm._v("溯源更多信息")]), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '27'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "5",
      "i-class": "col-class",
      "mpcomid": '18'
    }
  }, [_c('i-tab-bar-item', {
    attrs: {
      "color": "#f759ab",
      "icon": "homepage",
      "current-icon": "activity_fill",
      "title": "种植过程",
      "eventid": '0',
      "mpcomid": '17'
    },
    on: {
      "click": _vm.tracePlant
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "5",
      "i-class": "col-class",
      "mpcomid": '20'
    }
  }, [_c('i-tab-bar-item', {
    attrs: {
      "color": "#2d8cf0",
      "icon": "coordinates_fill",
      "current-icon": "coordinates_fill",
      "title": "流通行为",
      "eventid": '1',
      "mpcomid": '19'
    },
    on: {
      "click": _vm.traceDriver
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "5",
      "i-class": "col-class",
      "mpcomid": '22'
    }
  }, [_c('i-tab-bar-item', {
    attrs: {
      "color": "#19be6b",
      "icon": "task_fill",
      "current-icon": "task_fill",
      "title": "厂商质检",
      "eventid": '2',
      "mpcomid": '21'
    },
    on: {
      "click": _vm.traceCheck
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "5",
      "i-class": "col-class",
      "mpcomid": '24'
    }
  }, [_c('i-tab-bar-item', {
    attrs: {
      "color": "#ff9900",
      "icon": "createtask_fill",
      "current-icon": "create_fill",
      "title": "生产行为",
      "eventid": '3',
      "mpcomid": '23'
    },
    on: {
      "click": _vm.productProcess
    }
  })], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "4",
      "i-class": "col-class",
      "mpcomid": '26'
    }
  }, [_c('i-tab-bar-item', {
    attrs: {
      "color": "#80848f",
      "icon": "shop_fill",
      "current-icon": "shop_fill",
      "title": "农产信息",
      "eventid": '4',
      "mpcomid": '25'
    },
    on: {
      "click": _vm.traceCropsInfo
    }
  })], 1)], 1), _vm._v(" "), _vm._l((_vm.cropsProcessDetailsArray), function(detail, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.showPlant),
        expression: "showPlant"
      }],
      key: index,
      staticStyle: {
        "padding-top": "1.25rem"
      }
    }, [_c('i-card', {
      attrs: {
        "title": detail.crops_grow_id,
        "thumb": detail.crops_grow_photo_url,
        "mpcomid": '35_' + index
      }
    }, [_c('l-album', {
      attrs: {
        "urls": _vm.photo,
        "mpcomid": '28_' + index
      }
    }), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.grow_status,
        "title": "生长情况",
        "disabled": "",
        "mpcomid": '29_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.illumination_status,
        "title": "光照情况",
        "disabled": "",
        "mpcomid": '30_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.water_content,
        "title": "水分",
        "disabled": "",
        "mpcomid": '31_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.temperature,
        "title": "温度",
        "disabled": "",
        "mpcomid": '32_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.record_time,
        "title": "记录时间",
        "disabled": "",
        "mpcomid": '33_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.remarks,
        "title": "备注",
        "disabled": "",
        "mpcomid": '34_' + index
      }
    })], 1)], 1)], 1)
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDriver),
      expression: "showDriver"
    }],
    staticStyle: {
      "padding-top": "1.25rem"
    }
  }, [_c('i-steps', {
    attrs: {
      "current": _vm.len,
      "direction": "vertical",
      "mpcomid": '37'
    }
  }, _vm._l((_vm.cropsDriverArray), function(detail, index) {
    return _c('i-step', {
      key: index,
      attrs: {
        "mpcomid": '36_' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_vm._v("物流ID:" + _vm._s(detail.transport_id))]), _vm._v(" "), _c('view', {
      slot: "content"
    }, [_vm._v("经过地:" + _vm._s(detail.transport_to_address))]), _vm._v(" "), _c('view', {
      slot: "content"
    }, [_vm._v("时间:" + _vm._s(detail.transport_to_chain_time))]), _vm._v(" "), _c('view', {
      slot: "content"
    }, [_vm._v("司机:" + _vm._s(detail.driver_name))]), _vm._v(" "), _c('view', {
      slot: "content"
    }, [_vm._v("电话:" + _vm._s(detail.driver_tel))]), _vm._v(" "), _c('view', {
      slot: "content"
    }, [_vm._v("备注:" + _vm._s(detail.remarks))])])
  }))], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMaching),
      expression: "showMaching"
    }],
    staticStyle: {
      "padding-top": "1.25rem"
    }
  }, [_c('i-card', {
    attrs: {
      "title": _vm.machingInfo.machining_id,
      "thumb": _vm.machingInfo.testing_photo_url,
      "mpcomid": '45'
    }
  }, [_c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.leader,
      "title": "负责人",
      "disabled": "",
      "mpcomid": '38'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.leader_tel,
      "title": "电话",
      "disabled": "",
      "mpcomid": '39'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.factory_name,
      "title": "原料厂商",
      "disabled": "",
      "mpcomid": '40'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.in_factory_time,
      "title": "入厂时间",
      "disabled": "",
      "mpcomid": '41'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.out_factory_time,
      "title": "出厂时间",
      "disabled": "",
      "mpcomid": '42'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.testing_result,
      "title": "检测结果",
      "disabled": "",
      "mpcomid": '43'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.machingInfo.remarks,
      "title": "备注",
      "disabled": "",
      "mpcomid": '44'
    }
  })], 1)])], 1), _vm._v(" "), _vm._l((_vm.operationArray), function(detail, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.showProcess),
        expression: "showProcess"
      }],
      key: index,
      staticStyle: {
        "padding-top": "1.25rem"
      }
    }, [_c('i-card', {
      attrs: {
        "title": detail.operation_id,
        "mpcomid": '51_' + index
      }
    }, [_c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.operation_people_name,
        "title": "员工",
        "disabled": "",
        "mpcomid": '46_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.operation_people_tel,
        "title": "电话",
        "disabled": "",
        "mpcomid": '47_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.work_content,
        "title": "操作内容",
        "disabled": "",
        "mpcomid": '48_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.time,
        "title": "时间",
        "disabled": "",
        "mpcomid": '49_' + index
      }
    })], 1), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_c('i-input', {
      attrs: {
        "value": detail.remarks,
        "title": "备注",
        "disabled": "",
        "mpcomid": '50_' + index
      }
    })], 1)])], 1)
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showCropsInfo),
      expression: "showCropsInfo"
    }],
    staticStyle: {
      "padding-top": "1.25rem"
    }
  }, [_c('i-card', {
    attrs: {
      "title": _vm.cropsDetails.crops_id,
      "mpcomid": '66'
    }
  }, [_c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.crops_name,
      "title": "农产名字",
      "disabled": "",
      "mpcomid": '52'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.farmer_name,
      "title": "种植户",
      "disabled": "",
      "mpcomid": '53'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.farmer_tel,
      "title": "电话",
      "disabled": "",
      "mpcomid": '54'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.address,
      "title": "地址",
      "disabled": "",
      "mpcomid": '55'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.plant_mode,
      "title": "种植方式",
      "disabled": "",
      "mpcomid": '56'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.year,
      "title": "年度",
      "disabled": "",
      "mpcomid": '57'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.bagging_status,
      "title": "套袋方式",
      "disabled": "",
      "mpcomid": '58'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.fertilizer_name,
      "title": "使用肥料",
      "disabled": "",
      "mpcomid": '59'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.grow_seedlings_cycle,
      "title": "育苗周期",
      "disabled": "",
      "mpcomid": '60'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.irrigation_cycle,
      "title": "灌溉周期",
      "disabled": "",
      "mpcomid": '61'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.weed_cycle,
      "title": "除草周期",
      "disabled": "",
      "mpcomid": '62'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.apply_fertilizer_cycle,
      "title": "施肥周期",
      "disabled": "",
      "mpcomid": '63'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.register_time,
      "title": "注册时间",
      "disabled": "",
      "mpcomid": '64'
    }
  })], 1), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_c('i-input', {
    attrs: {
      "value": _vm.cropsDetails.remarks,
      "title": "备注",
      "disabled": "",
      "mpcomid": '65'
    }
  })], 1)])], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40892313", esExports)
  }
}

/***/ })

},[29]);