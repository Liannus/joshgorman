webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Projects/Projects.js":
/*!**************************************************!*\
  !*** ./components/sections/Projects/Projects.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_partials___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/partials/ */ "./components/partials/index.js");
var _jsxFileName = "/home/liannus/programming/Liannus.me/components/sections/Projects/Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var cards = [{
  projectTitle: "Skillhub",
  subTitle: "React, PostgreSQL and NodeJS",
  content: "A web based social network capable of linking users by their\n      skills and projects using machine learning and data analysis.",
  gitLink: "https://github.com/CDH-Studio/skillhub",
  imgSide: "left",
  status: "Complete",
  tooltip: {
    placement: "top",
    text: "top"
  }
}, {
  projectTitle: "Recipe Repo",
  subTitle: "NodeJS, MongoDB and Express",
  content: "A dynamic website which features CRUD functions allowing\n        users to sign-up, login and submit or edit their own recipes.",
  gitLink: "https://github.com/Liannus/Recipe-Repo",
  imgSide: "right",
  status: "In Development",
  tooltip: {
    placement: "top",
    text: "top"
  }
}, {
  projectTitle: "Warframe Tracker",
  subTitle: "OpenCV, Electron, Redux and Jest",
  content: "A desktop application using OpenCV to read from the screen\n        and Electron to display profile data.",
  gitLink: "https://github.com/Liannus/Warframe-Tracker",
  imgSide: "left",
  status: "Planned",
  tooltip: {
    placement: "top",
    text: "top"
  }
}, {
  projectTitle: "Thompson Boiler Works",
  subTitle: "AWS, React, SCSS",
  content: "A React based website built for Thompson Boiler Works to showcase services and projects.",
  gitLink: "https://github.com/ForkBombGIT/TBW-Website",
  webLink: "https://ThompsonBoilerWorks.ca",
  imgSide: "right",
  status: "In Development",
  tooltip: {
    placement: "top",
    text: "top"
  }
}];

