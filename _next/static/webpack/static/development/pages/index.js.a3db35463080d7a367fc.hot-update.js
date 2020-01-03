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
  subTitle: "React, NPM and Webpack",
  content: "An application created as an introduction to React.js.\n        uses the HTML5 canvas to create a completely responsive animation.",
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
    className: "jsx-2971005678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2971005678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-2971005678" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, cards.map(function (i) {
    return __jsx("div", {
      key: i.projectTitle,
      className: "jsx-2971005678" + " " + "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
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
        lineNumber: 65
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2971005678",
    __self: this
  }, "h2.jsx-2971005678{text-align:center;color:#fcfaf9;margin-bottom:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUyxBQUcrQixrQkFDSixjQUNLLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9saWFubnVzL3Byb2dyYW1taW5nL0xpYW5udXMubWUvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2plY3RDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlNraWxsaHViXCIsXG4gICAgc3ViVGl0bGU6IFwiUmVhY3QsIE5QTSBhbmQgV2VicGFja1wiLFxuICAgIGNvbnRlbnQ6IGBBbiBhcHBsaWNhdGlvbiBjcmVhdGVkIGFzIGFuIGludHJvZHVjdGlvbiB0byBSZWFjdC5qcy5cbiAgICAgICAgdXNlcyB0aGUgSFRNTDUgY2FudmFzIHRvIGNyZWF0ZSBhIGNvbXBsZXRlbHkgcmVzcG9uc2l2ZSBhbmltYXRpb24uYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9DREgtU3R1ZGlvL3NraWxsaHViXCIsXG4gICAgaW1nU2lkZTogXCJsZWZ0XCIsXG4gICAgc3RhdHVzOiBcIkNvbXBsZXRlXCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHByb2plY3RUaXRsZTogXCJSZWNpcGUgUmVwb1wiLFxuICAgIHN1YlRpdGxlOiBcIk5vZGVKUywgTW9uZ29EQiBhbmQgRXhwcmVzc1wiLFxuICAgIGNvbnRlbnQ6IGBBIGR5bmFtaWMgd2Vic2l0ZSB3aGljaCBmZWF0dXJlcyBDUlVEIGZ1bmN0aW9ucyBhbGxvd2luZ1xuICAgICAgICB1c2VycyB0byBzaWduLXVwLCBsb2dpbiBhbmQgc3VibWl0IG9yIGVkaXQgdGhlaXIgb3duIHJlY2lwZXMuYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWFubnVzL1JlY2lwZS1SZXBvXCIsXG4gICAgaW1nU2lkZTogXCJyaWdodFwiLFxuICAgIHN0YXR1czogXCJJbiBEZXZlbG9wbWVudFwiLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgIHRleHQ6IFwidG9wXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcm9qZWN0VGl0bGU6IFwiV2FyZnJhbWUgVHJhY2tlclwiLFxuICAgIHN1YlRpdGxlOiBcIk9wZW5DViwgRWxlY3Ryb24sIFJlZHV4IGFuZCBKZXN0XCIsXG4gICAgY29udGVudDogYEEgZGVza3RvcCBhcHBsaWNhdGlvbiB1c2luZyBPcGVuQ1YgdG8gcmVhZCBmcm9tIHRoZSBzY3JlZW5cbiAgICAgICAgYW5kIEVsZWN0cm9uIHRvIGRpc3BsYXkgcHJvZmlsZSBkYXRhLmAsXG4gICAgZ2l0TGluazogXCJodHRwczovL2dpdGh1Yi5jb20vTGlhbm51cy9XYXJmcmFtZS1UcmFja2VyXCIsXG4gICAgaW1nU2lkZTogXCJsZWZ0XCIsXG4gICAgc3RhdHVzOiBcIlBsYW5uZWRcIixcbiAgICB0b29sdGlwOiB7XG4gICAgICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gICAgICB0ZXh0OiBcInRvcFwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlRob21wc29uIEJvaWxlciBXb3Jrc1wiLFxuICAgIHN1YlRpdGxlOiBcIkFXUywgUmVhY3QsIFNDU1NcIixcbiAgICBjb250ZW50OiBgQSBSZWFjdCBiYXNlZCB3ZWJzaXRlIGJ1aWx0IGZvciBUaG9tcHNvbiBCb2lsZXIgV29ya3MgdG8gc2hvd2Nhc2Ugc2VydmljZXMgYW5kIHByb2plY3RzLmAsXG4gICAgd2ViTGluazogXCJodHRwczovL1Rob21wc29uQm9pbGVyV29ya3MuY2FcIixcbiAgICBpbWdTaWRlOiBcInJpZ2h0XCIsXG4gICAgc3RhdHVzOiBcIkluIERldmVsb3BtZW50XCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfVxuXTtcbmNvbnN0IFByb2plY3RzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UHJvamVjdHM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge2NhcmRzLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2kucHJvamVjdFRpdGxlfSBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2kucHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZT17aS5wcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgc3ViVGl0bGU9e2kuc3ViVGl0bGV9XG4gICAgICAgICAgICAgICAgY29udGVudD17aS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGdpdExpbms9e2kuZ2l0TGlua31cbiAgICAgICAgICAgICAgICB3ZWJMaW5rPXtpLndlYkxpbmt9XG4gICAgICAgICAgICAgICAgc3RhdHVzPXtpLnN0YXR1c31cbiAgICAgICAgICAgICAgICB0b29sdGlwPXtpLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgaW1nU2lkZT17aS5pbWdTaWRlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g9XCJqc3hcIj5cbiAgICAgICAge2BcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZjZmFmOTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Projects/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.a3db35463080d7a367fc.hot-update.js.map