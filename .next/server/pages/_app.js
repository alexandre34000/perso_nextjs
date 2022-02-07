/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/scrollState.js":
/*!************************************!*\
  !*** ./src/context/scrollState.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppWrapper({ children  }) {\n    const { 0: posY , 1: setPosY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: posX , 1: setPosX  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: touchMove , 1: setTouchMove  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: touchStart , 1: setTouchStart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: touchEnd , 1: setTouchEnd  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    var oldValue = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.onscroll = ()=>{\n            let newValue = window.scrollY;\n            setPosY(newValue);\n            setIsActive(newValue > oldValue ? false : true);\n            oldValue = newValue;\n        };\n        window.ontouchstart = (e)=>{\n            setTouchStart(e.targetTouches[0].clientY);\n        };\n        window.ontouchmove = (e)=>{\n            setTouchMove(e.targetTouches[0].clientY);\n        };\n        window.ontouchend = ()=>{\n            setTouchEnd(true);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (touchEnd && touchMove && touchStart) {\n            console.log(\"istouched\" + touchMove + \"\" + touchStart);\n            setIsActive(touchMove - touchStart > 100 ? true : false);\n        }\n    }, [\n        touchEnd\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppContext.Provider, {\n        value: {\n            valueY: [\n                posY,\n                setPosY\n            ],\n            valueX: [\n                posX,\n                setPosY\n            ],\n            valueActive: [\n                isActive,\n                setIsActive\n            ]\n        },\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\context\\\\scrollState.js\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\nfunction useAppContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9zY3JvbGxTdGF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBRXRFLEtBQUssQ0FBQ0ksVUFBVSxpQkFBR0osb0RBQWE7QUFFekIsU0FBU0ssVUFBVSxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBR3hDLEtBQUssTUFBRUMsSUFBSSxNQUFFQyxPQUFPLE1BQUlMLCtDQUFRLENBQUMsQ0FBQztJQUNsQyxLQUFLLE1BQUVNLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7SUFFbEMsS0FBSyxNQUFFUSxRQUFRLE1BQUVDLFdBQVcsTUFBSVQsK0NBQVEsQ0FBQyxJQUFJO0lBQzdDLEtBQUssTUFBRVUsU0FBUyxNQUFFQyxZQUFZLE1BQUlYLCtDQUFRLENBQUMsSUFBSTtJQUMvQyxLQUFLLE1BQUVZLFVBQVUsTUFBRUMsYUFBYSxNQUFJYiwrQ0FBUSxDQUFDLElBQUk7SUFDakQsS0FBSyxNQUFFYyxRQUFRLE1BQUVDLFdBQVcsTUFBSWYsK0NBQVEsQ0FBQyxLQUFLO0lBQzlDLEdBQUcsQ0FBQ2dCLFFBQVEsR0FBRyxDQUFDO0lBRWhCakIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZrQixNQUFNLENBQUNDLFFBQVEsT0FBUyxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQ0MsUUFBUSxHQUFHRixNQUFNLENBQUNHLE9BQU87WUFDN0JmLE9BQU8sQ0FBQ2MsUUFBUTtZQUNoQlYsV0FBVyxDQUFDVSxRQUFRLEdBQUdILFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSTtZQUM5Q0EsUUFBUSxHQUFHRyxRQUFRO1FBQ3JCLENBQUM7UUFFREYsTUFBTSxDQUFDSSxZQUFZLElBQUlDLENBQUMsR0FBSyxDQUFDO1lBQzVCVCxhQUFhLENBQUNTLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLENBQUMsRUFBRUMsT0FBTztRQUMxQyxDQUFDO1FBQ0RQLE1BQU0sQ0FBQ1EsV0FBVyxJQUFJSCxDQUFDLEdBQUssQ0FBQztZQUMzQlgsWUFBWSxDQUFDVyxDQUFDLENBQUNDLGFBQWEsQ0FBQyxDQUFDLEVBQUVDLE9BQU87UUFDekMsQ0FBQztRQUNEUCxNQUFNLENBQUNTLFVBQVUsT0FBVSxDQUFDO1lBQzFCWCxXQUFXLENBQUMsSUFBSTtRQUNsQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMaEIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsRUFBRSxFQUFFZSxRQUFRLElBQUlKLFNBQVMsSUFBSUUsVUFBVSxFQUFFLENBQUM7WUFDeENlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVcsYUFBQ2xCLFNBQVMsR0FBRSxDQUFFLElBQUNFLFVBQVU7WUFDaERILFdBQVcsQ0FBRUMsU0FBUyxHQUFHRSxVQUFVLEdBQUksR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLO1FBQzNELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0U7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFJYixNQUFNLHNFQUNIYixVQUFVLENBQUM0QixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFDM0I7Z0JBQUFBLElBQUk7Z0JBQUVDLE9BQU87WUFBQSxDQUFDO1lBQUUyQixNQUFNLEVBQUUsQ0FBQzFCO2dCQUFBQSxJQUFJO2dCQUFFRCxPQUFPO1lBQUEsQ0FBQztZQUFFNEIsV0FBVyxFQUFFLENBQUN6QjtnQkFBQUEsUUFBUTtnQkFBRUMsV0FBVztZQUFBLENBQUM7UUFBQyxDQUFDOzs7Ozs7O2tCQUNuSE4sUUFBUTs7QUFHZixDQUFDO0FBRU0sU0FBUytCLGFBQWEsR0FBRyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ3BDLGlEQUFVLENBQUNHLFVBQVU7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsZXhfbmV4dGpzLy4vc3JjL2NvbnRleHQvc2Nyb2xsU3RhdGUuanM/Mzg4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuXHJcbiAgY29uc3QgW3Bvc1ksIHNldFBvc1ldID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcG9zWCwgc2V0UG9zWF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0b3VjaE1vdmUsIHNldFRvdWNoTW92ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG91Y2hTdGFydCwgc2V0VG91Y2hTdGFydF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdG91Y2hFbmQsIHNldFRvdWNoRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB2YXIgb2xkVmFsdWUgPSAwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBsZXQgbmV3VmFsdWUgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgc2V0UG9zWShuZXdWYWx1ZSk7XHJcbiAgICAgIHNldElzQWN0aXZlKG5ld1ZhbHVlID4gb2xkVmFsdWUgPyBmYWxzZSA6IHRydWUpXHJcbiAgICAgIG9sZFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9udG91Y2hzdGFydCA9IChlKSA9PiB7XHJcbiAgICAgIHNldFRvdWNoU3RhcnQoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSAoZSkgPT4ge1xyXG4gICAgICBzZXRUb3VjaE1vdmUoZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cub250b3VjaGVuZCA9ICgoKSA9PiB7XHJcbiAgICAgIHNldFRvdWNoRW5kKHRydWUpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdWNoRW5kICYmIHRvdWNoTW92ZSAmJiB0b3VjaFN0YXJ0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaXN0b3VjaGVkXCIrdG91Y2hNb3ZlKyBcIlwiK3RvdWNoU3RhcnQpXHJcbiAgICAgIHNldElzQWN0aXZlKCh0b3VjaE1vdmUgLSB0b3VjaFN0YXJ0KSA+IDEwMCA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW3RvdWNoRW5kXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdmFsdWVZOiBbcG9zWSwgc2V0UG9zWV0sIHZhbHVlWDogW3Bvc1gsIHNldFBvc1ldLCB2YWx1ZUFjdGl2ZTogW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsInBvc1kiLCJzZXRQb3NZIiwicG9zWCIsInNldFBvc1giLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidG91Y2hNb3ZlIiwic2V0VG91Y2hNb3ZlIiwidG91Y2hTdGFydCIsInNldFRvdWNoU3RhcnQiLCJ0b3VjaEVuZCIsInNldFRvdWNoRW5kIiwib2xkVmFsdWUiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsIm5ld1ZhbHVlIiwic2Nyb2xsWSIsIm9udG91Y2hzdGFydCIsImUiLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WSIsIm9udG91Y2htb3ZlIiwib250b3VjaGVuZCIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidmFsdWVZIiwidmFsdWVYIiwidmFsdWVBY3RpdmUiLCJ1c2VBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/scrollState.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_scrollState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/scrollState.js */ \"./src/context/scrollState.js\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_scrollState_js__WEBPACK_IMPORTED_MODULE_2__.AppWrapper, {\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 10\n            },\n            __self: this\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQ3dCO0FBRXZDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFFcEQsTUFBTSxzRUFDRkgsK0RBQVU7Ozs7Ozs7dUZBQ1BFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7O0FBR2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGV4X25leHRqcy8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBBcHBXcmFwcGVyIH0gZnJvbSAnLi4vY29udGV4dC9zY3JvbGxTdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8QXBwV3JhcHBlcj5cclxuICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0FwcFdyYXBwZXI+XHJcbiAgIClcclxufSJdLCJuYW1lcyI6WyJBcHBXcmFwcGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();