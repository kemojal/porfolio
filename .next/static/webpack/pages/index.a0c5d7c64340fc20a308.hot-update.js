/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sections/MyProjects.js":
/*!*******************************************!*\
  !*** ./components/sections/MyProjects.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProjectCard */ \"./components/ProjectCard.js\");\n/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Data */ \"./utils/Data.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Desktop/deploy portfolio/porfolio/components/sections/MyProjects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject() {\n  var data = (0,_Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)([\"\\n    width: 100vw;\\n    padding-bottom: 5rem;\\n    margin-top: 150px ;\\n    background-color:#0A3CB7;\\n    @media (min-width: 768px) {\\n        padding: 0 8rem;\\n        padding-bottom: 12rem;\\n    \\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar ProjectsSection = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.section)(_templateObject());\n_c = ProjectsSection;\n\nvar MyProjects = function MyProjects() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      featureProjects = _useState[0],\n      setFeaturedProjects = _useState[1];\n\n  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n  var intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_9__.useIntersection)(myRef, {\n    root: null,\n    rootMargin: '0px',\n    threshold: 0.5\n  });\n  var fadeIn = {\n    opacity: 1,\n    y: 0,\n    x: 0\n  };\n  var fadeOut = {\n    opacity: 0,\n    y: 0,\n    x: 300\n  };\n  var animationName = intersection && intersection.intersectionRatio < 0.5 ? fadeOut : fadeIn;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProjectsSection, {\n    id: \"projects\",\n    ref: myRef,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SectionTitle__WEBPACK_IMPORTED_MODULE_4__.default, {\n      title: \"Projects\",\n      animationName: animationName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this), _utils_Data__WEBPACK_IMPORTED_MODULE_6__.Data.map(function (p, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({}, p), i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(MyProjects, \"4/NKLG0nDXJOwfamTIXLqwVYYpI=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_9__.useIntersection];\n});\n\n_c2 = MyProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyProjects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectsSection\");\n$RefreshReg$(_c2, \"MyProjects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9NeVByb2plY3RzLmpzP2VkZmYiXSwibmFtZXMiOlsiUHJvamVjdHNTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwiTXlQcm9qZWN0cyIsInVzZVN0YXRlIiwiZmVhdHVyZVByb2plY3RzIiwic2V0RmVhdHVyZWRQcm9qZWN0cyIsIm15UmVmIiwidXNlUmVmIiwiaW50ZXJzZWN0aW9uIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJmYWRlSW4iLCJvcGFjaXR5IiwieSIsIngiLCJmYWRlT3V0IiwiYW5pbWF0aW9uTmFtZSIsImludGVyc2VjdGlvblJhdGlvIiwiRGF0YSIsInAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBSUMsMERBQU0sQ0FBQ0MseURBQUQsQ0FBVixtQkFBckI7S0FBTUYsZTs7QUFZTixJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQzBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEbEM7QUFBQSxNQUNkQyxlQURjO0FBQUEsTUFDR0MsbUJBREg7O0FBR3JCLE1BQU1DLEtBQUssR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0YsTUFBTUMsWUFBWSxHQUFHQywwREFBZSxDQUFDSCxLQUFELEVBQVE7QUFDMUNJLFFBQUksRUFBRSxJQURvQztBQUUxQ0MsY0FBVSxFQUFFLEtBRjhCO0FBRzFDQyxhQUFTLEVBQUU7QUFIK0IsR0FBUixDQUFwQztBQUtBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxXQUFPLEVBQUUsQ0FESTtBQUViQyxLQUFDLEVBQUUsQ0FGVTtBQUdiQyxLQUFDLEVBQUU7QUFIVSxHQUFmO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2RILFdBQU8sRUFBRSxDQURLO0FBRWRDLEtBQUMsRUFBRSxDQUZXO0FBR2RDLEtBQUMsRUFBRTtBQUhXLEdBQWhCO0FBTUEsTUFBTUUsYUFBYSxHQUFHVixZQUFZLElBQUlBLFlBQVksQ0FBQ1csaUJBQWIsR0FBaUMsR0FBakQsR0FBdURGLE9BQXZELEdBQWlFSixNQUF2RjtBQUNFLHNCQUNJLDhEQUFDLGVBQUQ7QUFBaUIsTUFBRSxFQUFDLFVBQXBCO0FBQStCLE9BQUcsRUFBRVAsS0FBcEM7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRyxVQUF0QjtBQUFrQyxtQkFBYSxFQUFFWTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFHSUUsaURBQUEsQ0FBVSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSwwQkFDTiw4REFBQyxpREFBRCxvQkFBMEJELENBQTFCLEdBQW1CQyxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE07QUFBQSxLQUFWLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQS9CRDs7R0FBTXBCLFU7VUFJaUJPLHNEOzs7TUFKakJQLFU7QUFpQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL015UHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vU2VjdGlvblRpdGxlJ1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4uL1Byb2plY3RDYXJkJ1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL0RhdGEnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiAgPSBzdHlsZWQobW90aW9uLnNlY3Rpb24pYFxuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEEzQ0I3O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwYWRkaW5nOiAwIDhyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnJlbTtcbiAgICBcbiAgICB9XG5gXG5cbmNvbnN0IE15UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2ZlYXR1cmVQcm9qZWN0cywgc2V0RmVhdHVyZWRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb24obXlSZWYsIHtcbiAgICByb290OiBudWxsLFxuICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgIHRocmVzaG9sZDogMC41LFxuICB9KTtcbiAgY29uc3QgZmFkZUluID0ge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB4OiAwLFxuICB9O1xuICBjb25zdCBmYWRlT3V0ID0ge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeTogMCxcbiAgICB4OiAzMDAsXG4gIH07XG5cbiAgY29uc3QgYW5pbWF0aW9uTmFtZSA9IGludGVyc2VjdGlvbiAmJiBpbnRlcnNlY3Rpb24uaW50ZXJzZWN0aW9uUmF0aW8gPCAwLjUgPyBmYWRlT3V0IDogZmFkZUluO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9qZWN0c1NlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiIHJlZj17bXlSZWZ9PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZSA9e1wiUHJvamVjdHNcIn0gYW5pbWF0aW9uTmFtZT17YW5pbWF0aW9uTmFtZX0vPlxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgIERhdGEubWFwKCAocCxpKT0+KFxuICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXkgPXtpfSB7Li4ucH0vPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Qcm9qZWN0c1NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeVByb2plY3RzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sections/MyProjects.js\n");

/***/ })

});