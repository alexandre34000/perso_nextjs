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

/***/ "./src/components/Main-header.js":
/*!***************************************!*\
  !*** ./src/components/Main-header.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main_header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main-header.module.css */ \"./src/components/Main-header.module.css\");\n/* harmony import */ var _Main_header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Main_header_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_scrollState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @context/scrollState */ \"./src/context/scrollState.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar MainHeader = function(props) {\n    _s1();\n    var valueY = (0,_context_scrollState__WEBPACK_IMPORTED_MODULE_1__.useAppContext)().valueY;\n    var _valueY = _slicedToArray(valueY, 2), statePosY = _valueY[0], setStatePosY = _valueY[1];\n    var styling = {\n        backgroundImage: \"url(\" + \"\".concat(props.img) + \")\"\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"main-header\"]),\n        style: styling,\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"main-header-information\"]),\n            __source: {\n                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"main-header__title\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"R\\xe9aliser un site internet \"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"main-header__text\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"En quelques minutes ou un peu plus...\"\n                })\n            ]\n        })\n    }));\n};\n_s1(MainHeader, \"n7bHLTvDxCg80Rokn+NXTJ0Sw2s=\", false, function() {\n    return [\n        _context_scrollState__WEBPACK_IMPORTED_MODULE_1__.useAppContext\n    ];\n});\n_c = MainHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLWhlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBQ0UsVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBRTNCLEdBQUssQ0FBR0MsTUFBTSxHQUFLSCxtRUFBYSxHQUF4QkcsTUFBTTtJQUNkLEdBQUssQ0FBNkJBLE9BQU0sa0JBQU5BLE1BQU0sTUFBakNDLFNBQVMsR0FBa0JELE9BQU0sS0FBdEJFLFlBQVksR0FBSUYsT0FBTTtJQUV4QyxHQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO1FBQ2JDLGVBQWUsRUFBRSxDQUFNLFFBQUksR0FBWSxPQUFWTCxLQUFLLENBQUNNLEdBQUcsSUFBSyxDQUFHO0lBQ2xELENBQUM7SUFFRCxNQUFNLHNFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBRVgsK0VBQW9CO1FBQUdZLEtBQUssRUFBRUwsT0FBTzs7Ozs7Ozt3RkFDaERHLENBQUc7WUFBQ0MsU0FBUyxFQUFFWCwyRkFBZ0M7Ozs7Ozs7O3FGQUMzQ2EsQ0FBRTtvQkFBQ0YsU0FBUyxFQUFFWCxzRkFBMkI7Ozs7Ozs7OEJBQUcsQ0FBMEI7O3FGQUN0RWMsQ0FBQztvQkFBQ0gsU0FBUyxFQUFFWCxxRkFBMEI7Ozs7Ozs7OEJBQUcsQ0FBcUM7Ozs7O0FBSWhHLENBQUM7SUFqQktFLFVBQVU7O1FBRU9ELCtEQUFhOzs7S0FGOUJDLFVBQVU7QUFtQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4taGVhZGVyLmpzPzNjZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW4taGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnQGNvbnRleHQvc2Nyb2xsU3RhdGUnO1xyXG5cclxuY29uc3QgTWFpbkhlYWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdmFsdWVZIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBbc3RhdGVQb3NZLCBzZXRTdGF0ZVBvc1ldID0gdmFsdWVZO1xyXG5cclxuICAgIGNvbnN0IHN0eWxpbmcgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke3Byb3BzLmltZ31gICsgXCIpXCIsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1oZWFkZXJcIl19IHN0eWxlPXtzdHlsaW5nfSAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1oZWFkZXItaW5mb3JtYXRpb25cIl19PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1oZWFkZXJfX3RpdGxlXCJdfT5Sw6lhbGlzZXIgdW4gc2l0ZSBpbnRlcm5ldCA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWhlYWRlcl9fdGV4dFwiXX0+RW4gcXVlbHF1ZXMgbWludXRlcyBvdSB1biBwZXUgcGx1cy4uLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXIiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlQXBwQ29udGV4dCIsIk1haW5IZWFkZXIiLCJwcm9wcyIsInZhbHVlWSIsInN0YXRlUG9zWSIsInNldFN0YXRlUG9zWSIsInN0eWxpbmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main-header.js\n");

/***/ })

});