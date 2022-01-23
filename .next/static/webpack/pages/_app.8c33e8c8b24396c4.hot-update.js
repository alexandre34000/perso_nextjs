"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/SEO */ \"./src/components/SEO.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Navigation */ \"./src/components/Navigation.js\");\n/* harmony import */ var _helpers_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/routes */ \"./src/helpers/routes.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./src/components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n//import Footer from '@components/Footer';\n\n\n\nfunction Layout(param) {\n    var children = param.children, navtheme = param.navtheme, pageMeta = param.pageMeta;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Layout.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: pageMeta.title,\n                description: pageMeta.description,\n                url: pageMeta.url,\n                image: pageMeta.image,\n                creator: pageMeta.creator,\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Layout.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Layout.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Layout.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: children\n            })\n        ]\n    }));\n};\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVqQyxFQUEwQztBQUNLO0FBQ0g7QUFFSjtBQUV6QixRQUFRLENBQUNJLE1BQU0sQ0FBQyxLQUFnQyxFQUFFLENBQUM7UUFBakNDLFFBQVEsR0FBVixLQUFnQyxDQUE5QkEsUUFBUSxFQUFFQyxRQUFRLEdBQXBCLEtBQWdDLENBQXBCQSxRQUFRLEVBQUVDLFFBQVEsR0FBOUIsS0FBZ0MsQ0FBVkEsUUFBUTtJQUMzRCxNQUFNLHVFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRU4scUVBQWdCOzs7Ozs7OztpRkFDN0JILHVEQUFHO2dCQUNGVyxLQUFLLEVBQUVKLFFBQVEsQ0FBQ0ksS0FBSztnQkFDckJDLFdBQVcsRUFBRUwsUUFBUSxDQUFDSyxXQUFXO2dCQUNqQ0MsR0FBRyxFQUFFTixRQUFRLENBQUNNLEdBQUc7Z0JBQ2pCQyxLQUFLLEVBQUVQLFFBQVEsQ0FBQ08sS0FBSztnQkFDckJDLE9BQU8sRUFBRVIsUUFBUSxDQUFDUSxPQUFPOzs7Ozs7OztpRkFFMUJkLDhEQUFVOzs7Ozs7OztpRkFDVmUsQ0FBSTs7Ozs7OzswQkFBRVgsUUFBUTs7OztBQUlyQixDQUFDO0tBZnVCRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRU8gZnJvbSAnQGNvbXBvbmVudHMvU0VPJztcclxuXHJcbi8vaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdAY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHtwdWJsaWNSb3V0ZXN9IGZyb20gJ0BoZWxwZXJzL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIG5hdnRoZW1lLCBwYWdlTWV0YSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPFNFT1xyXG4gICAgICAgIHRpdGxlPXtwYWdlTWV0YS50aXRsZX1cclxuICAgICAgICBkZXNjcmlwdGlvbj17cGFnZU1ldGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgdXJsPXtwYWdlTWV0YS51cmx9XHJcbiAgICAgICAgaW1hZ2U9e3BhZ2VNZXRhLmltYWdlfVxyXG4gICAgICAgIGNyZWF0b3I9e3BhZ2VNZXRhLmNyZWF0b3J9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgey8qICA8Rm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0gLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlNFTyIsIk5hdmlnYXRpb24iLCJwdWJsaWNSb3V0ZXMiLCJzdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIm5hdnRoZW1lIiwicGFnZU1ldGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaW1hZ2UiLCJjcmVhdG9yIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ })

});