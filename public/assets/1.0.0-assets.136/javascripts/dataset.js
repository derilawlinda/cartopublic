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
/******/ 		"dataset": 0
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
/******/ 	deferredModules.push(["./lib/assets/javascripts/builder/dataset.js","common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/assets/javascripts/builder/components/background-importer/error-details.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/background-importer/error-details.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Dialog-header">\n  <div class="Dialog-headerIcon Dialog-headerIcon--negative u-flex u-alignCenter u-justifyCenter">\n    <i class="CDB-IconFont CDB-IconFont-cloud"></i>\n  </div>\n  <h2 class="CDB-Text CDB-Size-large u-bSpace u-errorTextColor">\n    ' +
__e( title ) +
' ';
 if (errorCode) { ;
__p += '(' +
__e( errorCode ) +
')';
 } ;
__p += '\n  </h2>\n  <h3 class="CDB-Text CDB-Size-medium u-secondaryTextColor">\n    ';
 if (itemQueueId) { ;
__p += '\n    ' +
__e( _t('components.background-importer.error-details.dont-panic') ) +
'\n    ';
 } else { ;
__p += '\n    ' +
__e( _t('components.background-importer.error-details.check-errors') ) +
'\n    ';
 } ;
__p += '\n  </h3>\n</div>\n\n<div class="Dialog-body ErrorDetails-body">\n  <ul class="Modal-containerList">\n    ';
 if (httpResponseCode) { ;
__p += '\n      <li class="ErrorDetails-item">\n        <div class="ErrorDetails-itemStep CDB-Text CDB-Size-medium is-semibold u-flex u-alignCenter u-justifyCenter">1</div>\n        <div class="ErrorDetails-itemText">\n          <p class="CDB-Text CDB-Size-medium">\n            ' +
((__t = ( _t('components.background-importer.error-details.remote-server-code', { httpResponseCode: httpResponseCode}) )) == null ? '' : __t) +
' ' +
__e( httpResponseCodeMessage ) +
'\n          </p>\n        </div>\n      </li>\n      <li class="ErrorDetails-item">\n        <div class="ErrorDetails-itemStep CDB-Text CDB-Size-medium is-semibold u-flex u-alignCenter u-justifyCenter">2</div>\n        <div class="ErrorDetails-itemText">\n          <p class="CDB-Text CDB-Size-medium">\n            ' +
__e( _t('components.background-importer.error-details.check-url') ) +
':<br/>\n          </p>\n          <span class=\'CDB-Text CDB-Size-medium ErrorDetails-itemTextStrong\'><a href="' +
__e( originalUrl ) +
'">' +
__e( originalUrl ) +
'</a></span>\n        </div>\n      </li>\n    ';
 } else { ;
__p += '\n      <li class="ErrorDetails-item">\n        <div class="ErrorDetails-itemStep CDB-Text CDB-Size-medium is-semibold u-flex u-alignCenter u-justifyCenter">1</div>\n        <div class="ErrorDetails-itemText">\n          <p class="CDB-Text CDB-Size-medium">\n            ';
 if (text) { ;
__p += '\n            ' +
((__t = ( cdb.core.sanitize.html(text) )) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n            ' +
__e( _t('components.background-importer.error-details.unknown-error') ) +
'\n            ';
 } ;
__p += '\n          </p>\n        </div>\n      </li>\n    ';
 } ;
__p += '\n    ';
 if (itemQueueId) { ;
__p += '\n      <li class="ErrorDetails-item">\n        <div class="ErrorDetails-itemStep CDB-Text CDB-Size-medium is-semibold u-flex u-alignCenter u-justifyCenter">!</div>\n        <div class="ErrorDetails-itemText">\n          <p class="CDB-Text CDB-Size-medium">\n            ' +
((__t = ( _t('components.background-importer.error-details.send-us-the-error-code') )) == null ? '' : __t) +
':<br/>\n          </p>\n          <span class="CDB-Text CDB-Size-medium ErrorDetails-itemTextStrong">' +
__e( itemQueueId ) +
'</span>\n        </div>\n      </li>\n    ';
 } ;
__p += '\n  </ul>\n</div>\n\n\n<div class="Dialog-footer--simple u-inner">\n  <button class="CDB-Button CDB-Button--error u-tSpace--m js-close">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n      ' +
__e( _t('components.background-importer.error-details.close') ) +
'\n    </span>\n  </button>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/background-importer/upgrade-errors.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/background-importer/upgrade-errors.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Dialog-header">\n  <div class="Dialog-headerIcon Dialog-headerIcon--negative u-flex u-alignCenter u-justifyCenter">\n    <i class="CDB-IconFont CDB-IconFont-barometer"></i>\n  </div>\n  <h2 class="CDB-Text CDB-Size-large u-bSpace u-errorTextColor">\n    ' +
__e( _t('components.background-importer.upgrade-errors.' + errorCode + '.title') ) +
'\n  </h2>\n  <h3 class="CDB-Text CDB-Size-medium u-secondaryTextColor">\n    ' +
__e( _t('components.background-importer.upgrade-errors.' + errorCode + '.description') ) +
'\n  </h3>\n</div>\n\n<div class="Dialog-body ErrorDetails-body">\n  <ul class="Modal-containerList">\n    <li class="ErrorDetails-item">\n      <div class="ErrorDetails-itemIcon ErrorDetails-itemIcon--success CDB-Size-big u-flex u-alignCenter u-justifyCenter u-rSpace--xl">\n        <i class="CDB-IconFont CDB-IconFont-rocket"></i>\n      </div>\n      <div class="ErrorDetails-itemText">\n        <p class="CDB-Text CDB-Size-medium">\n          ' +
__e( _t('components.background-importer.upgrade-errors.' + errorCode + '.info') ) +
'\n          ';
 if (showTrial) { ;
__p += '\n            <br/>\n            <a href="' +
((__t = ( upgradeUrl )) == null ? '' : __t) +
'">' +
__e( _t('components.background-importer.free-trial', { days: 14 }) ) +
'</a>\n          ';
 } ;
__p += '\n        </p>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<div class="Dialog-footer--simple u-inner">\n  <a href="' +
__e( upgradeUrl ) +
'" class="CDB-Button CDB-Button--primary u-tSpace--m">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n      ' +
__e( _t('components.background-importer.upgrade-errors.upgrade') ) +
'\n    </span>\n  </a>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/code-mirror/code-mirror-bullet.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/code-mirror/code-mirror-bullet.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<i class="CodeMirror-bullet"></i>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/code-mirror/code-mirror-error.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/code-mirror/code-mirror-error.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="CodeMirror-error">\n  <li class="CodeMirror-errorMessage u-lSpace--xl u-rSpace--xl">\n    ' +
__e( _t('components.codemirror.syntax-error') ) +
'. ' +
__e( _t('components.codemirror.line') ) +
' ' +
__e( line ) +
': <span>' +
__e( message ) +
'</span>\n  </li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/code-mirror/code-mirror-warning.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/code-mirror/code-mirror-warning.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CodeMirror-warning CDB-Text CDB-Size-medium u-flex u-lSpace--xl u-warningTextColor">\n  <div class="CodeMirror-warning-icon__wrapper">\n    <svg class="CodeMirror-warning-icon" width="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>icon-font-114-Warning</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Artboard-1" transform="translate(-9001.000000, -11000.000000)" fill-rule="nonzero" fill="#FEB100">\n        <g id="icon-font-114-Warning" transform="translate(9001.000000, 11000.000000)">\n        <path d="M47.3618699,443.171714 C40.4022689,456.721101 41.0006423,457.65748 56.75075,457.65748 L441.243856,457.65748 C456.985511,457.65748 457.59007,456.716689 450.632737,443.171714 L248.997303,50.6152213 L47.3618699,443.171714 Z M210.115762,31.2931921 C231.589444,-10.5131174 266.489496,-10.3489299 287.878844,31.2931921 L489.747111,424.302981 C511.220794,466.109288 489.302388,500 441.243856,500 L56.75075,500 C8.48945932,500 -13.1418536,465.945101 8.24749422,424.302981 L210.115762,31.2931921 Z M222.781864,372.97244 L222.781864,415.31496 L266.474263,415.31496 L266.474263,372.97244 L222.781864,372.97244 Z M222.781864,203.602361 L222.781864,330.62992 L266.474263,330.62992 L266.474263,203.602361 L222.781864,203.602361 Z" id="Combined-Shape"></path>\n        </g>\n      </g>\n      </g>\n    </svg>\n  </div>\n  <div>' +
((__t = ( _t('editor.data.code-mirror.quota-data-services-warning') )) == null ? '' : __t) +
' ' +
((__t = ( _t('editor.data.code-mirror.quota-data-services-warning-link') )) == null ? '' : __t) +
'</div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/code-mirror/code-mirror.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/code-mirror/code-mirror.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CodeMirror-editor">\n  <textarea class="js-editor">' +
__e( content ) +
'</textarea>\n</div>\n\n<div class="js-warning"></div>\n\n';
 if (tips) { ;
__p += '\n<div class="CodeMirror-console js-console">\n  ' +
__e( tips ) +
'\n  <div class="js-console-error"></div>\n</div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/color-picker/color-picker-template.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/color-picker/color-picker-template.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="colorpicker dropdown-menu">\n  <div class="colorpicker-saturation">\n    <i><b></b></i>\n  </div>\n  <div class="colorpicker-hue">\n    <i class="ColorPicker-ball"></i>\n  </div>\n  <div class="colorpicker-alpha js-alpha">\n    <i class="ColorPicker-ball"></i>\n  </div>\n  <div class="ColorPicker-colorWrapper">\n    <div class="ColorPicker-color colorpicker-color js-color"></div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/color-picker/template.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/color-picker/template.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Editor-boxModalContent">\n  <div class="ColorPicker-pickerWrapper js-colorPicker"></div>\n  <div class="ColorPicker-inputs">\n    <div class="ColorPicker-inputWrapper CDB-Text">\n      <input type="text" class="CDB-Text CDB-InputText ColorPicker-input is-color js-hex" value="' +
__e( hex ) +
'"/>\n      <span class="ColorPicker-inputLabel u-upperCase">HEX</span>\n    </div>\n    <div class="ColorPicker-inputWrapper CDB-Text">\n      <input type="text" class="CDB-Text CDB-InputText ColorPicker-input js-inputColor js-r" value="' +
__e( r ) +
'"/>\n      <span class="ColorPicker-inputLabel u-upperCase">R</span>\n    </div>\n    <div class="ColorPicker-inputWrapper CDB-Text">\n      <input type="text" class="CDB-Text CDB-InputText ColorPicker-input js-inputColor js-g" value="' +
__e( g ) +
'" />\n      <span class="ColorPicker-inputLabel u-upperCase">G</span>\n    </div>\n    <div class="ColorPicker-inputWrapper CDB-Text">\n      <input type="text" class="CDB-Text CDB-InputText ColorPicker-input js-inputColor js-b" value="' +
__e( b ) +
'" />\n      <span class="ColorPicker-inputLabel u-upperCase">B</span>\n    </div>\n    <div class="ColorPicker-inputWrapper CDB-Text">\n      <input type="text" class="CDB-Text CDB-InputText ColorPicker-input js-a';
 if (opacityDisabled) { ;
__p += ' is-disabled';
 } ;
__p += '" value="' +
__e( opacity ) +
'" ';
 if (opacityDisabled) { ;
__p += 'disabled';
 } ;
__p += ' />\n      <span class="ColorPicker-inputLabel u-upperCase">A</span>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-carousel/custom-carousel-item.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-carousel/custom-carousel-item.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button';
 if (className) { ;
__p += ' class="' +
__e( className ) +
'"';
 } ;
__p += '>\n  ' +
((__t = ( template )) == null ? '' : __t) +
'\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-carousel/custom-carousel.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-carousel/custom-carousel.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Carousel-shadow Carousel-shadow--left js-leftShadow"></div>\n<div class="Carousel-shadow Carousel-shadow--right is-visible js-rightShadow"></div>\n<ul class="Carousel-list js-list"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/column-list/column-list-quantification-method-item.tpl":
/*!**********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/column-list/column-list-quantification-method-item.tpl ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-ListDecoration-itemLink u-flex u-justifySpace u-alignCenter u-actionTextColor ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '">\n  ' +
__e( _t('form-components.editors.fill.quantification.methods.' + name) ) +
'\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/column-list/column-list-view.tpl":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/column-list/column-list-view.tpl ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (headerTitle) { ;
__p += '\n  <div class="CDB-Box-modalHeader">\n    <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n      <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n        <button class="u-actionTextColor js-back u-rSpace">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n        ' +
__e( headerTitle) +
'\n      </li>\n    </ul>\n  </div>\n  ';
 } ;
__p += '\n    <div class="js-content"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-action.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-action.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( label );

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-add.tpl":
/*!***********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-add.tpl ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-ListDecoration-item CustomList-item js-listItem">\n  <button type="button" class="CDB-ListDecoration-itemLink CustomList--full js-add-custom-value u-ellipsis" data-val="' +
__e( query ) +
'" title="' +
__e( query ) +
'">\n    <p class="CDB-Text CDB-FontSize-small u-altTextColor">' +
__e( _t('components.custom-list.add-custom-result') ) +
'</p>\n    “' +
__e( query ) +
'”\n  </button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-empty.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-empty.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CustomList-message">\n  <p class="CustomList-messageText CDB-Text CDB-Size-medium u-secondaryTextColor">\n    ';
 if (query && query.length) { ;
__p += '\n      ' +
__e( _t('components.custom-list.no-results', { typeLabel: typeLabel, query: query }) ) +
'\n    ';
 } else { ;
__p += '\n      ' +
__e( _t('components.custom-list.no-items', { typeLabel: typeLabel }) ) +
'\n    ';
 } ;
__p += '\n  </p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-header.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-header.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <div class="CDB-Box-modalHeaderItem js-header u-alignCenter u-justifySpace">\n    <div class="u-flex js-actions"></div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-item-with-checkbox.tpl":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-item-with-checkbox.tpl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-ListDecoration-itemLink u-ellipsis\n  ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '\n  ';
 if (isDestructive) { ;
__p += '\n  u-errorTextColor\n  ';
 } else if (isDisabled) { ;
__p += '\n  u-hintTextColor\n  ';
 } else { ;
__p += '\n  u-actionTextColor\n  ';
 } ;
__p += '\n  " title="' +
__e( name ) +
'">\n\n  <div class="u-iBlock u-rSpace">\n    <input class="CDB-Checkbox js-input" type="checkbox" name="" value="" ';
 if (isSelected) { ;
__p += 'checked';
 } ;
__p += ' ';
 if (isDisabled) { ;
__p += 'disabled';
 } ;
__p += ' />\n    <span class="u-iBlock CDB-Checkbox-face"></span>\n  </div>\n  ' +
__e( name ) +
'\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-item.tpl":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-item.tpl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-ListDecoration-itemLink u-ellipsis\n    ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '\n    ';
 if (isDestructive) { ;
__p += '\n      u-errorTextColor\n    ';
 } else if (isDisabled) { ;
__p += '\n      u-hintTextColor\n    ';
 } else { ;
__p += '\n      u-actionTextColor\n    ';
 } ;
__p += '\n  " title="' +
__e( name ) +
'">\n  ' +
__e( name ) +
'\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list-search.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list-search.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex">\n  <input type="text" name="text" autocomplete="off" value="' +
__e( query ) +
'" placeholder="' +
__e( searchPlaceholder ) +
'" class="CDB-InputTextPlain CDB-Text js-search">\n  <button type="button" class="u-lSpace--xl u-transparent js-clear">\n    <div class="CDB-Shape">\n      <div class="CDB-Shape-close is-blue is-large"></div>\n    </div>\n  </button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/custom-list/custom-list.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/custom-list/custom-list.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul class="CustomList-list js-list"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/error/error.tpl":
/*!*******************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/error/error.tpl ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="LayoutIcon LayoutIcon--negative">\n  <i class="CDB-IconFont CDB-IconFont-cockroach"></i>\n</div>\n<h3 class="CDB-Text CDB-Size-large u-mainTextColor u-errorTextColor u-bSpace--m u-tSpace-xl">' +
__e( title ) +
'</h3>\n<p class="CDB-Text CDB-Size-medium u-altTextColor">' +
((__t = ( desc )) == null ? '' : __t) +
'</p>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/data-observatory-measurement-item.tpl":
/*!***********************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/data-observatory-measurement-item.tpl ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (typeof isLoading != 'undefined' && isLoading) { ;
__p += '\n  <div class="u-flex">\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n    <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n  </div>\n';
 } else { ;
__p += '\n  ' +
__e( label ) +
'\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/data-observatory-measurements.tpl":
/*!*******************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/data-observatory-measurements.tpl ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-InputText CDB-Text is-cursor js-button u-ellipsis\n  ';
 if (isDisabled) { ;
__p += ' is-disabled ';
 } ;
__p += '\n  ';
 if (!label) { ;
__p += ' is-empty ';
 } ;
__p += '\n  ';
 if (isNull) { ;
__p += ' is-empty ';
 } ;
__p += '"\n  tabindex="0"\n  title="' +
__e( title ) +
'">\n  ';
 if (isLoading) { ;
__p += '\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark u-iBlock">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n    <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n  ';
 } else { ;
__p += '\n    ' +
__e( label ) +
'\n  ';
 } ;
__p += '\n</div>\n\n<div class="js-license CDB-Text CDB-FontSize-small u-altTextColor u-tSpace u-bSpace u-isHidden u-flex">\n  <a href="https://cartodb.github.io/bigmetadata/licenses.html" target="_blank">\n    <span class="u-tSpace u-bSpace DataObservatory-license"></span>\n  </a>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/filter-list-item.tpl":
/*!******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/filter-list-item.tpl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-ListDecoration-itemLink u-actionTextColor\n  ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '\n  " title="' +
((__t = ( name )) == null ? '' : __t) +
'">\n  <div class="u-flex">\n    <div class="u-iBlock u-rSpace--m">\n      <input class="CDB-Checkbox js-input" type="checkbox" name="" value="" ';
 if (isSelected) { ;
__p += 'checked';
 } ;
__p += ' ';
 if (isDisabled) { ;
__p += 'disabled';
 } ;
__p += ' />\n      <span class="u-iBlock CDB-Checkbox-face"></span>\n    </div>\n    <div>\n      <div class="u-bSpace">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n      <div class="CDB-Size-small u-altTextColor">' +
__e( description ) +
'</div>\n    </div>\n  </div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/filter-list-view.tpl":
/*!******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/filter-list-view.tpl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <button class="u-actionTextColor js-back u-rSpace">\n        <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n      </button>\n      ' +
__e( headerTitle) +
'\n    </li>\n  </ul>\n</div>\n<div class="js-content"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/list-view-states.tpl":
/*!******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/list-view-states.tpl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (status === 'fetching') { ;
__p += '\n  <div class="InputColorCategory-loader js-loader">\n    <div class="CDB-LoaderIcon is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n  </div>\n';
 } else if (status === 'error') { ;
__p += '\n  <div class="u-flex u-alignCenter u-justifyCenter CDB-Text CDB-Size-medium u-bSpace--m u-tSpace--m u-errorTextColor">' +
__e( _t('components.backbone-forms.data-observatory.dropdown.error', {
    type: type
  }) ) +
'</div>\n';
 } ;


}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurement-list-item.tpl":
/*!***********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurement-list-item.tpl ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-ListDecoration-itemLink u-actionTextColor\n    ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '\n  " title="' +
__e( name ) +
'">\n  <div class="u-bSpace">' +
__e( name ) +
'</div>\n  <div class="CDB-Size-small u-altTextColor DataObservatory-description">' +
__e( description ) +
'</div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-count.tpl":
/*!********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-count.tpl ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="DataObservatory-count CDB-Text CDB-Size-small Color-ThirdBackground">\n    ' +
__e( items ) +
'\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-list.tpl":
/*!*******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-list.tpl ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-search"></div>\n<div class="js-count"></div>\n<div class="js-list"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-search.tpl":
/*!*********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/data-observatory-measurements/measurements-search.tpl ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeaderItem">\n  <div  class="u-flex u-grow">\n    <div class="u-flex u-grow">\n      <input type="text" name="text" autocomplete="off" placeholder="' +
__e( _t('analyses.data-observatory-measure.search-by-name') ) +
'" class="CDB-InputTextPlain CDB-Text js-input-search">\n    </div>\n\n    <div>\n      <button class="CDB-Text CDB-Size-medium u-actionTextColor js-filters u-rSpace--m">' +
__e( label ) +
'</button>\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/datetime/datetime.tpl":
/*!*************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/datetime/datetime.tpl ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-InputText\n  ';
 if (!value) { ;
__p += ' is-empty ';
 } ;
__p += '\n  u-txt-left js-input">' +
__e( value ? value : 'null' ) +
'</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/enabler-editor/enabler-editor.tpl":
/*!*************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/enabler-editor/enabler-editor.tpl ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex Editor-checkerInput CDB-Text CDB-Size-medium u-rSpace--xl">\n  <input class="CDB-Checkbox js-check" type="checkbox" id="' +
__e( id ) +
'" name="" value="" ';
 if (isDisabled) { ;
__p += 'disabled';
 } ;
__p += ' ';
 if (isChecked) { ;
__p += 'checked';
 } ;
__p += '>\n  <span class="CDB-Checkbox-face u-rSpace--m"></span>\n  <label class="CDB-Text CDB-Size-small u-ellipsis u-upperCase is-semibold u-flex u-alignCenter Editor-formLabel" for="' +
__e( id ) +
'">\n    <span class="u-ellipsis ';
 if (help) { ;
__p += ' js-help is-underlined';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '  title="' +
__e( label ) +
'">' +
__e( label ) +
'</span>\n  </label>\n</div>\n<div class="Editor-checkerComponent js-editor"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/enabler/enabler-reversed.tpl":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/enabler/enabler-reversed.tpl ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<label class="CDB-Legend u-upperCase CDB-Text is-semibold CDB-Size-small">\n  <div class="u-flex u-alignCenter">\n    <div class="u-iBlock u-rSpace--m">\n      <input class="CDB-Checkbox js-input" type="checkbox" name="" value="" ';
 if (checked) { ;
__p += 'checked';
 } ;
__p += ' ';
 if (disabled) { ;
__p += 'disabled';
 } ;
__p += '>\n      <span class="u-iBlock CDB-Checkbox-face"></span>\n    </div>\n    <span class="';
 if (help) { ;
__p += ' js-help is-underlined';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += ' >' +
__e( label ) +
'</span>\n  </div>\n</label>\n<div class="Editor-checkerComponent js-editor"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/enabler/enabler.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/enabler/enabler.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<label class="CDB-Legend u-upperCase CDB-Text is-semibold CDB-Size-small">\n  <div class="u-flex u-alignCenter">\n    <div class="u-iBlock u-rSpace--m">\n      <input class="CDB-Checkbox js-input" type="checkbox" name="" value="" ';
 if (checked) { ;
__p += 'checked';
 } ;
__p += ' ';
 if (disabled) { ;
__p += 'disabled';
 } ;
__p += '>\n      <span class="u-iBlock CDB-Checkbox-face"></span>\n    </div>\n    <span class="';
 if (help) { ;
__p += ' js-help is-underlined';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += ' >' +
__e( title ) +
'</span>\n  </div>\n</label>\n<div class="CDB-Text CDB-Size-medium Editor-formInput js-editor"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-color-by-value.tpl":
/*!**********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-color-by-value.tpl ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="Editor-fillContainer Editor-fillContainer--ByValue ';
 if (help) { ;
__p += 'js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  ';
 if (_.isArray(value)) { ;
__p += '\n    <span class="Editor-fillContainer--Column u-ellipsis">\n      ' +
__e( attribute ) +
'\n    </span>\n    <span class="Editor-fillContainer--ColorBarContainer ColorBarContainer">\n      <span class="ColorBar ColorBar-gradient" style="' +
__e( colorBar ) +
'"></span>\n    </span>\n  ';
 } else { ;
__p += '\n    <span class="u-altTextColor">' +
__e( _t('form-components.editors.style.select-by-column') ) +
'</span>\n  ';
 } ;
__p += '\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-color-fixed.tpl":
/*!*******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-color-fixed.tpl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="Editor-fillContainer u-altTextColor ';
 if (help) { ;
__p += 'js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  ';
 if (value) { ;
__p += '\n  <ul class="ColorBarContainer">\n    <li class="ColorBar" style="background-color: ' +
__e( value ) +
'"></li>\n  </ul>\n  ';
 } else { ;
__p += '\n      ' +
__e( _t('form-components.editors.fill.input-color.select-color') ) +
'\n  ';
 };
__p += '\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-image.tpl":
/*!*************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/fill-color/inputs/input-image.tpl ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (image && !isCustomMarker) { ;
__p += '\n<button type="button" class="Editor-fillImage ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  <div class="IconContainer js-image-container"></div>\n</button>\n';
 } ;
__p += '\n\n';
 if (!image || isCustomMarker) { ;
__p += '\n<button type="button" class="Editor-fillImage ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  <div class=\'CDB-Text CDB-FontSize-small u-altTextColor is-semibold u-upperCase\'>' +
((__t = ( _t('form-components.editors.fill.input-color.img') )) == null ? '' : __t) +
'</div>\n</button>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/fill/fill-tab-pane.tpl":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/fill/fill-tab-pane.tpl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Editor-boxModalHeader">\n  <nav class="CDB-NavMenu">\n    <ul class="CDB-NavMenu-Inner CDB-NavMenu-inner--no-margin CDB-NavMenu-inner--is-dropdown CDB-Text is-semibold CDB-Size-medium js-menu"></ul>\n  </nav>\n</div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-list-view-states.tpl":
/*!*****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-list-view-states.tpl ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (status === 'fetching') { ;
__p += '\n  <div class="InputColorCategory-loader js-loader">\n    <div class="CDB-LoaderIcon is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n  </div>\n';
 } else if (status === 'error') { ;
__p += '\n  <div class="u-flex u-alignCenter u-justifyCenter CDB-Text CDB-Size-medium u-bSpace--m u-tSpace--m u-errorTextColor">' +
__e( _t('components.backbone-forms.data-observatory.dropdown.error', {
    type: type
  }) ) +
'</div>\n';
 } else if (status === 'empty') { ;
__p += '\n  <div class="u-flex u-alignCenter u-justifyCenter CDB-Text CDB-Size-medium u-bSpace--m u-tSpace--m">' +
__e( _t('components.backbone-forms.lazy-select.empty', {
    type: type
  }) ) +
'</div>\n';
 } ;


}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-list.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-list.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-search"></div>\n<div class="js-list"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-search.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-search.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeaderItem">\n  <div  class="u-flex u-grow">\n    <div class="u-flex u-grow">\n      <input type="text" name="text" autocomplete="off" placeholder="' +
__e( _t('components.backbone-forms.lazy-select.search') ) +
'" class="CDB-InputTextPlain CDB-Text js-input-search">\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-select-item.tpl":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-select-item.tpl ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (typeof isLoading != 'undefined' && isLoading) { ;
__p += '\n  <div class="u-flex">\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n    <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n  </div>\n';
 } else { ;
__p += '\n  ' +
__e( label ) +
'\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-select.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/lazy-select/lazy-select.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-InputText CDB-Text is-cursor js-button u-ellipsis\n  ';
 if (isDisabled) { ;
__p += ' is-disabled ';
 } ;
__p += '\n  ';
 if (!label) { ;
__p += ' is-empty ';
 } ;
__p += '\n  ';
 if (isNull) { ;
__p += ' is-empty ';
 } ;
__p += '"\n  tabindex="0"\n  title="' +
__e( title ) +
'">\n    ';
 if (isEmpty && isNull) { ;
__p += '\n      ' +
__e( _t('components.backbone-forms.select.empty') ) +
'\n    ';
 } else { ;
__p += '\n      ' +
__e( label ) +
'\n    ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/node-dataset/node-dataset-item.tpl":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/node-dataset/node-dataset-item.tpl ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-ListDecoration-itemLink u-ellipsis u-actionTextColor" title="' +
__e( val ) +
'">\n  ';
 if (typeof type != 'undefined' && type === 'node') { ;
__p += '\n    <div class="u-flex u-alignCenter">\n      <span class="CDB-Text CDB-Size-small is-semibold u-bSpace--s u-upperCase" style="color: ' +
__e( color ) +
';">\n        ' +
__e( val ) +
'\n      </span>\n\n      ';
 if (!isSourceType) { ;
__p += '\n        <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( color ) +
';">\n          <i class="CDB-IconFont CDB-Size-small CDB-IconFont-ray"></i>\n        </span>\n      ';
 } ;
__p += '\n\n      <span class="CDB-Text CDB-Size-medium u-lSpace">\n        ' +
((__t = ( nodeTitle )) == null ? '' : __t) +
'\n      </span>\n\n      <span class="CDB-Text CDB-Size-medium u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n        ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n      </span>\n    </div>\n  ';
 } else { ;
__p += '\n    ' +
__e( val ) +
'\n  ';
 } ;
__p += '\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/node-dataset/node-dataset-selected.tpl":
/*!******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/node-dataset/node-dataset-selected.tpl ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (typeof isLoading != 'undefined' && isLoading) { ;
__p += '\n  <div class="u-flex">\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n    <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n  </div>\n';
 } else { ;
__p += '\n  ';
 if (typeof type != 'undefined' && type === 'node') { ;
__p += '\n    <div class="u-flex u-alignCenter">\n      <span class="CDB-Text CDB-Size-small is-semibold u-bSpace--s u-upperCase" style="color: ' +
__e( color ) +
';">\n        ' +
__e( val ) +
'\n      </span>\n\n      ';
 if (!isSourceType) { ;
__p += '\n        <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( color ) +
';">\n          <i class="CDB-IconFont CDB-Size-small CDB-IconFont-ray"></i>\n        </span>\n      ';
 } ;
__p += '\n\n      <span class="CDB-Text CDB-Size-medium u-lSpace">\n        ' +
((__t = ( nodeTitle )) == null ? '' : __t) +
'\n      </span>\n\n      <span class="CDB-Text CDB-Size-medium u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n        ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n      </span>\n    </div>\n  ';
 } else { ;
__p += '\n    ' +
__e( label ) +
'\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/number/number.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/number/number.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (hasSlider) { ;
__p += '\n  <li class="CDB-OptionInput-item CDB-OptionInput-item--noSeparator">\n    <div class="UISlider js-slider"></div>\n  </li>\n';
 } ;
__p += '\n<li class="CDB-OptionInput-item">\n  <input type="text" class="CDB-InputText ';
 if (isFormatted) { ;
__p += 'is-number';
 } ;
__p += ' ';
 if (isDisabled) { ;
__p += 'is-disabled';
 } ;
__p += ' js-input ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (isDisabled) { ;
__p += 'readonly';
 } ;
__p += ' value="' +
__e( value ) +
'" placeholder="' +
__e( placeholder ) +
'" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += ' />\n</li>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/operators/operators-list-count.tpl":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/operators/operators-list-count.tpl ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="CDB-Text CDB-Size-medium u-altTextColor Editor-dropDownInfoText">\n  ' +
__e( _t('components.backbone-forms.operators.count-message') ) +
'\n</p>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/operators/operators-list.tpl":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/operators/operators-list.tpl ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="Editor-dropdownCalculations CDB-Text is-semibold">\n  <li class="Editor-dropdownCalculationsElement CDB-Fieldset">\n    <input class="CDB-Radio" type="radio" name="operator" value="count" ';
 if (operator === 'count') { ;
__p += 'checked';
 } ;
__p += '>\n    <span class="u-iBlock CDB-Radio-face"></span>\n    <label class="u-iBlock u-lSpace">' +
__e( _t('operators.count') ) +
'</label>\n  </li>\n  <li class="Editor-dropdownCalculationsElement CDB-Fieldset">\n    <input class="CDB-Radio" type="radio" name="operator" value="sum" ';
 if (operator === 'sum') { ;
__p += 'checked';
 } ;
__p += '>\n    <span class="u-iBlock CDB-Radio-face"></span>\n    <label class="u-iBlock u-lSpace">' +
__e( _t('operators.sum') ) +
'</label>\n  </li>\n  <li class="Editor-dropdownCalculationsElement CDB-Fieldset">\n    <input class="CDB-Radio" type="radio" name="operator" value="avg" ';
 if (operator === 'avg') { ;
__p += 'checked';
 } ;
__p += '>\n    <span class="u-iBlock CDB-Radio-face"></span>\n    <label class="u-iBlock u-lSpace">' +
__e( _t('operators.avg') ) +
'</label>\n  </li>\n  <li class="Editor-dropdownCalculationsElement CDB-Fieldset">\n    <input class="CDB-Radio" type="radio" name="operator" value="max" ';
 if (operator === 'max') { ;
__p += 'checked';
 } ;
__p += '>\n    <span class="u-iBlock CDB-Radio-face"></span>\n    <label class="u-iBlock u-lSpace">' +
__e( _t('operators.max') ) +
'</label>\n  </li>\n  <li class="Editor-dropdownCalculationsElement CDB-Fieldset">\n    <input class="CDB-Radio" type="radio" name="operator" value="min" ';
 if (operator === 'min') { ;
__p += 'checked';
 } ;
__p += '>\n    <span class="u-iBlock CDB-Radio-face"></span>\n    <label class="u-iBlock u-lSpace">' +
__e( _t('operators.min') ) +
'</label>\n  </li>\n</ul>\n<div class="js-list"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/operators/operators.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/operators/operators.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-InputText CDB-Text is-cursor js-button u-ellipsis\n  ';
 if (disabled) { ;
__p += ' is-disabled ';
 } ;
__p += '\n  ';
 if (!name) { ;
__p += ' is-empty ';
 } ;
__p += '\n  ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '"\n  ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '\n  tabindex="0">\n  ' +
__e( name || _t('components.backbone-forms.select.placeholder', { keyAttr: keyAttr }) ) +
'\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/radio/radio.tpl":
/*!*******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/radio/radio.tpl ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(items, function(item, index) { ;
__p += '\n  <li class="u-flex u-alignCenter ' +
__e( (index === (items.length - 1)) ? '' : 'u-rSpace--xl' ) +
'">\n    <input type="radio" class="CDB-Radio u-iBlock';
 if (item.className) { ;
__p += ' ' +
__e( item.className ) +
' ';
 } ;
__p += '"\n    name="' +
__e( item.name ) +
'" value="' +
__e( item.value ) +
'" id="' +
__e( item.id ) +
'-' +
__e( index ) +
'"\n        ';
 if (item.selected) { ;
__p += '\n          checked="checked"\n        ';
 } else if (item.disabled) { ;
__p += '\n          disabled="disabled"\n        ';
 } ;
__p += '\n      />\n    <span class="u-rSpace CDB-Radio-face"></span>\n      ';
 if (item.help) { ;
__p += '\n        <span class="js-help is-underlined u-lSpace" data-tooltip="' +
__e( item.help ) +
'">\n      ';
 } ;
__p += '\n      <label for="' +
__e( item.id ) +
'-' +
__e( index ) +
'">' +
__e( item.label ) +
'</label>\n      ';
 if (item.help) { ;
__p += '\n        </span>\n      ';
 } ;
__p += '\n  </li>\n';
 }); ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/select/select-item.tpl":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/select/select-item.tpl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (typeof isLoading != 'undefined' && isLoading) { ;
__p += '\n  <div class="u-flex">\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n    <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n  </div>\n';
 } else { ;
__p += '\n  ' +
__e( label ) +
'\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/select/select-list-view-states.tpl":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/select/select-list-view-states.tpl ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (status === 'fetching') { ;
__p += '\n  <div class="InputColorCategory-loader CDB-Box-modal InputColorCategory-loader">\n    <div class="CDB-LoaderIcon is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n  </div>\n';
 } else if (status === 'error') { ;
__p += '\n  <div class="u-flex u-alignCenter u-justifyCenter CDB-Text CDB-Size-medium u-bSpace--m u-tSpace--m u-errorTextColor">' +
__e( _t('components.backbone-forms.select.error', {
    type: type
  }) ) +
'</div>\n';
 } ;


}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/select/select.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/select/select.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-InputText CDB-Text is-cursor js-button u-ellipsis\n  ';
 if (isDisabled) { ;
__p += ' is-disabled ';
 } ;
__p += '\n  ';
 if (!label) { ;
__p += ' is-empty ';
 } ;
__p += '\n  ';
 if (isNull) { ;
__p += ' is-empty ';
 } ;
__p += '\n  ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '"\n  ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '\n  tabindex="0">\n  ';
 if (isLoading) { ;
__p += '\n    <div class="CDB-LoaderIcon CDB-LoaderIcon--small is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n      <span class="u-lSpace u-secondaryTextColor">' +
__e( _t('components.backbone-forms.select.loading') ) +
'</span>\n    </div>\n  ';
 } else { ;
__p += '\n    ';
 if (isEmpty && isNull) { ;
__p += '\n      ' +
__e( _t('components.backbone-forms.select.empty') ) +
'\n    ';
 } else { ;
__p += '\n      ' +
__e( label ) +
'\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/size/size-by-value-content-view.tpl":
/*!***************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/size/size-by-value-content-view.tpl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="InputColor-modalHeader CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <div class="u-flex u-alignStart u-ellipsis">\n        <button class="u-rSpace u-actionTextColor js-back">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n        <div class="u-ellipsis test-attribute">\n          ' +
__e( attribute ) +
'\n        </div>\n      </div>\n    </li>\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="u-flex u-justifySpace">\n        <li class="u-flex test-bins">\n          ' +
__e( bins ) +
' ' +
__e( _t('form-components.editors.fill.input-ramp.buckets', { smart_count: bins }) ) +
'\n          <button class="CDB-Shape u-lSpace js-bins">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n        <li class="u-flex test-quantification">\n          ' +
__e( _t('form-components.editors.fill.quantification.methods.' + quantification) ) +
'\n          <button class="CDB-Shape u-lSpace js-quantification">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/size/size-by-value-view.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/size/size-by-value-view.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-InputText CDB-Text is-cursor js-button u-ellipsis ';
 if (!columnSelected) { ;
__p += ' u-altTextColor ';
 } ;
__p += '" tabindex="0">\n    <ul class="Form-StyleByValue--column CDB-OptionInput-container CDB-OptionInput-container--border">\n        <li class="u-ellipsis by-column-name">\n            ' +
__e( label ) +
'\n        </li>\n    ';
 if (rangeSelected) { ;
__p += '\n        <li class="by-column-range">\n            ' +
__e( range ) +
'\n        </li>\n    ';
 } ;
__p += '\n    </ul>\n</div>\n\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/slider/slider.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/slider/slider.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<input\n  class="js-slider"\n  type="range"\n  min="' +
__e( min ) +
'"\n  max="' +
__e( max ) +
'"\n  data-orientation="' +
__e( orientation ) +
'"\n  ';
 if (disabled) { ;
__p += '\n    disabled="true"\n  ';
 } ;
__p += '\n  value="' +
__e( value ) +
'"\n>\n<div class="rangeslider-ticks js-ticks"></div>\n<div class="rangeslider-label CDB-Text CDB-Size-medium js-label"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/taglist/taglist.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/taglist/taglist.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul class="Form-tagsList js-tagsList"></ul>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/editors/toggle/toggle.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/editors/toggle/toggle.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(items, function(item, index) { ;
__p += '\n  ';
 if (item.selected) { ;
__p += '\n    <li class="u-tSpace">\n      <input type="radio" class="Editor-toggleRadio" name="' +
((__t = ( item.name )) == null ? '' : __t) +
'" value="' +
__e( item.value ) +
'" id="' +
((__t = ( item.id )) == null ? '' : __t) +
'" checked="checked" />\n      ';
 if (item.help) { ;
__p += '<p class="Editor-toggleHelp CDB-Text CDB-Size-small u-altTextColor">' +
((__t = ( item.help )) == null ? '' : __t) +
'</p>';
 } ;
__p += '\n    </li>\n  ';
 } else { ;
__p += '\n    <li class="u-tSpace u-txt-right">\n      <input type="radio" name="' +
((__t = ( item.name )) == null ? '' : __t) +
'" value="' +
__e( item.value ) +
'" id="' +
((__t = ( item.id )) == null ? '' : __t) +
'" />\n      <label class="u-upperCase u-actionTextColor CDB-Text is-semibold CDB-Size-small u-iBlock" for="' +
((__t = ( item.id )) == null ? '' : __t) +
'">';
 if (item.labelHTML){ ;
__p +=
((__t = ( item.labelHTML )) == null ? '' : __t);
 }else{ ;
__p +=
__e( item.label );
 } ;
__p += '</label>\n    </li>\n  ';
 } ;
__p += '\n';
 }); ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/form-components/field.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/form-components/field.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Text Editor-formInner';
 if (type){ ;
__p += ' Editor-formInner--' +
__e( type );
 } ;
__p += '">\n  ';
 if (title) { ;
__p += '\n    <label class="CDB-Legend ';
 if (editorType){ ;
__p += ' CDB-Legend--' +
__e( editorType );
 } ;
__p += ' u-upperCase CDB-Text is-semibold CDB-Size-small u-rSpace--m" for="' +
__e( editorId ) +
'" title="' +
__e( title ) +
'">\n      <div class="u-ellipsis ';
 if (help) { ;
__p += 'Editor-formHelp';
 } ;
__p += '">\n        <span class="';
 if (help) { ;
__p += ' js-help is-underlined';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += ' >' +
__e( title ) +
'</span>\n      </div>\n    </label>\n  ';
 } ;
__p += '\n  <div class="Editor-formInput u-flex u-alignCenter" data-editor>\n    ';
 if (isCopyButtonEnabled) { ;
__p += '\n      <button type="button" class="Share-copy CDB-Button CDB-Button--small js-copy" data-clipboard-target="#' +
__e( editorId ) +
'">\n        <span class="CDB-Button-Text CDB-Text CDB-Size-small u-actionTextColor">' +
__e( _t('components.backbone-forms.copy-button') ) +
'</span>\n      </button>\n    ';
 } ;
__p += '\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates sync \\.tpl$":
/*!*******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates sync nonrecursive \.tpl$ ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-feature-line.tpl": "./lib/assets/javascripts/builder/components/icon/templates/add-feature-line.tpl",
	"./add-feature-point.tpl": "./lib/assets/javascripts/builder/components/icon/templates/add-feature-point.tpl",
	"./add-feature-polygon.tpl": "./lib/assets/javascripts/builder/components/icon/templates/add-feature-polygon.tpl",
	"./plus.tpl": "./lib/assets/javascripts/builder/components/icon/templates/plus.tpl",
	"./warning.tpl": "./lib/assets/javascripts/builder/components/icon/templates/warning.tpl"
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
webpackContext.id = "./lib/assets/javascripts/builder/components/icon/templates sync \\.tpl$";

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates/add-feature-line.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates/add-feature-line.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Lines" fill="#1785FB">\n            <path d="M11.6198875,4.92329838 L4.92351677,11.6196692 C4.97280083,11.7390295 5,11.8705079 5,12.0093689 L5,13.9906311 C5,14.5480902 4.55664682,15 3.9906311,15 L2.0093689,15 C1.45190985,15 1,14.5566468 1,13.9906311 L1,12.0093689 C1,11.4519098 1.44335318,11 2.0093689,11 L3.9906311,11 C4.12868508,11 4.26026573,11.0271908 4.38011246,11.0767016 L11.0764832,4.38033084 C11.0271992,4.26097047 11,4.12949214 11,3.9906311 L11,2.0093689 C11,1.45190985 11.4433532,1 12.0093689,1 L13.9906311,1 C14.5480902,1 15,1.44335318 15,2.0093689 L15,3.9906311 C15,4.54809015 14.5566468,5 13.9906311,5 L12.0093689,5 C11.8713149,5 11.7397343,4.97280922 11.6198875,4.92329838 Z M3,3 L3,0 L4,0 L4,3 L7,3 L7,4 L4,4 L4,7 L3,7 L3,4 L0,4 L0,3 L3,3 Z M12,2.0093689 L12,3.9906311 C12,4.00008791 11.9999116,4 12.0093689,4 L13.9906311,4 C14.0000879,4 14,4.00008843 14,3.9906311 L14,2.0093689 C14,1.99991209 14.0000884,2 13.9906311,2 L12.0093689,2 C11.9999121,2 12,1.99991157 12,2.0093689 Z M2,12.0093689 L2,13.9906311 C2,14.0000879 1.99991157,14 2.0093689,14 L3.9906311,14 C4.00008791,14 4,14.0000884 4,13.9906311 L4,12.0093689 C4,11.9999121 4.00008843,12 3.9906311,12 L2.0093689,12 C1.99991209,12 2,11.9999116 2,12.0093689 Z"></path>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates/add-feature-point.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates/add-feature-point.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <g id="Points" fill="#1785FB">\n          <path d="M3,3 L3,0 L4,0 L4,3 L7,3 L7,4 L4,4 L4,7 L3,7 L3,4 L0,4 L0,3 L3,3 Z M12,2.0093689 L12,3.9906311 C12,4.00008791 11.9999116,4 12.0093689,4 L13.9906311,4 C14.0000879,4 14,4.00008843 14,3.9906311 L14,2.0093689 C14,1.99991209 14.0000884,2 13.9906311,2 L12.0093689,2 C11.9999121,2 12,1.99991157 12,2.0093689 Z M11,2.0093689 C11,1.45190985 11.4433532,1 12.0093689,1 L13.9906311,1 C14.5480902,1 15,1.44335318 15,2.0093689 L15,3.9906311 C15,4.54809015 14.5566468,5 13.9906311,5 L12.0093689,5 C11.4519098,5 11,4.55664682 11,3.9906311 L11,2.0093689 Z M12,12.0093689 L12,13.9906311 C12,14.0000879 11.9999116,14 12.0093689,14 L13.9906311,14 C14.0000879,14 14,14.0000884 14,13.9906311 L14,12.0093689 C14,11.9999121 14.0000884,12 13.9906311,12 L12.0093689,12 C11.9999121,12 12,11.9999116 12,12.0093689 Z M11,12.0093689 C11,11.4519098 11.4433532,11 12.0093689,11 L13.9906311,11 C14.5480902,11 15,11.4433532 15,12.0093689 L15,13.9906311 C15,14.5480902 14.5566468,15 13.9906311,15 L12.0093689,15 C11.4519098,15 11,14.5566468 11,13.9906311 L11,12.0093689 Z M2,12.0093689 L2,13.9906311 C2,14.0000879 1.99991157,14 2.0093689,14 L3.9906311,14 C4.00008791,14 4,14.0000884 4,13.9906311 L4,12.0093689 C4,11.9999121 4.00008843,12 3.9906311,12 L2.0093689,12 C1.99991209,12 2,11.9999116 2,12.0093689 Z M1,12.0093689 C1,11.4519098 1.44335318,11 2.0093689,11 L3.9906311,11 C4.54809015,11 5,11.4433532 5,12.0093689 L5,13.9906311 C5,14.5480902 4.55664682,15 3.9906311,15 L2.0093689,15 C1.45190985,15 1,14.5566468 1,13.9906311 L1,12.0093689 Z"></path>\n      </g>\n  </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates/add-feature-polygon.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates/add-feature-polygon.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Polygons" fill="#1785FB">\n            <path d="M13.9906311,5 L14,5 L14,11 L13.9906311,11 C14.5480902,11 15,11.4433532 15,12.0093689 L15,13.9906311 C15,14.5480902 14.5566468,15 13.9906311,15 L12.0093689,15 C11.4519098,15 11,14.5566468 11,13.9906311 L11,14 L5,14 L5,13.9906311 C5,14.5480902 4.55664682,15 3.9906311,15 L2.0093689,15 C1.45190985,15 1,14.5566468 1,13.9906311 L1,12.0093689 C1,11.4519098 1.44335318,11 2.0093689,11 L3.9906311,11 C4.12868508,11 4.26026573,11.0271908 4.38011246,11.0767016 L11.0764832,4.38033084 C11.0271992,4.26097047 11,4.12949214 11,3.9906311 L11,2.0093689 C11,1.45190985 11.4433532,1 12.0093689,1 L13.9906311,1 C14.5480902,1 15,1.44335318 15,2.0093689 L15,3.9906311 C15,4.54809015 14.5566468,5 13.9906311,5 Z M13,5 L12.0093689,5 C11.8713149,5 11.7397343,4.97280922 11.6198875,4.92329838 L4.92351677,11.6196692 C4.97280083,11.7390295 5,11.8705079 5,12.0093689 L5,13 L11,13 L11,12.0093689 C11,11.4519098 11.4433532,11 12.0093689,11 L13,11 L13,5 Z M3,3 L3,0 L4,0 L4,3 L7,3 L7,4 L4,4 L4,7 L3,7 L3,4 L0,4 L0,3 L3,3 Z M12,2.0093689 L12,3.9906311 C12,4.00008791 11.9999116,4 12.0093689,4 L13.9906311,4 C14.0000879,4 14,4.00008843 14,3.9906311 L14,2.0093689 C14,1.99991209 14.0000884,2 13.9906311,2 L12.0093689,2 C11.9999121,2 12,1.99991157 12,2.0093689 Z M2,12.0093689 L2,13.9906311 C2,14.0000879 1.99991157,14 2.0093689,14 L3.9906311,14 C4.00008791,14 4,14.0000884 4,13.9906311 L4,12.0093689 C4,11.9999121 4.00008843,12 3.9906311,12 L2.0093689,12 C1.99991209,12 2,11.9999116 2,12.0093689 Z M12,12.0093689 L12,13.9906311 C12,14.0000879 11.9999116,14 12.0093689,14 L13.9906311,14 C14.0000879,14 14,14.0000884 14,13.9906311 L14,12.0093689 C14,11.9999121 14.0000884,12 13.9906311,12 L12.0093689,12 C11.9999121,12 12,11.9999116 12,12.0093689 Z"></path>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates/plus.tpl":
/*!***************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates/plus.tpl ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="12px" height="12px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n  <path fill="#1785FB" d="M8,8 L8,1 L9,1 L9,8 L16,8 L16,9 L9,9 L9,16 L8,16 L8,9 L1,9 L1,8 L8,8 Z" />\n</svg>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/icon/templates/warning.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/icon/templates/warning.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>icon-font_114_Warning</title>\n    <defs></defs>\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g id="Artboard-1" transform="translate(-9001.000000, -11000.000000)" fill-rule="nonzero" fill="#FEB100">\n        <g id="icon-font_114_Warning" transform="translate(9001.000000, 11000.000000)">\n        <path d="M47.3618699,443.171714 C40.4022689,456.721101 41.0006423,457.65748 56.75075,457.65748 L441.243856,457.65748 C456.985511,457.65748 457.59007,456.716689 450.632737,443.171714 L248.997303,50.6152213 L47.3618699,443.171714 Z M210.115762,31.2931921 C231.589444,-10.5131174 266.489496,-10.3489299 287.878844,31.2931921 L489.747111,424.302981 C511.220794,466.109288 489.302388,500 441.243856,500 L56.75075,500 C8.48945932,500 -13.1418536,465.945101 8.24749422,424.302981 L210.115762,31.2931921 Z M222.781864,372.97244 L222.781864,415.31496 L266.474263,415.31496 L266.474263,372.97244 L222.781864,372.97244 Z M222.781864,203.602361 L222.781864,330.62992 L266.474263,330.62992 L266.474263,203.602361 L222.781864,203.602361 Z" id="Combined-Shape"></path>\n        </g>\n    </g>\n    </g>\n</svg>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/asset-header-view.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/asset-header-view.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul>\n  <li class="CDB-NavSubmenu-item">\n    <h2 class="CDB-Text CDB-Size-medium u-altTextColor">' +
__e( title ) +
'</h2>\n  </li>\n  ';
 if (editable && assetsCount > 0) { ;
__p += '\n    ';
 if (allSelected) { ;
__p += '\n      <li class="CDB-NavSubmenu-item">\n        <button class="CDB-NavSubmenu-itemLink CDB-Text CDB-Size-medium u-actionTextColor js-deselect-all">' +
__e( _t('components.modals.assets-picker.deselect-all') ) +
'</button>\n      </li>\n      ';
 } else if (selectedCount > 0) { ;
__p += '\n      <li class="CDB-NavSubmenu-item">\n        <button class="CDB-NavSubmenu-itemLink CDB-Text CDB-Size-medium u-actionTextColor js-select-all">' +
__e( _t('components.modals.assets-picker.select-all') ) +
'</button>\n      </li>\n    ';
 } ;
__p += '\n\n    ';
 if (selectedCount > 0) { ;
__p += '\n      <li class="CDB-NavSubmenu-item">\n          ';
 if (selectedCount > 1) { ;
__p += '\n        <button class="CDB-NavSubmenu-itemLink CDB-Text CDB-Size-medium u-errorTextColor js-remove">' +
__e( _t('components.modals.assets-picker.delete-images') ) +
'</button>\n        ';
 } else { ;
__p += '\n        <button class="CDB-NavSubmenu-itemLink CDB-Text CDB-Size-medium u-errorTextColor js-remove">' +
__e( _t('components.modals.assets-picker.delete-image') ) +
'</button>\n        ';
 } ;
__p += '\n      </li>\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/asset-item-view.tpl":
/*!*************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/asset-item-view.tpl ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="AssetItem-label CDB-Text CDB-Size-big ';
 if (type === 'icon') { ;
__p += 'u-mainTextColor';
 } else { ;
__p += 'u-actionTextColor';
 } ;
__p += ' u-upperCase js-asset" title="' +
__e( name ) +
'">\n  ';
 if (type === 'icon' || type === 'file') { ;
__p += '\n    <img height="' +
__e( height ) +
'" src="' +
__e( public_url ) +
'" alt="' +
__e( name ) +
'" />\n  ';
 } else { ;
__p += '\n    ' +
__e( name ) +
'\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/assets-view.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/assets-view.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Modal">\n  <div class="Modal-header">\n    <div class="Modal-headerContainer">\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace">' +
__e( _t('components.modals.add-asset.modal-title') ) +
'</h2>\n      <h3 class="CDB-Text CDB-Size-medium u-altTextColor"><button class="u-actionTextColor js-upload">' +
__e( _t('components.modals.add-asset.upload-asset') ) +
'</button> ' +
__e( _t('components.modals.add-asset.modal-desc') ) +
'</h3>\n    </div>\n  </div>\n\n  <div class="Modal-container js-body"></div>\n\n  <div class="Modal-footer">\n    <div class="Modal-footerContainer u-flex u-justifySpace">\n      <div class="CDB-Text CDB-Size-medium js-disclaimer">\n        ';
 if (disclaimer) { ;
__p += '\n        ' +
((__t = ( disclaimer )) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n      </div>\n\n      <button class="CDB-Button CDB-Button--primary is-disabled js-add">\n        <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.add-asset.set-image') ) +
'</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<form accept-charset="UTF-8" enctype="multipart/form-data" method="post">\n  <input type="file" accept="image/jpeg,image/jpg,image/gif,image/png,image/svg+xml" class="js-fileInput" style="position: absolute; clip: rect(0px 0px 0px 0px); opacity: 0;" multiple="multiple">\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/input-asset-picker-header.tpl":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/input-asset-picker-header.tpl ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemDisplay--flex CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <div class="CDB-ListDecoration-secondaryContainer">\n        <button class="u-rSpace u-actionTextColor js-back" type="button">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n      </div>\n\n      <div class="CDB-ListDecoration-secondaryContainer CDB-ListDecoration-title u-rSpace--m">\n        <span class="label u-ellipsis js-label">' +
__e( label ) +
'</span>\n      </div>\n\n      <div class=\'CDB-ListDecoration-secondaryContainer\'>\n        <nav class=\'CDB-NavMenu\'>\n          <ul class=\'CDB-NavMenu-Inner CDB-NavMenu-inner--no-margin js-menu\'>\n            <li class=\'CDB-NavMenu-item\'>\n              <div class=\'CDB-NavMenu-link CDB-ListDecoration-rampNav-item\'>\n                <button class="ColorBar ColorBar--disableHighlight CDB-ListDecoration-rampItemBar u-rSpace--xl js-colorPicker" style="background-color: ' +
((__t = ( color )) == null ? '' : __t) +
';" type="button"></button>\n              </div>\n            </li>\n\n            ';
 if (imageEnabled) { ;
__p += '\n              <li class=\'CDB-NavMenu-item is-selected\'>\n                <div class=\'CDB-NavMenu-link CDB-ListDecoration-rampNav-item\'>\n                  ';
 if (image) { ;
__p += '\n                    <div class=\'CDB-ListDecoration-rampImg js-image-container\'></div>\n                  ';
 } else { ;
__p += '\n                    <span class="CDB-ListDecoration-rampImg CDB-Text js-assetPicker">' +
((__t = ( _t('form-components.editors.fill.input-color.img') )) == null ? '' : __t) +
'</span>\n                  ';
 } ;
__p += '\n                </div>\n              </li>\n            ';
 } ;
__p += '\n          </ul>\n        </nav>\n      </div>\n    </li>\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/input-asset-picker-view.tpl":
/*!*********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/input-asset-picker-view.tpl ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-header"></div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/organization-assets-list-view.tpl":
/*!***************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/organization-assets-list-view.tpl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul class="AssetsList js-assets"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/static-asset-item-view.tpl":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/static-asset-item-view.tpl ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (type === 'icon') { ;
__p += '\n<div class="AssetItem-icon js-asset"><img height="24" src="' +
__e( public_url ) +
'" alt="' +
__e( name ) +
'" crossOrigin="anonymous" /></div>\n';
 } else { ;
__p += '\n<div class="AssetItem-label CDB-Text CDB-Size-small u-altTextColor u-upperCase js-asset" title="' +
__e( name ) +
'">\n  ' +
__e( name ) +
'\n</div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/tab-pane-template.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/tab-pane-template.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Modal-navigation">\n  <ul class="Modal-navigationInner CDB-Text is-semibold CDB-Size-medium js-menu"></ul>\n</div>\n<div class="Tab-paneContent Publish-modalContent Modal-inner Modal-inner--with-navigation js-content">\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/upload-assets-error.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/upload-assets-error.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="LayoutIcon LayoutIcon--negative">\n  <i class="CDB-IconFont CDB-IconFont-cockroach"></i>\n</div>\n<h3 class="CDB-Text CDB-Size-large u-mainTextColor u-errorTextColor u-bSpace--m u-tSpace-xl">' +
__e( title ) +
'</h3>\n<p class="CDB-Text CDB-Size-medium u-altTextColor">' +
((__t = ( desc )) == null ? '' : __t) +
'</p>\n\n<button class="CDB-Button CDB-Button--primary u-tSpace-xl js-back">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.assets-picker.go-back') ) +
'</span>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/upload-assets-tab.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/upload-assets-tab.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="ImportPanel-header">\n  <h3 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m">\n    ' +
__e( _t('components.modals.assets-picker.upload-file-url') ) +
'\n  </h3>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">\n    ' +
__e( _t('components.modals.assets-picker.upload-desc') ) +
'\n  </p>\n</div>\n<div class="Form-row Form-row--centered">\n  <div class="Form-rowData Form-rowData--med Form-rowData--noMargin js-dropzone">\n    <div class="Form-upload">\n      <label class="Form-fileLabel js-fileLabel CDB-Text CDB-Size-medium">' +
__e( _t('components.modals.assets-picker.drag-and-drop') ) +
'</label>\n      <label class="Form-fileLabel Form-fileLabel--error CDB-Text CDB-Size-small js-fileError"></label>\n      <div class="Form-file">\n        <span class="CDB-Button CDB-Button--primary Form-fileButton CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase js-upload">\n          ' +
__e( _t('components.modals.assets-picker.browse') ) +
'\n        </span>\n      </div>\n    </div>\n  </div>\n  <span class="u-lSpace--xl u-rSpace--xl u-flex u-alignCenter CDB-Text CDB-Size-medium u-altTextColor">' +
__e( _t('components.modals.assets-picker.or') ) +
'</span>\n  <div class="Form-rowData Form-rowData--noMargin Form-rowData--med">\n    <input type="text" class="Form-input Form-input--med has-submit js-url CDB-Text CDB-Size-medium" value="" placeholder="https://carto.com/markers/pin.png" />\n    <button type="submit" class="CDB-Text CDB-Size-small Form-inputSubmit u-upperCase u-actionTextColor Form-inputSubmit js-submit">\n      <span>' +
__e( _t('components.modals.assets-picker.submit') ) +
'</span>\n    </button>\n    <div class="Form-inputError CDB-Text js-url-error">' +
__e( _t('components.modals.assets-picker.incorrect-url') ) +
'</div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/assets-picker/user-assets-list-view.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/assets-picker/user-assets-list-view.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<nav class="CDB-NavMenu u-bSpace--m u-inner js-nav"></nav>\n<ul class="AssetsList js-assets"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-color-file-carousel.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-color-file-carousel.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-selector"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-color-file-view.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-color-file-view.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="Editor-boxModalContent js-assets">\n  <h2 class="CDB-Text CDB-Size-small u-bSpace--m u-upperCase">\n    ' +
__e( _t('form-components.editors.fill.image.recently-title') ) +
'\n  </h2>\n</div>\n<div class="CustomRamp-list">\n  <div class="CustomList-item CustomList-item--add">\n    <button class="CDB-ListDecoration-itemLink CDB-Text CDB-Size-medium u-actionTextColor js-show-collection" type="button">\n      ' +
__e( _t('form-components.editors.fill.image.show-all') ) +
'\n    </button>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-color-picker/input-color-picker-header.tpl":
/*!****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-color-picker/input-color-picker-header.tpl ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemDisplay--flex CDB-Text CDB-Size-medium u-secondaryTextColor u-ellipsis">\n      <div class="CDB-ListDecoration-secondaryContainer">\n        <button class="u-rSpace u-actionTextColor js-back" type="button">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n      </div>\n\n      <div class="CDB-ListDecoration-secondaryContainer CDB-ListDecoration-title u-rSpace--m">\n        <span class="label u-ellipsis js-label">\n          ' +
__e( label ) +
'\n        </span>\n      </div>\n\n      ';
 if (isCategorized && imageEnabled) { ;
__p += '\n        <div class=\'CDB-ListDecoration-secondaryContainer\'>\n          <nav class=\'CDB-NavMenu\'>\n            <ul class=\'CDB-NavMenu-Inner CDB-NavMenu-inner--no-margin js-menu\'>\n              <li class=\'CDB-NavMenu-item is-selected\'>\n                <div class=\'CDB-NavMenu-link CDB-ListDecoration-rampNav-item\'>\n                  <button class=\'ColorBar ColorBar--disableHighlight CDB-ListDecoration-rampItemBar u-rSpace--xl js-colorPicker\' type="button"\n                    style="background-color: ' +
((__t = ( color )) == null ? '' : __t) +
';"></button>\n                </div>\n              </li>\n              <li class=\'CDB-NavMenu-item\'>\n                <div class=\'CDB-NavMenu-link CDB-ListDecoration-rampNav-item\'>\n                  ';
 if (image) { ;
__p += '\n                    <button class="CDB-ListDecoration-rampImg js-image-container" type="button"></button>\n                    ';
 } else { ;
__p += '\n                      <button class="CDB-ListDecoration-rampImg CDB-Text u-actionTextColor js-assetPicker" type="button">\n                        ' +
((__t = ( _t('form-components.editors.fill.input-color.img') )) == null ? '' : __t) +
'\n                      </button>\n                      ';
 } ;
__p += '\n                </div>\n              </li>\n            </ul>\n          </nav>\n        </div>\n        ';
 } ;
__p += '\n    </li>\n  </ul>\n</div>\n\n<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="ColorBarContainer ColorBarContainer--rampEditing">\n        ';
 _.each(ramp, function (color, i) { ;
__p += '\n          <li class="ColorBar ColorBar--spaceless ColorBar--clickable is-link js-color' +
__e( i === index ? ' is-selected' : '' ) +
'" data-label="' +
__e( color.title ) +
'"\n            data-color="' +
__e( color.color ) +
'" style="background-color: ' +
__e( color.color ) +
';"></li>\n          ';
 }); ;
__p += '\n      </ul>\n      <div class="OpacityEditor">\n        <div class="OpacityEditor-slider js-slider"></div>\n        <div class="OpacityEditor-inputWrapper">\n          <input type="text" class="CDB-InputText ColorPicker-input js-a" value="' +
__e( opacity ) +
'">\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-color-picker/input-color-picker-view.tpl":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-color-picker/input-color-picker-view.tpl ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-header"></div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-color.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-color.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (showCategories) { ;
__p += '\n  <ul class="ColorsBar ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n    ';
 _.each(value, function (color) { ;
__p += '\n      <li class="ColorBar ' +
__e( categoryImagesPresent ? 'ColorBar--spaceSmall' : 'ColorBar--spaceMedium' ) +
'" style="background-color: ' +
__e( color ) +
'"></li>\n    ';
 }); ;
__p += '\n  </ul>\n';
 } else { ;
__p += '\n  <button type="button" class="Editor-fillContainer ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n    <ul class="ColorBarContainer">\n      ';
 if (_.isArray(value)) { ;
__p += '\n        <li class="ColorBar ColorBar-gradient" style="background: linear-gradient(90deg,' +
__e( value.join(',') ) +
')"></li>\n      ';
 } else { ;
__p += '\n        <li class="ColorBar" style="background-color: ' +
__e( value ) +
'"></li>\n      ';
 } ;
__p += '\n    </ul>\n  </button>\n';
 } ;
__p += '\n\n';
 if (imageURL && kind !== 'custom-marker') { ;
__p += '\n<button type="button" class="Editor-fillImage ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  <div class="js-image-container"></div>\n</button>\n';
 } ;
__p += '\n\n';
 if ((!imageURL && categoryImagesPresent) || (imageURL && kind === 'custom-marker')) { ;
__p += '\n<button type="button" class="Editor-fillImage ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>\n  <div class=\'Editor-categoryImagesTag CDB-Text CDB-FontSize-small u-altTextColor is-semibold u-upperCase\'>' +
((__t = ( _t('form-components.editors.fill.input-color.img') )) == null ? '' : __t) +
'</div>\n</button>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/categories-list/list-item-view/categories-list-item.tpl":
/*!***********************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/categories-list/list-item-view/categories-list-item.tpl ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-ListDecoration-itemLink ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '">\n  <div class="u-flex u-justifySpace u-alignCenter">\n    <span class="RampItem-text CDB-Text u-ellipsis u-actionTextColor" title="' +
__e( name ) +
'">' +
__e( name ) +
'</span>\n\n    <div class=\'RampItem-secondaryContainer\'>\n      <div class="ColorBar ColorBar--disableHighlight RampItem-bar js-colorPicker" style="background-color: ' +
__e( val ) +
';"></div>\n\n      ';
 if (imageEnabled) { ;
__p += '\n        <div class=\'RampItem-img\'>\n          ';
 if (image) { ;
__p += '\n            <div class=\'js-image-container u-flex\'></div>\n          ';
 } else { ;
__p += '\n            <button class="CDB-Text u-actionTextColor js-assetPicker">' +
((__t = ( _t('form-components.editors.fill.input-color.img') )) == null ? '' : __t) +
'</button>\n          ';
 } ;
__p += '\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/categories-list/list-view/input-color-categories-list-view.tpl":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/categories-list/list-view/input-color-categories-list-view.tpl ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="u-flex u-justifySpace">\n        <li class="u-flex">\n          <button class="u-rSpace u-actionTextColor js-back">\n            <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n          </button>\n          <span class="label"> Color Schemes </span>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor u-flex u-alignCenter">\n      <ul class="ColorBarContainer">\n        ';
 _.each(range, function (color) { ;
__p += '\n          <li class="ColorBar ColorBar--spaceless ColorBar--clickable js-color" style="background-color: ' +
__e( color ) +
';"></li>\n          ';
 }); ;
__p += '\n      </ul>\n    </li>\n  </ul>\n</div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-item-view/color-ramps-list-item.tpl":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-item-view/color-ramps-list-item.tpl ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="ColorBarWrapper--withInvertLink CDB-ListDecoration-itemLink CDB-ListDecoration-itemLink--double js-listItemLink ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '">\n  <ul class="ColorBarContainer">\n    ';
 _.each(name, function (color) { ;
__p += '\n    <li class="ColorBar ColorBar--disableHighlight ColorBar--spaceless" style="background-color: ' +
__e( color ) +
';"></li>\n    ';
 }); ;
__p += '\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-view/color-ramp-custom-item.tpl":
/*!*********************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-view/color-ramp-custom-item.tpl ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="CDB-ListDecoration-item CustomList-item CustomRamp js-customRampItem">\n  <div class="CustomRamp-listOptions CDB-ListDecoration-itemLink CDB-ListDecoration-itemLink--double js-customRamp js-listItemLink is-selected">\n    <ul class="ColorBarContainer">\n      ';
 _.each(customRamp, function (color) { ;
__p += '\n      <li class="ColorBar ColorBar--disableHighlight ColorBar--spaceless" style="background-color: ' +
__e( color ) +
';"></li>\n      ';
 }); ;
__p += '\n    </ul>\n  </div>\n  <button class="CDB-ListDecoration-itemLink CustomRamp-clear js-clear">\n    <div class="CDB-Shape">\n      <div class="CDB-Shape-close is-blue is-large"></div>\n    </div>\n  </button>\n</li>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-view/color-ramps-list-view.tpl":
/*!********************************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/color-ramps-list/list-view/color-ramps-list-view.tpl ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="js-rampsList"></div>\n\n<!--  Custom Color Set -->\n<div class="CDB-Text CDB-Size-medium CustomRamp-list CustomList-listWrapper">\n  <ul class="CustomList-list js-customList">\n    <li class="CDB-ListDecoration-item CustomList-item CustomList-item--add js-customize">\n      <button class="CDB-ListDecoration-itemLink js-listItemLink u-actionTextColor">' +
__e( _t('form-components.editors.fill.customize') ) +
'</button>\n    </li>\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/main-view.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-qualitative-ramps/main-view.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Box-modalHeader js-prevStep">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="u-flex u-justifySpace">\n        <li class="u-flex">\n          <button class="u-rSpace u-actionTextColor js-back">\n            <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n          </button>\n          <span class="label js-label">' +
__e( attribute ) +
'</span>\n        </li>\n        ';
 if ((columnType !== 'number') && !hideQuantification) { ;
__p += '\n          <li class="u-flex">\n            ' +
__e( _t('form-components.editors.fill.quantification.methods.' + quantification) ) +
'\n            <button class="CDB-Shape u-lSpace js-quantification">\n              <div class="CDB-Shape-threePoints is-horizontal ';
 if (columnType !== 'string') { ;
__p += 'is-blue';
 } ;
__p += ' is-small">\n                <div class="CDB-Shape-threePointsItem"></div>\n                <div class="CDB-Shape-threePointsItem"></div>\n                <div class="CDB-Shape-threePointsItem"></div>\n              </div>\n            </button>\n          </li>\n        ';
 } ;
__p += '\n      </ul>\n    </li>\n  </ul>\n</div>\n\n';
 if (status === 'loading') { ;
__p += '\n  <div class="InputColorCategory-loader js-loader">\n    <div class="CDB-LoaderIcon is-dark">\n      <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n      </svg>\n    </div>\n  </div>\n';
 } else if (status === 'error') { ;
__p += '\n  <div class="u-flex u-alignCenter u-justifyCenter CDB-Text CDB-Size-medium u-bSpace--m u-tSpace--m u-errorTextColor">' +
__e( _t('form-components.editors.fill.error') ) +
'</div>\n';
 } else { ;
__p += '\n\n  <!-- Stack Layout View -->\n  <div class="js-content"></div>\n\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/custom-ramp-template.tpl":
/*!*****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/custom-ramp-template.tpl ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="CDB-ListDecoration-item CustomList-item CustomRamp js-customRampItem">\n  <div class="CustomRamp-listOptions CDB-ListDecoration-itemLink CDB-ListDecoration-itemLink--double js-customRamp js-listItemLink is-selected">\n    <ul class="ColorBarContainer">\n      ';
 _.each(customRamp, function (color) { ;
__p += '\n      <li class="ColorBar ColorBar--spaceless" style="background-color: ' +
__e( color ) +
';"></li>\n      ';
 }); ;
__p += '\n    </ul>\n  </div>\n  <button class="CDB-ListDecoration-itemLink CustomRamp-clear js-clear">\n    <div class="CDB-Shape">\n      <div class="CDB-Shape-close is-blue is-large"></div>\n    </div>\n  </button>\n</li>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/input-ramp-content-view.tpl":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/input-ramp-content-view.tpl ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="InputColor-modalHeader CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <div class="u-flex u-alignStart u-ellipsis">\n        <button class="u-rSpace u-actionTextColor js-back">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n        <div class="u-ellipsis">\n          ' +
__e( attribute ) +
'\n        </div>\n      </div>\n    </li>\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="u-flex u-justifySpace">\n        <li class="u-flex">\n          ' +
__e( bins ) +
' ' +
__e( _t('form-components.editors.fill.input-ramp.buckets', { smart_count: bins }) ) +
'\n          <button class="CDB-Shape u-lSpace js-bins">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n        <li class="u-flex">\n          ' +
__e( _t('form-components.editors.fill.quantification.methods.' + quantification) ) +
'\n          <button class="CDB-Shape u-lSpace js-quantification">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n<div class="js-content"></div>\n<div class="CDB-Text CDB-Size-medium CustomRamp-list CustomList-listWrapper">\n  <ul class="CustomList-list js-customList">\n    <li class="CDB-ListDecoration-item CustomList-item CustomList-item--add">\n      <button class="CDB-ListDecoration-itemLink js-listItemLink js-customize u-actionTextColor">' +
__e( _t('form-components.editors.fill.customize') ) +
'</button>\n    </li>\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/input-ramp-list-item-template.tpl":
/*!**************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-color/input-quantitative-ramps/input-ramp-list-item-template.tpl ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="ColorBarWrapper--withInvertLink CDB-ListDecoration-itemLink CDB-ListDecoration-itemLink--double js-listItemLink ';
 if (isSelected) { ;
__p += ' is-selected ';
 } ;
__p += '">\n  <ul class="ColorBarContainer">\n    ';
 _.each(name, function (color) { ;
__p += '\n    <li class="ColorBar ColorBar--spaceless" style="background-color: ' +
__e( color ) +
';"></li>\n    ';
 }); ;
__p += '\n  </ul>\n</div>\n<button class="ColorBar-invertLink js-invert" data-event="invert"></button>\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-fill/input-fill.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-fill/input-fill.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul class="CDB-OptionInput-container CDB-OptionInput-container--border js-content"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-number/input-number-value-content-view.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-number/input-number-value-content-view.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="InputColor-modalHeader CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <div class="u-flex u-alignStart u-ellipsis">\n        <button class="u-rSpace u-actionTextColor js-back">\n          <i class="CDB-IconFont CDB-IconFont-arrowPrev Size-large"></i>\n        </button>\n        <div class="u-ellipsis">\n          ' +
__e( attribute ) +
'\n        </div>\n      </div>\n    </li>\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical CDB-Text CDB-Size-medium u-secondaryTextColor">\n      <ul class="u-flex u-justifySpace">\n        <li class="u-flex">\n          ' +
__e( bins ) +
' ' +
__e( _t('form-components.editors.fill.input-ramp.buckets', { smart_count: bins }) ) +
'\n          <button class="CDB-Shape u-lSpace js-bins">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n        <li class="u-flex">\n          ' +
__e( _t('form-components.editors.fill.quantification.methods.' + quantification) ) +
'\n          <button class="CDB-Shape u-lSpace js-quantification">\n            <div class="CDB-Shape-threePoints is-horizontal is-blue is-small">\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n              <div class="CDB-Shape-threePointsItem"></div>\n            </div>\n          </button>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n<div class="js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/input-number/input-number.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/input-number/input-number.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="CDB-OptionInput-content js-value ';
 if (help) { ;
__p += ' js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += '>' +
__e( value ) +
'</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/loading/loading.tpl":
/*!***********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/loading/loading.tpl ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="CDB-LoaderIcon CDB-LoaderIcon--big is-dark js-loader">\n    <svg class="CDB-LoaderIcon-spinner" viewbox="0 0 50 50">\n      <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"/>\n    </svg>\n  </div>\n  <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">' +
__e( title ) +
'</h4>\n  <div class="CDB-Text CDB-Size-medium u-altTextColor">' +
((__t = ( descHTML )) == null ? '' : __t) +
'</div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/loading/quote.tpl":
/*!*********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/loading/quote.tpl ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p class="CDB-Text CDB-Size-medium u-altTextColor">\n  "' +
((__t = ( quote )) == null ? '' : __t) +
'"\n</p>\n';
 if (author) { ;
__p += '\n  <p class="CDB-Text CDB-Size-medium u-altTextColor u-tSpace"><i>– ' +
__e( author ) +
'</i></p>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/dataset-metadata/dataset-metadata-error.tpl":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/dataset-metadata/dataset-metadata-error.tpl ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="Dialog-header Modal-header js-header">\n    <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n      <i class="CDB-IconFont CDB-IconFont-cockroach"></i>\n    </div>\n    <h2 class="CDB-Text CDB-Size-large u-bSpace u-errorTextColor">' +
__e( _t('components.modals.dataset-metadata.error.title') ) +
'</h2>\n    <h3 class="CDB-Text CDB-Size-medium u-secondaryTextColor">' +
((__t = ( error )) == null ? '' : __t) +
'</h3>\n  </div>\n\n  <div class="Modal-body">\n    <div class="Modal-body-inner">\n\n      <div class="js-footer">\n        <ul class="Modal-actions is-narrow">\n          <li class="Modal-actions-button">\n            <button class="CDB-Button CDB-Button--primary js-back">\n              <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.dataset-metadata.back-btn') ) +
'</span>\n            </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/dataset-metadata/dataset-metadata.tpl":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/dataset-metadata/dataset-metadata.tpl ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n              <path d="M16,13 L17,13 L17,5.5 C17,5.433 16.986,5.368 16.961,5.308 C16.936,5.247 16.899,5.192 16.853,5.146 L11.854,0.147 C11.808,0.101 11.753,0.064 11.692,0.039 C11.632,0.014 11.567,0 11.5,0 L0.5,0 C0.224,0 0,0.224 0,0.5 L0,21.5 C0,21.776 0.224,22 0.5,22 L9.5,22 L9.5,21 L1,21 L1,1 L11,1 L11,5.5 C11,5.776 11.224,6 11.5,6 L16,6 L16,13 L16,13 Z M12,1.707 L15.293,5 L12,5 L12,1.707 L12,1.707 Z" id="Shape" fill="#2E3C43"></path>\n              <path d="M23.854,14.646 L21.354,12.146 C21.166,11.958 20.834,11.958 20.647,12.146 L13.146,19.648 C13.089,19.705 13.054,19.773 13.03,19.845 C13.028,19.852 13.021,19.857 13.019,19.865 L12.019,23.365 C11.969,23.539 12.018,23.727 12.146,23.856 C12.241,23.951 12.369,24.002 12.5,24.002 C12.546,24.002 12.592,23.996 12.637,23.983 L16.137,22.983 C16.144,22.981 16.149,22.974 16.157,22.972 C16.229,22.948 16.297,22.913 16.354,22.856 L23.855,15.354 C24.05,15.158 24.05,14.842 23.854,14.646 L23.854,14.646 Z M16,21.795 L14.207,20.002 L19.001,15.207 L20.794,17 L16,21.795 L16,21.795 Z M13.747,20.957 L15.045,22.255 L13.228,22.775 L13.747,20.957 L13.747,20.957 Z M21.501,16.293 L19.708,14.5 L21.001,13.207 L22.794,15 L21.501,16.293 L21.501,16.293 Z" id="Shape" fill="#2E3C43"></path>\n          </g>\n      </svg>\n    </div>\n    <div>\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('components.modals.dataset-metadata.modal-title') ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">\n        ' +
__e( _t('components.modals.dataset-metadata.modal-desc') ) +
'\n      </p>\n      <div class="Modal-listTextItem js-content"></div>\n      <div class="js-footer"></div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/dataset-metadata/footer/footer.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/dataset-metadata/footer/footer.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="Modal-listActionsitem">\n  <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-close">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n      ' +
__e( _t('components.modals.dataset-metadata.cancel-btn') ) +
'\n    </span>\n  </button>\n</li>\n<li class="Modal-listActionsitem">\n  <button class="CDB-Button CDB-Button--primary CDB-Button--big js-save ' +
__e( canFinish ? '' : 'is-disabled' ) +
'">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase ">\n      ' +
__e( _t('components.modals.dataset-metadata.save-btn') ) +
'\n    </span>\n  </button>\n</li>\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/dataset-metadata/form/form.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/dataset-metadata/form/form.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-tSpace-xl CDB-Text u-flex js-name-field">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.name') ) +
'</label>\n</div>\n\n<div class="u-tSpace-xl CDB-Text u-flex">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.description') ) +
'</label>\n  <div class="u-grow">\n    <div class="js-description-field u-bSpace"></div>\n    <div class="Markdown">\n      <span class="Markdown-tooltip js-markdown" data-tooltip="<em>_italics_</em><br/><b>*bold*</b><br/>[link](http://link.com)">\n        <span class="Markdown-icon">\n          <i class="Markdown-icon-text">M</i>\n          <i class="Markdown-icon-char">￬</i>\n        </span>\n        ' +
__e( _t('components.modals.dataset-metadata.form.markdown') ) +
'\n      </span>\n    </div>\n  </div>\n</div>\n\n<div class="u-tSpace-xl CDB-Text u-flex">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.source') ) +
'</label>\n  <div class="u-grow">\n    <div class="js-source-field u-bSpace"></div>\n  </div>\n</div>\n\n<div class="u-tSpace-xl CDB-Text u-flex">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.attributions') ) +
'</label>\n  <div class="u-grow">\n    <div class="js-attributions-field u-bSpace"></div>\n  </div>\n</div>\n\n<div class="u-tSpace-xl CDB-Text u-flex">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.license') ) +
'</label>\n  <div class="u-grow">\n    <div class="js-license-field u-bSpace Metadata-select"></div>\n  </div>\n</div>\n\n<div class="u-tSpace-xl CDB-Text u-flex u-alignCenter js-tags-field">\n  <label class="Metadata-label CDB-Text CDB-Size-medium is-semibold u-upperCase u-ellipsis">' +
__e( _t('components.modals.dataset-metadata.form.tags') ) +
'</label>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/export-data/modal-export-data-format.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/export-data/modal-export-data-format.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<input class="CDB-Radio js-format" type="radio" name="format" data-format="' +
__e( format.format ) +
'"\n  ';
 if (isDisabled) { ;
__p += '\n    disabled\n  ';
 } ;
__p += '\n\n  ';
 if (isChecked) { ;
__p += '\n    checked\n  ';
 } ;
__p += '\n>\n<span class="u-iBlock CDB-Radio-face"></span>\n<label class="u-iBlock u-lSpace u-upperCase">' +
__e( format.label || format.format ) +
'</label>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/export-data/modal-export-data.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/export-data/modal-export-data.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="24px" viewbox="459 348 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Export-dataset" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(459.000000, 348.000000)">\n          <path d="M1,1 L11,1 L11,5.5 C11,5.776 11.224,6 11.5,6 L16,6 L16,9.5 L17,9.5 L17,5.502 C17,5.502 17,5.502 17,5.501 C17,5.5 17,5.501 17,5.5 C17,5.447 16.985,5.398 16.97,5.35 C16.966,5.337 16.967,5.323 16.962,5.311 C16.936,5.247 16.896,5.19 16.847,5.142 L11.854,0.147 C11.808,0.101 11.753,0.064 11.692,0.039 C11.632,0.014 11.567,0 11.5,0 L0.5,0 C0.224,0 0,0.224 0,0.5 L0,21.5 C0,21.776 0.224,22 0.5,22 L10.5,22 L10.5,21 L1,21 L1,1 L1,1 Z M12,1.708 L15.291,5 L12,5 L12,1.708 L12,1.708 Z" id="Shape" fill="#2E3C43"/>\n          <path d="M17.5,11 C13.916,11 11,13.916 11,17.5 C11,21.084 13.916,24 17.5,24 C21.084,24 24,21.084 24,17.5 C24,13.916 21.084,11 17.5,11 L17.5,11 Z M17.5,23 C14.467,23 12,20.533 12,17.5 C12,14.467 14.467,12 17.5,12 C20.533,12 23,14.467 23,17.5 C23,20.533 20.533,23 17.5,23 L17.5,23 Z" id="Shape" fill="#2E3C43"/>\n          <path d="M17.858,14.425 C17.767,14.331 17.641,14.272 17.5,14.272 C17.359,14.272 17.232,14.331 17.142,14.425 L14.965,16.602 C14.77,16.797 14.77,17.114 14.965,17.309 C15.16,17.504 15.477,17.504 15.672,17.309 L17,15.981 L17,20.226 C17,20.502 17.224,20.726 17.5,20.726 C17.776,20.726 18,20.502 18,20.226 L18,15.981 L19.328,17.309 C19.426,17.407 19.554,17.455 19.682,17.455 C19.81,17.455 19.938,17.406 20.036,17.309 C20.231,17.114 20.231,16.797 20.036,16.602 L17.858,14.425 L17.858,14.425 Z" id="Shape" fill="#2E3C43" transform="translate(17.500500, 17.499000) scale(1, -1) translate(-17.500500, -17.499000) "/>\n        </g>\n      </svg>\n    </div>\n\n    <div>\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace--xl">' +
__e( _t('components.modals.export-data.title') ) +
'</h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">' +
__e( _t('components.modals.export-data.desc') ) +
'.</p>\n      ';
 if (!isGeoreferenced) { ;
__p += '\n        <p class="CDB-Text CDB-Size-large u-altTextColor u-tSpace-xl">' +
__e( _t('components.modals.export-data.no-geometry') ) +
'</p>\n      ';
 } ;
__p += '\n\n      <div class="Modal-listTextItem u-flex u-alignCenter">\n        <h3 class="CDB-Text CDB-Size-medium is-semibold u-upperCase">Select format</h3>\n\n        <form class="js-form" method="POST" action="' +
__e( url ) +
'">\n          <input type="hidden" class="js-filename" name="filename" />\n          <input type="hidden" class="js-q" name="q" />\n          <input type="hidden" class="js-apiKey" name="api_key" />\n          <input type="hidden" class="js-skipfields" name="skipfields" disabled="disabled" value="" />\n          <input type="hidden" class="js-dp" name="dp" value="4" disabled="disabled" />\n\n          <ul class="Modal-listForm u-flex u-alignCenter CDB-Text CDB-Size-medium js-formats"></ul>\n        </form>\n\n      </div>\n\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.export-data.cancel') ) +
'</span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.export-data.download') ) +
'</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

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

/***/ "./lib/assets/javascripts/builder/components/modals/privacy-warning/privacy-warning.tpl":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/privacy-warning/privacy-warning.tpl ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <div class="Modal-icon--svg js-icon-warning"></div>\n    </div>\n    <div>\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('components.modals.privacy-warning.title.' + type + '.' + selectedPrivacyType) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">\n          ' +
__e( _t('components.modals.privacy-warning.description.' + selectedPrivacyType) ) +
'\n      </p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n                ' +
__e( _t('components.modals.privacy-warning.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n                ' +
__e( _t('components.modals.privacy-warning.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish-button.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish-button.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button class="Publish-modalButton CDB-Button CDB-Button--loading CDB-Button--primary CDB-Button--small u-rSpace js-button\n  ';
 if (isDisabled) {;
__p += ' is-disabled';
 } ;
__p += '\n  ';
 if (isLoading) {;
__p += ' is-loading';
 } ;
__p += '\n">\n  <div class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n    ';
 if (isPublished) { ;
__p += '\n    ' +
__e( _t('components.modals.publish.update-btn') ) +
'\n    ';
 } else { ;
__p += '\n    ' +
__e( _t('components.modals.publish.publish-btn') ) +
'\n    ';
 } ;
__p += '\n  </div>\n  <div class="CDB-Button-loader CDB-LoaderIcon CDB-LoaderIcon--small is-white">\n    <svg class="CDB-LoaderIcon-spinner" viewbox="0 0 50 50">\n      <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"/>\n    </svg>\n  </div>\n</button> ' +
__e( publishedOn ) +
'\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Publish-modalHeader">\n  <div class="u-inner">\n    <div class="CDB-Text CDB-Size-huge is-light u-ellipsis u-bSpace--m">' +
__e( name ) +
'</div>\n    <ul class="u-flex u-alignCenter">\n      <li class="js-dropdown u-rSpace--xl"></li>\n      ';
 if (hasShareStats) { ;
__p += '\n      <li class="js-share-users">\n      </li>\n      ';
 } ;
__p += '\n      <li class="CDB-Text CDB-Size-medium u-altTextColor js-update">\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class="Publish-modalBody js-panes\n';
 if (isSimple) { ;
__p += 'is-simple';
 } ;
__p += '\n">\n  ';
 if (isSimple) { ;
__p += '\n    <div class="Publish-modalShadow"></div>\n  ';
 } ;
__p += '\n\n</div>\n\n<div class="Dialog-footer Dialog-footer--expanded CreateDialog-footer Publish-modalFooter">\n  <div>\n    <div class="CreateDialog-footerShadow"></div>\n    <div class="CreateDialog-footerLine"></div>\n    <div class="CreateDialog-footerInner ">\n      <div class="CreateDialog-footerInfo"></div>\n      <div class="CreateDialog-footerActions js-footerActions u-flex u-justifySpace u-grow">\n        <div class="js-upgrade"></div>\n        <button class="CDB-Button CDB-Button--secondary js-done">\n          <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">' +
__e( _t('components.modals.publish.done-btn') ) +
'</span>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish/icon-embed.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish/icon-embed.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '\n<svg width="25px" height="25px" viewBox="682 469 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path d="M697.141667,478.48556 C695.774797,477.117815 695.774797,474.90231 697.141553,473.535553 L697.495051,473.182056 L697.141609,472.828502 L693.960609,469.646502 L693.607124,469.292907 L693.253515,469.646378 L690.685515,472.213378 L691.039,472.567 L691.469343,472.312431 C691.271611,471.978171 691.043454,471.678347 690.778553,471.413447 C689.020272,469.655166 686.171603,469.655166 684.414333,471.41356 C682.657184,473.170709 682.657184,476.020291 684.414447,477.777553 C684.682252,478.044267 684.982655,478.273359 685.314094,478.468734 L685.568,478.038 L685.214447,477.684447 L682.646447,480.252447 L682.292893,480.606 L682.646447,480.959553 L685.828447,484.141553 L686.181887,484.494994 L686.53544,484.141667 C687.903185,482.774797 690.11869,482.774797 691.485447,484.141553 C692.852184,485.508291 692.852184,487.724709 691.485447,489.091447 L691.131893,489.445 L691.485447,489.798553 L694.667447,492.980553 L695.021,493.334107 L695.374553,492.980553 L697.941553,490.413553 L697.588,490.06 L697.157928,490.315025 C697.3561,490.649221 697.584149,490.948256 697.849447,491.213553 C699.60664,492.971872 702.456485,492.971872 704.21278,491.213327 C705.970872,489.45636 705.970872,486.606515 704.212327,484.85022 C703.948015,484.584823 703.647051,484.355236 703.312906,484.158266 L703.059,484.589 L703.412553,484.942553 L705.979553,482.375553 L706.333107,482.022 L705.979553,481.668447 L702.797553,478.486447 L702.444,478.132893 L702.090447,478.486447 C700.725536,479.851357 698.508943,479.851087 697.141327,478.48522 L697.141667,478.48556 Z M696.434673,479.19278 C698.192747,480.948604 701.042155,480.948952 702.797553,479.193553 L702.090447,479.193553 L705.272447,482.375553 L705.272447,481.668447 L702.705447,484.235447 L702.248976,484.691917 L702.805094,485.019734 C703.068228,485.174844 703.301587,485.35286 703.504724,485.55683 C704.873128,486.923485 704.873128,489.13964 703.50556,490.506333 C702.139515,491.874128 699.92336,491.874128 698.556667,490.50656 C698.35252,490.302414 698.175052,490.069704 698.018072,489.804975 L697.689693,489.2512 L697.234447,489.706447 L694.667447,492.273447 L695.374553,492.273447 L692.192553,489.091447 L692.192553,489.798553 C693.949816,488.041291 693.949816,485.191709 692.192553,483.434447 C690.43531,481.677203 687.586815,481.677203 685.82856,483.434333 L686.535553,483.434447 L683.353553,480.252447 L683.353553,480.959553 L685.921553,478.391553 L686.378024,477.935083 L685.821906,477.607266 C685.560783,477.453341 685.327004,477.275057 685.12083,477.069724 C683.754816,475.703709 683.754816,473.487291 685.121553,472.120553 C686.488397,470.752834 688.703728,470.752834 690.071447,472.120553 C690.274695,472.323801 690.452152,472.557 690.608657,472.821569 L690.936742,473.376188 L691.392485,472.920622 L693.960485,470.353622 L693.253391,470.353498 L696.434391,473.535498 L696.434447,472.828447 C694.677203,474.58569 694.677203,477.434185 696.434333,479.19244 L696.434673,479.19278 Z" id="Embed-it" stroke="none" fill="#AAAAAA" fill-rule="evenodd"></path>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish/icon-link.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish/icon-link.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '  <svg width="23px" height="23px" viewBox="683 470 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <path d="M696.399947,482.106803 L696.485947,482.192803 C697.462209,483.169066 699.044791,483.169066 700.021053,482.192803 L703.986009,478.228848 C705.34724,476.86645 705.34724,474.642218 703.986356,473.279 L702.227953,471.521596 C700.866908,470.159384 698.640092,470.159384 697.278795,471.521848 L693.313991,475.485652 C692.337722,476.461921 692.337722,478.044329 693.31372,479.021577 L693.40202,479.108865 L694.10498,478.397635 L694.01898,478.312635 C693.435278,477.728171 693.435278,476.778579 694.021053,476.192803 L697.986009,472.228848 C698.956908,471.257116 700.550092,471.257116 701.520795,472.228652 L703.279047,473.985904 C704.24976,474.958282 704.24976,476.55005 703.278795,477.521848 L699.313991,481.485652 C698.728209,482.071434 697.778791,482.071434 697.193053,481.485697 L697.107053,481.399697 L696.399947,482.106803 L696.399947,482.106803 Z M692.10498,480.397635 L692.01898,480.312635 C691.044791,479.338434 689.462209,479.338434 688.485947,480.314697 L684.520991,484.278652 C683.159735,485.641076 683.159735,487.866424 684.520795,489.228652 L686.279047,490.985904 C687.640092,492.348116 689.866908,492.348116 691.228205,490.985652 L695.193009,487.021848 C696.169278,486.045579 696.169278,484.463171 695.19328,483.485923 L695.107053,483.399697 L694.399947,484.106803 L694.485947,484.192803 C695.071722,484.779329 695.071722,485.728921 694.485947,486.314697 L690.520991,490.278652 C689.550092,491.250384 687.956908,491.250384 686.986205,490.278848 L685.227953,488.521596 C684.257265,487.550076 684.257265,485.957424 685.228205,484.985652 L689.193009,481.021848 C689.778791,480.436066 690.728209,480.436066 691.313947,481.021803 L691.40202,481.108865 L692.10498,480.397635 L692.10498,480.397635 Z M690.718053,485.495803 L698.496053,477.717803 L697.788947,477.010697 L690.010947,484.788697 L690.718053,485.495803 L690.718053,485.495803 Z" id="Get-link" stroke="none" fill="#AAAAAA" fill-rule="evenodd"></path>\n  </svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish/publish.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish/publish.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="Publish-optionsList u-flex u-justifySpace js-list"></ul>\n';
 if (!isPublished) { ;
__p += '\n<div class="Share-info">\n  <div>\n    <h2 class="CDB-Text CDB-Size-large u-secondaryTextColor u-bSpace is-light">' +
__e( _t('components.modals.publish.share.unpublished-header') ) +
'</h2>\n    <p class="CDB-Text CDB-Size-medium is-light">' +
__e( _t('components.modals.publish.share.unpublished-subheader') ) +
'</p>\n  </div>\n</div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/publish/share-item.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/publish/share-item.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Card-icon u-bSpace--xl js-icon"></div>\n\n<div class="Card-body u-bSpace--xl">\n  ';
 if (isPrivate) { ;
__p += '\n    <h3 class="CDB-Text CDB-Size-large u-altTextColor u-bSpace--m">' +
__e( title ) +
'</h3>\n  ';
 } else { ;
__p += '\n    <h3 class="CDB-Text CDB-Size-large u-mainTextColor u-bSpace--m">' +
__e( title ) +
'</h3>\n  ';
 } ;
__p += '\n  <div class="CDB-Text CDB-Size-medium u-altTextColor">\n    ' +
((__t = ( body )) == null ? '' : __t) +
'\n    <br/>\n    ';
 if (url && !isPrivate) { ;
__p += '\n    <a href="' +
__e( url ) +
'" class="Share-link js-link">' +
__e( link ) +
'</a>\n    ';
 } ;
__p += '\n  </div>\n</div>\n\n';
 if (!isPrivate && isPublished) { ;
__p += '\n  <div class="Share-input">\n    <input type="text" id="' +
__e( id ) +
'" value="' +
__e( content ) +
'" class="Share-input-field CDB-InputText is-disabled CDB-Text CDB-Size-medium u-ellipsis js-input" readonly>\n    <button class="Share-copy CDB-Button CDB-Button--small js-copy" data-clipboard-target="#' +
__e( id ) +
'">\n      <span class="CDB-Button-Text CDB-Text CDB-Size-small u-actionTextColor">' +
__e( copy ) +
'</span>\n    </button>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/share-with.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/share-with.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (people > 0) { ;
__p += '\n  <div class="Share-user ' +
__e( avatarClass ) +
' u-rSpace u-iBlock" style="background-image: url(' +
__e( avatar ) +
')"></div>\n  <span class="Share-user-text u-secondaryTextColor CDB-Text CDB-Size-small ' +
__e( separationClass ) +
'">+ ' +
__e( people ) +
'</span>\n';
 } else { ;
__p += '\n  ';
 if (hasAction) { ;
__p += '\n    <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor ' +
__e( separationClass ) +
'">' +
__e( _t('components.modals.publish.share.add-people') ) +
'</button>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/share/share-permission.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/share/share-permission.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Share-permissionInfo">\n  <div class="Share-permissionIcon">\n    ';
 if (avatar) { ;
__p += '\n      <div class="Share-user Share-user--huge" style="background-image: url(' +
__e( avatar ) +
')"></div>\n    ';
 } else { ;
__p += '\n        <i class="CDB-IconFont CDB-IconFont-people"></i>\n    ';
 } ;
__p += '\n  </div>\n  <div>\n    <div class="CDB-Text u-mainTextColor CDB-Size-medium is-semibold u-ellipsis">\n      ' +
__e( name ) +
'\n    </div>\n\n\n    <div class="CDB-Text u-mainTextColor u-tSpace CDB-Size-medium u-ellipsis">\n      ';
 if (role) { ;
__p += '\n        <i class="Tag Tag--outline Tag--' +
__e( role ) +
' CDB-Text CDB-Size-small u-upperCase">' +
__e( role ) +
'</i>\n      ';
 } ;
__p += '\n\n      ';
 if (users) { ;
__p += '\n        <div class="js-users"></div>\n      ';
 } ;
__p += '\n    </div>\n\n\n    ';
 if (description) { ;
__p += '\n    <div class="CDB-Text u-mainTextColor u-tSpace CDB-Size-medium u-ellipsis">\n      ' +
__e( description ) +
'\n    </div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n<div class="Share-togglers">\n  ';
 if (hasWriteAccessAvailable) { ;
__p += '\n    <div class="CDB-Text CDB-Size-medium u-rSpace--xl Share-toggler js-toggler ';
 if (!canChangeWriteAccess) { ;
__p += 'is-disabled';
 } ;
__p += '">\n      <input class="CDB-Toggle u-iBlock js-write" type="checkbox"\n        ';
 if (!canChangeWriteAccess) { ;
__p += 'disabled="disabled"';
 } ;
__p += '\n        ';
 if (hasWriteAccess) { ;
__p += ' checked ';
 } ;
__p += '\n      />\n      <span class="u-iBlock CDB-ToggleFace"></span>\n      <label class="u-iBlock u-altTextColor ">' +
__e( _t('components.modals.publish.share.toggle.write') ) +
'</label>\n    </div>\n  ';
 } ;
__p += '\n  <div class="CDB-Text CDB-Size-medium Share-toggler js-toggler ';
 if (!canChangeReadAccess) { ;
__p += 'is-disabled';
 } ;
__p += '">\n    <input class="CDB-Toggle u-iBlock js-read" type="checkbox"\n      ';
 if (hasReadAccess) { ;
__p += ' checked ';
 } ;
__p += '\n      ';
 if (!canChangeReadAccess) { ;
__p += 'disabled="disabled"';
 } ;
__p += '\n    />\n    <span class="u-iBlock CDB-ToggleFace"></span>\n    <label class="u-iBlock u-altTextColor ">' +
__e( _t('components.modals.publish.share.toggle.read') ) +
'</label>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/share/share.tpl":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/share/share.tpl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-body">\n\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/share/user.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/share/user.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="Share-user u-rSpace js-avatar" style="background-image: url(' +
__e( avatar ) +
')" data-title="' +
__e( username ) +
'"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/share/users-group.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/share/users-group.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex js-content"></div>\n';
 if (people > 0) { ;
__p += '\n  <div class="u-secondaryTextColor CDB-Text CDB-Size-small u-lSpace">+ ' +
__e( people ) +
'</div>\n';
 } ;


}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/tab-pane-submenu.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/tab-pane-submenu.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Publish-modalMenu u-tSpace-xl">\n  <nav class="CDB-NavMenu u-inner">\n    <ul class="CDB-Size-medium CDB-Text is-semibold js-menu"></ul>\n  </nav>\n</div>\n\n<div class="Tab-paneContent Publish-modalContent js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/publish/upgrade.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/publish/upgrade.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-alignCenter">\n  <div class="Upgrade-icon u-rSpace--xl">\n    <svg width="16px" height="16px" viewBox="578 456 16 16">\n      <g id="present" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(578.000000, 456.000000)">\n        <path d="M10.0946667,4.4109223 C10.8886667,4.1368747 11.6846667,3.80147316 12.0073333,3.4715253 C12.7866667,2.67392407 12.7866667,1.37662907 12.0073333,0.579027844 C11.2513333,-0.193350099 9.934,-0.192668389 9.17866667,0.579027844 C8.74133333,1.0262299 8.29266667,2.36033726 8,3.37608583 C7.70666667,2.36033726 7.25866667,1.0262299 6.82133333,0.579027844 C6.066,-0.193350099 4.748,-0.192668389 3.99266667,0.579027844 C3.21266667,1.37662907 3.21266667,2.67392407 3.99266667,3.4715253 C4.316,3.80147316 5.11133333,4.1368747 5.90533333,4.4109223 L0.333333333,4.4109223 C0.149333333,4.4109223 0,4.56362544 0,4.75177753 L0,7.47861934 C0,7.66677142 0.149333333,7.81947456 0.333333333,7.81947456 L0.666666667,7.81947456 L0.666666667,15.6591448 C0.666666667,15.8472969 0.816,16 1,16 L15,16 C15.184,16 15.3333333,15.8472969 15.3333333,15.6591448 L15.3333333,7.81947456 L15.6666667,7.81947456 C15.8506667,7.81947456 16,7.66677142 16,7.47861934 L16,4.75177753 C16,4.56362544 15.8506667,4.4109223 15.6666667,4.4109223 L10.0946667,4.4109223 Z M6,6.95652174 L6,4.86956522 L10,4.86956522 L10,6.95652174 L6,6.95652174 L6,6.95652174 Z M10,7.65217391 L10,15.3043478 L6,15.3043478 L6,7.65217391 L10,7.65217391 L10,7.65217391 Z M9.80833133,1.08822938 C10.0510474,0.834996985 10.3727426,0.695652174 10.7169115,0.695652174 C11.0597961,0.695652174 11.3821334,0.834996985 11.6248495,1.08755946 C12.1250502,1.6101025 12.1250502,2.46023983 11.6248495,2.98278288 C11.2729754,3.34990286 9.79227867,3.85636766 8.66666667,4.17391304 C8.97102496,2.99953105 9.45581507,1.45534937 9.80833133,1.08822938 L9.80833133,1.08822938 Z M4.37515049,1.08822938 C4.6178666,0.834996985 4.94020387,0.695652174 5.28373064,0.695652174 C5.6266153,0.695652174 5.94895256,0.834996985 6.19166867,1.08755946 C6.54354282,1.45467944 7.02833293,2.99886112 7.33333333,4.17391304 C6.20707922,3.85569773 4.72638253,3.34990286 4.37515049,2.98278288 C3.87494984,2.46090976 3.87494984,1.61077243 4.37515049,1.08822938 L4.37515049,1.08822938 Z M0.666666667,4.86956522 L5.33333333,4.86956522 L5.33333333,6.95652174 L1,6.95652174 L0.666666667,6.95652174 L0.666666667,4.86956522 L0.666666667,4.86956522 Z M1.33333333,7.65217391 L5.33333333,7.65217391 L5.33333333,15.3043478 L1.33333333,15.3043478 L1.33333333,7.65217391 L1.33333333,7.65217391 Z M14.6666667,15.3043478 L10.6666667,15.3043478 L10.6666667,7.65217391 L14.6666667,7.65217391 L14.6666667,15.3043478 L14.6666667,15.3043478 Z M15.3333333,6.95652174 L15,6.95652174 L10.6666667,6.95652174 L10.6666667,4.86956522 L15.3333333,4.86956522 L15.3333333,6.95652174 L15.3333333,6.95652174 Z" id="Shape" fill="#9BC63B"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="Upgrade-body">\n    <h2 class="CDB-Text CDB-Size-large">' +
__e( title ) +
'</h2>\n    <p class="CDB-Text CDB-Size-medium u-altTextColor ">' +
((__t = ( desc )) == null ? '' : __t) +
'</p>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset-view.js":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset-view.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var ConfirmationView = __webpack_require__(/*! builder/components/modals/confirmation/modal-confirmation-view */ "./lib/assets/javascripts/builder/components/modals/confirmation/modal-confirmation-view.js");
var VisDefinitionModel = __webpack_require__(/*! builder/data/vis-definition-model */ "./lib/assets/javascripts/builder/data/vis-definition-model.js");
var MapcardPreview = __webpack_require__(/*! builder/helpers/mapcard-preview */ "./lib/assets/javascripts/builder/helpers/mapcard-preview.js");
var ErrorView = __webpack_require__(/*! builder/components/error/error-view */ "./lib/assets/javascripts/builder/components/error/error-view.js");
var renderLoading = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var tableDeleteOperation = __webpack_require__(/*! builder/dataset/operations/table-delete-operation */ "./lib/assets/javascripts/builder/dataset/operations/table-delete-operation.js");
var template = __webpack_require__(/*! ./remove-dataset.tpl */ "./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset.tpl");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");
var REQUIRED_OPTS = ['modalModel', 'userModel', 'visModel', 'tableModel', 'configModel'];
var AFFECTED_VIS_COUNT = 3;
var AFFECTED_ENTITIES_SAMPLE_COUNT = 20;

/**
 *  Remove dataset modal dialog
 */
module.exports = ConfirmationView.extend({
  className: 'Dialog-content',

  initialize: function initialize(opts) {
    _.each(REQUIRED_OPTS, function (item) {
      if (!opts[item]) throw new Error(item + ' is required');
      this['_' + item] = opts[item];
    }, this);

    this._acl = this._visModel._permissionModel.acl;
  },

  render: function render() {
    var affectedVisData = this._tableModel.get('accessible_dependent_derived_maps');
    var affectedEntitiesData = this._prepareVisibleAffectedEntities();

    this.clearSubViews();

    this.$el.html(template({
      modalModel: this._modalModel,
      tableName: this._tableModel.getUnquotedName(),
      affectedVisCount: affectedVisData.length,
      visibleAffectedVis: this._prepareVisibleAffectedVis(affectedVisData.slice(0, AFFECTED_VIS_COUNT)),
      organizationAffected: affectedEntitiesData.organizationAffected,
      affectedEntitiesCount: affectedEntitiesData.count,
      visibleAffectedEntities: affectedEntitiesData.data.slice(0, AFFECTED_ENTITIES_SAMPLE_COUNT),
      maxVisCount: AFFECTED_VIS_COUNT,
      maxEntitiesCount: AFFECTED_ENTITIES_SAMPLE_COUNT
    }));
    return this;
  },

  _prepareVisibleAffectedVis: function _prepareVisibleAffectedVis(visibleAffectedVisData) {
    return visibleAffectedVisData.map(function (visData) {
      var vis = new VisDefinitionModel(visData, {
        configModel: this._configModel
      });
      var owner = vis._permissionModel.get('owner');

      return {
        visId: vis.get('id'),
        name: vis.get('name'),
        url: vis.builderURL(),
        ownerName: owner.username,
        timeDiff: moment(vis.get('updated_at')).fromNow(),
        previewUrl: MapcardPreview.urlForStaticMap(this._configModel.get('maps_api_template'), vis, 304, 96)
      };
    }, this);
  },

  _prepareVisibleAffectedEntities: function _prepareVisibleAffectedEntities() {
    var types = this._acl.pluck('type');
    var affectedEntities = {
      organizationAffected: false,
      count: 0,
      data: []
    };
    var organization;

    if (types.indexOf('org') > -1) {
      organization = this._userModel.getOrganization();
      affectedEntities.organizationAffected = true;
      affectedEntities.count = organization.get('user_count') - 1;
      if (organization.get('avatar_url')) {
        affectedEntities.data.push({
          avatarUrl: organization.get('avatar_url'),
          username: organization.get('display_name')
        });
      }
    } else {
      var users = [];
      var uniqueUsers = [];
      var userName = this._userModel.get('username');

      // Grab all ids from every group
      _.each(this._acl.where({ type: 'group' }), function (group) {
        var entity = group.get('entity');
        var groupUsers = _.map(entity.users.models, function (user) {
          return {
            username: user.get('username'),
            avatarUrl: user.get('avatar_url')
          };
        });
        users = users.concat(groupUsers);
      }, this);

      // Grab all ids from every user
      _.each(this._acl.where({ type: 'user' }), function (group) {
        var entity = group.get('entity');
        users.push({
          username: entity.get('username'),
          avatarUrl: entity.get('avatar_url')
        });
      }, this);

      // remove current user id because it can be part of a group
      users = _.filter(users, function (user) {
        return user.username !== userName;
      });

      // return only uniques
      uniqueUsers = _.uniq(users, function (item) {
        return item.username;
      });

      affectedEntities.count = uniqueUsers.length;
      affectedEntities.data = uniqueUsers;
    }

    return affectedEntities;
  },

  _runAction: function _runAction() {
    this._renderLoadingView();

    tableDeleteOperation({
      onSuccess: this._onSuccessDestroyDataset.bind(this, this._modalModel),
      onError: this._onErrorDestroyDataset.bind(this),
      visModel: this._visModel
    });
  },

  _renderLoadingView: function _renderLoadingView() {
    this.$el.html(renderLoading({
      title: _t('dataset.delete.loading', { tableName: this._tableModel.getUnquotedName() })
    }));
  },

  _onSuccessDestroyDataset: function _onSuccessDestroyDataset() {
    window.location = this._configModel.get('base_url') + '/dashboard';
  },

  _onErrorDestroyDataset: function _onErrorDestroyDataset(mdl, e) {
    var errorMessage = errorParser(e);
    var errorView = new ErrorView({
      title: _t('dataset.delete.error', {
        tableName: this._tableModel.getUnquotedName(),
        error: errorMessage
      }),
      desc: errorMessage || _t('components.error.default-desc')
    });
    this.$el.html(errorView.render().el);
    this.addView(errorView);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="25px" viewbox="521 436 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M524.5,440 L540.5,440 L540.5,460 L524.5,460 L524.5,440 Z M528.5,437 L536.5,437 L536.5,440 L528.5,440 L528.5,437 Z M522,440 L544,440 L522,440 Z M528.5,443.5 L528.5,455.5 L528.5,443.5 Z M532.5,443.5 L532.5,455.5 L532.5,443.5 Z M536.5,443.5 L536.5,455.5 L536.5,443.5 Z" id="Shape" stroke="#F19243" stroke-width="1" fill="none"/>\n      </svg>\n    </div>\n    <div>\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
((__t = ( _t('dataset.delete.title', { tableName: tableName }) )) == null ? '' : __t) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-secondaryTextColor">' +
__e( _t('dataset.delete.desc') ) +
'</p>\n\n      ';
 if (affectedVisCount > 0) { ;
__p += '\n        <div class="Modal-listActions js-affectedVis">\n          <p class="CDB-Text CDB-Size-large u-altTextColor">\n            ';
 if (affectedVisCount > maxVisCount) {;
__p += '\n              ' +
((__t = ( _t('dataset.delete.affected-vis-count-extended', {affectedVisCount: affectedVisCount}) )) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n              ' +
((__t = ( _t('dataset.delete.affected-vis-count', {smart_count: affectedVisCount}) )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n          </p>\n\n          <ul class="u-flex u-justifyStart u-tSpace-xl">\n            ';
 visibleAffectedVis.forEach(function(vis) { ;
__p += '\n              <li class="MapsList-item MapsList-item--wRightMargins">\n                <div class="MapCard" data-vis-id="' +
__e( vis.visId ) +
'" data-vis-owner-name="' +
__e( vis.ownerName ) +
'">\n                  <a href="' +
__e( vis.url ) +
'" target="_blank" class="MapCard-header MapCard-header--mCompact js-header">\n                    <img class="MapCard-preview" src="' +
__e( vis.previewUrl ) +
'" style="display: inline;">\n                    <div class="MapCard-loader"></div>\n                  </a>\n                  <div class="MapCard-content MapCard-content--compact">\n                    <div class="MapCard-contentBody">\n                      <div class="MapCard-contentBodyRow MapCard-contentBodyRow--flex">\n                        <h3 class="CDB-Text CDB-Size-large u-bSpace u-ellipsis">\n                          <a href="' +
__e( vis.url ) +
'" target="_blank" title="' +
__e( vis.name ) +
'" class="u-mainTextColor">' +
__e( vis.name ) +
'</a>\n                        </h3>\n                      </div>\n                      <p class="MapCard-contentBodyTimeDiff DefaultTimeDiff CDB-Text CDB-Size-medium u-altTextColor">\n                        ' +
__e( vis.timeDiff ) +
'\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            ';
 }); ;
__p += '\n          </ul>\n        </div>\n      ';
 } ;
__p += '\n\n      ';
 if (affectedEntitiesCount > 0 || organizationAffected) { ;
__p += '\n        <div class="Modal-listActions js-affectedEntities">\n          <p class="CDB-Text CDB-Size-large u-altTextColor">\n            ';
 if (organizationAffected) { ;
__p += '\n              ' +
((__t = ( _t('dataset.delete.whole-organization-affected') )) == null ? '' : __t) +
'\n            ';
 } else if (affectedEntitiesCount > maxEntitiesCount && visibleAffectedEntities.length > 0) {;
__p += '\n              ' +
((__t = ( _t('dataset.delete.affected-entities-count-extended', {affectedEntitiesCount: affectedEntitiesCount}) )) == null ? '' : __t) +
'\n            ';
 } else { ;
__p += '\n              ' +
((__t = ( _t('dataset.delete.affected-entities-count', {smart_count: affectedEntitiesCount}) )) == null ? '' : __t) +
'\n            ';
 } ;
__p += '\n          </p>\n\n          <ul class="u-flex u-justifyStart u-tSpace-xl">\n          ';
 visibleAffectedEntities.forEach(function(entity) { ;
__p += '\n            ';
 if (entity.avatarUrl) { ;
__p += ' \n              <li class="u-rSpace--m">\n                <div class="Share-user Share-user--medium" style="background-image: url(' +
__e( entity.avatarUrl ) +
')" data-username="' +
__e( entity.username ) +
'" title="' +
__e( entity.username ) +
'"></div>\n              </li>\n            ';
 } ;
__p += '\n          ';
 }); ;
__p += '\n        </ul>\n        </div>\n      ';
 } ;
__p += '\n\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--medium js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n              ' +
__e( _t('dataset.delete.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--medium js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n              ' +
__e( _t('dataset.delete.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/modals/sync-options/sync-options-modal.tpl":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/modals/sync-options/sync-options-modal.tpl ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--full u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="20px" viewBox="0 8 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <g id="Icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 8.000000)">\n              <path d="M19.591513,9.26858726 C19.7142261,9.39218837 19.8745043,9.45462604 20.0347826,9.45462604 C20.1950609,9.45462604 20.3553391,9.39218837 20.4780522,9.26858726 C20.7222261,9.0201108 20.7222261,8.61617729 20.4780522,8.36770083 C20.1988174,8.08354571 19.908313,7.81468144 19.6065391,7.56365651 C19.5652174,7.52925208 19.5201391,7.4999446 19.4775652,7.46554017 C17.3914435,5.76952909 14.824487,4.84060942 12.1147826,4.84060942 L12.1122783,4.84060942 L12.1097739,4.84060942 C8.95053913,4.84060942 5.98038261,6.0931856 3.74775652,8.36770083 C3.50358261,8.61617729 3.50358261,9.0201108 3.74775652,9.26858726 C3.87046957,9.3934626 4.03074783,9.45462604 4.19102609,9.45462604 C4.35130435,9.45462604 4.51158261,9.39218837 4.63304348,9.26858726 C6.63151304,7.23490305 9.28737391,6.11484765 12.1122783,6.11484765 C14.9371826,6.11484765 17.5930435,7.23490305 19.591513,9.26858726 L19.591513,9.26858726 Z" id="Shape" fill="#2E3C43"></path>\n              <path d="M22.7607652,5.95695291 C22.8834783,6.08182825 23.0437565,6.14299169 23.2040348,6.14299169 C23.364313,6.14299169 23.5245913,6.08055402 23.6473043,5.95695291 C23.8914783,5.70847645 23.8914783,5.30454294 23.6473043,5.05606648 C17.2862609,-1.41706371 6.93704348,-1.41451524 0.578504348,5.05606648 C0.334330435,5.30454294 0.334330435,5.70847645 0.578504348,5.95695291 C0.822678261,6.20542936 1.21961739,6.20542936 1.4637913,5.95695291 C7.33398261,-0.0179501385 16.8905739,-0.0166759003 22.7607652,5.95695291 L22.7607652,5.95695291 Z" id="Shape" fill="#2E3C43"></path>\n              <path d="M9.58789565,9.966759 C8.61495652,10.3273684 7.69586087,10.8854848 6.91575652,11.6793352 C6.67158261,11.9278116 6.67158261,12.3317452 6.91575652,12.5802216 C7.03846957,12.705097 7.19874783,12.7662604 7.35902609,12.7662604 C7.51930435,12.7662604 7.67958261,12.7038227 7.80229565,12.5802216 C10.1789217,10.1642659 14.046887,10.1642659 16.4247652,12.5802216 C16.5474783,12.705097 16.7077565,12.7662604 16.8680348,12.7662604 C17.028313,12.7662604 17.1885913,12.7038227 17.3113043,12.5802216 C17.5554783,12.3317452 17.5554783,11.9278116 17.3113043,11.6793352 C15.2239304,9.55645429 12.1924174,8.99961219 9.58789565,9.966759 L9.58789565,9.966759 Z" id="Shape" fill="#2E3C43"></path>\n              <path d="M12.1122783,14.1359557 C10.5307826,14.1359557 9.2448,15.4445983 9.2448,17.052687 C9.2448,18.6620499 10.5307826,19.9706925 12.1122783,19.9706925 C13.6925217,19.9706925 14.9785043,18.6620499 14.9785043,17.052687 C14.9785043,15.4458726 13.6925217,14.1359557 12.1122783,14.1359557 L12.1122783,14.1359557 Z M12.1122783,18.6977285 C11.2219826,18.6977285 10.4969739,17.9599446 10.4969739,17.0539612 C10.4969739,16.1479778 11.2219826,15.4114681 12.1122783,15.4114681 C13.0025739,15.4114681 13.7263304,16.1479778 13.7263304,17.0539612 C13.7263304,17.9599446 13.0025739,18.6977285 12.1122783,18.6977285 L12.1122783,18.6977285 Z" id="Shape" fill="#2E3C43"></path>\n          </g>\n      </svg>\n    </div>\n    <div>\n      <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace--m">\n        ' +
__e( _t('dataset.sync.title') ) +
'\n     </h2>\n      <p class="CDB-Text CDB-Size-medium u-altTextColor">\n        ' +
((__t = ( _t('dataset.sync.desc', {
          service: service,
          url: url
        }) )) == null ? '' : __t) +
'\n      </p>\n      <div class="Modal-listTextItem u-flex u-alignCenter">\n        <h3 class="CDB-Text CDB-Size-small is-semibold u-upperCase">' +
__e( _t('dataset.sync.label') ) +
'</h3>\n        <ul class="Modal-listForm u-flex u-alignCenter CDB-Text CDB-Size-small js-intervals">\n          <li class="Modal-listFormItem">\n            <input class="CDB-Radio" type="radio" name="interval" value="3600"\n              ';
 if (interval === 3600) { ;
__p += '\n                checked\n              ';
 } ;
__p += '\n\n              ';
 if (isExternalSource) { ;
__p += '\n                disabled\n              ';
 } ;
__p += '\n            >\n            <span class="u-iBlock CDB-Radio-face"></span>\n            <label class="u-iBlock u-lSpace u-upperCase">Every hour</label>\n          </li>\n          <li class="Modal-listFormItem">\n            <input class="CDB-Radio" type="radio" name="interval" value="86400"\n              ';
 if (interval === 86400) { ;
__p += '\n                checked\n              ';
 } ;
__p += '\n\n              ';
 if (isExternalSource) { ;
__p += '\n                disabled\n              ';
 } ;
__p += '\n            >\n            <span class="u-iBlock CDB-Radio-face"></span>\n            <label class="u-iBlock u-lSpace u-upperCase">Every day</label>\n          </li>\n          <li class="Modal-listFormItem">\n            <input class="CDB-Radio" type="radio" name="interval" value="604800"\n              ';
 if (interval === 604800) { ;
__p += '\n                checked\n              ';
 } ;
__p += '\n\n              ';
 if (isExternalSource) { ;
__p += '\n                disabled\n              ';
 } ;
__p += '\n            >\n            <span class="u-iBlock CDB-Radio-face"></span>\n            <label class="u-iBlock u-lSpace u-upperCase">Every week</label>\n          </li>\n          <li class="Modal-listFormItem">\n            <input class="CDB-Radio" type="radio" name="interval" value="2592000"\n              ';
 if (interval === 2592000) { ;
__p += '\n                checked\n              ';
 } ;
__p += '\n            >\n            <span class="u-iBlock CDB-Radio-face"></span>\n            <label class="u-iBlock u-lSpace u-upperCase">Every month</label>\n          </li>\n          <li class="Modal-listFormItem">\n            <input class="CDB-Radio" type="radio" name="interval" value="0"\n              ';
 if (interval === 0) { ;
__p += '\n                checked\n              ';
 } ;
__p += '\n            >\n            <span class="u-iBlock CDB-Radio-face"></span>\n            <label class="u-iBlock u-lSpace u-upperCase">Never</label>\n          </li>\n        </ul>\n      </div>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.sync.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.sync.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/no-results/no-results.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/no-results/no-results.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="LayoutIcon">\n    <i class="CDB-IconFont ' +
__e( icon ) +
'"></i>\n  </div>\n  <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">' +
__e( title ) +
'</h4>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">\n    ' +
__e( desc ) +
'\n  </p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/notifier/notifier-action.tpl":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/notifier/notifier-action.tpl ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span data-action="' +
__e( button ) +
'" class="CDB-Text is-semibold u-lSpace u-actionTextColor u-upperCase">' +
__e( button ) +
'</span>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/notifier/notifier-close.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/notifier/notifier-close.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Shape-close is-blue is-large js-theme"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/notifier/notifier-item.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/notifier/notifier-item.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Notifier-item Notifier-item--' +
__e( status ) +
'">\n\n  ';
 if (status === 'loading') { ;
__p += '\n  <div class="Notifier-icon CDB-LoaderIcon is-blue js-theme u-rSpace--m">\n    <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n      <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n    </svg>\n  </div>\n  ';
 } ;
__p += '\n\n  ';
 if (status === 'success') { ;
__p += '\n  <div class="Notifier-icon CDB-Shape u-rSpace--m">\n    <div class="CDB-Shape-CircleItem CDB-Shape-CircleItem--fill is-green">\n      <div class="CDB-Shape-tick is-medium is-white"></div>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n\n  ';
 if (status === 'error' || status === 'warning') { ;
__p += '\n  <div class="Notifier-icon CDB-Shape u-rSpace--m">\n    <div class="CDB-Shape-CircleItem CDB-Shape-CircleItem--fill is-red">\n      <div class="CDB-Shape-close is-medium is-white"></div>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n\n  <div class="Notifier-info">\n    <p class="CDB-Text CDB-Size-medium">' +
((__t = ( info )) == null ? '' : __t) +
' ';
 if (isActionable) { ;
__p += ' <span class="js-actionButton"></span> ';
 } ;
__p += '</p>\n  </div>\n\n  ';
 if (isClosable) { ;
__p += '\n    <div class="Notifier-actions js-closeButton"></div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/notifier/notifier.tpl":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/notifier/notifier.tpl ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Loader js-loader"></div>\n<ul class="Notifier-list js-status-loading"></ul>\n<ul class="Notifier-list js-status-done"></ul>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/pagination-search/pagination-search.tpl":
/*!*******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/pagination-search/pagination-search.tpl ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Filters is-relative">\n  <div class="Filters-inner">\n    <div class="Filters-row Share-filtersRow js-filters">\n      <div class="Filters-typeItem Filters-typeItem--searchEnabler">\n        <p class="Filters-searchLink js-search-link u-alignCenter CDB-Text CDB-Size-medium u-upperCase">\n          <i class="Filters-searchLinkIcon CDB-IconFont CDB-IconFont-lens u-rSpace--xl"></i> ' +
__e( _t('components.pagination-search.filter.search') ) +
'\n        </p>\n      </div>\n      <div class="Filters-typeItem Filters-typeItem--searchField">\n        <input class="Filters-searchInput CDB-Text CDB-Size-medium js-search-input" type="text" value="' +
__e( q ) +
'" placeholder="' +
__e( _t('components.pagination-search.filter.placeholder') ) +
'" />\n        ';
 if (q !== '') { ;
__p += '\n        <button type="button" class="CDB-Shape Filters-cleanSearch js-clean-search u-actionTextColor">\n          <div class="CDB-Shape-close is-blue is-large"></div>\n        </button>\n        ';
 } ;
__p += '\n      </div>\n    </div>\n  </div>\n</div>\n<div class="js-content"></div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/pagination-search/pagination.tpl":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/pagination-search/pagination.tpl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<span class="CDB-Text CDB-Size-medium u-altTextColor Pagination-label">\n  Page ' +
__e( currentPage ) +
' of ' +
__e( pagesCount ) +
'\n</span>\n<ul class="Pagination-list CDB-Text CDB-Size-medium">\n  ';
 m.pagesToDisplay().forEach(function(page) { ;
__p += '\n    ';
 if (page > 0) { ;
__p += '\n      <li class="Pagination-listItem ' +
__e( m.isCurrentPage(page) ? 'is-current' : '' ) +
'">\n        <button class="Pagination-listItemInner Pagination-listItemInner--link u-actionTextColor js-listItem" data-page="' +
__e( page ) +
'">' +
__e( page ) +
'</button>\n      </li>\n    ';
 } else { ;
__p += '\n      <li class="Pagination-listItem Pagination-listItem">\n        <span class="Pagination-listItemInner Pagination-listItemInner--more">&hellip;</span>\n      </li>\n    ';
 } ;
__p += '\n  ';
 }) ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/pagination/pagination.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/pagination/pagination.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<span class="CDB-Text CDB-Size-medium u-altTextColor Pagination-label">\n  Page ' +
__e( currentPage ) +
' of ' +
__e( pagesCount ) +
'\n</span>\n<ul class="Pagination-list CDB-Text CDB-Size-medium">\n  ';
 m.pagesToDisplay().forEach(function(page) { ;
__p += '\n    ';
 if (page > 0) { ;
__p += '\n      <li class="Pagination-listItem ' +
__e( m.isCurrentPage(page) ? 'is-current' : '' ) +
'">\n        <a class="Pagination-listItemInner Pagination-listItemInner--link js-listItem" href="' +
__e( m.urlTo(page) ) +
'" data-page="' +
__e( page ) +
'">' +
__e( page ) +
'</a>\n      </li>\n    ';
 } else { ;
__p += '\n      <li class="Pagination-listItem Pagination-listItem">\n        <span class="Pagination-listItemInner Pagination-listItemInner--more">&hellip;</span>\n      </li>\n    ';
 } ;
__p += '\n  ';
 }) ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/privacy-dropdown/password-dialog.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/privacy-dropdown/password-dialog.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Box-modalHeader">\n  <ul class="CDB-Box-modalHeaderItem CDB-Box-modalHeaderItem--block CDB-Box-modalHeaderItem--paddingHorizontal">\n    <li class="CDB-ListDecoration-item CDB-ListDecoration-itemPadding--vertical">\n      <button class="u-actionTextColor js-back CDB-Size-medium u-rSpace">\n        <i class="CDB-IconFont CDB-IconFont-arrowPrev"></i>\n      </button>\n      <span class="CDB-Text CDB-Size-medium">\n        ' +
__e( _t('components.modals.publish.privacy.password.title') ) +
'\n      </span>\n    </li>\n  </ul>\n</div>\n<ul class="CustomList-list js-customList">\n  <li class="Privacy-passwordField CustomList-item">\n    <input type="password" class="CDB-Text CDB-InputText js-input" placeholder="' +
__e( _t('components.modals.publish.privacy.password.placeholder') ) +
'">\n  </li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/privacy-dropdown/privacy-cta.tpl":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/privacy-dropdown/privacy-cta.tpl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="Privacy-cta u-flex">\n  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n      <path d="M10.0946667,4.4109223 C10.8886667,4.1368747 11.6846667,3.80147316 12.0073333,3.4715253 C12.7866667,2.67392407 12.7866667,1.37662907 12.0073333,0.579027844 C11.2513333,-0.193350099 9.934,-0.192668389 9.17866667,0.579027844 C8.74133333,1.0262299 8.29266667,2.36033726 8,3.37608583 C7.70666667,2.36033726 7.25866667,1.0262299 6.82133333,0.579027844 C6.066,-0.193350099 4.748,-0.192668389 3.99266667,0.579027844 C3.21266667,1.37662907 3.21266667,2.67392407 3.99266667,3.4715253 C4.316,3.80147316 5.11133333,4.1368747 5.90533333,4.4109223 L0.333333333,4.4109223 C0.149333333,4.4109223 0,4.56362544 0,4.75177753 L0,7.47861934 C0,7.66677142 0.149333333,7.81947456 0.333333333,7.81947456 L0.666666667,7.81947456 L0.666666667,15.6591448 C0.666666667,15.8472969 0.816,16 1,16 L15,16 C15.184,16 15.3333333,15.8472969 15.3333333,15.6591448 L15.3333333,7.81947456 L15.6666667,7.81947456 C15.8506667,7.81947456 16,7.66677142 16,7.47861934 L16,4.75177753 C16,4.56362544 15.8506667,4.4109223 15.6666667,4.4109223 L10.0946667,4.4109223 Z M6,6.95652174 L6,4.86956522 L10,4.86956522 L10,6.95652174 L6,6.95652174 L6,6.95652174 Z M10,7.65217391 L10,15.3043478 L6,15.3043478 L6,7.65217391 L10,7.65217391 L10,7.65217391 Z M9.80833133,1.08822938 C10.0510474,0.834996985 10.3727426,0.695652174 10.7169115,0.695652174 C11.0597961,0.695652174 11.3821334,0.834996985 11.6248495,1.08755946 C12.1250502,1.6101025 12.1250502,2.46023983 11.6248495,2.98278288 C11.2729754,3.34990286 9.79227867,3.85636766 8.66666667,4.17391304 C8.97102496,2.99953105 9.45581507,1.45534937 9.80833133,1.08822938 L9.80833133,1.08822938 Z M4.37515049,1.08822938 C4.6178666,0.834996985 4.94020387,0.695652174 5.28373064,0.695652174 C5.6266153,0.695652174 5.94895256,0.834996985 6.19166867,1.08755946 C6.54354282,1.45467944 7.02833293,2.99886112 7.33333333,4.17391304 C6.20707922,3.85569773 4.72638253,3.34990286 4.37515049,2.98278288 C3.87494984,2.46090976 3.87494984,1.61077243 4.37515049,1.08822938 L4.37515049,1.08822938 Z M0.666666667,4.86956522 L5.33333333,4.86956522 L5.33333333,6.95652174 L1,6.95652174 L0.666666667,6.95652174 L0.666666667,4.86956522 L0.666666667,4.86956522 Z M1.33333333,7.65217391 L5.33333333,7.65217391 L5.33333333,15.3043478 L1.33333333,15.3043478 L1.33333333,7.65217391 L1.33333333,7.65217391 Z M14.6666667,15.3043478 L10.6666667,15.3043478 L10.6666667,7.65217391 L14.6666667,7.65217391 L14.6666667,15.3043478 L14.6666667,15.3043478 Z M15.3333333,6.95652174 L15,6.95652174 L10.6666667,6.95652174 L10.6666667,4.86956522 L15.3333333,4.86956522 L15.3333333,6.95652174 L15.3333333,6.95652174 Z" id="Shape" fill="#9BC63B"></path>\n    </g>\n  </svg>\n  <div class="CDB-Text CDB-Size CDB-Size-small u-lSpace--xl">\n    <h3 class="u-secondaryTextColor">' +
__e( _t('components.modals.publish.privacy.cta.title') ) +
'</h3>\n    <a href="' +
__e( upgradeURL ) +
'">\n      ' +
__e( _t( 'components.modals.publish.privacy.cta.desc-' + (showTrial ? 'trial' : 'notrial') ) ) +
'\n    </a>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/privacy-dropdown/privacy-dropdown.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/privacy-dropdown/privacy-dropdown.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Privacy-dropdown">\n  <button class="Privacy-dropdownTrigger Tag Tag-fill Tag-fill--' +
__e( cssClass ) +
' CDB-Text CDB-Size-small u-upperCase js-tooltip ';
 if (isOwner && canChangePrivacy) { ;
__p += 'js-toggle';
 } else { ;
__p += 'is-disabled';
 } ;
__p += '">\n    ';
 if (isLoading) { ;
__p += '\n      <div class="CDB-LoaderIcon CDB-LoaderIcon--small u-flex">\n        <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n          <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n        </svg>\n      </div>\n    ';
 } else { ;
__p += '\n      ' +
__e( privacy ) +
'\n    ';
 } ;
__p += '\n  </button>\n\n  <div class="js-dialog"></div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/privacy-dropdown/tab-pane.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/privacy-dropdown/tab-pane.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Tab-paneContent js-content"></div>\n';

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

/***/ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-color.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/tab-pane/tab-pane-color.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="ColorBar ColorBar--inline" style="background-color: ' +
__e( color ) +
';"></div> ';
 if (selectedChild) { ;
__p += ' <span class="CDB-NavSubmenu-status js-NavSubmenu-status u-hintTextColor">' +
__e( selectedChild ) +
'</span>';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-file.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/tab-pane/tab-pane-file.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (type === 'text') { ;
__p += '\n' +
__e( label );
 if (selectedChild) { ;
__p += ' <span class="CDB-NavSubmenu-status js-NavSubmenu-status u-hintTextColor">' +
__e( selectedChild ) +
'</span>';
 } ;
__p += '\n';
 } else if (kind === 'custom-marker') { ;
__p += '\n<div class=\'Editor-categoryImagesTag CDB-Text CDB-FontSize-small u-altTextColor is-semibold u-upperCase\'>' +
__e( _t('form-components.editors.fill.input-color.img') ) +
'</div>\n';
 } else { ;
__p += '\n<div class="Tab-paneLabelImageContainer js-image-container"></div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-label.tpl":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/tab-pane/tab-pane-label.tpl ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p +=
__e( label );
 if (selectedChild) { ;
__p += ' <span class="CDB-NavSubmenu-status js-NavSubmenu-status u-hintTextColor">' +
__e( selectedChild ) +
'</span>';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-radio-label.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/tab-pane/tab-pane-radio-label.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<input id="' +
__e( customId ) +
'" class="CDB-Radio" type="radio" value="' +
__e( name ) +
'" ';
 if (selected) { ;
__p += ' checked ';
 } ;
__p += ' />\n<span class="u-iBlock CDB-Radio-face"></span>     \n<label for="' +
__e( customId ) +
'" class="u-iBlock u-lSpace CDB-Text CDB-Size-medium ';
 if (help) { ;
__p += 'js-help';
 } ;
__p += '" ';
 if (help) { ;
__p += ' data-tooltip="' +
__e( help ) +
'"';
 } ;
__p += ' >\n    ' +
__e( label ) +
'\n</label>\n';
 if (selectedChild) { ;
__p += ' <span class="CDB-NavSubmenu-status js-NavSubmenu-status u-hintTextColor">' +
__e( selectedChild ) +
'</span>';
 } ;


}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane.tpl":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/tab-pane/tab-pane.tpl ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="js-menu"></div>\n<div class="Tab-paneContent js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/body/modals-templates/remove-table-row.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/body/modals-templates/remove-table-row.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="25px" viewbox="521 436 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M524.5,440 L540.5,440 L540.5,460 L524.5,460 L524.5,440 Z M528.5,437 L536.5,437 L536.5,440 L528.5,440 L528.5,437 Z M522,440 L544,440 L522,440 Z M528.5,443.5 L528.5,455.5 L528.5,443.5 Z M532.5,443.5 L532.5,455.5 L532.5,443.5 Z M536.5,443.5 L536.5,455.5 L536.5,443.5 Z" id="Shape" stroke="#F19243" stroke-width="1" fill="none"/>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('components.table.rows.destroy.title', { cartodb_id: cartodb_id }) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">' +
__e( _t('components.table.rows.destroy.desc') ) +
'</p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.rows.destroy.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.rows.destroy.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/body/table-body-cell.tpl":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/body/table-body-cell.tpl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="Table-cellItem" data-attribute="' +
__e( columnName ) +
'" title="' +
__e( value ) +
'" data-clipboard-text=\'' +
__e( value ) +
'\'>\n  <div class="\n      Table-cell u-flex u-justifySpace\n      ' +
__e( columnName === 'cartodb_id' || (type === 'geometry' && geometry !== 'point') ? 'Table-cell--short' : '' ) +
'\n    ">\n    <!--\n      WARNING: .fs-hide class excludes this element, which might\n      contain sensitive data, from FullStory recordings.\n      Do not remove it unless we are no longer using FullStory!\n\n      More info:\n        https://help.fullstory.com/technical-questions/exclude-elements\n    -->\n    <p class="\n      fs-hide\n      CDB-Text CDB-Size-medium\n      u-ellipsis u-rSpace--xl\n      ' +
__e( type === 'number' && columnName !== 'cartodb_id' ? 'is-number' : '' ) +
'\n      ' +
__e( value === null ? 'is-null' : '' ) +
'\n      ' +
__e( columnName === 'cartodb_id' ? 'is-cartodbId' : '' ) +
'\n      js-value\n    ">\n      ' +
__e( value === null ? 'null' : formattedValue ) +
'\n    </p>\n\n    ';
 if (columnName !== 'cartodb_id') { ;
__p += '\n      <button class="CDB-Shape-threePoints is-blue is-small Table-cellItemOptions js-cellOptions">\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n      </button>\n    ';
 } ;
__p += '\n  </div>\n</td>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/body/table-body.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/body/table-body.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<table>\n  <tbody class="js-tbody"></tbody>\n</table>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/body/table-no-rows.tpl":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/body/table-no-rows.tpl ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="LayoutIcon">\n    <i class="CDB-IconFont CDB-IconFont-rows"></i>\n  </div>\n  <h3 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">\n    ';
 if (page !== 0) { ;
__p += '\n      ' +
__e( _t('components.table.rows.result.no-page-title', { page: page }) ) +
'\n    ';
 } else { ;
__p += '\n      ' +
__e( _t('components.table.rows.result.no-results-title') ) +
'\n    ';
 } ;
__p += '\n  </h3>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">\n    ';
 if (page !== 0) { ;
__p += '\n      ' +
__e( _t('components.table.rows.result.no-page-desc', { page: page }) ) +
'\n    ';
 } else { ;
__p += '\n      ' +
__e( _t('components.table.rows.result.no-results-desc', {
        addRow: _t('components.table.rows.result.no-results-button')
      }) ) +
'\n    ';
 } ;
__p += '\n  </p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/editors/types/editor-boolean.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/editors/types/editor-boolean.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-iBlock CDB-Text CDB-Size-medium u-rSpace--xl">\n  <input class="CDB-Radio" type="radio" name="value" value="true" ';
 if (value === 'true') { ;
__p += 'checked';
 } ;
__p += '>\n  <span class="u-iBlock CDB-Radio-face"></span>\n  <label class="u-iBlock u-lSpace">True</label>\n</div>\n<div class="u-iBlock CDB-Text CDB-Size-medium u-rSpace--xl">\n  <input class="CDB-Radio" type="radio" name="value" value="false" ';
 if (value === 'false') { ;
__p += 'checked';
 } ;
__p += '>\n  <span class="u-iBlock CDB-Radio-face"></span>\n  <label class="u-iBlock u-lSpace">False</label>\n</div>\n<div class="u-iBlock CDB-Text CDB-Size-medium u-rSpace--xl">\n  <input class="CDB-Radio" type="radio" name="value" value="null" ';
 if (value === 'null') { ;
__p += 'checked';
 } ;
__p += '>\n  <span class="u-iBlock CDB-Radio-face"></span>\n  <label class="u-iBlock u-lSpace">Null</label>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/modals-templates/change-table-column-type.tpl":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/modals-templates/change-table-column-type.tpl ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="25px" height="25px" viewBox="-1 4 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Outline_Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1.000000, 4.000000)">\n          <path d="M1.9477838,21.5 C1.6977511,21.5 1.5,21.3016354 1.5,21.0431048 L1.5,1.95689523 C1.5,1.70555616 1.70315066,1.5 1.94113901,1.5 L16.058861,1.5 C16.2975949,1.5 16.5,1.70783627 16.5,1.96250326 L16.5,13.2661378 L17.5,13.2661378 L17.5,1.96250326 C17.5,1.16139088 16.8558926,0.5 16.058861,0.5 L1.94113901,0.5 C1.14821378,0.5 0.5,1.15588925 0.5,1.95689523 L0.5,21.0431048 C0.5,21.8532278 1.1447717,22.5 1.9477838,22.5 L10.0155676,22.5 L10.0155676,21.5 L1.9477838,21.5 Z" id="path-1" fill="#F19243"></path>\n          <rect id="Rectangle-2" fill="#F19243" x="1" y="5" width="16" height="1"></rect>\n          <path d="M23.854,14.646 L21.354,12.146 C21.166,11.958 20.834,11.958 20.647,12.146 L13.146,19.648 C13.089,19.705 13.054,19.773 13.03,19.845 C13.028,19.852 13.021,19.857 13.019,19.865 L12.019,23.365 C11.969,23.539 12.018,23.727 12.146,23.856 C12.241,23.951 12.369,24.002 12.5,24.002 C12.546,24.002 12.592,23.996 12.637,23.983 L16.137,22.983 C16.144,22.981 16.149,22.974 16.157,22.972 C16.229,22.948 16.297,22.913 16.354,22.856 L23.855,15.354 C24.05,15.158 24.05,14.842 23.854,14.646 L23.854,14.646 L23.854,14.646 Z M16,21.795 L14.207,20.002 L19.001,15.207 L20.794,17 L16,21.795 L16,21.795 L16,21.795 Z M13.747,20.957 L15.045,22.255 L13.228,22.775 L13.747,20.957 L13.747,20.957 L13.747,20.957 Z M21.501,16.293 L19.708,14.5 L21.001,13.207 L22.794,15 L21.501,16.293 L21.501,16.293 L21.501,16.293 Z" id="Shape" fill="#F19243"></path>\n        </g>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('components.table.columns.change-type.title', { columnName: columnName, newType: newType }) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">\n        ' +
__e( _t('components.table.columns.change-type.desc') ) +
'\n      </p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.change-type.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.change-type.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/modals-templates/remove-table-column.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/modals-templates/remove-table-column.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="25px" viewbox="521 436 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M524.5,440 L540.5,440 L540.5,460 L524.5,460 L524.5,440 Z M528.5,437 L536.5,437 L536.5,440 L528.5,440 L528.5,437 Z M522,440 L544,440 L522,440 Z M528.5,443.5 L528.5,455.5 L528.5,443.5 Z M532.5,443.5 L532.5,455.5 L532.5,443.5 Z M536.5,443.5 L536.5,455.5 L536.5,443.5 Z" id="Shape" stroke="#F19243" stroke-width="1" fill="none"/>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('components.table.columns.destroy.title', { columnName: name }) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">' +
__e( _t('components.table.columns.destroy.desc') ) +
'</p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.destroy.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.destroy.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/modals-templates/rename-table-column.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/modals-templates/rename-table-column.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="25px" height="25px" viewBox="67 153 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Group-Copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(67.000000, 153.000000)">\n          <path d="M16,13 L17,13 L17,5.5 C17,5.433 16.986,5.368 16.961,5.308 C16.936,5.247 16.899,5.192 16.853,5.146 L11.854,0.147 C11.808,0.101 11.753,0.064 11.692,0.039 C11.632,0.014 11.567,0 11.5,0 L0.5,0 C0.224,0 0,0.224 0,0.5 L0,21.5 C0,21.776 0.224,22 0.5,22 L9.5,22 L9.5,21 L1,21 L1,1 L11,1 L11,5.5 C11,5.776 11.224,6 11.5,6 L16,6 L16,13 L16,13 Z M12,1.707 L15.293,5 L12,5 L12,1.707 L12,1.707 Z" id="Shape" fill="#F19243"></path>\n          <path d="M23.854,14.646 L21.354,12.146 C21.166,11.958 20.834,11.958 20.647,12.146 L13.146,19.648 C13.089,19.705 13.054,19.773 13.03,19.845 C13.028,19.852 13.021,19.857 13.019,19.865 L12.019,23.365 C11.969,23.539 12.018,23.727 12.146,23.856 C12.241,23.951 12.369,24.002 12.5,24.002 C12.546,24.002 12.592,23.996 12.637,23.983 L16.137,22.983 C16.144,22.981 16.149,22.974 16.157,22.972 C16.229,22.948 16.297,22.913 16.354,22.856 L23.855,15.354 C24.05,15.158 24.05,14.842 23.854,14.646 L23.854,14.646 Z M16,21.795 L14.207,20.002 L19.001,15.207 L20.794,17 L16,21.795 L16,21.795 Z M13.747,20.957 L15.045,22.255 L13.228,22.775 L13.747,20.957 L13.747,20.957 Z M21.501,16.293 L19.708,14.5 L21.001,13.207 L22.794,15 L21.501,16.293 L21.501,16.293 Z" id="Shape" fill="#F19243"></path>\n        </g>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--m">\n        ' +
__e( _t('components.table.columns.rename.title', {
          columnName: columnName,
          newName: newName
        }) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-medium u-altTextColor">\n        ' +
__e( _t('components.table.columns.rename.desc', {
              columnName: columnName,
              newName: newName
        }) ) +
'\n      </p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.rename.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('components.table.columns.rename.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/table-head-item.tpl":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/table-head-item.tpl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="\n    Table-headItemWrapper\n    ' +
__e( name === 'cartodb_id' || (type === 'geometry' && geometry !== 'point') ? 'Table-headItemWrapper--short' : '' ) +
'\n  ">\n  <div class="u-flex u-justifySpace">\n    <input class="Table-headItemName CDB-Text CDB-Size-medium is-semibold u-ellipsis js-attribute" value="' +
__e( name ) +
'" title="' +
__e( name ) +
'" readonly />\n\n    ';
 if (isOrderBy) { ;
__p += '\n      <i class="CDB-Size CDB-Size-small CDB-IconFont CDB-IconFont-arrowNext\n        Table-columnSorted\n        Table-columnSorted--';
 if (sortBy === 'asc') {;
__p += 'asc';
 } else {;
__p += 'desc';
 } ;
__p += '\n        u-rSpace u-altTextColor\n      "></i>\n    ';
 } ;
__p += '\n\n    <button class="CDB-Shape-threePoints is-blue is-small js-columnOptions">\n      <div class="CDB-Shape-threePointsItem"></div>\n      <div class="CDB-Shape-threePointsItem"></div>\n      <div class="CDB-Shape-threePointsItem"></div>\n    </button>\n  </div>\n  <p class="CDB-Size-small Table-headItemInfo u-altTextColor">' +
__e( type ) +
'</p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/table-head-options-item.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/table-head-options-item.tpl ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (val === 'order') { ;
__p += '\n  <div class="CDB-ListDecoration-itemLink js-order">\n    <div class="u-flex u-justifySpace">\n      <p class="CDB-Text CDB-Size-medium">' +
__e( name ) +
'</p>\n      <ul class="u-flex">\n        <li class="js-asc">\n          <i class="CDB-IconFont\n            CDB-IconFont-arrowNext u-actionTextColor\n            Table-columnSorted\n            Table-columnSorted--asc\n            ';
 if (isOrderBy && sortBy === 'asc') { ;
__p += 'is-disabled';
 } ;
__p += '\n            ';
 if (isOrderBy && sortBy === 'desc') { ;
__p += 'is-semibold';
 } ;
__p += '\n          "></i>\n        </li>\n        <li class="js-desc u-lSpace--xl">\n          <i class="CDB-IconFont\n            CDB-IconFont-arrowNext u-actionTextColor\n            Table-columnSorted\n            Table-columnSorted--desc\n            ';
 if (isOrderBy && sortBy === 'desc') { ;
__p += 'is-disabled';
 } ;
__p += '\n            ';
 if (isOrderBy && sortBy === 'asc') { ;
__p += 'is-semibold';
 } ;
__p += '\n          "></i>\n        </li>\n      </ul>\n    </div>\n  </div>\n';
 } else if (val === 'change') { ;
__p += '\n  <div class="CDB-ListDecoration-itemLink u-actionTextColor" title="' +
__e( name ) +
'">\n    <div class="u-flex u-justifySpace u-alignCenter">\n      <span>' +
__e( name ) +
'</span>\n      <i class="CDB-IconFont CDB-Size-small is-semibold CDB-IconFont-rArrowLight"></i>\n    </div>\n  </div>\n';
 } else { ;
__p += '\n  <div\n    class="CDB-ListDecoration-itemLink ';
 if (isDestructive) { ;
__p += ' u-errorTextColor ';
 } else { ;
__p += ' u-actionTextColor ';
 } ;
__p += '"\n    title="' +
__e( name ) +
'"\n  >\n    ' +
__e( name ) +
'\n  </div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/head/table-head.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/head/table-head.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<thead>\n  <tr class="js-headRow"></tr>\n</thead>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/paginator/table-paginator-loader.tpl":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/paginator/table-paginator-loader.tpl ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-LoaderIcon is-dark">\n  <svg class="CDB-LoaderIcon-spinner" viewbox="0 0 50 50">\n    <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"/>\n  </svg>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/table/paginator/table-paginator.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/table/paginator/table-paginator.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button class="Table-paginatorButton Table-paginatorButton--prev\n  ';
 if (isPrevAvailable) { ;
__p += '\n    js-prev\n    is-active\n  ';
 } ;
__p += '\n">\n  <i class="CDB-IconFont is-semibold CDB-IconFont-lArrowLight CDB-Size-small\n  ';
 if (isPrevAvailable) { ;
__p += '\n    u-actionTextColor\n  ';
 } else { ;
__p += '\n    u-hintTextColor\n  ';
 } ;
__p += '\n  "></i>\n</button>\n<p class="Table-paginatorText CDB-Text CDB-Size-small is-semibold u-upperCase">\n  ';
 if (!size) {;
__p += '\n   <span class="u-mainTextColor">…</span>\n  ';
 } else { ;
__p += '\n    <span class="u-mainTextColor">' +
__e( (page * 40) + 1 ) +
'</span>\n    <span class="u-altTextColor u-lSpace u-rSpace">' +
__e( _t('components.table.rows.paginator.to') ) +
'</span>\n    <span class="u-mainTextColor">' +
__e( (page * 40) + size ) +
'</span>\n  ';
 } ;
__p += '\n</p>\n<button class="Table-paginatorButton Table-paginatorButton--next\n  ';
 if (isNextAvailable) { ;
__p += '\n    js-next\n    is-active\n  ';
 } ;
__p += '\n">\n  <i class="CDB-IconFont is-semibold CDB-IconFont-rArrowLight CDB-Size-small\n  ';
 if (isNextAvailable) { ;
__p += '\n    u-actionTextColor\n  ';
 } else { ;
__p += '\n    u-hintTextColor\n  ';
 } ;
__p += '\n  "></i>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/toggler/toggler.tpl":
/*!***********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/toggler/toggler.tpl ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Text CDB-Size-small is-semibold u-rSpace--xl';
 if (disabled) { ;
__p += ' is-disabled';
 } ;
__p += '">\n  <label class="u-iBlock u-upperCase">' +
__e( labels[0] ) +
'</label>\n  <input class="CDB-Toggle u-iBlock js-input" type="checkbox"\n    ';
 if (disabled) { ;
__p += ' disabled';
 } ;
__p += '\n    ';
 if (checked) { ;
__p += ' checked ';
 } ;
__p += ' >\n  <span class="u-iBlock CDB-ToggleFace"></span>\n  <label class="u-iBlock u-upperCase">' +
__e( labels[1] ) +
'</label>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/undo-redo/undo-redo.tpl":
/*!***************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/undo-redo/undo-redo.tpl ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="u-flex u-alignCenter">\n  <button class="js-undo">\n    <i class="CDB-IconFont CDB-IconFont-undo Size-large u-actionTextColor js-theme ';
 if (!canUndo) { ;
__p += 'is-disabled';
 } ;
__p += '"></i>\n  </button>\n\n  <button class="u-lSpace--xl js-redo">\n    <i class="CDB-IconFont CDB-IconFont-redo Size-large u-actionTextColor js-theme ';
 if (!canRedo) { ;
__p += 'is-disabled';
 } ;
__p += '"></i>\n  </button>\n\n  ';
 if (canClear) { ;
__p += '\n  <button class="u-lSpace--xl CDB-Button CDB-Button--secondary CDB-Button--white js-clear">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small">' +
__e( _t('components.undo-redo.clear') ) +
'</span>\n  </button>\n  ';
 } ;
__p += '\n\n  ';
 if (canApply) { ;
__p += '\n  <button class="u-lSpace--xl CDB-Button CDB-Button--loading CDB-Button--primary js-apply\n    ';
 if (isLoading) {;
__p += ' is-loading is-disabled';
 } ;
__p += '\n    ';
 if (isDisabled) {;
__p += ' is-disabled';
 } ;
__p += '\n  ">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small">' +
__e( _t('components.undo-redo.apply') ) +
'</span>\n    <div class="CDB-Button-loader CDB-LoaderIcon is-white">\n      <svg class="CDB-LoaderIcon-spinner" viewbox="0 0 50 50">\n        <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"/>\n      </svg>\n    </div>\n  </button>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/components/view-options/panel-with-options.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/components/view-options/panel-with-options.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Editor-content js-content js-overlay"></div>\n<div class="js-info"></div>\n<ul class="Options-bar u-flex u-justifySpace js-theme js-optionsBar">\n  <li class="CDB-InfoBox-footerItem js-controls"></li>\n  <li class="CDB-InfoBox-footerItem CDB-InfoBox-footerItem--right js-actions"></li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/data/default-cartography.json":
/*!**********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/data/default-cartography.json ***!
  \**********************************************************************/
/*! exports provided: simple, default */
/***/ (function(module) {

module.exports = {"simple":{"point":{"fill":{"size":{"fixed":7},"color":{"fixed":"#EE4D5A","opacity":0.9}},"stroke":{"size":{"fixed":1},"color":{"fixed":"#FFFFFF","opacity":1}}},"line":{"fill":{},"stroke":{"size":{"fixed":1.5},"color":{"fixed":"#4CC8A3","opacity":1}}},"polygon":{"fill":{"color":{"fixed":"#826DBA","opacity":0.9}},"stroke":{"size":{"fixed":1},"color":{"fixed":"#FFFFFF","opacity":0.5}}}}};

/***/ }),

/***/ "./lib/assets/javascripts/builder/data/default-form-styles.json":
/*!**********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/data/default-form-styles.json ***!
  \**********************************************************************/
/*! exports provided: fill, stroke, blending, aggregation, labels, default */
/***/ (function(module) {

module.exports = {"fill":{"size":{"fixed":7},"color":{"fixed":"#EE4D5A","opacity":0.9}},"stroke":{"size":{"fixed":1},"color":{"fixed":"#FFFFFF","opacity":1}},"blending":"none","aggregation":{},"labels":{"enabled":false,"attribute":null,"font":"DejaVu Sans Book","fill":{"size":{"fixed":10},"color":{"fixed":"#FFFFFF","opacity":1}},"halo":{"size":{"fixed":1},"color":{"fixed":"#6F808D","opacity":1}},"offset":-10,"overlap":true,"placement":"point"}};

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset.js":
/*!***************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ACTIVE_LOCALE = window.ACTIVE_LOCALE;
if (ACTIVE_LOCALE !== 'en') {
  __webpack_require__("./node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + ACTIVE_LOCALE);
}
var Locale = __webpack_require__(/*! locale/index */ "./lib/assets/javascripts/locale/index.js");
var Polyglot = __webpack_require__(/*! node-polyglot */ "./node_modules/node-polyglot/index.js");
__webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/promise.js");
var polyglot = new Polyglot({
  locale: ACTIVE_LOCALE, // Needed for pluralize behaviour
  phrases: Locale[ACTIVE_LOCALE]
});
window._t = polyglot.t.bind(polyglot);

var ForbiddenAction = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptors/forbidden-403 */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptors/forbidden-403.js");
var NetworkResponseInterceptor = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptor */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptor.js");
NetworkResponseInterceptor.addURLPattern('api/v');
NetworkResponseInterceptor.addErrorInterceptor(ForbiddenAction());
NetworkResponseInterceptor.start();

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var ConfigModel = __webpack_require__(/*! builder/data/config-model */ "./lib/assets/javascripts/builder/data/config-model.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var MetricsTracker = __webpack_require__(/*! builder/components/metrics/metrics-tracker */ "./lib/assets/javascripts/builder/components/metrics/metrics-tracker.js");
var AnalysisDefinitionNodeSourceModel = __webpack_require__(/*! builder/data/analysis-definition-node-source-model */ "./lib/assets/javascripts/builder/data/analysis-definition-node-source-model.js");
var LayerDefinitionModel = __webpack_require__(/*! builder/data/layer-definition-model */ "./lib/assets/javascripts/builder/data/layer-definition-model.js");
var TableModel = __webpack_require__(/*! builder/data/table-model */ "./lib/assets/javascripts/builder/data/table-model.js");
var VisTableModel = __webpack_require__(/*! builder/data/visualization-table-model */ "./lib/assets/javascripts/builder/data/visualization-table-model.js");
var DatasetUnlockModalView = __webpack_require__(/*! builder/dataset/dataset-unlock-modal-view */ "./lib/assets/javascripts/builder/dataset/dataset-unlock-modal-view.js");
var EditorModel = __webpack_require__(/*! builder/data/editor-model */ "./lib/assets/javascripts/builder/data/editor-model.js");
var UserModel = __webpack_require__(/*! builder/data/user-model */ "./lib/assets/javascripts/builder/data/user-model.js");
var Notifier = __webpack_require__(/*! builder/components/notifier/notifier */ "./lib/assets/javascripts/builder/components/notifier/notifier.js");
var UserGroupFetcher = __webpack_require__(/*! builder/data/users-group-fetcher */ "./lib/assets/javascripts/builder/data/users-group-fetcher.js");
var SQLUtils = __webpack_require__(/*! builder/helpers/sql-utils */ "./lib/assets/javascripts/builder/helpers/sql-utils.js");
var layerTypesAndKinds = __webpack_require__(/*! builder/data/layer-types-and-kinds */ "./lib/assets/javascripts/builder/data/layer-types-and-kinds.js");
var DatasetView = __webpack_require__(/*! builder/dataset/dataset-view */ "./lib/assets/javascripts/builder/dataset/dataset-view.js");

var userData = window.userData;
var visData = window.visualizationData;
var tableData = window.tableData;
var layersData = window.layersData;
var frontendConfig = window.frontendConfig;
var authTokens = window.authTokens;

var configModel = new ConfigModel(_.defaults({
  base_url: userData.base_url,
  api_key: userData.api_key,
  auth_tokens: authTokens
}, frontendConfig));
var userModel = new UserModel(userData, { configModel: configModel });
var modals = new ModalsServiceModel();
var tableModel = new TableModel(tableData, { parse: true, configModel: configModel });
var editorModel = new EditorModel();
var Router = new Backbone.Router();
var visModel = new VisTableModel(visData, { configModel: configModel });
var layersCollection = new Backbone.Collection(layersData);
var layerDataModel = layersCollection.find(function (mdl) {
  var kind = mdl.get('kind');
  return layerTypesAndKinds.isKindDataLayer(kind);
});

var layerModel = new LayerDefinitionModel(layerDataModel.toJSON(), {
  configModel: configModel,
  parse: true
});

layerModel.url = function () {
  var baseUrl = configModel.get('base_url');
  return baseUrl + '/api/v1/maps/' + visData.map_id + '/layers/' + layerModel.id;
};

// It is possible that a layer doesn't contain
if (!layerModel.get('sql')) {
  var defaultQuery = SQLUtils.getDefaultSQL(tableModel.getUnqualifiedName(), tableModel.get('permission').owner.username, userModel.isInsideOrg());
  layerModel.set('sql', defaultQuery);
}

var analysisDefinitionNodeModel = new AnalysisDefinitionNodeSourceModel({
  table_name: tableData.name,
  query: layerModel.get('sql'),
  type: 'source',
  id: 'dummy-id'
}, {
  configModel: configModel,
  userModel: userModel,
  tableData: _.extend(tableData, {
    synchronization: visData.synchronization || {}
  })
});

UserGroupFetcher.track({
  userModel: userModel,
  configModel: configModel,
  acl: visModel.getPermissionModel().acl
});

// Request geometries is case that the sql is custom, if not, follow
// what table info provides
var queryGeometryModel = analysisDefinitionNodeModel.queryGeometryModel;

if (!analysisDefinitionNodeModel.isCustomQueryApplied()) {
  var simpleGeom = tableModel.getGeometryType();
  queryGeometryModel.set({
    status: 'fetched',
    simple_geom: simpleGeom && simpleGeom[0]
  });
} else {
  queryGeometryModel.fetch();
}

Notifier.init({
  editorModel: editorModel
});

MetricsTracker.init({
  userId: userModel.get('id'),
  visId: visModel.get('id'),
  configModel: configModel
});

var notifierView = Notifier.getView();
$('.js-notifier').append(notifierView.render().el);

var rootUrl = configModel.get('base_url').replace(window.location.origin, '') + '/dataset/';
Backbone.history.start({
  pushState: true,
  root: rootUrl
});

if (tableModel.isOwner(userModel) && visModel.get('locked')) {
  modals.create(function (modalModel) {
    return new DatasetUnlockModalView({
      modalModel: modalModel,
      visModel: visModel,
      configModel: configModel,
      tableName: tableModel.getUnquotedName()
    });
  });
}

var datasetView = new DatasetView({
  router: Router,
  modals: modals,
  editorModel: editorModel,
  configModel: configModel,
  userModel: userModel,
  visModel: visModel,
  analysisDefinitionNodeModel: analysisDefinitionNodeModel,
  layerDefinitionModel: layerModel
});
$('body').prepend(datasetView.render().el);

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/data-sql-model.js":
/*!******************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/data-sql-model.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var UndoManager = __webpack_require__(/*! builder/data/undo-manager.js */ "./lib/assets/javascripts/builder/data/undo-manager.js");

/**
 *  Data SQL Undo-redo model
 */
module.exports = Backbone.Model.extend({

  defaults: {
    content: ''
  },

  initialize: function initialize(attrs, opts) {
    this._history = this._generateHistory(opts && opts.history);

    UndoManager.init(this, {
      track: true,
      history: this._history
    });
  },

  _generateHistory: function _generateHistory(history) {
    if (history && history.length) {
      var data = _.reduce(history, function (memo, sql) {
        memo.push({
          content: sql
        });
        return memo;
      }, [], this);
      return data;
    }

    return false;
  },

  getHistory: function getHistory() {
    return _.pluck(this.getUndoHistory(), 'content');
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options-view.js":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options-view.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var ModalExportDataView = __webpack_require__(/*! builder/components/modals/export-data/modal-export-data-view */ "./lib/assets/javascripts/builder/components/modals/export-data/modal-export-data-view.js");
var SyncInfoView = __webpack_require__(/*! ./dataset-content-sync-view */ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync-view.js");
var template = __webpack_require__(/*! ./dataset-content-options.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['analysisDefinitionNodeModel', 'configModel', 'modals', 'userModel'];

module.exports = CoreView.extend({

  className: 'Dataset-viewOptions u-flex u-justifySpace u-alignCenter',

  events: {
    'click .js-addRow': '_onAddRowClick',
    'click .js-addColumn': '_onAddColumnClick',
    'click .js-export': '_onExportClick'
  },

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    this._tableModel = this._analysisDefinitionNodeModel.getTableModel();
    this._querySchemaModel = this._analysisDefinitionNodeModel.querySchemaModel;
    this._queryGeometryModel = this._analysisDefinitionNodeModel.queryGeometryModel;
    this._syncModel = this._tableModel.getSyncModel();

    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template({
      isEditable: !this._analysisDefinitionNodeModel.isReadOnly(),
      isCustomQueryApplied: this._analysisDefinitionNodeModel.isCustomQueryApplied()
    }));
    this._initViews();
    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._querySchemaModel, 'change:query', this.render);
    this.listenTo(this._syncModel, 'destroy', this.render);
  },

  _initViews: function _initViews() {
    if (this._tableModel.isSync() && this._tableModel.isOwner(this._userModel)) {
      var syncInfo = new SyncInfoView({
        modals: this._modals,
        syncModel: this._syncModel,
        tableModel: this._tableModel,
        querySchemaModel: this._querySchemaModel
      });

      this.$('.js-sync').html(syncInfo.render().el);
      this.addView(syncInfo);
    }
  },

  _onExportClick: function _onExportClick() {
    this._modals.create(function (modalModel) {
      return new ModalExportDataView({
        modalModel: modalModel,
        fromView: 'dataset',
        configModel: this._configModel,
        filename: this._tableModel.getUnquotedName(),
        queryGeometryModel: this._queryGeometryModel,
        querySchemaModel: this._querySchemaModel,
        canHideColumns: false
      });
    }.bind(this));
  },

  _onAddRowClick: function _onAddRowClick() {
    this.trigger('addRow', this);
  },

  _onAddColumnClick: function _onAddColumnClick() {
    this.trigger('addColumn', this);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="js-sync"></div>\n<div class="js-dataset">\n  <ul class="u-flex u-justifySpace">\n    ';
 if (isEditable) { ;
__p += '\n      <li>\n        <button class="CDB-Text CDB-Size-small is-semibold u-actionTextColor u-upperCase js-addRow">\n          <div class="u-flex u-alignCenter">\n            <svg width="16px" height="18px" viewBox="0 0 16 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <defs>\n                <path d="M4,3 L4,0 L3,0 L3,3 L0,3 L0,4 L3,4 L3,7 L4,7 L4,4 L7,4 L7,3 L4,3 Z" id="path-1"></path>\n                <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="7" height="7" fill="white">\n                    <use xlink:href="#path-1"></use>\n                </mask>\n              </defs>\n              <g id="Add-Row" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                <use id="Combined-Shape" stroke="#1181FB" mask="url(#mask-2)" stroke-width="2" xlink:href="#path-1"></use>\n                <path d="M16,0 L16,3 L9,3 L9,0 L16,0 Z M10.0020142,1 L10.000989,2.01795972 L14.9926249,2.00301586 L14.9962966,1.00580263 L10.0020142,1 Z" id="Combined-Shape" fill="#1181FB"></path>\n                <path d="M16,4 L16,7 L9,7 L9,4 L16,4 Z M10.0020142,5 L10.000989,6.01795972 L14.9926249,6.00301586 L14.9962966,5.00580263 L10.0020142,5 Z" id="Combined-Shape-Copy" fill="#1181FB"></path>\n              </g>\n            </svg>\n            <span class="u-lSpace">\n              ' +
__e( _t('dataset.options.add-row') ) +
'\n            </span>\n          </div>\n        </button>\n      </li>\n      <li class="u-lSpace--xl">\n        <button class="CDB-Text CDB-Size-small is-semibold u-actionTextColor u-upperCase js-addColumn">\n          <div class="u-flex u-alignCenter">\n            <svg width="16px" height="18px" viewBox="0 4 16 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <g id="Add-Column" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 4.000000)">\n                <path d="M4,3 L4,0 L3,0 L3,3 L0,3 L0,4 L3,4 L3,7 L4,7 L4,4 L7,4 L7,3 L4,3 Z" id="Combined-Shape" fill="#1181FB"></path>\n                <path d="M9,0 L12,0 L12,7 L9,7 L9,0 Z M10,1 L11,1 L11,6 L10,6 L10,1 Z" id="Combined-Shape" fill="#1181FB"></path>\n                <path d="M13,0 L16,0 L16,7 L13,7 L13,0 Z M14,1 L15,1 L15,6 L14,6 L14,1 Z" id="Combined-Shape-Copy-2" fill="#1181FB"></path>\n              </g>\n            </svg>\n            <span class="u-lSpace">\n              ' +
__e( _t('dataset.options.add-column') ) +
'\n            </span>\n          </div>\n        </button>\n      </li>\n    ';
 } ;
__p += '\n    <li class="u-lSpace--xl">\n      <button class="CDB-Text CDB-Size-small is-semibold u-actionTextColor u-upperCase is-disabled js-export">\n        <div class="u-flex u-alignCenter">\n          <svg width="11px" height="18px" viewBox="-1 2 11 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <g id="Esport" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 3.000000)" stroke-linecap="square">\n              <path d="M4.5,0.5 L4.5,6.5" id="Line" stroke="#1181FB"></path>\n              <path d="M4.5,7.5 L8.5,3.5" id="Line" stroke="#1181FB"></path>\n              <path d="M4.5,7.5 L0.5,3.5" id="Line" stroke="#1181FB"></path>\n            </g>\n          </svg>\n          <span class="u-lSpace">\n            ' +
__e( _t('dataset.options.export') ) +
'\n          </span>\n        </div>\n      </button>\n    </li>\n  </ul>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync-view.js":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync-view.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");
var CreationModalView = __webpack_require__(/*! builder/components/modals/creation/modal-creation-view */ "./lib/assets/javascripts/builder/components/modals/creation/modal-creation-view.js");
var SyncOptionsModalView = __webpack_require__(/*! builder/components/modals/sync-options/sync-options-modal-view */ "./lib/assets/javascripts/builder/components/modals/sync-options/sync-options-modal-view.js");
var SyncModel = __webpack_require__(/*! builder/data/synchronization-model */ "./lib/assets/javascripts/builder/data/synchronization-model.js");
var template = __webpack_require__(/*! ./dataset-content-sync.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync.tpl");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['syncModel', 'tableModel', 'querySchemaModel', 'modals'];

module.exports = CoreView.extend({
  tagName: 'div',
  className: 'SyncInfo',

  events: {
    'click .js-options': '_onClickOptions',
    'click .js-syncNow': '_onClickSyncNow'
  },

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);
    this._startSync = this._startSync.bind(this);

    this._initBinds();

    // Check sync now button
    if (this._syncModel.isSyncing()) {
      this._showSyncNowModal();
    }
  },

  render: function render() {
    this.clearSubViews();
    var runAt = this._syncModel.get('run_at');

    var d = {
      canSyncNow: this._syncModel.canSyncNow(),
      fromExternalSource: this._syncModel.get('from_external_source'),
      ranAt: moment(this._syncModel.get('ran_at') || new Date()).fromNow(),
      runAt: moment(runAt).fromNow(),
      state: this._syncModel.get('state'),
      errorCode: this._syncModel.get('error_code'),
      errorMessage: this._syncModel.get('error_message')
    };

    // Due to the time we need to polling, we have to display to the user
    // that the sync will be in a moment
    if (!runAt || new Date(runAt) <= new Date()) {
      d.runAt = _t('dataset.sync.in-a-moment');
    }

    this.$el.html(template(d)).removeClass().addClass(this.className + ' ' + 'is-' + d.state);

    // Tipsy
    var tooltip = new TipsyTooltipView({
      el: this.$('.js-syncNowDisabled'),
      title: function title() {
        return _t('dataset.sync.disabled', {
          gap: SyncModel.SYNC_GAP / (1000 * 60)
        });
      }
    });
    this.addView(tooltip);

    return this;
  },

  _initBinds: function _initBinds() {
    // Unbind in clean method
    this._syncModel.bind('change', this.render, this);
  },

  _bindChangeSyncEvent: function _bindChangeSyncEvent() {
    this._syncModel.bind('change:state', this._finishSync, this);
  },

  _unbindChangeSyncEvent: function _unbindChangeSyncEvent() {
    this._syncModel.unbind(null, null, this);
  },

  _onClickSyncNow: function _onClickSyncNow(e) {
    if (e) this.killEvent(e);

    if (this._syncModel.canSyncNow()) {
      this._showSyncNowModal();
    }
  },

  _onClickOptions: function _onClickOptions(e) {
    var self = this;
    var tableName = this._tableModel.getUnqualifiedName();

    this._modals.create(function (modalModel) {
      return new SyncOptionsModalView({
        modalModel: modalModel,
        syncModel: self._syncModel,
        tableName: tableName
      });
    });
  },

  _startSync: function _startSync() {
    this.render();
    this._bindChangeSyncEvent();
    this._syncModel.pollCheck();
  },

  _finishSync: function _finishSync() {
    if (!this._syncModel.isSyncing()) {
      this._unbindChangeSyncEvent();
      this._syncModel.destroyCheck();

      // Reload table
      this._querySchemaModel.set({
        status: 'unfetched',
        query: 'SELECT * FROM ' + this._tableModel.getUnquotedName()
      });

      this.render();
    }
  },

  _showSyncNowModal: function _showSyncNowModal(e) {
    var self = this;
    var tableName = this._tableModel.getUnqualifiedName();

    this._modals.create(function (modalModel) {
      return new CreationModalView({
        modalModel: modalModel,
        loadingTitle: _t('dataset.sync.loading', { tableName: tableName }),
        errorTitle: _t('dataset.sync.error', { tableName: tableName }),
        runAction: function runAction(opts) {
          self._syncModel.set({
            state: 'syncing',
            error_code: '',
            error_message: ''
          });

          self._syncModel.bind('change:state', function () {
            if (!self._syncModel.isSyncing()) {
              modalModel.destroy();
            }
          }, self);

          self._syncModel.syncNow(self._startSync);
        }
      });
    });
  },

  clean: function clean() {
    this._unbindChangeSyncEvent();
    CoreView.prototype.clean.apply(this);
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-sync.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p class="CDB-Text CDB-Size-small u-secondaryTextColor">\n  <span class="SyncInfo-state SyncInfo-state--small SyncInfo-state--' +
__e( state ) +
' u-rSpace--s"></span>\n  <span class="u-upperCase">\n    ';
 if (state === "success") { ;
__p += '\n      ' +
__e( _t('dataset.sync.synced', { ranAt: ranAt }) ) +
'.\n    ';
 } else if (state === "syncing") { ;
__p += '\n      ' +
__e( _t('dataset.sync.syncing') ) +
'...\n    ';
 } else if (state === "failure") { ;
__p += '\n      ' +
__e( _t('dataset.sync.sync-failed') ) +
'.\n    ';
 } ;
__p += '\n  </span>\n\n  ';
 if (state === "success") { ;
__p += '\n    ' +
__e( _t('dataset.sync.next', { runAt: runAt }) ) +
'.\n  ';
 } else if (state === "syncing") { ;
__p += '\n    ';
 /* There's no need to add extra text in this case. */ ;
__p += '\n  ';
 } else if (errorCode || errorMessage) { ;
__p += '\n    ' +
__e( _t('dataset.sync.error-code', { errorCode: errorCode }) ) +
': ' +
__e( errorMessage ) +
'.\n  ';
 } ;
__p += '\n\n  ';
 if (!fromExternalSource) { ;
__p += '\n    ';
 if (state !== "syncing") { ;
__p += '\n      <button class="';
 if (canSyncNow) { ;
__p += 'u-actionTextColor js-syncNow';
 } else { ;
__p += 'is-disabled js-syncNowDisabled';
 } ;
__p += '">' +
__e( _t('dataset.sync.sync-now') ) +
'</button>.\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n\n  ';
 if (state !== "syncing") { ;
__p += '\n    <button class="js-options u-actionTextColor">' +
__e( _t('dataset.sync.view-options') ) +
'</button>.\n  ';
 } ;
__p += '\n</p>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-view.js":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-view.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var TableManager = __webpack_require__(/*! builder/components/table/table-manager */ "./lib/assets/javascripts/builder/components/table/table-manager.js");
var DatasetContentOptionsView = __webpack_require__(/*! ./dataset-content-options-view */ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-options-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['analysisDefinitionNodeModel', 'configModel', 'modals', 'userModel', 'visModel'];

module.exports = CoreView.extend({

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);
    this.listenTo(this._visModel, 'change:name', this._onChangeTableVisName);
  },

  render: function render() {
    this.clearSubViews();
    this._initViews();
    return this;
  },

  _initViews: function _initViews() {
    this._tableView = TableManager.create({
      relativePositionated: true,
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      configModel: this._configModel,
      modals: this._modals,
      userModel: this._userModel
    });
    this.addView(this._tableView);
    this.$el.append(this._tableView.render().el);

    var datasetContentOptionsView = new DatasetContentOptionsView({
      modals: this._modals,
      userModel: this._userModel,
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      configModel: this._configModel
    });
    datasetContentOptionsView.bind('addColumn', function () {
      this._tableView.addColumn();
    }, this);
    datasetContentOptionsView.bind('addRow', function () {
      this._tableView.addRow();
    }, this);

    this.addView(datasetContentOptionsView);
    this.$el.prepend(datasetContentOptionsView.render().el);
  },

  _onChangeTableVisName: function _onChangeTableVisName() {
    // Although all operations related with table rename are managed in the analysis-definition-source-node-model
    // this columnsCollection doesn't belong to it and we need to take from it is generated.
    this._tableView && this._tableView.getColumnsCollection().setTableName(this._visModel.get('name'));
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-header/create-context-menu.js":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-header/create-context-menu.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var ContextMenuView = __webpack_require__(/*! builder/components/context-menu/context-menu-view */ "./lib/assets/javascripts/builder/components/context-menu/context-menu-view.js");
var CustomListCollection = __webpack_require__(/*! builder/components/custom-list/custom-list-collection */ "./lib/assets/javascripts/builder/components/custom-list/custom-list-collection.js");
var REQUIRED_OPTS = ['ev', 'isTableOwner', 'isSync', 'isCustomQuery', 'triggerElementID', 'canCreateDatasets'];

module.exports = function (opts) {
  var data = {};
  _.each(REQUIRED_OPTS, function (item) {
    if (opts[item] === undefined) throw new Error(item + ' is required');
    data['_' + item] = opts[item];
  });

  var position = { x: data._ev.clientX, y: data._ev.clientY };
  var menuItems = [{
    label: _t('dataset.duplicate.' + (data._isCustomQuery ? 'customOption' : 'option')),
    val: 'duplicate',
    action: function action() {
      this.trigger('duplicate');
    },
    disabled: !data._canCreateDatasets
  }];

  if (data._isTableOwner) {
    if (!data._isSync) {
      menuItems.push({
        label: _t('dataset.rename.option'),
        val: 'rename',
        action: function action() {
          this.trigger('rename');
        }
      });
    }

    menuItems = menuItems.concat([{
      label: _t('dataset.metadata.option'),
      val: 'metadata',
      action: function action() {
        this.trigger('metadata');
      }
    }, {
      label: _t('dataset.lock.option'),
      val: 'lock',
      action: function action() {
        this.trigger('lock');
      }
    }, {
      label: _t('dataset.delete.option'),
      val: 'delete',
      destructive: true,
      action: function action() {
        this.trigger('delete');
      }
    }]);
  }

  var collection = new CustomListCollection(menuItems);

  var view = new ContextMenuView({
    collection: collection,
    triggerElementID: data._triggerElementID,
    position: position
  });

  collection.bind('change:selected', function (menuItem) {
    var action = menuItem.get('action');
    action && action.bind(view)(menuItem);
  }, view);

  view.model.bind('change:visible', function (model, isContextMenuVisible) {
    if (view && !isContextMenuVisible) {
      collection.unbind(null, null, view);
      view.model.unbind(null, null, view);
      view.remove();
    }
  }, view);

  return view;
};

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header-view.js":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header-view.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./dataset-header.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header.tpl");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
var InlineEditorView = __webpack_require__(/*! builder/components/inline-editor/inline-editor-view */ "./lib/assets/javascripts/builder/components/inline-editor/inline-editor-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");
var renameTableOperation = __webpack_require__(/*! builder/dataset/operations/table-rename-operation */ "./lib/assets/javascripts/builder/dataset/operations/table-rename-operation.js");
var templateInlineEditor = __webpack_require__(/*! ./inline-editor.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-header/inline-editor.tpl");
var ConfirmationModalView = __webpack_require__(/*! builder/components/modals/confirmation/modal-confirmation-view */ "./lib/assets/javascripts/builder/components/modals/confirmation/modal-confirmation-view.js");
var RemoveDatasetModalView = __webpack_require__(/*! builder/components/modals/remove-dataset/remove-dataset-view */ "./lib/assets/javascripts/builder/components/modals/remove-dataset/remove-dataset-view.js");
var PublishView = __webpack_require__(/*! builder/components/modals/publish/publish-view */ "./lib/assets/javascripts/builder/components/modals/publish/publish-view.js");
var PrivacyDropdown = __webpack_require__(/*! builder/components/privacy-dropdown/privacy-dropdown-view */ "./lib/assets/javascripts/builder/components/privacy-dropdown/privacy-dropdown-view.js");
var PrivacyCollection = __webpack_require__(/*! builder/components/modals/publish/privacy-collection */ "./lib/assets/javascripts/builder/components/modals/publish/privacy-collection.js");
var CreatePrivacyOptions = __webpack_require__(/*! builder/components/modals/publish/create-privacy-options */ "./lib/assets/javascripts/builder/components/modals/publish/create-privacy-options.js");
var ShareWith = __webpack_require__(/*! builder/components/modals/publish/share-with-view */ "./lib/assets/javascripts/builder/components/modals/publish/share-with-view.js");
var CreationModalView = __webpack_require__(/*! builder/components/modals/creation/modal-creation-view */ "./lib/assets/javascripts/builder/components/modals/creation/modal-creation-view.js");
var EditMetadataView = __webpack_require__(/*! builder/components/modals/dataset-metadata/dataset-metadata-view */ "./lib/assets/javascripts/builder/components/modals/dataset-metadata/dataset-metadata-view.js");
var VisTableModel = __webpack_require__(/*! builder/data/visualization-table-model */ "./lib/assets/javascripts/builder/data/visualization-table-model.js");
var templateConfirmation = __webpack_require__(/*! ./rename-confirmation-modal.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-header/rename-confirmation-modal.tpl");
var createContextMenu = __webpack_require__(/*! ./create-context-menu */ "./lib/assets/javascripts/builder/dataset/dataset-header/create-context-menu.js");
var tableDuplicationOperation = __webpack_require__(/*! builder/dataset/operations/table-duplication-operation */ "./lib/assets/javascripts/builder/dataset/operations/table-duplication-operation.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var TITLE_SUFFIX = ' | CARTO';

var PRIVACY_MAP = {
  public: 'green',
  link: 'orange',
  private: 'red'
};

var REQUIRED_OPTS = ['analysisDefinitionNodeModel', 'configModel', 'layerDefinitionModel', 'modals', 'router', 'userModel', 'visModel'];

module.exports = CoreView.extend({

  className: 'Editor-HeaderInfoEditor',

  events: {
    'click .js-options': '_showContextMenu'
  },

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    var privacyOptions = CreatePrivacyOptions(this._visModel, this._userModel);
    this._querySchemaModel = this._analysisDefinitionNodeModel.querySchemaModel;
    this._tableModel = this._analysisDefinitionNodeModel.getTableModel();
    this._syncModel = this._tableModel.getSyncModel();
    this._privacyCollection = new PrivacyCollection(privacyOptions);

    this._setDocumentTitle();
    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();
    var privacy = this._visModel.get('privacy');

    this.$el.html(template({
      title: this._tableModel.getUnqualifiedName(),
      privacy: privacy,
      isOwner: this._isDatasetOwner(),
      isCustomQueryApplied: this._isCustomQueryApplied(),
      isSync: this._tableModel.isSync(),
      syncState: this._syncModel.get('state'),
      cssClass: PRIVACY_MAP[privacy.toLowerCase()],
      ago: moment(this._visModel.get('updated_at')).fromNow(),
      avatar: this._userModel.get('avatar_url'),
      isInsideOrg: this._userModel.isInsideOrg(),
      hasWriteAccess: this._hasWriteAccess()
    }));

    this._initViews();

    return this;
  },

  _hasWriteAccess: function _hasWriteAccess() {
    var permissionModel = this._tableModel._permissionModel;

    return permissionModel.isOwner(this._userModel) || permissionModel.hasWriteAccess(this._userModel);
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._syncModel, 'change:state change:interval destroy', this.render);
    this.listenTo(this._visModel, 'change:name', this._onChangeName);
    this.listenTo(this._visModel, 'change:privacy change:name', this.render);
    this.listenTo(this._querySchemaModel, 'change:query', this.render);
  },

  _initViews: function _initViews() {
    var isDatasetOwner = this._isDatasetOwner();

    var toggleMenuTooltip = new TipsyTooltipView({
      el: this.$('.js-toggle'),
      gravity: 'w',
      title: function () {
        return this._isHidden() ? _t('editor.layers.options.show') : _t('editor.layers.options.hide');
      }.bind(this)
    });
    this.addView(toggleMenuTooltip);

    if (isDatasetOwner) {
      if (this._tableModel.isSync()) {
        var syncTooltip = new TipsyTooltipView({
          el: this.$('.js-syncState'),
          gravity: 'n',
          title: function () {
            return this._getSyncInfo();
          }.bind(this)
        });
        this.addView(syncTooltip);
      } else {
        this._inlineEditor = new InlineEditorView({
          template: templateInlineEditor,
          renderOptions: {
            name: this._tableModel.getUnqualifiedName()
          },
          onEdit: this._onRenameTable.bind(this)
        });

        this.$('.js-name').html(this._inlineEditor.render().el);
        this.addView(this._inlineEditor);
      }

      if (this._userModel.isInsideOrg()) {
        var shareWith = new ShareWith({
          visDefinitionModel: this._visModel,
          userModel: this._userModel,
          separationClass: 'u-rSpace--m',
          clickPrivacyAction: this._clickPrivacy.bind(this)
        });
        this.$('.js-share-users').append(shareWith.render().el);
        this.addView(shareWith);
      }
    }

    var privacyDropdown = new PrivacyDropdown({
      privacyCollection: this._privacyCollection,
      visDefinitionModel: this._visModel,
      userModel: this._userModel,
      configModel: this._configModel,
      isOwner: isDatasetOwner,
      ownerName: !isDatasetOwner && this._tableModel.getOwnerName()
    });

    this.$('.js-dropdown').append(privacyDropdown.render().el);
    this.addView(privacyDropdown);
  },

  _showContextMenu: function _showContextMenu(ev) {
    var isSync = this._tableModel.isSync();
    var triggerElementID = 'context-menu-trigger-' + this._tableModel.cid;
    this.$('.js-options').attr('id', triggerElementID);

    if (this._menuView && this._menuView.isVisible()) {
      this._menuView.hide();
      this._menuView.clean();
      delete this._menuView;
      return;
    }

    this._menuView = createContextMenu({
      ev: ev,
      isTableOwner: this._isDatasetOwner(),
      isCustomQuery: this._isCustomQueryApplied(),
      isSync: isSync,
      triggerElementID: triggerElementID,
      canCreateDatasets: this._userModel.canCreateDatasets()
    });
    this._menuView.bind('rename', function () {
      this._inlineEditor && this._inlineEditor.edit();
    }, this);
    this._menuView.bind('delete', this._deleteDataset, this);
    this._menuView.bind('duplicate', this._duplicateDataset, this);
    this._menuView.bind('lock', this._lockDataset, this);
    this._menuView.bind('metadata', this._metadataDataset, this);

    this._menuView.show();
    this.addView(this._menuView);
  },

  _deleteDataset: function _deleteDataset() {
    var self = this;

    this._modals.create(function (modalModel) {
      return new RemoveDatasetModalView({
        modalModel: modalModel,
        userModel: self._userModel,
        visModel: self._visModel,
        tableModel: self._tableModel,
        configModel: self._configModel
      });
    });
  },

  _duplicateDataset: function _duplicateDataset() {
    var self = this;
    var tableName = this._tableModel.getUnquotedName();
    var name = this._isCustomQueryApplied() ? _t('dataset.duplicate.query') : tableName;

    this._modals.create(function (modalModel) {
      return new CreationModalView({
        modalModel: modalModel,
        loadingTitle: _t('dataset.duplicate.loading', { name: name }),
        errorTitle: _t('dataset.duplicate.error', { name: name }),
        runAction: function runAction(opts) {
          tableDuplicationOperation({
            query: self._querySchemaModel.get('query'),
            tableModel: self._tableModel,
            configModel: self._configModel,
            onSuccess: function onSuccess(importModel) {
              var tableName = importModel.get('table_name');
              var visTableModel = new VisTableModel({
                id: tableName,
                table: {
                  name: tableName
                }
              }, {
                configModel: self._configModel
              });

              window.location = visTableModel.datasetURL();
            },
            onError: function onError(importModel) {
              var error = importModel.get('get_error_text');
              var errorMessage = error && error.title;
              opts.error && opts.error(errorMessage);
            }
          });
        }
      });
    }, {
      escapeOptionsDisabled: true
    });
  },

  _lockDataset: function _lockDataset() {
    var self = this;
    var tableName = this._tableModel.getUnquotedName();

    this._modals.create(function (modalModel) {
      return new CreationModalView({
        modalModel: modalModel,
        loadingTitle: _t('dataset.lock.loading', { tableName: tableName }),
        errorTitle: _t('dataset.lock.error', { tableName: tableName }),
        runAction: function runAction(opts) {
          self._visModel.save({
            locked: true
          }, {
            wait: true,
            success: function success() {
              window.location = self._configModel.get('base_url') + '/dashboard/datasets';
            },
            error: function error() {
              opts.error && opts.error();
            }
          });
        }
      });
    });
  },

  _metadataDataset: function _metadataDataset() {
    var isLocked = this._tableModel.isSync();
    var self = this;
    this._modals.create(function (modalModel) {
      return new EditMetadataView({
        modalModel: modalModel,
        visDefinitionModel: self._visModel,
        configModel: self._configModel,
        isLocked: isLocked
      });
    });
  },

  _onRenameTable: function _onRenameTable(newName) {
    var self = this;
    this._inlineEditor.hide();

    if (newName === this._visModel.get('name')) {
      return;
    }

    this._modals.create(function (modalModel) {
      return new ConfirmationModalView({
        modalModel: modalModel,
        template: templateConfirmation,
        renderOpts: {
          tableName: self._visModel.get('name')
        },
        runAction: function runAction() {
          modalModel.destroy();

          renameTableOperation({
            visModel: self._visModel,
            newName: newName,
            onError: self._onRenameFailed.bind(self)
          });
        }
      });
    });
  },

  _onRenameFailed: function _onRenameFailed() {
    this._visModel.set('name', this._visModel.previous('name'), { silent: true });
    this.render();
  },

  _onChangeName: function _onChangeName() {
    var name = this._visModel.get('name');
    this._analysisDefinitionNodeModel.setTableName(name);

    this._setDocumentTitle();

    this._layerDefinitionModel.save({
      sql: this._analysisDefinitionNodeModel.getDefaultQuery()
    });

    this._router.navigate(name, {
      replace: true
    });
  },

  _getSyncInfo: function _getSyncInfo() {
    var state = this._syncModel.get('state');
    if (state === 'success') {
      return _t('dataset.sync.synced', { ranAt: moment(this._syncModel.get('ran_at') || new Date()).fromNow() });
    } else if (state === 'failure') {
      var errorCode = this._syncModel.get('error_code');
      var errorMessage = this._syncModel.get('error_message');
      return _t('dataset.sync.error-code', { errorCode: errorCode }) + ':' + errorMessage;
    } else {
      return _t('dataset.sync.syncing');
    }
  },

  _clickPrivacy: function _clickPrivacy() {
    var self = this;

    this._modals.create(function (modalModel) {
      return new PublishView({
        mapcapsCollection: self._mapcapsCollection,
        modalModel: modalModel,
        visDefinitionModel: self._visModel,
        privacyCollection: self._privacyCollection,
        userModel: self._userModel,
        configModel: self._configModel,
        mode: 'share',
        isOwner: self._isDatasetOwner()
      });
    });
  },

  _setDocumentTitle: function _setDocumentTitle() {
    document.title = this._tableModel.get('name') + TITLE_SUFFIX;
  },

  _isCustomQueryApplied: function _isCustomQueryApplied() {
    return this._analysisDefinitionNodeModel.isCustomQueryApplied();
  },

  _isEditable: function _isEditable() {
    return !this._analysisDefinitionNodeModel.isReadOnly();
  },

  _isDatasetOwner: function _isDatasetOwner() {
    return this._tableModel.isOwner(this._userModel);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header.tpl":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header.tpl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Editor-HeaderInfo-inner">\n  <div class="Editor-HeaderInfo-title u-bSpace--m u-flex u-alignCenter">\n    ';
 if (isSync && isOwner) { ;
__p += '\n      <div class="Editor-HeaderInfo-actions">\n        <span class="SyncInfo-state SyncInfo-state--' +
__e( syncState ) +
' u-rSpace--m js-syncState"></span>\n      </div>\n    ';
 } ;
__p += '\n\n    <div class="Editor-HeaderInfo-titleText is-larger js-name">\n      <h2 class="u-ellipsis CDB-Text CDB-Size-huge is-light">' +
__e( title ) +
'</h2>\n    </div>\n\n    <div class="Editor-HeaderInfo-details u-lSpace">\n      ';
 if (!hasWriteAccess) { ;
__p += '\n        <span class="Tag CDB-Text CDB-Size-small u-rSpace u-upperCase js-readPermissionTag">' +
__e( _t('dataset.read') ) +
'</span>\n      ';
 } ;
__p += '\n\n      ';
 if (isCustomQueryApplied) { ;
__p += '\n        <span class="Tag Tag--outline Tag-outline--dark CDB-Text CDB-Size-small u-secondaryTextColor u-rSpace">' +
__e( _t('dataset.sql') ) +
'</span>\n      ';
 } ;
__p += '\n\n      <button class="CDB-Shape js-options">\n        <div class="CDB-Shape-threePoints is-blue is-small">\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n        </div>\n      </button>\n    </div>\n  </div>\n\n  <div class="u-bSpace--xl u-flex u-alignCenter">\n    <div class="js-dropdown u-rSpace--m"></div>\n    ';
 if (isOwner && isInsideOrg) { ;
__p += '\n      <div class="js-share-users"></div>\n    ';
 } ;
__p += '\n    <span class="CDB-Text CDB-Size-medium u-altTextColor">' +
__e( _t('dataset.updated', { ago: ago }) ) +
'</span>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-header/inline-editor.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-header/inline-editor.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="Inline-editor" title="' +
__e( name ) +
'">\n  <h2 class="CDB-Text CDB-Size-huge is-light u-ellipsis js-title Inline-editor-text is-larger">' +
__e( name ) +
'</h2>\n  <input type="text" name="text" class="Inline-editor-input Inline-editor-input--small CDB-Text CDB-InputText js-input" value="' +
__e( name ) +
'" readonly>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-header/rename-confirmation-modal.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-header/rename-confirmation-modal.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="12px" height="23px" viewBox="0 0 12 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M3.85948829,15.9093411 L3.85948829,15.113874 C3.85948829,13.9648603 4.03625698,13.0196388 4.38979966,12.2781813 C4.74334234,11.5367237 5.40131468,10.7535402 6.36373642,9.92860729 C7.6993421,8.79923484 8.54144849,7.94976308 8.89008086,7.38016654 C9.23871322,6.81057 9.41302679,6.12313622 9.41302679,5.31784456 C9.41302679,4.3161403 9.09140598,3.54277728 8.44815472,2.99773232 C7.80490345,2.45268735 6.87932296,2.18016896 5.67138547,2.18016896 C4.8955557,2.18016896 4.13937853,2.27100842 3.40283128,2.45269008 C2.66628403,2.63437173 1.82172252,2.96581302 0.869121409,3.44702389 L0,1.45835626 C1.85609907,0.486113893 3.7956444,0 5.81869418,0 C7.69443451,0 9.15277619,0.461562686 10.193763,1.38470191 C11.2347497,2.30784113 11.7552353,3.60905508 11.7552353,5.28838281 C11.7552353,6.0052888 11.6594856,6.63625482 11.4679833,7.18129978 C11.2764811,7.72634475 10.9941422,8.24192009 10.6209582,8.72804127 C10.2477743,9.21416246 9.44249472,9.99734595 8.20509534,11.0776153 C7.21321171,11.9221894 6.55769449,12.6243539 6.23852401,13.1841299 C5.91935354,13.7439058 5.7597707,14.4902624 5.7597707,15.4232223 L5.7597707,15.9093411 L3.85948829,15.9093411 Z M2.95990869,20.3988536 C2.95990869,19.3235103 3.49337277,18.7858468 4.56031694,18.7858468 C5.07600662,18.7858468 5.47388191,18.9242161 5.75395476,19.2009588 C6.0340276,19.4777016 6.17406192,19.8769958 6.17406192,20.3988536 C6.17406192,20.9048974 6.03180483,21.2982616 5.74728639,21.5789578 C5.46276794,21.859654 5.06711542,22 4.56031694,22 C4.09797446,22 3.71565854,21.8754676 3.41335769,21.6263992 C3.11105685,21.3773307 2.95990869,20.9681529 2.95990869,20.3988536 Z" stroke="none" fill="#FEB100" fill-rule="evenodd" opacity="1"></path>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">\n        ' +
__e( _t('dataset.rename.title', { tableName: tableName }) ) +
'\n      </h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">' +
__e( _t('dataset.rename.desc') ) +
'</p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.rename.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.rename.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/code-mirror-error.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/code-mirror-error.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="CodeMirror-error">\n  <li class="CodeMirror-errorMessage u-lSpace--xl u-rSpace--xl">\n    ' +
__e( _t('components.codemirror.syntax-error') ) +
': <span>' +
__e( message ) +
'</span>\n  </li>\n  <li class="CodeMirror-errorDocs">\n    <a href="https://carto.com/developers/sql-api/" target="_black">' +
__e( _t('components.codemirror.docs') ) +
'</a>\n  </li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-edition-view.js":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-edition-view.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./dataset-actions.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions.tpl");
var UndoButtons = __webpack_require__(/*! builder/components/undo-redo/undo-redo-view */ "./lib/assets/javascripts/builder/components/undo-redo/undo-redo-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['mapAction', 'previewAction', 'trackModel', 'editorModel', 'queryGeometryModel', 'querySchemaModel', 'onApply', 'onClear', 'clearSQLModel', 'applyButtonStatusModel'];

module.exports = CoreView.extend({
  className: 'Dataset-options-actions',

  events: {
    'click .js-createMap': '_onCreateMap',
    'click .js-previewMap': '_onPreviewMap'
  },

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    this._initViewState();
    this.listenTo(this._queryGeometryModel, 'change:status', this._setViewState);
    this.listenTo(this._querySchemaModel, 'change:status', this._updateApplyLoadingButtonLoading);
    this.listenTo(this._viewState, 'change', this.render);
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template({
      hasGeometry: this._viewState.get('hasGeom'),
      canCreateMap: true
    }));
    this._initViews();
    return this;
  },

  _initViewState: function _initViewState() {
    this._viewState = new Backbone.Model({
      hasGeom: true
    });
    this._setViewState();
  },

  _initViews: function _initViews() {
    var view = new UndoButtons({
      className: 'u-rSpace--xl',
      trackModel: this._trackModel,
      editorModel: this._editorModel,
      clearModel: this._clearSQLModel,
      applyStatusModel: this._applyButtonStatusModel,
      applyButton: true,
      clearButton: true,
      onApplyClick: this._handleApply.bind(this),
      onClearClick: this._handleClear.bind(this)
    });

    this.$('.js-createMap').before(view.render().el);
    this.addView(view);
  },

  _handleApply: function _handleApply() {
    if (this._onApply) {
      this._onApply();
    }
  },

  _handleClear: function _handleClear() {
    if (this._onClear) {
      this._onClear();
    }
  },

  _onCreateMap: function _onCreateMap() {
    if (this._mapAction) {
      this._mapAction();
    }
  },

  _onPreviewMap: function _onPreviewMap() {
    if (this._previewAction) {
      this._previewAction();
    }
  },

  _updateApplyLoadingButtonLoading: function _updateApplyLoadingButtonLoading() {
    this._applyButtonStatusModel.set('loading', this._querySchemaModel.isFetching());
  },

  _setViewState: function _setViewState() {
    var self = this;
    this._queryGeometryModel.hasValueAsync().then(function (hasGeom) {
      self._viewState.set('hasGeom', hasGeom);
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-view.js":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-view.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var template = __webpack_require__(/*! ./dataset-actions.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions.tpl");

// 'mapAction' is not required  because a viewer user can't create maps
var REQUIRED_OPTS = {
  previewAction: true,
  queryGeometryModel: true,
  mapAction: false
};

module.exports = CoreView.extend({
  className: 'Dataset-options-actions',

  events: {
    'click .js-createMap': '_onCreateMap',
    'click .js-previewMap': '_onPreviewMap'
  },

  initialize: function initialize(opts) {
    _.each(REQUIRED_OPTS, function (isRequired, item) {
      if (opts[item]) {
        this['_' + item] = opts[item];
      } else if (isRequired) {
        throw new Error(item + ' is required');
      }
    }, this);

    this._initViewState();
    this.listenTo(this._queryGeometryModel, 'change:status', this._setViewState);
    this.listenTo(this._viewState, 'change', this.render);
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template({
      hasGeometry: this._viewState.get('hasGeometry'),
      canCreateMap: !!this._mapAction
    }));
    return this;
  },

  _initViewState: function _initViewState() {
    this._viewState = new Backbone.Model({
      hasGeometry: true
    });
    this._setViewState();
  },

  _onPreviewMap: function _onPreviewMap() {
    this._previewAction && this._previewAction();
  },

  _onCreateMap: function _onCreateMap() {
    this._mapAction && this._mapAction();
  },

  _setViewState: function _setViewState() {
    this._queryGeometryModel.hasValueAsync().then(function (hasGeom) {
      this._viewState.set('hasGeometry', hasGeom);
    }.bind(this)).catch(function () {
      this._viewState.set('hasGeometry', false);
    }.bind(this));
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions.tpl":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions.tpl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (hasGeometry) { ;
__p += '\n  <button class="u-rSpace--xl Dataset-tablePreview js-previewMap">\n    <span class="u-upperCase CDB-Button-Text CDB-Text CDB-Size-small">' +
__e( _t('dataset.preview-map.preview') ) +
'</span>\n  </button>\n';
 } ;
__p += '\n';
 if (canCreateMap) { ;
__p += '\n  <button class="CDB-Button CDB-Button--primary u-upperCase js-createMap">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small">' +
__e( _t('dataset.create-map.title') ) +
'</span>\n  </button>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-options-view.js":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/dataset-options-view.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var VisDefinitionModel = __webpack_require__(/*! builder/data/vis-definition-model */ "./lib/assets/javascripts/builder/data/vis-definition-model.js");
var CreationModalView = __webpack_require__(/*! builder/components/modals/creation/modal-creation-view */ "./lib/assets/javascripts/builder/components/modals/creation/modal-creation-view.js");
var DatasetBaseView = __webpack_require__(/*! builder/components/dataset/dataset-base-view */ "./lib/assets/javascripts/builder/components/dataset/dataset-base-view.js");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");
var PanelWithOptionsView = __webpack_require__(/*! builder/components/view-options/panel-with-options-view */ "./lib/assets/javascripts/builder/components/view-options/panel-with-options-view.js");
var TabPaneView = __webpack_require__(/*! builder/components/tab-pane/tab-pane-view */ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-view.js");
var TabPaneCollection = __webpack_require__(/*! builder/components/tab-pane/tab-pane-collection */ "./lib/assets/javascripts/builder/components/tab-pane/tab-pane-collection.js");
var Toggler = __webpack_require__(/*! builder/components/toggler/toggler-view */ "./lib/assets/javascripts/builder/components/toggler/toggler-view.js");
var DatasetEditorView = __webpack_require__(/*! ./dataset-sql-view */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-sql-view.js");
var ActionView = __webpack_require__(/*! ./dataset-actions-view */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-view.js");
var PreviewMapView = __webpack_require__(/*! ./preview-map-view */ "./lib/assets/javascripts/builder/dataset/dataset-options/preview-map-view.js");
var ActionViewEdition = __webpack_require__(/*! ./dataset-actions-edition-view */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-actions-edition-view.js");
var DataSQLModel = __webpack_require__(/*! builder/dataset/data-sql-model */ "./lib/assets/javascripts/builder/dataset/data-sql-model.js");
var SQLNotifications = __webpack_require__(/*! builder/sql-notifications */ "./lib/assets/javascripts/builder/sql-notifications.js");

var MetricsTracker = __webpack_require__(/*! builder/components/metrics/metrics-tracker */ "./lib/assets/javascripts/builder/components/metrics/metrics-tracker.js");
var MetricsTypes = __webpack_require__(/*! builder/components/metrics/metrics-types */ "./lib/assets/javascripts/builder/components/metrics/metrics-types.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['analysisDefinitionNodeModel', 'configModel', 'editorModel', 'layerDefinitionModel', 'modals', 'onToggleEdition', 'router', 'userModel', 'visModel'];

module.exports = DatasetBaseView.extend({

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    this._querySchemaModel = this._analysisDefinitionNodeModel.querySchemaModel;

    if (!this._layerDefinitionModel.sqlModel) {
      var sqlHistory = this._layerDefinitionModel.options && this._layerDefinitionModel.options.sql_history;
      this._layerDefinitionModel.sqlModel = new DataSQLModel({
        content: this._querySchemaModel.get('query')
      }, {
        history: sqlHistory || []
      });
    }

    DatasetBaseView.prototype.initialize.call(this, {
      layerDefinitionModel: this._layerDefinitionModel,
      editorModel: this._editorModel,
      configModel: this._configModel,
      querySchemaModel: this._querySchemaModel
    });

    this._tableModel = this._analysisDefinitionNodeModel.getTableModel();
    this._queryGeometryModel = this._analysisDefinitionNodeModel.queryGeometryModel;
    this._canCreateMap = this._userModel.hasCreateMapsFeature();
    this._parseSQL = this._internalParseSQL.bind(this);

    SQLNotifications.track(this);

    this._togglerModel = new Backbone.Model({
      labels: [_t('dataset.data'), _t('dataset.sql')],
      active: this._editorModel.isEditing(),
      disabled: this._editorModel.isDisabled()
    });

    this._configPanes();
    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();
    this.$el.empty();
    this._initViews();
    this._checkClearButton();
    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._editorModel, 'change:edition', this._onChangeEdition);
    this.listenTo(this._editorModel, 'change:disabled', this._onChangeDisabled);
    this.listenTo(this._togglerModel, 'change:active', this._onTogglerChanged);
    this.listenTo(this._querySchemaModel, 'change:query_errors', this._showErrors);
    this.listenTo(this._visModel, 'change:name', this._onChangeName);
    this.listenTo(this._sqlModel, 'undo redo', function () {
      this._codemirrorModel.set('content', this._sqlModel.get('content'));
    });
  },

  _onChangeName: function _onChangeName(model, name) {
    this._codemirrorModel.set('content', this._analysisDefinitionNodeModel.getDefaultQuery());
  },

  _initViews: function _initViews() {
    var self = this;

    var panelWithOptionsView = new PanelWithOptionsView({
      editorModel: self._editorModel,
      createContentView: function createContentView() {
        return new TabPaneView({
          collection: self._collectionPane
        });
      },
      createControlView: function createControlView() {
        return new Toggler({
          model: self._togglerModel
        });
      },
      createActionView: function createActionView() {
        return new TabPaneView({
          collection: self._collectionPane,
          createContentKey: 'createActionView'
        });
      }
    });

    this.$el.append(panelWithOptionsView.render().el);
    this.addView(panelWithOptionsView);
  },

  _onChangeEdition: function _onChangeEdition() {
    this._onToggleEdition();

    var edition = this._editorModel.get('edition');
    var index = edition ? 1 : 0;
    this._collectionPane.at(index).set({ selected: true });
    this._togglerModel.set({ active: edition });
  },

  _onChangeDisabled: function _onChangeDisabled() {
    var disabled = this._editorModel.get('disabled');
    this._togglerModel.set({ disabled: disabled });
  },

  _onTogglerChanged: function _onTogglerChanged() {
    var checked = this._togglerModel.get('active');
    this._editorModel.set({ edition: checked });
  },

  _configPanes: function _configPanes() {
    var self = this;
    var tabPaneTabs = [{
      selected: !this._editorModel.get('edition'),
      createContentView: function createContentView() {
        return new CoreView();
      },
      createActionView: function createActionView() {
        var actionViewOptions = {
          queryGeometryModel: self._queryGeometryModel,
          previewAction: self._previewMap.bind(self)
        };
        if (self._canCreateMap) {
          actionViewOptions.mapAction = self._createMap.bind(self);
        }
        return new ActionView(actionViewOptions);
      }
    }, {
      selected: this._editorModel.get('edition'),
      createContentView: function createContentView() {
        return new DatasetEditorView({
          editorModel: self._editorModel,
          codemirrorModel: self._codemirrorModel,
          onApplyEvent: self._parseSQL,
          layerDefinitionModel: self._layerDefinitionModel,
          querySchemaModel: self._querySchemaModel
        });
      },
      createActionView: function createActionView() {
        var actionViewOptions = {
          clearSQLModel: self._clearSQLModel,
          trackModel: self._sqlModel,
          editorModel: self._editorModel,
          queryGeometryModel: self._queryGeometryModel,
          querySchemaModel: self._querySchemaModel,
          onApply: self._parseSQL,
          previewAction: self._previewMap.bind(self),
          onClear: self._clearSQL.bind(self),
          applyButtonStatusModel: self._applyButtonStatusModel
        };
        if (self._canCreateMap) {
          actionViewOptions.mapAction = self._createMap.bind(self);
        }
        return new ActionViewEdition(actionViewOptions);
      }
    }];

    this._collectionPane = new TabPaneCollection(tabPaneTabs);
  },

  _runQuery: function _runQuery(query, callback) {
    this._querySchemaModel.set({
      query: query,
      status: 'unfetched'
    });

    this._queryGeometryModel.set({
      query: query,
      simple_geom: '',
      status: 'unfetched'
    }, {
      silent: true
    });

    this._querySchemaModel.fetch({
      success: callback
    });

    this._queryGeometryModel.fetch();
  },

  _saveSQL: function _saveSQL() {
    var content = this._codemirrorModel.get('content');
    this._sqlModel.set('content', content);
    this._querySchemaModel.set('query_errors', []);

    if (this._tableModel.hasWriteAccess(this._userModel)) {
      this._layerDefinitionModel.save({
        sql: content
      });

      MetricsTracker.track(MetricsTypes.APPLIED_SQL, {
        dataset_id: this._tableModel.get('id'),
        sql: content
      });
    }

    SQLNotifications.showNotification({
      status: 'success',
      info: _t('notifications.sql.success'),
      closable: true
    });

    this._checkClearButton();
  },

  _defaultSQL: function _defaultSQL() {
    return this._analysisDefinitionNodeModel.getDefaultQuery();
  },

  _previewMap: function _previewMap() {
    var previewMap = new PreviewMapView({
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      configModel: this._configModel,
      modals: this._modals,
      userModel: this._userModel,
      visModel: this._visModel
    });
    $('body').append(previewMap.render().el);
    this.addView(previewMap);
  },

  _createMap: function _createMap() {
    var self = this;
    var tableName = this._tableModel.getUnquotedName();

    this._modals.create(function (modalModel) {
      return new CreationModalView({
        modalModel: modalModel,
        loadingTitle: _t('dataset.create-map.loading', { tableName: tableName }),
        errorTitle: _t('dataset.create-map.error', { tableName: tableName }),
        runAction: function runAction(opts) {
          var newVisModel = new VisDefinitionModel({
            name: self._visModel.get('name') + ' ' + _t('editor.map')
          }, {
            configModel: self._configModel
          });

          newVisModel.save({
            source_visualization_id: self._visModel.get('id')
          }, {
            success: function success(visModel) {
              window.location = visModel.builderURL();
            },
            error: function error(mdl, e) {
              opts.error && opts.error(errorParser(e));
            }
          });
        }
      });
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-sql-view.js":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/dataset-sql-view.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var CodeMirrorView = __webpack_require__(/*! builder/components/code-mirror/code-mirror-view */ "./lib/assets/javascripts/builder/components/code-mirror/code-mirror-view.js");
var ErrorTemplate = __webpack_require__(/*! ./code-mirror-error.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-options/code-mirror-error.tpl");
var FactoryHints = __webpack_require__(/*! builder/editor/editor-hints/factory-hints */ "./lib/assets/javascripts/builder/editor/editor-hints/factory-hints.js");
var SQLHints = __webpack_require__(/*! builder/editor/editor-hints/sql-hints */ "./lib/assets/javascripts/builder/editor/editor-hints/sql-hints.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['codemirrorModel', 'onApplyEvent', 'querySchemaModel', 'layerDefinitionModel'];

module.exports = CoreView.extend({
  module: 'dataset:dataset-options:dataset-sql-view',

  className: 'Editor-content Dataset-editor',

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    FactoryHints.init({
      querySchemaModel: this._querySchemaModel,
      layerDefinitionModel: this._layerDefinitionModel,
      tokens: SQLHints
    });
  },

  render: function render() {
    this.clearSubViews();
    this.$el.empty();
    this._initViews();
    return this;
  },

  _initViews: function _initViews() {
    var hints = FactoryHints.reset().hints;
    this.codeMirrorView = new CodeMirrorView({
      className: 'Dataset-codemirror',
      model: this._codemirrorModel,
      hints: hints,
      mode: 'text/x-pgsql',
      tips: [_t('editor.data.code-mirror.tip')],
      errorTemplate: ErrorTemplate
    });

    this.codeMirrorView.bind('codeSaved', this._triggerCodeSaved, this);
    this.addView(this.codeMirrorView);
    this.$el.append(this.codeMirrorView.render().el);
  },

  _triggerCodeSaved: function _triggerCodeSaved(code, view) {
    this._onApplyEvent && this._onApplyEvent();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/preview-map-view.js":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/preview-map-view.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var cdb = __webpack_require__(/*! internal-carto.js */ "./node_modules/internal-carto.js/src/index.js");
var CreationModalView = __webpack_require__(/*! builder/components/modals/creation/modal-creation-view */ "./lib/assets/javascripts/builder/components/modals/creation/modal-creation-view.js");
var VisDefinitionModel = __webpack_require__(/*! builder/data/vis-definition-model */ "./lib/assets/javascripts/builder/data/vis-definition-model.js");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");
var template = __webpack_require__(/*! ./preview-map.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-options/preview-map.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var ESC_KEY_CODE = 27;

var REQUIRED_OPTS = ['analysisDefinitionNodeModel', 'configModel', 'modals', 'userModel', 'visModel'];

module.exports = CoreView.extend({

  className: 'PreviewMap',

  events: {
    'click .js-back': 'clean',
    'click .js-createMap': '_createMap'
  },

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);

    this._tableModel = this._analysisDefinitionNodeModel.getTableModel();
    this._querySchemaModel = this._analysisDefinitionNodeModel.querySchemaModel;
    this._syncModel = this._tableModel.getSyncModel();
    this._canCreateMap = this._userModel.hasCreateMapsFeature();
    this._onKeyDown = this._onKeyDown.bind(this);

    this._initKeydownBinds();
  },

  render: function render() {
    this.$el.html(template({
      isOwner: this._tableModel.isOwner(this._userModel),
      isSync: this._tableModel.isSync(),
      syncState: this._syncModel.get('state'),
      name: this._tableModel.get('name'),
      isCustomQueryApplied: this._analysisDefinitionNodeModel.isCustomQueryApplied(),
      canCreateMap: this._canCreateMap
    }));
    this._initViews();
    return this;
  },

  _initViews: function _initViews() {
    this._map = cdb.createVis(this.$('.js-map'), this._visModel.vizjsonURL(), {
      legends: false,
      authToken: this._configModel.get('auth_tokens')
    });
  },

  _initKeydownBinds: function _initKeydownBinds() {
    $(document).bind('keydown', this._onKeyDown);
  },

  _destroyKeydownBinds: function _destroyKeydownBinds() {
    $(document).unbind('keydown', this._onKeyDown);
  },

  _onKeyDown: function _onKeyDown(ev) {
    var keyCode = ev.which;
    if (keyCode === ESC_KEY_CODE) {
      this.clean();
    }
  },

  _createMap: function _createMap() {
    var self = this;
    var tableName = this._tableModel.getUnquotedName();

    this._modals.create(function (modalModel) {
      return new CreationModalView({
        modalModel: modalModel,
        loadingTitle: _t('dataset.create-map.loading', { tableName: tableName }),
        errorTitle: _t('dataset.create-map.error', { tableName: tableName }),
        runAction: function runAction(opts) {
          var newVisModel = new VisDefinitionModel({
            name: self._visModel.get('name') + ' ' + _t('editor.map')
          }, {
            configModel: self._configModel
          });

          newVisModel.save({
            source_visualization_id: self._visModel.get('id')
          }, {
            success: function success(visModel) {
              window.location = visModel.builderURL();
            },
            error: function error(mdl, e) {
              opts.error && opts.error(errorParser(e));
            }
          });
        }
      });
    });
  },

  clean: function clean() {
    this._destroyKeydownBinds();
    CoreView.prototype.clean.call(this);
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-options/preview-map.tpl":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-options/preview-map.tpl ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="PreviewMap-canvas">\n  <div class="PreviewMap-map js-map"></div>\n  <div class="PreviewMap-info u-flex u-justifySpace u-alignCenter js-info">\n    <div class="PreviewMap-infoName u-flex u-alignCenter">\n      ';
 if (isSync && isOwner) { ;
__p += '\n        <span class="SyncInfo-state SyncInfo-state--' +
__e( syncState ) +
' u-rSpace--m js-syncState"></span>\n      ';
 } ;
__p += '\n      <h2 class="u-ellipsis CDB-Text CDB-Size-large u-rSpace--m is-light">' +
__e( name ) +
'</h2>\n      ';
 if (isCustomQueryApplied) { ;
__p += '\n        <span class="CDB-Tag CDB-Tag--opaque u-secondaryTextColor CDB-Text CDB-Size-medium u-upperCase">' +
__e( _t('dataset.sql') ) +
'</span>\n      ';
 } ;
__p += '\n    </div>\n    <div class="PreviewMap-infoActions">\n      <button class="u-upperCase CDB-Text CDB-Size-small u-lSpace--xl u-actionTextColor js-back">\n        ' +
__e( _t('dataset.preview-map.back') ) +
'\n      </button>\n      ';
 if (canCreateMap) { ;
__p += '\n        <button class="CDB-Button CDB-Button--primary u-upperCase u-lSpace--xl js-createMap">\n          <span class="CDB-Button-Text CDB-Text CDB-Size-small">' +
__e( _t('dataset.create-map.title') ) +
'</span>\n        </button>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-unlock-modal-view.js":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-unlock-modal-view.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");
var template = __webpack_require__(/*! ./dataset-unlock-modal.tpl */ "./lib/assets/javascripts/builder/dataset/dataset-unlock-modal.tpl");
var renderLoading = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var ErrorView = __webpack_require__(/*! builder/components/error/error-view */ "./lib/assets/javascripts/builder/components/error/error-view.js");

var REQUIRED_OPTS = ['tableName', 'visModel', 'configModel', 'modalModel'];

/**
 *  Remove confirmation dialog
 */
module.exports = CoreView.extend({
  className: 'Dialog-content',

  events: {
    'click .js-confirm': '_onConfirm',
    'click .js-cancel': '_onCancel'
  },

  initialize: function initialize(opts) {
    _.each(REQUIRED_OPTS, function (item) {
      if (!opts[item]) throw new Error(item + ' is required');
      this['_' + item] = opts[item];
    }, this);

    this._onKeyDown = this._onKeyDown.bind(this);
    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template({
      tableName: this._tableName
    }));
    return this;
  },

  _initBinds: function _initBinds() {
    $(document).bind('keydown', this._onKeyDown);

    this._modalModel.bind('change:show', function () {
      if (this._visModel.get('locked')) {
        this._onCancel();
      }
    }, this);
    this.add_related_model(this._modalModel);
  },

  _disableBinds: function _disableBinds() {
    $(document).unbind('keydown', this._onKeyDown);
  },

  _onKeyDown: function _onKeyDown(ev) {
    var keyCode = ev.which;
    if (keyCode === $.ui.keyCode.ENTER) {
      this._onConfirm();
    }
  },

  _renderLoadingView: function _renderLoadingView() {
    this.$el.html(renderLoading({
      title: _t('dataset.unlock.loading', { tableName: this._tableName })
    }));
  },

  _renderErrorView: function _renderErrorView(errorMessage) {
    var errorView = new ErrorView({
      title: _t('dataset.unlock.error', { tableName: this._tableName }),
      desc: errorMessage
    });
    this.$el.html(errorView.render().el);
    this.addView(errorView);
  },

  _$content: function _$content() {
    return this.$('.js-content');
  },

  _onConfirm: function _onConfirm() {
    this._renderLoadingView();

    this._visModel.save({
      locked: false
    }, {
      wait: true,
      success: function () {
        this._modalModel.destroy();
      }.bind(this),
      error: function (mdl, e) {
        this._renderErrorView(errorParser(e));
      }.bind(this)
    });
  },

  _onCancel: function _onCancel() {
    window.location = this._configModel.get('base_url');
  },

  clean: function clean() {
    this._disableBinds();
    CoreView.prototype.clean.apply(this);
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-unlock-modal.tpl":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-unlock-modal.tpl ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="16px" height="24px" viewBox="0 5 16 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="lock-open" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0.000000, 5.000000)">\n          <path d="M14,10.727 L14,5.5 C14,2.467 11.532,0 8.5,0 C5.468,0 3,2.467 3,5.5 L4,5.5 C4,3.019 6.019,1 8.5,1 C10.981,1 13,3.019 13,5.5 L13,9.765 C11.629,8.663 9.892,8 8,8 C3.589,8 0,11.589 0,16 C0,20.411 3.589,24 8,24 C12.411,24 16,20.411 16,16 C16,13.979 15.24,12.136 14,10.727 L14,10.727 Z M8,23 C4.141,23 1,19.86 1,16 C1,12.14 4.141,9 8,9 C11.859,9 15,12.14 15,16 C15,19.86 11.859,23 8,23 L8,23 Z" id="Shape" fill="#000000 "></path>\n          <path d="M8,15 C7.448,15 7,15.449 7,16 C7,16.365 7.207,16.672 7.5,16.847 L7.5,19.5 C7.5,19.776 7.724,20 8,20 C8.276,20 8.5,19.776 8.5,19.5 L8.5,16.847 C8.793,16.672 9,16.365 9,16 C9,15.449 8.552,15 8,15 L8,15 Z" id="Shape" fill="#000000 "></path>\n        </g>\n      </svg>\n    </div>\n    <div>\n      <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">' +
__e( _t('dataset.unlock.title', { tableName: tableName }) ) +
'</h2>\n      <p class="CDB-Text CDB-Size-large u-altTextColor">' +
__e( _t('dataset.unlock.desc') ) +
'</p>\n      <ul class="Modal-listActions u-flex u-alignCenter">\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.unlock.cancel') ) +
'\n            </span>\n          </button>\n        </li>\n        <li class="Modal-listActionsitem">\n          <button class="CDB-Button CDB-Button--primary CDB-Button--big js-confirm">\n            <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">\n              ' +
__e( _t('dataset.unlock.confirm') ) +
'\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset-view.js":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset-view.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./dataset.tpl */ "./lib/assets/javascripts/builder/dataset/dataset.tpl");
var HeaderView = __webpack_require__(/*! ./dataset-header/dataset-header-view */ "./lib/assets/javascripts/builder/dataset/dataset-header/dataset-header-view.js");
var DatasetContentView = __webpack_require__(/*! ./dataset-content/dataset-content-view */ "./lib/assets/javascripts/builder/dataset/dataset-content/dataset-content-view.js");
var DatasetOptionsView = __webpack_require__(/*! ./dataset-options/dataset-options-view */ "./lib/assets/javascripts/builder/dataset/dataset-options/dataset-options-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['router', 'modals', 'editorModel', 'configModel', 'userModel', 'visModel', 'analysisDefinitionNodeModel', 'layerDefinitionModel'];

/**
 *  Remove confirmation dialog
 */
module.exports = CoreView.extend({
  className: 'Editor js-editor',

  initialize: function initialize(opts) {
    checkAndBuildOpts(opts, REQUIRED_OPTS, this);
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template({
      url: this._configModel.get('base_url')
    }));
    this._initViews();
    return this;
  },

  _initViews: function _initViews() {
    var datasetHeaderView = new HeaderView({
      router: this._router,
      modals: this._modals,
      configModel: this._configModel,
      userModel: this._userModel,
      visModel: this._visModel,
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      layerDefinitionModel: this._layerDefinitionModel
    });
    this.$('.js-info').append(datasetHeaderView.render().el);
    this.addView(datasetHeaderView);

    var datasetContentView = new DatasetContentView({
      modals: this._modals,
      userModel: this._userModel,
      visModel: this._visModel,
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      configModel: this._configModel
    });
    this.$('.js-table').append(datasetContentView.render().el);
    this.addView(datasetContentView);

    var datasetOptionsView = new DatasetOptionsView({
      onToggleEdition: this._onToggleEdition.bind(this),
      editorModel: this._editorModel,
      router: this._router,
      modals: this._modals,
      configModel: this._configModel,
      userModel: this._userModel,
      visModel: this._visModel,
      analysisDefinitionNodeModel: this._analysisDefinitionNodeModel,
      layerDefinitionModel: this._layerDefinitionModel
    });
    this._getDatasetOptionsElement().append(datasetOptionsView.render().el);
    this.addView(datasetOptionsView);

    var tooltip = new TipsyTooltipView({
      el: this.$('.js-editor-logo'),
      title: function title() {
        return _t('back-to-dashboard');
      },
      gravity: 'w'
    });
    this.addView(tooltip);
  },

  _getDatasetOptionsElement: function _getDatasetOptionsElement() {
    return this.$('.js-datasetOptions');
  },

  _onToggleEdition: function _onToggleEdition() {
    this._getDatasetOptionsElement().toggleClass('is-dark', this._editorModel.isEditing());
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/dataset.tpl":
/*!************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/dataset.tpl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="Editor-wrapper">\n  <div class="EditorMenu">\n    <a class="EditorMenu-logo js-editor-logo" href="' +
__e( url ) +
'/dashboard/datasets">\n      <svg width="32px" height="32px" viewBox="762 -58 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g class="imago" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(762.000000, -58.000000)">\n          <circle class="Halo" fill="#FFFFFF" opacity="0.2" cx="16" cy="16" r="16"></circle>\n          <circle class="point" fill="#FFFFFF" cx="16" cy="16" r="5.5"></circle>\n        </g>\n      </svg>\n    </a>\n  </div>\n</div>\n<div class="Dataset">\n  <div class="Dataset-view">\n    <div class="Dataset-viewInfo js-info"></div>\n    <div class="Dataset-viewTable js-table"></div>\n  </div>\n  <div class="Dataset-options js-datasetOptions"></div>\n  <div class="Dataset-notifier js-notifier"></div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/operations/table-delete-operation.js":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/operations/table-delete-operation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Notifier = __webpack_require__(/*! builder/components/notifier/notifier */ "./lib/assets/javascripts/builder/components/notifier/notifier.js");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");

module.exports = function (opts) {
  if (!opts.visModel) {
    throw new Error('visModel is required');
  }

  var visModel = opts.visModel;
  var successCallback = opts.onSuccess;
  var errorCallback = opts.onError;

  visModel.destroy({
    wait: true,
    success: function success(mdl, attrs) {
      successCallback && successCallback(mdl, attrs);
    },
    error: function error(mdl, e) {
      errorCallback && errorCallback(mdl, e);
      Notifier.addNotification({
        status: 'error',
        info: _t('dataset.delete.error', {
          tableName: visModel.get('name'),
          error: errorParser(e)
        }),
        closable: true
      });
    }
  });
};

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/operations/table-duplication-operation.js":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/operations/table-duplication-operation.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ImportModel = __webpack_require__(/*! builder/data/background-importer/import-model */ "./lib/assets/javascripts/builder/data/background-importer/import-model.js");

module.exports = function (opts) {
  if (!opts.tableModel) throw new Error('tableModel is required');
  if (!opts.query) throw new Error('query is required');
  if (!opts.configModel) throw new Error('configModel is required');

  var tableModel = opts.tableModel;
  var configModel = opts.configModel;
  var query = opts.query;
  var successCallback = opts.onSuccess;
  var errorCallback = opts.onError;
  var attrs = {
    table_name: tableModel.getUnqualifiedName() + '_copy',
    sql: query
  };

  var importModel = new ImportModel({}, {
    configModel: configModel
  });
  importModel.save(attrs, {
    error: errorCallback && errorCallback,
    success: function success(model, changes) {
      model.bind('change:state', function () {
        var state = this.get('state');
        var success = this.get('success');
        if (state === 'failure') {
          errorCallback && errorCallback(model);
        } else if (state === 'complete' && success) {
          successCallback && successCallback(model);
        }
      }, model);
    }
  });
};

/***/ }),

/***/ "./lib/assets/javascripts/builder/dataset/operations/table-rename-operation.js":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/dataset/operations/table-rename-operation.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Notifier = __webpack_require__(/*! builder/components/notifier/notifier */ "./lib/assets/javascripts/builder/components/notifier/notifier.js");
var errorParser = __webpack_require__(/*! builder/helpers/error-parser */ "./lib/assets/javascripts/builder/helpers/error-parser.js");

module.exports = function (opts) {
  if (!opts.visModel) {
    throw new Error('visModel is required');
  }
  if (!opts.newName) {
    throw new Error('newName is required');
  }

  var visModel = opts.visModel;
  var newName = opts.newName;
  var successCallback = opts.onSuccess;
  var errorCallback = opts.onError;
  var notification = Notifier.addNotification({
    status: 'loading',
    info: _t('dataset.rename.loading', { tableName: visModel.get('name') }),
    closable: false
  });

  visModel.save({ name: newName }, {
    wait: true,
    success: function success(mdl, attrs) {
      successCallback && successCallback(mdl, attrs);
      notification.set({
        status: 'success',
        info: _t('dataset.rename.success', { tableName: visModel.get('name') }),
        closable: true
      });
    },
    error: function error(mdl, e) {
      errorCallback && errorCallback(mdl, e);
      notification.set({
        status: 'error',
        info: _t('dataset.rename.error', {
          tableName: visModel.get('name'),
          error: errorParser(e)
        }),
        closable: true
      });
    }
  });
};

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/animated.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/animated.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="56px" height="16px" viewBox="718 455 56 16">\n    <g id="animated" transform="translate(718.000000, 455.000000)" class="Style-fill">\n        <rect id="Rectangle-649" x="40" y="0" width="16" height="16" rx="8"></rect>\n        <rect id="Rectangle-649" opacity="0.8" x="30" y="0" width="16" height="16" rx="8"></rect>\n        <rect id="Rectangle-649" opacity="0.6" x="20" y="0" width="16" height="16" rx="8"></rect>\n        <rect id="Rectangle-649" opacity="0.4" x="10" y="0" width="16" height="16" rx="8"></rect>\n        <rect id="Rectangle-649" opacity="0.2" x="0" y="0" width="16" height="16" rx="8"></rect>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/heatmap.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/heatmap.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="56px" height="25px" viewBox="0 0 56 25" style="will-change: opacity;">\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Aggregation-/-Heatmap" transform="translate(-15.000000, -16.000000)">\n            <g id="Group-7">\n                <g transform="translate(15.000000, 16.000000)">\n                    <g id="Group-2" style="mix-blend-mode: luminosity;" transform="translate(28.000000, 12.500000) rotate(-90.000000) translate(-28.000000, -12.500000) translate(15.500000, -15.500000)" class="Style-fill">\n                        <g id="heat-copy-2" transform="translate(0.000000, 36.000000)">\n                            <circle id="Oval-120" opacity="0.4" cx="6" cy="6" r="6"></circle>\n                            <circle id="Oval-120-Copy" opacity="0.6" cx="6.5" cy="5.5" r="4.03333333"></circle>\n                            <path d="M6.5,8.06666667 C7.91753086,8.06666667 9.06666667,6.91753086 9.06666667,5.5 C9.06666667,4.08246914 7.91753086,2.93333333 6.5,2.93333333 C5.08246914,2.93333333 3.93333333,4.08246914 3.93333333,5.5 C3.93333333,6.91753086 5.08246914,8.06666667 6.5,8.06666667 Z" id="Oval-120-Copy-2" opacity="0.8"></path>\n                            <circle id="Oval-120-Copy-3" cx="6.5" cy="5.5" r="1.1"></circle>\n                        </g>\n                        <g id="heat-copy-2" transform="translate(13.000000, 48.000000)">\n                            <circle id="Oval-120" opacity="0.4" cx="4" cy="4" r="4"></circle>\n                            <circle id="Oval-120-Copy" opacity="0.6" cx="4" cy="4" r="2.93333333"></circle>\n                            <path d="M4,5.86666667 C5.03093153,5.86666667 5.86666667,5.03093153 5.86666667,4 C5.86666667,2.96906847 5.03093153,2.13333333 4,2.13333333 C2.96906847,2.13333333 2.13333333,2.96906847 2.13333333,4 C2.13333333,5.03093153 2.96906847,5.86666667 4,5.86666667 Z" id="Oval-120-Copy-2" opacity="0.8"></path>\n                            <circle id="Oval-120-Copy-3" cx="4" cy="4" r="0.8"></circle>\n                        </g>\n                        <g id="heat-copy-3" transform="translate(0.500000, 0.500000)">\n                            <circle id="Oval-120" opacity="0.4" cx="12" cy="12" r="12"></circle>\n                            <ellipse id="Oval-120-Copy" opacity="0.6" cx="12" cy="12" rx="8.8" ry="8.8"></ellipse>\n                            <path d="M12,17.6 C15.0927946,17.6 17.6,15.0927946 17.6,12 C17.6,8.9072054 15.0927946,6.4 12,6.4 C8.9072054,6.4 6.4,8.9072054 6.4,12 C6.4,15.0927946 8.9072054,17.6 12,17.6 Z" id="Oval-120-Copy-2" opacity="0.8"></path>\n                            <circle id="Oval-120-Copy-3" cx="12" cy="12" r="2.4"></circle>\n                        </g>\n                        <g id="heat" transform="translate(8.000000, 25.000000)">\n                            <path d="M0.0682602115,8.5161863 C0.564222232,12.1776805 3.7025171,15 7.5,15 C11.6421356,15 15,11.6421356 15,7.5 C15,3.35786438 11.6421356,0 7.5,0 C3.35786438,0 0,3.35786438 0,7.5 C0,7.84465272 0.0232475903,8.18387567 0.0682602115,8.5161863 Z" id="Oval-120" opacity="0.4"></path>\n                            <circle id="Oval-120-Copy" opacity="0.6" cx="7.5" cy="7.5" r="5.5"></circle>\n                            <path d="M7.5,11 C9.43299662,11 11,9.43299662 11,7.5 C11,5.56700338 9.43299662,4 7.5,4 C5.56700338,4 4,5.56700338 4,7.5 C4,9.43299662 5.56700338,11 7.5,11 Z" id="Oval-120-Copy-2" opacity="0.8"></path>\n                            <circle id="Oval-120-Copy-3" cx="7.5" cy="7.5" r="1.5"></circle>\n                        </g>\n                    </g>\n                    <g id="Group-8" style="mix-blend-mode: luminosity;" transform="translate(15.000000, 4.000000)">\n                        <path opacity="0.4" d="M6,0.5 C6,0.5 10,4 13,0 C12,2.5 11.5,4.5 11.5,4.5 L10.5,6.5 L7,3.5 L6,0.5 Z" id="Path-494" class="Style-fill"></path>\n                        <path opacity="0.4" d="M21.2158501,6.00893743 C21.2158501,6.00893743 25.2158501,9.50893743 28.2158501,5.50893743 C27.2158501,8.00893743 26.7158501,10.0089374 26.7158501,10.0089374 L25.7158501,12.0089374 L22.2158501,9.00893743 L21.2158501,6.00893743 Z" id="Path-494" class="Style-fill" transform="translate(24.715850, 8.758937) rotate(52.000000) translate(-24.715850, -8.758937) "></path>\n                        <path opacity="0.4" d="M16.9683476,9.30864826 C16.9683476,9.30864826 22.1000758,13.6622016 25.1000758,9.66220164 C24.1000758,12.1622016 23.8307892,14.1229281 23.8307892,14.1229281 L22.8307892,16.1229281 L17.6754544,11.4299685 L16.9683476,9.30864826 Z" id="Path-494" class="Style-fill" transform="translate(21.034212, 12.715788) rotate(-135.000000) translate(-21.034212, -12.715788) "></path>\n                        <path opacity="0.4" d="M6.01244045,6.22463473 C6.01244045,6.22463473 9.69418934,8.6717337 12.6941893,4.6717337 C11.6941893,7.1717337 11.1941893,9.1717337 11.1941893,9.1717337 L10.8665273,11.557349 L9.7765744,13.8621271 L6.01244045,6.22463473 Z" id="Path-494" class="Style-fill" transform="translate(9.353315, 9.266930) rotate(-194.000000) translate(-9.353315, -9.266930) "></path>\n                        <path opacity="0.6" d="M6,7.5 C5.85295664,5.882523 3.5,2.5 3.5,2.5 C3.5,2.5 6.5,5 9,5 C11.5,5 14.5,1 14.5,1 C14.5,1 12.5,4.25504557 12.5,6 C12.5,7.25504557 14.5,10 14.5,10 C14.5,10 12,8 9.5,8 C7,8 4.5,13.5 4.5,13.5 C4.5,13.5 6.18628997,9.54918967 6,7.5 Z" id="Path-497" class="Style-fill"></path>\n                        <path opacity="0.6" d="M19.7830175,9.69012543 C19.6894445,8.07264843 16.7664559,5.429802 16.7664559,5.429802 C16.7664559,5.429802 20.2086087,8.27970692 21.7995178,8.27970692 C23.3904269,8.27970692 26.4566805,5.77970692 26.4566805,5.77970692 C26.4566805,5.77970692 24.4742142,8.43779004 24.4742142,10.1827445 C24.4742142,11.43779 25.8285796,12.5099091 25.8285796,12.5099091 C25.8285796,12.5099091 23.7086087,11.2797069 22.1176996,11.2797069 C20.5267905,11.2797069 17.9729009,15.2555074 17.9729009,15.2555074 C17.9729009,15.2555074 19.9015657,11.7393151 19.7830175,9.69012543 Z" id="Path-497" class="Style-fill" transform="translate(21.611568, 10.342655) rotate(52.000000) translate(-21.611568, -10.342655) "></path>\n                        <path id="Path-499" stroke="#979797"></path>\n                        <polygon id="Path-500" class="Style-fill" points="0.5 12.5 5 7.5 1 4"></polygon>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/hexabins.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/hexabins.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="52px" height="23px" viewBox="0 0 52 23">\n    <g id="Symbols">\n        <g id="Aggregation-/-Hexabins" transform="translate(-15.000000, -17.000000)" class="Style-fill">\n            <g id="Hexabins">\n                <g transform="translate(15.000000, 17.000000)">\n                    <polygon id="Polygon-1-Copy-4" points="23 11 28 14 28 20 23 23 18 20 18 14"></polygon>\n                    <polygon id="Polygon-1-Copy-8" points="17 0 22 3 22 9 17 12 12 9 12 3"></polygon>\n                    <polygon id="Polygon-1-Copy-8" points="5 0 10 3 10 9 5 12 -1.15463195e-13 9 3.85466323e-09 3"></polygon>\n                    <polygon id="Polygon-1-Copy-13" points="29 0 34 3 34 9 29 12 24 9 24 3"></polygon>\n                    <polygon id="Polygon-1-Copy-15" points="41 0 46 3 46 9 41 12 36 9 36 3"></polygon>\n                    <polygon id="Polygon-1-Copy-14" points="35 11 40 14 40 20 35 23 30 20 30 14"></polygon>\n                    <polygon id="Polygon-1-Copy-14" points="47 11 52 14 52 20 47 23 42 20 42 14"></polygon>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/points.tpl":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/points.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="56px" height="24px" viewBox="16 16 56 24">\n    <g id="points" transform="translate(16.000000, 16.000000)"  class="Style-fill">\n        <path d="M6,10 C8.209139,10 10,8.209139 10,6 C10,3.790861 8.209139,2 6,2 C3.790861,2 2,3.790861 2,6 C2,8.209139 3.790861,10 6,10 Z" id="Oval-59"></path>\n        <path d="M52,8 C54.209139,8 56,6.209139 56,4 C56,1.790861 54.209139,0 52,0 C49.790861,0 48,1.790861 48,4 C48,6.209139 49.790861,8 52,8 Z" id="Oval-59-Copy-2"></path>\n        <path d="M52,22 C54.209139,22 56,20.209139 56,18 C56,15.790861 54.209139,14 52,14 C49.790861,14 48,15.790861 48,18 C48,20.209139 49.790861,22 52,22 Z" id="Oval-59-Copy-3"></path>\n        <path d="M4,24 C6.209139,24 8,22.209139 8,20 C8,17.790861 6.209139,16 4,16 C1.790861,16 0,17.790861 0,20 C0,22.209139 1.790861,24 4,24 Z" id="Oval-59-Copy"></path>\n        <path d="M28,8 C30.209139,8 32,6.209139 32,4 C32,1.790861 30.209139,0 28,0 C25.790861,0 24,1.790861 24,4 C24,6.209139 25.790861,8 28,8 Z" id="Oval-59-Copy-4"></path>\n        <path d="M24,20 C26.209139,20 28,18.209139 28,16 C28,13.790861 26.209139,12 24,12 C21.790861,12 20,13.790861 20,16 C20,18.209139 21.790861,20 24,20 Z" id="Oval-59-Copy-4"></path>\n        <path d="M16,16 C18.209139,16 20,14.209139 20,12 C20,9.790861 18.209139,8 16,8 C13.790861,8 12,9.790861 12,12 C12,14.209139 13.790861,16 16,16 Z" id="Oval-59-Copy-4"></path>\n        <path d="M44,12 C46.209139,12 48,10.209139 48,8 C48,5.790861 46.209139,4 44,4 C41.790861,4 40,5.790861 40,8 C40,10.209139 41.790861,12 44,12 Z" id="Oval-59-Copy-4"></path>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/regions.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/regions.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="56px" height="24px" viewBox="0 0 56 24">\n    <g id="Symbols">\n        <g id="Aggregation-/-Admin-Regions" transform="translate(-16.000000, -16.000000)" class="Style-fill">\n            <g id="regions">\n                <g transform="translate(16.000000, 16.000000)">\n                    <polygon id="Rectangle-649" points="9 8 1 0 27 0 27 17 36 17 36.0065918 23.9934082 25 24 9 16"></polygon>\n                    <polygon id="Rectangle-649" points="0 2 7 9 7 17 21 24 0 24 0 15"></polygon>\n                    <polygon id="Rectangle-649" points="29 0 50 0 50 6 56 6 56 24 48 24 38 24 38 15 29 15"></polygon>\n                    <rect id="Rectangle-1933" x="52" y="0" width="4" height="4"></rect>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/editor/style/style-icons/squares.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/editor/style/style-icons/squares.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<svg width="58px" height="28px" viewBox="0 0 58 28">\n    <g id="Symbols">\n        <g id="Aggregation-/-Squares" transform="translate(-15.000000, -14.000000)" class="Style-fill">\n            <g id="squares">\n                <g transform="translate(15.000000, 14.000000)">\n                    <rect id="Rectangle-847-Copy-2" x="10" y="0" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-5" x="30" y="20" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-12" x="40" y="20" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-13" x="40" y="10" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-8" x="20" y="10" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-6" x="30" y="10" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-9" x="20" y="20" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-10" x="10" y="10" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-10" x="0" y="10" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-10" x="50" y="20" width="8" height="8" rx="1"></rect>\n                    <rect id="Rectangle-847-Copy-11" x="20" y="0" width="8" height="8" rx="1"></rect>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/helpers/mapcard-preview.js":
/*!*******************************************************************!*\
  !*** ./lib/assets/javascripts/builder/helpers/mapcard-preview.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/**
* Mapcard preview url generator
*/

module.exports = {
  urlForStaticMap: function urlForStaticMap(mapsApiTemplate, visualization, width, height) {
    var formattedMapsApiTemplate = mapsApiTemplate.replace('{user}', visualization._permissionModel.get('owner').username);
    var template = 'tpl_' + visualization.get('id').replace(/-/g, '_');

    var imageUrl = formattedMapsApiTemplate + '/api/v1/map/static/named/' + template + '/' + width + '/' + height + '.png' + this._generateAuthTokensParams(visualization);

    return imageUrl;
  },

  _generateAuthTokensParams: function _generateAuthTokensParams(visualization) {
    var authTokens = visualization.get('auth_tokens');
    if (authTokens && authTokens.length > 0) {
      return '?' + _.map(authTokens, function (t) {
        return 'auth_token=' + t;
      }).join('&');
    } else {
      return '';
    }
  }
};

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_color.jst.mustache":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_color.jst.mustache ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header\" style=\"background: #35AAE5;\">\n      {{#loading}}…{{/loading}}\n      <ul class=\"CDB-infowindow-list\">\n        {{#content.fields}}\n          {{^index}}\n            <li class=\"CDB-infowindow-listItem\">\n              {{#title}}<h5 class=\"CDB-infowindow-subtitle\">{{title}}</h5>{{/title}}\n              {{#value}}<h4 class=\"CDB-infowindow-title {{#type}}{{ type }}{{/type}}\">{{{ value }}}</h4>{{/value}}\n            </li>\n            {{^value}}{{/value}}\n          {{/index}}\n        {{/content.fields}}\n      </ul>\n    </div>\n    <div class=\"CDB-infowindow-inner js-inner\">\n      {{#loading}}\n        <div class=\"CDB-Loader js-loader is-visible\"></div>\n      {{/loading}}\n      <ul class=\"CDB-infowindow-list js-content\">\n        {{#content.fields}}\n          {{#index}}\n            <li class=\"CDB-infowindow-listItem\">\n              {{#title}}\n                <h5 class=\"CDB-infowindow-subtitle\">{{title}}</h5>\n              {{/title}}\n              {{#value}}\n                <h4 class=\"CDB-infowindow-title\">{{{ value }}}</h4>\n              {{/value}}\n              {{^value}}\n                <h4 class=\"CDB-infowindow-title\">NULL</h4>\n              {{/value}}\n            </li>\n          {{/index}}\n        {{/content.fields}}\n      </ul>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_dark.jst.mustache":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_dark.jst.mustache ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--dark js-infowindow\" style=\"background:#2E3C43\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-bg\">\n      <div class=\"CDB-infowindow-inner js-inner\">\n        {{#loading}}\n          <div class=\"CDB-Loader js-loader is-visible\"></div>\n        {{/loading}}\n        <ul class=\"CDB-infowindow-list js-content\">\n          {{#content.fields}}\n          <li class=\"CDB-infowindow-listItem\">\n            {{#title}}<h5 class=\"CDB-infowindow-subtitle\">{{title}}</h5>{{/title}}\n            {{#value}}<h4 class=\"CDB-infowindow-title\">{{{ value }}}</h4>{{/value}}\n            {{^value}}<h4 class=\"CDB-infowindow-title\">null</h4>{{/value}}\n          </li>\n          {{/content.fields}}\n        </ul>\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_header_with_image.jst.mustache":
/*!*****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_header_with_image.jst.mustache ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\" data-cover=\"true\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-header CDB-infowindow-headerMedia js-header js-cover\">\n      {{#loading}}<div class=\"CDB-Loader js-loader\"></div>{{/loading}}\n      <div class=\"CDB-infowindow-mediaTitle\">\n        {{#content.fields.1}}\n          {{#value}}\n            <h4 class=\"CDB-infowindow-title\">\n              <span>{{{ value }}}</span>\n            </h4>\n          {{/value}}\n        {{/content.fields.1}}\n      </div>\n    </div>\n    <div class=\"CDB-infowindow-inner js-inner\">\n      {{#loading}}<div class=\"CDB-Loader js-loader\"></div>{{/loading}}\n      <div class=\"CDB-infowindow-list js-content\">\n        {{#content.fields}}\n          {{#index}}\n            <div class=\"CDB-infowindow-listItem CDB-infowindow-listItem--order{{index}}\">\n              {{#title}}<h5 class=\"CDB-infowindow-subtitle\">{{title}}</h5>{{/title}}\n              {{#value}}<h4 class=\"CDB-infowindow-title\">{{{ value }}}</h4>{{/value}}\n              {{^value}}<h4 class=\"CDB-infowindow-title\">null</h4>{{/value}}\n            </div>\n          {{/index}}\n        {{/content.fields}}\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_light.jst.mustache":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows/infowindow_light.jst.mustache ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-bg\">\n      <div class=\"CDB-infowindow-inner js-inner\">\n        {{#loading}}\n          <div class=\"CDB-Loader js-loader is-visible\"></div>\n        {{/loading}}\n        <ul class=\"CDB-infowindow-list js-content\">\n          {{#content.fields}}\n          <li class=\"CDB-infowindow-listItem\">\n            {{#title}}<h5 class=\"CDB-infowindow-subtitle\">{{title}}</h5>{{/title}}\n            {{#value}}<h4 class=\"CDB-infowindow-title\">{{{ value }}}</h4>{{/value}}\n            {{^value}}<h4 class=\"CDB-infowindow-title\">null</h4>{{/value}}\n          </li>\n          {{/content.fields}}\n        </ul>\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_color.jst.mustache":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_color.jst.mustache ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-header CDB-infowindow-headerBg CDB-infowindow-headerBg--light js-header\" style=\"background: #35AAE5;\">\n      {{#loading}}…{{/loading}}\n      <ul class=\"CDB-infowindow-list\">\n        {{#content.fields}}\n          {{^position}}\n        <li class=\"CDB-infowindow-listItem\">\n          {{#title}}\n            {{#alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{alternative_name}}}</h5>\n            {{/alternative_name}}\n            {{^alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{name}}}</h5>\n            {{/alternative_name}}\n          {{/title}}\n          {{#name}}\n          <h4 class=\"CDB-infowindow-title {{#type}}{{=<% %>=}}{{<%={{ }}=%>{{{ type }}}{{=<% %>=}}}}<%={{ }}=%>{{/type}}\">\n            {{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%>\n          </h4>\n          {{/name}}\n        </li>\n          {{/position}}\n        {{/content.fields}}\n      </ul>\n    </div>\n    <div class=\"CDB-infowindow-inner js-inner\">\n      {{#loading}}\n        <div class=\"CDB-Loader js-loader is-visible\"></div>\n      {{/loading}}\n      <ul class=\"CDB-infowindow-list js-content\">\n        {{#content.fields}}\n          {{#position}}\n        <li class=\"CDB-infowindow-listItem\">\n          {{#title}}\n            {{#alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{alternative_name}}}</h5>\n            {{/alternative_name}}\n            {{^alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{name}}}</h5>\n            {{/alternative_name}}\n          {{/title}}\n          <h4 class=\"CDB-infowindow-title\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n        </li>\n          {{/position}}\n        {{/content.fields}}\n      </ul>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_dark.jst.mustache":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_dark.jst.mustache ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--dark js-infowindow\" style=\"background:#2E3C43\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-bg\">\n      <div class=\"CDB-infowindow-inner js-inner\">\n        {{#loading}}\n          <div class=\"CDB-Loader js-loader is-visible\"></div>\n        {{/loading}}\n        <ul class=\"CDB-infowindow-list js-content\">\n          {{#content.fields}}\n          <li class=\"CDB-infowindow-listItem\">\n            {{#title}}\n              {{#alternative_name}}\n              <h5 class=\"CDB-infowindow-subtitle\">{{alternative_name}}</h5>\n              {{/alternative_name}}\n              {{^alternative_name}}\n              <h5 class=\"CDB-infowindow-subtitle\">{{name}}</h5>\n              {{/alternative_name}}\n            {{/title}}\n            <h4 class=\"CDB-infowindow-title\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n          </li>\n          {{/content.fields}}\n        </ul>\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_header_with_image.jst.mustache":
/*!************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_header_with_image.jst.mustache ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\" data-cover=\"true\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-header CDB-infowindow-headerMedia js-header js-cover\">\n      {{#loading}}<div class=\"CDB-Loader js-loader\"></div>{{/loading}}\n      <div class=\"CDB-infowindow-mediaTitle\">\n        {{#content.fields.1}}\n        <h4 class=\"CDB-infowindow-title\">\n          <span>{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></span>\n        </h4>\n        {{/content.fields.1}}\n      </div>\n    </div>\n    <div class=\"CDB-infowindow-inner js-inner\">\n      {{#loading}}<div class=\"CDB-Loader js-loader\"></div>{{/loading}}\n      <div class=\"CDB-infowindow-list js-content\">\n        {{#content.fields}}\n          {{#position}}\n        <div class=\"CDB-infowindow-listItem CDB-infowindow-listItem--order{{position}}\">\n            {{#title}}\n              {{#alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{alternative_name}}}</h5>\n              {{/alternative_name}}\n              {{^alternative_name}}\n          <h5 class=\"CDB-infowindow-subtitle\">{{{name}}}</h5>\n              {{/alternative_name}}\n            {{/title}}\n          <h4 class=\"CDB-infowindow-title\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n        </div>\n          {{/position}}\n        {{/content.fields}}\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_light.jst.mustache":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/infowindows_custom/infowindow_light.jst.mustache ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-infowindow CDB-infowindow--light js-infowindow\">\n  <div class=\"CDB-infowindow-close js-close\"></div>\n  <div class=\"CDB-infowindow-container\">\n    <div class=\"CDB-infowindow-bg\">\n      <div class=\"CDB-infowindow-inner js-inner\">\n        {{#loading}}\n          <div class=\"CDB-Loader js-loader is-visible\"></div>\n        {{/loading}}\n        <ul class=\"CDB-infowindow-list js-content\">\n          {{#content.fields}}\n          <li class=\"CDB-infowindow-listItem\">\n            {{#title}}\n              {{#alternative_name}}\n              <h5 class=\"CDB-infowindow-subtitle\">{{alternative_name}}</h5>\n              {{/alternative_name}}\n              {{^alternative_name}}\n              <h5 class=\"CDB-infowindow-subtitle\">{{name}}</h5>\n              {{/alternative_name}}\n            {{/title}}\n            <h4 class=\"CDB-infowindow-title\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n          </li>\n          {{/content.fields}}\n        </ul>\n      </div>\n    </div>\n    <div class=\"CDB-hook\">\n      <div class=\"CDB-hook-inner\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/tooltips/tooltip_dark.jst.mustache":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/tooltips/tooltip_dark.jst.mustache ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-Tooltip CDB-Tooltip--isDark\">\n  <ul class=\"CDB-Tooltip-list\">\n    {{#fields}}\n      <li class=\"CDB-Tooltip-listItem\">\n        {{#title}}\n          <h3 class=\"CDB-Tooltip-listTitle\">{{{ title }}}</h3>\n        {{/title}}\n        <h4 class=\"CDB-Tooltip-listText\">{{{ value }}}</h4>\n      </li>\n    {{/fields}}\n  </ul>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/tooltips/tooltip_light.jst.mustache":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/tooltips/tooltip_light.jst.mustache ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-Tooltip CDB-Tooltip--isLight\">\n  <ul class=\"CDB-Tooltip-list\">\n    {{#fields}}\n      <li class=\"CDB-Tooltip-listItem\">\n        {{#title}}\n          <h3 class=\"CDB-Tooltip-listTitle\">{{{ title }}}</h3>\n        {{/title}}\n        <h4 class=\"CDB-Tooltip-listText\">{{{ value }}}</h4>\n      </li>\n    {{/fields}}\n  </ul>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/tooltips_custom/tooltip_dark.jst.mustache":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/tooltips_custom/tooltip_dark.jst.mustache ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-Tooltip CDB-Tooltip--isDark\">\n  <ul class=\"CDB-Tooltip-list\">\n    {{#content.fields}}\n      <li class=\"CDB-Tooltip-listItem\">\n        {{#title}}\n          {{#alternative_name}}\n            <h3 class=\"CDB-Tooltip-listTitle\">{{{ alternative_name }}}</h3>\n          {{/alternative_name}}\n          {{^alternative_name}}\n            <h3 class=\"CDB-Tooltip-listTitle\">{{{ name }}}</h3>\n          {{/alternative_name}}\n        {{/title}}\n        <h4 class=\"CDB-Tooltip-listText\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n      </li>\n    {{/content.fields}}\n  </ul>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/builder/mustache-templates/tooltips_custom/tooltip_light.jst.mustache":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/builder/mustache-templates/tooltips_custom/tooltip_light.jst.mustache ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"CDB-Tooltip CDB-Tooltip--isLight\">\n  <ul class=\"CDB-Tooltip-list\">\n    {{#content.fields}}\n      <li class=\"CDB-Tooltip-listItem\">\n        {{#title}}\n          {{#alternative_name}}\n            <h3 class=\"CDB-Tooltip-listTitle\">{{{ alternative_name }}}</h3>\n          {{/alternative_name}}\n          {{^alternative_name}}\n            <h3 class=\"CDB-Tooltip-listTitle\">{{{ name }}}</h3>\n          {{/alternative_name}}\n        {{/title}}\n        <h4 class=\"CDB-Tooltip-listText\">{{=<% %>=}}{{<%={{ }}=%>{{{ name }}}{{=<% %>=}}}}<%={{ }}=%></h4>\n      </li>\n    {{/content.fields}}\n  </ul>\n</div>\n"

/***/ }),

/***/ "./lib/assets/javascripts/locale/en.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/en.json ***!
  \***********************************************/
/*! exports provided: common, show, protected_map, forbidden_map, helpers, public_map, account, profile, feedback, back, back-to-dashboard, edit-map, map-settings, more-options, change-privacy, sql-applied, data-source, edit-analysis, add-analysis, back-layers, user, months, assets, operators, builder-activated-notification, builder-onboarding, data-onboarding, analysis-onboarding, style-onboarding, analyses-onboarding, timezones, analyses, analysis-category, form-components, data, components, dataset, editor, notifications, default */
/***/ (function(module) {

module.exports = {"common":{"trial_notification":{"views":{"trial_notification":{"message":"%{trial_days} days left in your trial.","add_payment":"Subscribe now to keep using our platform."}}}},"show":{"title":"Editor","header":{"data_view":"Data View","map_view":"Map View","back":"Back","edit_metadata":"Edit metadata...","edit":"Edit","visualize":"VISUALIZE"}},"protected_map":{"title":"Protected map","content":{"header":"This map is protected with password","placeholder":"Insert your password here","tip":"Contact with the owner in case you want access to it.","error":"Invalid password"}},"forbidden_map":{"title":"Embed error"},"helpers":{"static_header_meta_tags":{"map_created_by":"Map created by %{author} - CARTO"}},"public_map":{"info":{"more":"more","more_from":"More from","more_info":"More info","updated":"Updated","views_pluralize":"1 view |||| %{smart_count} views"},"datasets":{"title":"Datasets in use","dataset_pluralize":"1 dataset |||| %{smart_count} datasets"}},"account":{"title":"Your account | CARTO","flash_messages":{"save_changes":{"success":"Your changes have been saved correctly.","error":"Error updating your account details."}},"views":{"content":{"form_title":"Edit your plan information"},"form":{"username":"Username","subdomain_info":"Subdomain cannot be changed","old_password":"Old password","new_password":"New password","confirm_password":"Confirm password","account_type":"Account type","billing_plan":"Your billing plan","view_details":"View details","multifactor_authentication":"Multi-factor authentication","mfa_enabled":"Enabled","mfa_disabled":"Disabled","mfa_description":"Add an additional layer of security to your account to protect all data you store in CARTO. If you change the actual status you will be logged out and redirected to the login page","connect_external_datasources":"Connect to external data sources","save_changes":"Save changes","delete_account":"Delete account","confirm":"Are you sure?","delete_all":"Delete my account and all my data","email_google":"Your account is linked to your Google account.","errors":{"change_email":"You can change the email if you set a password."}}}},"profile":{"views":{"content":{"title":"Your profile information"},"form":{"first_name":"First name","last_name":"Last name","email":"Email","company_name":"Company Name","role":"Your Role","industry":"Industry","company_employees":"Number of employees","use_case":"Use case","phone":"Phone Number","user_type":"User type","viewer":"VIEWER","read_only":"Read-only access for datasets and maps","builder":"BUILDER","become_builder":"Become a Builder","write_access":"Write access for editing and building datasets and maps","name":"Name","info_public_name":"Other users would reach you by your public name","website":"Website","location":"Location","description":"Your description","twitter":"Twitter username","disqus":"Disqus shortname","disqus_placeholder":"If empty, it will not appear","disqus_notified":"Be notified by new comments in your pages","jobs":"Jobs profile","available_for_hire":"Available for hire","show_banner":"Show a banner in your public profile linked to your email","your_url":"Your URL","save":"Save changes","errors":{"email_not_valid":"Email not valid"}}}},"feedback":"Give us feedback!","back":"Back","back-to-dashboard":"Back to the dashboard","edit-map":"Edit map","map-settings":"Map options","more-options":"More options","change-privacy":"Change map privacy","sql-applied":"SQL query applied","data-source":"Data source","edit-analysis":"Edit analysis","add-analysis":"Add new analysis node","back-layers":"Back to the Layers list","user":{"you":"You"},"months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"assets":{"maki-icons":{"disclaimer":"<a href='https://github.com/mapbox/maki' target='_blank'>Maki Icons</a>, an open source project by <a href='http://mapbox.com' target='_blank'>Mapbox</a>"}},"operators":{"count":"COUNT","sum":"SUM","avg":"AVG","min":"MIN","max":"MAX"},"builder-activated-notification":{"message":"CARTO Builder has been activated in your account. <a href='https://carto.com/learn/guides' class='onboardingNotification-link'>Learn more</a> about it and let us know what you think or <a href='mailto:builder-support@carto.com' class='onboardingNotification-link'>contact us</a>. Happy mapping!"},"builder-onboarding":{"title":"Welcome to Builder,","description":"Discover the new and exciting analyses you can perform with location intelligence.","take-tour":"Take a tour","edit-map":"Edit your map","toolbar":{"title":"Toolbar","description":"The toolbar provides options to access your dashboard, edit your map, and configure its settings."},"configurator":{"title":"Edit mode","description":"Manage all the components of your map: add layers and widgets, import datasets, customize analyses, and change styles."},"map":{"title":"Map","description":"Your map reflects changes instantly."},"widgets":{"title":"Widgets list","description":"The widgets you add to your map appear directly on your visualization."},"skip":"skip","next":"next"},"data-onboarding":{"title":"Welcome to the Layers list","description":"Analyze, style, and enhance your data with pop-ups and&nbsp;legends.","take-tour":"Take the tour","edit-layer":"Edit layer","layer-options":{"title":"Layer options","description":"Layers can be renamed by double-clicking on the layer name, centered by clicking in the crosshair, and exported through their contextual menu."},"data-tab":{"title":"Data tab","description":"Style, add analysis, pop-ups, and legends to layers. To further explore your data, add widgets."},"sql-editor":{"title":"SQL View","description":"Data layers can be edited and processed by using the SQL view at the bottom of the screen."},"add-geometry":{"title":"Add geometries and switch to dataset view","description":"You can switch between map or data view. In map view, you can add points, lines, and polygons.","edit-layer":"Edit layer"},"exit":"Exit tour","next":"Next"},"analysis-onboarding":{"title":"The Art of Analysis","description":"Build reproducible workflows for analyzing and explaining your data. Analyses turn your maps into Location Intelligence apps.","description-list":{"item1":"Different analyses can be chained","item2":"Analyses are dynamic. When the data changes, the analysis is&nbsp;refreshed.","item3":"The original data is not modified by the analysis workflow.","item4":"Some analysis queries add calculated results to columns in your dataset."},"done":"Done","add-analysis":"Add analysis"},"style-onboarding":{"title":"Style this map!","description":"Apply aggregation styling to maps and define options by geometry attributes or by a column value.","aggregation":{"title":"How would you like to aggregate your data?","description":"Map types are called \"Aggregation\". Add Torque, Heatmap, and other aggregation styles to data."},"style":{"title":"Make it beautiful!","description":"Use these options to style your data in beautiful ways. For example, you can create thematic maps by altering the FILL option by value.","short-description":"Use these options to style your data in beautiful ways."},"cartocss":{"title":"Dress it up with CartoCSS","description":"Further style data by using the CartoCSS view at the bottom of the screen."},"take-tour":"Take the tour","style-layer":"Style layer","exit":"Exit tour","next":"Next"},"analyses-onboarding":{"placeholders":{"layer-name":"NAME OF THE LAYER","clusters":"CLUSTERS","method":"METHOD","percentage":"PERCENTAGE"},"done":"Done","finished":"has finished","style-analysis":"Style this analysis","read-more":"Read more in documentation","learn-more":"Learn more","no-new-columns":"No new columns were created.","geometries-updated":"The geometries in your table were updated","new-column-added":"A new column has been added to your dataset.","new-columns-created":"New columns have been created as a new dataset.","new-column-included":"A new column has been included with your original data.","new-columns-included":"New columns has been included with your original data.","new-columns-included-based-on-input":"New columns have been included with your original data based on the columns chosen for the input.","sampling":{"title":"Subsample Percent of Rows","description":"A sample of your original table was randomly selected to give approximately a percentage of the rows from your base dataset."},"merge":{"title":"Add Columns from Second Dataset","description":"This analysis performed a columnar JOIN in order to get columns from two different tables."},"intersection":{"title":"Select Points in Polygons","description":"This analysis performs a spatial intersection, returning only the rows from the target layer which intersect with geometries in the base layer.","source-cartodb-id":"This number represents the cartodb_id of the base geometry."},"area-of-influence":{"title":"Create Travel or Distance Buffers","description":"Create Travel or Distance Buffers creates polygons according to the parameters set by the user.","the-geom":"This column was updated to show the travel or distance buffers requested."},"aggregate-intersection":{"title":"Intersect and Aggregate","description":"This operation performs a spatial intersection and aggregates the geometry values from the target layer that intersect with the geometry of the base layer.","count-vals-density":"This column is added if COUNT was chosen as the aggregation operation.","extra-column":"This column is added if {operation_type} is chosen with column {column_name}."},"filter":{"title":"Filter by Column Value","description":"Filter by Column Value allows you to quickly narrow down the total data you display on a map or input into an analysis node."},"filter-by-node-column":{"title":"Link Second Layer","description":"Link Second Layer allows you to filter the data in your layer by propagating the filters in the target layer. Now if you filter on widgets added to the first node, the results in the second node would be also filtered."},"spatial-markov-trend":{"title":"Predict Trends and Volatility","trend":"The normalized trend for each geometry.","trend_up":"The probability that a geometry's value will move to a higher class.","trend_down":"The probability that a geometry's value will move to a lower class.","volatility":"A measure of the potential for a geometry to possess values in other classes.","description":"Trends and volatility are calculated based on the time series data input. Trends calculated from inputs with a longer history are more precise. Inputs for the time column should equally spaced (e.g., all one week/month/year apart)."},"moran":{"title":"Detect Outliers and Clusters","description":"Detect Outliers and Clusters finds areas in your data where clusters of high values or low values exist, as well as areas which are dissimilar from their neighbors.","quads":"Classification of the geometry from the analysis.","significance":"The statistical significance of the geometry's classification of one of four quadrant types.","moran":"The local statistic calculated from the Moran's I analysis for each geometry/value in the dataset.","vals":"Value used in analysis. If a denominator is entered, this is the 'standardized' rate (centered on mean, normalized by standard deviation)."},"kmeans":{"title":"Calculate Clusters of Points","cluster-no":"A numeric identifier for each cluster in your dataset. Values start at 1 and go up to the %{clusters} clusters you requested (or max rows if less).","description":"Point clustering uses k-means to calculate a predefined number of clusters from your data."},"data-observatory-measure":{"title":"Enrich from Data Observatory","custom-column":"This column contains the data requested from the Data Observatory.","description":"The Data Observatory enrichment is the result of the geometry location and the measure requested."},"data-observatory-multiple-measures":{"title":"Enrich from the Data Observatory","custom-columns":"These columns contain the data requested from the Data Observatory.","description":"The Data Observatory enrichment is the result of the geometry location and the measures requested."},"connect-with-lines":{"title":"Create Lines from Points","description":"Create Lines from Points using a single point, column values, or a second layer.","the-geom":"This column was updated to be lines according to the method chosen.","line-sequential":"This analysis creates a line by connecting all points in the dataset in a specified order.","line-source-to-target":"Link a source point to a target point based on a shared attribute.","line-to-single-point":"Connect the coordinate from latitude and longitude columns to the point geometry (`the_geom`) in your dataset."},"group-points":{"title":"Create Polygons from Points","the-geom":"This column was updated to polygons encompassing the base points.","category":"This will be the category over which the polygons were calculated.","description":"Group points into polygons to create new polygons."},"georeference":{"title":"Geocode","the-geom":"This column, which stores the geographic information in your dataset, has been updated to reflect the boundaries or locations from the inputs specified.","description":"Geocoding data is a service that uses information from many sources to get the geographical information associated with latitude/longitude columns, city names, postal codes, administrative boundaries, IP addresses, or street addresses."},"centroid":{"title":"Create Centroids of Geometries","description":"Centroids are calculated from all, groups, or singular geometries. Using the optional parameters of Categorize, Weight, and Operation, you can change how they are calculated and what information the result will contain.","the-geom":"Point geometries representing the centroid(s) of your base layer.","aggregated-value":"Stores the aggregate value for each centroid.","non-aggregated-value":"Contains the count of features considered for each centroid.","category":"Stores the category value for each centroid from the base layer."},"closest":{"title":"Find Nearest","description":"Select points from second dataset nearest to the geometries in current layer.","source_cdb_id":"This column has been created with the related points id from the base layer.","the-geom":"This column has been updated with the target table geometries."}},"timezones":{"international-date-line-west":"International Date Line West","midway-island-samoa":"Midway Island, Samoa","hawaii":"Hawaii","alaska":"Alaska","pacific-time-us-and-canada-tijuana":"Pacific Time (US and Canada); Tijuana","mountain-time-us-and-canada":"Mountain Time (US and Canada)","chihuahua-la-paz-mazatlan":"Chihuahua, La Paz, Mazatlan","arizona":"Arizona","central-time-us-and-canada":"Central Time (US and Canada)","saskatchewan":"Saskatchewan","guadalajara-mexico-city-monterrey":"Guadalajara, Mexico City, Monterrey","central-america":"Central America","eastern-time-us-and-canada":"Eastern Time (US and Canada)","indiana-east":"Indiana (East)","bogota-lima-quito":"Bogota, Lima, Quito","atlantic-time-canada":"Atlantic Time (Canada)","caracas-la-paz":"Caracas, La Paz","santiago":"Santiago","newfoundland-and-labrador":"Newfoundland and Labrador","brasilia":"Brasilia","buenos-aires-georgetown":"Buenos Aires, Georgetown","greenland":"Greenland","mid-atlantic":"Mid-Atlantic","azores":"Azores","cape-verde-islands":"Cape Verde Islands","gmt-dublin-edinburgh-lisbon-london":"Dublin, Edinburgh, Lisbon, London","casablanca-monrovia":"Casablanca, Monrovia","canary-islands":"Canary Islands","belgrade-bratislava-budapest-ljubljana-prague":"Belgrade, Bratislava, Budapest, Ljubljana, Prague","sarajevo-skopje-warsaw-zagreb":"Sarajevo, Skopje, Warsaw, Zagreb","brussels-copenhagen-madrid-paris":"Brussels, Copenhagen, Madrid, Paris","amsterdam-berlin-bern-rome-stockholm-vienna":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","west-central-africa":"West Central Africa","bucharest":"Bucharest","cairo":"Cairo","helsinki-kiev-riga-sofia-tallinn-vilnius":"Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius","athens-istanbul-minsk":"Athens, Istanbul, Minsk","jerusalem":"Jerusalem","harare-pretoria":"Harare, Pretoria","moscow-st-petersburg-volgograd":"Moscow, St. Petersburg, Volgograd","kuwait-riyadh":"Kuwait, Riyadh","nairobi":"Nairobi","baghdad":"Baghdad","tehran":"Tehran","abu-dhabi-muscat":"Abu Dhabi, Muscat","baku-tbilisi-yerevan":"Baku, Tbilisi, Yerevan","kabul":"Kabul","ekaterinburg":"Ekaterinburg","islamabad-karachi-tashkent":"Islamabad, Karachi, Tashkent","chennai-kolkata-mumbai-new-delhi":"Chennai, Kolkata, Mumbai, New Delhi","kathmandu":"Kathmandu","astana-dhaka":"Astana, Dhaka","sri-jayawardenepura":"Sri Jayawardenepura","almaty-novosibirsk":"Almaty, Novosibirsk","yangon-rangoon":"Yangon Rangoon","bangkok-hanoi-jakarta":"Bangkok, Hanoi, Jakarta","krasnoyarsk":"Krasnoyarsk","beijing-chongqing-hong-kong-sar-urumqi":"Beijing, Chongqing, Hong Kong SAR, Urumqi","kuala-lumpur-singapore":"Kuala Lumpur, Singapore","taipei":"Taipei","perth":"Perth","irkutsk-ulaanbaatar":"Irkutsk, Ulaanbaatar","seoul":"Seoul","osaka-sapporo-tokyo":"Osaka, Sapporo, Tokyo","yakutsk":"Yakutsk","darwin":"Darwin","adelaide":"Adelaide","canberra-melbourne-sydney":"Canberra, Melbourne, Sydney","brisbane":"Brisbane","hobart":"Hobart","vladivostok":"Vladivostok","guam-port-moresby":"Guam, Port Moresby","magadan-solomon-islands-new-caledonia":"Magadan, Solomon Islands, New Caledonia","fiji-islands-kamchatka-marshall-islands":"Fiji Islands, Kamchatka, Marshall Islands","auckland-wellington":"Auckland, Wellington","nuku-alofa":"Nuku'alofa"},"analyses":{"data-observatory-multiple-measures":{"title":"Enrich from Data Observatory","short-title":"Data Observatory"},"connect-with-lines":{"title":"Create Lines from Points","short-title":"Create Lines"},"georeference":{"title":"Geocode","short-title":"Geocode"},"data-observatory-measure":{"title":"Enrich from Data Observatory","short-title":"Data Observatory","age-and-gender":"Age and Gender","boundaries":"Boundaries","education":"Education","employment":"Employment","families":"Families","housing":"Housing","income":"Income","language":"Language","migration":"Migration","nationality":"Nationality","population-segments":"Population segments","race-and-ethnicity":"Race and Ethnicity","religion":"Religion","transportation":"Transportation","filters":{"label":"Filters","applied":{"single":"1 filter applied","multiple":"%{filters} filters applied"}},"area":"Per sq km","count":{"suggested":"Suggested measurements","search":"%{items} results"},"search-by-name":"Search by name...","errors":{"max-items":"Max items reached","measurement-required":"Measurement is required","measurement-twice":"Two or more measurements are equal","column-name-mismatch":"Segment names and column names don't match","invalid-selection":"Invalid DO selection","mandatory-region":"Region is mandatory"}},"merge":{"title":"Add Columns from Second Dataset","short-title":"Add Columns"},"filter-by-node-column":{"title":"Link Second Layer","short-title":"Link Layer"},"centroid":{"title":"Create Centroids of Geometries","short-title":"Centroid"},"group-points":{"title":"Create Polygons from Points","short-title":"Create Polygons"},"convex-hull":{"title":"Create Polygons from Points","short-title":"Create Polygons"},"concave-hull":{"title":"Concave Hull","short-title":"Create Polygons"},"bounding-box":{"title":"Bounding Box","short-title":"Bounding Box"},"bounding-circle":{"title":"Bounding Circle","short-title":"Bounding Circle"},"area-of-influence":{"title":"Create Travel or Distance Buffers","short-title":"Buffer"},"filter-intersection":{"title":"Select Points in Polygons","short-title":"Select Points"},"aggregate-intersection":{"title":"Intersect and Aggregate","short-title":"Intersect"},"filter":{"title":"Filter by Column Value","short-title":"Filter Value"},"sampling":{"title":"Subsample Percent of Rows","short-title":"Subsample"},"kmeans":{"title":"Calculate Clusters of Points","short-title":"Clusters"},"moran-cluster":{"title":"Detect Outliers and Clusters","short-title":"Outliers"},"spatial-markov-trend":{"title":"Predict Trends and Volatility","short-title":"Trends"},"find-nearest":{"title":"Find Nearest","short-title":"Nearest"},"source":"Source","routing":{"short-title":"Routing"},"deprecated-sql-function":{"title":"SQL Function","short-title":"SQL Function"}},"analysis-category":{"all":"All","analyze-predict":"Analyze and predict","create-clean":"Create and clean","data-transformation":"Transform"},"form-components":{"editors":{"radio":{"true":"True","false":"False","null":"Null"},"style":{"select-by-column":"Select by column"},"fill":{"customize":"Custom color set","quantification":{"title":"Quantification","methods":{"jenks":"Jenks","equal":"Equal Interval","headtails":"Heads/Tails","quantiles":"Quantiles","category":"Category"}},"bins":"Buckets","input-color":{"solid":"Solid","value":"By value","img":"Img","select-color":"Select color"},"input-number":{"fixed":"Fixed","solid":"Solid","by-value":"By value"},"input-ramp":{"buckets":"bucket |||| buckets"},"input-qualitative-ramps":{"null":"null","others":"Others"},"image":{"recently-title":"Most used","none":"None","show-all":"Show full collections"},"error":"There was an error"},"slide":{"no-values":"No values"}}},"data":{"import-model":{"error-title":"There was an error","error-starting-import":"Unfortunately, there was an error starting the import"},"upload-model":{"invalid-import":"Invalid import","one-file":"Unfortunately, only one file is allowed per upload","file-defined":"File name should be defined","file-extension":"Unfortunately, this file extension is not allowed","file-size":"Unfortunately, the size of the file is bigger than your remaining quota","visualization-id":"The remote visualization id was not specified","remote-file-size":"Unfortunately, the size of the remote dataset is bigger than your remaining quota","url-invalid":"Unfortunately, the URL provided is not valid","error-happened":"There was an error","connection-error":"Unfortunately, there was a connection error","twitter-dates-invalid":"Twitter dates are not valid","twitter-dates-empty":"Twitter dates are empty","twitter-categories-invalid":"Twitter categories are not valid","twitter-data":"Twitter data is empty","dataset-copy-undefined":"Dataset copy is not defined","query-undefined":"Query is not provided"},"analysis-definition-node-model":{"validation":{"missing-required":"Required","invalid-source":"Invalid source","invalid-value":"Invalid value","invalid-enum":"Invalid value, must be any of %{expectedValues}"}}},"components":{"geocoding":{"geocoding-error-details":{"close":"close","description":"There was a problem geocoding your data","title":"Geocoding Error","try-again":"Please try again and if the problem persists, <a href='mailto:support@carto.com?subject=Geocoding error with id:%{id}'>contact us</a> with your username and the following code:","view-dataset":"view dataset"},"geocoding-success-detail":{"amount-charged":"<strong>$%{price}</strong> will be charged to your account","credits-consumed":"You have consumed all your credits during this billing cycle, price is $%{price} / 1,000 extra credits.","description":"We've successfully geocoded <%- realRowsFormatted %> <%- geometryType %> of <%- processableRowsFormatted %>. |||| We've successfully geocoded <%- realRowsFormatted %> <%- geometryType %>s of <%- processableRowsFormatted %>.","explanation":"Rows that are not geocoded could have errors in their column values, or don’t exist in our data. Try geocoding again and check the 'override all values' to try again.","no-extra-charge":"No extra charges have been done","remainingQuotaFormatted":"You still have %{remainingQuotaFormatted} credits left for this month.","title":"Data geocoded","try-again":"Unsuccessful rows don't count against your quota, so we encourage you to take a look and try again.","view-dataset":"view dataset"},"geocoding-no-result-details":{"close":"close","description":"These rows contained empty values or perhaps we just didn't know what the values meant. We encourage you to take a look and try again.","title":"No rows were geocoded","view-dataset":"view dataset"}},"background-importer":{"background-importer-item":{"completed":"completed","error-connecting":"<span class='u-errorTextColor'>Error connecting</span> %{name}","from":"from","show":"show"},"warnings-details":{"continue-btn":"Continue","find-connected-datasets":"You can find all the connected datasets under the datasets section.","no-more-datasets":"No more than %{maxTablesPerImport} datasets can be imported from a single file.","unable-to-import-datasets":"Unable to import all datasets in file"},"partial-import-details":{"find-connected-datasets":"You can find all the connected datasets under the datasets section.","continue-btn":"Continue","too-many-datasets":"NOTE: The file you uploaded contained too many datasets. No more than %{maxTablesPerImport} datasets can be imported from a single file.","unable-to-import-as-layers":"Unable to add all imported datasets as layers","upgrade-your-account":"<a href='https://carto.com/pricing/'>Upgrade your account</a> to add more than %{userMaxLayers} layers to your maps."},"connector-warning-details":{"continue-btn":"Continue","too-many-rows":"You may have reached the maximum limit.","unable-to-import-all-rows":"For a database connector import, the number of rows allowed is %{maxRowsPerConnectorImport}. Some of your data may not be imported."},"error-details":{"check-errors":"Check errors","check-url":"Check that the URL you provided is OK","close":"close","dont-panic":"Don’t panic, here's some info that might help","remote-server-code":"The remote server returned a <span class='ErrorDetails-itemTextStrong'>%{httpResponseCode}</span> code.","send-us-the-error-code":"Persisting error? Please <a href='mailto:support@carto.com'>send us</a> your username and the following code","unknown-error":"An unknown error has happened"},"upgrade-errors":{"8001":{"description":"Remove some of your datasets to gain available space or upgrade your account","info":"Keep your data and get a larger quota by upgrading your plan","title":"Your quota has run out"},"8002":{"description":"You have reached the limit of datasets for your plan","info":"Remove some of your datasets or upgrade your account to get unlimited datasets","title":"Your dataset couldn't be created"},"8005":{"description":"Remove any layer or upgrade your account","info":"Keep your maps and get more layer count quota by upgrading your plan","title":"You have reached your layer count limit"},"8007":{"description":"You have reached the limit of public maps for your plan","info":"Make some of your maps private or upgrade your account to get unlimited public maps","title":"Your map couldn't be created or updated"},"upgrade":"upgrade"},"twitter-import-details":{"new-type-created":"We've created a new dataset containing a total of %{datasetTotalRowsFormatted}<br/>tweet%{tweetPlural} with your search terms","credit-left":"You still have %{availableTweetsFormatted} credit left for this billing cycle.","credits-left":"You still have %{availableTweetsFormatted} credits left for this billing cycle.","no-more-credits":"You have consumed all your credits during this billing cycle (price is $%{blockPriceFormatted}/%{blockSizeFormatted} extra credits).","twitter-import-title":"Your Twitter dataset is created","tweet-cost":{"free":"No extra charges have been applied","paid":"$%{tweetsCostFormatted} will be charged to your account"},"errors":{"no-results":"Your search query was correct but returned no results, \n please try with a different set of parameters before running it again"}},"background-geocoding-item":{"geocoded":"%{realRowsFormatted}/%{processableRowsFormatted} row geocoded… |||| %{realRowsFormatted}/%{processableRowsFormatted} rows geocoded…","geocoded-by-lat-lng":"Geocoded by latitude and longitude","geocoding":"Geocoding %{tableName} dataset…","show":"show","rows-geocoded":{"without-dataset":"%{realRowsFormatted} row geocoded |||| %{realRowsFormatted} rows geocoded","in-dataset":"%{realRowsFormatted} row geocoded in %{tableName} dataset|||| %{realRowsFormatted} rows geocoded in %{tableName} dataset"},"errors":{"no-rows-geocoded":{"without-dataset":"No rows geocoded","in-dataset":"No rows geocoded in %{tableName} dataset"},"geocoding-layer":"Ouch! There was an error geocoding %{tableName} layer"}},"background-import-limit":{"hurry":"In a hurry? <a href='%{upgradeUrl}'>Upgrade your account</a> to import several files at a time","one-file":"Unfortunately, you can only import up to %{importQuota} files at the same time"},"free-trial":"Get a %{days} day free trial","connecting":"Connecting","dataset":"dataset…","geocoding":"Geocoding","working":"Working…"},"likes-pluralize":"like |||| likes","custom-list":{"placeholder":"Search by %{typeLabel}","no-items":"There are no %{typeLabel} items","no-results":"No %{typeLabel} results found with '%{query}'","add-custom-result":"Add custom value"},"datepicker":{"dates-placeholder":"Choose your dates","get-last":"Get last","hour":"hour","min":"min","from":"from","to":"to","or":"or","days-pluralize":"1 day |||| %{smart_count} days","weeks-pluralize":"1 week |||| %{smart_count} weeks","hours-pluralize":"hour week |||| %{smart_count} hours","gmt-convertion":"Date will be converted to GMT +0","invalid-date":"Invalid date"},"taglist":{"none":"No tags","placeholder":"Add tags"},"pagination-search":{"filter":{"search":"Search","placeholder":"Search by username or email"},"loading":{"title":"Loading..."},"error":{"title":"Error","desc":"Oops there was an error."},"no-results":{"title":"Oh! No results","desc":"Unfortunately we could not find anything with these parameters"}},"modals":{"editor-vis-warning":{"title":"You are about to open an Editor map with the new Builder","explanation":"Builder offers an easy-to-use and intuitive drag and drop functionality to analyze and visualize your data. However, some of the old Editor features, such as overlays, are not currently available in Builder.","question":"Opening your map in Builder may cause the loss of any feature not supported yet. Are you sure you want to continue?","go-back":"No, go back to dashboard","open":"Yes, open with Builder","duplicate":"duplicate and open with Builder","opening-title":"Opening %{name} with Builder"},"add-basemap":{"modal-title":"Add a custom basemap","modal-desc":"Select from these great resources","adding-basemap":"Adding new basemap…","add-basemap-error":"Could not add basemap","add-btn":"Add basemap","cancel-btn":"Cancel","validating":"Validating…","saving":"Saving layer…","fetching":"Fetching layers…","get-layers":"Get layers","xyz":{"insert":"Insert your XYZ URL","enter":"Enter a URL","not-valid":"Insert a valid XYZ URL","eg":"E.g.","tms":"TMS","couldnt-validate":"We couldn't validate this. If you're sure it contains data click \"add basemap\""},"mapbox":{"insert":"Add Mapbox Style basemap","enter":"Mapbox Style URL","error":"Error retrieving your basemap. Please check your Mapbox URL.","invalid":"This URL is not valid."},"wms":{"insert":"Insert your WMS/WMTS URL","invalid":"The URL is either invalid or contains unsupported projections","see-docs":"see docs","oh-no":"Oh! No results","unfortunately":"Unfortunately, we couldn't find a layer that matched your search term","tables-pluralize":"table |||| tables","placeholder":"%{layersFoundCount} %{layersFoundCountPluralize} found, %{layersAvailableCount} %{layersAvailableCountPluralize} available"},"tilejson":{"insert":"Insert your TileJSON URL","invalid":"Invalid URL, please make sure it is correct"},"nasa":{"select":"Select a date from which you want a NASA Worldview basemap","day":"Day","night":"Night","cant-select":"You can't select a date in night mode"}},"create-dialog":{"creating-map":"Creating map"},"export-data":{"title":"Export data","desc":"Select the preferred file format","no-geometry":"To download any geospatial format like SHP, KML or GeoJSON don't forget to select the_geom on your query.","loading":{"geometry":"Checking geometries...","preparing":"Preparing content..."},"errors":{"title":"There was an error","geometry-error":"We can't read data geometries","unknown":"An error occurred"},"cancel":"Cancel","download":"Download"},"maps-metadata":{"modal-title":"Map metadata","modal-desc":"Edit the attributes of your map","back-btn":"GO BACK","save-btn":"Save","cancel-btn":"Cancel","form":{"name":"Map Name","name-placeholder":"Type your name here","description":"Description","description-placeholder":"Type your description here","tags":"Tags","markdown":"Markdown supported"},"validation":{"error":{"name":"Name can't be blank"}},"error":{"title":"We couldn't save your data","subtitle":"We had an error trying to save your data: <span class='CDB-Text is-semibold'>%{error}</span>"},"loading":"Saving your data...","success":"<span class='CDB-Text is-semibold'>Metadata</span> for %{name} map <span class='CDB-Text is-semibold'>was saved</span>."},"dataset-metadata":{"modal-title":"Dataset metadata","modal-desc":"Edit the attributes of your dataset","back-btn":"GO BACK","save-btn":"Save","cancel-btn":"Cancel","form":{"name":"Dataset Name","name-placeholder":"Type your name here","description":"Description","description-placeholder":"Type your description here","attributions":"Attributions","attributions-placeholder":"Type your attributions here","tags":"Tags","source":"Source","source-placeholder":"Enter the source of the data","license":"License","markdown":"Markdown supported"},"validation":{"error":{"name":"Name can't be blank"}},"error":{"title":"We couldn't save your data","subtitle":"We had an error trying to save your data: <span class='CDB-Text is-semibold'>%{error}</span>"},"loading":"Saving your data...","success":"<span class='CDB-Text is-semibold'>Metadata</span> for %{name} dataset <span class='CDB-Text is-semibold'>was saved</span>."},"publish":{"done-btn":"Done","update-btn":"Update","publish-btn":"Publish","publishing-btn":"Publishing","updating-btn":"Updating","menu":{"share":"Share with colleagues","publish":"publish"},"privacy":{"privacy":"privacy","cta":{"title":"Want some privacy?","desc-trial":"Check our plans with 14 days trial","desc-notrial":"Upgrade your account!"},"public":{"type":"PUBLIC","title":"Public","body":"Everyone can view your table and download it"},"link":{"type":"LINK","title":"Public—with link","body":"Only the people with a shared link can view the data"},"password":{"type":"PASSWORD","title":"Public—with password","body":"Set a password and share only with specific people","placeholder":"Type your password"},"private":{"type":"PRIVATE","title":"Private","body":"Nobody can access this dataset"},"error":{"title":"We couldn't save your data","subtitle":"We had an internal error trying to save your data. We recommend you try again."},"upgrade":{"title":"Interested in sharing within your organization?","desc":"%{contact} to try one of our Enterprise plans","contact":"Contact us","mail":"sales@carto.com"},"loading":"Saving your data..."},"share":{"published":"Published %{when}","unpublished":"Never published.","last-published":"Last updated %{date}","unpublished-header":"Click on Publish to start sharing your map on the web","unpublished-subheader":"From the moment you click on publish, you will need to use this window to update your changes on the public version.","upgradeLabel":"Upgrade","upgradeLink":"https://carto.com/pricing/#pricing-standard","upgrade":"%{upgradeLink} to share with your colleagues?","private":"PRIVATE","get-link":{"title":"Get the link","body":"Send to your friends, coworkers, or post it in your social networks.","link":"","copy":"COPY","select":"SELECT","private":{"body":"Your map is %{private} Change privacy to get the link"}},"embed":{"title":"Embed it","body":"Insert your map into your blog, website, or simple application.","link":"Get a simple URL.","copy":"COPY","select":"SELECT","private":{"body":"Your map is %{private} Change privacy to embed map"}},"cartodbjs":{"title":"CARTO.js","body":"Add your map to your applications using this URL.","link":"Read more.","copy":"COPY","select":"SELECT"},"mobile-sdk":{"title":"CARTO Mobile SDK","body":"Add your map to your native mobile applications using this line of code.","link":"Read more.","copy":"COPY","select":"SELECT"},"error":{"title":"We couldn't save your data","subtitle":"We had an internal error trying to save your data. We recommend you try again."},"loading":"Saving your data...","organization":{"title":"Default settings for your Organization","desc":"New users will have this permission"},"role":{"viewer":"Viewer","builder":"Builder"},"tooltip":{"group":"Access is inherited from group %{name}","org":"Access is inherited from organization"},"toggle":{"read":"Read","write":"Write"},"add-people":"Add people"}},"assets-picker":{"browse":"Browse","delete-image":"Delete image","delete-images":"Delete images","deselect-all":"Deselect all","drag-and-drop":"Drag & drop your file","error-desc":"Please, go back and try again. If the problem persists contact us at <a href='mailto:support@carto.com'>support@carto.com</a>","go-back":"Go back","incorrect-url":"Error. Your URL doesn’t look correct.","loading":"Loading…","or":"or","select-all":"Select all","submit":"submit","upload-desc":"Paste a URL or select a file like JPG, GIF, PNG, SVG","upload-file-url":"Upload a file or a URL"},"add-asset":{"icons":"Icons","modal-desc":"or just use our nice selection","modal-title":"Select marker image","set-image":"Set image","upload-file":"Upload file","upload-asset":"Upload asset","upload-image":"Upload your image","your-uploads":"Your uploads","organization-uploads":"Organization uploads"},"add-analysis":{"modal-title":"Add a new analysis","modal-desc":"Select the analysis you want to add","loading-title":"Loading options","add-btn":"Add analysis","disabled-option-desc":"Your layer's geometries are %{simpleGeometryType} and this analysis needs %{requiredInputGeometries}.","geometry-types":{"point":"points","point,polygon":"points or polygons","polygon,point":"points or polygons"},"unknown-geometry-type":"unknown","more-info":"More info","option-types":{"connect-with-lines":{"title":"Create Lines from Points","desc":"Create lines from points using a single point, column values, or a second layer."},"group-points":{"title":"Create Polygons from Points","desc":"Create polygons from points using convex hulls, concave hulls, bounding circles or bounding boxes."},"aggregate-intersection":{"title":"Intersect and Aggregate","desc":"Find overlapping geometries from a second layer and aggregate its values in the current layer."},"area-of-influence":{"title":"Create Travel/Distance Buffers","desc":"Use travel time or distance to create buffers around a point or polygon."},"georeference":{"title":"Geocode","desc":"Use street addresses, city names, or other location text to create point geometries."},"filter-intersection":{"title":"Select Points in Polygons","desc":"Select points from a second dataset that intersect the current polygon layer."},"filter":{"title":"Filter by Column Value","desc":"Keep or discard rows with a selected column value."},"merge":{"title":"Add Columns from 2nd Dataset","desc":"Join a second dataset to current layer using a shared column value."},"moran-cluster":{"title":"Detect Outliers and Clusters","desc":"Use Moran's I to select geometries where values are spatially clustered and adjacent outliers.","high-low":"High-Low (HL)","high-high":"High-High (HH)","low-high":"Low-High (LH)","low-low":"Low-Low (LL)"},"kmeans":{"title":"Calculate Clusters of Points","desc":"Augment with cluster_no column to spatially separate points into a specified number of groups."},"centroid":{"title":"Create Centroids of Geometries","desc":"Create a direct or weighted centroid grouped by all rows or by categories from current layer."},"filter-by-node-column":{"title":"Link Second Layer","desc":"Use a shared column to link layers so second layer's widgets filter both."},"sampling":{"title":"Subsample Percent of Rows","desc":"Subsample the rows in a dataset based on a specified percent."},"spatial-markov-trend":{"title":"Predict Trends and Volatility","desc":"Predict probability of trends from a sequence of data across columns, using spatial Markov chains."},"data-observatory-measure":{"title":"Enrich from Data Observatory","desc":"Add new columns with contextual data such as demographic and economic measures."},"deprecated-sql-function":{"title":"SQL Function","desc":"Run your custom SQL function"}}},"add-widgets":{"modal-title":"Add new widgets","modal-desc":"Select the widgets you want to add","continue-btn":"Continue","loading-title":"Loading columns","tab-pane":{"histogram-label":"Histogram","category-label":"Category","formula-label":"Formula","time-series-label":"Time-series"},"percentage-in-top-cats":"% in top 10 cat","time-series-no-option-title":"None","time-series-no-option-desc":"This option won't show your time-series widget"},"add-layer":{"modal-title":"Add a new layer","modal-desc":"Select an existing dataset or connect a new one","navigation":{"search":"Search","search-placeholder":"by name, description, or :tag","connect-dataset":"Connect dataset","shared-with-you":"Shared with you","data-library":"Data library","create-empty-map":"Create empty map","create-empty-dataset":"Create empty dataset","create-empty-addLayer":"Add an empty layer","your-datasets":"Your datasets"},"create-loading-title":"Creating an empty dataset…","adding-new-layer":"Adding new layer…","add-layer-error":"Could not add layer","imports":{"ask-for-demo":"ask for demo","contact-us":"Contact us","connector":"connector","demo-email-title":"I am interested in the %{name} connector","demo-email-desc":"Hi, I am interested in testing the %{name} connector. Please contact me to schedule a demo of this feature.","tab-options-error":{"no-key":"%{name} key is not specified and the panel can't be enabled","not-allowed":"%{name} data source is not available for your plan. Please upgrade.","limits-reached":"You've reached the limits for your account. Please upgrade.","no-credits":"You've reached the available %{name} credits for your account this month."},"member-pluralize":"member |||| members","item-pluralize":"item |||| items","form-import":{"browse":"Browse","drag-and-drop":"Drag & drop your file","error-desc":"Error. Your URL doesn’t look correct.","format":"Format","or":"or","title":"Enter a URL","desc":"Paste a URL and start the import","submit":"submit"},"header-import":{"import-url":"Import your data from a %{brand} URL","file-selected":"File selected","paste-url":"Paste a URL %{fileEnabled} ","select-a-file":"or select a file such as CSV, XLS, ZIP, KML, GPX, GPKG, FGDB,","see-all-formats":"see all formats","sync-enabled":"Keep it synchronized with the source","sync-disabled":"Sync options are not available","type-selected":"%{brand} selected","type-import":"%{brand} import","upload-file-url":"Upload a file or a URL |||| Upload a URL"},"service-import":{"and":"and","account-connected":"Account connected","connect-with":"Connect with %{title}","choose":"Choose","connect":"Connect","found-in":"%{size} %{pluralize} found in %{title}","item-selected":"Item selected","many-more-formats":"many more formats","no-results-title":"Oouch! There are no results","no-results-desc":"We haven't found any valid file from your account","state-idle-login":"Login to your account and select any item.","state-error":"We are sorry that you can’t connect to your %{title} account. Be sure you have any pop-up blockers deactivated for this website.","state-token":"Checking Token.","state-oauth":"Requesting oAuth.","state-retrieving":"A list of your %{title} files will be displayed in a moment.","state-selected-sync":"You can choose when to sync the file.","state-selected-instagram":"A map containing all your geocoded photos will be created","state-selected-no-sync":"Sync options are not available.","supported":"supported","try-again":"Try again"},"selected-state":{"sync-my-data":"Sync my data","never":"Never","every-hour":"Every hour","every-day":"Every day","every-week":"Every week","every-month":"Every month","free-trial":"%{days} day free trial","more-features":"more features","upgrade-desc":"Upgrade your account to get sync options and %{features}","upgrade":"upgrade"},"twitter":{"category":"Category","credits-consumed":"Twitter credits for this period consumed - %{extraTweets} will be charged","credits-left":"%{per}% of your %{remainingFormatted} Twitter credits left","credits-no-limit":"No limits - %{extraTweets} will be charged","extra-tweets":"extra tweets","fallback-title":"Enable the %{brand} connector","fallback-desc":"The %{brand} connector allows you to map %{brand} data activity related to your brand, event, or any term you may be interested in.","from-to":"From / to","terms-desc":"Enter up to four search terms using the category fields.","terms-placeholder":"Insert your terms separated by commas","title":"Twitter trends","twitter-gmt":"Time is in GMT+0","use":"Use","your-gmt":"You are in GMT"},"arcgis":{"fallback-desc":"Enable the %{brand} connector in your account to connect your %{brand} data to CARTO and mantain it in sync with the source.","input-placeholder":"Paste your %{brand} table URL here","url-desc":"To retrieve a particular layer, add the layer index at the end of the URL","import-data":"Import your data from a %{brand} instance","sync-options":"Sync options only available for a layer"},"instagram":{"fallback-desc":"Enable the %{brand} connector to map your photos or videos from your account in CARTO."},"box":{"fallback-desc":"Enable the %{brand} connector in your account to map your %{brand} files in CARTO or mantain your CARTO maps in sync with your Box data."},"mailchimp":{"campaign-selected":"%{brand} campaign selected","fallback-desc":"Enable the %{brand} connector in your account to map your user lists from %{brand} in CARTO or mantain your CARTO maps in sync with your %{brand} data.","map-campaign":"Map your %{brand} campaigns","state-idle":"Connect your %{brand} account to select any of your campaigns.","state-error":"We are sorry, there has been an error while connecting to your %{brand} account. Just in case it helps, be sure you have the pop-up blocker deactivated for this website.","state-token":"Checking %{brand} token.","state-oauth":"Requesting oAuth.","state-retrieving":"A list of your %{brand} campaigns will be displayed in a moment.","state-selected":"Campaign selected."},"salesforce":{"fallback-desc":"Contact us to learn more about %{brand} integration","input-placeholder":"Paste your %{brand} URL here"},"feedback":{"text":"Is your data somewhere else? Please let us know!","button":"Request data source","url":"https://docs.google.com/forms/d/e/1FAIpQLSeSP4idHpOLdGlUkCCve1BfCsakZdmeAO_5yrHH4FSIJt5cdw/viewform"}},"datasets":{"item":{"sync-failed":"Sync failed, the last attempt was","syncing":"Syncing","synced":"Synced","read":"read","from":"from","by":"by","no-description":"No description","rows-pluralize":"row |||| rows","tags-more":"and %{tagsCount} more","no-tags":"No tags"},"loading":"Loading","searching":"Searching","error":{"title":"Ouch! There has been an error loading your datasets","desc":"If the problem persists contact us at"},"no-datasets":{"title":"You have not connected any datasets yet","desc":"You can %{connectDataset} or %{search} our data library","connect-datasets":"connect datasets","search":"search"},"no-results":{"desc":"There are no results in this page","found":"found","there-are-no":"There are no","no-fun":"No %{type}, no fun"}},"footer":{"guessing-desc":"Let CARTO automatically guess data types and content on import.","deprecated-connector":"Deprecated connector.","twitter-contact-support":"Please <a href='mailto:support@carto.com'>contact support</a> for more information.","twitter-how-to-historical":"To get access to historical data (older than 30 days) you need to","contact-team":"contact our team","privacy-upgrade":"You cannot change the privacy of your new datasets. Click here to upgrade your account.","privacy-change":"Your new dataset will be %{privacy}","privacy-click":"Click to change it to %{nextPrivacy}","privacy-change-banned":"You cannot change the privacy of your new datasets.","add-layer":"Add layer"}},"edit-feature":{"confirmation":{"title":"This geometry is too big to edit from the web","desc":"Editing this geometry could freeze or crash your browser, and you could lose your work. We encourage you to edit this feature through the API.","cancel":"Cancel","continue":"Ok, continue"},"delete":{"title":"You are about to delete a feature","desc":"Are you sure you want to delete it?","cancel":"Cancel","confirm":"Ok, delete it"}},"privacy-warning":{"title":{"visualization":{"PUBLIC":"You are about to publish this visualization for public view","LINK":"You are about to make this visualization available to anyone with the link","PASSWORD":"You are about to make this visualization available to anyone with the password"},"dataset":{"PUBLIC":"You are about to make this dataset public, making it visible in your public profile","LINK":"You are about to make this dataset available to anyone with the link"}},"description":{"PUBLIC":"Any personal data that you have used to create it will also be publicly available","LINK":"Any personal data that you have used to create it will also be publicly available with the link","PASSWORD":"Any personal data that you have used to create it will also be publicly available with the password"},"cancel":"Cancel","confirm":"Ok, Change privacy"},"password-confirmation":{"modal-title":"Please confirm your password.","modal-description":"\"Hey, ho! Let’s Go!\"","form":{"password-label":"Password"},"actions":{"confirm":"Confirm","cancel":"Cancel"}},"change-lock":{"description":{"locked":"Unlocking %{thisOrTheseStr} %{contentTypePluralized} will show %{itOrThemStr} on the dashboard again.","unlocked":"Locking %{thisOrTheseStr} %{contentTypePluralized} will hide %{itOrThemStr} from the dashboard. Reveal %{itOrThemStr} using the header menu or the bottom link."}}},"error":{"default-title":"Oops, there was a problem","default-desc":"Reload the page again. If the problem persists contact us at <a href='mailto:support@carto.com'>support@carto.com</a>"},"backbone-forms":{"select":{"placeholder":"Select a %{keyAttr}","disabled-placeholder":"Enable %{keyAttr}","loading":"loading…","empty":"No values","selected":"%{count} selected","all":"All","none":"None","error":"Error fetching %{type}"},"operators":{"count-message":"If you select 'COUNT' all columns are selected"},"column-type-error":"Column type must be a %{columnType}","interval-error":"Value must be between %{minValue} and %{maxValue}","copy-button":"COPY","lazy-select":{"search":"Search...","error":"Error fetching %{type}","type":"items","empty":"No results for %{type} column."},"data-observatory":{"dropdown":{"measurement":{"search":"Search...","type":"measurements"},"filter":{"header":"Filter measurements by","type":"filters","item-label":"filter","filters":{"label":"Filters","applied":{"single":"1 filter applied","multiple":"%{filters} filters applied"}}},"error":"Error fetching %{type}"}}},"codemirror":{"no-errors":"No errors","docs":"DOCS","syntax-error":"Syntax error","line":"Line"},"undo-redo":{"clear":"CLEAR","apply":"APPLY","undo":"Undo","redo":"Redo"},"table":{"columns":{"change-type":{"confirm":"ok, change it","cancel":"Cancel","desc":"Maps using this column will be affected and unconvertible data will be lost. Are you sure?","error":"There was an error changing %{columnName} column: %{error}","loading":"Changing %{columnName} column...","title":"%{columnName} column will change to %{newType}","success":"Column %{columnName} changed to %{newType}"},"create":{"loading":"Adding new column...","error":"Error adding new column: %{error}","success":"%{columnName} column added"},"destroy":{"cancel":"Cancel","confirm":"Ok, delete it","desc":"Maps using this column will be affected, are you sure you want to delete it?","error":"Error deleting %{columnName} column: %{error}","loading":"Removing your column %{columnName}...","success":"%{columnName} column deleted","title":"You are about to delete %{columnName} column "},"rename":{"cancel":"Cancel","confirm":"ok, rename it","desc":"Maps using this column will be affected, are you sure you want to rename it?","error":"Error renaming column %{columnName} to %{newName}: %{error}","loading":"Renaming your column %{columnName} to %{newName}...","success":"Column %{columnName} renamed to %{newName}","title":"You are about to rename column %{columnName} to %{newName}"},"options":{"order":"Order","rename":"Rename column","change":"Change data type","create":"Add new column","delete":"Delete this column..."},"types":{"boolean":"Boolean","date":"Date","number":"Number","string":"String"}},"rows":{"loading":{"title":"Loading rows..."},"error":{"title":"There was an error...","desc":"It was not possible to obtain any results, check the query applied"},"result":{"no-page-title":"Ouch! Sorry","no-page-desc":"This page %{page} doesn't contain any results...","no-results-title":"There is no data","no-results-desc":"","no-results-button":""},"options":{"copy":"Copy cell value","create":"Add new row","edit":"Edit this cell","delete":"Delete this row..."},"create":{"loading":"Adding new row...","error":"Error adding new row: %{error}","success":"New row added"},"edit":{"loading":"Editing %{attribute} with cartodb_id %{cartodbId}...","error":"Error editing %{attribute} with cartodb_id %{cartodbId}: %{error}","success":"Edited %{attribute} with cartodb_id %{cartodbId}"},"destroy":{"cancel":"Cancel","confirm":"ok, delete","desc":"Are you sure you want to delete it?","error":"Error deleting row with cartodb_id %{cartodb_id}: %{error}","loading":"Removing your row with cartodb_id %{cartodb_id}...","success":"Row with cartodb_id %{cartodb_id} deleted","title":"You are about to delete row with cartodb_id %{cartodb_id}"},"paginator":{"error":"There was an error with pagination: %{error}","to":"to"}}}},"dataset":{"sql":"SQL","data":"Metadata","updated":"Updated %{ago}","read":"Read","options":{"add-row":"Add row","add-column":"Add column","export":"Export"},"preview-map":{"preview":"preview","back":"back"},"create-map":{"title":"Create map","loading":"Creating a map from %{tableName}","error":"There was an error creating the map"},"delete":{"option":"Delete dataset...","cancel":"Cancel","confirm":"Ok, delete it","desc":"The deleted dataset cannot be recovered, be sure before proceeding. We recommend you to export your dataset before deleting it.","error":"Error deleting %{tableName}: %{error}","loading":"Deleting your dataset %{tableName}...","title":"You are about to delete the %{tableName} dataset","affected-vis-count":"%{smart_count} map affected |||| %{smart_count} maps affected","affected-vis-count-extended":"%{affectedVisCount} maps affected, some of them are","affected-entities-count":"%{smart_count} user will lose access |||| %{smart_count} users will lose access","affected-entities-count-extended":"%{affectedEntitiesCount} users will lose access, some of them are","whole-organization-affected":"All users from your organization will be affected"},"metadata":{"option":"Edit metadata","error":"There was an error edititng metadata of your dataset %{name}","loading":"Editing metadata of your dataset %{name}..."},"duplicate":{"option":"Duplicate dataset","query":"applied query","customOption":"Create Dataset from query","error":"Your dataset couldn't be created","loading":"Duplicating your dataset %{name}..."},"lock":{"option":"Lock dataset","error":"There was an error locking %{tableName}","loading":"Locking your dataset %{tableName}..."},"rename":{"option":"Rename dataset","cancel":"Cancel","confirm":"ok, rename it","desc":"If you are accessing this dataset via API, don't forget to use the new name in your API calls afterwards.","error":"Error renaming %{tableName}: %{error}","loading":"Renaming your dataset %{tableName}...","success":"Dataset %{tableName} renamed","title":"Renaming %{tableName} will affect your API calls, maps, analyses, ..."},"sync":{"in-a-moment":"in a few moments","synced":"Synced %{ranAt}","syncing":"Syncing","loading":"Syncing dataset %{tableName}","sync-failed":"Sync failed","next":"Next will be %{runAt}","error-code":"Error code %{errorCode}","sync-now":"Sync now","view-options":"View options","disabled":"You will be able to sync manually %{gap} minutes after your last synchronization","title":"Sync dataset options","desc":"Your dataset is in sync with a %{service} file: <br/>%{url}","label":"Sync my data","error":"There was an error setting the interval","confirm":"Save","cancel":"Cancel"},"unlock":{"cancel":"back to dashboard","confirm":"ok, unlock it","desc":"That means you need to unlock it before doing anything. Are you sure?","error":"Error unlocking %{tableName}: %{error}","loading":"Unlocking your dataset %{tableName}...","success":"Dataset %{tableName} unlocked","title":"Your dataset %{tableName} is locked."},"privacy":{"info":"You're not able to change the privacy of this dataset. Contact the owner <b>%{name}</b>"}},"editor":{"map":"map","map_name":"%{name} map","published":"Published %{when}","unpublished":"Unpublished map","map_pluralize":"%{smart_count} map |||| %{smart_count} maps","button_publish":"Publish","unpublished-changes":"Unpublished changes","error-query":{"body":"Errors found in your SQL query. %{action} before continuing.","label":"Fix them"},"messages":{"common":{"cancel":"Cancel"},"deleting-analysis":{"title":"Delete nested analysis","body":"The selected analysis has one or more nested analysis that would be removed once this analysis is deleted. Proceed?","delete":"Delete","cancel":"Cancel"},"layer-hidden":{"title":"Layer hidden","body":"This layer is hidden. Changes won't be shown until you make it visible.","show":"Show"},"generic-error":{"title":"Some tiles were not displayed","body":"If the problem persists check our docs or contact us."},"interactivity":{"title":"Interactivity error","body":"Looks like you are over your account limits and the interactivity of your map could be affected.","try_to":" Try to:","cta":{"label":"Upgrade account","url":"https://carto.com/pricing/"}},"limit":{"title":"Some tiles might not be working correctly","body":"Looks like you are over your account limits when trying to render some of your tiles.","try_to":" Try to:","cta":{"label":"Upgrade account","url":"https://carto.com/pricing/"}}},"settings":{"menu-tab-pane-labels":{"preview":"Preview","snapshots":"Snapshots"},"preview":{"mode":{"title":"Mode"},"options":{"title":"Map Options","subtitle":"Components that are shown in the map","description":{"title":"Components","subtitle":"Change map elements"},"elements":{"search":"Search box","zoom":"Zoom controls","fullscreen":"Fullscreen","scrollwheel":"Scroll wheel zoom","layer_selector":"Layer selector","logo":"CARTO Logo","widgets":"Widgets column","legends":"Legends","dashboard_menu":"Show toolbar"}}}},"maps":{"options":{"duplicate":"Duplicate","edit-metadata":"Edit metadata…","export-image":"Export image…","export-map":"Download map…","remove":"Delete map…","rename":"Rename"},"duplicate":{"error":"There was an error duplicating %{name}","loading":"Duplicating your map %{name}..."},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"The deleted map cannot be recovered, be sure before proceeding.","title":"You are about to delete map %{name}","error":"Error deleting map %{name}: %{error}","loading":"Removing the map %{name}...","success":"Map %{name} deleted"},"export-image":{"title":"Export as image","export":"Export","generating":"Generating","disclaimer":{"title":"Disclaimer","body":"Legends and widgets won't be exported as part of the image"},"download":"Download","errors":{"try-again":"Please, try again. If the problem persists, contact support","error-attribution":"Error generating attribution.","error-basemap":"Error loading basemap.","error-image":"Error generating image."}},"export":{"confirmation":{"confirm":"Download","cancel":"Cancel","desc":"This map, and the connected data, will be downloaded as a .carto file","title":"Download \"%{name}\""},"download":{"confirm":"Download","tip":"Tip: Allow pop-ups from CARTO in your web browser.","desc":"Click Download to begin the .carto file download.","title":"Ready to Download"},"error":{"title":"An error occurred while exporting your map","desc":"Please try again. If the problem persists, please contact support"}},"rename":{"loading":"Renaming map...","success":"Map renamed to %{name}","error":"Error renaming map %{name}: %{error}"}},"tab-pane":{"layers":{"title-label":"Layers (%{count}/%{maxCount})"},"elements":{"title-label":"Elements"},"widgets":{"title-label":"Widgets"}},"elements":{"message":"Unfortunately, map overlays are not available yet, but they will be very soon. Stay tuned!"},"layers":{"add-layer":{"label":"Add new layer","tooltip":"Add new layer to your map"},"breadcrumb":{"layer-options":"Layer options","basemap-options":"Basemap options"},"warnings":{"no-data":{"message":"No data available.","action-message":"There are no results for the combination of analyses applied to your data. Try tweaking them."},"geocode":{"message":"There is no geometry in your data.","action-message":"Apply a Geocode analysis or manually add geometry data to visualize on the map."}},"errors":{"broken-node":"Broken node","non-existent-node":"Layer is pointing to a non existent node %{nodeId}"},"options":{"rename":"Rename","delete":"Delete layer…","delete-and-reload":"Delete layer and reload map","collapse":"Collapse","expand":"Expand","export":"Export data","hide":"Hide layer","show":"Show layer","edit":"Edit layer","center-map":"Center map on layer"},"drag-n-drop-analysis":{"upgrade-max-layers-err":"%{a_start}Upgrade your account%{a_end} to add more than %{userMaxLayers} layers to your maps."},"rename":{"loading":"Renaming layer…","success":"Layer renamed to %{name}","error":"<span class='u-errorTextColor'>Error renaming layer</span> %{name}: %{error}"},"moveTorqueLayer":{"loading":"Moving torque layer to first position...","success":"Layer moved","error":"Error moving the layer..."},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"<span class='CDB-Text u-mainTextColor is-semibold'>%{layerVisName}</span> will be affected, are you sure you want to delete it?","title":"You are about to delete the layer %{layerName}","error":"<span class='u-errorTextColor'>Error deleting layer</span>: %{error}","loading":"Removing layer…","success":"Layer deleted correctly.","widgets":"one widget |||| %{smart_count} widgets","analyses":"one analysis |||| %{smart_count} analyses","layers":"one layer |||| %{smart_count} layers","affected-items":"Deleting this layer affects","and":"and","link-to-export":"Before deleting the layer, you can <a href='#' data-event='exportMapAction'>export as .CARTO file</a>"},"layer":{"animated":"Animated","heatmap":"Heatmap","analysis":"Analysis","add-analysis":"Add analysis","analyses-count":"%{smart_count} Analysis |||| %{smart_count} Analyses","widgets-count":"%{smart_count} Widget |||| %{smart_count} Widgets","add-layer":"Add layer","empty-layer":"Empty layer","geocode-text":"To show data on this map, geocode your layer.","geocode":"Geocode","geocode-tooltip":"To show data on this map, geocode your layer."},"basemap":{"remove-baselayer":"Remove baselayer","custom-basemap":"Custom basemap","title-label":"Basemap","by":"by","category":{"title-label":"Source","select-category":"Select source"},"style":{"title-label":"Style","select-style":"Select style","color":"Color"},"saving":{"loading":"Saving new basemap...","error":"Error saving new basemap.","success":"Basemap saved successfully."}},"labels":{"title-label":"Labels"},"color":{"title-label":"Color"},"image":{"title-label":"Image"},"gmaps":{"title-label":"Google Maps"},"menu-tab-pane-labels":{"data":"Data","analyses":"Analysis","style":"Style","popups":"Pop-up","legends":"Legend"},"infowindow-menu-tab-pane-labels":{"click":"Click","hover":"Hover"},"analysis-form":{"admin-region":"Administrative Regions","aggregate":"Aggregate","aggregate-by-help":"Will calculate aggregate values for each centroid","aggregate-column":"Aggregate column","all-to-all":"All to all","allow-holes":"Allow holes","append":"Append","append-help":"Keep your source data and append matching rows from your target. (Left Join).","apply-btn":"Apply","asc":"ASC","base-data":"Base data","bicycle":"Bicycle","boundaries":"Boundaries","bounding-box":"Bounding Box","bounding-circle":"Bounding Circle","by":"By","by-bike":"bike","by-car":"car","by-walk":"walk","cancel-btn":"Cancel","car":"Car","categorize-by":"Categorize","categorize-by-help":"If selected a centroid will be found for each category","category-column":"Category column","choose-similar-columns":"Choose similar columns to relate them","centroid-desc":"Group or weight your centroids","city":"City","clusters-num":"Clusters","closeness":"Closeness","column":"Column","concave-hull":"Concave Hull","confirm-analysis":"Confirm","convex-hull":"Convex Hull","country":"Country","data-observatory-measurement-area":"Country","data-observatory-measurement-column":"New col. name","data-observatory-measurement-column-help":"Adds a new column to your layer to store result","data-observatory-measurement-desc":"enrich your data","data-observatory-measurement-measurement":"Measurement","data-observatory-measurement-refine":"Choose a measure","data-observatory-measurement-segments":"Segments","data-observatory":{"list":{"add":"Add new measurement"},"header":{"title":"Select a region","description":"Region must match your geometry location"},"parameters":{"title":"Select measurements","description":"Contextual data to augment your layer"},"source":{"label":"Base layer"},"region":{"label":"Region","error":"Error getting regions.","placeholder":"Select a region","search-placeholder":"Search by region"},"measurements":{"label":"Measurement","placeholder":"Select a measurement"},"normalize":{"label":"Normalize","placeholder":"Select a metric","disabled-placeholder":"Enable Normalization"},"timespan":{"label":"Timespan","placeholder":"Select a timespan"},"boundaries":{"label":"Boundaries"}},"data-type":"Data type","define-columns":"Define column to find similarities with","define-how-connect-points":"Define how to connect your points","define-two-layers":"Define two layers","delete-btn":"Delete","deprecated-sql-function":{"choose-function":"Choose the function to run on this node","choose-function-small":"Choose function","define-params":"define your parameters below","function":"function","input":"input","params":"Your Function's Parameters","target":"target node","title":"SQL Function"},"desc":"DESC","direction":"Direction","disabled-by-config":"This analysis type is disabled","dissolved":"Dissolved","dissolved-help":"Combine polygons tracts which have equal ranges","distance":"Distance","enter-latitude":"Enter latitude","enter-longitude":"Enter longitude","enable-normalize":"Enable Normalize","filter":"Filter","filter-aggregate":"Aggregate your results","filter-column":"Target column","geometry-from":"Geometry from","georeference":{"description":"Geocode to get location coordinates","postal-code-help":"Select a column with postal codes","admin-region-help":"Select a column with region names","admin-region-extended-help":"Specify an administrative region or select a column with region names","admin-region":"Administrative Regions","city-help":"Select a column with city names","city-extended-help":"Specify a city or select a column with city names","city":"Cities","country-help":"Select a column with country names","country-extended-help":"Specify a country or select a column with country names","country":"Countries","enter-city-name":"Or enter city name","enter-country-name":"Or enter country name","enter-region-name":"Or enter region name","enter-state-name":"Or enter state name","ip-address-column":"IP Address","ip-address-help":"Select a column with IP addresses","ip-address":"IP Addresses","long-lat":"Latitude and Longitude","postal-code":"Postal Codes","select-a-country":"Select a country column","select-admin":"Select a region column","select-city":"Select a city column","select-country":"Select country column","select-ip":"Select an IP column","select-latitude":"Select a latitude column","select-longitude":"Select a longitude column","select-postal-code":"Select a postal code column","select-state":"Select state column","select-street-address":"Select an address column","state-help":"Specify a state or select a column with state names","street-address-column":"Street Address","street-address-column-help":"Select a column with street addresses","street-address-help":"Use columns or free text to compose your address schema. <a href='https://carto.com/learn/guides/analysis/geocode-street-addresses-into-point-geometries' target='_blank'>More info.</a>","street-address":"Street Addresses","advance":"Advanced mode","normal":"Normal mode"},"group-by":"Group by","hide":"Hide","input-layer":"Define your input layer","intact":"Intact","intact-help":"Keep all polygon tracts as individual polygons","intersect":"Intersect","select-your-points":"Select your points","intersect-help":"Only keep the rows matching your target data (Inner Join).","intersect-step-one-desc":"To find overlapping geometries","join-type":"Join Type","keep-data":"Select the data you want to keep from each","key-columns":"Choose a shared column","key-columns-desc":"Columns must have the same type of data","kilometers":"km","latitude":"Latitude","line-sequential":"Sequential","line-source-to-target":"To Source","line-to-single-point":"To Single Point","link-layer":"Link to col.","link-layer-desc":"This layer's widgets will link both","linked-layer":"Target layer","loading":"loading…","longitude":"Longitude","markov-desc":"One for each time period","max-or-equal":"Max or equal","max":"Max","measure-by":"Measure by","merge-step-one-title":"Select a target to join","meters":"m","method":"Method","miles":"mi","min-or-equal":"Min or equal","min":"Min","mode":"Mode","moran-desc":"Find spatially clustered values and outliers","more-info":"Info","find-nearest":{"categorized":"Per group","categorized-help":"Calculate results per each category of the chosen column","max-results":"max results","modal-desc":"Select points from second dataset nearest to the geometries in current layer.","modal-title":"Find Nearest","workflow-title":"Find Nearest"},"neighbors":"Neighbors","neighbors-help":"Define the local neighborhood as this many nearest-neighbors","no":"No","normalize":"Normalize","normalize-help":"A column to normalize the target column","should-match":"Column types should match","numerator":"Target column","numerator-help":"Measure spatial autocorrelation of this column","operation":"Operation","order":"Order","order-by":"Order by","order-results":"Order your results","output-data":"Define output data","parameters":"Define your parameters","parameters-description":"Tune your analysis","permutations":"Permutations","placeholder-text":"Analysis allow you to build reproducible workflows for analyzing and explaining your data.","add-analysis":{"label":"Add new analysis","tooltip":"Add a new node to your analysis workflow"},"edit-analysis-tooltip":"Edit Analysis","points_source":"Point source","polygons_source":"Polygon source","postal-code":"Postal Code","quota":{"title":"confirm your analysis","loading":"Obtaining your quotas...","credits-left-body":"This might incur into an extra cost. Extra credits will be charged at $%{blockPrice}/%{blockSize}.","credits-left-message":"%{smart_count} credit left |||| %{smart_count} credits left","enough-quota":"You need to use approximately %{credits} of your credits.","hard-limit-not-enough-quota":"We're sorry the current quota is insufficient to enrich your data. Rows will be set to null and analysis may not complete. Please %{contact} us to extend your quota for this function.","soft-limit-enough-quota":"We're sorry the current quota is insufficient to enrich your data. This might need about %{credits} extra credits. Extra credits will be charged at $%{blockPrice}/%{blockSize}.","no-quota-assigned-body":"To get access to the %{analysis} function, %{contact}.","no-credits-body":"You have consumed all your credits during this billing cycle. %{contact} to get some more.","no-credits-message":"No credits available","contact-message":{"no-credits":{"regular":"Contact us","organization":"Contact your organization admin"},"no-quota-assigned":{"regular":"contact our team","organization":"contact your organization admin"}},"emails":{"support":"support@carto.com","saas":"sales@carto.com"},"quota-error-title":"Error","quota-fetch-error":"There was an error obtaining your quota: %{error}.","quota-dataservice-down":"Dataservices API unreacheable.","cancel":"Cancel","confirm":"confirm","analysis-type":{"routing":"Routing","trade-area":"Trade area","georeference-street-address":"Geocode street address","georeference-cities":"Geocode cities","data-observatory-measure":"Enrich from Data Observatory"}},"public_transport":"Public transport","radius":"Distance","reference-layer-pluralize":"Define your reference layer |||| Define your reference layers","results":"Results","right":"Right","sampling":"Sampling","sampling-desc":"Select a sample of the data","sampling-rate":"Percent of data ","search-by-column-name":"Search by column name","second-geom-required":"This analysis requires a second geometry column","select-column":"Select a column","select-type-placeholder":"Select a type","select-columns":"Select columns","select-data-source":"Select a data source","select-layer":"Select a layer","select-second-source":"Select a second data source to join","select-type":"Select data type","select-value":"Select a value","setup-analysis":"Setup analysis","show":"Show","significance":"Significance","significance-help":"Filter outliers and clusters to this significance. Smaller numbers are more significant.","source-col":"Base col.","source-column":"Base column","spatial-markov-trend-desc":"One for each time period","spatial-markov-trend-time-columns":"Base columns","spatial-markov-trend-time-columns-help":"Each column should contain values for a time period","sampling-form-model":{"help":"% of data to show"},"state":"State","target":"Target","target-layer":"Target layer","base-layer":"Base layer","target-col":"Target col.","target-column":"Target column","target-data":"Target data","target-percent":"Target percent","target-percent-help":"Convex hull lookalike","target-layer-dataset":"Target can be a layer or a dataset","time":"Time","time-seconds":"Time (Seconds)","to-closest":"To closest","top-range":"Top range","to-filter-by":"To filter by","tracts":"Tracks","tracts-help":"Number of AOIs evenly spaced between 0 and RADIUS","tune-analysis":"Tune your analysis","tune-centroid":"Tune your centroid","tune-clusters":"Tune your clusters","units":"Units","type":"Type","value":"Value","value-aggregation":"Value aggregation","value-aggregation-desc":"Aggregate the desired value in your polygon(s)","value-aggregation-centroids":"Aggregate the desired value in your centroid(s)","valid-type":"This kind of data is not valid for this type","walk":"Walk","weight":"Weight","weight-column":"Weight column","weight-type":"Weight type","weighted-by":"Weighted by","weighted-by-help":"Weights contribution by a value for each point","workflow":"Your workflow","write-min-or-equal-value":"Write min or equal value","write-max-or-equal-value":"Write max or equal value","write-min-value":"Write min value","write-max-value":"Write max value","yes":"Yes"},"infowindow":{"select-fields":"Select fields","no-fields":"You haven’t selected any fields to be shown in the popup.","placeholder-interactivity-text":"Popups are disabled because interactivity is not available for this layer.","placeholder-columns-text":"Popups are disabled because there are no columns available for this layer.","style":{"title-label":"Style","select-style":"Select style","size":{"label":"Window size","help":"Change Pop-Up width"},"header-color":"Header color","none":"None","custom":"Custom","infowindow_light":"Light","infowindow_dark":"Dark","infowindow_color":"Color","infowindow_header_with_image":"Image"},"tooltips":{"none":"No Pop-Up applied","infowindow_light":"Pop-Up Light","infowindow_dark":"Pop-Up Dark","infowindow_color":"Pop-Up with header color","infowindow_header_with_image":"Pop-Up with header image"},"items":{"title-label":"Show items","description":"Add items","help":"Change text field"}},"tooltip":{"style":{"none":"None","custom":"Custom","tooltip_light":"Light","tooltip_dark":"Dark"},"items":{"title-label":"Show items","description":"Add items"}},"filter-options":{"top":"Top","bottom":"Bottom","between":"Between","is-equal-to":"Is equal to","is-greater-than":"Is greater than","is-greater-or-equal-than":"Is greater than or equal to","is-less-than":"Is less than","is-less-or-equal-than":"Is less than or equal to"},"notifier":{"center-map":{"loading":"Calculating coordinates...","success":"Map centered","error":"Error centering map"}},"georeference":{"georeference-button":"Geocode","visualize":"Layer doesn't have geometry"},"max-layers-infowindow":{"title":"You have reached your maximum layer limit.","pricing":"https://carto.com/pricing/","custom":{"body":"Your account does not support more than %{maxLayers} layers.","contact":"Contact us","contact-url":"https://carto.com/contact/"},"regular":{"body":"Upgrade your account to add more than %{maxLayers} layers to your map.","upgrade":"Upgrade your account"},"org":{"body":"Increase your layer limit by contacting the account's administrator.","upgrade":"Contact admin"},"org-admin":{"body":"Increase the layer limit for your organization by contacting CARTO support.","upgrade":"Contact support"}}},"data":{"no-geometry-data":{"message":"This layer is empty. Add data to start working.","action-message":"Click the blue button on the bottom right to add points (%{pointIcon}), lines (%{lineIcon}) or polygon (%{polygonIcon})."},"stats":{"add-widget":"Add as a widget","edit":"EDIT","top-cat":"% in top 10 cat.","trues":"% true","null":"% null","feature-count":"feature count","geometry-fallback":"features","help":"Edit widget"},"data-toggle":{"values":"VALUES","cartocss":"SQL","tooltip":"Switch to SQL view"},"code-mirror":{"tip":"CMD + S to apply your query. CTRL + Space to autocomplete.","quota-data-services-warning":"You're about to execute a function that will consume several Data Services credits, so we advise you to be mindful of your quota consumption when using this function here.","quota-data-services-warning-link":"You can read more about our Data Services API in our <a href='https://carto.com/developers/data-services-api/reference/#geocoding-functions' target='_blank'>guides</a>."},"notifier":{"sql-alter-loading":"Modifying table…","sql-alter-error":"Error in SQL query.","sql-alter-success":"Modification applied.","sql-applying":"Applying query…","sql-error":"Error in SQL query.","sql-success":"SQL query applied."},"messages":{"sql-readonly":{"title":"SQL READ-ONLY","body":"You just applied an analysis to this layer. The SQL is now read- only.","accept":"CLOSE"},"empty-data":{"title":"NO DATA AVAILABLE","body":"There is no data available to be displayed."}}},"infowindow":{"apply":"APPLY","html-toggle":{"values":"VALUES","html":"HTML","tooltip":"Switch to HTML view"},"code-mirror":{"save":"CMD + S to apply your html.","sanitize":"Use {{{column}}} to sanitize values.","errors":{"empty":"Template can't be empty."}},"messages":{"custom-html-applied":{"title":"CUSTOM HTML APPLIED","body":"You just applied custom html with HTML editor. You can continue or clear all custom HTML.","accept":"Clear custom html"}}},"export-image":{"invalid-dimension":"Invalid dimension, max %{limit}x%{limit}px","properties":{"width":"width","height":"height","size":"Size","size-subtitle":"Manually enter the image size","format":"Format","format-subtitle":"Choose a lossless (PNG) or lossy (JPG) format","options":"Options","options-subtitle":"Configure display options"}},"legend":{"no-geometry-data":"There's no geometry in your data to add a legend.","data-toggle":{"values":"VALUES","html":"HTML","tooltip":"Switch to HTML view"},"code-mirror":{"save":"CMD + S to apply your html.","errors":{"empty":"Template can't be empty."},"pre-html":"<!-- insert your custom html code below this line -->","post-html":"<!-- insert your custom html code above this line -->"},"menu-tab-pane-labels":{"color":"color","size":"size","size-disabled":"Style your layer by value to enable this type of legend"},"messages":{"custom-legend":{"title":"CUSTOM LEGEND APPLIED","body":"You just applied custom html with HTML editor. You can continue or clear all custom HTML.","accept":"Clear custom html"},"legends-disabled":{"title":"LEGENDS DISABLED","body":"The legends setting is disabled. Changes made will not be shown until you enable legends.","show":"ENABLE"}},"tooltips":{"style":{"none":"No Legend applied","bubble":"Bubble Legend","category":"Category Legend","torque":"Torque Legend","choropleth":"Choropleth Legend","custom_choropleth":"Custom Choropleth Legend","custom":"Custom Legend"},"item":{"fill":"Change item color","title":"Change text item","remove":"Remove item"}},"types":{"none":"none","category":"category","gradient":"gradient","bubble":"bubble","custom":"custom"},"legend-form":{"type":{"title":"Select Style"},"properties":{"title":"Creating your legend","subtitle":"Add items"},"add":"Add item","title":{"label":"Title","help":"Change legend title"},"fill":"Fill","by-size":"By Size","by-color":"By Color","untitled":"Untitled","others":"Others","prefix":"Prefix","suffix":"Suffix","left-label":"Left Label","right-label":"Right Label","top-label":"Top Label","bottom-label":"Bottom Label","custom-label-placeholder":"Override dynamic value"},"pixel-title":"Amount"},"style":{"types":{"none":"-","simple":"points","hexabins":"hexbins","squares":"squares","regions":"Administrative Regions","heatmap":"heatmap","animation":"animated"},"style-form":{"type":{"title-label":"Aggregation"},"aggregation":{"title-label":"Aggregation Options","desc":"Configure how the aggregation works","tooltips":{"none":"-","simple":"By Points","hexabins":"By Hexbins","squares":"By Squares","regions":"By Administrative Regions","heatmap":"Heatmap","animation":"Animated"}},"properties":{"title-label-point":"Style","title-label-line":"Lines style","title-label-polygon":"Polygons style","georeference":"Geocode","desc":"Change the visualization"},"unanimatable":{"desc":"Not any numeric or date column found in your data.","body":"You can change your column's type in the %{link}.","label":"table view"}},"code-mirror":{"save":"CMD + S to apply your styles."},"style-toggle":{"values":"VALUES","cartocss":"CARTOCSS","tooltip":"Switch to CartoCSS view"},"messages":{"fetched":"Schema fetched, select a style","fetching":"Schema is being fetched, when it is done, different styles will be avaiable","unavailable":"There was a problem getting schema, try to reload","none":"Your styles were reset, choose new styles for your layer, or go back to your previous style.","cartocss-applied":{"title":"CARTOCSS APPLIED","body":"You just applied styles with CartoCSS. You can continue or clear all styles.","clear":"CLEAR"},"torque-exists":{"title":"TORQUE LAYER","body":"There is already a torque layer in the layers collection. If you continue, this layer will use the default style.","continue":"CONTINUE"}},"tooltips":{"blending":"Layer Color and Alpha Blending Modes","line":"line","polygon":"polygon","simple":"point","squares":"square","hexabins":"hexbin","regions":"region","animation":"point","heatmap":"heatmap","fill":{"size":"Change the %{type} size","color":"Change the %{type} color","color-heatmap":"Change the heatmap's color scheme","image":"Change the %{type} image","fixed-tab":"A fixed color for every %{type}","by-value-tab":"Vary each %{type}'s color by an attribute to create a category or classed %{type} map"},"size":{"fixed-tab":"A fixed size for every %{type}","by-value-tab":"Vary each %{type}'s size by a numeric attribute to create a classed %{type} map"},"stroke":{"size":"Change the %{type} stroke size","color":"Change the %{type} stroke color"}},"components":{"size":"Size","color":"Color","fillColor":{"label":"Color","point":"Point","line":"Line","polygon":"Polygon"},"stroke":{"label":"Stroke","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema..."},"stroke-color":{"label":"Stroke Color"},"stroke-size":{"label":"Stroke Size"},"point-size":{"label":"Point Size"},"blending":{"label":"Blending","options":{"none":"none","darken":"darken","lighten":"lighten","lighter":"lighter","color-dodge":"color-dodge","color-burn":"color-burn","multiply":"multiply","screen":"screen","overlay":"overlay","src-over":"src-over","source-over":"source-over","xor":"xor"}},"type":{"label":"Type","options":{"heatmap":"Heatmap","points":"Points"}},"aggregation-fill":"Color","aggregation-value":{"label":"Operation","help":"Change the operation"},"aggregation-size":{"label":"Size","label-help":"In pixels","help":"Change the %{type} size"},"aggregation-dataset":{"label":"Adm. level","help":"Groups points by polygon boundaries based on world admininstrative levels"},"labels-enabled":{"label":"labels","not-with-animated":"Not available with animations"},"labels-attribute":{"label":"column","placeholder":"Select a column","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema...","help":"The column from your dataset to be used for labels"},"labels-font":"font","labels-offset":"offset","labels-fill-size":"font size","labels-fill-color":"font color","labels-overlap":{"label":"overlap","options":{"true":"True","false":"False"}},"labels-halo-size":"halo size","labels-halo-color":"halo color","labels-placement":{"label":"placement","options":{"point":"point","line":"line","vertex":"vertex","interior":"interior"}},"animated-enabled":{"label":"animated","already-one-torque":"There is already a torque layer in your map","not-with-labels":"Not available with labels"},"animated-attribute":{"label":"column","placeholder":"Select a column","fetching":"Loading node schema...","unavailable":"Error getting node schema","error":"There was an error fetching node schema...","help":"The column from your dataset that drives the animation"},"animated-overlap":{"label":"overlap","options":{"true":"Accum.","false":"None"}},"animated-trails":{"label":"trails","help":"Specifies how a pixel is rendered in the frames"},"animated-resolution":{"label":"resolution","help":"Defines the width and height of each Torque cell, in pixels"},"animated-steps":{"label":"steps","help":"The number of animation steps/frames in your animation"},"animated-duration":{"label":"duration","help":"The length of time for your animation, in seconds."}}},"widgets":{"add-widget":{"label":"Add new widget","tooltip":"Add new widget to your map"},"breadcrumb":{"widget-options":"Widget options"},"no-geometry-data":"Your dataset lacks geometry data, it is not possible to add a widget.","options":{"remove":"Delete...","rename":"Rename","edit":"Edit"},"delete":{"confirm":"Ok, delete it","cancel":"Cancel","desc":"The widget cannot be recovered, be sure before proceeding.","title":"You are about to delete the widget %{name}","error":"Error deleting widget %{name}: %{error}","loading":"Removing the widget %{name}...","success":"Widget %{name} deleted"},"widgets-view":{"add_widget":"Add widget"},"widgets-types":{"histogram":"Histogram","category":"Category","formula":"Formula","time-series":"Time series"},"widgets-form":{"placeholder-text":"You have not added any widgets yet. Add widgets to discover new things.","type":{"title-label":"Type","description":"Choose the widget type","category":"Category","formula":"Formula","histogram":"Histogram","time_series":"Time Series"},"data":{"columns-unavailable":"No columns available","aggregation":"Aggregation","aggregation_column":"Aggregation Column","bins":"Buckets","column":"Column","timezone":"Time Zone","description":"Configure your values","end":"End","loading":"loading…","operation":"Operation","prefix":"Prefix","start":"Start","suffix":"Suffix","title":"Title","title-label":"Data","value":"Value","aggregate-by":"aggregate by","operation-column":"operation column","search-by-bucket":"Search by bucket","select-bucket":"Select a bucket"},"style":{"custom-disabled":"If an aggregated style is applied, auto style is disabled","custom-colors":"Custom colors","custom-help":"Custom colors: colors used when Autostyle (drop icon) is applied","define":"Define how your widget interacts with the data","description":"Description","fill":"Color","no":"No","sync_on_bbox_change":"Dynamic","sync_on_data_change":"Unfiltered","title-label":"Behavior","yes":"Yes"}}},"context-switcher":{"map":"Map","data":"Data"},"edit-feature":{"features":{"point":"point","line":"line","polygon":"polygon"},"loading-state":"Requesting feature data...","error-state":"There was an error requesting feature data","overlay-text":"Start clicking on the map to draw your %{featureType}","add":"Add","save":"Save","attributes":"Attributes","attributes-columns":"Change column names and type in table mode","cancel":"Cancel","geometry":"Geometry","geometry-edit":"You can also edit it on the map","geometry-disabled":"Not available for hidden or read only layers","out-of-bounds-lng":"Longitude is out of bounds [-180, 180]","out-of-bounds-lat":"Latitude is out of bounds [-90, 90]","valid-lng":"Must be a valid longitude","valid-lat":"Must be a valid latitude","valid":"Only numbers allowed","delete":"Delete %{featureType}","edit":"Edit %{featureType}","analysis":"layers with analysis nodes","custom-sql":"layers with custom SQL applied","aggregated":"layers with aggregated styles","sync":"read only layers","disabled":"Feature editing is disabled for %{disabledLayerType}. To edit data, export this layer and import it as a new layer.","add-point":"Add point","add-line":"Add line","add-polygon":"Add polygon"}},"notifications":{"vis":{"failed":{"title":"This map couldn't be rendered","body":"Please refresh the page and contact us if the error persists"}},"analysis":{"waiting":"Analysis %{nodeId} enqueued...","running":"Analysis %{nodeId} running...","completed":"Analysis %{nodeId} completed","failed":"Analysis %{nodeId} failed","removed":"Analysis %{nodeId} deleted","contact":{"label":"contact us","mail":"support@carto.com"},"sample":"sample","errors":{"timeout":"Your analysis has taken too long. Try to %{sample} your data or %{contact} for further assistance","without-geom-webmercator":"The column \"the_geom_webmercator\" does not exist","without-cartodb-id":"The column \"cartodb_id\" does not exist"}},"widgets":{"add_pluralize":"Widget successfully added |||| Widgets successfully added","replace":"Widget successfully replaced","replace_pluralize":"Widget successfully replaced |||| Widgets successfully replaced","delete_pluralize":"Widget deleted correctly |||| Widgets deleted correctly","error":{"title":"Error adding widget:","body":"%{body} %{error}"},"loading":"Adding widget…","loading_pluralize":"Adding widget… |||| Adding widgets...","updating":"Updating widget…","updating_pluralize":"Updating widget… |||| Updating widgets...","restoring":"Restoring widgets…","restored":"Widgets restored"},"layer":{"error":"Layer error: %{error}","added":"Layer added successfully"},"cartocss":{"error":{"body":"%{body} %{error}","title":"Error in CartoCSS styles:"},"success":"CartoCSS applied"},"sql":{"429":{"body":"You are over platform's limits. Please %{link} to know more details","link":"contact us","href":"mailto:support@carto.com"},"alter-loading":"Modifying table…","alter-success":"Modification applied","applying":"Applying query…","unknown":{"body":"There was an error in the SQL query"},"error":{"body":"%{body} %{error}","title":"Error in SQL query:"},"success":"SQL query applied"},"edit-feature":{"edit":{"loading":"Requesting geometry data...","error":"There was an error requesting geometry data"},"error":{"body":"%{body} %{error}"},"destroy":{"loading":"Deleting geometry…","error":"Error deleting geometry","success":"Geometry deleted correctly"},"save":{"loading":"Saving geometry…","error":"Error saving geometry","success":"Geometry successfully saved"},"adding":"Adding geometry…"}}};

/***/ }),

/***/ "./lib/assets/javascripts/locale/es.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/es.json ***!
  \***********************************************/
/*! exports provided: editor, default */
/***/ (function(module) {

module.exports = {"editor":{"map":"mapa","map_name":"%{name} mapa","map_pluralize":"%{smart_count} mapa |||| %{smart_count} mapas"}};

/***/ }),

/***/ "./lib/assets/javascripts/locale/sw.json":
/*!***********************************************!*\
  !*** ./lib/assets/javascripts/locale/sw.json ***!
  \***********************************************/
/*! exports provided: editor, default */
/***/ (function(module) {

module.exports = {"editor":{"map":"karta","map_name":"%{name} karta","map_pluralize":"%{smart_count} karta |||| %{smart_count} kartor"}};

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

/***/ 4:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=dataset.js.map