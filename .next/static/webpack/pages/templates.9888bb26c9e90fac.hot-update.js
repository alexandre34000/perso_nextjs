"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/templates",{

/***/ "./src/components/Map-monde.js":
/*!*************************************!*\
  !*** ./src/components/Map-monde.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Map_monde_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map-monde.module.css */ \"./src/components/Map-monde.module.css\");\n/* harmony import */ var _Map_monde_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Map_monde_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MapMonde = function() {\n    var createEarth = function createEarth() {\n        var loader = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader();\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(8, 128, 128); //(rayon, segment largeur, segment hauteur)\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({\n            map: loader.load('/images/map/earthmap1k.jpg'),\n            bumpMap: loader.load('/images/map/earthbump1k.png'),\n            bumpScale: 1,\n            specularMap: loader.load('/images/map/earthspec1k.jpg'),\n            specular: new three__WEBPACK_IMPORTED_MODULE_2__.Color('grey'),\n            shininess: 15 // 30 defaut value\n        });\n        return new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n    };\n    var resize = function resize() {\n        var width = renderer.domElement.clientWidth;\n        var height = renderer.domElement.clientHeight;\n        renderer.setSize(width, height, false);\n        camera.aspect = width / height;\n        camera.updateProjectionMatrix();\n    };\n    var addObject = function addObject() {\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereBufferGeometry(0.15, 20, 20);\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 12587301\n        });\n        return new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n    };\n    var convertLatLongToCartesian = function convertLatLongToCartesian(p) {\n        var radius = 8;\n        var phi = p.lat * (Math.PI / 180);\n        var theta = -p.long * (Math.PI / 180);\n        var x = radius * Math.cos(theta) * Math.cos(phi);\n        var z = radius * Math.sin(theta) * Math.cos(phi);\n        var y = radius * Math.sin(phi);\n        return {\n            x: x,\n            y: y,\n            z: z\n        };\n    };\n    var getCurve = function getCurve(p1, p2) {\n        var v1 = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(p1.x, p1.y, p1.z);\n        var v2 = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(p2.x, p2.y, p2.z);\n        var points = [];\n        for(var i = 0; i < 20; i++){\n            var p = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().lerpvectors(v1, v2, i / 20);\n            p.normalize();\n            p.multiplyScalar(1 + 0.1 * Math.sin(Math.PI * i / 20));\n            points.push(p);\n        }\n        return points;\n    };\n    var displayCurve = function displayCurve() {\n        var path = new CatmullRomCurve3(getCurve());\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.TubeGeometry(path, 20, 2, 8, false);\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 255\n        });\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        scene.add(mesh);\n    };\n    _s();\n    var scene, renderer, camera, earthMesh;\n    /*  const coordonate = {\r\n        paris: {\r\n            lat: 48.856614,\r\n            long: 2.3522219\r\n        },\r\n        newyork: {\r\n            lat: 40.712784,\r\n            long: -74.005941\r\n        },\r\n        shanghai: {\r\n            lat: 31.224361,\r\n            long: 121.469170\r\n        }\r\n    } */ var coordonate = [\n        {\n            town: \"Paris\",\n            lat: 48.856614,\n            long: 2.3522219\n        },\n        {\n            town: \"NewYork\",\n            lat: 40.712784,\n            long: -74.005941\n        },\n        {\n            town: \"Shangai\",\n            lat: 31.224361,\n            long: 121.46917\n        }\n    ];\n    var init = function() {\n        renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            canvas: document.querySelector('#canvasmain'),\n            alpha: true,\n            antialias: true\n        }); //alpha: true\n        renderer.shadowMap.enabled = true;\n        scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(70, 1, 1, 1000);\n        camera.position.set(0, 0, 18);\n        var lightAmb = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(8947848, 0.8);\n        scene.add(lightAmb);\n        var light = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(16777215, 1);\n        light.position.set(5, 5, 5);\n        scene.add(light);\n        light.castShadow = true;\n        light.shadow.camera.near = 0.01;\n        light.shadow.camera.far = 15;\n        light.shadow.camera.fov = 45;\n        light.shadow.camera.left = -1;\n        light.shadow.camera.right = 1;\n        light.shadow.camera.top = 1;\n        light.shadow.camera.bottom = -1;\n        light.shadow.bias = 0.001;\n        light.shadow.darkness = 0.01;\n        light.shadow.mapSize.width = 1024;\n        light.shadow.mapSize.height = 1024;\n        earthMesh = createEarth();\n        earthMesh.receiveShadow = true;\n        earthMesh.castShadow = true;\n        earthMesh.rotation.x += 0.5;\n        scene.add(earthMesh);\n        coordonate.forEach(function(el) {\n            var dotMesh = addObject();\n            var cartesian = convertLatLongToCartesian(el);\n            dotMesh.position.set(cartesian.x, cartesian.y, cartesian.z);\n            earthMesh.add(dotMesh);\n        });\n    /* \r\n        var dotMeshParis = addObject();\r\n        var dotMeshNewYork = addObject();\r\n        var dotMeshShanghai = addObject();\r\n\r\n        let cartesianParis = convertLatLongToCartesian(coordonate.paris);\r\n        dotMeshParis.position.set(cartesianParis.x, cartesianParis.y, cartesianParis.z);\r\n        earthMesh.add(dotMeshParis);\r\n\r\n        let cartesianNewYork = convertLatLongToCartesian(coordonate.newyork);\r\n        dotMeshNewYork.position.set(cartesianNewYork.x, cartesianNewYork.y, cartesianNewYork.z);\r\n        earthMesh.add(dotMeshNewYork);\r\n\r\n        let cartesianShanghai = convertLatLongToCartesian(coordonate.shanghai);\r\n        dotMeshShanghai.position.set(cartesianShanghai.x, cartesianShanghai.y, cartesianShanghai.z);\r\n        earthMesh.add(dotMeshShanghai); */ };\n    function animate() {\n        resize();\n        earthMesh.rotation.y += 0.001; //0.001\n        renderer.render(scene, camera);\n        requestAnimationFrame(animate);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        init();\n        animate();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_Map_monde_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"main-container\"]),\n        __source: {\n            fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Map-monde.js\",\n            lineNumber: 174,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"canvas\", {\n            className: (_Map_monde_module_css__WEBPACK_IMPORTED_MODULE_3___default().canvas),\n            id: \"canvasmain\",\n            width: \"350\",\n            height: \"450\",\n            __source: {\n                fileName: \"C:\\\\projet\\\\alex_nextjs\\\\src\\\\components\\\\Map-monde.js\",\n                lineNumber: 175,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_s(MapMonde, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MapMonde;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapMonde);\nvar _c;\n$RefreshReg$(_c, \"MapMonde\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAtbW9uZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNhO0FBQ1Y7OztBQUVqQyxHQUFLLENBQUNHLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQztRQWlHWEMsV0FBVyxHQUFwQixRQUFRLENBQUNBLFdBQVcsR0FBRyxDQUFDO1FBQ3BCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0wsZ0RBQW1CO1FBQ3RDLEdBQUcsQ0FBQ08sUUFBUSxHQUFHLEdBQUcsQ0FBQ1AsaURBQW9CLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBMkM7UUFDaEcsR0FBRyxDQUFDUyxRQUFRLEdBQUcsR0FBRyxDQUFDVCxvREFBdUIsQ0FBQyxDQUFDO1lBQ3hDVyxHQUFHLEVBQUVOLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQTRCO1lBQzdDQyxPQUFPLEVBQUVSLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQTZCO1lBQ2xERSxTQUFTLEVBQUUsQ0FBQztZQUNaQyxXQUFXLEVBQUVWLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQTZCO1lBQ3RESSxRQUFRLEVBQUUsR0FBRyxDQUFDaEIsd0NBQVcsQ0FBQyxDQUFNO1lBQ2hDa0IsU0FBUyxFQUFFLEVBQUUsQ0FBbUI7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUNsQix1Q0FBVSxDQUFDTyxRQUFRLEVBQUVFLFFBQVE7SUFDNUMsQ0FBQztRQUVRVyxNQUFNLEdBQWYsUUFBUSxDQUFDQSxNQUFNLEdBQUcsQ0FBQztRQUNmLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ0MsV0FBVztRQUMzQyxHQUFHLENBQUNDLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxVQUFVLENBQUNHLFlBQVk7UUFDN0NKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDTixLQUFLLEVBQUVJLE1BQU0sRUFBRSxLQUFLO1FBQ3JDRyxNQUFNLENBQUNDLE1BQU0sR0FBR1IsS0FBSyxHQUFHSSxNQUFNO1FBQzlCRyxNQUFNLENBQUNFLHNCQUFzQjtJQUNqQyxDQUFDO1FBU1FDLFNBQVMsR0FBbEIsUUFBUSxDQUFDQSxTQUFTLEdBQUcsQ0FBQztRQUNsQixHQUFHLENBQUN4QixRQUFRLEdBQUcsR0FBRyxDQUFDUCx1REFBMEIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDMUQsR0FBRyxDQUFDUyxRQUFRLEdBQUcsR0FBRyxDQUFDVCxvREFBdUIsQ0FBQyxDQUFDO1lBQUNrQyxLQUFLLEVBQUUsUUFBUTtRQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQ2xDLHVDQUFVLENBQUNPLFFBQVEsRUFBRUUsUUFBUTtJQUM1QyxDQUFDO1FBRVEwQix5QkFBeUIsR0FBbEMsUUFBUSxDQUFDQSx5QkFBeUIsQ0FBQ0MsQ0FBQyxFQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztRQUNkLEdBQUcsQ0FBQ0MsR0FBRyxHQUFLRixDQUFDLENBQUNHLEdBQUcsSUFBS0MsSUFBSSxDQUFDQyxFQUFFLEdBQUcsR0FBRztRQUNuQyxHQUFHLENBQUNDLEtBQUssSUFBTU4sQ0FBQyxDQUFDTyxJQUFJLElBQUtILElBQUksQ0FBQ0MsRUFBRSxHQUFHLEdBQUc7UUFDdkMsR0FBRyxDQUFDRyxDQUFDLEdBQUdQLE1BQU0sR0FBR0csSUFBSSxDQUFDSyxHQUFHLENBQUNILEtBQUssSUFBSUYsSUFBSSxDQUFDSyxHQUFHLENBQUNQLEdBQUc7UUFDL0MsR0FBRyxDQUFDUSxDQUFDLEdBQUdULE1BQU0sR0FBR0csSUFBSSxDQUFDTyxHQUFHLENBQUNMLEtBQUssSUFBSUYsSUFBSSxDQUFDSyxHQUFHLENBQUNQLEdBQUc7UUFDL0MsR0FBRyxDQUFDVSxDQUFDLEdBQUdYLE1BQU0sR0FBR0csSUFBSSxDQUFDTyxHQUFHLENBQUNULEdBQUc7UUFDN0IsTUFBTSxDQUFDLENBQUM7WUFBQ00sQ0FBQyxFQUFEQSxDQUFDO1lBQUVJLENBQUMsRUFBREEsQ0FBQztZQUFFRixDQUFDLEVBQURBLENBQUM7UUFBQyxDQUFDO0lBQ3RCLENBQUM7UUFFUUcsUUFBUSxHQUFqQixRQUFRLENBQUNBLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFQyxFQUFFLEVBQUUsQ0FBQztRQUN2QixHQUFHLENBQUNDLEVBQUUsR0FBRyxHQUFHLENBQUNwRCwwQ0FBYSxDQUFDa0QsRUFBRSxDQUFDTixDQUFDLEVBQUVNLEVBQUUsQ0FBQ0YsQ0FBQyxFQUFFRSxFQUFFLENBQUNKLENBQUM7UUFDM0MsR0FBRyxDQUFDUSxFQUFFLEdBQUcsR0FBRyxDQUFDdEQsMENBQWEsQ0FBQ21ELEVBQUUsQ0FBQ1AsQ0FBQyxFQUFFTyxFQUFFLENBQUNILENBQUMsRUFBRUcsRUFBRSxDQUFDTCxDQUFDO1FBRTNDLEdBQUcsQ0FBQ1MsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxFQUFFLEVBQUVBLENBQUMsR0FBSSxDQUFDO1lBQzFCLEdBQUcsQ0FBQ3BCLENBQUMsR0FBRyxHQUFHLENBQUNwQywwQ0FBYSxHQUFHeUQsV0FBVyxDQUFDTCxFQUFFLEVBQUVFLEVBQUUsRUFBRUUsQ0FBQyxHQUFHLEVBQUU7WUFDdERwQixDQUFDLENBQUNzQixTQUFTO1lBQ1h0QixDQUFDLENBQUN1QixjQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR25CLElBQUksQ0FBQ08sR0FBRyxDQUFDUCxJQUFJLENBQUNDLEVBQUUsR0FBR2UsQ0FBQyxHQUFHLEVBQUU7WUFDcERELE1BQU0sQ0FBQ0ssSUFBSSxDQUFDeEIsQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTSxDQUFDbUIsTUFBTTtJQUNqQixDQUFDO1FBRVFNLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUcsQ0FBQztRQUNyQixHQUFHLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNDLGdCQUFnQixDQUFDZCxRQUFRO1FBQ3hDLEdBQUssQ0FBQzFDLFFBQVEsR0FBRyxHQUFHLENBQUNQLCtDQUFrQixDQUFDOEQsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUs7UUFDN0QsR0FBSyxDQUFDckQsUUFBUSxHQUFHLEdBQUcsQ0FBQ1Qsb0RBQXVCLENBQUMsQ0FBQztZQUFDa0MsS0FBSyxFQUFFLEdBQVE7UUFBQyxDQUFDO1FBQ2hFLEdBQUssQ0FBQytCLElBQUksR0FBRyxHQUFHLENBQUNqRSx1Q0FBVSxDQUFDTyxRQUFRLEVBQUVFLFFBQVE7UUFDOUN5RCxLQUFLLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtJQUNsQixDQUFDOztJQWhLRCxHQUFLLENBQUNDLEtBQUssRUFBRTVDLFFBQVEsRUFBRU0sTUFBTSxFQUFFd0MsU0FBUztJQUN6QyxFQWFLO1FBRUEsQ0FBQztZQUNHRSxJQUFJLEVBQUUsQ0FBTztZQUNiL0IsR0FBRyxFQUFFLFNBQVM7O1FBRWxCLENBQUM7UUFDRCxDQUFDO1lBQ0crQixJQUFJLEVBQUMsQ0FBUzs7WUFFZDNCLElBQUksR0FBRztRQUNYLENBQUM7UUFDRCxDQUFDOztZQUVHSixHQUFHLEVBQUUsU0FBUzs7UUFFbEIsQ0FBQztJQUNMLENBQUM7SUFFRCxHQUFLLENBQUNnQyxJQUFJLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFFaEJqRDs7WUFBb0ZzRCxLQUFLLEVBQUUsSUFBSTtZQUFFQyxTQUFTLEVBQUUsSUFBSTtRQUFDLENBQUMsRUFBRSxDQUFhO1FBQ2pJdkQ7UUFFQTRDO1FBQ0F0QyxNQUFNLEdBQUcsR0FBRyxDQUFDNUIsS0FBSyxDQUFDaUY7UUFDbkJyRCxNQUFNLENBQUNzRCxRQUFRLENBQUNDLEdBQUc7UUFFbkIsR0FBRyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDcEY7UUFDbkJrRTs7UUFHQW9CLEtBQUssQ0FBQ0osUUFBUSxDQUFDQyxHQUFHLENBQUM7UUFDbkJqQixLQUFLLENBQUNDLEdBQUcsQ0FBQ21CLEtBQUs7UUFFZkEsS0FBSyxDQUFDRSxVQUFVLEdBQUcsSUFBSTtRQUN2QkYsS0FBSyxDQUFDRyxNQUFNLENBQUM3RDtRQUNiMEQsS0FBSyxDQUFDRyxNQUFNLENBQUM3RCxNQUFNO1FBQ25CMEQsS0FBSyxDQUFDRyxNQUFNLENBQUM3RDtRQUViMEQsS0FBSyxDQUFDRyxNQUFNLENBQUM3RCxNQUFNLENBQUNpRSxJQUFJLElBQUksQ0FBQztRQUM3QlAsS0FBSyxDQUFDRyxNQUFNLHdDQUFRSyxFQUFLO1FBQ3pCUixLQUFLLENBQUNHLE1BQU0sQ0FBQzdELG9EQUFjO1FBQzNCMEQsS0FBSyxDQUFDRyxNQUFNLENBQUM3RCxNQUFNLENBQUNvRSxNQUFNLElBQUk7UUFDOUJWLEtBQUssQ0FBQ0csTUFBTSxDQUFDUSxJQUFJLGlEQUFRO1FBQ3pCWCxLQUFLLENBQUNHLE1BQU0sQ0FBQ1M7UUFFYlosS0FBSyxDQUFDRyxNQUFNLENBQUNVLEdBQUFBLG1EQUFvQjtRQUNqQ2IsS0FBSyxDQUFDRyxNQUFNLENBQUNVLE9BQU8sQ0FBQzFFLE1BQU07UUFFM0IyQyxTQUFTLEdBQUdoRTtRQUNaZ0UsU0FBUyxDQUFDZ0MsYUFBYTtRQUN2QmhDLFNBQVMsQ0FBQ29CLFVBQVUsR0FBRyxJQUFJO1FBQzNCcEIsU0FBUyxDQUFDaUMsUUFBUSxDQUFDekQsQ0FBQyxJQUFJLEdBQUc7UUFDM0JzQixLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztRQUduQkMsVUFBVSxDQUFDaUMsT0FBTyxDQUFDLFFBQVEsQ0FBUEMsRUFBRTtZQUNsQixHQUFHLENBQUNDLE9BQU8sR0FBR3pFLFNBQVM7WUFDdkIsR0FBRyxDQUFDMEUsU0FBUyxHQUFFdEU7WUFDZnFFLE9BQU8sQ0FBQ3RCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDc0I7WUFDckJyQyxTQUFTLENBQUNELEdBQUcsQ0FBQ3FDLE9BQU87UUFDekIsQ0FBQztJQUNULEVBZTBDO2FBeUI3QkUsT0FBTyxHQUFHLENBQUM7UUFDaEJ0RixNQUFNO1FBQ05nRCxTQUFTLENBQUNpQyxRQUFRLENBQUNyRCxDQUFDLElBQUksS0FBSyxDQUFDLENBQU87UUFDckMxQixRQUFRLENBQUNxRixNQUFNLENBQUN6QyxLQUFLLEVBQUV0QztRQUN2QmdGLHFCQUFxQixDQUFDRjtJQUMxQixDQUFDO0lBdUNEeEcsU0FBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JxRSxJQUFJO1FBQ0ptQyxPQUFPO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sb0JBQ0RHLENBQUc7UUFBQ0M7Ozs7Ozs7cUNBQ0FyQyxDQUFNO1lBQUNxQyxTQUFTLEVBQUU3RyxNQUFNLENBQUMsQ0FBUTs7WUFBbUJvQixLQUFLLEVBQUMsQ0FBSztZQUFDSSxNQUFNLEVBQUMsQ0FBSzs7Ozs7Ozs7O0FBR3pGLENBQUM7R0E3S0t0QixRQUFRO0tBQVJBO0FBK0tOLG9EQUFNLEVBQVNBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFwLW1vbmRlLmpzP2YzZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFwLW1vbmRlLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNYXBNb25kZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwgZWFydGhNZXNoO1xyXG4gICAvKiAgY29uc3QgY29vcmRvbmF0ZSA9IHtcclxuICAgICAgICBwYXJpczoge1xyXG4gICAgICAgICAgICBsYXQ6IDQ4Ljg1NjYxNCxcclxuICAgICAgICAgICAgbG9uZzogMi4zNTIyMjE5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXd5b3JrOiB7XHJcbiAgICAgICAgICAgIGxhdDogNDAuNzEyNzg0LFxyXG4gICAgICAgICAgICBsb25nOiAtNzQuMDA1OTQxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFuZ2hhaToge1xyXG4gICAgICAgICAgICBsYXQ6IDMxLjIyNDM2MSxcclxuICAgICAgICAgICAgbG9uZzogMTIxLjQ2OTE3MFxyXG4gICAgICAgIH1cclxuICAgIH0gKi9cclxuICAgIGNvbnN0IGNvb3Jkb25hdGUgPSBbXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICB0b3duIDpcIlBhcmlzXCIsXHJcbiAgICAgICAgICAgIGxhdDogNDguODU2NjE0LFxyXG4gICAgICAgICAgICBsb25nOiAyLjM1MjIyMTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG93bjpcIk5ld1lvcmtcIixcclxuICAgICAgICAgICAgbGF0OiA0MC43MTI3ODQsXHJcbiAgICAgICAgICAgIGxvbmc6IC03NC4wMDU5NDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdG93bjogXCJTaGFuZ2FpXCIsXHJcbiAgICAgICAgICAgIGxhdDogMzEuMjI0MzYxLFxyXG4gICAgICAgICAgICBsb25nOiAxMjEuNDY5MTcwXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzbWFpbicpLCBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlIH0pOy8vYWxwaGE6IHRydWVcclxuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDcwLCAxLCAxLCAxMDAwKTtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDE4KTtcclxuXHJcbiAgICAgICAgdmFyIGxpZ2h0QW1iID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDg4ODg4OCwgMC44KTtcclxuICAgICAgICBzY2VuZS5hZGQobGlnaHRBbWIpO1xyXG5cclxuICAgICAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMSk7XHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uc2V0KDUsIDUsIDUpO1xyXG4gICAgICAgIHNjZW5lLmFkZChsaWdodCk7XHJcblxyXG4gICAgICAgIGxpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgIGxpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDAuMDE7XHJcbiAgICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSAxNTtcclxuICAgICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmZvdiA9IDQ1O1xyXG5cclxuICAgICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSAtMTtcclxuICAgICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLnJpZ2h0ID0gMTtcclxuICAgICAgICBsaWdodC5zaGFkb3cuY2FtZXJhLnRvcCA9IDE7XHJcbiAgICAgICAgbGlnaHQuc2hhZG93LmNhbWVyYS5ib3R0b20gPSAtMTtcclxuICAgICAgICBsaWdodC5zaGFkb3cuYmlhcyA9IDAuMDAxO1xyXG4gICAgICAgIGxpZ2h0LnNoYWRvdy5kYXJrbmVzcyA9IDAuMDE7XHJcblxyXG4gICAgICAgIGxpZ2h0LnNoYWRvdy5tYXBTaXplLndpZHRoID0gMTAyNDtcclxuICAgICAgICBsaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAxMDI0O1xyXG5cclxuICAgICAgICBlYXJ0aE1lc2ggPSBjcmVhdGVFYXJ0aCgpO1xyXG4gICAgICAgIGVhcnRoTWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBlYXJ0aE1lc2guY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZWFydGhNZXNoLnJvdGF0aW9uLnggKz0gMC41O1xyXG4gICAgICAgIHNjZW5lLmFkZChlYXJ0aE1lc2gpO1xyXG5cclxuXHJcbiAgICAgICAgY29vcmRvbmF0ZS5mb3JFYWNoKChlbCk9PntcclxuICAgICAgICAgICAgbGV0IGRvdE1lc2ggPSBhZGRPYmplY3QoKTtcclxuICAgICAgICAgICAgbGV0IGNhcnRlc2lhbiA9Y29udmVydExhdExvbmdUb0NhcnRlc2lhbihlbCk7XHJcbiAgICAgICAgICAgIGRvdE1lc2gucG9zaXRpb24uc2V0KGNhcnRlc2lhbi54LCBjYXJ0ZXNpYW4ueSwgY2FydGVzaWFuLnopO1xyXG4gICAgICAgICAgICBlYXJ0aE1lc2guYWRkKGRvdE1lc2gpO1xyXG4gICAgICAgIH0pXHJcbi8qIFxyXG4gICAgICAgIHZhciBkb3RNZXNoUGFyaXMgPSBhZGRPYmplY3QoKTtcclxuICAgICAgICB2YXIgZG90TWVzaE5ld1lvcmsgPSBhZGRPYmplY3QoKTtcclxuICAgICAgICB2YXIgZG90TWVzaFNoYW5naGFpID0gYWRkT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGxldCBjYXJ0ZXNpYW5QYXJpcyA9IGNvbnZlcnRMYXRMb25nVG9DYXJ0ZXNpYW4oY29vcmRvbmF0ZS5wYXJpcyk7XHJcbiAgICAgICAgZG90TWVzaFBhcmlzLnBvc2l0aW9uLnNldChjYXJ0ZXNpYW5QYXJpcy54LCBjYXJ0ZXNpYW5QYXJpcy55LCBjYXJ0ZXNpYW5QYXJpcy56KTtcclxuICAgICAgICBlYXJ0aE1lc2guYWRkKGRvdE1lc2hQYXJpcyk7XHJcblxyXG4gICAgICAgIGxldCBjYXJ0ZXNpYW5OZXdZb3JrID0gY29udmVydExhdExvbmdUb0NhcnRlc2lhbihjb29yZG9uYXRlLm5ld3lvcmspO1xyXG4gICAgICAgIGRvdE1lc2hOZXdZb3JrLnBvc2l0aW9uLnNldChjYXJ0ZXNpYW5OZXdZb3JrLngsIGNhcnRlc2lhbk5ld1lvcmsueSwgY2FydGVzaWFuTmV3WW9yay56KTtcclxuICAgICAgICBlYXJ0aE1lc2guYWRkKGRvdE1lc2hOZXdZb3JrKTtcclxuXHJcbiAgICAgICAgbGV0IGNhcnRlc2lhblNoYW5naGFpID0gY29udmVydExhdExvbmdUb0NhcnRlc2lhbihjb29yZG9uYXRlLnNoYW5naGFpKTtcclxuICAgICAgICBkb3RNZXNoU2hhbmdoYWkucG9zaXRpb24uc2V0KGNhcnRlc2lhblNoYW5naGFpLngsIGNhcnRlc2lhblNoYW5naGFpLnksIGNhcnRlc2lhblNoYW5naGFpLnopO1xyXG4gICAgICAgIGVhcnRoTWVzaC5hZGQoZG90TWVzaFNoYW5naGFpKTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFYXJ0aCgpIHtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG4gICAgICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSg4LCAxMjgsIDEyOCk7Ly8ocmF5b24sIHNlZ21lbnQgbGFyZ2V1ciwgc2VnbWVudCBoYXV0ZXVyKVxyXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogbG9hZGVyLmxvYWQoJy9pbWFnZXMvbWFwL2VhcnRobWFwMWsuanBnJyksXHJcbiAgICAgICAgICAgIGJ1bXBNYXA6IGxvYWRlci5sb2FkKCcvaW1hZ2VzL21hcC9lYXJ0aGJ1bXAxay5wbmcnKSxcclxuICAgICAgICAgICAgYnVtcFNjYWxlOiAxLFxyXG4gICAgICAgICAgICBzcGVjdWxhck1hcDogbG9hZGVyLmxvYWQoJy9pbWFnZXMvbWFwL2VhcnRoc3BlYzFrLmpwZycpLFxyXG4gICAgICAgICAgICBzcGVjdWxhcjogbmV3IFRIUkVFLkNvbG9yKCdncmV5JyksXHJcbiAgICAgICAgICAgIHNoaW5pbmVzczogMTUgLy8gMzAgZGVmYXV0IHZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgZmFsc2UpO1xyXG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgcmVzaXplKCk7XHJcbiAgICAgICAgZWFydGhNZXNoLnJvdGF0aW9uLnkgKz0gMC4wMDE7Ly8wLjAwMVxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkT2JqZWN0KCkge1xyXG4gICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSgwLjE1LCAyMCwgMjApO1xyXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGMwMTEyNSB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0TGF0TG9uZ1RvQ2FydGVzaWFuKHApIHtcclxuICAgICAgICBsZXQgcmFkaXVzID0gOFxyXG4gICAgICAgIGxldCBwaGkgPSAoKHAubGF0KSAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgbGV0IHRoZXRhID0gKC0ocC5sb25nKSAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgbGV0IHggPSByYWRpdXMgKiBNYXRoLmNvcyh0aGV0YSkgKiBNYXRoLmNvcyhwaGkpO1xyXG4gICAgICAgIGxldCB6ID0gcmFkaXVzICogTWF0aC5zaW4odGhldGEpICogTWF0aC5jb3MocGhpKTtcclxuICAgICAgICBsZXQgeSA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSk7XHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgeiB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VydmUocDEsIHAyKSB7XHJcbiAgICAgICAgbGV0IHYxID0gbmV3IFRIUkVFLlZlY3RvcjMocDEueCwgcDEueSwgcDEueik7XHJcbiAgICAgICAgbGV0IHYyID0gbmV3IFRIUkVFLlZlY3RvcjMocDIueCwgcDIueSwgcDIueik7XHJcblxyXG4gICAgICAgIGxldCBwb2ludHMgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkubGVycHZlY3RvcnModjEsIHYyLCBpIC8gMjApO1xyXG4gICAgICAgICAgICBwLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICBwLm11bHRpcGx5U2NhbGFyKDEgKyAwLjEgKiBNYXRoLnNpbihNYXRoLlBJICogaSAvIDIwKSk7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUN1cnZlKCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gbmV3IENhdG11bGxSb21DdXJ2ZTMoZ2V0Q3VydmUoKSk7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuVHViZUdlb21ldHJ5KHBhdGgsIDIwLCAyLCA4LCBmYWxzZSlcclxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KVxyXG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIHNjZW5lLmFkZChtZXNoKVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1jb250YWluZXJcIl19PlxyXG4gICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzW1wiY2FudmFzXCJdfSBpZD1cImNhbnZhc21haW5cIiB3aWR0aD1cIjM1MFwiIGhlaWdodD1cIjQ1MFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBNb25kZTsiXSwibmFtZXMiOlsiVEhSRUUiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJNYXBNb25kZSIsImNyZWF0ZUVhcnRoIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwibWFwIiwibG9hZCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJzcGVjdWxhck1hcCIsInNwZWN1bGFyIiwiQ29sb3IiLCJzaGluaW5lc3MiLCJNZXNoIiwicmVzaXplIiwid2lkdGgiLCJyZW5kZXJlciIsImRvbUVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJjYW1lcmEiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYWRkT2JqZWN0IiwiU3BoZXJlQnVmZmVyR2VvbWV0cnkiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwiY29udmVydExhdExvbmdUb0NhcnRlc2lhbiIsInAiLCJyYWRpdXMiLCJwaGkiLCJsYXQiLCJNYXRoIiwiUEkiLCJ0aGV0YSIsImxvbmciLCJ4IiwiY29zIiwieiIsInNpbiIsInkiLCJnZXRDdXJ2ZSIsInAxIiwicDIiLCJ2MSIsIlZlY3RvcjMiLCJ2MiIsInBvaW50cyIsImkiLCJsZXJwdmVjdG9ycyIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwicHVzaCIsImRpc3BsYXlDdXJ2ZSIsInBhdGgiLCJDYXRtdWxsUm9tQ3VydmUzIiwiVHViZUdlb21ldHJ5IiwibWVzaCIsInNjZW5lIiwiYWRkIiwiZWFydGhNZXNoIiwiY29vcmRvbmF0ZSIsInRvd24iLCJpbml0IiwiV2ViR0xSZW5kZXJlciIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFscGhhIiwiYW50aWFsaWFzIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInNldCIsImxpZ2h0QW1iIiwiQW1iaWVudExpZ2h0IiwibGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiY2FzdFNoYWRvdyIsInNoYWRvdyIsIm5lYXIiLCJmYXIiLCJmb3YiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJiaWFzIiwiZGFya25lc3MiLCJtYXBTaXplIiwicmVjZWl2ZVNoYWRvdyIsInJvdGF0aW9uIiwiZm9yRWFjaCIsImVsIiwiZG90TWVzaCIsImNhcnRlc2lhbiIsImFuaW1hdGUiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Map-monde.js\n");

/***/ })

});