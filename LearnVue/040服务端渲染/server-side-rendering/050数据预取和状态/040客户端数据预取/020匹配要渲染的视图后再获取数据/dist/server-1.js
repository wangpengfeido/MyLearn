exports.ids = [1];
exports.modules = {

/***/ "../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/css-loader/dist/cjs.js!D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app/root/root.vue?D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/css-loader/dist/cjs.js!D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib/loaders/stylePostLoader.js!D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/root/root.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"root\",\n  asyncData({store, route}) {\n    return store.dispatch('fetchItem', route.params.id);\n  },\n  computed: {\n    item() {\n      return this.$store.state.items[this.$route.params.id];\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./app/root/root.vue?D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=template&id=62528063&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/workspace/github/MyLearn/LearnVue/040服务端渲染/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options!./app/root/root.vue?vue&type=template&id=62528063&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._ssrNode(\n        \"<div data-v-62528063>this is root</div> <div data-v-62528063>\" +\n          _vm._ssrEscape(\"item:\" + _vm._s(_vm.item)) +\n          \"</div> \"\n      ),\n      _c(\"router-view\")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/root/root.vue?D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/workspace/github/MyLearn/LearnVue/040%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93/server-side-rendering/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./app/root/root.vue":
/*!***************************!*\
  !*** ./app/root/root.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.vue?vue&type=template&id=62528063&scoped=true& */ \"./app/root/root.vue?vue&type=template&id=62528063&scoped=true&\");\n/* harmony import */ var _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.vue?vue&type=script&lang=js& */ \"./app/root/root.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\nfunction injectStyles (context) {\n  \n  var style0 = __webpack_require__(/*! ./root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css& */ \"./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css&\")\nif (style0.__inject__) style0.__inject__(context)\n\n}\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  injectStyles,\n  \"62528063\",\n  \"1708af3a\"\n  \n)\n\ncomponent.options.__file = \"app/root/root.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/root/root.vue?");

/***/ }),

/***/ "./app/root/root.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./app/root/root.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=script&lang=js& */ \"../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/root/root.vue?");

/***/ }),

/***/ "./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css&":
/*!************************************************************************************!*\
  !*** ./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css& */ \"../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=style&index=0&id=62528063&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_62528063_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./app/root/root.vue?");

/***/ }),

/***/ "./app/root/root.vue?vue&type=template&id=62528063&scoped=true&":
/*!**********************************************************************!*\
  !*** ./app/root/root.vue?vue&type=template&id=62528063&scoped=true& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=template&id=62528063&scoped=true& */ \"../../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../node_modules/vue-loader/lib/index.js?!./app/root/root.vue?vue&type=template&id=62528063&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_62528063_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/root/root.vue?");

/***/ })

};;