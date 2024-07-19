"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-flying-item";
exports.ids = ["vendor-chunks/react-flying-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-flying-item/dist/index.modern.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-flying-item/dist/index.modern.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction e(){return(e=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var r={borderRadius:\"4rem\",width:\"8rem\"};/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(i){var o=i.src,a=void 0===o?\"\":o,l=i.children,s=i.targetTop,p=void 0===s?\"5%\":s,c=i.targetLeft,y=void 0===c?\"5%\":c,u=i.customAnimation,f=void 0===u?\"\":u,g=i.animationDuration,m=void 0===g?.9:g,d=i.flyingItemStyling,v=void 0===d?r:d,x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\",null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"style\",null,\"\\n    .flying_image {\\n      --target-position-x: 0px;\\n      --target-position-y: 0px;\\n    \\n      display: block;\\n      position: fixed;\\n      top: var(--target-position-y);\\n      left: var(--target-position-x);\\n      translate: -50% -50%;\\n      animation: fly \"+m+\"s 1;\\n    }\\n    @keyframes fly {\\n      0% {\\n        top: var(--target-position-y);\\n        left: var(--target-position-x);\\n        opacity: 1;\\n      }\\n      \"+f+\"\\n      100% {\\n        top: \"+p+\";\\n        left: \"+y+\";\\n        opacity: 0;\\n      }\\n    }\\n  \"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\",{onClick:function(t){return function(t){x.current.style.setProperty(\"--target-position-x\",t.clientX+\"px\"),x.current.style.setProperty(\"--target-position-y\",t.clientY+\"px\"),x.current.style.setProperty(\"display\",\"\"),x.current.src=a,setTimeout(function(){return x.current.style.setProperty(\"display\",\"none\")},1e3*m-100)}(t)}},l),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\",{src:\"\",alt:\"\",className:\"flying_image\",style:e({display:\"none\"},r,v),ref:x}))}\n//# sourceMappingURL=index.modern.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmx5aW5nLWl0ZW0vZGlzdC9pbmRleC5tb2Rlcm4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDLGFBQWEsd0RBQXdELFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxTQUFTLHdCQUF3QixPQUFPLGtDQUFrQyw2QkFBZSxvQ0FBUyxHQUFHLHVPQUF1Tyw2Q0FBQyxPQUFPLE9BQU8sMERBQWUsWUFBWSwwREFBZSxvQ0FBb0MsaUNBQWlDLGlDQUFpQyw2QkFBNkIsd0JBQXdCLHNDQUFzQyx1Q0FBdUMsNkJBQTZCLGdDQUFnQyxPQUFPLHNCQUFzQixZQUFZLHdDQUF3Qyx5Q0FBeUMscUJBQXFCLFNBQVMsMkJBQTJCLHFCQUFxQixzQkFBc0IscUJBQXFCLFNBQVMsT0FBTyxPQUFPLDBEQUFlLFdBQVcsb0JBQW9CLG1CQUFtQixvTkFBb04scURBQXFELFlBQVksS0FBSyxJQUFJLDBEQUFlLFFBQVEsZ0RBQWdELGVBQWUsWUFBWTtBQUN6bEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1mbHlpbmctaXRlbS9kaXN0L2luZGV4Lm1vZGVybi5qcz9kOTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0LHt1c2VSZWYgYXMgbn1mcm9tXCJyZWFjdFwiO2Z1bmN0aW9uIGUoKXtyZXR1cm4oZT1PYmplY3QuYXNzaWduP09iamVjdC5hc3NpZ24uYmluZCgpOmZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBlPWFyZ3VtZW50c1tuXTtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHI9e2JvcmRlclJhZGl1czpcIjRyZW1cIix3aWR0aDpcIjhyZW1cIn07ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaSl7dmFyIG89aS5zcmMsYT12b2lkIDA9PT1vP1wiXCI6byxsPWkuY2hpbGRyZW4scz1pLnRhcmdldFRvcCxwPXZvaWQgMD09PXM/XCI1JVwiOnMsYz1pLnRhcmdldExlZnQseT12b2lkIDA9PT1jP1wiNSVcIjpjLHU9aS5jdXN0b21BbmltYXRpb24sZj12b2lkIDA9PT11P1wiXCI6dSxnPWkuYW5pbWF0aW9uRHVyYXRpb24sbT12b2lkIDA9PT1nPy45OmcsZD1pLmZseWluZ0l0ZW1TdHlsaW5nLHY9dm9pZCAwPT09ZD9yOmQseD1uKG51bGwpO3JldHVybiB0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsbnVsbCxcIlxcbiAgICAuZmx5aW5nX2ltYWdlIHtcXG4gICAgICAtLXRhcmdldC1wb3NpdGlvbi14OiAwcHg7XFxuICAgICAgLS10YXJnZXQtcG9zaXRpb24teTogMHB4O1xcbiAgICBcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgdG9wOiB2YXIoLS10YXJnZXQtcG9zaXRpb24teSk7XFxuICAgICAgbGVmdDogdmFyKC0tdGFyZ2V0LXBvc2l0aW9uLXgpO1xcbiAgICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICAgIGFuaW1hdGlvbjogZmx5IFwiK20rXCJzIDE7XFxuICAgIH1cXG4gICAgQGtleWZyYW1lcyBmbHkge1xcbiAgICAgIDAlIHtcXG4gICAgICAgIHRvcDogdmFyKC0tdGFyZ2V0LXBvc2l0aW9uLXkpO1xcbiAgICAgICAgbGVmdDogdmFyKC0tdGFyZ2V0LXBvc2l0aW9uLXgpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB9XFxuICAgICAgXCIrZitcIlxcbiAgICAgIDEwMCUge1xcbiAgICAgICAgdG9wOiBcIitwK1wiO1xcbiAgICAgICAgbGVmdDogXCIreStcIjtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgfVxcbiAgICB9XFxuICBcIiksdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse29uQ2xpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3guY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGFyZ2V0LXBvc2l0aW9uLXhcIix0LmNsaWVudFgrXCJweFwiKSx4LmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRhcmdldC1wb3NpdGlvbi15XCIsdC5jbGllbnRZK1wicHhcIikseC5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwiXCIpLHguY3VycmVudC5zcmM9YSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHguY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIil9LDFlMyptLTEwMCl9KHQpfX0sbCksdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpcIlwiLGFsdDpcIlwiLGNsYXNzTmFtZTpcImZseWluZ19pbWFnZVwiLHN0eWxlOmUoe2Rpc3BsYXk6XCJub25lXCJ9LHIsdikscmVmOnh9KSl9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tb2Rlcm4uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-flying-item/dist/index.modern.js\n");

/***/ })

};
;