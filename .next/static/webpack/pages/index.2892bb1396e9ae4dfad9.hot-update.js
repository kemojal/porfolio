webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sections/MoreProjects.js":
/*!*********************************************!*\
  !*** ./components/sections/MoreProjects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SectionTitle */ \"./components/SectionTitle.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Project */ \"./components/Project.js\");\n/* harmony import */ var _utils_Data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Data */ \"./utils/Data.js\");\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/sections/MoreProjects.js\",\n    _this = undefined;\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    padding-top: 20px;\\n    max-width: 1100px;\\n    display: flex;\\n    flex-wrap: wrap;\\n    padding-bottom: 50px;\\n    /* background-color: #F8F8F8; */\\n    /* background-color: #F8F8F8; */\\n    justify-content: center;\\n    @media screen and (min-width: 776px) {\\n        padding-top: 50px;\\n        padding-bottom: 50px;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    margin-top: 40px;\\n    /* width: 100%; */\\n    background-color: \", \";\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    \\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\nwidth: 100vw;\\nmargin-top: 60px;\\nbackground:  orange;\\ndisplay: flex;\\nflex-direction: column;\\nalign-items: center;\\njustify-content: center;\\nposition: relative;\\n    /* margin-bottom: 40px; */\\n    &:before { \\n        content: '';\\n        left: 0;\\n        right: 0;\\n        width: 400px;\\n        bottom: 0;\\n    height: 200px;   \\nbackground: green; }\\n\\n/* @media screen and (min-width: 776px) {\\nmargin-top: 0px;\\n} */\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar MoreProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section(_templateObject());\n_c = MoreProjectsContainer;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.lightShadeBg;\n});\n_c2 = Wrapper;\nvar MoreProjectDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c3 = MoreProjectDiv;\n\nvar MoreProjects = function MoreProjects() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MoreProjectsContainer, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SectionTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      title: \"More projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MoreProjectDiv, {\n        children: _utils_Data__WEBPACK_IMPORTED_MODULE_6__[\"OthersData\"].slice(0, 6).map(function (_ref2, i) {\n          var title = _ref2.title,\n              discription = _ref2.discription,\n              githubLink = _ref2.githubLink;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            num: i < 10 ? \"0\".concat(i + 1) : \"\".concat(i + 1),\n            title: title,\n            discription: discription,\n            githubLink: githubLink\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }, _this);\n};\n\n_c4 = MoreProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoreProjects);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MoreProjectsContainer\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"MoreProjectDiv\");\n$RefreshReg$(_c4, \"MoreProjects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9Nb3JlUHJvamVjdHMuanM/MmNmOSJdLCJuYW1lcyI6WyJNb3JlUHJvamVjdHNDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiV3JhcHBlciIsImRpdiIsInRoZW1lIiwibGlnaHRTaGFkZUJnIiwiTW9yZVByb2plY3REaXYiLCJNb3JlUHJvamVjdHMiLCJPdGhlcnNEYXRhIiwic2xpY2UiLCJtYXAiLCJpIiwidGl0bGUiLCJkaXNjcmlwdGlvbiIsImdpdGh1YkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVYsbUJBQTNCO0tBQU1GLHFCO0FBd0JOLElBQU1HLE9BQU8sR0FBSUYseURBQU0sQ0FBQ0csR0FBWCxxQkFHVztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsWUFBckI7QUFBQSxDQUhYLENBQWI7TUFBTUgsTztBQVdOLElBQU1JLGNBQWMsR0FBR04seURBQU0sQ0FBQ0csR0FBVixvQkFBcEI7TUFBTUcsYzs7QUFjTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLHNCQUNJLHFFQUFDLHFCQUFEO0FBQUEsNEJBQ0kscUVBQUMscURBQUQ7QUFBYyxXQUFLLEVBQUc7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsT0FBRDtBQUFBLDZCQUNJLHFFQUFDLGNBQUQ7QUFBQSxrQkFFUUMsc0RBQVUsQ0FBQ0MsS0FBWCxDQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFzQkMsR0FBdEIsQ0FBMEIsaUJBQW1DQyxDQUFuQztBQUFBLGNBQUVDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLGNBQVNDLFdBQVQsU0FBU0EsV0FBVDtBQUFBLGNBQXNCQyxVQUF0QixTQUFzQkEsVUFBdEI7QUFBQSw4QkFFbEIscUVBQUMsZ0RBQUQ7QUFDQSxlQUFHLEVBQUlILENBQUMsR0FBRyxFQUFMLGNBQWdCQSxDQUFDLEdBQUMsQ0FBbEIsY0FBMkJBLENBQUMsR0FBQyxDQUE3QixDQUROO0FBRUEsaUJBQUssRUFBSUMsS0FGVDtBQUdBLHVCQUFXLEVBQUVDLFdBSGI7QUFJQSxzQkFBVSxFQUFJQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRmtCO0FBQUEsU0FBMUI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBdEJEOztNQUFNUCxZO0FBd0JTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2VjdGlvbnMvTW9yZVByb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICcuLi9TZWN0aW9uVGl0bGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTW9yZVByb2plY3QgZnJvbSAnLi4vUHJvamVjdCdcblxuaW1wb3J0IHsgT3RoZXJzRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL0RhdGEnXG5cbmNvbnN0IE1vcmVQcm9qZWN0c0NvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxud2lkdGg6IDEwMHZ3O1xubWFyZ2luLXRvcDogNjBweDtcbmJhY2tncm91bmQ6ICBvcmFuZ2U7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA0MHB4OyAqL1xuICAgICY6YmVmb3JlIHsgXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAyMDBweDsgICBcbmJhY2tncm91bmQ6IGdyZWVuOyB9XG5cbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3NnB4KSB7XG5tYXJnaW4tdG9wOiAwcHg7XG59ICovXG5gXG5cbmNvbnN0IFdyYXBwZXIgID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUubGlnaHRTaGFkZUJnfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbmBcblxuY29uc3QgTW9yZVByb2plY3REaXYgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODsgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NzZweCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgfVxuYFxuY29uc3QgTW9yZVByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb3JlUHJvamVjdHNDb250YWluZXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlID17XCJNb3JlIHByb2plY3RzXCJ9IC8+XG4gICAgICAgICAgICA8V3JhcHBlciA+XG4gICAgICAgICAgICAgICAgPE1vcmVQcm9qZWN0RGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPdGhlcnNEYXRhLnNsaWNlKDAsNikubWFwKCh7dGl0bGUsIGRpc2NyaXB0aW9uLCBnaXRodWJMaW5rfSwgaSk9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vcmVQcm9qZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW09IHsoaSA8IDEwICApPyBgMCR7aSsxfWAgOiBgJHtpKzF9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0ge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbj17ZGlzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWJMaW5rID0ge2dpdGh1Ykxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Nb3JlUHJvamVjdERpdj5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9Nb3JlUHJvamVjdHNDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlUHJvamVjdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/MoreProjects.js\n");

/***/ })

})