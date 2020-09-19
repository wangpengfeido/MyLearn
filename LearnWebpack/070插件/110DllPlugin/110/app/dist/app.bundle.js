/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../create-dll/src/a.js":
/*!**********************************************************************!*\
  !*** delegated ./src/a.js from dll-reference a_fa877f5ee7cbbfc95da5 ***!
  \**********************************************************************/
/*! exports provided: a */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference a_fa877f5ee7cbbfc95da5 */ \"dll-reference a_fa877f5ee7cbbfc95da5\"))(\"./src/a.js\");\n\n//# sourceURL=webpack:///delegated_./src/a.js_from_dll-reference_a_fa877f5ee7cbbfc95da5?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_dll_src_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create-dll/src/a */ \"../create-dll/src/a.js\");\n/* harmony import */ var test_src_b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! test/src/b */ \"test/src/b.js\");\n\r\n\r\n\r\nconsole.log(_create_dll_src_a__WEBPACK_IMPORTED_MODULE_0__[\"a\"]);\r\nconsole.log(test_src_b__WEBPACK_IMPORTED_MODULE_1__[\"b\"]);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "dll-reference a_fa877f5ee7cbbfc95da5":
/*!*****************************************!*\
  !*** external "a_fa877f5ee7cbbfc95da5" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = a_fa877f5ee7cbbfc95da5;\n\n//# sourceURL=webpack:///external_%22a_fa877f5ee7cbbfc95da5%22?");

/***/ }),

/***/ "dll-reference b_fa877f5ee7cbbfc95da5":
/*!*****************************************!*\
  !*** external "b_fa877f5ee7cbbfc95da5" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = b_fa877f5ee7cbbfc95da5;\n\n//# sourceURL=webpack:///external_%22b_fa877f5ee7cbbfc95da5%22?");

/***/ }),

/***/ "test/src/b.js":
/*!**********************************************************************!*\
  !*** delegated ./src/b.js from dll-reference b_fa877f5ee7cbbfc95da5 ***!
  \**********************************************************************/
/*! exports provided: b */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference b_fa877f5ee7cbbfc95da5 */ \"dll-reference b_fa877f5ee7cbbfc95da5\"))(\"./src/b.js\");\n\n//# sourceURL=webpack:///delegated_./src/b.js_from_dll-reference_b_fa877f5ee7cbbfc95da5?");

/***/ })

/******/ });