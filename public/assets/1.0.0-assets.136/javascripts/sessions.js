/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"sessions": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([13,"common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/stylesheets/common/flash-message.scss":
/*!******************************************************!*\
  !*** ./assets/stylesheets/common/flash-message.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/common/logo.scss":
/*!*********************************************!*\
  !*** ./assets/stylesheets/common/logo.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/common/tooltip.scss":
/*!************************************************!*\
  !*** ./assets/stylesheets/common/tooltip.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/_helpers.scss":
/*!***************************************************!*\
  !*** ./assets/stylesheets/sessions/_helpers.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/_mixins.scss":
/*!**************************************************!*\
  !*** ./assets/stylesheets/sessions/_mixins.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/_oauth_login_button.scss":
/*!**************************************************************!*\
  !*** ./assets/stylesheets/sessions/_oauth_login_button.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/_variables.scss":
/*!*****************************************************!*\
  !*** ./assets/stylesheets/sessions/_variables.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/base.scss":
/*!***********************************************!*\
  !*** ./assets/stylesheets/sessions/base.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/browser.scss":
/*!**************************************************!*\
  !*** ./assets/stylesheets/sessions/browser.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/buttons.scss":
/*!**************************************************!*\
  !*** ./assets/stylesheets/sessions/buttons.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/carrousel.scss":
/*!****************************************************!*\
  !*** ./assets/stylesheets/sessions/carrousel.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/navbar.scss":
/*!*************************************************!*\
  !*** ./assets/stylesheets/sessions/navbar.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/sessions.scss":
/*!***************************************************!*\
  !*** ./assets/stylesheets/sessions/sessions.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/sessions/utilities.scss":
/*!****************************************************!*\
  !*** ./assets/stylesheets/sessions/utilities.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/sessions.js":
/*!******************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/sessions.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");

/**
 *  Sessions view
 */

$(function () {
  var Sessions = CoreView.extend({

    el: document.body,

    events: {
      'submit .js-Loading-form': '_checkForm',
      'click .js-sharedSecret-link': '_toggleQr',
      'click .js-skipMfa-link': '_submitSkipMfa'
    },

    initialize: function initialize() {
      this._initViews();
      this._focusVerification();
    },

    _initViews: function _initViews() {
      var _this = this;

      _.each(this.$('.js-Sessions-fieldError'), function (element) {
        return _this._initFieldError(element);
      });
    },

    _initFieldError: function _initFieldError(el) {
      var errorTooltip = new TipsyTooltipView({
        el: $(el),
        fade: true,
        gravity: 's',
        offset: 0,
        className: 'errorTooltip',
        title: function title() {
          return $(el).data('content');
        }
      });
      this.addView(errorTooltip);
    },

    _checkForm: function _checkForm() {
      var $loading = this.$('.js-Loading');

      $loading.prop('disabled', true);

      $loading.css({
        width: $loading.outerWidth(),
        height: $loading.outerHeight()
      });

      $loading.find('.js-Loading-text').hide();
      $loading.find('.js-Loading-anim').show();
    },

    _toggleQr: function _toggleQr() {
      this.$('.Sessions-centered .Sessions-toggle').toggleClass('is-active');
    },

    _focusVerification: function _focusVerification() {
      this.$('.js-verification').focus();
    },

    _submitSkipMfa: function _submitSkipMfa() {
      this.$('.Sessions-footer').closest('form').submit();
    }
  });

  window.sessions = new Sessions();
});

/***/ }),

/***/ "./node_modules/cartoassets/src/scss/entry.scss":
/*!******************************************************!*\
  !*** ./node_modules/cartoassets/src/scss/entry.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 13:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib/assets/javascripts/dashboard/sessions.js ./assets/stylesheets/common/flash-message.scss ./assets/stylesheets/common/tooltip.scss ./assets/stylesheets/common/logo.scss ./node_modules/cartoassets/src/scss/entry.scss ./assets/stylesheets/sessions/_helpers.scss ./assets/stylesheets/sessions/_mixins.scss ./assets/stylesheets/sessions/_oauth_login_button.scss ./assets/stylesheets/sessions/_variables.scss ./assets/stylesheets/sessions/base.scss ./assets/stylesheets/sessions/browser.scss ./assets/stylesheets/sessions/buttons.scss ./assets/stylesheets/sessions/carrousel.scss ./assets/stylesheets/sessions/navbar.scss ./assets/stylesheets/sessions/sessions.scss ./assets/stylesheets/sessions/utilities.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /cartodb/lib/assets/javascripts/dashboard/sessions.js */"./lib/assets/javascripts/dashboard/sessions.js");
__webpack_require__(/*! /cartodb/assets/stylesheets/common/flash-message.scss */"./assets/stylesheets/common/flash-message.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/common/tooltip.scss */"./assets/stylesheets/common/tooltip.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/common/logo.scss */"./assets/stylesheets/common/logo.scss");
__webpack_require__(/*! /cartodb/node_modules/cartoassets/src/scss/entry.scss */"./node_modules/cartoassets/src/scss/entry.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/_helpers.scss */"./assets/stylesheets/sessions/_helpers.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/_mixins.scss */"./assets/stylesheets/sessions/_mixins.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/_oauth_login_button.scss */"./assets/stylesheets/sessions/_oauth_login_button.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/_variables.scss */"./assets/stylesheets/sessions/_variables.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/base.scss */"./assets/stylesheets/sessions/base.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/browser.scss */"./assets/stylesheets/sessions/browser.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/buttons.scss */"./assets/stylesheets/sessions/buttons.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/carrousel.scss */"./assets/stylesheets/sessions/carrousel.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/navbar.scss */"./assets/stylesheets/sessions/navbar.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/sessions/sessions.scss */"./assets/stylesheets/sessions/sessions.scss");
module.exports = __webpack_require__(/*! /cartodb/assets/stylesheets/sessions/utilities.scss */"./assets/stylesheets/sessions/utilities.scss");


/***/ })

/******/ });
//# sourceMappingURL=sessions.js.map