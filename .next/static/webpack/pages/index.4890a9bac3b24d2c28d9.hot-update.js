/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SectionTitle.js":
/*!************************************!*\
  !*** ./components/SectionTitle.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Desktop/deploy portfolio/porfolio/components/SectionTitle.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  position: absolute;\\n  width: 100vw;\\n  height: 85px;\\n  border-radius: 0px;\\n  opacity: 1;\\n  left: 0px;\\n  background-color: var(--crimson);\\n  background: #ff5700;\\n  background: #ffdc7c; /*radial-gradient(circle, #FF5700 0%,  #FF0056 100%); */\\n  @media (min-width: 768px) {\\n    width: 50%;\\n    height: 20px;\\n    background: orange;\\n    left: 25%;\\n    top: 45%;\\n    transform: rotate(1deg);\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_kemojallow_Desktop_deploy_portfolio_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  width: 100%;\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  padding-top: 1.2rem;\\n  span {\\n    color: green;\\n    padding-left: 10px;\\n    color: var(--lightTextTitleColor);\\n    font-weight: 800;\\n    line-height: 18px;\\n    letter-spacing: 3px;\\n    font-size: 1.5rem;\\n    padding-top: 0rem;\\n    text-transform: uppercase;\\n  }\\n  @media (min-width: 768px) {\\n    justify-content: center;\\n    margin-top: 2rem;\\n    padding: 5rem;\\n    span {\\n      padding-top: 10px;\\n      font-size: 6rem;\\n      color: #000000;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar TitleContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div)(_templateObject());\n_c = TitleContainer;\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject2());\n_c2 = Line;\n\nvar SectionTitle = function SectionTitle(_ref) {\n  _s();\n\n  var title = _ref.title;\n  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var intersection = (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useIntersection)(myRef, {\n    root: null,\n    rootMargin: '0px',\n    threshold: 0.5\n  });\n  var fadeIn = {\n    opacity: 1,\n    y: 0,\n    x: 0\n  };\n  var fadeOut = {\n    opacity: 0,\n    y: 0,\n    x: 100\n  };\n  var animationName = intersection && intersection.intersectionRatio < 0.5 ? fadeOut : fadeIn;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleContainer, {\n    animate: animationName,\n    ref: myRef,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(SectionTitle, \"Nmh7jJoZBLbQyW2WuLW5Je6GMG0=\", false, function () {\n  return [react_use__WEBPACK_IMPORTED_MODULE_5__.useIntersection];\n});\n\n_c3 = SectionTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTitle);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TitleContainer\");\n$RefreshReg$(_c2, \"Line\");\n$RefreshReg$(_c3, \"SectionTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUuanM/OTA2MiJdLCJuYW1lcyI6WyJUaXRsZUNvbnRhaW5lciIsInN0eWxlZCIsIm1vdGlvbiIsIkxpbmUiLCJTZWN0aW9uVGl0bGUiLCJ0aXRsZSIsIm15UmVmIiwidXNlUmVmIiwiaW50ZXJzZWN0aW9uIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJmYWRlSW4iLCJvcGFjaXR5IiwieSIsIngiLCJmYWRlT3V0IiwiYW5pbWF0aW9uTmFtZSIsImludGVyc2VjdGlvblJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDBEQUFNLENBQUNDLHFEQUFELENBQVQsbUJBQXBCO0tBQU1GLGM7QUE0Qk4sSUFBTUcsSUFBSSxHQUFHRiwwREFBSCxvQkFBVjtNQUFNRSxJOztBQW9CTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBRWhDLE1BQU1DLEtBQUssR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0YsTUFBTUMsWUFBWSxHQUFHQywwREFBZSxDQUFDSCxLQUFELEVBQVE7QUFDMUNJLFFBQUksRUFBRSxJQURvQztBQUUxQ0MsY0FBVSxFQUFFLEtBRjhCO0FBRzFDQyxhQUFTLEVBQUU7QUFIK0IsR0FBUixDQUFwQztBQUtBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxXQUFPLEVBQUUsQ0FESTtBQUViQyxLQUFDLEVBQUUsQ0FGVTtBQUdiQyxLQUFDLEVBQUU7QUFIVSxHQUFmO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2RILFdBQU8sRUFBRSxDQURLO0FBRWRDLEtBQUMsRUFBRSxDQUZXO0FBR2RDLEtBQUMsRUFBRTtBQUhXLEdBQWhCO0FBTUEsTUFBTUUsYUFBYSxHQUFHVixZQUFZLElBQUlBLFlBQVksQ0FBQ1csaUJBQWIsR0FBaUMsR0FBakQsR0FBdURGLE9BQXZELEdBQWlFSixNQUF2RjtBQUVBLHNCQUNFLDhEQUFDLGNBQUQ7QUFBZ0IsV0FBTyxFQUFFSyxhQUF6QjtBQUF3QyxPQUFHLEVBQUVaLEtBQTdDO0FBQUEsNEJBQ0UsOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFPRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBM0JEOztHQUFNRCxZO1VBR2lCSyxzRDs7O01BSGpCTCxZO0FBNkJOLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICdyZWFjdC11c2UnO1xuXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEuMnJlbTtcbiAgc3BhbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRUZXh0VGl0bGVDb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nOiA1cmVtO1xuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBMaW5lID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBvcGFjaXR5OiAxO1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyaW1zb24pO1xuICBiYWNrZ3JvdW5kOiAjZmY1NzAwO1xuICBiYWNrZ3JvdW5kOiAjZmZkYzdjOyAvKnJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNGRjU3MDAgMCUsICAjRkYwMDU2IDEwMCUpOyAqL1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgbGVmdDogMjUlO1xuICAgIHRvcDogNDUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSAoeyB0aXRsZSB9KSA9PiB7XG5cbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uKG15UmVmLCB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuNSxcbiAgfSk7XG4gIGNvbnN0IGZhZGVJbiA9IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgeDogMCxcbiAgfTtcbiAgY29uc3QgZmFkZU91dCA9IHtcbiAgICBvcGFjaXR5OiAwLFxuICAgIHk6IDAsXG4gICAgeDogMTAwLFxuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGlvbk5hbWUgPSBpbnRlcnNlY3Rpb24gJiYgaW50ZXJzZWN0aW9uLmludGVyc2VjdGlvblJhdGlvIDwgMC41ID8gZmFkZU91dCA6IGZhZGVJbjtcblxuICByZXR1cm4gKFxuICAgIDxUaXRsZUNvbnRhaW5lciBhbmltYXRlPXthbmltYXRpb25OYW1lfSByZWY9e215UmVmfT5cbiAgICAgIDxMaW5lIC8+XG4gICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgIDwvVGl0bGVDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGl0bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SectionTitle.js\n");

/***/ })

});