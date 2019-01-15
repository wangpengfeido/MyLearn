exports.ids = [0];
exports.modules = {

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/css-loader/dist/cjs.js!C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/pages/root/root.vue?C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/css-loader/dist/cjs.js!C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store_modules_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/modules/root */ \"./app/store/modules/root.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n// 可以将store模块分割到路由组件的chunk中\n// 那么就需要在这里导入，而不是在store/index.js中\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"root\",\n  asyncData({store, route}) {\n\n    // 注册模块\n    store.registerModule('root', _store_modules_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n    return store.dispatch('fetchItem', route.params.id);\n  },\n  destroyed() {\n    // 注意：卸载模块，这样可以避免多次访问路由时重复注册模块(仅对于纯客户端)\n    this.$store.unregisterModule('root');\n  },\n  computed: {\n    item() {\n      // 这里需要用命名空间取值\n      return this.$store.state.root.items[this.$route.params.id];\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./app/pages/root/root.vue?C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/wangpengfei/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._ssrNode(\n        \"<div data-v-45f79858>this is root</div> <div data-v-45f79858>\" +\n          _vm._ssrEscape(\"item:\" + _vm._s(_vm.item)) +\n          \"</div> \"\n      ),\n      _c(\"router-view\")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/pages/root/root.vue?C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/wangpengfei/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./app/api.js":
/*!********************!*\
  !*** ./app/api.js ***!
  \********************/
/*! exports provided: fetchItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchItem\", function() { return fetchItem; });\nfunction fetchItem(id) {\r\n  return new Promise((resolve, reject) => {\r\n    setTimeout(() => {\r\n      resolve({\r\n        id: id,\r\n        data: `data of ${id}`,\r\n      });\r\n    }, 1000);\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./app/api.js?");

/***/ }),

/***/ "./app/pages/root/root.vue":
/*!*********************************!*\
  !*** ./app/pages/root/root.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.vue?vue&type=template&id=45f79858&scoped=true& */ \"./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&\");\n/* harmony import */ var _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.vue?vue&type=script&lang=js& */ \"./app/pages/root/root.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\nfunction injectStyles (context) {\n  \n  var style0 = __webpack_require__(/*! ./root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& */ \"./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&\")\nif (style0.__inject__) style0.__inject__(context)\n\n}\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  injectStyles,\n  \"45f79858\",\n  \"cce88f36\"\n  \n)\n\ncomponent.options.__file = \"app/pages/root/root.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/pages/root/root.vue?");

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=script&lang=js& */ \"../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/pages/root/root.vue?");

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& */ \"../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./app/pages/root/root.vue?");

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&":
/*!****************************************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=template&id=45f79858&scoped=true& */ \"../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/pages/root/root.vue?");

/***/ }),

/***/ "./app/store/modules/root.js":
/*!***********************************!*\
  !*** ./app/store/modules/root.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ \"./app/api.js\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  namespace: true,\r\n  // 注意：这里state必须是一个函数，以多次实例化该模块\r\n  state() {\r\n    return {\r\n      items: {},\r\n    };\r\n  },\r\n  mutations: {\r\n    setItem(state, {id, item}) {\r\n      vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(state.items, id, item);\r\n    },\r\n  },\r\n  actions: {\r\n    fetchItem({commit}, id) {\r\n      return Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchItem\"])(id).then(item => {\r\n        commit('setItem', {id, item});\r\n      });\r\n    },\r\n  },\r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./app/store/modules/root.js?");

/***/ })

};;