var Projects = function Projects(props) {
  return __jsx("div", {
    className: "jsx-3929395403",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3929395403",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-3929395403" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, cards.map(function (i) {
    return __jsx("div", {
      key: i.projectTitle,
      className: "jsx-3929395403" + " " + "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(components_partials___WEBPACK_IMPORTED_MODULE_2__["ProjectCard"], {
      key: i.projectTitle,
      projectTitle: i.projectTitle,
      subTitle: i.subTitle,
      content: i.content,
      gitLink: i.gitLink,
      webLink: i.webLink,
      status: i.status,
      tooltip: i.tooltip,
      imgSide: i.imgSide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3929395403",
    __self: this
  }, ".btn.jsx-3929395403{padding:10px;}h2.jsx-3929395403{text-align:center;color:#fcfaf9;margin-bottom:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGUyxBQUcwQixBQUdLLGFBRnBCLEtBR2dCLGNBQ0ssbUJBQ3JCIiwiZmlsZSI6Ii9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvamVjdENhcmQgfSBmcm9tIFwiY29tcG9uZW50cy9wYXJ0aWFscy9cIjtcblxuY29uc3QgY2FyZHMgPSBbXG4gIHtcbiAgICBwcm9qZWN0VGl0bGU6IFwiU2tpbGxodWJcIixcbiAgICBzdWJUaXRsZTogXCJSZWFjdCwgUG9zdGdyZVNRTCBhbmQgTm9kZUpTXCIsXG4gICAgY29udGVudDogYEEgd2ViIGJhc2VkIHNvY2lhbCBuZXR3b3JrIGNhcGFibGUgb2YgbGlua2luZyB1c2VycyBieSB0aGVpclxuICAgICAgc2tpbGxzIGFuZCBwcm9qZWN0cyB1c2luZyBtYWNoaW5lIGxlYXJuaW5nIGFuZCBkYXRhIGFuYWx5c2lzLmAsXG4gICAgZ2l0TGluazogXCJodHRwczovL2dpdGh1Yi5jb20vQ0RILVN0dWRpby9za2lsbGh1YlwiLFxuICAgIGltZ1NpZGU6IFwibGVmdFwiLFxuICAgIHN0YXR1czogXCJDb21wbGV0ZVwiLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgIHRleHQ6IFwidG9wXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcm9qZWN0VGl0bGU6IFwiUmVjaXBlIFJlcG9cIixcbiAgICBzdWJUaXRsZTogXCJOb2RlSlMsIE1vbmdvREIgYW5kIEV4cHJlc3NcIixcbiAgICBjb250ZW50OiBgQSBkeW5hbWljIHdlYnNpdGUgd2hpY2ggZmVhdHVyZXMgQ1JVRCBmdW5jdGlvbnMgYWxsb3dpbmdcbiAgICAgICAgdXNlcnMgdG8gc2lnbi11cCwgbG9naW4gYW5kIHN1Ym1pdCBvciBlZGl0IHRoZWlyIG93biByZWNpcGVzLmAsXG4gICAgZ2l0TGluazogXCJodHRwczovL2dpdGh1Yi5jb20vTGlhbm51cy9SZWNpcGUtUmVwb1wiLFxuICAgIGltZ1NpZGU6IFwicmlnaHRcIixcbiAgICBzdGF0dXM6IFwiSW4gRGV2ZWxvcG1lbnRcIixcbiAgICB0b29sdGlwOiB7XG4gICAgICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gICAgICB0ZXh0OiBcInRvcFwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIldhcmZyYW1lIFRyYWNrZXJcIixcbiAgICBzdWJUaXRsZTogXCJPcGVuQ1YsIEVsZWN0cm9uLCBSZWR1eCBhbmQgSmVzdFwiLFxuICAgIGNvbnRlbnQ6IGBBIGRlc2t0b3AgYXBwbGljYXRpb24gdXNpbmcgT3BlbkNWIHRvIHJlYWQgZnJvbSB0aGUgc2NyZWVuXG4gICAgICAgIGFuZCBFbGVjdHJvbiB0byBkaXNwbGF5IHByb2ZpbGUgZGF0YS5gLFxuICAgIGdpdExpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0xpYW5udXMvV2FyZnJhbWUtVHJhY2tlclwiLFxuICAgIGltZ1NpZGU6IFwibGVmdFwiLFxuICAgIHN0YXR1czogXCJQbGFubmVkXCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHByb2plY3RUaXRsZTogXCJUaG9tcHNvbiBCb2lsZXIgV29ya3NcIixcbiAgICBzdWJUaXRsZTogXCJBV1MsIFJlYWN0LCBTQ1NTXCIsXG4gICAgY29udGVudDogYEEgUmVhY3QgYmFzZWQgd2Vic2l0ZSBidWlsdCBmb3IgVGhvbXBzb24gQm9pbGVyIFdvcmtzIHRvIHNob3djYXNlIHNlcnZpY2VzIGFuZCBwcm9qZWN0cy5gLFxuICAgIGdpdExpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZvcmtCb21iR0lUL1RCVy1XZWJzaXRlXCIsXG4gICAgd2ViTGluazogXCJodHRwczovL1Rob21wc29uQm9pbGVyV29ya3MuY2FcIixcbiAgICBpbWdTaWRlOiBcInJpZ2h0XCIsXG4gICAgc3RhdHVzOiBcIkluIERldmVsb3BtZW50XCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfVxuXTtcbmNvbnN0IFByb2plY3RzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2NhcmRzLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2kucHJvamVjdFRpdGxlfSBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2kucHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZT17aS5wcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgc3ViVGl0bGU9e2kuc3ViVGl0bGV9XG4gICAgICAgICAgICAgICAgY29udGVudD17aS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGdpdExpbms9e2kuZ2l0TGlua31cbiAgICAgICAgICAgICAgICB3ZWJMaW5rPXtpLndlYkxpbmt9XG4gICAgICAgICAgICAgICAgc3RhdHVzPXtpLnN0YXR1c31cbiAgICAgICAgICAgICAgICB0b29sdGlwPXtpLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgaW1nU2lkZT17aS5pbWdTaWRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g9XCJqc3hcIj5cbiAgICAgICAge2BcbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmNmYWY5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Projects/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.3e24f585cc775a234ec5.hot-update.js.map