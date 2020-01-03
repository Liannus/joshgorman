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
      skills: ["Figma", "PostgreSQL", "NodeJS", "SCSS", "React"]
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
      }, "h2.jsx-237819309{text-align:center;padding-top:50px;color:#fcfaf9;}body.jsx-237819309,html.jsx-237819309{background-color:#222c32;height:100%;font-family:\"Open Sans\",sans-serif;box-sizing:border-box;}.cd-container.jsx-237819309{margin:0 auto;background:#2b343a;padding:0 10%;border-radius:2px;}.cd-container.jsx-237819309::after{content:\"\";display:table;clear:both;}#cd-timeline.jsx-237819309{position:relative;padding:2em 0;margin-bottom:2em;}#cd-timeline.jsx-237819309::before{content:\"\";position:absolute;top:0;left:25px;height:100%;width:4px;background:linear-gradient( to top, #2b343a, #673ab7 5%, #673ab7 95%, #2b343a );}@media only screen and (min-width:1170px){#cd-timeline.jsx-237819309{margin-bottom:3em;}#cd-timeline.jsx-237819309::before{left:50%;margin-left:-2px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFcsQUFHaUMsQUFNTyxBQU9YLEFBT0gsQUFXTyxBQU1QLEFBaUJTLEFBSVQsU0FDUSxFQXRDTCxBQWlCSSxHQXhCQyxJQWJGLEFBK0JILEFBdUJkLE9BaERZLEFBZUQsQ0FzQ1gsR0FyQk0sR0FOWSxDQWxCSixFQWJBLEFBc0NKLENBakJaLENBZnNDLFFBaUN4QixFQXpCTSxFQWJwQixDQStCQSxPQVFZLFFBekJaLEVBZ0NHLEtBeENxQixzQkFDeEIscURBd0NBIiwiZmlsZSI6Ii9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV4cGVyaWVuY2VDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2FyZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGpvYk5hbWU6IFwiSW5ub3ZhdGlvbiBTY2llbmNlIGFuZCBFY29ub21pYyBEZXZlbG9wbWVudCBDYW5hZGFcIixcbiAgICAgICAgam9iVGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBgRGV2ZWxvcGVkIGEgd2lraSBpbiB0aGUgRW50ZXJwcmlzZSBsZXZlbCBjb250ZW50IG1hbmFnZW1lbnQgc3lzdGVtIEFFTSBmb3IgY3VycmVudCBhbmQgZnV0dXJlIGZvcm0gZGV2ZWxvcGVycyBhdCB0aGUgQ0ZJQS5cXG5gICtcbiAgICAgICAgICBgRGV2ZWxvcGVkIFNPQVAgd2ViIHNlcnZpY2VzIHVzaW5nIEphdmEgYW5kIEFwYWNoZSBUb21jYXQuIFJlY2VpdmVkIGFuZCBtYW5pcHVsYXRlZCBkYXRhIHVzaW5nIEphdmFTY3JpcHQgaW4gUERGIGZvcm1zLlxcbmAgK1xuICAgICAgICAgIGBCdWlsdCBzY3JpcHRzIHVzaW5nIFB5dGhvbiBhbmQgdmFyaW91cyBsaWJyYXJpZXMgdG8gZWxpbWluYXRlIG1lbmlhbCBwcm9jZXNzZXMgYW5kIGluY3JlYXNlIGVmZmljaWVuY3kgd2hpbGUgZGV2ZWxvcGluZyBmb3Jtcy5cXG5gICtcbiAgICAgICAgICBgQ3JlYXRlZCBhZHZhbmNlZCBmdW5jdGlvbmFsaXR5IGluIFBERiBmb3JtcyB1c2luZyBKYXZhU2NyaXB0IHRvIGFsbG93IGR5bmFtaWMgZm9ybWF0dGluZywgZGF0ZSBtYW5pcHVsYXRpb24gYW5kIGRpZ2l0YWwgc2lnbmF0dXJlIGNlcnRpZmljYXRpb25gLFxuICAgICAgICBkYXRlOiBcIkFwcmlsIDIwMTggLSBEZWNlbWJlciAyMDE4XCIsXG4gICAgICAgIHNraWxsczogW1wiRmlnbWFcIiwgXCJQb3N0Z3JlU1FMXCIsIFwiTm9kZUpTXCIsIFwiU0NTU1wiLCBcIlJlYWN0XCJdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBqb2JOYW1lOiBcIkNhbmFkaWFuIEZvb2QgSW5zcGVjdGlvbiBBZ2VuY3lcIixcbiAgICAgICAgam9iVGl0bGU6IFwiV2ViIERldmVsb3BlciBTdHVkZW50XCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgYERldmVsb3BlZCBTT0FQIHdlYiBzZXJ2aWNlcyB1c2luZyBKYXZhIGFuZCBBcGFjaGUgVG9tY2F0LiBSZWNlaXZlZCBhbmQgbWFuaXB1bGF0ZWQgZGF0YSB1c2luZyBKYXZhU2NyaXB0IGluIFBERiBmb3Jtcy5cXG5gICtcbiAgICAgICAgICBgQnVpbHQgc2NyaXB0cyB1c2luZyBQeXRob24gYW5kIHZhcmlvdXMgbGlicmFyaWVzIHRvIGVsaW1pbmF0ZSBtZW5pYWwgcHJvY2Vzc2VzIGFuZCBpbmNyZWFzZSBlZmZpY2llbmN5IHdoaWxlIGRldmVsb3BpbmcgZm9ybXMuYCxcbiAgICAgICAgZGF0ZTogXCJBcHJpbCAyMDE4IC0gRGVjZW1iZXIgMjAxOFwiLFxuICAgICAgICBza2lsbHM6IFtcIkphdmFzY3JpcHRcIiwgXCJBRU1cIiwgXCJQeXRob25cIiwgXCJYTUxcIiwgXCJQREYtWEZBXCJdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBqb2JOYW1lOiBcIlJlZC1ELUFyYyBXZWxkZXJlbnRhbHNcIixcbiAgICAgICAgam9iVGl0bGU6IFwiSnVuaW9yIEJ1c2luZXNzIEFuYWx5c3RcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBgUHJvdmlkZWQgUUEgdGVzdGluZyBmb3IgZWFzaW5nIHRoZSBkZXBseW1lbnQgb2YgbG9jYWxpemVkIHdlYiBzZXJ2aWNlc1xcbmAgK1xuICAgICAgICAgIGBUZXN0ZWQgYW5kIHZhbGlkYXRlZCBFUlAgc29mdHdhcmUgTWljcm9zb2Z0IER5bmFtaWNzIE5hdi5cXG5gICtcbiAgICAgICAgICBgQ29sbGFib3JhdGVkIHdpdGggdGVhbSBtYXRlcyB0byByZWR1Y2UgcmUtcHJpbnRpbmcgb2YgZS1kb2N1bWVudHNgLFxuICAgICAgICBkYXRlOiBcIkp1bHkgMjAxNSAtIEF1Z3VzdCAyMDE1XCIsXG4gICAgICAgIHNraWxsczogW1wiU29mdHdhcmUgUXVhbGl0eSBBc3N1cmFuY2VcIiwgXCJNaWNyb3NvZnQgRHluYW1pY3MgTkFWXCJdXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkV4cGVyaWVuY2U8L2gyPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImNkLXRpbWVsaW5lXCIgY2xhc3NOYW1lPVwiY2QtY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMuY2FyZHMubWFwKGkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEV4cGVyaWVuY2VDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpLmpvYk5hbWV9XG4gICAgICAgICAgICAgICAgam9iTmFtZT17aS5qb2JOYW1lfVxuICAgICAgICAgICAgICAgIGpvYlRpdGxlPXtpLmpvYlRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2kuY29udGVudH1cbiAgICAgICAgICAgICAgICBkYXRlPXtpLmRhdGV9XG4gICAgICAgICAgICAgICAgc2tpbGxzPXtpLnNraWxsc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD1cImpzeFwiPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmNmYWY5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYzMyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjM0M2E7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jZC1jb250YWluZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgICAgTWFpbiBjb21wb25lbnRzXG5cbiAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgICAgICAgI2NkLXRpbWVsaW5lIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyZW0gMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjY2QtdGltZWxpbmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICB0byB0b3AsXG4gICAgICAgICAgICAgICAgIzJiMzQzYSxcbiAgICAgICAgICAgICAgICAjNjczYWI3IDUlLFxuICAgICAgICAgICAgICAgICM2NzNhYjcgOTUlLFxuICAgICAgICAgICAgICAgICMyYjM0M2FcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcbiAgICAgICAgICAgICAgI2NkLXRpbWVsaW5lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAjY2QtdGltZWxpbmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Experience/Experience.js */"));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.4bdbd546c68fc855a036.hot-update.js.map