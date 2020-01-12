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
    className: "jsx-3387263184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3387263184",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "jsx-3387263184" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, cards.map(function (i) {
    return __jsx("div", {
      key: i.projectTitle,
      className: "jsx-3387263184" + " " + "col-md-6",
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
    id: "3387263184",
    __self: this
  }, "h2.jsx-3387263184{text-align:center;color:#fcfaf9;margin-bottom:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGUyxBQUsrQixrQkFDSixjQUNLLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9saWFubnVzL3Byb2dyYW1taW5nL0xpYW5udXMubWUvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2plY3RDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlNraWxsaHViXCIsXG4gICAgc3ViVGl0bGU6IFwiUmVhY3QsIFBvc3RncmVTUUwgYW5kIE5vZGVKU1wiLFxuICAgIGNvbnRlbnQ6IGBBIHdlYiBiYXNlZCBzb2NpYWwgbmV0d29yayBjYXBhYmxlIG9mIGxpbmtpbmcgdXNlcnMgYnkgdGhlaXJcbiAgICAgIHNraWxscyBhbmQgcHJvamVjdHMgdXNpbmcgbWFjaGluZSBsZWFybmluZyBhbmQgZGF0YSBhbmFseXNpcy5gLFxuICAgIGdpdExpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0NESC1TdHVkaW8vc2tpbGxodWJcIixcbiAgICBpbWdTaWRlOiBcImxlZnRcIixcbiAgICBzdGF0dXM6IFwiQ29tcGxldGVcIixcbiAgICB0b29sdGlwOiB7XG4gICAgICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gICAgICB0ZXh0OiBcInRvcFwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlJlY2lwZSBSZXBvXCIsXG4gICAgc3ViVGl0bGU6IFwiTm9kZUpTLCBNb25nb0RCIGFuZCBFeHByZXNzXCIsXG4gICAgY29udGVudDogYEEgZHluYW1pYyB3ZWJzaXRlIHdoaWNoIGZlYXR1cmVzIENSVUQgZnVuY3Rpb25zIGFsbG93aW5nXG4gICAgICAgIHVzZXJzIHRvIHNpZ24tdXAsIGxvZ2luIGFuZCBzdWJtaXQgb3IgZWRpdCB0aGVpciBvd24gcmVjaXBlcy5gLFxuICAgIGdpdExpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0xpYW5udXMvUmVjaXBlLVJlcG9cIixcbiAgICBpbWdTaWRlOiBcInJpZ2h0XCIsXG4gICAgc3RhdHVzOiBcIkluIERldmVsb3BtZW50XCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHByb2plY3RUaXRsZTogXCJXYXJmcmFtZSBUcmFja2VyXCIsXG4gICAgc3ViVGl0bGU6IFwiT3BlbkNWLCBFbGVjdHJvbiwgUmVkdXggYW5kIEplc3RcIixcbiAgICBjb250ZW50OiBgQSBkZXNrdG9wIGFwcGxpY2F0aW9uIHVzaW5nIE9wZW5DViB0byByZWFkIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBhbmQgRWxlY3Ryb24gdG8gZGlzcGxheSBwcm9maWxlIGRhdGEuYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWFubnVzL1dhcmZyYW1lLVRyYWNrZXJcIixcbiAgICBpbWdTaWRlOiBcImxlZnRcIixcbiAgICBzdGF0dXM6IFwiUGxhbm5lZFwiLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgIHRleHQ6IFwidG9wXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcm9qZWN0VGl0bGU6IFwiVGhvbXBzb24gQm9pbGVyIFdvcmtzXCIsXG4gICAgc3ViVGl0bGU6IFwiQVdTLCBSZWFjdCwgU0NTU1wiLFxuICAgIGNvbnRlbnQ6IGBBIFJlYWN0IGJhc2VkIHdlYnNpdGUgYnVpbHQgZm9yIFRob21wc29uIEJvaWxlciBXb3JrcyB0byBzaG93Y2FzZSBzZXJ2aWNlcyBhbmQgcHJvamVjdHMuYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JrQm9tYkdJVC9UQlctV2Vic2l0ZVwiLFxuICAgIHdlYkxpbms6IFwiaHR0cHM6Ly9UaG9tcHNvbkJvaWxlcldvcmtzLmNhXCIsXG4gICAgaW1nU2lkZTogXCJyaWdodFwiLFxuICAgIHN0YXR1czogXCJJbiBEZXZlbG9wbWVudFwiLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgIHRleHQ6IFwidG9wXCJcbiAgICB9XG4gIH1cbl07XG5jb25zdCBQcm9qZWN0cyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPlByb2plY3RzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtjYXJkcy5tYXAoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpLnByb2plY3RUaXRsZX0gY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpLnByb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU9e2kucHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtpLnN1YlRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2kuY29udGVudH1cbiAgICAgICAgICAgICAgICBnaXRMaW5rPXtpLmdpdExpbmt9XG4gICAgICAgICAgICAgICAgd2ViTGluaz17aS53ZWJMaW5rfVxuICAgICAgICAgICAgICAgIHN0YXR1cz17aS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17aS50b29sdGlwfVxuICAgICAgICAgICAgICAgIGltZ1NpZGU9e2kuaW1nU2lkZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PVwianN4XCI+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmNmYWY5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Projects/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.471643d89f0ceb2fd85a.hot-update.js.map