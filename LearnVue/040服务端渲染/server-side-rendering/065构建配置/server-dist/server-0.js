exports.ids = [0];
exports.modules = {

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);



/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_modules_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/modules/root */ "./app/store/modules/root.js");
//
//
//
//
//
//
//
//


// 可以将store模块分割到路由组件的chunk中
// 那么就需要在这里导入，而不是在store/index.js中


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "root",
  asyncData({store, route}) {

    // 注册模块
    store.registerModule('root', _store_modules_root__WEBPACK_IMPORTED_MODULE_0__["default"]);

    return store.dispatch('fetchItem', route.params.id);
  },
  destroyed() {
    // 注意：卸载模块，这样可以避免多次访问路由时重复注册模块(仅对于纯客户端)
    this.$store.unregisterModule('root');
  },
  computed: {
    item() {
      // 这里需要用命名空间取值
      return this.$store.state.root.items[this.$route.params.id];
    }
  }
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._ssrNode(
        "<div data-v-45f79858>this is root</div> <div data-v-45f79858>" +
          _vm._ssrEscape("item:" + _vm._s(_vm.item)) +
          "</div> "
      ),
      _c("router-view")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./app/api.js":
/*!********************!*\
  !*** ./app/api.js ***!
  \********************/
/*! exports provided: fetchItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItem", function() { return fetchItem; });
function fetchItem(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        data: `data of ${id}`,
      });
    }, 1000);
  });
}





/***/ }),

/***/ "./app/pages/root/root.vue":
/*!*********************************!*\
  !*** ./app/pages/root/root.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.vue?vue&type=template&id=45f79858&scoped=true& */ "./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&");
/* harmony import */ var _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.vue?vue&type=script&lang=js& */ "./app/pages/root/root.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(/*! ./root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& */ "./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "45f79858",
  "00c7ab52"
  
)

component.options.__file = "app/pages/root/root.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=script&lang=js& */ "../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css& */ "../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=style&index=0&id=45f79858&scoped=true&lang=css&");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_style_index_0_id_45f79858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&":
/*!****************************************************************************!*\
  !*** ./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./root.vue?vue&type=template&id=45f79858&scoped=true& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./app/pages/root/root.vue?vue&type=template&id=45f79858&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_45f79858_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/store/modules/root.js":
/*!***********************************!*\
  !*** ./app/store/modules/root.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./app/api.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  namespace: true,
  // 注意：这里state必须是一个函数，以多次实例化该模块
  state() {
    return {
      items: {},
    };
  },
  mutations: {
    setItem(state, {id, item}) {
      vue__WEBPACK_IMPORTED_MODULE_0__["default"].set(state.items, id, item);
    },
  },
  actions: {
    fetchItem({commit}, id) {
      return Object(_api__WEBPACK_IMPORTED_MODULE_1__["fetchItem"])(id).then(item => {
        commit('setItem', {id, item});
      });
    },
  },
});






/***/ })

};;
//# sourceMappingURL=server-0.js.map