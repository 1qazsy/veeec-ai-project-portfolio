(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 24));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFHbkI7QUFBcUI7QUFBQTtBQUNyQkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBQ2hDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBQ2xCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gICAgLi4uQXBwXG59KVxuYXBwLiRtb3VudCgpXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!****************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/pages.json ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});
__definePage('components/veeecai-verification-code/index', function () {
  return Vue.extend(__webpack_require__(/*! components/veeecai-verification-code/index.vue?mpType=page */ 19).default);
});

/***/ }),
/* 7 */
/*!***************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/pages/index/index.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("button", {
        staticClass: _vm._$s(1, "sc", "btn-submit"),
        attrs: { _i: 1 },
        on: { click: _vm.btnSubmit },
      }),
      _c("captcha", {
        ref: "captcha",
        attrs: { config: _vm.config, _i: 2 },
        on: {
          captchaSuccess: _vm.captchaSuccess,
          captchaClose: _vm.captchaClose,
        },
      }),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../../components/veeecai-verification-code/index.vue */ 13));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      config: {\n        captchaId: \"dd68c10db501ee386f3b0387842d29d0\",\n        type: \"WebView\"\n      }\n    };\n  },\n  mounted: function mounted() {\n    // 此处为web场景下接入方式\n  },\n  components: {\n    captcha: _index.default\n  },\n  methods: {\n    myclick: function myclick() {\n      window.VecccaiAiVerificationCode.init({\n        onSuccess: function onSuccess(data) {\n          window.VecccaiAiVerificationCode.hide();\n        },\n        onClose: function onClose(data) {\n          window.VecccaiAiVerificationCode.hide();\n        },\n        dom: 'captcha'\n      });\n    },\n    captchaSuccess: function captchaSuccess(result) {\n      // app端的回调\n      __f__(\"log\", result, \" at pages/index/index.vue:52\");\n    },\n    captchaClose: function captchaClose() {// app端的回调\n\n      // uni.showToast({\n      // \ttitle: 'captchaClose',\n      // \ticon: \"none\",\n      // \tduration: 2000,\n      // });\n    },\n    btnSubmit: function btnSubmit() {\n      // app端bind模式唤醒验证码的方法\n      this.$refs.captcha.showCaptcha();\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJjb25maWciLCJjYXB0Y2hhSWQiLCJ0eXBlIiwibW91bnRlZCIsImNvbXBvbmVudHMiLCJjYXB0Y2hhIiwibWV0aG9kcyIsIm15Y2xpY2siLCJ3aW5kb3ciLCJWZWNjY2FpQWlWZXJpZmljYXRpb25Db2RlIiwiaW5pdCIsIm9uU3VjY2VzcyIsImhpZGUiLCJvbkNsb3NlIiwiZG9tIiwiY2FwdGNoYVN1Y2Nlc3MiLCJyZXN1bHQiLCJjYXB0Y2hhQ2xvc2UiLCJidG5TdWJtaXQiLCIkcmVmcyIsInNob3dDYXB0Y2hhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBaUJBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEsZUFHZTtFQUNkQSxJQUFJLGtCQUFHO0lBQ04sT0FBTztNQUNOQyxNQUFNLEVBQUU7UUFDUEMsU0FBUyxFQUFFLGtDQUFrQztRQUM3Q0MsSUFBSSxFQUFFO01BQ1A7SUFDRCxDQUFDO0VBQ0YsQ0FBQztFQUNEQyxPQUFPLHFCQUFHO0lBQ1Q7RUFBQSxDQU1BO0VBQ0RDLFVBQVUsRUFBRTtJQUNYQyxPQUFPLEVBQVBBO0VBQ0QsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDUkMsT0FBTyxxQkFBRztNQUNUQyxNQUFNLENBQUNDLHlCQUF5QixDQUFDQyxJQUFJLENBQUM7UUFDckNDLFNBQVMsRUFBRSxtQkFBQ1osSUFBSSxFQUFLO1VBQ3BCUyxNQUFNLENBQUNDLHlCQUF5QixDQUFDRyxJQUFJLEVBQUU7UUFDeEMsQ0FBQztRQUNEQyxPQUFPLEVBQUUsaUJBQUNkLElBQUksRUFBSztVQUNsQlMsTUFBTSxDQUFDQyx5QkFBeUIsQ0FBQ0csSUFBSSxFQUFFO1FBQ3hDLENBQUM7UUFDREUsR0FBRyxFQUFFO01BQ04sQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxjQUFjLDBCQUFDQyxNQUFNLEVBQUU7TUFBRTtNQUN4QixhQUFZQSxNQUFNO0lBQ25CLENBQUM7SUFDREMsWUFBWSwwQkFBRyxDQUFFOztNQUVoQjtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQUEsQ0FDQTtJQUNEQyxTQUFTLEVBQUUscUJBQVc7TUFBRTtNQUN2QixJQUFJLENBQUNDLEtBQUssQ0FBQ2QsT0FBTyxDQUFDZSxXQUFXLEVBQUU7SUFDakM7RUFDRDtBQUNELENBQUM7QUFBQSwyQiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBjYXB0Y2hhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3ZlZWVjYWktdmVyaWZpY2F0aW9uLWNvZGUvaW5kZXgudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRjYXB0Y2hhSWQ6IFwiZGQ2OGMxMGRiNTAxZWUzODZmM2IwMzg3ODQyZDI5ZDBcIixcblx0XHRcdFx0dHlwZTogXCJXZWJWaWV3XCJcblx0XHRcdH0sXG5cdFx0fTtcblx0fSxcblx0bW91bnRlZCgpIHtcblx0XHQvLyDmraTlpITkuLp3ZWLlnLrmma/kuIvmjqXlhaXmlrnlvI9cblxuXG5cblxuXG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRjYXB0Y2hhLFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0bXljbGljaygpIHtcblx0XHRcdHdpbmRvdy5WZWNjY2FpQWlWZXJpZmljYXRpb25Db2RlLmluaXQoe1xuXHRcdFx0XHRvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0d2luZG93LlZlY2NjYWlBaVZlcmlmaWNhdGlvbkNvZGUuaGlkZSgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQ2xvc2U6IChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0d2luZG93LlZlY2NjYWlBaVZlcmlmaWNhdGlvbkNvZGUuaGlkZSgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRvbTogJ2NhcHRjaGEnLFxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRjYXB0Y2hhU3VjY2VzcyhyZXN1bHQpIHsgLy8gYXBw56uv55qE5Zue6LCDXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpXG5cdFx0fSxcblx0XHRjYXB0Y2hhQ2xvc2UoKSB7IC8vIGFwcOerr+eahOWbnuiwg1xuXHRcdFx0XG5cdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdC8vIFx0dGl0bGU6ICdjYXB0Y2hhQ2xvc2UnLFxuXHRcdFx0Ly8gXHRpY29uOiBcIm5vbmVcIixcblx0XHRcdC8vIFx0ZHVyYXRpb246IDIwMDAsXG5cdFx0XHQvLyB9KTtcblx0XHR9LFxuXHRcdGJ0blN1Ym1pdDogZnVuY3Rpb24oKSB7IC8vIGFwcOerr2JpbmTmqKHlvI/llKTphpLpqozor4HnoIHnmoTmlrnms5Vcblx0XHRcdHRoaXMuJHJlZnMuY2FwdGNoYS5zaG93Q2FwdGNoYSgpO1xuXHRcdH0sXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!****************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=28338546& */ 14);\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/veeecai-verification-code/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODMzODU0NiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdmVlZWNhaS12ZXJpZmljYXRpb24tY29kZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***********************************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=template&id=28338546& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=28338546& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_28338546___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=template&id=28338546& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "geetest_component"),
    attrs: { _i: 0 },
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*****************************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ 17);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlzQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\nvar _default2 = {\n  data: function data() {\n    return {\n      wv: null,\n      lastTime: \"\",\n      defaultConfig: {\n        clientVersion: \"uniapp-v1.0\",\n        clientType: uni.getSystemInfoSync().platform,\n        protocol: \"http://\",\n        mi: {\n          geeid: {\n            bd: \"\",\n            d: \"\",\n            e: \"\",\n            fp: \"\",\n            ts: \"\",\n            ver: \"\",\n            client_type: \"\"\n          },\n          packageName: \"\",\n          displayName: \"\",\n          appVer: \"\",\n          build: \"\",\n          clientVersion: \"\",\n          process_id: \"\",\n          process_id_test: \"\",\n          zid: \"\"\n        }\n      }\n    };\n  },\n  props: {\n    config: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  mounted: function mounted() {},\n  methods: {\n    showCaptcha: function showCaptcha() {\n      var that = this;\n      if (this.wv !== null) {\n        // uni.showToast({\n        // \ttitle: 'show',\n        // \ticon: \"none\",\n        // \tduration: 2000,\n        // });\n\n        this.wv.show();\n        return;\n      } else {\n        // uni.showToast({\n        // \ttitle: 'create',\n        // \ticon: \"none\",\n        // \tduration: 2000,\n        // });\n        // 合并参数\n        _assign(this.defaultConfig, this.config, {\n          challenge: this.getUuid()\n        }); //每次更新challenge\n\n        // 创建webview\n        this.wv = plus.webview.create(\"hybrid/html/veeecai-verification-code/index.html?data=\".concat(encodeURIComponent(JSON.stringify(this.defaultConfig))), \"gt_webview\", {\n          background: \"transparent\",\n          width: \"100%\",\n          //String类型,窗口的宽度.支持百分比、像素值，默认为100%.未设置width属性值时,可同时设置left和right属性值改变窗口的默认宽度.\n          height: \"100%\"\n        });\n\n        // 获取webview\n        var currentWebview = this.$root.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效\n        currentWebview.append(this.wv);\n        plus.globalEvent.addEventListener(\"plusMessage\", function (msg) {\n          //有重复推送问题\n          var result = msg.data.args.data;\n          if (result.name == \"postMessage\") {\n            if (result.arg.time && result.arg.time === that.lastTime) {\n              // 处理uni连续推送bug\n              return;\n            }\n            that.lastTime = result.arg.time;\n            switch (result.arg.type) {\n              case \"close\":\n                that.captchaClose();\n                break;\n              case \"success\":\n                // uni.showToast({\n                // \ttitle: 'success',\n                // \ticon: \"none\",\n                // \tduration: 2000,\n                // });\n                that.captchaSuccess(result.arg.data);\n                break;\n              default:\n                break;\n            }\n          }\n        });\n      }\n\n      // this.wv.overrideUrlLoading(\n      //   {\n      //     mode: \"reject\",\n      //   },\n      //   (e) => {\n      //     plus.runtime.openURL(e.url);\n      //   }\n      // );\n    },\n    captchaSuccess: function captchaSuccess(data) {\n      this.$emit(\"captchaSuccess\", data);\n      this.wv.hide();\n    },\n    captchaClose: function captchaClose() {\n      this.$emit(\"captchaClose\");\n      this.wv.hide();\n    },\n    getAppWebview: function getAppWebview(that) {\n      if (that.$scope) {\n        return that.$scope.$getAppWebview();\n      } else {\n        this.getAppWebview(that.$parent);\n      }\n    },\n    getUuid: function getUuid() {\n      return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0;\n        var v = c === \"x\" ? r : r & 0x3 | 0x8;\n        return v.toString(16);\n      });\n    }\n  }\n};\nexports.default = _default2;\nfunction _assign(target) {\n  if (typeof Object.assign === \"function\") {\n    return Object.assign.apply(Object, arguments);\n  }\n  if (target == null) {\n    throw new Error(\"Cannot convert undefined or null to object\");\n  }\n  var newTarget = Object(target);\n  for (var index = 1; index < arguments.length; index++) {\n    var source = arguments[index];\n    if (source !== null) {\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          newTarget[key] = source[key];\n        }\n      }\n    }\n  }\n  return newTarget;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92ZWVlY2FpLXZlcmlmaWNhdGlvbi1jb2RlL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwid3YiLCJsYXN0VGltZSIsImRlZmF1bHRDb25maWciLCJjbGllbnRWZXJzaW9uIiwiY2xpZW50VHlwZSIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJwcm90b2NvbCIsIm1pIiwiZ2VlaWQiLCJiZCIsImQiLCJlIiwiZnAiLCJ0cyIsInZlciIsImNsaWVudF90eXBlIiwicGFja2FnZU5hbWUiLCJkaXNwbGF5TmFtZSIsImFwcFZlciIsImJ1aWxkIiwicHJvY2Vzc19pZCIsInByb2Nlc3NfaWRfdGVzdCIsInppZCIsInByb3BzIiwiY29uZmlnIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtb3VudGVkIiwibWV0aG9kcyIsInNob3dDYXB0Y2hhIiwidGhhdCIsInNob3ciLCJfYXNzaWduIiwiY2hhbGxlbmdlIiwiZ2V0VXVpZCIsInBsdXMiLCJ3ZWJ2aWV3IiwiY3JlYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnRXZWJ2aWV3IiwiJHJvb3QiLCIkc2NvcGUiLCIkZ2V0QXBwV2VidmlldyIsImFwcGVuZCIsImdsb2JhbEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1zZyIsInJlc3VsdCIsImFyZ3MiLCJuYW1lIiwiYXJnIiwidGltZSIsImNhcHRjaGFDbG9zZSIsImNhcHRjaGFTdWNjZXNzIiwiJGVtaXQiLCJoaWRlIiwiZ2V0QXBwV2VidmlldyIsIiRwYXJlbnQiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwidiIsInRvU3RyaW5nIiwidGFyZ2V0IiwiYXNzaWduIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJFcnJvciIsIm5ld1RhcmdldCIsImluZGV4IiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQSxnQkFFZTtFQUNiQSxJQUFJLGtCQUFHO0lBQ0wsT0FBTztNQUNMQyxFQUFFLEVBQUUsSUFBSTtNQUNSQyxRQUFRLEVBQUUsRUFBRTtNQUNaQyxhQUFhLEVBQUU7UUFDYkMsYUFBYSxFQUFFLGFBQWE7UUFDNUJDLFVBQVUsRUFBRUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDQyxRQUFRO1FBQzVDQyxRQUFRLEVBQUUsU0FBUztRQUNuQkMsRUFBRSxFQUFFO1VBQ0ZDLEtBQUssRUFBRTtZQUNMQyxFQUFFLEVBQUUsRUFBRTtZQUNOQyxDQUFDLEVBQUUsRUFBRTtZQUNMQyxDQUFDLEVBQUUsRUFBRTtZQUNMQyxFQUFFLEVBQUUsRUFBRTtZQUNOQyxFQUFFLEVBQUUsRUFBRTtZQUNOQyxHQUFHLEVBQUUsRUFBRTtZQUNQQyxXQUFXLEVBQUU7VUFDZixDQUFDO1VBQ0RDLFdBQVcsRUFBRSxFQUFFO1VBQ2ZDLFdBQVcsRUFBRSxFQUFFO1VBQ2ZDLE1BQU0sRUFBRSxFQUFFO1VBQ1ZDLEtBQUssRUFBRSxFQUFFO1VBQ1RsQixhQUFhLEVBQUUsRUFBRTtVQUNqQm1CLFVBQVUsRUFBRSxFQUFFO1VBQ2RDLGVBQWUsRUFBRSxFQUFFO1VBQ25CQyxHQUFHLEVBQUU7UUFDUDtNQUNGO0lBQ0YsQ0FBQztFQUNILENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0xDLE1BQU0sRUFBRTtNQUNOQyxJQUFJLEVBQUVDLE1BQU07TUFDWkMsT0FBTyxFQUFFLG9CQUFZO1FBQ25CLE9BQU8sQ0FBQyxDQUFDO01BQ1g7SUFDRjtFQUNGLENBQUM7RUFDREMsT0FBTyxxQkFBRyxDQUFDLENBQUM7RUFDWkMsT0FBTyxFQUFFO0lBQ1BDLFdBQVcseUJBQUc7TUFDWixJQUFJQyxJQUFJLEdBQUcsSUFBSTtNQUduQixJQUFHLElBQUksQ0FBQ2pDLEVBQUUsS0FBSyxJQUFJLEVBQUM7UUFDbkI7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQSxJQUFJLENBQUNBLEVBQUUsQ0FBQ2tDLElBQUksRUFBRTtRQUNkO01BRUQsQ0FBQyxNQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0FDLE9BQU8sQ0FBQyxJQUFJLENBQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDd0IsTUFBTSxFQUFFO1VBQ3ZDVSxTQUFTLEVBQUUsSUFBSSxDQUFDQyxPQUFPO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRUo7UUFDQSxJQUFJLENBQUNyQyxFQUFFLEdBQUdzQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxpRUFDOEJDLGtCQUFrQixDQUN6RUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDekMsYUFBYSxDQUFDLENBQ25DLEdBQ0QsWUFBWSxFQUNaO1VBQ0UwQyxVQUFVLEVBQUUsYUFBYTtVQUN6QkMsS0FBSyxFQUFFLE1BQU07VUFBRTtVQUNmQyxNQUFNLEVBQUU7UUFDVixDQUFDLENBQ0Y7O1FBR0Q7UUFDQSxJQUFJQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN6REgsY0FBYyxDQUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDbkQsRUFBRSxDQUFDO1FBRTlCc0MsSUFBSSxDQUFDYyxXQUFXLENBQUNDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxVQUFDQyxHQUFHLEVBQUs7VUFDeEQ7VUFDQSxJQUFNQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ3ZELElBQUksQ0FBQ3lELElBQUksQ0FBQ3pELElBQUk7VUFDakMsSUFBSXdELE1BQU0sQ0FBQ0UsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNoQyxJQUFJRixNQUFNLENBQUNHLEdBQUcsQ0FBQ0MsSUFBSSxJQUFLSixNQUFNLENBQUNHLEdBQUcsQ0FBQ0MsSUFBSSxLQUFLMUIsSUFBSSxDQUFDaEMsUUFBUSxFQUFFO2NBR3pEO2NBQ0E7WUFDRjtZQUNBZ0MsSUFBSSxDQUFDaEMsUUFBUSxHQUFHc0QsTUFBTSxDQUFDRyxHQUFHLENBQUNDLElBQUk7WUFDL0IsUUFBUUosTUFBTSxDQUFDRyxHQUFHLENBQUMvQixJQUFJO2NBRXJCLEtBQUssT0FBTztnQkFFVk0sSUFBSSxDQUFDMkIsWUFBWSxFQUFFO2dCQUNuQjtjQUNGLEtBQUssU0FBUztnQkFDakI7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0szQixJQUFJLENBQUM0QixjQUFjLENBQUNOLE1BQU0sQ0FBQ0csR0FBRyxDQUFDM0QsSUFBSSxDQUFDO2dCQUNwQztjQUNGO2dCQUNFO1lBQU07VUFFWjtRQUNGLENBQUMsQ0FBQztNQUNIOztNQUlJO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFHRixDQUFDO0lBRUQ4RCxjQUFjLDBCQUFDOUQsSUFBSSxFQUFFO01BQ25CLElBQUksQ0FBQytELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRS9ELElBQUksQ0FBQztNQUNsQyxJQUFJLENBQUNDLEVBQUUsQ0FBQytELElBQUksRUFBRTtJQUNoQixDQUFDO0lBQ0RILFlBQVksMEJBQUc7TUFDYixJQUFJLENBQUNFLEtBQUssQ0FBQyxjQUFjLENBQUM7TUFDMUIsSUFBSSxDQUFDOUQsRUFBRSxDQUFDK0QsSUFBSSxFQUFFO0lBQ2hCLENBQUM7SUFDREMsYUFBYSx5QkFBQy9CLElBQUksRUFBRTtNQUNsQixJQUFJQSxJQUFJLENBQUNnQixNQUFNLEVBQUU7UUFDZixPQUFPaEIsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDQyxjQUFjLEVBQUU7TUFDckMsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDYyxhQUFhLENBQUMvQixJQUFJLENBQUNnQyxPQUFPLENBQUM7TUFDbEM7SUFDRixDQUFDO0lBQ0Q1QixPQUFPLHFCQUFHO01BQ1IsT0FBTyxzQ0FBc0MsQ0FBQzZCLE9BQU8sQ0FDbkQsT0FBTyxFQUNQLFVBQVVDLENBQUMsRUFBRTtRQUNYLElBQU1DLENBQUMsR0FBSUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUksQ0FBQztRQUNsQyxJQUFNQyxDQUFDLEdBQUdKLENBQUMsS0FBSyxHQUFHLEdBQUdDLENBQUMsR0FBSUEsQ0FBQyxHQUFHLEdBQUcsR0FBSSxHQUFHO1FBQ3pDLE9BQU9HLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztNQUN2QixDQUFDLENBQ0Y7SUFDSDtFQUNGO0FBQ0YsQ0FBQztBQUFBO0FBRUQsU0FBU3JDLE9BQU8sQ0FBQ3NDLE1BQU0sRUFBRTtFQUN2QixJQUFJLE9BQU83QyxNQUFNLENBQUM4QyxNQUFNLEtBQUssVUFBVSxFQUFFO0lBQ3ZDLE9BQU85QyxNQUFNLENBQUM4QyxNQUFNLENBQUNDLEtBQUssQ0FBQy9DLE1BQU0sRUFBRWdELFNBQVMsQ0FBQztFQUMvQztFQUNBLElBQUlILE1BQU0sSUFBSSxJQUFJLEVBQUU7SUFDbEIsTUFBTSxJQUFJSSxLQUFLLENBQUMsNENBQTRDLENBQUM7RUFDL0Q7RUFFQSxJQUFNQyxTQUFTLEdBQUdsRCxNQUFNLENBQUM2QyxNQUFNLENBQUM7RUFDaEMsS0FBSyxJQUFJTSxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUdILFNBQVMsQ0FBQ0ksTUFBTSxFQUFFRCxLQUFLLEVBQUUsRUFBRTtJQUNyRCxJQUFNRSxNQUFNLEdBQUdMLFNBQVMsQ0FBQ0csS0FBSyxDQUFDO0lBQy9CLElBQUlFLE1BQU0sS0FBSyxJQUFJLEVBQUU7TUFDbkIsS0FBSyxJQUFNQyxHQUFHLElBQUlELE1BQU0sRUFBRTtRQUN4QixJQUFJckQsTUFBTSxDQUFDdUQsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0osTUFBTSxFQUFFQyxHQUFHLENBQUMsRUFBRTtVQUNyREosU0FBUyxDQUFDSSxHQUFHLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxHQUFHLENBQUM7UUFDOUI7TUFDRjtJQUNGO0VBQ0Y7RUFDQSxPQUFPSixTQUFTO0FBQ2xCIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHd2OiBudWxsLFxuICAgICAgbGFzdFRpbWU6IFwiXCIsXG4gICAgICBkZWZhdWx0Q29uZmlnOiB7XG4gICAgICAgIGNsaWVudFZlcnNpb246IFwidW5pYXBwLXYxLjBcIixcbiAgICAgICAgY2xpZW50VHlwZTogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0sXG4gICAgICAgIHByb3RvY29sOiBcImh0dHA6Ly9cIixcbiAgICAgICAgbWk6IHtcbiAgICAgICAgICBnZWVpZDoge1xuICAgICAgICAgICAgYmQ6IFwiXCIsXG4gICAgICAgICAgICBkOiBcIlwiLFxuICAgICAgICAgICAgZTogXCJcIixcbiAgICAgICAgICAgIGZwOiBcIlwiLFxuICAgICAgICAgICAgdHM6IFwiXCIsXG4gICAgICAgICAgICB2ZXI6IFwiXCIsXG4gICAgICAgICAgICBjbGllbnRfdHlwZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhY2thZ2VOYW1lOiBcIlwiLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlwiLFxuICAgICAgICAgIGFwcFZlcjogXCJcIixcbiAgICAgICAgICBidWlsZDogXCJcIixcbiAgICAgICAgICBjbGllbnRWZXJzaW9uOiBcIlwiLFxuICAgICAgICAgIHByb2Nlc3NfaWQ6IFwiXCIsXG4gICAgICAgICAgcHJvY2Vzc19pZF90ZXN0OiBcIlwiLFxuICAgICAgICAgIHppZDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93Q2FwdGNoYSgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuXHRcdFxuXHRcdGlmKHRoaXMud3YgIT09IG51bGwpe1xuXHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHQvLyBcdHRpdGxlOiAnc2hvdycsXG5cdFx0XHQvLyBcdGljb246IFwibm9uZVwiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdC8vIH0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnd2LnNob3coKTtcblx0XHRcdHJldHVybiBcblx0XHRcdFxuXHRcdH1lbHNle1xuXHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHQvLyBcdHRpdGxlOiAnY3JlYXRlJyxcblx0XHRcdC8vIFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHQvLyBcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0Ly8gfSk7XG5cdFx0XHQvLyDlkIjlubblj4LmlbBcblx0XHRcdF9hc3NpZ24odGhpcy5kZWZhdWx0Q29uZmlnLCB0aGlzLmNvbmZpZywge1xuXHRcdFx0ICBjaGFsbGVuZ2U6IHRoaXMuZ2V0VXVpZCgpLFxuXHRcdFx0fSk7IC8v5q+P5qyh5pu05pawY2hhbGxlbmdlXG5cdFx0XHRcblx0XHRcdC8vIOWIm+W7undlYnZpZXdcblx0XHRcdHRoaXMud3YgPSBwbHVzLndlYnZpZXcuY3JlYXRlKFxuXHRcdFx0ICBgaHlicmlkL2h0bWwvdmVlZWNhaS12ZXJpZmljYXRpb24tY29kZS9pbmRleC5odG1sP2RhdGE9JHtlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5kZWZhdWx0Q29uZmlnKVxuXHRcdFx0ICApfWAsXG5cdFx0XHQgIFwiZ3Rfd2Vidmlld1wiLFxuXHRcdFx0ICB7XG5cdFx0XHQgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0ICAgIHdpZHRoOiBcIjEwMCVcIiwgLy9TdHJpbmfnsbvlnoss56qX5Y+j55qE5a695bqmLuaUr+aMgeeZvuWIhuavlOOAgeWDj+e0oOWAvO+8jOm7mOiupOS4ujEwMCUu5pyq6K6+572ud2lkdGjlsZ7mgKflgLzml7Ys5Y+v5ZCM5pe26K6+572ubGVmdOWSjHJpZ2h05bGe5oCn5YC85pS55Y+Y56qX5Y+j55qE6buY6K6k5a695bqmLlxuXHRcdFx0ICAgIGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHQgIH1cblx0XHRcdCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g6I635Y+Wd2Vidmlld1xuXHRcdFx0dmFyIGN1cnJlbnRXZWJ2aWV3ID0gdGhpcy4kcm9vdC4kc2NvcGUuJGdldEFwcFdlYnZpZXcoKTsgLy/mraTlr7nosaHnm7jlvZPkuo5odG1sNXBsdXPph4znmoRwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKeOAguWcqHVuaS1hcHDph4x2dWXpobXpnaLnm7TmjqXkvb/nlKhwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKeaXoOaViFxuXHRcdFx0Y3VycmVudFdlYnZpZXcuYXBwZW5kKHRoaXMud3YpO1xuXHRcdFx0XG5cdFx0XHRwbHVzLmdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbHVzTWVzc2FnZVwiLCAobXNnKSA9PiB7XG5cdFx0XHQgIC8v5pyJ6YeN5aSN5o6o6YCB6Zeu6aKYXG5cdFx0XHQgIGNvbnN0IHJlc3VsdCA9IG1zZy5kYXRhLmFyZ3MuZGF0YTtcblx0XHRcdCAgaWYgKHJlc3VsdC5uYW1lID09IFwicG9zdE1lc3NhZ2VcIikge1xuXHRcdFx0ICAgIGlmIChyZXN1bHQuYXJnLnRpbWUgICYmIHJlc3VsdC5hcmcudGltZSA9PT0gdGhhdC5sYXN0VGltZSkge1xuXG5cdFx0XHRcdFxuXHRcdFx0ICAgICAgLy8g5aSE55CGdW5p6L+e57ut5o6o6YCBYnVnXG5cdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHQgICAgfVxuXHRcdFx0ICAgIHRoYXQubGFzdFRpbWUgPSByZXN1bHQuYXJnLnRpbWU7XG5cdFx0XHQgICAgc3dpdGNoIChyZXN1bHQuYXJnLnR5cGUpIHtcblx0XHRcdFx0XHRcblx0XHRcdCAgICAgIGNhc2UgXCJjbG9zZVwiOlxuXHRcdFx0XHRcdFxuXHRcdFx0ICAgICAgICB0aGF0LmNhcHRjaGFDbG9zZSgpO1xuXHRcdFx0ICAgICAgICBicmVhaztcblx0XHRcdCAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XG5cdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdC8vIFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHQgICAgICAgIHRoYXQuY2FwdGNoYVN1Y2Nlc3MocmVzdWx0LmFyZy5kYXRhKTtcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgICBkZWZhdWx0OlxuXHRcdFx0ICAgICAgICBicmVhaztcblx0XHRcdCAgICB9XG5cdFx0XHQgIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcbiAgICAgXG5cbiAgICAgIC8vIHRoaXMud3Yub3ZlcnJpZGVVcmxMb2FkaW5nKFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbW9kZTogXCJyZWplY3RcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgKGUpID0+IHtcbiAgICAgIC8vICAgICBwbHVzLnJ1bnRpbWUub3BlblVSTChlLnVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICk7XG5cdCAgXG5cbiAgICB9LFxuXG4gICAgY2FwdGNoYVN1Y2Nlc3MoZGF0YSkge1xuICAgICAgdGhpcy4kZW1pdChcImNhcHRjaGFTdWNjZXNzXCIsIGRhdGEpO1xuICAgICAgdGhpcy53di5oaWRlKCk7XG4gICAgfSxcbiAgICBjYXB0Y2hhQ2xvc2UoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2FwdGNoYUNsb3NlXCIpO1xuICAgICAgdGhpcy53di5oaWRlKCk7XG4gICAgfSxcbiAgICBnZXRBcHBXZWJ2aWV3KHRoYXQpIHtcbiAgICAgIGlmICh0aGF0LiRzY29wZSkge1xuICAgICAgICByZXR1cm4gdGhhdC4kc2NvcGUuJGdldEFwcFdlYnZpZXcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0QXBwV2Vidmlldyh0aGF0LiRwYXJlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VXVpZCgpIHtcbiAgICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoXG4gICAgICAgIC9beHldL2csXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICAgICAgICBjb25zdCB2ID0gYyA9PT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIGFyZ3VtZW50cyk7XG4gIH1cbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3QgbmV3VGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICBuZXdUYXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdUYXJnZXQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!****************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7ca71996&mpType=page */ 20);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"components/veeecai-verification-code/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2E3MTk5NiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdmVlZWNhaS12ZXJpZmljYXRpb24tY29kZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=template&id=7ca71996&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7ca71996&mpType=page */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ca71996_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=template&id=7ca71996&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "geetest_component"),
    attrs: { _i: 0 },
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!****************************************************************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/components/veeecai-verification-code/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\nvar _default2 = {\n  data: function data() {\n    return {\n      wv: null,\n      lastTime: \"\",\n      defaultConfig: {\n        clientVersion: \"uniapp-v1.0\",\n        clientType: uni.getSystemInfoSync().platform,\n        protocol: \"http://\",\n        mi: {\n          geeid: {\n            bd: \"\",\n            d: \"\",\n            e: \"\",\n            fp: \"\",\n            ts: \"\",\n            ver: \"\",\n            client_type: \"\"\n          },\n          packageName: \"\",\n          displayName: \"\",\n          appVer: \"\",\n          build: \"\",\n          clientVersion: \"\",\n          process_id: \"\",\n          process_id_test: \"\",\n          zid: \"\"\n        }\n      }\n    };\n  },\n  props: {\n    config: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    }\n  },\n  mounted: function mounted() {},\n  methods: {\n    showCaptcha: function showCaptcha() {\n      var that = this;\n      if (this.wv !== null) {\n        // uni.showToast({\n        // \ttitle: 'show',\n        // \ticon: \"none\",\n        // \tduration: 2000,\n        // });\n\n        this.wv.show();\n        return;\n      } else {\n        // uni.showToast({\n        // \ttitle: 'create',\n        // \ticon: \"none\",\n        // \tduration: 2000,\n        // });\n        // 合并参数\n        _assign(this.defaultConfig, this.config, {\n          challenge: this.getUuid()\n        }); //每次更新challenge\n\n        // 创建webview\n        this.wv = plus.webview.create(\"hybrid/html/veeecai-verification-code/index.html?data=\".concat(encodeURIComponent(JSON.stringify(this.defaultConfig))), \"gt_webview\", {\n          background: \"transparent\",\n          width: \"100%\",\n          //String类型,窗口的宽度.支持百分比、像素值，默认为100%.未设置width属性值时,可同时设置left和right属性值改变窗口的默认宽度.\n          height: \"100%\"\n        });\n\n        // 获取webview\n        var currentWebview = this.$root.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效\n        currentWebview.append(this.wv);\n        plus.globalEvent.addEventListener(\"plusMessage\", function (msg) {\n          //有重复推送问题\n          var result = msg.data.args.data;\n          if (result.name == \"postMessage\") {\n            if (result.arg.time && result.arg.time === that.lastTime) {\n              // 处理uni连续推送bug\n              return;\n            }\n            that.lastTime = result.arg.time;\n            switch (result.arg.type) {\n              case \"close\":\n                that.captchaClose();\n                break;\n              case \"success\":\n                // uni.showToast({\n                // \ttitle: 'success',\n                // \ticon: \"none\",\n                // \tduration: 2000,\n                // });\n                that.captchaSuccess(result.arg.data);\n                break;\n              default:\n                break;\n            }\n          }\n        });\n      }\n\n      // this.wv.overrideUrlLoading(\n      //   {\n      //     mode: \"reject\",\n      //   },\n      //   (e) => {\n      //     plus.runtime.openURL(e.url);\n      //   }\n      // );\n    },\n    captchaSuccess: function captchaSuccess(data) {\n      this.$emit(\"captchaSuccess\", data);\n      this.wv.hide();\n    },\n    captchaClose: function captchaClose() {\n      this.$emit(\"captchaClose\");\n      this.wv.hide();\n    },\n    getAppWebview: function getAppWebview(that) {\n      if (that.$scope) {\n        return that.$scope.$getAppWebview();\n      } else {\n        this.getAppWebview(that.$parent);\n      }\n    },\n    getUuid: function getUuid() {\n      return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0;\n        var v = c === \"x\" ? r : r & 0x3 | 0x8;\n        return v.toString(16);\n      });\n    }\n  }\n};\nexports.default = _default2;\nfunction _assign(target) {\n  if (typeof Object.assign === \"function\") {\n    return Object.assign.apply(Object, arguments);\n  }\n  if (target == null) {\n    throw new Error(\"Cannot convert undefined or null to object\");\n  }\n  var newTarget = Object(target);\n  for (var index = 1; index < arguments.length; index++) {\n    var source = arguments[index];\n    if (source !== null) {\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          newTarget[key] = source[key];\n        }\n      }\n    }\n  }\n  return newTarget;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92ZWVlY2FpLXZlcmlmaWNhdGlvbi1jb2RlL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwid3YiLCJsYXN0VGltZSIsImRlZmF1bHRDb25maWciLCJjbGllbnRWZXJzaW9uIiwiY2xpZW50VHlwZSIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwicGxhdGZvcm0iLCJwcm90b2NvbCIsIm1pIiwiZ2VlaWQiLCJiZCIsImQiLCJlIiwiZnAiLCJ0cyIsInZlciIsImNsaWVudF90eXBlIiwicGFja2FnZU5hbWUiLCJkaXNwbGF5TmFtZSIsImFwcFZlciIsImJ1aWxkIiwicHJvY2Vzc19pZCIsInByb2Nlc3NfaWRfdGVzdCIsInppZCIsInByb3BzIiwiY29uZmlnIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJtb3VudGVkIiwibWV0aG9kcyIsInNob3dDYXB0Y2hhIiwidGhhdCIsInNob3ciLCJfYXNzaWduIiwiY2hhbGxlbmdlIiwiZ2V0VXVpZCIsInBsdXMiLCJ3ZWJ2aWV3IiwiY3JlYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnRXZWJ2aWV3IiwiJHJvb3QiLCIkc2NvcGUiLCIkZ2V0QXBwV2VidmlldyIsImFwcGVuZCIsImdsb2JhbEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1zZyIsInJlc3VsdCIsImFyZ3MiLCJuYW1lIiwiYXJnIiwidGltZSIsImNhcHRjaGFDbG9zZSIsImNhcHRjaGFTdWNjZXNzIiwiJGVtaXQiLCJoaWRlIiwiZ2V0QXBwV2VidmlldyIsIiRwYXJlbnQiLCJyZXBsYWNlIiwiYyIsInIiLCJNYXRoIiwicmFuZG9tIiwidiIsInRvU3RyaW5nIiwidGFyZ2V0IiwiYXNzaWduIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJFcnJvciIsIm5ld1RhcmdldCIsImluZGV4IiwibGVuZ3RoIiwi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cnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHd2OiBudWxsLFxuICAgICAgbGFzdFRpbWU6IFwiXCIsXG4gICAgICBkZWZhdWx0Q29uZmlnOiB7XG4gICAgICAgIGNsaWVudFZlcnNpb246IFwidW5pYXBwLXYxLjBcIixcbiAgICAgICAgY2xpZW50VHlwZTogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0sXG4gICAgICAgIHByb3RvY29sOiBcImh0dHA6Ly9cIixcbiAgICAgICAgbWk6IHtcbiAgICAgICAgICBnZWVpZDoge1xuICAgICAgICAgICAgYmQ6IFwiXCIsXG4gICAgICAgICAgICBkOiBcIlwiLFxuICAgICAgICAgICAgZTogXCJcIixcbiAgICAgICAgICAgIGZwOiBcIlwiLFxuICAgICAgICAgICAgdHM6IFwiXCIsXG4gICAgICAgICAgICB2ZXI6IFwiXCIsXG4gICAgICAgICAgICBjbGllbnRfdHlwZTogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhY2thZ2VOYW1lOiBcIlwiLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlwiLFxuICAgICAgICAgIGFwcFZlcjogXCJcIixcbiAgICAgICAgICBidWlsZDogXCJcIixcbiAgICAgICAgICBjbGllbnRWZXJzaW9uOiBcIlwiLFxuICAgICAgICAgIHByb2Nlc3NfaWQ6IFwiXCIsXG4gICAgICAgICAgcHJvY2Vzc19pZF90ZXN0OiBcIlwiLFxuICAgICAgICAgIHppZDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93Q2FwdGNoYSgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuXHRcdFxuXHRcdGlmKHRoaXMud3YgIT09IG51bGwpe1xuXHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHQvLyBcdHRpdGxlOiAnc2hvdycsXG5cdFx0XHQvLyBcdGljb246IFwibm9uZVwiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMjAwMCxcblx0XHRcdC8vIH0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnd2LnNob3coKTtcblx0XHRcdHJldHVybiBcblx0XHRcdFxuXHRcdH1lbHNle1xuXHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHQvLyBcdHRpdGxlOiAnY3JlYXRlJyxcblx0XHRcdC8vIFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHQvLyBcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0Ly8gfSk7XG5cdFx0XHQvLyDlkIjlubblj4LmlbBcblx0XHRcdF9hc3NpZ24odGhpcy5kZWZhdWx0Q29uZmlnLCB0aGlzLmNvbmZpZywge1xuXHRcdFx0ICBjaGFsbGVuZ2U6IHRoaXMuZ2V0VXVpZCgpLFxuXHRcdFx0fSk7IC8v5q+P5qyh5pu05pawY2hhbGxlbmdlXG5cdFx0XHRcblx0XHRcdC8vIOWIm+W7undlYnZpZXdcblx0XHRcdHRoaXMud3YgPSBwbHVzLndlYnZpZXcuY3JlYXRlKFxuXHRcdFx0ICBgaHlicmlkL2h0bWwvdmVlZWNhaS12ZXJpZmljYXRpb24tY29kZS9pbmRleC5odG1sP2RhdGE9JHtlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5kZWZhdWx0Q29uZmlnKVxuXHRcdFx0ICApfWAsXG5cdFx0XHQgIFwiZ3Rfd2Vidmlld1wiLFxuXHRcdFx0ICB7XG5cdFx0XHQgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuXHRcdFx0ICAgIHdpZHRoOiBcIjEwMCVcIiwgLy9TdHJpbmfnsbvlnoss56qX5Y+j55qE5a695bqmLuaUr+aMgeeZvuWIhuavlOOAgeWDj+e0oOWAvO+8jOm7mOiupOS4ujEwMCUu5pyq6K6+572ud2lkdGjlsZ7mgKflgLzml7Ys5Y+v5ZCM5pe26K6+572ubGVmdOWSjHJpZ2h05bGe5oCn5YC85pS55Y+Y56qX5Y+j55qE6buY6K6k5a695bqmLlxuXHRcdFx0ICAgIGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHQgIH1cblx0XHRcdCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g6I635Y+Wd2Vidmlld1xuXHRcdFx0dmFyIGN1cnJlbnRXZWJ2aWV3ID0gdGhpcy4kcm9vdC4kc2NvcGUuJGdldEFwcFdlYnZpZXcoKTsgLy/mraTlr7nosaHnm7jlvZPkuo5odG1sNXBsdXPph4znmoRwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKeOAguWcqHVuaS1hcHDph4x2dWXpobXpnaLnm7TmjqXkvb/nlKhwbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKeaXoOaViFxuXHRcdFx0Y3VycmVudFdlYnZpZXcuYXBwZW5kKHRoaXMud3YpO1xuXHRcdFx0XG5cdFx0XHRwbHVzLmdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbHVzTWVzc2FnZVwiLCAobXNnKSA9PiB7XG5cdFx0XHQgIC8v5pyJ6YeN5aSN5o6o6YCB6Zeu6aKYXG5cdFx0XHQgIGNvbnN0IHJlc3VsdCA9IG1zZy5kYXRhLmFyZ3MuZGF0YTtcblx0XHRcdCAgaWYgKHJlc3VsdC5uYW1lID09IFwicG9zdE1lc3NhZ2VcIikge1xuXHRcdFx0ICAgIGlmIChyZXN1bHQuYXJnLnRpbWUgICYmIHJlc3VsdC5hcmcudGltZSA9PT0gdGhhdC5sYXN0VGltZSkge1xuXG5cdFx0XHRcdFxuXHRcdFx0ICAgICAgLy8g5aSE55CGdW5p6L+e57ut5o6o6YCBYnVnXG5cdFx0XHQgICAgICByZXR1cm47XG5cdFx0XHQgICAgfVxuXHRcdFx0ICAgIHRoYXQubGFzdFRpbWUgPSByZXN1bHQuYXJnLnRpbWU7XG5cdFx0XHQgICAgc3dpdGNoIChyZXN1bHQuYXJnLnR5cGUpIHtcblx0XHRcdFx0XHRcblx0XHRcdCAgICAgIGNhc2UgXCJjbG9zZVwiOlxuXHRcdFx0XHRcdFxuXHRcdFx0ICAgICAgICB0aGF0LmNhcHRjaGFDbG9zZSgpO1xuXHRcdFx0ICAgICAgICBicmVhaztcblx0XHRcdCAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XG5cdFx0XHRcdFx0XHQvLyB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdC8vIFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uOiAyMDAwLFxuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHQgICAgICAgIHRoYXQuY2FwdGNoYVN1Y2Nlc3MocmVzdWx0LmFyZy5kYXRhKTtcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgICBkZWZhdWx0OlxuXHRcdFx0ICAgICAgICBicmVhaztcblx0XHRcdCAgICB9XG5cdFx0XHQgIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcbiAgICAgXG5cbiAgICAgIC8vIHRoaXMud3Yub3ZlcnJpZGVVcmxMb2FkaW5nKFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgbW9kZTogXCJyZWplY3RcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgKGUpID0+IHtcbiAgICAgIC8vICAgICBwbHVzLnJ1bnRpbWUub3BlblVSTChlLnVybCk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICk7XG5cdCAgXG5cbiAgICB9LFxuXG4gICAgY2FwdGNoYVN1Y2Nlc3MoZGF0YSkge1xuICAgICAgdGhpcy4kZW1pdChcImNhcHRjaGFTdWNjZXNzXCIsIGRhdGEpO1xuICAgICAgdGhpcy53di5oaWRlKCk7XG4gICAgfSxcbiAgICBjYXB0Y2hhQ2xvc2UoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiY2FwdGNoYUNsb3NlXCIpO1xuICAgICAgdGhpcy53di5oaWRlKCk7XG4gICAgfSxcbiAgICBnZXRBcHBXZWJ2aWV3KHRoYXQpIHtcbiAgICAgIGlmICh0aGF0LiRzY29wZSkge1xuICAgICAgICByZXR1cm4gdGhhdC4kc2NvcGUuJGdldEFwcFdlYnZpZXcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2V0QXBwV2Vidmlldyh0aGF0LiRwYXJlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VXVpZCgpIHtcbiAgICAgIHJldHVybiBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoXG4gICAgICAgIC9beHldL2csXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYpIHwgMDtcbiAgICAgICAgICBjb25zdCB2ID0gYyA9PT0gXCJ4XCIgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIGFyZ3VtZW50cyk7XG4gIH1cbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3QgbmV3VGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBpZiAoc291cmNlICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICBuZXdUYXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdUYXJnZXQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/App.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**************************************************************************************!*\
  !*** /Users/mac/Desktop/veeec-ai-project-portfolio/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 26);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/mac/Desktop/veeec-ai-project-portfolio/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);