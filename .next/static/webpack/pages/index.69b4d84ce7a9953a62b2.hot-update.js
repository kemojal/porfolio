webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/ProjectCard.js\",\n    _this = undefined;\n\nfunction _templateObject6() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  width: 32px;\\n  height: 32px;\\n  /* border-radius: 30px; */\\n  border-radius: 15px;\\n  border: 2px solid var(--crimson);\\n  border: 1px solid rgba(255, 255, 255, 0.05);\\n  background-color: rgba(255,255,255,0.05);\\n  backdrop-filter: blur(20px);\\n  /* width: 100%; */\\n  position: absolute;\\n  /* left: 0; */\\n  right: 5px;\\n  border-radius: 30px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  \\n  img {\\n    width: 20px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\npadding-top: 20px;\\n/* background: orange; */\\n.proj__title {\\n    padding: 10px 0;\\n}\\n.title{\\n  \\n}\\n.sub-title{\\n  font-size: 1.5rem;\\n  line-height: 2.5rem;\\n  color: black;\\n  font-size: 2rem;\\n  line-height: 1.6;\\n  font-weight: 700;\\n  margin-bottom: 1.5rem;\\n  text-align: left;\\n  margin-top: 1.5rem;\\n  color: \", \";\\n    background: none;\\n  -webkit-background-clip: none;\\n  -webkit-text-fill-color: unset;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 1;\\n  -webkit-box-orient: vertical;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  @media screen and (min-width: 786px) {\\n    font-size: 1.3rem;\\n    line-height: 1.6;\\n    margin-bottom: 0.8rem;\\n  }\\n}\\n.proj__title {\\n    /* padding: 10px 0; */\\n    /* border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%; */\\n    background: #FE316130;\\n    \\n    color: #FFFFFF;\\n    color: \", \";\\n  -webkit-background-clip: inherit;\\n  -webkit-text-fill-color: inherit;\\n    /* box-shadow:\\n    0 0 0 4px white,\\n    0 0 0 6px #FE3161; */\\n    position: relative;\\n    font-size: 1.2rem;\\n    line-height: 2rem;\\n    display: flex;\\n    align-items: center;\\n    margin: 0px 0;\\n    margin-right: 1rem;\\n\\n    padding-left: 1.5rem;\\n    padding-right: 1.5rem;\\n    padding-top: .25rem;\\n    display: inline-block;\\n    color: \", \";\\n    /* background: -webkit-linear-gradient(-180deg, #FFB800,#fd4370\\n    );\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent; */\\n}\\n.proj__discription{\\n  color: var(--lightNormalTextTitleColor);;\\n  padding: 0px 0;\\n  margin-bottom: 1.5rem;\\n  @media screen and (min-width: 786px) {\\n    font-size: 0.9rem;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 3;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n  }\\n}\\na{\\n  /* background: #61DAFB47;\\n  color: #61DAFB\\n  color: red; */\\n  height: 38px;\\n  /* width: 180px; */\\n  width: 141px;\\n  padding: 15px 15px;\\n    font-size: 14px;\\n    border-radius: 15px;\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n\\n    box-shadow: 0 0 0 5px #00000010, 0 0 0 10px #00000005, 0 0 0 20px #00000001;\\n    border-radius: 30px;\\n    color: #ffffff90;\\n    background-color: #fd4370;\\n    background-image: linear-gradient(-90deg,#ff004d,#fd4370);\\n    will-change: transform;\\n    -webkit-transition: -webkit-transform 450ms;\\n    -webkit-transition: transform 450ms;\\n    transition: transform 450ms;\\n    -webkit-transition: all ease-in-out;\\n    transition: all ease-in-out;\\n    z-index: 1000;\\n    \\n}\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  width: 100%;\\n  flex-shrink: 0;\\n  height: 300px;\\n  /* background: white; */\\n  box-shadow: 4px 13px 30px 1px rgb(253 170 170 / 17%);\\n  border-radius: 20px;\\n  overflow: hidden;\\n\\n  &:after {\\n    content: \\\"\\\";\\n    left: 0;\\n    right: 0;\\n    bottom: 10px;\\n    border-bottom-left-radius: 250%;\\n    border-bottom-right-radius: 250%;\\n    width: 300%;\\n    height: 75%;\\n    -webkit-transform: translate(-10%,30%);\\n    -ms-transform: translate(-10%,30%);\\n    transform: translate(-10%,30%);\\n    -webkit-transition: all 0.2s ease-in-out;\\n    transition: all 0.2s ease-in-out;\\n    background-image: linear-gradient(\\n180deg\\n,hsla(0,0%,100%,0) 1%,#fff 37%);\\n    position: absolute;\\n}\\n\\n  img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    display: block;\\n    opacity: 1;\\n    border-radius: 0px;\\n    transition: all 0.3s;\\n  }\\n  \\n  @media screen and (max-width: 768px) {\\n    width: 90%;\\n    /* background-color: brown; */\\n  }\\n  @media screen and (max-width: 576px) {\\n    width: 95%;\\n    position: relative;\\n    height: auto;\\n  }\\n  @media screen and (max-height: 500px) and (min-width: 992px) {\\n    height: 270px;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  position: absolute;\\n  right: 20px;\\n  bottom: -40px;\\n  width: 4rem;\\n  height: 6rem;\\n  /* z-index: 10000; */\\n  border-top-right-radius: 6rem;\\n  border-bottom-right-radius: .5rem;\\n  border-bottom-right-radius: .5rem;\\n  background-image: url(\\\"/assets/imgs/dots-red.svg\\\");\\n  background-size:     cover;                      /* <------ */\\n    background-repeat:   no-repeat;\\n    background-position: center center;\\n  transform: rotate(\\n90deg\\n);\\n  /* background-color: rgba(255,133,119,1); */\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 3rem;\\n  height: 4rem;\\n  border-top-left-radius: 6rem;\\n  border-bottom-left-radius: .5rem;\\n  border-top-right-radius: .5rem;\\n  background-color: #FE1554;\\n\\n  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);\\n    border-radius: 5px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin: 10px 0;\\n  /* width: 95%; */\\n  /* width: 25%; */\\n  position: relative;\\n  /* max-width: 800px; */\\n  /* background: pink; */\\n  /* box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2); */\\n  padding: 25px;\\n  /* border-radius: 3rem; */\\n  height: auto;\\n  width: 30%;\\n  margin: 1rem;\\n  transition: all 0.3s ease-in;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* background-color: lime; */\\n  margin-right: 10px;\\n  cursor: pointer;\\n  background-color: #E5E5E526;\\n  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);\\n  border-radius: 5px;\\n  /* border: 3px solid transparent; */\\n  box-shadow: \", \";\\n  &:hover{\\n    height: auto;\\n    /* border: 3px solid #CC2553; */\\n    /* background-color: #6c36d6; */\\n    background-color: #FE1554;\\n    .proj__discription{\\n      color: black;\\n    }\\n    .proj__title {\\n      background-color: black;\\n      color: #FE3161;\\n      box-shadow:\\n    0 0 0 4px white,\\n    0 0 0 6px black;\\n    }\\n\\n  }\\n\\n  @media (max-width: 992px) {\\n    max-width: 680px;\\n    height: 400px;\\n    width: 95%;\\n    margin-right: 0px;\\n    border-radius: 1rem;\\n    \\n  }\\n\\n  @media (max-width: 768px) {\\n    /* min-height: 500px; */\\n    height: auto;\\n    /* margin: 60px auto; */\\n    padding-bottom: 0;\\n\\n\\n\\n    padding: 10px;\\n    padding-bottom: 20px;\\n    padding-top: 20px;\\n    margin: 5px auto;\\n    /* &:nth-child(1) { \\n      margin-top: 180px;\\n    } */\\n  }\\n\\n  @media screen and (max-height: 500px) and (min-width: 992px) {\\n    height: 350px;\\n    margin: 10px 0;\\n  }\\n   &:nth-child(1) { \\n      /* margin-top: 180px; */\\n      /* background: blue; */\\n    }\\n    \\n  &:after{\\n    content: '';\\n    position: absolute;\\n    width: 100vw;\\n    height: 1vw;\\n    /* background-color: #E5E5E5; */\\n    background-color: transparent;\\n    bottom:-20px;\\n    @media screen and (min-width: 776px) {\\n      display: none;\\n    }\\n    /* background: linear-gradient( */\\n      /* 360deg, */\\n      /* rgba(255, 255, 255, 0) 0%, */\\n      /* #c51838 51%, */\\n      rgba(255, 255, 255, 0) 100%\\n    );\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar Card = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div)(_templateObject(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.btnBoxShadow;\n});\n_c = Card;\nvar RoundAbsoluteDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = RoundAbsoluteDiv;\nvar RoundAbsoluteDivBottomRight = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = RoundAbsoluteDivBottomRight;\nvar PreviewImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = PreviewImg;\nvar SliderContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5(), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.text;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.text;\n}, function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.text;\n});\n_c5 = SliderContent;\nvar Circle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c6 = Circle;\n\nvar ProjectCard = function ProjectCard(_ref5) {\n  var title = _ref5.title,\n      subtitle = _ref5.subtitle,\n      discription = _ref5.discription,\n      color = _ref5.color,\n      imgScr = _ref5.imgScr,\n      _ref5$isReverse = _ref5.isReverse,\n      isReverse = _ref5$isReverse === void 0 ? false : _ref5$isReverse,\n      githubLink = _ref5.githubLink;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RoundAbsoluteDiv, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 331,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RoundAbsoluteDivBottomRight, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 332,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PreviewImg, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: imgScr,\n        alt: \"Picture of the author\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 334,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 333,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SliderContent, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"title\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"proj__title\",\n          children: [\" \", title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 339,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"sub-title\",\n          children: subtitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 340,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 338,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"proj__discription\",\n        children: discription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 342,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"githubLink\",\n        className: \"proj__button\",\n        children: [\"Read more...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Circle, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/assets/imgs/arrow_forward.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 349,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 348,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 346,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 336,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 330,\n    columnNumber: 5\n  }, _this);\n};\n\n_c7 = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"RoundAbsoluteDiv\");\n$RefreshReg$(_c3, \"RoundAbsoluteDivBottomRight\");\n$RefreshReg$(_c4, \"PreviewImg\");\n$RefreshReg$(_c5, \"SliderContent\");\n$RefreshReg$(_c6, \"Circle\");\n$RefreshReg$(_c7, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcz9hYTFmIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZWQiLCJtb3Rpb24iLCJkaXYiLCJ0aGVtZSIsImJ0bkJveFNoYWRvdyIsIlJvdW5kQWJzb2x1dGVEaXYiLCJSb3VuZEFic29sdXRlRGl2Qm90dG9tUmlnaHQiLCJQcmV2aWV3SW1nIiwiU2xpZGVyQ29udGVudCIsInRleHQiLCJDaXJjbGUiLCJQcm9qZWN0Q2FyZCIsInRpdGxlIiwic3VidGl0bGUiLCJkaXNjcmlwdGlvbiIsImNvbG9yIiwiaW1nU2NyIiwiaXNSZXZlcnNlIiwiZ2l0aHViTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsR0FBUixDQUFULG9CQXdCTTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsWUFBckI7QUFBQSxDQXhCTixDQUFWO0tBQU1MLEk7QUFpR04sSUFBTU0sZ0JBQWdCLEdBQUdMLHlEQUFNLENBQUNFLEdBQVYsb0JBQXRCO01BQU1HLGdCO0FBZU4sSUFBTUMsMkJBQTJCLEdBQUdOLHlEQUFNLENBQUNFLEdBQVYsb0JBQWpDO01BQU1JLDJCO0FBbUJOLElBQU1DLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0UsR0FBVixvQkFBaEI7TUFBTUssVTtBQW9ETixJQUFNQyxhQUFhLEdBQUdSLHlEQUFNLENBQUNFLEdBQVYscUJBbUJSO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxJQUFyQjtBQUFBLENBbkJRLEVBd0NOO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxJQUFyQjtBQUFBLENBeENNLEVBMEROO0FBQUEsTUFBR04sS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxJQUFyQjtBQUFBLENBMURNLENBQW5CO01BQU1ELGE7QUEwR04sSUFBTUUsTUFBTSxHQUFHVix5REFBTSxDQUFDRSxHQUFWLG9CQUFaO01BQU1RLE07O0FBdUJOLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBUWQ7QUFBQSxNQVBKQyxLQU9JLFNBUEpBLEtBT0k7QUFBQSxNQU5KQyxRQU1JLFNBTkpBLFFBTUk7QUFBQSxNQUxKQyxXQUtJLFNBTEpBLFdBS0k7QUFBQSxNQUpKQyxLQUlJLFNBSkpBLEtBSUk7QUFBQSxNQUhKQyxNQUdJLFNBSEpBLE1BR0k7QUFBQSw4QkFGSkMsU0FFSTtBQUFBLE1BRkpBLFNBRUksZ0NBRlEsS0FFUjtBQUFBLE1BREpDLFVBQ0ksU0FESkEsVUFDSTtBQUNKLHNCQUNFLHFFQUFDLElBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywyQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHSSxxRUFBQyxVQUFEO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVGLE1BQVY7QUFBa0IsV0FBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNRSxxRUFBQyxhQUFEO0FBQUEsOEJBRUU7QUFBTSxpQkFBTSxPQUFaO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQUEsMEJBQWdDSixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFNLFdBQVQ7QUFBQSxvQkFBc0JDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxrQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFVSTtBQUFHLFlBQUksRUFBQyxZQUFSO0FBQXFCLGlCQUFTLEVBQUMsY0FBL0I7QUFBQSxnREFFQSxxRUFBQyxNQUFEO0FBQUEsaUNBQ0E7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBDRDs7TUFBTUgsVztBQXFDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIC8qIHdpZHRoOiA5NSU7ICovXG4gIC8qIHdpZHRoOiAyNSU7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbWF4LXdpZHRoOiA4MDBweDsgKi9cbiAgLyogYmFja2dyb3VuZDogcGluazsgKi9cbiAgLyogYm94LXNoYWRvdzogMHB4IDE0cHggODBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMik7ICovXG4gIHBhZGRpbmc6IDI1cHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDNyZW07ICovXG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTI2O1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2IoMCAwIDAgLyAxMiUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xuICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJ0bkJveFNoYWRvd307XG4gICY6aG92ZXJ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkICNDQzI1NTM7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzZjMzZkNjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkUxNTU0O1xuICAgIC5wcm9qX19kaXNjcmlwdGlvbntcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLnByb2pfX3RpdGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgY29sb3I6ICNGRTMxNjE7XG4gICAgICBib3gtc2hhZG93OlxuICAgIDAgMCAwIDRweCB3aGl0ZSxcbiAgICAwIDAgMCA2cHggYmxhY2s7XG4gICAgfVxuXG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIFxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8qIG1hcmdpbjogNjBweCBhdXRvOyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG5cblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICAvKiAmOm50aC1jaGlsZCgxKSB7IFxuICAgICAgbWFyZ2luLXRvcDogMTgwcHg7XG4gICAgfSAqL1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gICAmOm50aC1jaGlsZCgxKSB7IFxuICAgICAgLyogbWFyZ2luLXRvcDogMTgwcHg7ICovXG4gICAgICAvKiBiYWNrZ3JvdW5kOiBibHVlOyAqL1xuICAgIH1cbiAgICBcbiAgJjphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMXZ3O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm90dG9tOi0yMHB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3NnB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoICovXG4gICAgICAvKiAzNjBkZWcsICovXG4gICAgICAvKiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAqL1xuICAgICAgLyogI2M1MTgzOCA1MSUsICovXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCVcbiAgICApO1xuICB9XG5gO1xuY29uc3QgUm91bmRBYnNvbHV0ZURpdiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkUxNTU0O1xuXG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYigwIDAgMCAvIDEyJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuYFxuXG5jb25zdCBSb3VuZEFic29sdXRlRGl2Qm90dG9tUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IC00MHB4O1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICAvKiB6LWluZGV4OiAxMDAwMDsgKi9cbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41cmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZ3MvZG90cy1yZWQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZShcbjkwZGVnXG4pO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwxMzMsMTE5LDEpOyAqL1xuYFxuY29uc3QgUHJldmlld0ltZyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXG4gIGJveC1zaGFkb3c6IDRweCAxM3B4IDMwcHggMXB4IHJnYigyNTMgMTcwIDE3MCAvIDE3JSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNTAlO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNTAlO1xuICAgIHdpZHRoOiAzMDAlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwzMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAlLDMwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwzMCUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuMTgwZGVnXG4saHNsYSgwLDAlLDEwMCUsMCkgMSUsI2ZmZiAzNyUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJyb3duOyAqL1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgfVxuYDtcbmNvbnN0IFNsaWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxucGFkZGluZy10b3A6IDIwcHg7XG4vKiBiYWNrZ3JvdW5kOiBvcmFuZ2U7ICovXG4ucHJval9fdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cbi50aXRsZXtcbiAgXG59XG4uc3ViLXRpdGxle1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogbm9uZTtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHVuc2V0O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzg2cHgpIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxufVxuLnByb2pfX3RpdGxlIHtcbiAgICAvKiBwYWRkaW5nOiAxMHB4IDA7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogOTElIDklIDkwJSAxMCUgLyAyOSUgODIlIDE4JSA3MSU7ICovXG4gICAgYmFja2dyb3VuZDogI0ZFMzE2MTMwO1xuICAgIFxuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogaW5oZXJpdDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGluaGVyaXQ7XG4gICAgLyogYm94LXNoYWRvdzpcbiAgICAwIDAgMCA0cHggd2hpdGUsXG4gICAgMCAwIDAgNnB4ICNGRTMxNjE7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweCAwO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcblxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjRkZCODAwLCNmZDQzNzBcbiAgICApO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAqL1xufVxuLnByb2pfX2Rpc2NyaXB0aW9ue1xuICBjb2xvcjogdmFyKC0tbGlnaHROb3JtYWxUZXh0VGl0bGVDb2xvcik7O1xuICBwYWRkaW5nOiAwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODZweCkge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbmF7XG4gIC8qIGJhY2tncm91bmQ6ICM2MURBRkI0NztcbiAgY29sb3I6ICM2MURBRkJcbiAgY29sb3I6IHJlZDsgKi9cbiAgaGVpZ2h0OiAzOHB4O1xuICAvKiB3aWR0aDogMTgwcHg7ICovXG4gIHdpZHRoOiAxNDFweDtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzAwMDAwMDEwLCAwIDAgMCAxMHB4ICMwMDAwMDAwNSwgMCAwIDAgMjBweCAjMDAwMDAwMDE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjkwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDQzNzA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywjZmYwMDRkLCNmZDQzNzApO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSA0NTBtcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSA0NTBtcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgXG59YDtcblxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgLyogYm9yZGVyLXJhZGl1czogMzBweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY3JpbXNvbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogbGVmdDogMDsgKi9cbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgZGlzY3JpcHRpb24sXG4gIGNvbG9yLFxuICBpbWdTY3IsXG4gIGlzUmV2ZXJzZSA9IGZhbHNlLFxuICBnaXRodWJMaW5rLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPFJvdW5kQWJzb2x1dGVEaXYgLz5cbiAgICAgIDxSb3VuZEFic29sdXRlRGl2Qm90dG9tUmlnaHQvPlxuICAgICAgICA8UHJldmlld0ltZz5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nU2NyfSBhbHQ9J1BpY3R1cmUgb2YgdGhlIGF1dGhvcicgLz5cbiAgICAgICAgPC9QcmV2aWV3SW1nPlxuICAgICAgPFNsaWRlckNvbnRlbnQ+XG4gICAgICAgIFxuICAgICAgICA8ZGl2ICBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9qX190aXRsZSc+IHt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWItdGl0bGVcIj57c3VidGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2pfX2Rpc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHtkaXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGEgaHJlZj0nZ2l0aHViTGluaycgY2xhc3NOYW1lPSdwcm9qX19idXR0b24nPlxuICAgICAgICAgIFJlYWQgbW9yZS4uLlxuICAgICAgICAgIDxDaXJjbGU+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1ncy9hcnJvd19mb3J3YXJkLnN2ZycgLz5cbiAgICAgICAgPC9DaXJjbGU+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L1NsaWRlckNvbnRlbnQ+XG5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectCard.js\n");

/***/ })

})