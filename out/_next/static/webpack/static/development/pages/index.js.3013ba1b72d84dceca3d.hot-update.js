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
  gitLink: "https://github.com/Liannus/Forest-Fire-Simulation",
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
  }, "h2.jsx-2971005678{text-align:center;color:#fcfaf9;margin-bottom:28px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGUyxBQUcrQixrQkFDSixjQUNLLG1CQUNyQiIsImZpbGUiOiIvaG9tZS9saWFubnVzL3Byb2dyYW1taW5nL0xpYW5udXMubWUvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2plY3RDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmNvbnN0IGNhcmRzID0gW1xuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlNraWxsaHViXCIsXG4gICAgc3ViVGl0bGU6IFwiUmVhY3QsIE5QTSBhbmQgV2VicGFja1wiLFxuICAgIGNvbnRlbnQ6IGBBbiBhcHBsaWNhdGlvbiBjcmVhdGVkIGFzIGFuIGludHJvZHVjdGlvbiB0byBSZWFjdC5qcy5cbiAgICAgICAgdXNlcyB0aGUgSFRNTDUgY2FudmFzIHRvIGNyZWF0ZSBhIGNvbXBsZXRlbHkgcmVzcG9uc2l2ZSBhbmltYXRpb24uYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWFubnVzL0ZvcmVzdC1GaXJlLVNpbXVsYXRpb25cIixcbiAgICBpbWdTaWRlOiBcImxlZnRcIixcbiAgICBzdGF0dXM6IFwiQ29tcGxldGVcIixcbiAgICB0b29sdGlwOiB7XG4gICAgICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gICAgICB0ZXh0OiBcInRvcFwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgcHJvamVjdFRpdGxlOiBcIlJlY2lwZSBSZXBvXCIsXG4gICAgc3ViVGl0bGU6IFwiTm9kZUpTLCBNb25nb0RCIGFuZCBFeHByZXNzXCIsXG4gICAgY29udGVudDogYEEgZHluYW1pYyB3ZWJzaXRlIHdoaWNoIGZlYXR1cmVzIENSVUQgZnVuY3Rpb25zIGFsbG93aW5nXG4gICAgICAgIHVzZXJzIHRvIHNpZ24tdXAsIGxvZ2luIGFuZCBzdWJtaXQgb3IgZWRpdCB0aGVpciBvd24gcmVjaXBlcy5gLFxuICAgIGdpdExpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0xpYW5udXMvUmVjaXBlLVJlcG9cIixcbiAgICBpbWdTaWRlOiBcInJpZ2h0XCIsXG4gICAgc3RhdHVzOiBcIkluIERldmVsb3BtZW50XCIsXG4gICAgdG9vbHRpcDoge1xuICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgdGV4dDogXCJ0b3BcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHByb2plY3RUaXRsZTogXCJXYXJmcmFtZSBUcmFja2VyXCIsXG4gICAgc3ViVGl0bGU6IFwiT3BlbkNWLCBFbGVjdHJvbiwgUmVkdXggYW5kIEplc3RcIixcbiAgICBjb250ZW50OiBgQSBkZXNrdG9wIGFwcGxpY2F0aW9uIHVzaW5nIE9wZW5DViB0byByZWFkIGZyb20gdGhlIHNjcmVlblxuICAgICAgICBhbmQgRWxlY3Ryb24gdG8gZGlzcGxheSBwcm9maWxlIGRhdGEuYCxcbiAgICBnaXRMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9MaWFubnVzL1dhcmZyYW1lLVRyYWNrZXJcIixcbiAgICBpbWdTaWRlOiBcImxlZnRcIixcbiAgICBzdGF0dXM6IFwiUGxhbm5lZFwiLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHBsYWNlbWVudDogXCJ0b3BcIixcbiAgICAgIHRleHQ6IFwidG9wXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwcm9qZWN0VGl0bGU6IFwiVGhvbXBzb24gQm9pbGVyIFdvcmtzXCIsXG4gICAgc3ViVGl0bGU6IFwiQVdTLCBSZWFjdCwgU0NTU1wiLFxuICAgIGNvbnRlbnQ6IGBBIFJlYWN0IGJhc2VkIHdlYnNpdGUgYnVpbHQgZm9yIFRob21wc29uIEJvaWxlciBXb3JrcyB0byBzaG93Y2FzZSBzZXJ2aWNlcyBhbmQgcHJvamVjdHMuYCxcbiAgICB3ZWJMaW5rOiBcImh0dHBzOi8vVGhvbXBzb25Cb2lsZXJXb3Jrcy5jYVwiLFxuICAgIGltZ1NpZGU6IFwicmlnaHRcIixcbiAgICBzdGF0dXM6IFwiSW4gRGV2ZWxvcG1lbnRcIixcbiAgICB0b29sdGlwOiB7XG4gICAgICBwbGFjZW1lbnQ6IFwidG9wXCIsXG4gICAgICB0ZXh0OiBcInRvcFwiXG4gICAgfVxuICB9XG5dO1xuY29uc3QgUHJvamVjdHMgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7Y2FyZHMubWFwKGkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aS5wcm9qZWN0VGl0bGV9IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aS5wcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlPXtpLnByb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICBzdWJUaXRsZT17aS5zdWJUaXRsZX1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtpLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZ2l0TGluaz17aS5naXRMaW5rfVxuICAgICAgICAgICAgICAgIHdlYkxpbms9e2kud2ViTGlua31cbiAgICAgICAgICAgICAgICBzdGF0dXM9e2kuc3RhdHVzfVxuICAgICAgICAgICAgICAgIHRvb2x0aXA9e2kudG9vbHRpcH1cbiAgICAgICAgICAgICAgICBpbWdTaWRlPXtpLmltZ1NpZGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD1cImpzeFwiPlxuICAgICAgICB7YFxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmNmYWY5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Projects/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.3013ba1b72d84dceca3d.hot-update.js.map