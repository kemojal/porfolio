webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Settings.js":
/*!********************************!*\
  !*** ./components/Settings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _svg_DarkIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/DarkIcon */ \"./components/svg/DarkIcon.js\");\n/* harmony import */ var _svg_LightIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/LightIcon */ \"./components/svg/LightIcon.js\");\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/Settings.js\",\n    _this = undefined;\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\nborder: none;\\n/* width: 44px;\\nheight: 44px; */\\nwidth: 32px;\\nheight: 32px;\\n\\nwidth: 84px;\\n    height: 44px;\\ncursor: pointer;\\nborder: none;\\nborder-radius: 50%;\\nbackground-color: transparent;\\noutline: 0px;\\nfont-size: 100%;\\nline-height: 1.15;\\ndisplay: flex;\\nalign-items: center;\\njustify-content: center;\\nbackdrop-filter: blur(20px);\\ntransition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\nborder-radius: 10px;\\n    padding: 6.5px;\\n    border: 1px solid \", \";\\n    background-color: transparent;\\n\\n  /* box-shadow: inset 0px -1px 1px \", \" !important; */\\n  &:hover{\\n      outline: none;\\n      /* transform: rotate(180deg); */\\n      /* background-color: green; */\\n  }\\n  &:focus {\\n    outline: 0 !important;\\n    /* border: none; */\\n}\\n&:before {\\n    transition: transform .2s ease-in-out;\\n    /* will-change: transform; */\\n    /* width: 36px; */\\n    /* height: calc(100% - 8px); */\\n    position: absolute;\\n    /* left: 4px; */\\n    /* top: 4px; */\\n    left: 0;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: block;\\n    border-radius: 9999px;\\n    content: \\\"\\\";\\n    background-color: #fff;\\n    box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);\\n}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n     /* width: 84px;\\n    height: 44px; */\\n    /* background: red; */\\n    background-color: rgba(255, 255, 255, 0.11);\\n    border-radius: 9999px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n position: fixed;\\n /* background-color: brown; */\\n background: \", \";\\n /* width: 100px;\\n height: 100px; */\\n /* bottom: 2rem;\\n left: 2rem; */\\n top: 1.1rem;\\n /* right: 5rem; */\\n right: 9rem;\\n display: flex;\\n align-items: center;\\n justify-content: center;\\n background-color:transparent;\\n z-index: 3000;\\n\\n @media (min-width: 768px) {\\n    /* right: 2rem; */\\n    right: 23px;\\n    top: 1.55rem;\\n  }\\n\\n  @media ( min-width: 1200px) {\\n    right: calc(( (100% - 1100px) / 2) - 50px);\\n   }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n //import GearIcon  from '/assets/imgs/gear.svg';\n\n\n\nvar ToggleThemeContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div)(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.text;\n});\n_c = ToggleThemeContainer;\nvar SudoButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\nvar GearButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject3(), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.themeToggleButtonBorder;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.navShadowColor;\n});\n_c2 = GearButton;\n\nvar Settings = function Settings(_ref4) {\n  var theme = _ref4.theme,\n      toggleTheme = _ref4.toggleTheme;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ToggleThemeContainer, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GearButton, {\n      onClick: toggleTheme,\n      children: theme === 'light' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_LightIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 38\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_svg_DarkIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 53\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 105,\n    columnNumber: 9\n  }, _this);\n};\n\n_c3 = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ToggleThemeContainer\");\n$RefreshReg$(_c2, \"GearButton\");\n$RefreshReg$(_c3, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXR0aW5ncy5qcz9mZTFiIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lQ29udGFpbmVyIiwic3R5bGVkIiwibW90aW9uIiwiZGl2IiwidGhlbWUiLCJ0ZXh0IiwiU3Vkb0J1dHRvbiIsIkdlYXJCdXR0b24iLCJidXR0b24iLCJ0aGVtZVRvZ2dsZUJ1dHRvbkJvcmRlciIsIm5hdlNoYWRvd0NvbG9yIiwiU2V0dGluZ3MiLCJ0b2dnbGVUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLGlFQUFNLENBQUNDLG9EQUFNLENBQUNDLEdBQVIsQ0FBVCxvQkFHWDtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsSUFBckI7QUFBQSxDQUhXLENBQTFCO0tBQU1MLG9CO0FBMkJOLElBQU1NLFVBQVUsR0FBSUwseURBQU0sQ0FBQ0UsR0FBWCxvQkFBaEI7QUFVQSxJQUFNSSxVQUFVLEdBQUdOLHlEQUFNLENBQUNPLE1BQVYscUJBdUJRO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyx1QkFBckI7QUFBQSxDQXZCUixFQTBCc0I7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNNLGNBQXJCO0FBQUEsQ0ExQnRCLENBQWhCO01BQU1ILFU7O0FBeUROLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQTRCO0FBQUEsTUFBMUJQLEtBQTBCLFNBQTFCQSxLQUEwQjtBQUFBLE1BQWxCUSxXQUFrQixTQUFsQkEsV0FBa0I7QUFDekMsc0JBQ0kscUVBQUMsb0JBQUQ7QUFBQSwyQkFFSSxxRUFBQyxVQUFEO0FBQVksYUFBTyxFQUFFQSxXQUFyQjtBQUFBLGdCQUNLUixLQUFLLEtBQUssT0FBVixnQkFBb0IscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFwQixnQkFBbUMscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0FaRDs7TUFBTU8sUTtBQWNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2V0dGluZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vL2ltcG9ydCBHZWFySWNvbiAgZnJvbSAnL2Fzc2V0cy9pbWdzL2dlYXIuc3ZnJztcbmltcG9ydCBEYXJrSWNvbiBmcm9tICcuL3N2Zy9EYXJrSWNvbic7XG5pbXBvcnQgTGlnaHRJY29uIGZyb20gJy4vc3ZnL0xpZ2h0SWNvbic7XG5cbmNvbnN0IFRvZ2dsZVRoZW1lQ29udGFpbmVyID0gc3R5bGVkKG1vdGlvbi5kaXYpYFxuIHBvc2l0aW9uOiBmaXhlZDtcbiAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cbiBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuIC8qIHdpZHRoOiAxMDBweDtcbiBoZWlnaHQ6IDEwMHB4OyAqL1xuIC8qIGJvdHRvbTogMnJlbTtcbiBsZWZ0OiAycmVtOyAqL1xuIHRvcDogMS4xcmVtO1xuIC8qIHJpZ2h0OiA1cmVtOyAqL1xuIHJpZ2h0OiA5cmVtO1xuIGRpc3BsYXk6IGZsZXg7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuIHotaW5kZXg6IDMwMDA7XG5cbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAvKiByaWdodDogMnJlbTsgKi9cbiAgICByaWdodDogMjNweDtcbiAgICB0b3A6IDEuNTVyZW07XG4gIH1cblxuICBAbWVkaWEgKCBtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIHJpZ2h0OiBjYWxjKCggKDEwMCUgLSAxMTAwcHgpIC8gMikgLSA1MHB4KTtcbiAgIH1cbmA7XG5jb25zdCBTdWRvQnV0dG9uICA9IHN0eWxlZC5kaXZgXG4gICAgIC8qIHdpZHRoOiA4NHB4O1xuICAgIGhlaWdodDogNDRweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjExKTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3QgR2VhckJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG5ib3JkZXI6IG5vbmU7XG4vKiB3aWR0aDogNDRweDtcbmhlaWdodDogNDRweDsgKi9cbndpZHRoOiAzMnB4O1xuaGVpZ2h0OiAzMnB4O1xuXG53aWR0aDogODRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG5jdXJzb3I6IHBvaW50ZXI7XG5ib3JkZXI6IG5vbmU7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbm91dGxpbmU6IDBweDtcbmZvbnQtc2l6ZTogMTAwJTtcbmxpbmUtaGVpZ2h0OiAxLjE1O1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwbXM7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDYuNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGhlbWVUb2dnbGVCdXR0b25Cb3JkZXJ9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDFweCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLm5hdlNoYWRvd0NvbG9yfSAhaW1wb3J0YW50OyAqL1xuICAmOmhvdmVye1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7ICovXG4gICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xufVxuJjpiZWZvcmUge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLyogd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgKi9cbiAgICAvKiB3aWR0aDogMzZweDsgKi9cbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhweCk7ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIGxlZnQ6IDRweDsgKi9cbiAgICAvKiB0b3A6IDRweDsgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2IoMCAzNCAyNTUgLyA4JSksIDAgMnB4IDhweCAwIHJnYigwIDExIDgwIC8gMTIlKTtcbn1cbmBcblxuXG5jb25zdCBTZXR0aW5ncyA9ICh7dGhlbWUsICB0b2dnbGVUaGVtZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvZ2dsZVRoZW1lQ29udGFpbmVyID5cbiAgICAgICAgICAgIHsvKiA8U3Vkb0J1dHRvbj4gKi99XG4gICAgICAgICAgICA8R2VhckJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+XG4gICAgICAgICAgICAgICAge3RoZW1lID09PSAnbGlnaHQnID8gPExpZ2h0SWNvbi8+IDogPERhcmtJY29uIC8+IH1cblxuICAgICAgICAgICAgPC9HZWFyQnV0dG9uPlxuICAgICAgICAgICAgey8qIDwvU3Vkb0J1dHRvbj4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgPC9Ub2dnbGVUaGVtZUNvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Settings.js\n");

/***/ })

})