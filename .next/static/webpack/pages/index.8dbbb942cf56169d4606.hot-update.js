webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Socials.js":
/*!*******************************!*\
  !*** ./components/Socials.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/Socials.js\",\n    _this = undefined;\n\nfunction _templateObject4() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    position: relative;\\n    /* background-color: pink; */\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    justify-content:center;\\n    span{\\n        font-weight: lighter;\\n        color: #8F8E8E;\\n        font-size: 1rem;\\n        position: absolute;\\n        top: 30%;\\n        right: -20%;\\n        transform-origin: 50% 300%; \\n        /* transform: translate(50%, 50%); */\\n        transform: rotate(90deg);\\n        &:before {\\n            content: '';\\n            width: 30vh;\\n            border-bottom: solid 1px #8F8E8E;\\n            opacity: 0.3;\\n            position: absolute;\\n            left: -170%;\\n            top: 50%;\\n            z-index: -1;\\n        }\\n        \\n        &:after {\\n            content: '';\\n            width: 58vh;\\n            border-bottom: solid 1px #8F8E8E;\\n            opacity: 0.3;\\n            position: absolute;\\n            left: 110%;\\n            top: 50%;\\n            z-index: -1;\\n        }\\n        \\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n            background-color: white;\\n            background-color: \", \";\\n            border: 3px solid #EA3C5C;\\n            width: 32px;\\n            height: 32px;\\n            border-radius: 30px;\\n            display: flex;\\n            justify-content: center;\\n            padding: 4px;\\n            opacity: 0.8;\\n            cursor: pointer;\\n            &:hover{\\n                opacity: 1;\\n                padding-bottom: 10px;\\n                /* background-color: red; */\\n            }\\n            \\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    width: 50px;\\n    padding: 20px 0;\\n    height: 40%;\\n    display: flex;\\n    flex-direction: column;\\n    color: black;\\n    justify-content: space-between;\\n    align-items: center;\\n    cursor: pointer;\\n    &:before {\\n            content: '';\\n            height: 100vh;\\n            border-bottom: solid 1px #8F8E8E;\\n            opacity: 1;\\n            position: absolute;\\n            left: 50%;\\n            top: 10%;\\n            z-index: 0;\\n        }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    display: none;\\n    \\n    @media (min-width: 768px) {\\n        position: fixed;\\n        height: 100vh;\\n        z-index: 1000;\\n        top: 0;\\n        left: 0px;\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: space-between;\\n        align-items: center;\\n        color: black;\\n        padding: 0 2rem;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import github from '../public/assets/imgs/logo-github.svg';\n\n // /assets/imgs/blob.svg\n\nvar SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = SocialContainer;\nvar Icons = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = Icons;\nvar Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.socialIconBg;\n});\n_c3 = Icon;\nvar EmailContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n\nvar Socials = function Socials() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SocialContainer, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icons, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          className: \"social-icon\",\n          quality: 100,\n          src: '/assets/imgs/logo-instagram.svg',\n          alt: \"Picture of the author\",\n          width: \"16px\",\n          height: \"16px\",\n          priority: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          src: '/assets/imgs/logo-youtube.svg',\n          alt: \"Picture of the author\",\n          width: \"16px\",\n          height: \"16px\",\n          priority: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          src: '/assets/imgs/logo-twitter.svg',\n          alt: \"Picture of the author\",\n          width: \"16px\",\n          height: \"16px\",\n          priority: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Icon, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          src: '/assets/imgs/logo-github.svg',\n          alt: \"Picture of the author\",\n          width: \"16px\",\n          height: \"16px\",\n          priority: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 108,\n    columnNumber: 9\n  }, _this);\n};\n\n_c4 = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"SocialContainer\");\n$RefreshReg$(_c2, \"Icons\");\n$RefreshReg$(_c3, \"Icon\");\n$RefreshReg$(_c4, \"Socials\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxzLmpzPzBmODUiXSwibmFtZXMiOlsiU29jaWFsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSWNvbnMiLCJJY29uIiwidGhlbWUiLCJzb2NpYWxJY29uQmciLCJFbWFpbENvbnRhaW5lciIsIlNvY2lhbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUdBOztBQUNBLElBQU1BLGVBQWUsR0FBSUMseURBQU0sQ0FBQ0MsR0FBWCxtQkFBckI7S0FBTUYsZTtBQWlCTixJQUFNRyxLQUFLLEdBQUlGLHlEQUFNLENBQUNDLEdBQVgsb0JBQVg7TUFBTUMsSztBQXNCTixJQUFNQyxJQUFJLEdBQUdILHlEQUFNLENBQUNDLEdBQVYscUJBRXNCO0FBQUEsTUFBR0csS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxZQUFyQjtBQUFBLENBRnRCLENBQVY7TUFBTUYsSTtBQW1CTixJQUFNRyxjQUFjLEdBQUlOLHlEQUFNLENBQUNDLEdBQVgsb0JBQXBCOztBQXlDQSxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLHNCQUNJLHFFQUFDLGVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0kscUVBQUMsSUFBRDtBQUFBLCtCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksbUJBQVMsRUFBQyxhQURkO0FBRUksaUJBQU8sRUFBRSxHQUZiO0FBR0ksYUFBRyxFQUFFLGlDQUhUO0FBSUksYUFBRyxFQUFDLHVCQUpSO0FBS0ksZUFBSyxFQUFDLE1BTFY7QUFNSSxnQkFBTSxFQUFDLE1BTlg7QUFPSSxrQkFBUSxFQUFFO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVlJLHFFQUFDLElBQUQ7QUFBQSwrQkFDSSxxRUFBQyxpREFBRDtBQUNJLGFBQUcsRUFBRSwrQkFEVDtBQUVJLGFBQUcsRUFBQyx1QkFGUjtBQUdJLGVBQUssRUFBQyxNQUhWO0FBSUksZ0JBQU0sRUFBQyxNQUpYO0FBS0ksa0JBQVEsRUFBRTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkosZUFxQkkscUVBQUMsSUFBRDtBQUFBLCtCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksYUFBRyxFQUFFLCtCQURUO0FBRUksYUFBRyxFQUFDLHVCQUZSO0FBR0ksZUFBSyxFQUFDLE1BSFY7QUFJSSxnQkFBTSxFQUFDLE1BSlg7QUFLSSxrQkFBUSxFQUFFO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkosZUE4QkkscUVBQUMsSUFBRDtBQUFBLCtCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksYUFBRyxFQUFFLDhCQURUO0FBRUksYUFBRyxFQUFDLHVCQUZSO0FBR0ksZUFBSyxFQUFDLE1BSFY7QUFJSSxnQkFBTSxFQUFDLE1BSlg7QUFLSSxrQkFBUSxFQUFFO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaURILENBbEREOztNQUFNQSxPO0FBb0RTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU29jaWFscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gaW1wb3J0IGdpdGh1YiBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL2ltZ3MvbG9nby1naXRodWIuc3ZnJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuLy8gL2Fzc2V0cy9pbWdzL2Jsb2Iuc3ZnXG5jb25zdCBTb2NpYWxDb250YWluZXIgID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgIH1cbmBcbmNvbnN0IEljb25zICA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjOEY4RThFO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuYFxuXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zb2NpYWxJY29uQmd9O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0VBM0M1QztcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbmBcbmNvbnN0IEVtYWlsQ29udGFpbmVyID0gIHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHBpbms7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHNwYW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBjb2xvcjogIzhGOEU4RTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzAlO1xuICAgICAgICByaWdodDogLTIwJTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDMwMCU7IFxuICAgICAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7ICovXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMzB2aDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjOEY4RThFO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTE3MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgd2lkdGg6IDU4dmg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzhGOEU4RTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDExMCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbmBcbmNvbnN0IFNvY2lhbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNvY2lhbENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJY29ucz5cbiAgICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2Fzc2V0cy9pbWdzL2xvZ28taW5zdGFncmFtLnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzE2cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzE2cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Jy9hc3NldHMvaW1ncy9sb2dvLXlvdXR1YmUuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTZweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTZweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2Fzc2V0cy9pbWdzL2xvZ28tdHdpdHRlci5zdmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxNnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxNnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnL2Fzc2V0cy9pbWdzL2xvZ28tZ2l0aHViLnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzE2cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzE2cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgPC9JY29ucz5cbiAgICAgICAgICAgIHsvKiA8RW1haWxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAga2VtbzM4NTVAZ21haWwuY29tXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9FbWFpbENvbnRhaW5lcj4gKi99XG4gICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Socials.js\n");

/***/ })

})