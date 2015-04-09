/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
	 */
	
	__webpack_require__(/*! style/url!file!./style.css */ 2);
	console.log(__webpack_require__(/*! jquery */ 1));
	


/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./src/vendor/fake.jquery.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author "Evgeny Reznichenko" <kusakyky@gmail.com>
	 */
	
	console.log('jquery');


/***/ },
/* 2 */
/*!*****************************************************************!*\
  !*** ../~/style-loader/url.js!../~/file-loader!./src/style.css ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some reference to a css file to the DOM by adding a <link> tag
	var update = __webpack_require__(/*! ../~/style-loader/addStyleUrl.js */ 4)(
		__webpack_require__(/*! !../~/file-loader!./src/style.css */ 3)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_two/src/style.css", function() {
			update(require("!!/home/user/projects/webpack_hash/node_modules/file-loader/index.js!/home/user/projects/webpack_hash/revision_two/src/style.css"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!****************************************!*\
  !*** ../~/file-loader!./src/style.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "320fa55e0efc5c0191295f703abebc30.css"

/***/ },
/* 4 */
/*!****************************************!*\
  !*** ../~/style-loader/addStyleUrl.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyleUrl(cssUrl) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("link");
		styleElement.rel = "stylesheet";
		styleElement.type = "text/css";
		styleElement.href = cssUrl;
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if(false) {
			return function(cssUrl) {
				if(typeof cssUrl === "string") {
					styleElement.href = cssUrl;
				} else {
					head.removeChild(styleElement);
				}
			};
		}
	}

/***/ }
/******/ ]);
//# sourceMappingURL=main.map