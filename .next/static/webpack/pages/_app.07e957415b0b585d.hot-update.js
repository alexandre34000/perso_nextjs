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

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation.module.css */ \"./src/components/Navigation.module.css\");\n/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_scrollState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @context/scrollState */ \"./src/context/scrollState.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Navigation = function(props) {\n    _s1();\n    var ref = (0,_context_scrollState__WEBPACK_IMPORTED_MODULE_3__.useAppContext)(), valueY = ref.valueY, valueX = ref.valueX, valueActive = ref.valueActive;\n    var _valueY = _slicedToArray(valueY, 2), statePosY = _valueY[0], setStatePosY = _valueY[1];\n    var _valueX = _slicedToArray(valueX, 2), statePosX = _valueX[0], setStatPosX = _valueX[1];\n    var _valueActive = _slicedToArray(valueActive, 2), isActive = _valueActive[0], setIsActive = _valueActive[1];\n    var pos = \"menu\".concat(props.pos);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"container-header\"]),\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"container-entete\"]),\n            id: \"screen-top\",\n            \"data-visible\": isActive,\n            __source: {\n                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"content-entete\"]),\n                __source: {\n                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"content-entete__left\"]),\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-left\"]),\n                            id: \"toogleMenu\",\n                            \"aria-label\": \"naviguer vers d'autres sections du site\",\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete__list-item\"]),\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/commencer\",\n                                            __source: {\n                                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                lineNumber: 26,\n                                                columnNumber: 61\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"link-header\"]),\n                                                __source: {\n                                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                    lineNumber: 26,\n                                                    columnNumber: 85\n                                                },\n                                                __self: _this,\n                                                children: \"Commencer\"\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete__list-item\"]),\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/templates\",\n                                            __source: {\n                                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                lineNumber: 27,\n                                                columnNumber: 61\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"link-header\"]),\n                                                __source: {\n                                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 85\n                                                },\n                                                __self: _this,\n                                                children: \"Templates\"\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete__list-item\"]),\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/realiser\",\n                                            __source: {\n                                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 61\n                                            },\n                                            __self: _this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"link-header\"]),\n                                                __source: {\n                                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 84\n                                                },\n                                                __self: _this,\n                                                children: \"R\\xe9aliser\"\n                                            })\n                                        })\n                                    })\n                                ]\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-center\"]),\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-center__logo\"]),\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                __source: {\n                                    fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 58\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-center__logo\"]),\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 73\n                                    },\n                                    __self: _this,\n                                    children: \"AC\"\n                                })\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-right\"]),\n                        \"aria-label\": \"naviguer vers d'autres pages\",\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete__list-item\"]),\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/profil\",\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 59\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"link-header\"]),\n                                            __source: {\n                                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 80\n                                            },\n                                            __self: _this,\n                                            children: \"Profil\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete__list-item\"]),\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/login\",\n                                        __source: {\n                                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 59\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"link-header\"]),\n                                            __source: {\n                                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 79\n                                            },\n                                            __self: _this,\n                                            children: \"Log in\"\n                                        })\n                                    })\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"entete-right__mobile\"]),\n                        __source: {\n                            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"nav-icon\"]),\n                            \"data-open\": \"false\",\n                            __source: {\n                                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    __source: {\n                                        fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Navigation.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s1(Navigation, \"7scmoQSK+Iep2e13S5Luh509J70=\", false, function() {\n    return [\n        _context_scrollState__WEBPACK_IMPORTED_MODULE_3__.useAppContext\n    ];\n});\n_c = Navigation;\n/* <nav className={ styles[`${pos}`] } >\r\n   <ul>\r\n     {props.data.map((route, i) => <li key={i} className={styles.li}><Link  href=\"#\" >\r\n       <a className={styles.menulink}>{route.title}</a>\r\n     </Link></li>)}\r\n     </ul>\r\n   </nav> */ /* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNnQjtBQUNXO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsR0FBSyxDQUFDTSxVQUFVLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7SUFFN0IsR0FBSyxDQUFtQ0YsR0FBZSxHQUFmQSxtRUFBYSxJQUE3Q0csTUFBTSxHQUEwQkgsR0FBZSxDQUEvQ0csTUFBTSxFQUFFQyxNQUFNLEdBQWtCSixHQUFlLENBQXZDSSxNQUFNLEVBQUVDLFdBQVcsR0FBS0wsR0FBZSxDQUEvQkssV0FBVztJQUNuQyxHQUFLLENBQTZCRixPQUFNLGtCQUFOQSxNQUFNLE1BQWpDRyxTQUFTLEdBQWtCSCxPQUFNLEtBQXRCSSxZQUFZLEdBQUlKLE9BQU07SUFDeEMsR0FBSyxDQUE0QkMsT0FBTSxrQkFBTkEsTUFBTSxNQUFoQ0ksU0FBUyxHQUFpQkosT0FBTSxLQUFyQkssV0FBVyxHQUFJTCxPQUFNO0lBQ3ZDLEdBQUssQ0FBMkJDLFlBQVcsa0JBQVhBLFdBQVcsTUFBcENLLFFBQVEsR0FBaUJMLFlBQVcsS0FBMUJNLFdBQVcsR0FBSU4sWUFBVztJQU0zQyxHQUFLLENBQUNPLEdBQUcsR0FBSSxDQUFJLE1BQVksT0FBVlYsS0FBSyxDQUFDVSxHQUFHO0lBRTVCLE1BQU0sc0VBQ0hDLENBQU07UUFBQ0MsU0FBUyxFQUFFbEIsbUZBQXlCOzs7Ozs7O3VGQUN6Q21CLENBQUc7WUFBQ0QsU0FBUyxFQUFFbEIsbUZBQXlCO1lBQUdvQixFQUFFLEVBQUMsQ0FBWTtZQUFDQyxDQUFZLGVBQUVQLFFBQVE7Ozs7Ozs7NEZBQy9FSyxDQUFHO2dCQUFDRCxTQUFTLEVBQUVsQixpRkFBdUI7Ozs7Ozs7O3lGQUNwQ21CLENBQUc7d0JBQUNELFNBQVMsRUFBRWxCLHVGQUE2Qjs7Ozs7Ozt1R0FDMUNzQixDQUFHOzRCQUFDSixTQUFTLEVBQUVsQiw4RUFBb0I7NEJBQUdvQixFQUFFLEVBQUMsQ0FBWTs0QkFBQ0csQ0FBVSxhQUFDLENBQXlDOzs7Ozs7OzRHQUN4R0MsQ0FBRTs7Ozs7Ozs7eUdBQ0FDLENBQUU7d0NBQUNQLFNBQVMsRUFBRWxCLG9GQUEwQjs7Ozs7Ozt1SEFBSUQsa0RBQUk7NENBQUMyQixJQUFJLEVBQUMsQ0FBWTs7Ozs7OzsySEFBRUMsQ0FBQztnREFBQ1QsU0FBUyxFQUFFbEIsOEVBQW9COzs7Ozs7OzBEQUFJLENBQVM7Ozs7eUdBQ2xIeUIsQ0FBRTt3Q0FBQ1AsU0FBUyxFQUFFbEIsb0ZBQTBCOzs7Ozs7O3VIQUFJRCxrREFBSTs0Q0FBQzJCLElBQUksRUFBQyxDQUFZOzs7Ozs7OzJIQUFFQyxDQUFDO2dEQUFDVCxTQUFTLEVBQUVsQiw4RUFBb0I7Ozs7Ozs7MERBQUksQ0FBUzs7Ozt5R0FDbEh5QixDQUFFO3dDQUFDUCxTQUFTLEVBQUVsQixvRkFBMEI7Ozs7Ozs7dUhBQUlELGtEQUFJOzRDQUFDMkIsSUFBSSxFQUFDLENBQVc7Ozs7Ozs7MkhBQUVDLENBQUM7Z0RBQUNULFNBQVMsRUFBRWxCLDhFQUFvQjs7Ozs7OzswREFBSSxDQUFROzs7Ozs7Ozt5RkFJdEhtQixDQUFHO3dCQUFDRCxTQUFTLEVBQUVsQixnRkFBc0I7Ozs7Ozs7dUdBQ25DNEIsQ0FBQzs0QkFBQ1YsU0FBUyxFQUFFbEIsc0ZBQTRCOzs7Ozs7OzJHQUFJRCxrREFBSTtnQ0FBQzJCLElBQUksRUFBQyxDQUFHOzs7Ozs7OytHQUFFQyxDQUFDO29DQUFDVCxTQUFTLEVBQUVsQixzRkFBNEI7Ozs7Ozs7OENBQUcsQ0FBRTs7Ozs7eUZBRTVHc0IsQ0FBRzt3QkFBQ0osU0FBUyxFQUFFbEIsK0VBQXFCO3dCQUFHdUIsQ0FBVSxhQUFDLENBQThCOzs7Ozs7O3dHQUM5RUMsQ0FBRTs7Ozs7Ozs7cUdBQ0FDLENBQUU7b0NBQUNQLFNBQVMsRUFBRWxCLG9GQUEwQjs7Ozs7OzttSEFBSUQsa0RBQUk7d0NBQUMyQixJQUFJLEVBQUMsQ0FBUzs7Ozs7Ozt1SEFBRUMsQ0FBQzs0Q0FBQ1QsU0FBUyxFQUFFbEIsOEVBQW9COzs7Ozs7O3NEQUFJLENBQU07Ozs7cUdBQzVHeUIsQ0FBRTtvQ0FBQ1AsU0FBUyxFQUFFbEIsb0ZBQTBCOzs7Ozs7O21IQUFJRCxrREFBSTt3Q0FBQzJCLElBQUksRUFBQyxDQUFROzs7Ozs7O3VIQUFFQyxDQUFDOzRDQUFDVCxTQUFTLEVBQUVsQiw4RUFBb0I7Ozs7Ozs7c0RBQUksQ0FBTTs7Ozs7Ozt5RkFHL0dtQixDQUFHO3dCQUFDRCxTQUFTLEVBQUVsQix1RkFBNkI7Ozs7Ozs7d0dBQzFDbUIsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFFbEIsMkVBQWlCOzRCQUFHNkIsQ0FBUyxZQUFDLENBQU87Ozs7Ozs7O3FHQUNsREMsQ0FBSTs7Ozs7Ozs7cUdBQ0pBLENBQUk7Ozs7Ozs7O3FHQUNKQSxDQUFJOzs7Ozs7OztxR0FDSkEsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CLENBQUM7SUFoREt6QixVQUFVOztRQUUwQkQsK0RBQWE7OztLQUZqREMsVUFBVTtBQW9EaEIsRUFNWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzPzc3M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICdAY29udGV4dC9zY3JvbGxTdGF0ZSc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgdmFsdWVZLCB2YWx1ZVgsIHZhbHVlQWN0aXZlIH0gPSB1c2VBcHBDb250ZXh0KCk7XHJcbiAgY29uc3QgW3N0YXRlUG9zWSwgc2V0U3RhdGVQb3NZXSA9IHZhbHVlWTtcclxuICBjb25zdCBbc3RhdGVQb3NYLCBzZXRTdGF0UG9zWF0gPSB2YWx1ZVg7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB2YWx1ZUFjdGl2ZTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHBvcyA9IGBtZW51JHtwcm9wcy5wb3N9YFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRhaW5lci1oZWFkZXJcIl19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGFpbmVyLWVudGV0ZVwiXX0gaWQ9XCJzY3JlZW4tdG9wXCIgZGF0YS12aXNpYmxlPXtpc0FjdGl2ZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRlbnQtZW50ZXRlXCJdfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50LWVudGV0ZV9fbGVmdFwiXX0+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJlbnRldGUtbGVmdFwiXX0gaWQ9XCJ0b29nbGVNZW51XCIgYXJpYS1sYWJlbD1cIm5hdmlndWVyIHZlcnMgZCdhdXRyZXMgc2VjdGlvbnMgZHUgc2l0ZVwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tcImVudGV0ZV9fbGlzdC1pdGVtXCJdfT48TGluayBocmVmPVwiL2NvbW1lbmNlclwiPjxhIGNsYXNzTmFtZT17c3R5bGVzW1wibGluay1oZWFkZXJcIl19ID5Db21tZW5jZXI8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXNbXCJlbnRldGVfX2xpc3QtaXRlbVwiXX0+PExpbmsgaHJlZj1cIi90ZW1wbGF0ZXNcIj48YSBjbGFzc05hbWU9e3N0eWxlc1tcImxpbmstaGVhZGVyXCJdfSA+VGVtcGxhdGVzPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wiZW50ZXRlX19saXN0LWl0ZW1cIl19PjxMaW5rIGhyZWY9XCIvcmVhbGlzZXJcIj48YSBjbGFzc05hbWU9e3N0eWxlc1tcImxpbmstaGVhZGVyXCJdfSA+UsOpYWxpc2VyPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZW50ZXRlLWNlbnRlclwiXX0gPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcImVudGV0ZS1jZW50ZXJfX2xvZ29cIl19PjxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXNbXCJlbnRldGUtY2VudGVyX19sb2dvXCJdfT5BQzwvYT48L0xpbms+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wiZW50ZXRlLXJpZ2h0XCJdfSBhcmlhLWxhYmVsPVwibmF2aWd1ZXIgdmVycyBkJ2F1dHJlcyBwYWdlc1wiID5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlc1tcImVudGV0ZV9fbGlzdC1pdGVtXCJdfT48TGluayBocmVmPVwiL3Byb2ZpbFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzW1wibGluay1oZWFkZXJcIl19ID5Qcm9maWw8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wiZW50ZXRlX19saXN0LWl0ZW1cIl19PjxMaW5rIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWU9e3N0eWxlc1tcImxpbmstaGVhZGVyXCJdfSA+TG9nIGluPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZW50ZXRlLXJpZ2h0X19tb2JpbGVcIl19ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1pY29uXCJdfSBkYXRhLW9wZW49XCJmYWxzZVwiID5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXIgPlxyXG4gIClcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyogPG5hdiBjbGFzc05hbWU9eyBzdHlsZXNbYCR7cG9zfWBdIH0gPlxyXG4gICA8dWw+XHJcbiAgICAge3Byb3BzLmRhdGEubWFwKChyb3V0ZSwgaSkgPT4gPGxpIGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMubGl9PjxMaW5rICBocmVmPVwiI1wiID5cclxuICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVsaW5rfT57cm91dGUudGl0bGV9PC9hPlxyXG4gICAgIDwvTGluaz48L2xpPil9XHJcbiAgICAgPC91bD5cclxuICAgPC9uYXY+ICovXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJ2YWx1ZVkiLCJ2YWx1ZVgiLCJ2YWx1ZUFjdGl2ZSIsInN0YXRlUG9zWSIsInNldFN0YXRlUG9zWSIsInN0YXRlUG9zWCIsInNldFN0YXRQb3NYIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInBvcyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwiZGF0YS12aXNpYmxlIiwibmF2IiwiYXJpYS1sYWJlbCIsInVsIiwibGkiLCJocmVmIiwiYSIsInAiLCJkYXRhLW9wZW4iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navigation.js\n");

/***/ })

});