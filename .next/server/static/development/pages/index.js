module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ExternalLinks.js":
/*!*************************************!*\
  !*** ./components/ExternalLinks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rkanson/Projects/Personal/components/ExternalLinks.js";


var ExternalLinks = function ExternalLinks() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/rkanson",
    target: "_blank",
    rel: "noopener",
    "aria-label": "GitHub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "text-white fill-current hover:text-gray-600 transition",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/rkanson",
    target: "_blank",
    rel: "noopener",
    "aria-label": "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "text-white fill-current ml-4 hover:text-gray-600 transition",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ExternalLinks);

/***/ }),

/***/ "./components/FunctionButtons.js":
/*!***************************************!*\
  !*** ./components/FunctionButtons.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ResumeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ResumeButton */ "./components/ResumeButton.js");
/* harmony import */ var _components_PortfolioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PortfolioButton */ "./components/PortfolioButton.js");
var _jsxFileName = "/Users/rkanson/Projects/Personal/components/FunctionButtons.js";




var FunctionButtons = function FunctionButtons() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "fixed inset-x-0 bottom-0 flex items-center justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResumeButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PortfolioButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FunctionButtons);

/***/ }),

/***/ "./components/PortfolioButton.js":
/*!***************************************!*\
  !*** ./components/PortfolioButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/rkanson/Projects/Personal/components/PortfolioButton.js";



function PortfolioButton() {
  var dispNone = {
    display: 'none'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['HTML', 'CSS (SCSS)', 'JS (Vanilla, Vue, React, jQuery)', 'Python (Flask)', 'PHP (Laravel)']),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      languages = _useState2[0];

  function togglePortfolio() {
    document.querySelector('#portfolio').classList.toggle('offcanvas');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelector('#portfolio').removeAttribute('style');
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white transition",
    onClick: togglePortfolio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "portfolio",
    className: "offcanvas transition fixed inset-x-0 bottom-0 rounded-t bg-white mx-4",
    style: dispNone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "relative p-4 md:p-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600 transition",
    onClick: togglePortfolio,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-2xl font-bold leading-none border-b-2 pb-2 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Languages"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "mt-2 ml-2 list-disc ml-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, languages.map(function (lang, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "text-sm text-gray-800",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, lang);
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PortfolioButton);

/***/ }),

/***/ "./components/ResumeButton.js":
/*!************************************!*\
  !*** ./components/ResumeButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/rkanson/Projects/Personal/components/ResumeButton.js";



function ResumeButton() {
  var dispNone = {
    display: 'none'
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['NextLevel Web Strategies - Cherry Hill, NJ', 'Lead Web Developer, Content Import Specialist']),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      experience = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['Monmouth University - West Long Branch', 'B.S in Computer Science w/ Concentration in Applied Programming']),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 1),
      education = _useState4[0];

  function toggleResume() {
    document.querySelector('#resume').classList.toggle('offcanvas');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelector('#resume').removeAttribute('style');
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "bg-white text-grey-800 mx-1 py-2 px-4 rounded-t font-bold hover:bg-gray-600 hover:text-white transition",
    onClick: toggleResume,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Resume"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "resume",
    className: "offcanvas transition fixed inset-x-0 bottom-0 rounded-t bg-white mx-4",
    style: dispNone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "relative p-4 md:p-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "absolute right-0 top-0 mr-4 mt-4 text-2xl font-bold leading-mini hover:cursor-pointer hover:text-gray-600 transition",
    onClick: toggleResume,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-2xl font-bold leading-none border-b-2 pb-2 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "my-4 ml-2 list-disc ml-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, experience.map(function (job, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "text-sm text-gray-800",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, job);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-2xl font-bold leading-none border-b-2 pb-2 mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "my-4 ml-2 list-disc ml-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, education.map(function (school, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "text-sm text-gray-800",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, school);
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (ResumeButton);

/***/ }),

/***/ "./components/SVGLogo.js":
/*!*******************************!*\
  !*** ./components/SVGLogo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rkanson/Projects/Personal/components/SVGLogo.js";


var SVGLogo = function SVGLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "169",
    height: "105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M134.531 103.465l.281.535h32.235l-.98-1.538-20.447-32.07c5.552-3.115 9.842-7.347 12.844-12.694l.003-.007c3.168-5.742 4.733-12.49 4.733-20.211 0-11.471-3.787-20.462-11.444-26.829-7.536-6.443-18.118-9.595-31.604-9.595H73.715v42.092L37.6 1.402l-.299-.346H4.07l1.502 1.669 36.92 41.037L3.18 102.443 2.138 104h33.94l.297-.44 25.78-38.108 11.56 12.875V104h28.429V76.064h17.98l14.407 27.401zM120.296 53.04h-18.152V24.08h18.152c5.216 0 9.065 1.303 11.702 3.763l.012.012.013.011c2.707 2.358 4.121 5.796 4.121 10.478 0 4.886-1.422 8.472-4.134 10.922l-.006.005-.006.006c-2.637 2.46-6.486 3.763-11.702 3.763z",
    stroke: "#fff",
    strokeWidth: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SVGLogo);

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.css */ "./main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SVGLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SVGLogo */ "./components/SVGLogo.js");
/* harmony import */ var _components_ExternalLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExternalLinks */ "./components/ExternalLinks.js");
/* harmony import */ var _components_FunctionButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FunctionButtons */ "./components/FunctionButtons.js");
var _jsxFileName = "/Users/rkanson/Projects/Personal/pages/index.js";







function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Richard Kanson | Web Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Richard Kanson is a web developer with experience in multiple tech stacks.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/img/favicon.ico",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/img/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex flex-col justify-center items-center w-screen h-screen bg-gray-800",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SVGLogo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6 flex flex-col items-center text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "font-bold leading-none text-4xl md:text-5xl text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Richard Kanson"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "font-bold leading-none text-3xl text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Web Developer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "bg-white text-grey-800 mx-1 py-2 px-4 mt-8 rounded font-bold hover:bg-gray-600 hover:text-white transition",
    href: "https://www.weddingwire.us/website/richard-kanson-and-erika-longfield",
    rel: "noreferrer noopener",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Looking for the Wedding page?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FunctionButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rkanson/Projects/Personal/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map