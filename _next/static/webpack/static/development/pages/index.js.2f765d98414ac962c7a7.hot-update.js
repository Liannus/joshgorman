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
      content: "Followed Agile methodolgies, taking part in sprint planning, daily standups and retrospectives." + "Developed Mock-ups and agile artifacts to properly  " + "" + "" + "",
      date: "May 2019 - August 2019",
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
          lineNumber: 45
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-237819309",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Experience"), __jsx("section", {
        id: "cd-timeline",
        className: "jsx-237819309" + " " + "cd-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
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
            lineNumber: 50
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "237819309",
        __self: this
      }, "h2.jsx-237819309{text-align:center;padding-top:50px;color:#fcfaf9;}body.jsx-237819309,html.jsx-237819309{background-color:#222c32;height:100%;font-family:\"Open Sans\",sans-serif;box-sizing:border-box;}.cd-container.jsx-237819309{margin:0 auto;background:#2b343a;padding:0 10%;border-radius:2px;}.cd-container.jsx-237819309::after{content:\"\";display:table;clear:both;}#cd-timeline.jsx-237819309{position:relative;padding:2em 0;margin-bottom:2em;}#cd-timeline.jsx-237819309::before{content:\"\";position:absolute;top:0;left:25px;height:100%;width:4px;background:linear-gradient( to top, #2b343a, #673ab7 5%, #673ab7 95%, #2b343a );}@media only screen and (min-width:1170px){#cd-timeline.jsx-237819309{margin-bottom:3em;}#cd-timeline.jsx-237819309::before{left:50%;margin-left:-2px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RFcsQUFHaUMsQUFNTyxBQU9YLEFBT0gsQUFXTyxBQU1QLEFBaUJTLEFBSVQsU0FDUSxFQXRDTCxBQWlCSSxHQXhCQyxJQWJGLEFBK0JILEFBdUJkLE9BaERZLEFBZUQsQ0FzQ1gsR0FyQk0sR0FOWSxDQWxCSixFQWJBLEFBc0NKLENBakJaLENBZnNDLFFBaUN4QixFQXpCTSxFQWJwQixDQStCQSxPQVFZLFFBekJaLEVBZ0NHLEtBeENxQixzQkFDeEIscURBd0NBIiwiZmlsZSI6Ii9ob21lL2xpYW5udXMvcHJvZ3JhbW1pbmcvTGlhbm51cy5tZS9jb21wb25lbnRzL3NlY3Rpb25zL0V4cGVyaWVuY2UvRXhwZXJpZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEV4cGVyaWVuY2VDYXJkIH0gZnJvbSBcImNvbXBvbmVudHMvcGFydGlhbHMvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2FyZHMgPSBbXG4gICAgICB7XG4gICAgICAgIGpvYk5hbWU6IFwiSW5ub3ZhdGlvbiBTY2llbmNlIGFuZCBFY29ub21pYyBEZXZlbG9wbWVudCBDYW5hZGFcIixcbiAgICAgICAgam9iVGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBgRm9sbG93ZWQgQWdpbGUgbWV0aG9kb2xnaWVzLCB0YWtpbmcgcGFydCBpbiBzcHJpbnQgcGxhbm5pbmcsIGRhaWx5IHN0YW5kdXBzIGFuZCByZXRyb3NwZWN0aXZlcy5gICtcbiAgICAgICAgICBgRGV2ZWxvcGVkIE1vY2stdXBzIGFuZCBhZ2lsZSBhcnRpZmFjdHMgdG8gcHJvcGVybHkgIGAgK1xuICAgICAgICAgIGBgICtcbiAgICAgICAgICBgYCArXG4gICAgICAgICAgYGAsXG4gICAgICAgIGRhdGU6IFwiTWF5IDIwMTkgLSBBdWd1c3QgMjAxOVwiLFxuICAgICAgICBza2lsbHM6IFtcIkZpZ21hXCIsIFwiUG9zdGdyZVNRTFwiLCBcIk5vZGVKU1wiLCBcIlNDU1NcIiwgXCJSZWFjdFwiXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgam9iTmFtZTogXCJDYW5hZGlhbiBGb29kIEluc3BlY3Rpb24gQWdlbmN5XCIsXG4gICAgICAgIGpvYlRpdGxlOiBcIldlYiBEZXZlbG9wZXIgU3R1ZGVudFwiLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgIGBEZXZlbG9wZWQgU09BUCB3ZWIgc2VydmljZXMgdXNpbmcgSmF2YSBhbmQgQXBhY2hlIFRvbWNhdC4gUmVjZWl2ZWQgYW5kIG1hbmlwdWxhdGVkIGRhdGEgdXNpbmcgSmF2YVNjcmlwdCBpbiBQREYgZm9ybXMuXFxuYCArXG4gICAgICAgICAgYEJ1aWx0IHNjcmlwdHMgdXNpbmcgUHl0aG9uIGFuZCB2YXJpb3VzIGxpYnJhcmllcyB0byBlbGltaW5hdGUgbWVuaWFsIHByb2Nlc3NlcyBhbmQgaW5jcmVhc2UgZWZmaWNpZW5jeSB3aGlsZSBkZXZlbG9waW5nIGZvcm1zLmAsXG4gICAgICAgIGRhdGU6IFwiQXByaWwgMjAxOCAtIERlY2VtYmVyIDIwMThcIixcbiAgICAgICAgc2tpbGxzOiBbXCJKYXZhc2NyaXB0XCIsIFwiQUVNXCIsIFwiUHl0aG9uXCIsIFwiWE1MXCIsIFwiUERGLVhGQVwiXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgam9iTmFtZTogXCJSZWQtRC1BcmMgV2VsZGVyZW50YWxzXCIsXG4gICAgICAgIGpvYlRpdGxlOiBcIkp1bmlvciBCdXNpbmVzcyBBbmFseXN0XCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgYFByb3ZpZGVkIFFBIHRlc3RpbmcgZm9yIGVhc2luZyB0aGUgZGVwbHltZW50IG9mIGxvY2FsaXplZCB3ZWIgc2VydmljZXNcXG5gICtcbiAgICAgICAgICBgVGVzdGVkIGFuZCB2YWxpZGF0ZWQgRVJQIHNvZnR3YXJlIE1pY3Jvc29mdCBEeW5hbWljcyBOYXYuXFxuYCArXG4gICAgICAgICAgYENvbGxhYm9yYXRlZCB3aXRoIHRlYW0gbWF0ZXMgdG8gcmVkdWNlIHJlLXByaW50aW5nIG9mIGUtZG9jdW1lbnRzYCxcbiAgICAgICAgZGF0ZTogXCJKdWx5IDIwMTUgLSBBdWd1c3QgMjAxNVwiLFxuICAgICAgICBza2lsbHM6IFtcIlNvZnR3YXJlIFF1YWxpdHkgQXNzdXJhbmNlXCIsIFwiTWljcm9zb2Z0IER5bmFtaWNzIE5BVlwiXVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5FeHBlcmllbmNlPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjZC10aW1lbGluZVwiIGNsYXNzTmFtZT1cImNkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLmNhcmRzLm1hcChpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aS5qb2JOYW1lfVxuICAgICAgICAgICAgICAgIGpvYk5hbWU9e2kuam9iTmFtZX1cbiAgICAgICAgICAgICAgICBqb2JUaXRsZT17aS5qb2JUaXRsZX1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtpLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZGF0ZT17aS5kYXRlfVxuICAgICAgICAgICAgICAgIHNraWxscz17aS5za2lsbHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g9XCJqc3hcIj5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2ZjZmFmOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmMzMjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmIzNDNhO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2QtY29udGFpbmVyOjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAgIE1haW4gY29tcG9uZW50c1xuXG4gICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgICAgICNjZC10aW1lbGluZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgdG8gdG9wLFxuICAgICAgICAgICAgICAgICMyYjM0M2EsXG4gICAgICAgICAgICAgICAgIzY3M2FiNyA1JSxcbiAgICAgICAgICAgICAgICAjNjczYWI3IDk1JSxcbiAgICAgICAgICAgICAgICAjMmIzNDNhXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XG4gICAgICAgICAgICAgICNjZC10aW1lbGluZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgI2NkLXRpbWVsaW5lOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/liannus/programming/Liannus.me/components/sections/Experience/Experience.js */"));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2f765d98414ac962c7a7.hot-update.js.map