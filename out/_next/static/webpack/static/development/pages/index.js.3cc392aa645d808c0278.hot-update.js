webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Experience/Experience.js":
/*!******************************************************!*\
  !*** ./components/sections/Experience/Experience.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Experience; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_partials___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/partials/ */ "./components/partials/index.js");





var _jsxFileName = "/home/liannus/programming/Liannus.me/components/sections/Experience/Experience.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Experience =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Experience, _React$Component);

  function Experience(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Experience);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Experience).call(this, props));
    _this.cards = [{
      jobName: "Innovation Science and Economic Development Canada",
      jobTitle: "Full-Stack Developer",
      content: "Developed a wiki in the Enterprise level content management system AEM for current and future form developers at the CFIA.\n" + "Developed SOAP web services using Java and Apache Tomcat. Received and manipulated data using JavaScript in PDF forms.\n" + "Built scripts using Python and various libraries to eliminate menial processes and increase efficiency while developing forms.\n" + "Created advanced functionality in PDF forms using JavaScript to allow dynamic formatting, date manipulation and digital signature certification",
      date: "April 2018 - December 2018",
      skills: ["Javascript", "AEM", "Python", "XML", "PDF-XFA"]
    }, {
      jobName: "Canadian Food Inspection Agency",
      jobTitle: "Web Developer Student",
      content: "Developed SOAP web services using Java and Apache Tomcat. Received and manipulated data using JavaScript in PDF forms.\n" + "Built scripts using Python and various libraries to eliminate menial processes and increase efficiency while developing forms.",
      date: "April 2018 - December 2018",
      skills: ["Javascript", "AEM", "Python", "XML", "PDF-XFA"]
    }, {
      jobName: "Red-D-Arc Welderentals",
      jobTitle: "Junior Business Analyst",
      content: "Provided QA testing for easing the deplyment of localized web services\n" + "Tested and validated ERP software Microsoft Dynamics Nav.\n" + "Collaborated with team mates to reduce re-printing of e-documents",
      date: "July 2015 - August 2015",
      skills: ["Software Quality Assurance", "Microsoft Dynamics NAV"]
    }];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Experience, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-237819309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-237819309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Experience"), __jsx("section", {
        id: "cd-timeline",
        className: "jsx-237819309" + " " + "cd-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.cards.map(function (i) {
        return __jsx(components_partials___WEBPACK_IMPORTED_MODULE_7__["ExperienceCard"], {
          key: i.jobName,
          jobName: i.jobName,
          jobTitle: i.jobTitle,
          content: i.content,
          date: i.date,
          skills: i.skills,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "237819309",
        __self: this
      }, "h2.jsx-237819309{text-align:center;padding-top:50px;color:#fcfaf9;}body.jsx-237819309,html.jsx-237819309{background-color:#222c32;height:100%;font-family:\"Open Sans\",sans-serif;box-sizing:border-box;}.cd-container.jsx-237819309{margin:0 auto;background:#2b343a;padding:0 10%;border-radius:2px;}.cd-container.jsx-237819309::after{content:\"\";display:table;clear:both;}#cd-timeline.jsx-237819309{position:relative;padding:2em 0;margin-bottom:2em;}#cd-timeline.jsx-237819309::before{content:\"\";position:absolute;top:0;left:25px;height:100%;width:4px;background:linear-gradient( to top, #2b343a, #673ab7 5%, #673ab7 95%, #2b343a );}@media only screen and (min-width:1170px){#cd-timeline.jsx-237819309{margin-bottom:3em;}#cd-timeline.jsx-237819309::before{left:50%;margin-left:-2px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFcsQUFHaUMsQUFNTyxBQU9YLEFBT0gsQUFXTyxBQU1QLEFBaUJTLEFBSVQsU0FDUSxFQXRDTCxBQWlCSSxHQXhCQyxJQWJGLEFBK0JILEFBdUJkLE9BaERZLEFBZUQsQ0FzQ1gsR0FyQk0sR0FOWSxDQWxCSixFQWJBLEFBc0NKLENBakJaLENBZnNDLFFBaUN4QixFQXpCTSxFQWJwQixDQStCQSxPQVFZLFFBekJaLEVBZ0NHLEtBeENxQixzQkFDeEIscURBd0NBIiwiZmlsZSI6Ii9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV4cGVyaWVuY2VDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2FyZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGpvYk5hbWU6IFwiSW5ub3ZhdGlvbiBTY2llbmNlIGFuZCBFY29ub21pYyBEZXZlbG9wbWVudCBDYW5hZGFcIixcbiAgICAgICAgam9iVGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBgRGV2ZWxvcGVkIGEgd2lraSBpbiB0aGUgRW50ZXJwcmlzZSBsZXZlbCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtIEFFTSBmb3IgY3VycmVudCBhbmQgZnV0dXJlIGZvcm0gZGV2ZWxvcGVycyBhdCB0aGUgQ0ZJQS5cXG5gICtcbiAgICAgICAgICBgRGV2ZWxvcGVkIFNPQVAgd2ViIHNlcnZpY2VzIHVzaW5nIEphdmEgYW5kIEFwYWNoZSBUb21jYXQuIFJlY2VpdmVkIGFuZCBtYW5pcHVsYXRlZCBkYXRhIHVzaW5nIEphdmFTY3JpcHQgaW4gUERGIGZvcm1zLlxcbmAgK1xuICAgICAgICAgIGBCdWlsdCBzY3JpcHRzIHVzaW5nIFB5dGhvbiBhbmQgdmFyaW91cyBsaWJyYXJpZXMgdG8gZWxpbWluYXRlIG1lbmlhbCBwcm9jZXNzZXMgYW5kIGluY3JlYXNlIGVmZmljaWVuY3kgd2hpbGUgZGV2ZWxvcGluZyBmb3Jtcy5cXG5gICtcbiAgICAgICAgICBgQ3JlYXRlZCBhZHZhbmNlZCBmdW5jdGlvbmFsaXR5IGluIFBERiBmb3JtcyB1c2luZyBKYXZhU2NyaXB0IHRvIGFsbG93IGR5bmFtaWMgZm9ybWF0dGluZywgZGF0ZSBtYW5pcHVsYXRpb24gYW5kIGRpZ2l0YWwgc2lnbmF0dXJlIGNlcnRpZmljYXRpb25gLFxuICAgICAgICBkYXRlOiBcIkFwcmlsIDIwMTggLSBEZWNlbWJlciAyMDE4XCIsXG4gICAgICAgIHNraWxsczogW1wiSmF2YXNjcmlwdFwiLCBcIkFFTVwiLCBcIlB5dGhvblwiLCBcIlhNTFwiLCBcIlBERi1YRkFcIl1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGpvYk5hbWU6IFwiQ2FuYWRpYW4gRm9vZCBJbnNwZWN0aW9uIEFnZW5jeVwiLFxuICAgICAgICBqb2JUaXRsZTogXCJXZWIgRGV2ZWxvcGVyIFN0dWRlbnRcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBgRGV2ZWxvcGVkIFNPQVAgd2ViIHNlcnZpY2VzIHVzaW5nIEphdmEgYW5kIEFwYWNoZSBUb21jYXQuIFJlY2VpdmVkIGFuZCBtYW5pcHVsYXRlZCBkYXRhIHVzaW5nIEphdmFTY3JpcHQgaW4gUERGIGZvcm1zLlxcbmAgK1xuICAgICAgICAgIGBCdWlsdCBzY3JpcHRzIHVzaW5nIFB5dGhvbiBhbmQgdmFyaW91cyBsaWJyYXJpZXMgdG8gZWxpbWluYXRlIG1lbmlhbCBwcm9jZXNzZXMgYW5kIGluY3JlYXNlIGVmZmljaWVuY3kgd2hpbGUgZGV2ZWxvcGluZyBmb3Jtcy5gLFxuICAgICAgICBkYXRlOiBcIkFwcmlsIDIwMTggLSBEZWNlbWJlciAyMDE4XCIsXG4gICAgICAgIHNraWxsczogW1wiSmF2YXNjcmlwdFwiLCBcIkFFTVwiLCBcIlB5dGhvblwiLCBcIlhNTFwiLCBcIlBERi1YRkFcIl1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGpvYk5hbWU6IFwiUmVkLUQtQXJjIFdlbGRlcmVudGFsc1wiLFxuICAgICAgICBqb2JUaXRsZTogXCJKdW5pb3IgQnVzaW5lc3MgQW5hbHlzdFwiLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgIGBQcm92aWRlZCBRQSB0ZXN0aW5nIGZvciBlYXNpbmcgdGhlIGRlcGx5bWVudCBvZiBsb2NhbGl6ZWQgd2ViIHNlcnZpY2VzXFxuYCArXG4gICAgICAgICAgYFRlc3RlZCBhbmQgdmFsaWRhdGVkIEVSUCBzb2Z0d2FyZSBNaWNyb3NvZnQgRHluYW1pY3MgTmF2LlxcbmAgK1xuICAgICAgICAgIGBDb2xsYWJvcmF0ZWQgd2l0aCB0ZWFtIG1hdGVzIHRvIHJlZHVjZSByZS1wcmludGluZyBvZiBlLWRvY3VtZW50c2AsXG4gICAgICAgIGRhdGU6IFwiSnVseSAyMDE1IC0gQXVndXN0IDIwMTVcIixcbiAgICAgICAgc2tpbGxzOiBbXCJTb2Z0d2FyZSBRdWFsaXR5IEFzc3VyYW5jZVwiLCBcIk1pY3Jvc29mdCBEeW5hbWljcyBOQVZcIl1cbiAgICAgIH1cbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RXhwZXJpZW5jZTwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiY2QtdGltZWxpbmVcIiBjbGFzc05hbWU9XCJjZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy5jYXJkcy5tYXAoaSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RXhwZXJpZW5jZUNhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2kuam9iTmFtZX1cbiAgICAgICAgICAgICAgICBqb2JOYW1lPXtpLmpvYk5hbWV9XG4gICAgICAgICAgICAgICAgam9iVGl0bGU9e2kuam9iVGl0bGV9XG4gICAgICAgICAgICAgICAgY29udGVudD17aS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRhdGU9e2kuZGF0ZX1cbiAgICAgICAgICAgICAgICBza2lsbHM9e2kuc2tpbGxzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PVwianN4XCI+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmY2ZhZjk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJjMzI7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jZC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJiMzQzYTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNkLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgICBNYWluIGNvbXBvbmVudHNcblxuICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgICAgICAgICAjY2QtdGltZWxpbmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJlbSAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNjZC10aW1lbGluZTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIHRvIHRvcCxcbiAgICAgICAgICAgICAgICAjMmIzNDNhLFxuICAgICAgICAgICAgICAgICM2NzNhYjcgNSUsXG4gICAgICAgICAgICAgICAgIzY3M2FiNyA5NSUsXG4gICAgICAgICAgICAgICAgIzJiMzQzYVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzBweCkge1xuICAgICAgICAgICAgICAjY2QtdGltZWxpbmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICNjZC10aW1lbGluZTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Experience/Experience.js */"));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3cc392aa645d808c0278.hot-update.js.map