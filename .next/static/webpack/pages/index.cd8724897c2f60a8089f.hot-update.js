webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Settings.js":
/*!********************************!*\
  !*** ./components/Settings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _svg_DarkIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/DarkIcon */ \"./components/svg/DarkIcon.js\");\n/* harmony import */ var _svg_LightIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/LightIcon */ \"./components/svg/LightIcon.js\");\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/Settings.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\nborder: none;\\n/* width: 44px;\\nheight: 44px; */\\nwidth: 32px;\\nheight: 32px;\\n\\nwidth: 84px;\\nheight: 44px;\\n\\n\\ncursor: pointer;\\noverflow: hidden;\\nborder: none;\\nborder-radius: 50%;\\nbackground-color: transparent;\\noutline: 0px;\\nfont-size: 100%;\\nline-height: 1.15;\\ndisplay: flex;\\nalign-items: center;\\njustify-content: space-between;\\nbackdrop-filter: blur(20px);\\ntransition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\nborder-radius: 49px;\\n    padding: 6.5px;\\n    /* border: 1px solid \", \"; */\\n    background-color: transparent;\\n\\n\\n    background-color: \", \";\\n\\n  /* box-shadow: inset 0px -1px 1px \", \" !important; */\\n\\n  .icon-container {\\n      width: 36px;\\n      height: 36px;\\n      border-radius: 50%;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      margin: 0px;\\n       /* background-color: orange; */\\n  }\\n  .left {\\n    background-color: \", \";\\n  }\\n  .right {\\n    background-color: \", \";\\n  }\\n  &:hover{\\n      outline: none;\\n      /* transform: rotate(180deg); */\\n      /* background-color: green; */\\n  }\\n  &:focus {\\n    outline: 0 !important;\\n    /* border: none; */\\n}\\n&:before {\\n    transition: transform .2s ease-in-out;\\n    /* will-change: transform; */\\n    /* width: 36px; */\\n    /* height: calc(100% - 8px); */\\n    position: absolute;\\n    /* left: 4px; */\\n    /* top: 4px; */\\n    left: 0;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: block;\\n    border-radius: 9999px;\\n    content: \\\"\\\";\\n    /* background-color: #fff; */\\n    box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);\\n}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n position: fixed;\\n /* background-color: brown; */\\n background: \", \";\\n /* width: 100px;\\n height: 100px; */\\n /* bottom: 2rem;\\n left: 2rem; */\\n top: 1.1rem;\\n /* right: 5rem; */\\n right: 9rem;\\n display: flex;\\n align-items: center;\\n justify-content: center;\\n background-color:transparent;\\n z-index: 3000;\\n\\n @media (min-width: 768px) {\\n    /* right: 2rem; */\\n    right: 23px;\\n    top: 1.56rem;\\n  }\\n\\n  @media ( min-width: 1200px) {\\n    right: calc(( (100% - 1100px) / 2) - 70px);\\n   }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n //import GearIcon  from '/assets/imgs/gear.svg';\n\n\n\nvar ToggleThemeContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div)(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.text;\n});\n_c = ToggleThemeContainer;\nvar GearButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject2(), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.themeToggleButtonBorder;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme === 'light' ? 'rgba(0,0,0,.07)' : \"rgba(255, 255, 255, 0.11)\";\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.navShadowColor;\n}, function (_ref5) {\n  var theme = _ref5.theme;\n  return theme === 'light' ? 'white' : \"transparent\";\n}, function (_ref6) {\n  var theme = _ref6.theme;\n  return theme === 'light' ? \"transparent\" : 'white';\n});\n_c2 = GearButton;\n\nvar Settings = function Settings(_ref7) {\n  var theme = _ref7.theme,\n      toggleTheme = _ref7.toggleTheme;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleThemeContainer, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GearButton, {\n      theme: theme,\n      onClick: toggleTheme,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"icon-container left\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_LightIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"icon-container right\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_DarkIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 121,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ToggleThemeContainer\");\n$RefreshReg$(_c2, \"GearButton\");\n$RefreshReg$(_c3, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXR0aW5ncy5qcz9mZTFiIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIiwiZGl2IiwidGhlbWUiLCJ0ZXh0IiwiR2VhckJ1dHRvbiIsImJ1dHRvbiIsInRoZW1lVG9nZ2xlQnV0dG9uQm9yZGVyIiwibmF2U2hhZG93Q29sb3IiLCJTZXR0aW5ncyIsInRvZ2dsZVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxpRUFBTSxDQUFDQyxvREFBTSxDQUFDQyxHQUFSLENBQVQsb0JBR1g7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLElBQXJCO0FBQUEsQ0FIVyxDQUExQjtLQUFNTCxvQjtBQTJCTixJQUFNTSxVQUFVLEdBQUdMLHlEQUFNLENBQUNNLE1BQVYscUJBMEJXO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSx1QkFBckI7QUFBQSxDQTFCWCxFQThCUTtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQ3BCQSxLQUFLLEtBQUssT0FBVixHQUFvQixpQkFBcEIsOEJBRG9CO0FBQUEsQ0E5QlIsRUFpQ3NCO0FBQUEsTUFBR0EsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxjQUFyQjtBQUFBLENBakN0QixFQThDUTtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQ3BCQSxLQUFLLEtBQUssT0FBVixHQUFvQixPQUFwQixnQkFEb0I7QUFBQSxDQTlDUixFQWtEUTtBQUFBLE1BQUdBLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQ3BCQSxLQUFLLEtBQUssT0FBVixtQkFBb0MsT0FEaEI7QUFBQSxDQWxEUixDQUFoQjtNQUFNRSxVOztBQW1GTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUE0QjtBQUFBLE1BQTFCTixLQUEwQixTQUExQkEsS0FBMEI7QUFBQSxNQUFsQk8sV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3pDLHNCQUNJLHFFQUFDLG9CQUFEO0FBQUEsMkJBRUkscUVBQUMsVUFBRDtBQUNBLFdBQUssRUFBRVAsS0FEUDtBQUVBLGFBQU8sRUFBRU8sV0FGVDtBQUFBLDhCQUlKO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNJLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkksZUFPSjtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQXRCRDs7TUFBTUQsUTtBQXdCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NldHRpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLy9pbXBvcnQgR2Vhckljb24gIGZyb20gJy9hc3NldHMvaW1ncy9nZWFyLnN2Zyc7XG5pbXBvcnQgRGFya0ljb24gZnJvbSAnLi9zdmcvRGFya0ljb24nO1xuaW1wb3J0IExpZ2h0SWNvbiBmcm9tICcuL3N2Zy9MaWdodEljb24nO1xuXG5jb25zdCBUb2dnbGVUaGVtZUNvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiBwb3NpdGlvbjogZml4ZWQ7XG4gLyogYmFja2dyb3VuZC1jb2xvcjogYnJvd247ICovXG4gYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAvKiB3aWR0aDogMTAwcHg7XG4gaGVpZ2h0OiAxMDBweDsgKi9cbiAvKiBib3R0b206IDJyZW07XG4gbGVmdDogMnJlbTsgKi9cbiB0b3A6IDEuMXJlbTtcbiAvKiByaWdodDogNXJlbTsgKi9cbiByaWdodDogOXJlbTtcbiBkaXNwbGF5OiBmbGV4O1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiB6LWluZGV4OiAzMDAwO1xuXG4gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLyogcmlnaHQ6IDJyZW07ICovXG4gICAgcmlnaHQ6IDIzcHg7XG4gICAgdG9wOiAxLjU2cmVtO1xuICB9XG5cbiAgQG1lZGlhICggbWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICByaWdodDogY2FsYygoICgxMDAlIC0gMTEwMHB4KSAvIDIpIC0gNzBweCk7XG4gICB9XG5gO1xuY29uc3QgR2VhckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG5ib3JkZXI6IG5vbmU7XG4vKiB3aWR0aDogNDRweDtcbmhlaWdodDogNDRweDsgKi9cbndpZHRoOiAzMnB4O1xuaGVpZ2h0OiAzMnB4O1xuXG53aWR0aDogODRweDtcbmhlaWdodDogNDRweDtcblxuXG5jdXJzb3I6IHBvaW50ZXI7XG5vdmVyZmxvdzogaGlkZGVuO1xuYm9yZGVyOiBub25lO1xuYm9yZGVyLXJhZGl1czogNTAlO1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5vdXRsaW5lOiAwcHg7XG5mb250LXNpemU6IDEwMCU7XG5saW5lLWhlaWdodDogMS4xNTtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcbmJvcmRlci1yYWRpdXM6IDQ5cHg7XG4gICAgcGFkZGluZzogNi41cHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50aGVtZVRvZ2dsZUJ1dHRvbkJvcmRlcn07ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT5cbiAgICB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsMCwwLC4wNyknIDogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSlgfTtcblxuICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAxcHggJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5uYXZTaGFkb3dDb2xvcn0gIWltcG9ydGFudDsgKi9cblxuICAuaWNvbi1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xuICB9XG4gIC5sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+XG4gICAgdGhlbWUgPT09ICdsaWdodCcgPyAnd2hpdGUnIDogYHRyYW5zcGFyZW50YH07XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+XG4gICAgdGhlbWUgPT09ICdsaWdodCcgPyBgdHJhbnNwYXJlbnRgIDogJ3doaXRlJyB9O1xuICB9XG4gICY6aG92ZXJ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgLyogdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgKi9cbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAqL1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgICAvKiBib3JkZXI6IG5vbmU7ICovXG59XG4mOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcbiAgICAvKiB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyAqL1xuICAgIC8qIHdpZHRoOiAzNnB4OyAqL1xuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gOHB4KTsgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogbGVmdDogNHB4OyAqL1xuICAgIC8qIHRvcDogNHB4OyAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYigwIDM0IDI1NSAvIDglKSwgMCAycHggOHB4IDAgcmdiKDAgMTEgODAgLyAxMiUpO1xufVxuYFxuXG5cbmNvbnN0IFNldHRpbmdzID0gKHt0aGVtZSwgIHRvZ2dsZVRoZW1lIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VG9nZ2xlVGhlbWVDb250YWluZXIgPlxuICAgICAgICAgICAgey8qIDxTdWRvQnV0dG9uPiAqL31cbiAgICAgICAgICAgIDxHZWFyQnV0dG9uIFxuICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9PlxuICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGxlZnRcIj5cbiAgICAgICAgICAgIDxMaWdodEljb24vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciByaWdodFwiPlxuICAgICAgICAgICAgPERhcmtJY29uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiB7dGhlbWUgPT09ICdsaWdodCcgPyA8TGlnaHRJY29uLz4gOiA8RGFya0ljb24gLz4gfSAqL31cblxuICAgICAgICAgICAgPC9HZWFyQnV0dG9uPlxuICAgICAgICAgICAgey8qIDwvU3Vkb0J1dHRvbj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Ub2dnbGVUaGVtZUNvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Settings.js\n");

/***/ })

})