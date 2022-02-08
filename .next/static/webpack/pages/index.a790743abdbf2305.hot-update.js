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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.module.css */ \"./src/pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main-header */ \"./src/components/Main-header.js\");\n/* harmony import */ var _components_Cards_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cards-home */ \"./src/components/Cards-home.js\");\n/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first */ \"./src/pages/first.js\");\n/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TitleSection */ \"./src/components/TitleSection.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_scrollState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/scrollState */ \"./src/context/scrollState.js\");\n/* harmony import */ var _i18n_dataCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/dataCards */ \"./src/i18n/dataCards.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s1();\n    var pageMeta = {\n        title: 'Alexandre Charlier d\\xe9veloppeur web, react angular next redux',\n        description: 'D\\xe9couvrez mon site pour la pr\\xe9sentation de mon blog et de mon profil'\n    };\n    var dataMainHeader = {\n        page: 'home',\n        img: '/images/page-home/arch_1900x1200.jpg',\n        title: \"R\\xe9aliser un site internet\",\n        subtitle: \"En quelques minutes ou un peu plus...\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([\n        _i18n_dataCards__WEBPACK_IMPORTED_MODULE_8__.dataCards\n    ]), data = ref[0], setData = ref[1];\n    var headerHeight = 750;\n    var valueY = (0,_context_scrollState__WEBPACK_IMPORTED_MODULE_7__.useAppContext)().valueY;\n    var _valueY = _slicedToArray(valueY, 2), posY = _valueY[0], setPosY = _valueY[1];\n    var reveal = function(arg) {\n        var array = _toConsumableArray(data);\n        array[0][arg].reveal = \"true\";\n        setData(array);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var posBottom = window.screen.height + posY;\n        if (posBottom > headerHeight) {\n            if (posBottom > headerHeight + 300 && posBottom < headerHeight + 650 && data[0][0].reveal === \"false\") {\n                reveal(0);\n            } else if (posBottom > headerHeight + 700 && posBottom < headerHeight + 1100 && data[0][1].reveal === \"false\") {\n                reveal(1);\n            } else if (posBottom > headerHeight + 1100 && data[0][2].reveal === \"false\") {\n                reveal(2);\n            }\n        }\n    }, [\n        posY\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        pageMeta: pageMeta,\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n            lineNumber: 58,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"main-container\"]),\n            __source: {\n                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Main_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    dataHeader: dataMainHeader,\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"container-first-parts\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"content-first-parts\"]),\n                        id: \"decouvrir\",\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TitleSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                title: \"D\\xe9couvrir\",\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"first-parts__main\"]),\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: _i18n_dataCards__WEBPACK_IMPORTED_MODULE_8__.dataCards.map(function(card, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Cards_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        dataCards: card,\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 43\n                                        },\n                                        __self: _this1\n                                    }, i);\n                                })\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"container-second-parts\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"content-second-parts\"]),\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"second-parts__title\"]),\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"\\\"Les d\\xe9tails ne sont pas des d\\xe9tails, ils font la conception d'un produit\\\"\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"second-parts__author\"]),\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: \"Bill Bernbach\"\n                            })\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"container-third-parts\"]),\n                    __source: {\n                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"third-parts__title\"]),\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Une question, un avis ? N'hesitez-pas !\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default()[\"third-parts__button\"]),\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Cliquez\"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s1(HomePage, \"2BipBawn7taFA/6OspBBjHA2Hj8=\", false, function() {\n    return [\n        _context_scrollState__WEBPACK_IMPORTED_MODULE_7__.useAppContext\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFXOzs7Ozs7OztpR0FDMUQ3QixnRUFBWTtnQ0FBQ08sS0FBSyxFQUFDLENBQVc7Ozs7Ozs7O2lHQUM3Qm1CLENBQUU7Z0NBQUNDLFNBQVMsRUFBRS9CLCtFQUEwQjs7Ozs7OzswQ0FDdkNRLDBEQUFhLENBQUMsUUFBUSxDQUFQMkIsSUFBSSxFQUFFQyxDQUFDO2tEQUFLLE1BQU0sQ0FBQyx1REFBTmxDLDhEQUFLO3dDQUFTTSxTQUFTLEVBQUUyQixJQUFJOzs7Ozs7O3VDQUFsQkMsQ0FBQzs7Ozs7O3FGQUk5Q04sQ0FBRztvQkFBQ0MsU0FBUyxFQUFFL0Isb0ZBQStCOzs7Ozs7O29HQUM1QzhCLENBQUc7d0JBQUNDLFNBQVMsRUFBRS9CLGtGQUE2Qjs7Ozs7Ozs7aUdBQzFDcUMsQ0FBSTtnQ0FBQ04sU0FBUyxFQUFFL0IsaUZBQTRCOzs7Ozs7OzBDQUFHLENBQ3RDOztpR0FDVHFDLENBQUk7Z0NBQUNOLFNBQVMsRUFBRS9CLGtGQUE2Qjs7Ozs7OzswQ0FBRyxDQUFhOzs7OztzRkFHakU4QixDQUFHO29CQUFDQyxTQUFTLEVBQUUvQixtRkFBOEI7Ozs7Ozs7OzZGQUMzQ3NDLENBQUM7NEJBQUNQLFNBQVMsRUFBRS9CLGdGQUEyQjs7Ozs7OztzQ0FBRyxDQUF1Qzs7NkZBQ2xGdUMsQ0FBTTs0QkFBQ1IsU0FBUyxFQUFFL0IsaUZBQTRCOzs7Ozs7O3NDQUFHLENBQU87Ozs7Ozs7QUFNbkUsQ0FBQztJQXpFS1MsUUFBUTs7UUFvQk9GLCtEQUFhOzs7S0FwQjVCRSxRQUFRO0FBNkVkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbi1oZWFkZXInO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcy1ob21lJztcclxuaW1wb3J0IHsgZ2V0U3RhdGljUHJvcHMgfSBmcm9tICcuL2ZpcnN0JztcclxuaW1wb3J0IFRpdGxlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3Njcm9sbFN0YXRlJztcclxuaW1wb3J0IHsgZGF0YUNhcmRzIH0gZnJvbSAnLi4vaTE4bi9kYXRhQ2FyZHMnO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHBhZ2VNZXRhID0ge1xyXG4gICAgdGl0bGU6ICdBbGV4YW5kcmUgQ2hhcmxpZXIgZMOpdmVsb3BwZXVyIHdlYiwgcmVhY3QgYW5ndWxhciBuZXh0IHJlZHV4JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRMOpY291dnJleiBtb24gc2l0ZSBwb3VyIGxhIHByw6lzZW50YXRpb24gZGUgbW9uIGJsb2cgZXQgZGUgbW9uIHByb2ZpbCcsXHJcbiAgICAvKiAgaW1hZ2U6XHJcbiAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzY2OTcyNDY3ODctMWY3YWU1NjhkODlhP3E9ODUmZm09anBnJmZpdD1jcm9wJnc9MTYwMCZoPTgwMCcsIFxyXG4gICAgICAgdXJsOiBgJHtTSVRFX0RPTUFJTn0vYWJvdXRgLCovXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YU1haW5IZWFkZXIgPSB7XHJcbiAgICBwYWdlOiAnaG9tZScsXHJcbiAgICBpbWc6ICcvaW1hZ2VzL3BhZ2UtaG9tZS9hcmNoXzE5MDB4MTIwMC5qcGcnLFxyXG4gICAgdGl0bGU6IFwiUsOpYWxpc2VyIHVuIHNpdGUgaW50ZXJuZXRcIixcclxuICAgIHN1YnRpdGxlOiBcIkVuIHF1ZWxxdWVzIG1pbnV0ZXMgb3UgdW4gcGV1IHBsdXMuLi5cIlxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW2RhdGFDYXJkc10pO1xyXG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IDc1MDtcclxuXHJcbiAgY29uc3QgeyB2YWx1ZVkgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuICBjb25zdCBbcG9zWSwgc2V0UG9zWV0gPSB2YWx1ZVk7XHJcblxyXG4gIGNvbnN0IHJldmVhbCA9IChhcmcpID0+IHtcclxuICAgIGxldCBhcnJheSA9IFsuLi5kYXRhXVxyXG4gICAgYXJyYXlbMF1bYXJnXS5yZXZlYWwgPSBcInRydWVcIjtcclxuICAgIHNldERhdGEoYXJyYXkpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zQm90dG9tID0gKHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICsgcG9zWSk7XHJcbiAgICBpZiAoKHBvc0JvdHRvbSA+IGhlYWRlckhlaWdodCkpIHtcclxuICAgICAgaWYgKHBvc0JvdHRvbSA+IChoZWFkZXJIZWlnaHQgKyAzMDApICYmIChwb3NCb3R0b20gPCAoaGVhZGVySGVpZ2h0ICsgNjUwKSkgJiYgZGF0YVswXVswXS5yZXZlYWwgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgIHJldmVhbCgwKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChwb3NCb3R0b20gPiAoaGVhZGVySGVpZ2h0ICsgNzAwKSAmJiAocG9zQm90dG9tIDwgKGhlYWRlckhlaWdodCArIDExMDApKSAmJiBkYXRhWzBdWzFdLnJldmVhbCA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgcmV2ZWFsKDEpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoKHBvc0JvdHRvbSA+IChoZWFkZXJIZWlnaHQgKyAxMTAwKSkgJiYgKGRhdGFbMF1bMl0ucmV2ZWFsID09PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgcmV2ZWFsKDIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcG9zWV0pXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxMYXlvdXQgcGFnZU1ldGE9e3BhZ2VNZXRhfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tY29udGFpbmVyXCJdfT5cclxuICAgICAgICA8TWFpbkhlYWRlciBkYXRhSGVhZGVyPXtkYXRhTWFpbkhlYWRlcn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyLWZpcnN0LXBhcnRzXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50LWZpcnN0LXBhcnRzXCJdfSBpZD1cImRlY291dnJpclwiPlxyXG4gICAgICAgICAgICA8VGl0bGVTZWN0aW9uIHRpdGxlPVwiRMOpY291dnJpclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaXJzdC1wYXJ0c19fbWFpblwiXX0+XHJcbiAgICAgICAgICAgICAge2RhdGFDYXJkcy5tYXAoKGNhcmQsIGkpID0+IDxDYXJkcyBrZXk9e2l9IGRhdGFDYXJkcz17Y2FyZH0gLz4pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250YWluZXItc2Vjb25kLXBhcnRzXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50LXNlY29uZC1wYXJ0c1wiXX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wic2Vjb25kLXBhcnRzX190aXRsZVwiXX0+XCJMZXMgZMOpdGFpbHMgbmUgc29udCBwYXMgZGVzIGTDqXRhaWxzLCBpbHMgZm9udCBsYSBjb25jZXB0aW9uIGQndW5cclxuICAgICAgICAgICAgICBwcm9kdWl0XCI8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wic2Vjb25kLXBhcnRzX19hdXRob3JcIl19PkJpbGwgQmVybmJhY2g8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyLXRoaXJkLXBhcnRzXCJdfT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1widGhpcmQtcGFydHNfX3RpdGxlXCJdfT5VbmUgcXVlc3Rpb24sIHVuIGF2aXMgPyBOJ2hlc2l0ZXotcGFzICE8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzW1widGhpcmQtcGFydHNfX2J1dHRvblwiXX0+Q2xpcXVlejwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcblxyXG5cclxuLyogPGRpdiBjbGFzcz1cIm1haW4tY2VudGVyX19jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY2FyZHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkcy1pbWdcIiBzcmM9Jy4vZGlzdC9waWN0dXJlcy9kdWppYW5neWFuL2R1amktMS0xNjY3eDI1MDAuamZpZicgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgPHA+QmllbiBjb21tZW5jZXI8L3A+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rLXBvcyBsaW5rLWNhcmRzXCIgaHJlZj1cImNvbW1lbmNlci5odG1sXCI+RW50csOpZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItY2FyZHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkcy1pbWdcIiBzcmM9Jy4vZGlzdC9waWN0dXJlcy9nbG9iZS5qcGcnIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gIDxkaXYgY2xhc3MgPVwiZGl2Y2FudmFzXCI+XHJcbiAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMTUwXCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxwPlRvdXIgZHUgbW9uZGU8L3A+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rLXBvcyBsaW5rLWNhcmRzXCIgaHJlZj1cInRvdXItZHUtbW9uZGUuaHRtbFwiPlZpc2l0ZXI8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWNhcmRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZHMtaW1nXCIgc3JjPScuL2Rpc3QvcGljdHVyZXMvc3RhZ2UuanBnJyBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkcy1ib3R0b21cIj5cclxuICAgICAgICAgICAgICA8cD5Sw6lhbGlzZXI8L3A+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rLXBvcyBsaW5rLWNhcmRzXCIgaHJlZj1cImNvbW1lbmNlci5odG1sXCI+RW50csOpZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4qLyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJzdHlsZXMiLCJNYWluSGVhZGVyIiwiQ2FyZHMiLCJnZXRTdGF0aWNQcm9wcyIsIlRpdGxlU2VjdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXBwQ29udGV4dCIsImRhdGFDYXJkcyIsIkhvbWVQYWdlIiwicGFnZU1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0YU1haW5IZWFkZXIiLCJwYWdlIiwiaW1nIiwic3VidGl0bGUiLCJkYXRhIiwic2V0RGF0YSIsImhlYWRlckhlaWdodCIsInZhbHVlWSIsInBvc1kiLCJzZXRQb3NZIiwicmV2ZWFsIiwiYXJnIiwiYXJyYXkiLCJwb3NCb3R0b20iLCJ3aW5kb3ciLCJzY3JlZW4iLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhSGVhZGVyIiwiaWQiLCJtYXAiLCJjYXJkIiwiaSIsInNwYW4iLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

});