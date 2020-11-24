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
/******/ 		"mobile_apps": 0
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
/******/ 	deferredModules.push([12,"common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/stylesheets/mobile_apps/mobile_apps_bars.scss":
/*!**************************************************************!*\
  !*** ./assets/stylesheets/mobile_apps/mobile_apps_bars.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/mobile_apps/mobile_apps_list.scss":
/*!**************************************************************!*\
  !*** ./assets/stylesheets/mobile_apps/mobile_apps_list.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/mobile_apps/mobile_apps_plan.scss":
/*!**************************************************************!*\
  !*** ./assets/stylesheets/mobile_apps/mobile_apps_plan.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/modal.tpl":
/*!********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/modal.tpl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (!escapeOptionsDisabled) { ;
__p += '\n  ';
 if (breadcrumbsEnabled) { ;
__p += '\n    <div class="Dialog-headerWrapper">\n      <ul class="Editor-breadcrumb">\n        <li class="Editor-breadcrumbItem CDB-Text CDB-Size-medium u-actionTextColor">\n          <button class="js-close">\n            <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large u-rSpace"></i>\n\n            <span class="Editor-breadcrumbLink">' +
__e( _t('back') ) +
'</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  ';
 } else { ;
__p += '\n    <button class="CDB-Shape js-close Dialog-closeBtn">\n      <div class="CDB-Shape-close is-blue is-huge"></div>\n    </button>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n\n<div class="Dialog-contentWrapper Dialog-contentWrapper--withHeaderWrapper ';
 if (breadcrumbsEnabled) { ;
__p += 'Dialog-contentWrapper--withBreadcrumbs';
 } ;
__p += ' js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/scroll/scroll.tpl":
/*!*********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/scroll/scroll.tpl ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (type === 'vertical') { ;
__p += '\n<div class="ScrollView-shadow ScrollView-shadow--top js-topShadow"></div>\n<div class="ScrollView-shadow ScrollView-shadow--bottom js-bottomShadow"></div>\n';
 } else { ;
__p += '\n<div class="Carousel-shadow Carousel-shadow--left js-leftShadow"></div>\n<div class="Carousel-shadow Carousel-shadow--right js-rightShadow"></div>\n';
 } ;
__p += '\n<div class="ScrollView-wrapper js-wrapper js-perfect-scroll">\n  <div class="ScrollView-content js-content"></div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/app-platforms-legends.js":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/app-platforms-legends.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");

module.exports = CoreView.extend({
  events: {
    'change .js-appPlatformsLegendOption': '_changePlatformValue'
  },

  initialize: function initialize(options) {
    this.model = new Backbone.Model({
      value: ''
    });

    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:value', this._changeIdPlatformLegends);
  },

  _changePlatformValue: function _changePlatformValue(ev) {
    this.model.set('value', ev.target.value);
  },

  _changeIdPlatformLegends: function _changeIdPlatformLegends() {
    var legend = this.options.appPlatforms[this.model.get('value')]['legend'];
    this.$('.js-appPlatformsLegend').html(legend);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/breadcrumbs/dropdown-link.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/breadcrumbs/dropdown-link.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button class="Header-navigationBreadcrumbLink ' +
__e( dropdownEnabled ? "DropdownLink DropdownLink--white" : "is-disabled" ) +
'">' +
__e( title ) +
'</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/breadcrumbs/dropdown.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/breadcrumbs/dropdown.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="BreadcrumbsDropdown-list CDB-Text CDB-Size-medium">\n  <li class="BreadcrumbsDropdown-listItem">\n    <span class="BreadcrumbsDropdown-icon u-rSpace--xl">\n      <img class="UserAvatar-img UserAvatar-img--small" src="' +
__e( avatarUrl ) +
'" title="' +
__e( userName ) +
'" alt="' +
__e( userName ) +
'" />\n    </span>\n    <nav class="BreadcrumbsDropdown-options">\n      <a href="' +
__e( mapsUrl ) +
'" class="BreadcrumbsDropdown-optionsItem ' +
__e( isMaps && !isDeepInsights && !isLocked ? 'is-selected' : '' ) +
'">Your maps</a>\n      <a href="' +
__e( datasetsUrl ) +
'" class="BreadcrumbsDropdown-optionsItem has-margin ' +
__e( isDatasets && !isLocked ? 'is-selected' : '' ) +
'">Your datasets</a>\n    </nav>\n  </li>\n  <li class="BreadcrumbsDropdown-listItem is-dark u-flex">\n    <span class="BreadcrumbsDropdown-lockIcon BreadcrumbsDropdown-icon u-flex u-alignCenter u-justifyCenter u-rSpace--xl">\n      <i class="CDB-IconFont CDB-IconFont-lock"></i>\n    </span>\n    <nav class="BreadcrumbsDropdown-options">\n      <a href="' +
__e( lockedMapsUrl ) +
'" class="BreadcrumbsDropdown-optionsItem ' +
__e( isMaps && isLocked ? 'is-selected' : '' ) +
'">Your locked maps</a>\n      <a href="' +
__e( lockedDatasetsUrl ) +
'" class="BreadcrumbsDropdown-optionsItem has-margin ' +
__e( isDatasets && isLocked ? 'is-selected' : '' ) +
'">Your locked datasets</a>\n    </nav>\n  </li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/logo.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/logo.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a class="Logo" href="' +
__e( homeUrl ) +
'">\n  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n  <svg width="92px" height="36px" viewBox="0 0 92 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g transform="translate(-162.000000, -282.000000)" fill="#FFFFFF">\n        <g transform="translate(162.000000, 282.000000)">\n          <path d="M74,36 C83.9411255,36 92,27.9411255 92,18 C92,8.0588745 83.9411255,0 74,0 C64.0588745,0 56,8.0588745 56,18 C56,27.9411255 64.0588745,36 74,36 Z" id="halo" fill-opacity="0.200000018"></path>\n          <path d="M6.25280899,23.981602 C8.76747566,23.981602 10.220757,22.882802 11.2984713,21.390402 L8.9144367,19.684802 C8.22861851,20.521202 7.52647133,21.078802 6.33445401,21.078802 C4.73421159,21.078802 3.60751029,19.734002 3.60751029,18.012002 L3.60751029,17.979202 C3.60751029,16.306402 4.73421159,14.928802 6.33445401,14.928802 C7.4284973,14.928802 8.1796315,15.470002 8.83279168,16.273602 L11.2168263,14.420402 C10.204428,13.026402 8.70215964,12.042402 6.36711202,12.042402 C2.9053631,12.042402 0.358038428,14.666402 0.358038428,18.012002 L0.358038428,18.044802 C0.358038428,21.472402 2.98700813,23.981602 6.25280899,23.981602 L6.25280899,23.981602 Z M16.732047,23.752002 L20.0468349,23.752002 L20.8632851,21.685602 L25.2884453,21.685602 L26.1048955,23.752002 L29.5013284,23.752002 L24.6352851,12.190002 L21.5817613,12.190002 L16.732047,23.752002 Z M21.7940384,19.209202 L23.0840297,15.962002 L24.357692,19.209202 L21.7940384,19.209202 Z M35.6697093,23.752002 L38.8375361,23.752002 L38.8375361,20.275202 L40.2418305,20.275202 L42.5442201,23.752002 L46.1855881,23.752002 L43.4586443,19.750402 C44.8792677,19.143602 45.810021,17.979202 45.810021,16.208002 L45.810021,16.175202 C45.810021,15.043602 45.4671119,14.174402 44.7976227,13.502002 C44.0301595,12.731202 42.8218132,12.272002 41.0746097,12.272002 L35.6697093,12.272002 L35.6697093,23.752002 Z M38.8375361,17.782402 L38.8375361,15.010802 L40.9276487,15.010802 C41.9727049,15.010802 42.6421941,15.470002 42.6421941,16.388402 L42.6421941,16.421202 C42.6421941,17.257602 42.005363,17.782402 40.9439777,17.782402 L38.8375361,17.782402 Z M55.2605317,23.752002 L58.4283585,23.752002 L58.4283585,15.060002 L61.8574495,15.060002 L61.8574495,12.272002 L51.8477698,12.272002 L51.8477698,15.060002 L55.2605317,15.060002 L55.2605317,23.752002 Z M74,24 C77.3137085,24 80,21.3137085 80,18 C80,14.6862915 77.3137085,12 74,12 C70.6862915,12 68,14.6862915 68,18 C68,21.3137085 70.6862915,24 74,24 Z" id="logotype"></path>\n        </g>\n      </g>\n    </g>\n  </svg>\n  ';
 if (googleEnabled) { ;
__p += '\n    <span class="Logo-sub Logo-sub--google"></span>\n  ';
 } ;
__p += '\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/close-limits.tpl":
/*!***************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/close-limits.tpl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += 'Hey <strong>' +
__e( userName ) +
'</strong>, looks like you\'re about to reach your account limit.\n';
 if (userType === "admin") { ;
__p += '\n  <a href="mailto:' +
__e( upgradeContactEmail ) +
'">Contact us</a> for upgrading your account.\n';
 } ;
__p += '\n';
 if (userType === "org") { ;
__p += '\n  Start thinking about <a href="mailto:' +
__e( upgradeContactEmail ) +
'">contacting your admin</a>.\n';
 } ;
__p += '\n';
 if (userType === "regular") { ;
__p += '\n  Start thinking about <a href="' +
__e( upgradeUrl ) +
'?utm_source=Dashboard_Limits_Nearing&utm_medium=referral&utm_campaign=Upgrade_from_Dashboard&utm_content=upgrading%20your%20plan" class ="underline">upgrading your plan</a>.\n';
 } ;
__p += '\n';
 if (userType === "internal") { ;
__p += '\n  Feel free to <a href="mailto:' +
__e( upgradeContactEmail ) +
'">contact us</a> for more resources.\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/dropdown-content.tpl":
/*!*******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/dropdown-content.tpl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="NotificationsDropdown ">\n  ';
 if (items.length > 0) { ;
__p += '\n    ';
 _.each(items, function(item){ ;
__p += '\n      ';
 if (!item.opened) { ;
__p += '\n        <li class="u-flex NotificationsDropdown-item is-new CDB-Text CDB-Size-medium">\n          <i class="u-hintTextColor u-flex u-alignCenter u-justifyCenter NotificationsDropdown-icon CDB-IconFont ' +
__e( item.iconFont ) +
' ' +
__e( item.severity ) +
'"></i>\n          <p class="NotificationsDropdown-text u-altTextColor">' +
((__t = ( cdb.core.sanitize.html(item.msg) )) == null ? '' : __t) +
'</p>\n        </li>\n      ';
 } ;
__p += '\n    ';
 }) ;
__p += '\n\n    ';
 _.each(items, function(item){ ;
__p += '\n      ';
 if (item.opened) { ;
__p += '\n        <li class="u-flex NotificationsDropdown-item CDB-Text CDB-Size-medium">\n          <i class="u-hintTextColor  u-flex u-alignCenter u-justifyCenter NotificationsDropdown-icon CDB-IconFont ' +
__e( item.iconFont ) +
'"></i>\n          <p class="NotificationsDropdown-text u-altTextColor">' +
((__t = ( cdb.core.sanitize.html(item.msg) )) == null ? '' : __t) +
'</p>\n        </li>\n      ';
 } ;
__p += '\n    ';
 }) ;
__p += '\n\n  ';
 } else { ;
__p += '\n    <li class="u-flex u-alignCenter NotificationsDropdown-item NotificationsDropdown-item--no-notifications CDB-Text CDB-Size-medium">\n      <p class="NotificationsDropdown-text u-altTextColor">There are no notifications :)</p>\n    </li>\n  ';
 } ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/dropdown.tpl":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/dropdown.tpl ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Dropdown-content Dropdown-content--withScroll js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/limits-exceeded.tpl":
/*!******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/limits-exceeded.tpl ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += 'Hey <strong>' +
__e( userName ) +
'</strong>, you\'re over your disk limits.\n';
 if (userType === "admin") { ;
__p += '\n  <a href="mailto:' +
__e( upgradeContactEmail ) +
'">Contact us</a> for upgrading your account.\n';
 } ;
__p += '\n';
 if (userType === "org") { ;
__p += '\n  Start thinking about <a href="mailto:' +
__e( upgradeContactEmail ) +
'">contacting your admin</a>.\n';
 } ;
__p += '\n';
 if (userType === "regular") { ;
__p += '\n  Start thinking about <a href="' +
__e( upgradeUrl ) +
'?utm_source=Dashboard_Limits_Nearing&utm_medium=referral&utm_campaign=Upgrade_from_Dashboard&utm_content=upgrading%20your%20plan" class ="underline">upgrading your plan</a>.\n';
 } ;
__p += '\n';
 if (userType === "internal") { ;
__p += '\n  Feel free to <a href="mailto:' +
__e( upgradeContactEmail ) +
'">contact us</a> for more resources.\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/trial-ends-soon.tpl":
/*!******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/trial-ends-soon.tpl ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Just a reminder, your <strong>' +
__e( accountType ) +
'</strong> trial will finish the next ' +
__e( trialEnd ) +
'. Happy mapping!';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/try-trial.tpl":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/try-trial.tpl ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Start your trial to experience the full CARTO.\n<br/>\n<a href="' +
__e( upgradeUrl ) +
'">Start now</a>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/upgraded-message.tpl":
/*!*******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/upgraded-message.tpl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Welcome to your brand new <strong>' +
__e( accountType ) +
'</strong> CARTO. Now we love you even more than before ;)\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/user-notifications.tpl":
/*!*********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/notifications/templates/user-notifications.tpl ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<i class="UserNotifications-Icon CDB-IconFont CDB-IconFont-alert"></i>\n\n';
 if (notificationsCount > 0) { ;
__p += '\n  <span class="Badge UserNotifications-badge">' +
__e( notificationsCount ) +
'</span>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/dashboard-header/settings-dropdown.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/dashboard-header/settings-dropdown.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="SettingsDropdown">\n  <li>\n    <div class="SettingsDropdown-sameline">\n      <p class="CDB-Text CDB-Size-medium">' +
__e( name ) +
'</p>\n      <p class="SettingsDropdown-accountType CDB-Text CDB-Size-small u-altTextColor u-upperCase">' +
__e( accountType ) +
'</p>\n    </div>\n    <p class="CDB-Text CDB-Size-medium u-altTextColor u-tSpace u-ellipsis">\n      ' +
__e( email ) +
'\n    </p>\n  </li>\n  <li class="u-tSpace-xl">\n    <p class="SettingsDropdown-userRole">\n      ';
 if (isViewer) { ;
__p += '\n        <span class="UserRoleIndicator Viewer CDB-Text CDB-Size-small is-semibold u-altTextColor">VIEWER</span>\n        ';
 if (orgDisplayEmail) { ;
__p += '\n          <a href="mailto:' +
__e( orgDisplayEmail ) +
'" class="CDB-Text CDB-Size-small">Become a Builder</a>\n        ';
 } ;
__p += '\n      ';
 } ;
__p += '\n      ';
 if (isBuilder) { ;
__p += '\n        <span class="UserRoleIndicator Builder CDB-Text CDB-Size-small is-semibold u-altTextColor">BUILDER</span>\n      ';
 } ;
__p += '\n    </p>\n  </li>\n  <li class="u-tSpace-xl">\n    ';
 if (showUpgradeLink) { ;
__p += '\n      <a href="' +
__e( upgradeUrl ) +
'" class="SettingsDropdown-itemLink">\n    ';
 } ;
__p += '\n\n    <div class="SettingsDropdown-sameline u-bSpace CDB-Text CDB-Size-medium u-altTextColor">\n      <p class="DefaultDescription">' +
__e( usedDataStr ) +
' of ' +
__e( availableDataStr ) +
' used</p>\n      ';
 if (showUpgradeLink) { ;
__p += '\n        <p class="SettingsDropdown-itemLinkText u-actionTextColor">Upgrade</p>\n      ';
 } ;
__p += '\n    </div>\n    <div class="SettingsDropdown-progressBar ' +
__e( progressBarClass ) +
'">\n      <div class="progress-bar">\n        <span class="bar-2" style="width: ' +
__e( usedDataPct ) +
'%"></span>\n      </div>\n    </div>\n\n    ';
 if (showUpgradeLink) { ;
__p += '\n      </a>\n    ';
 } ;
__p += '\n  </li>\n</ul>\n<div class="BreadcrumbsDropdown-listItem is-dark CDB-Text CDB-Size-medium">\n  <ul>\n    <li class="u-bSpace--m"><a href="' +
__e( publicProfileUrl ) +
'">View your public profile</a></li>\n    <li class="u-bSpace--m"><a href="' +
__e( accountProfileUrl ) +
'">Your account</a></li>\n    ';
 if (isOrgAdmin) { ;
__p += '\n      <li class="u-bSpace--m"><a href="' +
__e( organizationUrl ) +
'">Your organization</a></li>\n    ';
 } ;
__p += '\n    ';
 if (engineEnabled || mobileAppsEnabled) { ;
__p += '\n      <li class="u-bSpace--m"><a href="' +
__e( apiKeysUrl ) +
'">Your API keys</a></li>\n    ';
 } ;
__p += '\n    <li><a href="' +
__e( logoutUrl ) +
'">Close session</a></li>\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/icon-selector/icon-selector.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/icon-selector/icon-selector.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="js-iconSelector">\n    <div class="FormAccount-rowLabel">\n      <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">App icon</label>\n    </div>\n    <div class="FormAccount-rowData FormAccount-avatar">\n      <div class="FormAccount-avatarPreview">\n        ';
 if (iconURL == null) { ;
__p += '\n          <div class="FormAccount-inputIcon--noIcon">No icon</div>\n        ';
 } else { ;
__p += '\n          <img src="' +
__e( iconURL ) +
'" title="' +
__e( name ) +
'" alt="' +
__e( name ) +
'" class="FormAccount-avatarPreviewImage" />\n        ';
 } ;
__p += '\n        ';
 if ( state === "loading" ) { ;
__p += '\n          <div class="FormAccount-avatarPreviewLoader">\n            <div class="Spinner FormAccount-avatarPreviewSpinner"></div>\n          </div>\n        ';
 } ;
__p += '\n      </div>\n      <input class="js-fileIcon" type="file" value="Choose image" accept="' +
__e( iconAcceptedExtensions ) +
'" />\n      <input class="js-inputIcon" id="mobile_app_icon_url" name="' +
__e( inputName ) +
'" type="hidden" value="' +
__e( iconURL ) +
'" />\n      <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n        ';
 if (state === "error") { ;
__p += '\n          <p class="FormAccount-rowInfoText FormAccount-rowInfoText--error FormAccount-rowInfoText--maxWidth">There was an error uploading the icon. Check the height and size (max 1MB) of the image</p>\n        ';
 } else { ;
__p += '\n          <p class="FormAccount-rowInfoText FormAccount-rowInfoText--smaller">Recommended images should be 128x128 pixels of size</p>\n        ';
 } ;
__p += '\n      </div>\n    </div>\n  </div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/mobile-apps.js":
/*!*********************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/mobile-apps.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var DashboardHeaderView = __webpack_require__(/*! dashboard/components/dashboard-header-view */ "./lib/assets/javascripts/dashboard/components/dashboard-header-view.js");
var HeaderViewModel = __webpack_require__(/*! dashboard/views/mobile-apps/header-view-model */ "./lib/assets/javascripts/dashboard/views/mobile-apps/header-view-model.js");
var LocalStorage = __webpack_require__(/*! dashboard/helpers/local-storage */ "./lib/assets/javascripts/dashboard/helpers/local-storage.js");
var IconSelector = __webpack_require__(/*! dashboard/components/icon-selector/icon-selector-view */ "./lib/assets/javascripts/dashboard/components/icon-selector/icon-selector-view.js");
var DeleteMobileApp = __webpack_require__(/*! dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app-view */ "./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app-view.js");
var AppPlatformsLegends = __webpack_require__(/*! dashboard/components/app-platforms-legends */ "./lib/assets/javascripts/dashboard/components/app-platforms-legends.js");
var UserModel = __webpack_require__(/*! dashboard/data/user-model */ "./lib/assets/javascripts/dashboard/data/user-model.js");
var ConfigModel = __webpack_require__(/*! dashboard/data/config-model */ "./lib/assets/javascripts/dashboard/data/config-model.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
__webpack_require__(/*! dashboard/data/backbone/sync-options */ "./lib/assets/javascripts/dashboard/data/backbone/sync-options.js");

var ForbiddenAction = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptors/forbidden-403 */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptors/forbidden-403.js");
var NetworkResponseInterceptor = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptor */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptor.js");
NetworkResponseInterceptor.addURLPattern('api/v');
NetworkResponseInterceptor.addErrorInterceptor(ForbiddenAction());
NetworkResponseInterceptor.start();

var configModel = new ConfigModel(_.defaults({ base_url: window.user_data.base_url }, window.config));

if (window.trackJs) {
  window.trackJs.configure({
    userId: window.user_data.username
  });
}

/**
 * Entry point for the new keys, bootstraps all dependency models and application.
 */
$(function () {
  var userModel = new UserModel(window.user_data, { configModel: configModel });
  var mobileApp = window.mobile_app_data;

  var modals = new ModalsServiceModel();

  new DashboardHeaderView({
    el: $('#header'), // pre-rendered in DOM by Rails app
    model: userModel,
    configModel: configModel,
    viewModel: new HeaderViewModel(),
    localStorage: new LocalStorage()
  }).render();

  // Avatar
  var iconSelectorNode = $('.js-iconSelector');

  if (iconSelectorNode.length > 0) {
    var iconSelector = new IconSelector({
      el: iconSelectorNode,
      configModel: configModel,
      renderModel: new Backbone.Model({
        id: userModel.get('id'),
        name: mobileApp.name,
        inputName: $('.js-fileIcon').attr('name'),
        icon_url: mobileApp.icon_url
      }),
      iconAcceptedExtensions: window.icon_valid_extensions
    });

    iconSelector.render();
  }

  // Mobile app deletion
  var deleteButton = $('.js-deleteMobileApp');

  if (deleteButton.length > 0) {
    deleteButton.click(function (ev) {
      ev.preventDefault();

      modals.create(function (model) {
        return new DeleteMobileApp({
          modalModel: model,
          configModel: configModel,
          authenticityToken: window.authenticity_token,
          needsPasswordConfirmation: userModel.needsPasswordConfirmation(),
          mobileApp: mobileApp
        });
      });
    });
  }

  if ($('.js-appPlatformsLegend').length > 0) {
    new AppPlatformsLegends({
      el: $('.js-MobileAppForm'),
      appPlatforms: mobileApp['mobile_platforms']
    }).render();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app-view.js":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app-view.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./delete-mobile-app.tpl */ "./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['modalModel', 'configModel', 'authenticityToken', 'needsPasswordConfirmation'];

module.exports = CoreView.extend({
  events: {
    'submit .js-form': '_close',
    'click .js-cancel': '_close'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    var mobileAppId = this.options.mobileApp.id;

    this.$el.html(template({
      formAction: this._configModel.get('base_url') + '/your_apps/mobile/' + mobileAppId,
      authenticityToken: this._authenticityToken,
      passwordNeeded: this._needsPasswordConfirmation
    }));
  },

  _close: function _close() {
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/mobile-apps/delete-mobile-app/delete-mobile-app.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form accept-charset="UTF-8" action="' +
__e( formAction ) +
'" method="post" class="js-form">\n  <input name="utf8" type="hidden" value="&#x2713;" />\n  <input name="authenticity_token" type="hidden" value="' +
__e( authenticityToken ) +
'" />\n  <input name="_method" type="hidden" value="delete" />\n\n  <div class="CDB-Text Dialog-header u-inner">\n    <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n      <i class="CDB-IconFont CDB-IconFont-keys"></i>\n    </div>\n    <p class="Dialog-headerTitle">You are about to delete your application</p>\n    <p class="Dialog-headerText">Remember, once you delete it there is no going back</p>\n  </div>\n\n  ';
 if (passwordNeeded) { ;
__p += '\n    <div class="CDB-Text Dialog-body">\n      <div class="Form-row Form-row--centered has-label">\n        <div class="Form-rowLabel">\n          <label class="Form-label">Your password</label>\n        </div>\n        <div class="Form-rowData">\n          <input type="password" id="deletion_password_confirmation" name="password_confirmation" class="CDB-InputText CDB-Text Form-input Form-input--long" value=""/>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="Dialog-footer u-inner">\n    <button type="button" class="CDB-Button CDB-Button--secondary js-cancel">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Cancel</span>\n    </button>\n    <button type="submit" class="CDB-Button CDB-Button--error js-save">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Delete this application</span>\n    </button>\n  </div>\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/mobile-apps/header-view-model.js":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/mobile-apps/header-view-model.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");

/**
 * Header view model to handle state for dashboard header view.
 */

module.exports = Backbone.Model.extend({
  breadcrumbTitle: function breadcrumbTitle() {
    return 'Configuration';
  },

  isBreadcrumbDropdownEnabled: function isBreadcrumbDropdownEnabled() {
    return false;
  },

  isDisplayingDatasets: function isDisplayingDatasets() {
    return false;
  },

  isDisplayingMaps: function isDisplayingMaps() {
    return false;
  },

  isDisplayingLockedItems: function isDisplayingLockedItems() {
    return false;
  }
});

/***/ }),

/***/ "./node_modules/camshaft-reference/versions sync recursive ^\\.\\/.*\\/reference\\.json$":
/*!*********************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions sync ^\.\/.*\/reference\.json$ ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0.1.0/reference.json": "./node_modules/camshaft-reference/versions/0.1.0/reference.json",
	"./0.10.0/reference.json": "./node_modules/camshaft-reference/versions/0.10.0/reference.json",
	"./0.14.0/reference.json": "./node_modules/camshaft-reference/versions/0.14.0/reference.json",
	"./0.15.0/reference.json": "./node_modules/camshaft-reference/versions/0.15.0/reference.json",
	"./0.16.0/reference.json": "./node_modules/camshaft-reference/versions/0.16.0/reference.json",
	"./0.17.0/reference.json": "./node_modules/camshaft-reference/versions/0.17.0/reference.json",
	"./0.18.0/reference.json": "./node_modules/camshaft-reference/versions/0.18.0/reference.json",
	"./0.19.0/reference.json": "./node_modules/camshaft-reference/versions/0.19.0/reference.json",
	"./0.2.0/reference.json": "./node_modules/camshaft-reference/versions/0.2.0/reference.json",
	"./0.20.0/reference.json": "./node_modules/camshaft-reference/versions/0.20.0/reference.json",
	"./0.21.0/reference.json": "./node_modules/camshaft-reference/versions/0.21.0/reference.json",
	"./0.22.0/reference.json": "./node_modules/camshaft-reference/versions/0.22.0/reference.json",
	"./0.23.0/reference.json": "./node_modules/camshaft-reference/versions/0.23.0/reference.json",
	"./0.26.0/reference.json": "./node_modules/camshaft-reference/versions/0.26.0/reference.json",
	"./0.27.0/reference.json": "./node_modules/camshaft-reference/versions/0.27.0/reference.json",
	"./0.29.0/reference.json": "./node_modules/camshaft-reference/versions/0.29.0/reference.json",
	"./0.3.0/reference.json": "./node_modules/camshaft-reference/versions/0.3.0/reference.json",
	"./0.33.0/reference.json": "./node_modules/camshaft-reference/versions/0.33.0/reference.json",
	"./0.34.0/reference.json": "./node_modules/camshaft-reference/versions/0.34.0/reference.json",
	"./0.37.0/reference.json": "./node_modules/camshaft-reference/versions/0.37.0/reference.json",
	"./0.37.1/reference.json": "./node_modules/camshaft-reference/versions/0.37.1/reference.json",
	"./0.38.0/reference.json": "./node_modules/camshaft-reference/versions/0.38.0/reference.json",
	"./0.4.0/reference.json": "./node_modules/camshaft-reference/versions/0.4.0/reference.json",
	"./0.40.0/reference.json": "./node_modules/camshaft-reference/versions/0.40.0/reference.json",
	"./0.41.0/reference.json": "./node_modules/camshaft-reference/versions/0.41.0/reference.json",
	"./0.43.0/reference.json": "./node_modules/camshaft-reference/versions/0.43.0/reference.json",
	"./0.44.0/reference.json": "./node_modules/camshaft-reference/versions/0.44.0/reference.json",
	"./0.47.0/reference.json": "./node_modules/camshaft-reference/versions/0.47.0/reference.json",
	"./0.51.0/reference.json": "./node_modules/camshaft-reference/versions/0.51.0/reference.json",
	"./0.52.0/reference.json": "./node_modules/camshaft-reference/versions/0.52.0/reference.json",
	"./0.54.0/reference.json": "./node_modules/camshaft-reference/versions/0.54.0/reference.json",
	"./0.55.0/reference.json": "./node_modules/camshaft-reference/versions/0.55.0/reference.json",
	"./0.55.1/reference.json": "./node_modules/camshaft-reference/versions/0.55.1/reference.json",
	"./0.58.1/reference.json": "./node_modules/camshaft-reference/versions/0.58.1/reference.json",
	"./0.59.3/reference.json": "./node_modules/camshaft-reference/versions/0.59.3/reference.json",
	"./0.59.4/reference.json": "./node_modules/camshaft-reference/versions/0.59.4/reference.json",
	"./0.6.0/reference.json": "./node_modules/camshaft-reference/versions/0.6.0/reference.json",
	"./0.7.0/reference.json": "./node_modules/camshaft-reference/versions/0.7.0/reference.json",
	"./0.9.0/reference.json": "./node_modules/camshaft-reference/versions/0.9.0/reference.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/camshaft-reference/versions sync recursive ^\\.\\/.*\\/reference\\.json$";

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.1.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.1.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.1.0","analyses":{"buffer":{"params":{"source":{"type":"node"},"radio":{"type":"number"}}},"moran":{"params":{"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","drive","bike"]},"time":{"type":"number"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.10.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.10.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.10.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.14.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.14.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.14.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.15.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.15.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.15.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.16.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.16.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.16.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.17.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.17.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.17.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.18.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.18.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.18.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.19.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.19.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.19.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.2.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.2.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.2.0","analyses":{"buffer":{"params":{"source":{"type":"node"},"radio":{"type":"number"}}},"moran":{"params":{"source":{"type":"node"},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","drive","bike"]},"time":{"type":"number"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.20.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.20.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.20.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.21.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.21.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.21.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string"},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.22.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.22.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.22.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["point"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.23.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.23.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.23.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.26.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.26.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.26.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.27.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.27.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.27.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.29.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.29.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.29.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.3.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.3.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.3.0","analyses":{"buffer":{"params":{"source":{"type":"node"},"radio":{"type":"number"}}},"moran":{"params":{"source":{"type":"node"},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"population-in-area":{"params":{"source":{"type":"node"},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","drive","bike"]},"time":{"type":"number"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.33.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.33.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.33.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true},"provider":{"type":"enum","values":["heremaps","google","mapzen","user_default"],"optional":true,"default-value":"mapzen"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.34.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.34.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.34.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city":{"type":"string"},"admin_region":{"type":"string"},"country":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"postal_code":{"type":"string"},"country":{"type":"string"}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address":{"type":"string"},"city":{"type":"string","optional":true},"state":{"type":"string","optional":true},"country":{"type":"string","optional":true},"provider":{"type":"enum","values":["heremaps","google","mapzen","user_default"],"optional":true,"default-value":"mapzen"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"},"provider":{"type":"enum","values":["heremaps","mapzen"],"optional":true,"default-value":"mapzen"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.37.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.37.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.37.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true},"provider":{"type":"enum","values":["heremaps","google","mapzen","user_default"],"optional":true,"default-value":"mapzen"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"},"provider":{"type":"enum","values":["heremaps","mapzen"],"optional":true,"default-value":"mapzen"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.37.1/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.37.1/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.37.1","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true},"provider":{"type":"enum","values":["heremaps","google","mapzen","user_default"],"optional":true,"default-value":"mapzen"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"},"provider":{"type":"enum","values":["heremaps","mapzen"],"optional":true,"default-value":"heremaps"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.38.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.38.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.38.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true},"provider":{"type":"enum","values":["heremaps","google","mapzen","user_default"],"optional":true,"default-value":"mapzen"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"},"provider":{"type":"enum","values":["heremaps","mapzen"],"optional":true,"default-value":"heremaps"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.4.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.4.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.4.0","analyses":{"buffer":{"params":{"source":{"type":"node"},"radius":{"type":"number"}}},"moran":{"params":{"source":{"type":"node"},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"population-in-area":{"params":{"source":{"type":"node"},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","drive","bike"]},"time":{"type":"number"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.40.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.40.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.40.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.41.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.41.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.41.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.43.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.43.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.43.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.44.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.44.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.44.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.47.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.47.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.47.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string"},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.51.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.51.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.51.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.52.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.52.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.52.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.54.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.54.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.54.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.55.0/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.55.0/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.55.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"column_target":{"type":"string"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.55.1/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.55.1/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.55.1","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"polygon"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.58.1/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.58.1/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.58.1","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"point"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.59.3/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.59.3/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.59.3","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min_or_equal":{"type":"number","optional":true},"max_or_equal":{"type":"number","optional":true},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"point"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.59.4/reference.json":
/*!************************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.59.4/reference.json ***!
  \************************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.59.4","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true},"greater_than":{"type":"number","optional":true},"greater_than_or_equal":{"type":"number","optional":true},"less_than":{"type":"number","optional":true},"less_than_or_equal":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"point"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.6.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.6.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.6.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node"},"target":{"type":"node"},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node"},"radius":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node"},"target":{"type":"node"}}},"moran":{"params":{"source":{"type":"node"},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"population-in-area":{"params":{"source":{"type":"node"},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.7.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.7.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.7.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node"},"target":{"type":"node"},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node"},"radius":{"type":"number"}}},"filter-category":{"params":{"source":{"type":"node"},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node"},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node"},"target":{"type":"node"}}},"moran":{"params":{"source":{"type":"node"},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node"},"polygons_source":{"type":"node"}}},"population-in-area":{"params":{"source":{"type":"node"},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node"},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}}}};

/***/ }),

/***/ "./node_modules/camshaft-reference/versions/0.9.0/reference.json":
/*!***********************************************************************!*\
  !*** ./node_modules/camshaft-reference/versions/0.9.0/reference.json ***!
  \***********************************************************************/
/*! exports provided: version, analyses, default */
/***/ (function(module) {

module.exports = {"version":"0.9.0","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string"}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string"},"significance":{"type":"number"},"neighbours":{"type":"number"},"permutations":{"type":"number"},"w_type":{"type":"enum","values":["knn","queen"]}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"source":{"params":{"query":{"type":"string"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}}}};

/***/ }),

/***/ "./node_modules/internal-carto.js/node_modules/carto/package.json":
/*!************************************************************************!*\
  !*** ./node_modules/internal-carto.js/node_modules/carto/package.json ***!
  \************************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, bundleDependencies, contributors, dependencies, deprecated, description, devDependencies, engines, homepage, keywords, licenses, main, man, name, repository, scripts, url, version, default */
/***/ (function(module) {

module.exports = {"_from":"github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","_id":"carto@0.15.1-cdb5","_inBundle":false,"_integrity":"","_location":"/internal-carto.js/carto","_phantomChildren":{},"_requested":{"type":"git","raw":"carto@github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","name":"carto","escapedName":"carto","rawSpec":"github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","saveSpec":"github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","fetchSpec":null,"gitCommittish":"85881d99dd7fcf2c4e16478b04db67108d27a50c"},"_requiredBy":["/internal-carto.js"],"_resolved":"github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","_spec":"carto@github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","_where":"/cartodb/node_modules/internal-carto.js","author":{"name":"CartoDB","url":"http://cartodb.com/"},"bin":{"carto":"./bin/carto"},"bugs":{"url":"https://github.com/cartodb/carto/issues"},"bundleDependencies":false,"contributors":[{"name":"Tom MacWright","email":"macwright@gmail.com"},{"name":"Konstantin Käfer"},{"name":"Alexis Sellier","email":"self@cloudhead.net"},{"name":"Raul Ochoa","email":"rochoa@cartodb.com"},{"name":"Javi Santana","email":"jsantana@cartodb.com"}],"dependencies":{"mapnik-reference":"~6.0.2","optimist":"~0.6.0","underscore":"1.8.3"},"deprecated":false,"description":"CartoCSS Stylesheet Compiler","devDependencies":{"browserify":"~7.0.0","coveralls":"~2.10.1","istanbul":"~0.2.14","jshint":"0.2.x","mocha":"1.12.x","sax":"0.1.x","uglify-js":"1.3.3"},"engines":{"node":">=0.4.x"},"homepage":"https://github.com/cartodb/carto#readme","keywords":["maps","css","stylesheets"],"licenses":[{"type":"Apache"}],"main":"./lib/carto/index","man":["./man/carto.1"],"name":"carto","repository":{"type":"git","url":"git+ssh://git@github.com/cartodb/carto.git"},"scripts":{"bump":"npm version patch","bump:major":"npm version major","bump:minor":"npm version minor","coverage":"istanbul cover ./node_modules/.bin/_mocha && coveralls < ./coverage/lcov.info","postversion":"git push origin master --follow-tags","pretest":"npm install","tdd":"env HIDE_LOGS=true mocha -w -R spec","test":"mocha -R spec"},"url":"https://github.com/cartodb/carto","version":"0.15.1-cdb5"};

/***/ }),

/***/ "./node_modules/internal-carto.js/node_modules/torque.js/node_modules/carto/package.json":
/*!***********************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/node_modules/torque.js/node_modules/carto/package.json ***!
  \***********************************************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, bundleDependencies, contributors, dependencies, deprecated, description, devDependencies, engines, homepage, keywords, licenses, main, man, name, repository, scripts, url, version, default */
/***/ (function(module) {

module.exports = {"_from":"github:cartodb/carto#master","_id":"carto@0.15.1-cdb5","_inBundle":false,"_integrity":"","_location":"/internal-carto.js/torque.js/carto","_phantomChildren":{},"_requested":{"type":"git","raw":"carto@github:cartodb/carto#master","name":"carto","escapedName":"carto","rawSpec":"github:cartodb/carto#master","saveSpec":"github:cartodb/carto#master","fetchSpec":null,"gitCommittish":"master"},"_requiredBy":["/internal-carto.js/torque.js"],"_resolved":"github:cartodb/carto#85881d99dd7fcf2c4e16478b04db67108d27a50c","_spec":"carto@github:cartodb/carto#master","_where":"/cartodb/node_modules/internal-carto.js/node_modules/torque.js","author":{"name":"CartoDB","url":"http://cartodb.com/"},"bin":{"carto":"./bin/carto"},"bugs":{"url":"https://github.com/cartodb/carto/issues"},"bundleDependencies":false,"contributors":[{"name":"Tom MacWright","email":"macwright@gmail.com"},{"name":"Konstantin Käfer"},{"name":"Alexis Sellier","email":"self@cloudhead.net"},{"name":"Raul Ochoa","email":"rochoa@cartodb.com"},{"name":"Javi Santana","email":"jsantana@cartodb.com"}],"dependencies":{"mapnik-reference":"~6.0.2","optimist":"~0.6.0","underscore":"1.8.3"},"deprecated":false,"description":"CartoCSS Stylesheet Compiler","devDependencies":{"browserify":"~7.0.0","coveralls":"~2.10.1","istanbul":"~0.2.14","jshint":"0.2.x","mocha":"1.12.x","sax":"0.1.x","uglify-js":"1.3.3"},"engines":{"node":">=0.4.x"},"homepage":"https://github.com/cartodb/carto#readme","keywords":["maps","css","stylesheets"],"licenses":[{"type":"Apache"}],"main":"./lib/carto/index","man":["./man/carto.1"],"name":"carto","repository":{"type":"git","url":"git+ssh://git@github.com/cartodb/carto.git"},"scripts":{"bump":"npm version patch","bump:major":"npm version major","bump:minor":"npm version minor","coverage":"istanbul cover ./node_modules/.bin/_mocha && coveralls < ./coverage/lcov.info","postversion":"git push origin master --follow-tags","pretest":"npm install","tdd":"env HIDE_LOGS=true mocha -w -R spec","test":"mocha -R spec"},"url":"https://github.com/cartodb/carto","version":"0.15.1-cdb5"};

/***/ }),

/***/ "./node_modules/internal-carto.js/package.json":
/*!*****************************************************!*\
  !*** ./node_modules/internal-carto.js/package.json ***!
  \*****************************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, browser, browserify, browserify-shim, bugs, config, contributors, dependencies, description, devDependencies, files, homepage, license, main, name, private, repository, scripts, version, watch, default */
/***/ (function(module) {

module.exports = {"_args":[["github:CartoDB/carto.js#v4.1.12-1","/cartodb"]],"_from":"github:CartoDB/carto.js#v4.1.12-1","_id":"internal-carto.js@github:CartoDB/carto.js#8cc055e50b591a7718991111a7e621db53527044","_inBundle":false,"_integrity":"","_location":"/internal-carto.js","_phantomChildren":{"d3":"3.5.17","mapnik-reference":"6.0.5","optimist":"0.6.1","turbo-carto":"0.21.1","turf-jenks":"1.0.1","underscore":"1.8.3"},"_requested":{"type":"git","raw":"github:CartoDB/carto.js#v4.1.12-1","rawSpec":"github:CartoDB/carto.js#v4.1.12-1","saveSpec":"github:CartoDB/carto.js#v4.1.12-1","fetchSpec":null,"gitCommittish":"v4.1.12-1"},"_requiredBy":["/"],"_resolved":"github:CartoDB/carto.js#8cc055e50b591a7718991111a7e621db53527044","_spec":"github:CartoDB/carto.js#v4.1.12-1","_where":"/cartodb","author":{"name":"CARTO","url":"https://carto.com/"},"browser":{"cdb":"./src/cdb.js","cdb.config":"./src/cdb.config.js","cdb.core.util":"./src/core/util.js","cdb.core.Profiler":"./src/core/profiler.js","cdb.log":"./src/cdb.log.js","cdb.errors":"./src/cdb.errors.js","cdb.templates":"./src/cdb.templates.js","geojson":"./vendor/GeoJSON.js","html-css-sanitizer":"./vendor/html-css-sanitizer-bundle.js","mousewheel":"./vendor/mousewheel.js","mwheelIntent":"./vendor/mwheelIntent.js"},"browserify":{"transform":["browserify-shim","jstify"]},"browserify-shim":{"geojson":"GeoJSON","html-css-sanitizer":"html","mousewheel":{"depends":["jquery:jQuery"]},"mwheelIntent":{"depends":["jquery:jQuery"]}},"bugs":{"url":"https://github.com/CartoDB/carto.js/issues"},"config":{"root":"."},"contributors":[{"name":"Javier Álvarez","email":"jmedina@carto.com"},{"name":"Javier Álvarez","email":"xabel@vizzuality.com"},{"name":"Javier Arce","email":"javierarce@carto.com"},{"name":"Javier Santana","email":"jsantana@carto.com"},{"name":"Raul Ochoa","email":"rochoa@carto.com"},{"name":"Carlos Matallín","email":"matallo@carto.com"},{"name":"Jaime Chapinal","email":"jaime.chapinal@carto.com"},{"name":"Nicklas Gummesson","email":"nicklas@carto.com"},{"name":"Francisco Dans","email":"francisco@carto.com"},{"name":"Emilio García","email":"emilio@carto.com"},{"name":"Ivan Malagon","email":"ivan@carto.com"},{"name":"Ruben Moya","email":"ruben@carto.com"},{"name":"Jesus Arroyo Torrens","email":"jarroyo@carto.com"},{"name":"Iago Lastra","email":"iago@carto.com"},{"name":"Elena Torró","email":"elena@carto.com"},{"name":"Jesús Botella","email":"jbotella@carto.com"},{"name":"Alejandra Arri","email":"alejandraarri@carto.com"}],"dependencies":{"@carto/zera":"1.0.7","backbone":"1.2.3","backbone-poller":"^1.1.3","camshaft-reference":"0.34.0","carto":"github:cartodb/carto#master","clip-path-polygon":"0.1.12","d3-array":"1.2.1","d3-format":"1.2.0","d3-time-format":"2.1.0","jquery":"2.1.4","mustache":"1.1.0","perfect-scrollbar":"git://github.com/CartoDB/perfect-scrollbar.git#master","postcss":"5.0.19","promise-polyfill":"^6.1.0","torque.js":"github:CartoDB/torque#master","underscore":"1.8.3","whatwg-fetch":"^2.0.3"},"description":"CARTO javascript library","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"~6.24.1","babelify":"^7.3.0","browserify":"13.0.0","browserify-shim":"3.8.12","cartoassets":"github:CartoDB/CartoAssets#master","eslint":"~4.8.0","eslint-config-semistandard":"~11.0.0","eslint-config-standard":"~10.2.1","eslint-plugin-import":"~2.7.0","eslint-plugin-node":"~5.2.0","eslint-plugin-promise":"~3.5.0","eslint-plugin-standard":"~3.0.1","findup-sync":"0.1.3","grunt":"0.4.5","grunt-aws":"^0.4.0","grunt-browserify":"5.0.0","grunt-contrib-clean":"~0.5.0","grunt-contrib-concat":"~0.3.0","grunt-contrib-connect":"~0.11.2","grunt-contrib-copy":"~0.7.0","grunt-contrib-cssmin":"~0.7.0","grunt-contrib-imagemin":"~1.0.0","grunt-contrib-jasmine":"1.1.0","grunt-contrib-uglify":"0.10.0","grunt-contrib-watch":"git://github.com/gruntjs/grunt-contrib-watch.git#b884948805940c663b1cbb91a3c28ba8afdebf78","grunt-eslint":"~20.1.0","grunt-exorcise":"2.1.0","grunt-fastly":"~0.1.3","grunt-gitinfo":"~0.1.7","grunt-prompt":"~1.3.0","grunt-replace":"0.6.2","grunt-sass":"2.0.0","gulp":"3.8.10","gulp-iconfont":"1.0.0","gulp-iconfont-css":"0.0.9","gulp-install":"0.2.0","gulp-sketch":"0.0.7","jasmine-ajax":"git://github.com/nobuti/jasmine-ajax.git#master","jsdoc":"~3.5.5","jstify":"0.12.0","leaflet":"1.3.1","load-grunt-tasks":"~0.6.0","npm-watch":"^0.3.0","semver":"~5.4.0","source-map-support":"github:CartoDB/node-source-map-support#0.4.6-cdb1","time-grunt":"~0.3.1","uglifyjs-webpack-plugin":"^1.1.2","watchify":"3.4.0","webpack":"4.12.1","webpack-cli":"^3.0.4"},"files":["dist","node_modules/cdb","src","themes","vendor"],"homepage":"https://github.com/CartoDB/carto.js#readme","license":"BSD-3-Clause","main":"src/index.js","name":"internal-carto.js","private":true,"repository":{"type":"git","url":"git://github.com/CartoDB/carto.js.git"},"scripts":{"build":"rm -rf dist/public; NODE_ENV=production webpack --progress --config webpack/webpack.config.js && NODE_ENV=production webpack --progress --config webpack/webpack.min.config.js","build:internal":"grunt build","build:watch":"NODE_ENV=development webpack --progress -w --config webpack/webpack.config.js","bump":"npm version prerelease","bump:minor":"npm version minor","bump:patch":"npm version patch","docs":"rm -rf docs/public; jsdoc --configure config/jsdoc/public-conf.json","docs:internal":"rm -rf docs/internal; jsdoc --configure config/jsdoc/internal-conf.json","lint":"eslint .","lint:fix":"eslint . --fix","postversion":"git push origin HEAD --follow-tags","release":"./scripts/release.sh","test":"grunt test","test:browser":"grunt dev"},"version":"4.1.12-1","watch":{"docs":"src/**/*.js"}};

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/attribution/attribution-template.tpl":
/*!****************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/attribution/attribution-template.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Overlay">\n  <button type="button" class="CDB-Attribution-button js-button">©</button>\n  <p class="CDB-Attribution-text js-text u-ellipsis">' +
((__t = ( attributions )) == null ? '' : __t) +
'</p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/default-infowindow-template.tpl":
/*!***********************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/default-infowindow-template.tpl ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-infowindow CDB-infowindow--light js-infowindow">\n  <div class="CDB-infowindow-close js-close"></div>\n  <div class="CDB-infowindow-container">\n    ';
 if (typeof loading !== 'undefined' && loading) { ;
__p += '\n      <div class="CDB-Loader js-loader is-visible"></div>\n    ';
 } ;
__p += '\n    <div class="CDB-infowindow-bg">\n      <div class="CDB-infowindow-inner js-inner">\n        <ul class="CDB-infowindow-list js-content">\n          ';
 if (content.fields) { ;
__p += '\n            ';
 _.each(content.fields, function (field) { ;
__p += '\n              <li class="CDB-infowindow-listItem">\n                ';
 if (field.title) { ;
__p += '<h5 class="CDB-infowindow-subtitle">' +
__e( field.title ) +
'</h5>';
 } ;
__p += '\n                ';
 if (field.value) { ;
__p += '<h4 class="CDB-infowindow-title">' +
__e( field.value ) +
'</h4>';
 } ;
__p += '\n              </li>\n              ';
 }) ;
__p += '\n          ';
 } ;
__p += '\n        </ul>\n      </div>\n    </div>\n    <div class="CDB-hook">\n      <div class="CDB-hook-inner"></div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/base/legend-title.tpl":
/*!*********************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/base/legend-title.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3 class="CDB-Text CDB-Size-small u-upperCase u-bSpace u-altTextColor u-ellipsis ';
 if (error) { ;
__p += ' u-' +
__e( error ) +
'TextColor ';
 } ;
__p += '" title="' +
__e( title ) +
'">\n  ' +
__e( title ) +
'\n</h3>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/bubble/legend-template.tpl":
/*!**************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/bubble/legend-template.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Bubble-container">\n  <ul class="Bubble-list';
 if (hasCustomLabels && labels[1] === '') { ;
__p += ' Bubble-list--custom';
 } ;
__p += '">\n    ';
 for (var i in bubbleSizes) { ;
__p += '\n      ';

        var customCssClass = '';
        var index = +i;
        if (hasCustomLabels) {
          customCssClass = (labels[0] !== '' && index === 0) ? '' : 'Bubble-item--custom';
        }
      ;
__p += '\n      <li class="js-bubbleItem Bubble-item ' +
__e( customCssClass ) +
'">\n        ';
 if (!hasCustomLabels || (hasCustomLabels && index === 0)) {;
__p += '\n          <div class="Bubble-label CDB-Text CDB-Size-small" style="height: ' +
__e( bubbleSizes[i] ) +
'%;">\n            <div class="Bubble-numbersItem CDB-Text CDB-Size-small">' +
((__t = ( formatter.formatNumber(labels[i]) )) == null ? '' : __t) +
'</div>\n          </div>\n        ';
 } ;
__p += '\n        <div class="Bubble-circle">\n          <span class="Bubble-itemCircle" style="height: ' +
__e( bubbleSizes[i] ) +
'%; width: ' +
__e( bubbleSizes[i] ) +
'%; ' +
__e( fillColor ? 'opacity:1; background-color:' + fillColor + ';': '') +
'" ></span>\n        </div>\n      </li>\n    ';
 } ;
__p += '\n\n    ';
 if (labels[labels.length - 1]) { ;
__p += '\n      <li class="js-bubbleItem Bubble-item">\n        <div class="Bubble-label CDB-Text CDB-Size-small" style="height: 0%;">\n          <div class="Bubble-numbersItem CDB-Text CDB-Size-small">' +
((__t = ( formatter.formatNumber(labels[labels.length - 1]) )) == null ? '' : __t) +
'</div>\n        </div>\n      </li>\n    ';
 } ;
__p += '\n  </ul>\n\n  ';
 if (!hasCustomLabels) { ;
__p += '\n    <p class="Bubble-average CDB-Text CDB-Size-small u-altTextColor ';
 if (hasCustomLabels) { ;
__p += 'Bubble-average--custom';
 } ;
__p += '" style="bottom: ' +
__e( avgSize ) +
'%;">\n      AVG: ' +
((__t = ( formatter.formatNumber(avgLabel) )) == null ? '' : __t) +
'\n    </p>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/bubble/placeholder-template.tpl":
/*!*******************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/bubble/placeholder-template.tpl ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Legend-placeholder">\n  <div class="CDB-Loader is-visible Legend-loading"></div>\n  <div class="Legend-placeholderInner">\n    <svg width="191px" height="55px" viewBox="0 3 191 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="Graph" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 3.000000)">\n        <g id="Group-2" fill="#F9F9F9">\n          <g id="Group-3">\n            <rect id="Rectangle-3147" x="0" y="45" width="72" height="9"></rect>\n            <rect id="Rectangle-Copy-2" x="0" y="2" width="78" height="9"></rect>\n            <rect id="Rectangle-Copy-3" x="0" y="24" width="48" height="9"></rect>\n            <ellipse id="Oval-1585" cx="164" cy="27" rx="27" ry="27"></ellipse>\n            <ellipse id="Oval-1585" stroke="#FFFFFF" cx="164" cy="33" rx="21" ry="21"></ellipse>\n            <circle id="Oval-1585" stroke="#FFFFFF" cx="164" cy="45" r="9"></circle>\n          </g>\n        </g>\n        <g id="Group" transform="translate(137.000000, 0.000000)"></g>\n      </g>\n    </svg>\n  </div>\n</div>\n\n\n\n\n\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/categories/legend-template.tpl":
/*!******************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/categories/legend-template.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (categories && categories.length > 0) { ;
__p += '\n  <ul>\n    ';
 for(var i in categories) { ;
__p += '\n      <li class="Legend-categoryListItem u-flex u-alignCenter">\n        ';
 if (categories[i].icon) { ;
__p += '\n          <span class="Legend-categoryIcon js-image-container" data-icon="' +
((__t = ( categories[i].icon )) == null ? '' : __t) +
'" data-color="' +
((__t = ( categories[i].color )) == null ? '' : __t) +
'"></span>\n        ';
 } else if (categories[i].color) { ;
__p += '\n          <span class="Legend-categoryCircle" style="opacity:1; background: ' +
((__t = ( categories[i].color )) == null ? '' : __t) +
';"></span>\n        ';
 } ;
__p += '\n        <p class="Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis" title="' +
((__t = ( categories[i].title )) == null ? '' : __t) +
'">' +
((__t = ( categories[i].title )) == null ? '' : __t) +
'</p>\n      </li>\n    ';
 } ;
__p += '\n  </ul>\n';
 };
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/categories/placeholder-template.tpl":
/*!***********************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/categories/placeholder-template.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Legend-placeholder">\n  <div class="CDB-Loader is-visible Legend-loading"></div>\n  <div class="Legend-placeholderInner">\n    <svg width="191px" height="57px" viewBox="0 0 191 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="Group-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <rect id="Rectangle-3147" fill="#F9F9F9" x="0" y="48" width="72" height="9"></rect>\n        <rect id="Rectangle" fill="#F9F9F9" x="0" y="29" width="78" height="9"></rect>\n        <rect id="Rectangle" fill="#F9F9F9" x="0" y="0" width="117" height="9"></rect>\n        <rect id="Rectangle" fill="#F9F9F9" x="182" y="29" width="9" height="9" rx="4.5"></rect>\n        <rect id="Rectangle-Copy" fill="#F9F9F9" x="182" y="48" width="9" height="9" rx="4.5"></rect>\n      </g>\n  </svg>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/choropleth/legend-template.tpl":
/*!******************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/choropleth/legend-template.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-justifySpace u-bSpace">\n  ';
 if (!hasCustomLabels) { ;
__p += '\n    <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( labels.left )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n    <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( labels.right )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n  ';
 } else { ;
__p += '\n    <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( labels.left )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n    <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( labels.right )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n  ';
 } ;
__p += '\n</div>\n<div class="Legend-choropleth ';
 if (hasCustomLabels) { ;
__p += 'no-average';
 } ;
__p += '" style="opacity:1; background: linear-gradient(90deg ';
 for(var i in colors) { ;
__p += ',' +
((__t = ( colors[i].value )) == null ? '' : __t);
 } ;
__p += ');">\n  ';
 if (!hasCustomLabels) { ;
__p += '\n  <span class="Legend-choroplethAverage CDB-Text CDB-Size-small u-altTextColor" style="opacity:1; left: ' +
__e( avgPercentage ) +
'%;">\n    <span class="Legend-choroplethAverageText">' +
((__t = ( formatter.formatNumber(avg) )) == null ? '' : __t) +
' AVG</span>\n  </span>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/choropleth/placeholder-template.tpl":
/*!***********************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/choropleth/placeholder-template.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Legend-placeholder">\n  <div class="CDB-Loader is-visible Legend-loading"></div>\n  <div class="Legend-placeholderInner">\n    <svg width="192px" height="57px" viewBox="0 0 192 57" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="Graph" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 48.000000)">\n        <rect id="Rectangle-3147" fill="#F9F9F9" x="0" y="0" width="192" height="9" rx="4"></rect>\n      </g>\n      <rect id="Rectangle" stroke="none" fill="#F9F9F9" fill-rule="evenodd" x="0" y="29" width="18" height="9"></rect>\n      <rect id="Rectangle" stroke="none" fill="#F9F9F9" fill-rule="evenodd" x="0" y="0" width="117" height="9"></rect>\n      <rect id="Rectangle" stroke="none" fill="#F9F9F9" fill-rule="evenodd" x="169" y="29" width="23" height="9"></rect>\n    </svg>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/custom-choropleth/legend-template.tpl":
/*!*************************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/custom-choropleth/legend-template.tpl ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-justifySpace u-bSpace--m">\n  ';
 if (hasCustomLabels) { ;
__p += '\n  <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( leftLabel )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n  <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
((__t = ( rightLabel )) == null ? '' : __t) +
' ' +
__e( suffix ) +
'</p>\n  ';
 } else { ;
__p += '\n  <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
__e( suffix ) +
'</p>\n  <p class="CDB-Text CDB-Size-small">' +
__e( prefix ) +
' ' +
__e( suffix ) +
'</p>\n  ';
 } ;
__p += '\n</div>\n<div class="Legend-choropleth" style="opacity:1; background: linear-gradient(90deg ';
 for(var i in colors) { ;
__p += ',' +
((__t = ( colors[i].color )) == null ? '' : __t);
 } ;
__p += ');"></div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/custom/legend-template.tpl":
/*!**************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/custom/legend-template.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (items && items.length > 0) { ;
__p += '\n  <ul>\n    ';
 for(var i in items) { ;
__p += '\n      <li class="Legend-categoryListItem u-flex u-alignCenter">\n        ';
 if (items[i].icon) { ;
__p += '\n          <span class="Legend-categoryIcon js-image-container" data-icon="' +
((__t = ( items[i].icon )) == null ? '' : __t) +
'" data-color="' +
((__t = ( items[i].color )) == null ? '' : __t) +
'"></span>\n        ';
 } else if (items[i].color) { ;
__p += '\n          <span class="Legend-categoryCircle" style="opacity:1; background: ' +
((__t = ( items[i].color )) == null ? '' : __t) +
';"></span>\n        ';
 } ;
__p += '\n        <p class="Legend-categoryTitle CDB-Text CDB-Size-small u-upperCase u-ellipsis" title="' +
((__t = ( items[i].title )) == null ? '' : __t) +
'">' +
((__t = ( items[i].title )) == null ? '' : __t) +
'</p>\n      </li>\n    ';
 } ;
__p += '\n  </ul>\n';
 };
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/layer-legends-template.tpl":
/*!**************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/layer-legends-template.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h2 class="CDB-Text CDB-Size-medium is-semibold u-flex u-alignCenter">\n  ';
 if (showLayerSelector) { ;
__p += '\n  <span class="u-iBlock u-rSpace--m">\n      ';
 if (isLayerVisible) { ;
__p += '\n        <input class="CDB-Checkbox js-toggle-layer" type="checkbox" checked>\n      ';
 } else { ;
__p += '\n        <input class="CDB-Checkbox js-toggle-layer" type="checkbox">\n      ';
 } ;
__p += '\n    <span class="u-iBlock CDB-Checkbox-face"></span>\n  </span>\n  ';
 } ;
__p += '\n  <span class="u-ellipsis">' +
__e( layerName ) +
'</span>\n</h2>\n\n';
 if (showLegends) { ;
__p += '\n<div class="Legends js-legends"></div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/legends/legends-view.tpl":
/*!****************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/legends/legends-view.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Legends-canvasInner js-container"></div>';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/logo.tpl":
/*!************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/logo.tpl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="64px" height="25px" viewBox="0 0 64 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g fill="#AAAAAA">\n      <circle id="Halo" fill-opacity="0.14" cx="51.6129032" cy="12.3870968" r="12.3870968"></circle>\n      <path d="M4.12518194,16.503468 C5.88495484,16.503468 6.90196645,15.7473046 7.65615484,14.7202766 L5.98779871,13.5465304 C5.50786065,14.1221175 5.01649548,14.5058422 4.18231742,14.5058422 C3.06246194,14.5058422 2.27399226,13.5803884 2.27399226,12.3953562 L2.27399226,12.3727841 C2.27399226,11.2216099 3.06246194,10.2735841 4.18231742,10.2735841 C4.9479329,10.2735841 5.47357935,10.6460228 5.93066323,11.1990379 L7.59901935,9.92371747 C6.89053935,8.96440565 5.83924645,8.28724435 4.20517161,8.28724435 C1.7826271,8.28724435 0,10.0930078 0,12.3953562 L0,12.4179282 C0,14.7767067 1.83976258,16.503468 4.12518194,16.503468 L4.12518194,16.503468 Z M11.4304378,16.3454637 L13.7501385,16.3454637 L14.3214933,14.923425 L17.4182365,14.923425 L17.9895914,16.3454637 L20.3664275,16.3454637 L16.9611527,8.38881855 L14.8242856,8.38881855 L11.4304378,16.3454637 Z M14.9728378,13.2192358 L15.8755785,10.9846035 L16.766892,13.2192358 L14.9728378,13.2192358 Z M24.6830829,16.3454637 L26.8999397,16.3454637 L26.8999397,13.9528272 L27.88267,13.9528272 L29.4938907,16.3454637 L32.0421333,16.3454637 L30.1338081,13.5916745 C31.1279655,13.1740917 31.77931,12.3727841 31.77931,11.1538938 L31.77931,11.1313218 C31.77931,10.3525863 31.539341,9.75442715 31.07083,9.29170027 C30.5337565,8.76125726 29.6881513,8.44524866 28.465452,8.44524866 L24.6830829,8.44524866 L24.6830829,16.3454637 Z M26.8999397,12.2373519 L26.8999397,10.3300142 L28.3626081,10.3300142 C29.0939423,10.3300142 29.5624533,10.6460228 29.5624533,11.2780401 L29.5624533,11.3006121 C29.5624533,11.8761992 29.1167965,12.2373519 28.3740352,12.2373519 L26.8999397,12.2373519 Z M38.3928119,16.3454637 L38.3928119,10.3638723 L36.0045487,10.3638723 L36.0045487,8.44524866 L43.009359,8.44524866 L43.009359,10.3638723 L40.6096687,10.3638723 L40.6096687,16.3454637 L38.3928119,16.3454637 Z M51.5612903,16.516129 C49.2523838,16.516129 47.3806452,14.6674983 47.3806452,12.3870968 C47.3806452,10.1066952 49.2523838,8.25806452 51.5612903,8.25806452 C53.8701969,8.25806452 55.7419355,10.1066952 55.7419355,12.3870968 C55.7419355,14.6674983 53.8701969,16.516129 51.5612903,16.516129 Z" id="Logo"></path>\n    </g>\n  </g>\n</svg>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/overlays-container.tpl":
/*!**************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/overlays-container.tpl ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-OverlayContainer"></div>';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/search/search_infowindow_template.tpl":
/*!*****************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/search/search_infowindow_template.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-infowindow CDB-infowindow--light js-infowindow">\n  <div class="CDB-infowindow-container">\n    <div class="CDB-infowindow-inner">\n      <div class="CDB-infowindow-list ">\n        <div class="CDB-infowindow-listItem">\n          <h4 class="CDB-infowindow-title">' +
__e( address ) +
'</h4>\n        </div>\n      </div>\n    </div>\n    <div class="CDB-hook">\n      <div class="CDB-hook-inner">\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/search/search_template.tpl":
/*!******************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/search/search_template.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<form class="js-form CDB-Search-inner">\n  <button type="button" class="CDB-Shape CDB-Search-actionButton js-toggle">\n    <span class="CDB-Shape-magnify is-small"></span>\n  </button>\n  <input type="text" placeholder="Search Location" class="CDB-Search-text js-textInput" value="" />\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/tiles/tiles-template.tpl":
/*!****************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/tiles/tiles-template.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Overlay CDB-Overlay--limits">\n  <button type="button" class="CDB-Shape CDB-Limits-button js-button">\n    <svg width="12px" height="12px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>icon-font_114_Warning</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Artboard-1" transform="translate(-9001.000000, -11000.000000)" fill-rule="nonzero" fill="#636D72">\n          <g id="icon-font_114_Warning" transform="translate(9001.000000, 11000.000000)">\n            <path d="M47.3618699,443.171714 C40.4022689,456.721101 41.0006423,457.65748 56.75075,457.65748 L441.243856,457.65748 C456.985511,457.65748 457.59007,456.716689 450.632737,443.171714 L248.997303,50.6152213 L47.3618699,443.171714 Z M210.115762,31.2931921 C231.589444,-10.5131174 266.489496,-10.3489299 287.878844,31.2931921 L489.747111,424.302981 C511.220794,466.109288 489.302388,500 441.243856,500 L56.75075,500 C8.48945932,500 -13.1418536,465.945101 8.24749422,424.302981 L210.115762,31.2931921 Z M222.781864,372.97244 L222.781864,415.31496 L266.474263,415.31496 L266.474263,372.97244 L222.781864,372.97244 Z M222.781864,203.602361 L222.781864,330.62992 L266.474263,330.62992 L266.474263,203.602361 L222.781864,203.602361 Z" id="Combined-Shape"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </button>\n  <p class="CDB-Limits-text js-text u-ellipsis">\n    ' +
((__t = ( limits )) == null ? '' : __t) +
'\n  </p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/geo/ui/zoom/zoom-template.tpl":
/*!**************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/geo/ui/zoom/zoom-template.tpl ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Overlay">\n  <button class="CDB-Zoom-action CDB-Zoom-action--out js-zoomOut"></button>\n  <div class="CDB-Zoom-info js-zoomInfo">-</div>\n  <button class="CDB-Zoom-action CDB-Zoom-action--in js-zoomIn"></button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/internal-carto.js/src/ui/common/fullscreen/fullscreen-template.tpl":
/*!*****************************************************************************************!*\
  !*** ./node_modules/internal-carto.js/src/ui/common/fullscreen/fullscreen-template.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Overlay">\n  <a href="' +
((__t = ( mapUrl )) == null ? '' : __t) +
'" target="_blank" class="CDB-Fullscreen-link">\n      <div class="CDB-Shape-Arrow is-up"></div>\n      <div class="CDB-Shape-Arrow is-down"></div>\n  </a>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./node_modules/mapnik-reference sync recursive":
/*!********************************************!*\
  !*** ./node_modules/mapnik-reference sync ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/mapnik-reference sync recursive";

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/turbo-carto/package.json":
/*!***********************************************!*\
  !*** ./node_modules/turbo-carto/package.json ***!
  \***********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, contributors, dependencies, description, devDependencies, homepage, license, main, name, repository, scripts, semistandard, version, default */
/***/ (function(module) {

module.exports = {"_args":[["turbo-carto@0.21.1","/cartodb"]],"_from":"turbo-carto@0.21.1","_id":"turbo-carto@0.21.1","_inBundle":false,"_integrity":"sha512-MijaCzgz4cRjKMLaNxhMBq/lw+bb8cs+ZwGsHMAeJ8nTVWN7LY4b5LDBMIyxALmGiRkY8ziglmAoMU+xYnSTMA==","_location":"/turbo-carto","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"turbo-carto@0.21.1","name":"turbo-carto","escapedName":"turbo-carto","rawSpec":"0.21.1","saveSpec":null,"fetchSpec":"0.21.1"},"_requiredBy":["/@carto/carto.js/torque.js","/internal-carto.js/torque.js","/torque.js"],"_resolved":"https://registry.npmjs.org/turbo-carto/-/turbo-carto-0.21.1.tgz","_spec":"0.21.1","_where":"/cartodb","author":{"name":"CartoDB","email":"wadus@cartodb.com","url":"http://cartodb.com/"},"bugs":{"url":"https://github.com/CartoDB/turbo-carto/issues"},"contributors":[{"name":"Raul Ochoa","email":"rochoa@cartodb.com"},{"name":"Daniel García Aubert","email":"dgaubert@carto.com"}],"dependencies":{"cartocolor":"4.0.0","colorbrewer":"1.0.0","debug":"^3.1.0","es6-promise":"3.1.2","postcss":"5.0.19","postcss-value-parser":"3.3.0"},"description":"CartoCSS preprocessor","devDependencies":{"browser-request":"^0.3.3","browserify":"^12.0.1","istanbul":"^0.4.1","jshint":"^2.9.1-rc2","mocha":"^5.2.0","querystring":"^0.2.0","request":"^2.67.0","semistandard":"^13.0.1","semistandard-format":"^3.0.0","yargs":"^3.31.0"},"homepage":"https://github.com/CartoDB/turbo-carto#readme","license":"BSD-3-Clause","main":"src/index.js","name":"turbo-carto","repository":{"type":"git","url":"git+ssh://git@github.com/CartoDB/turbo-carto.git"},"scripts":{"test":"make test-all"},"semistandard":{"globals":["describe","it"],"ignore":["examples/app.js"]},"version":"0.21.1"};

/***/ }),

/***/ 12:
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib/assets/javascripts/dashboard/mobile-apps.js ./assets/stylesheets/mobile_apps/mobile_apps_bars.scss ./assets/stylesheets/mobile_apps/mobile_apps_list.scss ./assets/stylesheets/mobile_apps/mobile_apps_plan.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /cartodb/lib/assets/javascripts/dashboard/mobile-apps.js */"./lib/assets/javascripts/dashboard/mobile-apps.js");
__webpack_require__(/*! /cartodb/assets/stylesheets/mobile_apps/mobile_apps_bars.scss */"./assets/stylesheets/mobile_apps/mobile_apps_bars.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/mobile_apps/mobile_apps_list.scss */"./assets/stylesheets/mobile_apps/mobile_apps_list.scss");
module.exports = __webpack_require__(/*! /cartodb/assets/stylesheets/mobile_apps/mobile_apps_plan.scss */"./assets/stylesheets/mobile_apps/mobile_apps_plan.scss");


/***/ }),

/***/ 4:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=mobile_apps.js.map