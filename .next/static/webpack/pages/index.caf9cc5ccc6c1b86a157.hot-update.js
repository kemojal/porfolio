webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/MyProjects.js":
/*!*******************************************!*\
  !*** ./components/sections/MyProjects.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProjectCard */ \"./components/ProjectCard.js\");\n/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Data */ \"./utils/Data.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/sections/MyProjects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  \\n  @media (min-width: 992px) {\\n    /* max-width: 90vw; */\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    justify-content: flex-start;\\n    padding: 0 0;\\n    overflow: hidden;\\n    width: 100vw;\\n    max-width: 1200px;\\n  }\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    height: 80px;\\n    width: 50px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n  width: 100vw;\\n  padding: 2rem 0;\\n  margin-top: 150px;\\n  color: black;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  &:before {\\n    content: ' ';\\n    display: block;\\n    position: absolute;\\n    top: -5vw;\\n    left: -20px;\\n    width: 110vw;\\n    /* height: 15vw; */\\n    height: 0vw;\\n    height: 25px;\\n    transform: rotate(-5deg);\\n    border-radius: 0%;\\n    background-color: #c51838;\\n    \\n  }\\n  &:after {\\n    content: ' ';\\n    display: block;\\n    position: absolute;\\n    top: -50vw;\\n    left: 49.5vw;\\n    width: 1vw;\\n    height: 55vw;\\n    border-radius: 50%;\\n    transform: rotate(0deg);\\n    border-radius: 0%;\\n    background-color: #c51838;\\n    background-color: #c51838;\\n    background: linear-gradient(\\n      360deg,\\n      rgba(255, 255, 255, 0) 0%,\\n      #c51838 51%,\\n      rgba(255, 255, 255, 0) 100%\\n    );\\n   \\n  }\\n  \\n  @media (min-width: 768px) {\\n    margin-top: -150px;\\n\\n    &:after {\\n      content: ' ';\\n      display: none;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import ProjectCard from '../ProjectCard'\n\n\n\n\nvar ProjectsSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_8__[\"motion\"].section)(_templateObject());\n_c = ProjectsSection;\nvar Spacer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c2 = Spacer;\nvar ProjContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = ProjContainer;\n\nvar MyProjects = function MyProjects() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      featureProjects = _useState[0],\n      setFeaturedProjects = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ProjectsSection, {\n    id: \"projects\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: 'My work'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Spacer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ProjContainer, {\n      children: _utils_Data__WEBPACK_IMPORTED_MODULE_7__[\"Data\"].slice(0, 3).map(function (p, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread({}, p), i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      className: \"see-more-btn\",\n      children: \"See More \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(MyProjects, \"5mhD9JbmheHQJ6P0Kz9R3rXWfHA=\");\n\n_c4 = MyProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyProjects);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ProjectsSection\");\n$RefreshReg$(_c2, \"Spacer\");\n$RefreshReg$(_c3, \"ProjContainer\");\n$RefreshReg$(_c4, \"MyProjects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9NeVByb2plY3RzLmpzP2VkZmYiXSwibmFtZXMiOlsiUHJvamVjdHNTZWN0aW9uIiwic3R5bGVkIiwibW90aW9uIiwic2VjdGlvbiIsIlNwYWNlciIsImRpdiIsIlByb2pDb250YWluZXIiLCJNeVByb2plY3RzIiwidXNlU3RhdGUiLCJmZWF0dXJlUHJvamVjdHMiLCJzZXRGZWF0dXJlZFByb2plY3RzIiwiRGF0YSIsInNsaWNlIiwibWFwIiwicCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLE9BQVIsQ0FBVCxtQkFBckI7S0FBTUgsZTtBQXVETixJQUFNSSxNQUFNLEdBQUdILHlEQUFNLENBQUNJLEdBQVYsb0JBQVo7TUFBTUQsTTtBQUlOLElBQU1FLGFBQWEsR0FBR0wseURBQU0sQ0FBQ0ksR0FBVixvQkFBbkI7TUFBTUMsYTs7QUFtQk4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUN3QkMsc0RBQVEsQ0FBQyxFQUFELENBRGhDO0FBQUEsTUFDaEJDLGVBRGdCO0FBQUEsTUFDQ0MsbUJBREQ7O0FBR3ZCLHNCQUNJLHFFQUFDLGVBQUQ7QUFBaUIsTUFBRSxFQUFDLFVBQXBCO0FBQUEsNEJBQ0kscUVBQUMscURBQUQ7QUFBYyxXQUFLLEVBQUU7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUEscUVBQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFHQSxxRUFBQyxhQUFEO0FBQUEsZ0JBQ0dDLGdEQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsNEJBQ25CLHFFQUFDLG9EQUFELG9CQUF5QkQsQ0FBekIsR0FBa0JDLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEEsZUFRQTtBQUFRLGVBQVMsRUFBQyxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBWUQsQ0FmRDs7R0FBTVIsVTs7TUFBQUEsVTtBQWlCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL015UHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnLi4vU2VjdGlvblRpdGxlJztcbi8vIGltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi9Qcm9qZWN0Q2FyZCdcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi9Qcm9qZWN0Q2FyZCc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvRGF0YSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgUHJvamVjdHNTZWN0aW9uID0gc3R5bGVkKG1vdGlvbi5zZWN0aW9uKWBcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01dnc7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgd2lkdGg6IDExMHZ3O1xuICAgIC8qIGhlaWdodDogMTV2dzsgKi9cbiAgICBoZWlnaHQ6IDB2dztcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTE4Mzg7XG4gICAgXG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC01MHZ3O1xuICAgIGxlZnQ6IDQ5LjV2dztcbiAgICB3aWR0aDogMXZ3O1xuICAgIGhlaWdodDogNTV2dztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M1MTgzODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzUxODM4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDM2MGRlZyxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXG4gICAgICAjYzUxODM4IDUxJSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxuICAgICk7XG4gICBcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFNwYWNlciA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuYFxuY29uc3QgUHJvakNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC8qIG1heC13aWR0aDogOTB2dzsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICB9XG5cbmBcbmNvbnN0IE15UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmZWF0dXJlUHJvamVjdHMsIHNldEZlYXR1cmVkUHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHJldHVybiAoXG4gICAgICA8UHJvamVjdHNTZWN0aW9uIGlkPSdwcm9qZWN0cyc+XG4gICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17J015IHdvcmsnfSAvPlxuICAgICAgPFNwYWNlciAvPlxuICAgICAgPFByb2pDb250YWluZXI+XG4gICAgICAgIHtEYXRhLnNsaWNlKDAsMykubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgPFByb2plY3RDYXJkIGtleT17aX0gey4uLnB9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9Qcm9qQ29udGFpbmVyPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWUtbW9yZS1idG5cIj5TZWUgTW9yZSA8L2J1dHRvbj5cbiAgICA8L1Byb2plY3RzU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sections/MyProjects.js\n");

/***/ })

})