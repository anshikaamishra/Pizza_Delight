"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Anshika_Mishra_Downloads_food_ordering_master_food_ordering_master_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Anshika Mishra\\\\Downloads\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Anshika_Mishra_Downloads_food_ordering_master_food_ordering_master_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbnNoaWthJTIwTWlzaHJhJTVDRG93bmxvYWRzJTVDZm9vZC1vcmRlcmluZy1tYXN0ZXIlNUNmb29kLW9yZGVyaW5nLW1hc3RlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQW5zaGlrYSUyME1pc2hyYSU1Q0Rvd25sb2FkcyU1Q2Zvb2Qtb3JkZXJpbmctbWFzdGVyJTVDZm9vZC1vcmRlcmluZy1tYXN0ZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzhFO0FBQzNKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvPzA3MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQW5zaGlrYSBNaXNocmFcXFxcRG93bmxvYWRzXFxcXGZvb2Qtb3JkZXJpbmctbWFzdGVyXFxcXGZvb2Qtb3JkZXJpbmctbWFzdGVyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBbnNoaWthIE1pc2hyYVxcXFxEb3dubG9hZHNcXFxcZm9vZC1vcmRlcmluZy1tYXN0ZXJcXFxcZm9vZC1vcmRlcmluZy1tYXN0ZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\n\n\n\n\n\nconst MONGO_URL = \"mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/\";\nconst SECRET = \"cnhjvcgbfdihfvbdhjfb\";\nconst GOOGLE_CLIENT_ID = \"65415471300-5o9nbv59a64n4m1uc5nh6dssdjjb7bat.apps.googleusercontent.com\";\nconst GOOGLE_CLIENT_SECRET = \"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\";\nconst authOptions = {\n    secret: SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            clientId: GOOGLE_CLIENT_ID,\n            clientSecret: GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_3__.connect(MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_5___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNMO0FBQ2Y7QUFDUztBQUNGO0FBQ2tCO0FBQ2E7QUFDVjtBQUNEO0FBQ3ZELE1BQU1VLFlBQVU7QUFDaEIsTUFBTUMsU0FBTztBQUNiLE1BQU1DLG1CQUFpQjtBQUN2QixNQUFNQyx1QkFBcUI7QUFFcEIsTUFBTUMsY0FBYztJQUN6QkMsUUFBT0o7SUFDUEssU0FBU1AscUVBQWNBLENBQUNULDBEQUFhQTtJQUNyQ2lCLFdBQVc7UUFDVFQsc0VBQWNBLENBQUM7WUFDYlUsVUFBVU47WUFDVk8sY0FBY047UUFDaEI7UUFDQU4sMkVBQW1CQSxDQUFDO1lBQ2xCYSxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBbUI7Z0JBQzNFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBRTlCeEIsNkNBQWdCLENBQUNPO2dCQUNqQixNQUFNc0IsT0FBTyxNQUFNNUIsOENBQUlBLENBQUM2QixPQUFPLENBQUM7b0JBQUNIO2dCQUFLO2dCQUN0QyxNQUFNSSxhQUFhRixRQUFROUIseURBQWtCLENBQUN5QixVQUFVSyxLQUFLTCxRQUFRO2dCQUVyRSxJQUFJTyxZQUFZO29CQUNkLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU87WUFDVDtRQUNGO0tBQ0Q7QUFDSCxFQUFFO0FBRUssZUFBZUk7SUFDcEIsTUFBTUMsVUFBVSxNQUFNL0IsMkRBQWdCQSxDQUFDUTtJQUN2QyxNQUFNd0IsWUFBWUQsU0FBU0wsTUFBTUY7SUFDakMsSUFBSSxDQUFDUSxXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUMsV0FBVyxNQUFNdEMsc0RBQVFBLENBQUNnQyxPQUFPLENBQUM7UUFBQ0gsT0FBTVE7SUFBUztJQUN4RCxJQUFJLENBQUNDLFVBQVU7UUFDYixPQUFPO0lBQ1Q7SUFDQSxPQUFPQSxTQUFTQyxLQUFLO0FBQ3ZCO0FBRUEsTUFBTUMsVUFBVXBDLGdEQUFRQSxDQUFDUztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGlicy9tb25nb0Nvbm5lY3RcIjtcbmltcG9ydCB7VXNlckluZm99IGZyb20gXCJAL21vZGVscy9Vc2VySW5mb1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgTmV4dEF1dGgsIHtnZXRTZXJ2ZXJTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5jb25zdCBNT05HT19VUkw9XCJtb25nb2RiK3NydjovL2Zvb2Qtb3JkZXJpbmctYXBwOks4cW80MlVXMFp3VDNmRUFAY2x1c3RlcjAuZGlvc3pwYi5tb25nb2RiLm5ldC9cIjtcbmNvbnN0IFNFQ1JFVD1cImNuaGp2Y2diZmRpaGZ2YmRoamZiXCJcbmNvbnN0IEdPT0dMRV9DTElFTlRfSUQ9XCI2NTQxNTQ3MTMwMC01bzluYnY1OWE2NG40bTF1YzVuaDZkc3NkampiN2JhdC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG5jb25zdCBHT09HTEVfQ0xJRU5UX1NFQ1JFVD1cIkdPQ1NQWC00U0pubUk4R1YzQTh1VmVIM2lLUWJMREtLVkJGXCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBzZWNyZXQ6U0VDUkVULFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IEdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IEdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QGV4YW1wbGUuY29tXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJMKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWx9KTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRPayA9IHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAocGFzc3dvcmRPaykge1xuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9KVxuICBdLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW4oKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XG4gIGlmICghdXNlckVtYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlckluZm8uZmluZE9uZSh7ZW1haWw6dXNlckVtYWlsfSk7XG4gIGlmICghdXNlckluZm8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHVzZXJJbmZvLmFkbWluO1xufVxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIlVzZXJJbmZvIiwiYmNyeXB0IiwibW9uZ29vc2UiLCJVc2VyIiwiTmV4dEF1dGgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJNT05HT19VUkwiLCJTRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIm5hbWUiLCJpZCIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJjb25uZWN0IiwidXNlciIsImZpbmRPbmUiLCJwYXNzd29yZE9rIiwiY29tcGFyZVN5bmMiLCJpc0FkbWluIiwic2Vzc2lvbiIsInVzZXJFbWFpbCIsInVzZXJJbmZvIiwiYWRtaW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nconst MONGO_URL = \"mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/\";\nif (!MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = MONGO_URL;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzVDO0FBQ3RELE1BQU1FLFlBQVU7QUFFaEIsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUY7QUFDWixNQUFNRyxVQUFVO0lBQ2RDLFdBQVc7UUFDVEMsU0FBU04scURBQWdCQSxDQUFDTyxFQUFFO1FBQzVCQyxRQUFRO1FBQ1JDLG1CQUFtQjtJQUNyQjtBQUNGO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlDLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUU3RSxJQUFJLENBQUNDLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlYLGdEQUFXQSxDQUFDSSxLQUFLQztRQUM5QlMsT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0M7SUFDQUosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2xpYnMvbW9uZ29Db25uZWN0LmpzP2M0MDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LFNlcnZlckFwaVZlcnNpb24gfSBmcm9tIFwibW9uZ29kYlwiXG5jb25zdCBNT05HT19VUkw9XCJtb25nb2RiK3NydjovL2Zvb2Qtb3JkZXJpbmctYXBwOks4cW80MlVXMFp3VDNmRUFAY2x1c3RlcjAuZGlvc3pwYi5tb25nb2RiLm5ldC9cIjtcblxuaWYgKCFNT05HT19VUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXG59XG5cbmNvbnN0IHVyaSA9IE1PTkdPX1VSTFxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2VydmVyQXBpOiB7XG4gICAgdmVyc2lvbjogU2VydmVyQXBpVmVyc2lvbi52MSxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsXG4gIH0sXG59XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiU2VydmVyQXBpVmVyc2lvbiIsIk1PTkdPX1VSTCIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsInNlcnZlckFwaSIsInZlcnNpb24iLCJ2MSIsInN0cmljdCIsImRlcHJlY2F0aW9uRXJyb3JzIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsInByb2Nlc3MiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU07UUFBQ0MsTUFBTUM7SUFBTTtJQUNuQkMsT0FBTztRQUFDRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSTtJQUNsREMsVUFBVTtRQUFDTCxNQUFNQztJQUFNO0lBQ3ZCSyxPQUFPO1FBQUNOLE1BQU1DO0lBQU07QUFDdEIsR0FBRztJQUFDTSxZQUFZO0FBQUk7QUFFYixNQUFNQyxPQUFPWiw0Q0FBTUEsRUFBRVksUUFBUWIsK0NBQUtBLENBQUMsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXG4gIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfSxcbiAgaW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNRyxpQkFBaUIsSUFBSUQsNENBQU1BLENBQUM7SUFDaENFLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3BDQyxlQUFlO1FBQUNILE1BQU1DO0lBQU07SUFDNUJHLFlBQVk7UUFBQ0osTUFBTUM7SUFBTTtJQUN6QkksTUFBTTtRQUFDTCxNQUFNQztJQUFNO0lBQ25CSyxTQUFTO1FBQUNOLE1BQU1DO0lBQU07SUFDdEJNLE9BQU87UUFBQ1AsTUFBTUM7SUFBTTtJQUNwQk8sT0FBTztRQUFDUixNQUFNUztRQUFTQyxTQUFTO0lBQUs7QUFDdkMsR0FBRztJQUFDQyxZQUFZO0FBQUk7QUFFYixNQUFNQyxXQUFXaEIsNENBQU1BLEVBQUVnQixZQUFZakIsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzP2RlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VySW5mb1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxuICBzdHJlZXRBZGRyZXNzOiB7dHlwZTogU3RyaW5nfSxcbiAgcG9zdGFsQ29kZToge3R5cGU6IFN0cmluZ30sXG4gIGNpdHk6IHt0eXBlOiBTdHJpbmd9LFxuICBjb3VudHJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgcGhvbmU6IHt0eXBlOiBTdHJpbmd9LFxuICBhZG1pbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IG1vZGVscz8uVXNlckluZm8gfHwgbW9kZWwoJ1VzZXJJbmZvJywgVXNlckluZm9TY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJJbmZvU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/jose","vendor-chunks/oauth","vendor-chunks/@auth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAnshika%20Mishra%5CDownloads%5Cfood-ordering-master%5Cfood-ordering-master&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();