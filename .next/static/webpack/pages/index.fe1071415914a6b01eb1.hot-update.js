webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/kemojallow/Documents/DPS/porfolio/components/ProjectCard.js\",\n    _this = undefined;\n\nfunction _templateObject6() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  width: 32px;\\n  height: 32px;\\n  /* border-radius: 30px; */\\n  border-radius: 15px;\\n  border: 2px solid var(--crimson);\\n  border: 1px solid rgba(255, 255, 255, 0.05);\\n  background-color: rgba(255,255,255,0.05);\\n  backdrop-filter: blur(20px);\\n  /* width: 100%; */\\n  position: absolute;\\n  /* left: 0; */\\n  right: 5px;\\n  border-radius: 30px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  \\n  img {\\n    width: 20px;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\npadding-top: 20px;\\n/* background: orange; */\\n.proj__title {\\n    padding: 10px 0;\\n}\\n.title{\\n  \\n}\\n.sub-title{\\n  font-size: 1.5rem;\\n  line-height: 2.5rem;\\n  color: black;\\n  font-size: 2rem;\\n  line-height: 1.6;\\n  font-weight: 700;\\n  margin-bottom: 1.5rem;\\n  text-align: left;\\n  margin-top: 1.5rem;\\n  color: \", \";\\n    background: none;\\n  -webkit-background-clip: none;\\n  -webkit-text-fill-color: unset;\\n  display: -webkit-box;\\n  -webkit-line-clamp: 1;\\n  -webkit-box-orient: vertical;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  @media screen and (min-width: 786px) {\\n    font-size: 1.3rem;\\n    line-height: 1.6;\\n    margin-bottom: 0.8rem;\\n  }\\n}\\n.proj__title {\\n    /* padding: 10px 0; */\\n    /* border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%; */\\n    background: #FE3161;\\n    color: #FFFFFF;\\n    color: \", \";\\n  -webkit-background-clip: inherit;\\n  -webkit-text-fill-color: inherit;\\n    box-shadow:\\n    0 0 0 4px white,\\n    0 0 0 6px #FE3161;\\n    position: relative;\\n    font-size: 1.2rem;\\n    line-height: 2rem;\\n    display: flex;\\n    align-items: center;\\n    margin: 0px 0;\\n    margin-right: 1rem;\\n\\n    padding-left: 1.5rem;\\n    padding-right: 1.5rem;\\n    padding-top: .25rem;\\n    display: inline-block;\\n    color: \", \";\\n    /* background: -webkit-linear-gradient(-180deg, #FFB800,#fd4370\\n    );\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent; */\\n}\\n.proj__discription{\\n  color: var(--lightNormalTextTitleColor);;\\n  padding: 0px 0;\\n  margin-bottom: 1.5rem;\\n  @media screen and (min-width: 786px) {\\n    font-size: 0.9rem;\\n    display: -webkit-box;\\n    -webkit-line-clamp: 3;\\n    -webkit-box-orient: vertical;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n  }\\n}\\na{\\n  /* background: #61DAFB47;\\n  color: #61DAFB\\n  color: red; */\\n  height: 38px;\\n  width: 180px;\\n  padding: 15px 15px;\\n    font-size: 14px;\\n    border-radius: 15px;\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n\\n    box-shadow: 0 0 0 5px #00000010, 0 0 0 10px #00000005, 0 0 0 20px #00000001;\\n    border-radius: 30px;\\n    color: #ffffff90;\\n    background-color: #fd4370;\\n    background-image: linear-gradient(-90deg,#ff004d,#fd4370);\\n    will-change: transform;\\n    -webkit-transition: -webkit-transform 450ms;\\n    -webkit-transition: transform 450ms;\\n    transition: transform 450ms;\\n    -webkit-transition: all ease-in-out;\\n    transition: all ease-in-out;\\n    z-index: 1000;\\n    \\n}\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  width: 100%;\\n  flex-shrink: 0;\\n  height: 300px;\\n  /* background: white; */\\n  box-shadow: 4px 13px 30px 1px rgb(253 170 170 / 17%);\\n  border-radius: 20px;\\n  overflow: hidden;\\n\\n  &:after {\\n    content: \\\"\\\";\\n    left: 0;\\n    right: 0;\\n    bottom: 10px;\\n    border-bottom-left-radius: 250%;\\n    border-bottom-right-radius: 250%;\\n    width: 300%;\\n    height: 75%;\\n    -webkit-transform: translate(-10%,30%);\\n    -ms-transform: translate(-10%,30%);\\n    transform: translate(-10%,30%);\\n    -webkit-transition: all 0.2s ease-in-out;\\n    transition: all 0.2s ease-in-out;\\n    background-image: linear-gradient(\\n180deg\\n,hsla(0,0%,100%,0) 1%,#fff 37%);\\n    position: absolute;\\n}\\n\\n  img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    display: block;\\n    opacity: 1;\\n    border-radius: 0px;\\n    transition: all 0.3s;\\n  }\\n  \\n  @media screen and (max-width: 768px) {\\n    width: 90%;\\n    /* background-color: brown; */\\n  }\\n  @media screen and (max-width: 576px) {\\n    width: 95%;\\n    position: relative;\\n    height: auto;\\n  }\\n  @media screen and (max-height: 500px) and (min-width: 992px) {\\n    height: 270px;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  position: absolute;\\n  right: 20px;\\n  bottom: -40px;\\n  width: 4rem;\\n  height: 6rem;\\n  /* z-index: 10000; */\\n  border-top-right-radius: 6rem;\\n  border-bottom-right-radius: .5rem;\\n  border-bottom-right-radius: .5rem;\\n  background-image: url(\\\"/assets/imgs/dots-red.svg\\\");\\n  background-size:     cover;                      /* <------ */\\n    background-repeat:   no-repeat;\\n    background-position: center center;\\n  transform: rotate(\\n90deg\\n);\\n  /* background-color: rgba(255,133,119,1); */\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 3rem;\\n  height: 4rem;\\n  border-top-left-radius: 6rem;\\n  border-bottom-left-radius: .5rem;\\n  border-top-right-radius: .5rem;\\n  background-color: #FE1554;\\n\\n  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);\\n    border-radius: 5px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_kemojallow_Documents_DPS_porfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin: 10px 0;\\n  /* width: 95%; */\\n  /* width: 25%; */\\n  position: relative;\\n  /* max-width: 800px; */\\n  /* background: pink; */\\n  /* box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2); */\\n  padding: 25px;\\n  /* border-radius: 3rem; */\\n  height: auto;\\n  width: 30%;\\n  margin: 1rem;\\n  transition: all 0.3s ease-in;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* background-color: lime; */\\n  margin-right: 10px;\\n  cursor: pointer;\\n  background-color: #E5E5E526;\\n  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);\\n  border-radius: 5px;\\n  /* border: 3px solid transparent; */\\n  &:hover{\\n    height: auto;\\n    /* border: 3px solid #CC2553; */\\n    /* background-color: #6c36d6; */\\n    background-color: #FE1554;\\n    .proj__discription{\\n      color: black;\\n    }\\n    .proj__title {\\n      background-color: black;\\n      color: #FE3161;\\n      box-shadow:\\n    0 0 0 4px white,\\n    0 0 0 6px black;\\n    }\\n\\n  }\\n\\n  @media (max-width: 992px) {\\n    max-width: 680px;\\n    height: 400px;\\n    width: 95%;\\n    margin-right: 0px;\\n    border-radius: 1rem;\\n    \\n  }\\n\\n  @media (max-width: 768px) {\\n    /* min-height: 500px; */\\n    height: auto;\\n    /* margin: 60px auto; */\\n    padding-bottom: 0;\\n\\n\\n\\n    padding: 10px;\\n    padding-bottom: 20px;\\n    padding-top: 20px;\\n    margin: 5px auto;\\n    /* &:nth-child(1) { \\n      margin-top: 180px;\\n    } */\\n  }\\n\\n  @media screen and (max-height: 500px) and (min-width: 992px) {\\n    height: 350px;\\n    margin: 10px 0;\\n  }\\n   &:nth-child(1) { \\n      /* margin-top: 180px; */\\n      /* background: blue; */\\n    }\\n    \\n  &:after{\\n    content: '';\\n    position: absolute;\\n    width: 100vw;\\n    height: 1vw;\\n    /* background-color: #E5E5E5; */\\n    background-color: transparent;\\n    bottom:-20px;\\n    @media screen and (min-width: 776px) {\\n      display: none;\\n    }\\n    /* background: linear-gradient( */\\n      /* 360deg, */\\n      /* rgba(255, 255, 255, 0) 0%, */\\n      /* #c51838 51%, */\\n      rgba(255, 255, 255, 0) 100%\\n    );\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar Card = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div)(_templateObject());\n_c = Card;\nvar RoundAbsoluteDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = RoundAbsoluteDiv;\nvar RoundAbsoluteDivBottomRight = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = RoundAbsoluteDivBottomRight;\nvar PreviewImg = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = PreviewImg;\nvar SliderContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.text;\n}, function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.text;\n}, function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.text;\n});\n_c5 = SliderContent;\nvar Circle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c6 = Circle;\n\nvar ProjectCard = function ProjectCard(_ref4) {\n  var title = _ref4.title,\n      subtitle = _ref4.subtitle,\n      discription = _ref4.discription,\n      color = _ref4.color,\n      imgScr = _ref4.imgScr,\n      _ref4$isReverse = _ref4.isReverse,\n      isReverse = _ref4$isReverse === void 0 ? false : _ref4$isReverse,\n      githubLink = _ref4.githubLink;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RoundAbsoluteDiv, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 328,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RoundAbsoluteDivBottomRight, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 329,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PreviewImg, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: imgScr,\n        alt: \"Picture of the author\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 331,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 330,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SliderContent, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"title\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"proj__title\",\n          children: [\" \", title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 336,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          \"class\": \"sub-title\",\n          children: subtitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 337,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 335,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"proj__discription\",\n        children: discription\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 339,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"githubLink\",\n        className: \"proj__button\",\n        children: [\"Read more...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Circle, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/assets/imgs/arrow_forward.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 346,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 345,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 343,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 333,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 327,\n    columnNumber: 5\n  }, _this);\n};\n\n_c7 = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"RoundAbsoluteDiv\");\n$RefreshReg$(_c3, \"RoundAbsoluteDivBottomRight\");\n$RefreshReg$(_c4, \"PreviewImg\");\n$RefreshReg$(_c5, \"SliderContent\");\n$RefreshReg$(_c6, \"Circle\");\n$RefreshReg$(_c7, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcz9hYTFmIl0sIm5hbWVzIjpbIkNhcmQiLCJzdHlsZWQiLCJtb3Rpb24iLCJkaXYiLCJSb3VuZEFic29sdXRlRGl2IiwiUm91bmRBYnNvbHV0ZURpdkJvdHRvbVJpZ2h0IiwiUHJldmlld0ltZyIsIlNsaWRlckNvbnRlbnQiLCJ0aGVtZSIsInRleHQiLCJDaXJjbGUiLCJQcm9qZWN0Q2FyZCIsInRpdGxlIiwic3VidGl0bGUiLCJkaXNjcmlwdGlvbiIsImNvbG9yIiwiaW1nU2NyIiwiaXNSZXZlcnNlIiwiZ2l0aHViTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MsaUVBQU0sQ0FBQ0Msb0RBQU0sQ0FBQ0MsR0FBUixDQUFULG1CQUFWO0tBQU1ILEk7QUFnR04sSUFBTUksZ0JBQWdCLEdBQUdILHlEQUFNLENBQUNFLEdBQVYsb0JBQXRCO01BQU1DLGdCO0FBZU4sSUFBTUMsMkJBQTJCLEdBQUdKLHlEQUFNLENBQUNFLEdBQVYsb0JBQWpDO01BQU1FLDJCO0FBbUJOLElBQU1DLFVBQVUsR0FBR0wseURBQU0sQ0FBQ0UsR0FBVixvQkFBaEI7TUFBTUcsVTtBQW9ETixJQUFNQyxhQUFhLEdBQUdOLHlEQUFNLENBQUNFLEdBQVYscUJBbUJSO0FBQUEsTUFBR0ssS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFyQjtBQUFBLENBbkJRLEVBdUNOO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFyQjtBQUFBLENBdkNNLEVBeUROO0FBQUEsTUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxJQUFyQjtBQUFBLENBekRNLENBQW5CO01BQU1GLGE7QUF3R04sSUFBTUcsTUFBTSxHQUFHVCx5REFBTSxDQUFDRSxHQUFWLG9CQUFaO01BQU1PLE07O0FBdUJOLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBUWQ7QUFBQSxNQVBKQyxLQU9JLFNBUEpBLEtBT0k7QUFBQSxNQU5KQyxRQU1JLFNBTkpBLFFBTUk7QUFBQSxNQUxKQyxXQUtJLFNBTEpBLFdBS0k7QUFBQSxNQUpKQyxLQUlJLFNBSkpBLEtBSUk7QUFBQSxNQUhKQyxNQUdJLFNBSEpBLE1BR0k7QUFBQSw4QkFGSkMsU0FFSTtBQUFBLE1BRkpBLFNBRUksZ0NBRlEsS0FFUjtBQUFBLE1BREpDLFVBQ0ksU0FESkEsVUFDSTtBQUNKLHNCQUNFLHFFQUFDLElBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywyQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHSSxxRUFBQyxVQUFEO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVGLE1BQVY7QUFBa0IsV0FBRyxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFNRSxxRUFBQyxhQUFEO0FBQUEsOEJBRUU7QUFBTSxpQkFBTSxPQUFaO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQUEsMEJBQWdDSixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFHLG1CQUFNLFdBQVQ7QUFBQSxvQkFBc0JDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFNRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxrQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFVSTtBQUFHLFlBQUksRUFBQyxZQUFSO0FBQXFCLGlCQUFTLEVBQUMsY0FBL0I7QUFBQSxnREFFQSxxRUFBQyxNQUFEO0FBQUEsaUNBQ0E7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXBDRDs7TUFBTUgsVztBQXFDU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgQ2FyZCA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIC8qIHdpZHRoOiA5NSU7ICovXG4gIC8qIHdpZHRoOiAyNSU7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogbWF4LXdpZHRoOiA4MDBweDsgKi9cbiAgLyogYmFja2dyb3VuZDogcGluazsgKi9cbiAgLyogYm94LXNoYWRvdzogMHB4IDE0cHggODBweCByZ2JhKDM0LCAzNSwgNTgsIDAuMik7ICovXG4gIHBhZGRpbmc6IDI1cHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDNyZW07ICovXG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lOyAqL1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTI2O1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2IoMCAwIDAgLyAxMiUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50OyAqL1xuICAmOmhvdmVye1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjQ0MyNTUzOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM2YzM2ZDY7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFMTU1NDtcbiAgICAucHJval9fZGlzY3JpcHRpb257XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIC5wcm9qX190aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgIGNvbG9yOiAjRkUzMTYxO1xuICAgICAgYm94LXNoYWRvdzpcbiAgICAwIDAgMCA0cHggd2hpdGUsXG4gICAgMCAwIDAgNnB4IGJsYWNrO1xuICAgIH1cblxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvKiBtYXJnaW46IDYwcHggYXV0bzsgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcblxuXG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgLyogJjpudGgtY2hpbGQoMSkgeyBcbiAgICAgIG1hcmdpbi10b3A6IDE4MHB4O1xuICAgIH0gKi9cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkgYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICAgJjpudGgtY2hpbGQoMSkgeyBcbiAgICAgIC8qIG1hcmdpbi10b3A6IDE4MHB4OyAqL1xuICAgICAgLyogYmFja2dyb3VuZDogYmx1ZTsgKi9cbiAgICB9XG4gICAgXG4gICY6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDF2dztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvdHRvbTotMjBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NzZweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCAqL1xuICAgICAgLyogMzYwZGVnLCAqL1xuICAgICAgLyogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgKi9cbiAgICAgIC8qICNjNTE4MzggNTElLCAqL1xuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlXG4gICAgKTtcbiAgfVxuYDtcbmNvbnN0IFJvdW5kQWJzb2x1dGVEaXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFMTU1NDtcblxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2IoMCAwIDAgLyAxMiUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbmBcblxuY29uc3QgUm91bmRBYnNvbHV0ZURpdkJvdHRvbVJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAtNDBweDtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgLyogei1pbmRleDogMTAwMDA7ICovXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWdzL2RvdHMtcmVkLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoXG45MGRlZ1xuKTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTMzLDExOSwxKTsgKi9cbmBcbmNvbnN0IFByZXZpZXdJbWcgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMzAwcHg7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBib3gtc2hhZG93OiA0cHggMTNweCAzMHB4IDFweCByZ2IoMjUzIDE3MCAxNzAgLyAxNyUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjUwJTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUwJTtcbiAgICB3aWR0aDogMzAwJTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMCUsMzAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwzMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMCUsMzAlKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbjE4MGRlZ1xuLGhzbGEoMCwwJSwxMDAlLDApIDElLCNmZmYgMzclKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjsgKi9cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIGhlaWdodDogMjcwcHg7XG4gIH1cbmA7XG5jb25zdCBTbGlkZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbnBhZGRpbmctdG9wOiAyMHB4O1xuLyogYmFja2dyb3VuZDogb3JhbmdlOyAqL1xuLnByb2pfX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG4udGl0bGV7XG4gIFxufVxuLnN1Yi10aXRsZXtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IG5vbmU7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB1bnNldDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIH1cbn1cbi5wcm9qX190aXRsZSB7XG4gICAgLyogcGFkZGluZzogMTBweCAwOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDkxJSA5JSA5MCUgMTAlIC8gMjklIDgyJSAxOCUgNzElOyAqL1xuICAgIGJhY2tncm91bmQ6ICNGRTMxNjE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBpbmhlcml0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3gtc2hhZG93OlxuICAgIDAgMCAwIDRweCB3aGl0ZSxcbiAgICAwIDAgMCA2cHggI0ZFMzE2MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIC8qIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNGRkI4MDAsI2ZkNDM3MFxuICAgICk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG59XG4ucHJval9fZGlzY3JpcHRpb257XG4gIGNvbG9yOiB2YXIoLS1saWdodE5vcm1hbFRleHRUaXRsZUNvbG9yKTs7XG4gIHBhZGRpbmc6IDBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4NnB4KSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuYXtcbiAgLyogYmFja2dyb3VuZDogIzYxREFGQjQ3O1xuICBjb2xvcjogIzYxREFGQlxuICBjb2xvcjogcmVkOyAqL1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzAwMDAwMDEwLCAwIDAgMCAxMHB4ICMwMDAwMDAwNSwgMCAwIDAgMjBweCAjMDAwMDAwMDE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjkwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDQzNzA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC05MGRlZywjZmYwMDRkLCNmZDQzNzApO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSA0NTBtcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSA0NTBtcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgXG59YDtcblxuY29uc3QgQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgLyogYm9yZGVyLXJhZGl1czogMzBweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY3JpbXNvbik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogbGVmdDogMDsgKi9cbiAgcmlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcm9qZWN0Q2FyZCA9ICh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgZGlzY3JpcHRpb24sXG4gIGNvbG9yLFxuICBpbWdTY3IsXG4gIGlzUmV2ZXJzZSA9IGZhbHNlLFxuICBnaXRodWJMaW5rLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPFJvdW5kQWJzb2x1dGVEaXYgLz5cbiAgICAgIDxSb3VuZEFic29sdXRlRGl2Qm90dG9tUmlnaHQvPlxuICAgICAgICA8UHJldmlld0ltZz5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nU2NyfSBhbHQ9J1BpY3R1cmUgb2YgdGhlIGF1dGhvcicgLz5cbiAgICAgICAgPC9QcmV2aWV3SW1nPlxuICAgICAgPFNsaWRlckNvbnRlbnQ+XG4gICAgICAgIFxuICAgICAgICA8ZGl2ICBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9qX190aXRsZSc+IHt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWItdGl0bGVcIj57c3VidGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2pfX2Rpc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIHtkaXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGEgaHJlZj0nZ2l0aHViTGluaycgY2xhc3NOYW1lPSdwcm9qX19idXR0b24nPlxuICAgICAgICAgIFJlYWQgbW9yZS4uLlxuICAgICAgICAgIDxDaXJjbGU+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvaW1ncy9hcnJvd19mb3J3YXJkLnN2ZycgLz5cbiAgICAgICAgPC9DaXJjbGU+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L1NsaWRlckNvbnRlbnQ+XG5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectCard.js\n");

/***/ })

})