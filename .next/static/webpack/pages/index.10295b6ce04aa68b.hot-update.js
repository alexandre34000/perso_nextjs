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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Main_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main-header.module.css */ \"./src/components/Main-header.module.css\");\n/* harmony import */ var _Main_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Main_header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_scrollState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @context/scrollState */ \"./src/context/scrollState.js\");\n/* harmony import */ var _helpers_loaderImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/loaderImg */ \"./src/helpers/loaderImg.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar MainHeader = function(props) {\n    _s1();\n    var valueY = (0,_context_scrollState__WEBPACK_IMPORTED_MODULE_3__.useAppContext)().valueY;\n    var _valueY = _slicedToArray(valueY, 2), statePosY = _valueY[0], setStatePosY = _valueY[1];\n    var img = '/images/arch_465x300.jpg';\n    var styling = {\n        backgroundImage: \"url(\" + \"\".concat(img) + \")\"\n    };\n    /*    style={styling} */ return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"main-header\"]),\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"main-header__title\"]),\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"R\\xe9aliser un site internet \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"main-header__text\"]),\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"En quelques minutes ou un peu plus...\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {\n                href: \"#decouvrir\",\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                    lineNumber: 30,\n                    columnNumber: 15\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    className: (_Main_header_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"main-header__link\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Main-header.js\",\n                        lineNumber: 30,\n                        columnNumber: 39\n                    },\n                    __self: _this,\n                    children: \"Visiter\"\n                })\n            })\n        ]\n    }));\n};\n_s1(MainHeader, \"gL9qx594UevesKgx6oxvcigvBXY=\", false, function() {\n    return [\n        _context_scrollState__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = MainHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainHeader);\nvar _c;\n$RefreshReg$(_c, \"MainHeader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLWhlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ2Y7QUFFeUI7QUFDSDtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzlDLEdBQUssQ0FBQ08sVUFBVSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBRTNCLEdBQUssQ0FBR0MsTUFBTSxHQUFJSixtRUFBYSxHQUF2QkksTUFBTTtJQUNkLEdBQUssQ0FBNkJBLE9BQU0sa0JBQU5BLE1BQU0sTUFBakNDLFNBQVMsR0FBa0JELE9BQU0sS0FBdEJFLFlBQVksR0FBSUYsT0FBTTtJQUV4QyxHQUFLLENBQUNHLEdBQUcsR0FBRyxDQUEwQjtJQUV0QyxHQUFLLENBQUNDLE9BQU8sR0FBRyxDQUFDO1FBQ2JDLGVBQWUsRUFBRSxDQUFNLFFBQUksR0FBTSxPQUFKRixHQUFHLElBQUssQ0FBRztJQUs1QyxDQUFDO0lBRUosRUFBd0IsdUJBRXJCLE1BQU0sdUVBQ0RHLENBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsK0VBQW9COzs7Ozs7OztpRkFDL0JpQixDQUFFO2dCQUFDRCxTQUFTLEVBQUVoQixzRkFBMkI7Ozs7Ozs7MEJBQUcsQ0FBMEI7O2lGQUN0RWtCLENBQUM7Z0JBQUNGLFNBQVMsRUFBRWhCLHFGQUEwQjs7Ozs7OzswQkFBRyxDQUFxQzs7aUZBQzdFbUIsSUFBSTtnQkFBQ0MsSUFBSSxFQUFDLENBQVk7Ozs7Ozs7K0ZBQUVDLENBQUM7b0JBQUNMLFNBQVMsRUFBRWhCLHFGQUEwQjs7Ozs7Ozs4QkFBRyxDQUFPOzs7OztBQUl4RixDQUFDO0lBekJLTyxVQUFVOztRQUVNRiwrREFBYTs7O0tBRjdCRSxVQUFVO0FBMkJoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLWhlYWRlci5qcz8zY2Q2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluLWhlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJ0Bjb250ZXh0L3Njcm9sbFN0YXRlJztcclxuaW1wb3J0IHsgTG9hZGVySW1nIH0gZnJvbSAnQGhlbHBlcnMvbG9hZGVySW1nJztcclxuXHJcblxyXG5jb25zdCBNYWluSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyB2YWx1ZVl9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG4gICAgY29uc3QgW3N0YXRlUG9zWSwgc2V0U3RhdGVQb3NZXSA9IHZhbHVlWTtcclxuICBcclxuICAgIGNvbnN0IGltZyA9ICcvaW1hZ2VzL2FyY2hfNDY1eDMwMC5qcGcnO1xyXG5cclxuICAgIGNvbnN0IHN0eWxpbmcgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGAke2ltZ31gICsgXCIpXCIsXHJcbiAgICAgICAgLyogd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLCAqL1xyXG4gICAgICAgIC8vIHRvcDpgJHtzdGF0ZVBvc1l9cHhgICxcclxuICAgICAgICAvLyB0cmFuc2Zvcm06XCJ0cmFuc2xhdGVZKFwiK2Ake3N0YXRlUG9zWX1weGArXCIpXCJcclxuICAgIH1cclxuXHJcbiAvKiAgICBzdHlsZT17c3R5bGluZ30gKi9cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWhlYWRlclwiXX0gPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWhlYWRlcl9fdGl0bGVcIl19PlLDqWFsaXNlciB1biBzaXRlIGludGVybmV0IDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1oZWFkZXJfX3RleHRcIl19PkVuIHF1ZWxxdWVzIG1pbnV0ZXMgb3UgdW4gcGV1IHBsdXMuLi48L3A+IFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjZGVjb3V2cmlyXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWhlYWRlcl9fbGlua1wiXX0+VmlzaXRlcjwvYT48L0xpbms+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlQXBwQ29udGV4dCIsIkxvYWRlckltZyIsIk1haW5IZWFkZXIiLCJwcm9wcyIsInZhbHVlWSIsInN0YXRlUG9zWSIsInNldFN0YXRlUG9zWSIsImltZyIsInN0eWxpbmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJMaW5rIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main-header.js\n");

/***/ })

});