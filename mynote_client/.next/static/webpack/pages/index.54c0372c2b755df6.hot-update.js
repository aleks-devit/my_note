"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TreeFiles/Branch.tsx":
/*!*****************************************!*\
  !*** ./components/TreeFiles/Branch.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ \"./components/TreeFiles/Node.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Projects\\\\my_note\\\\mynote_client\\\\components\\\\TreeFiles\\\\Branch.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Branch = function Branch(_ref) {\n  _s();\n\n  var item = _ref.item,\n      level = _ref.level;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  var hasChildren = !!item.children && item.children.length > 0;\n\n  var renderBranches = function renderBranches() {\n    if (hasChildren) {\n      var newLevel = level + 1;\n      return item.children && item.children.map(function (child) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Branch, {\n          item: child,\n          level: newLevel\n        }, child.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 16\n        }, _this);\n      });\n    }\n\n    return null;\n  };\n\n  var toggleSelected = function toggleSelected() {\n    setSelected(function (prev) {\n      return !prev;\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Node__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      selected: selected,\n      item: item,\n      level: level,\n      onToggle: hasChildren && toggleSelected\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), selected && renderBranches()]\n  }, void 0, true);\n};\n\n_s(Branch, \"jTu/AeLw5BOy6ZW1dDNXzAJjzwE=\");\n\n_c = Branch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Branch);\n\nvar _c;\n\n$RefreshReg$(_c, \"Branch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyZWVGaWxlcy9CcmFuY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQVFBLElBQU1HLE1BQXVCLEdBQUcsU0FBMUJBLE1BQTBCLE9BQW1CO0FBQUE7O0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDakQsa0JBQWdDSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLENBQUNKLElBQUksQ0FBQ0ssUUFBUCxJQUFtQkwsSUFBSSxDQUFDSyxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBOUQ7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlILFdBQUosRUFBaUI7QUFDZixVQUFNSSxRQUFRLEdBQUdQLEtBQUssR0FBRyxDQUF6QjtBQUVBLGFBQU9ELElBQUksQ0FBQ0ssUUFBTCxJQUFpQkwsSUFBSSxDQUFDSyxRQUFMLENBQWNJLEdBQWQsQ0FBa0IsVUFBQ0MsS0FBRCxFQUFxQjtBQUM3RCw0QkFBTyw4REFBQyxNQUFEO0FBQXVCLGNBQUksRUFBRUEsS0FBN0I7QUFBb0MsZUFBSyxFQUFFRjtBQUEzQyxXQUFhRSxLQUFLLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZ1QixDQUF4QjtBQUdEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBVkQ7O0FBWUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCVCxJQUFBQSxXQUFXLENBQUMsVUFBQ1UsSUFBRDtBQUFBLGFBQW1CLENBQUNBLElBQXBCO0FBQUEsS0FBRCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDZDQUFEO0FBQ0UsY0FBUSxFQUFFWCxRQURaO0FBRUUsVUFBSSxFQUFFRixJQUZSO0FBR0UsV0FBSyxFQUFFQyxLQUhUO0FBSUUsY0FBUSxFQUFFRyxXQUFXLElBQUlRO0FBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFHVixRQUFRLElBQUlLLGNBQWMsRUFSN0I7QUFBQSxrQkFERjtBQVlELENBakNEOztHQUFNUjs7S0FBQUE7QUFtQ04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmVlRmlsZXMvQnJhbmNoLnRzeD8xMmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xyXG5pbXBvcnQge0RBVEFUeXBlfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNfZGF0YV9mcm9tX3NlcnZlci9kYXRhVHlwZVwiO1xyXG5cclxuaW50ZXJmYWNlIEJyYW5jaFByb3BzIHtcclxuICBpdGVtOiBEQVRBVHlwZVxyXG4gIGxldmVsOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgQnJhbmNoOiBGQzxCcmFuY2hQcm9wcz4gPSAoe2l0ZW0sIGxldmVsfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGhhc0NoaWxkcmVuID0gISFpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCBcclxuXHJcbiAgY29uc3QgcmVuZGVyQnJhbmNoZXMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaGFzQ2hpbGRyZW4pIHtcclxuICAgICAgY29uc3QgbmV3TGV2ZWwgPSBsZXZlbCArIDFcclxuXHJcbiAgICAgIHJldHVybiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubWFwKChjaGlsZDogREFUQVR5cGUpID0+IHtcclxuICAgICAgICByZXR1cm4gPEJyYW5jaCBrZXk9e2NoaWxkLmlkfSBpdGVtPXtjaGlsZH0gbGV2ZWw9e25ld0xldmVsfS8+XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWQoKHByZXY6IGJvb2xlYW4pID0+ICFwcmV2KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOb2RlXHJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxyXG4gICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgbGV2ZWw9e2xldmVsfVxyXG4gICAgICAgIG9uVG9nZ2xlPXtoYXNDaGlsZHJlbiAmJiB0b2dnbGVTZWxlY3RlZH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtzZWxlY3RlZCAmJiByZW5kZXJCcmFuY2hlcygpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyYW5jaDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5vZGUiLCJCcmFuY2giLCJpdGVtIiwibGV2ZWwiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFzQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImxlbmd0aCIsInJlbmRlckJyYW5jaGVzIiwibmV3TGV2ZWwiLCJtYXAiLCJjaGlsZCIsImlkIiwidG9nZ2xlU2VsZWN0ZWQiLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TreeFiles/Branch.tsx\n");

/***/ })

});