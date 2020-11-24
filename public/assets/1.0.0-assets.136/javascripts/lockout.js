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
/******/ 		"lockout": 0
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
/******/ 	deferredModules.push(["./lib/assets/javascripts/dashboard/lockout.js","common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./lib/assets/javascripts/dashboard/components/delete-account/delete-account.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/delete-account/delete-account.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form accept-charset="UTF-8" class="js-form">\n  <div class="CDB-Text Dialog-header u-inner">\n    <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n      <i class="CDB-IconFont CDB-IconFont-defaultUser"></i>\n    </div>\n    <p class="Dialog-headerTitle">You are about to delete your account.</p>\n    <p class="Dialog-headerText">\n      Remember, once you delete your account there is no going back.<br/>\n      All your maps, data and work will be lost. Are you sure you want to proceed?<br/>\n      ';
 if (passwordNeeded) { ;
__p += '\n        In any case, you need to type your password.\n      ';
 } ;
__p += '\n    </p>\n  </div>\n\n  ';
 if (passwordNeeded) { ;
__p += '\n    <div class="CDB-Text Dialog-body">\n      <div class="Form-row Form-row--centered has-label">\n        <div class="Form-rowLabel">\n          <label class="Form-label">Your password</label>\n        </div>\n        <div class="Form-rowData">\n          <input\n            type="password"\n            id="deletion_password_confirmation"\n            name="deletion_password_confirmation"\n            class="CDB-InputText CDB-Text Form-input Form-input--long ' +
__e( isLoading ? 'is-disabled' : '' ) +
'"\n            value=""\n          />\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n  ';
 if (error) { ;
__p += '\n    <p class="CDB-Text CDB-Size-medium u-errorTextColor u-flex u-justifyCenter">' +
__e( error ) +
'</p>\n  ';
 } ;
__p += '\n\n  <div class="Dialog-footer u-inner">\n    <button type="button" class="CDB-Button CDB-Button--secondary js-cancel">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Cancel</span>\n    </button>\n    <button type="submit" class="CDB-Button CDB-Button--error js-ok">\n      ';
 if (isLoading) { ;
__p += '\n        <div class="CDB-LoaderIcon CDB-LoaderIcon--small u-iBlock">\n          <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n            <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n          </svg>\n        </div>\n      ';
 } else { ;
__p += '\n        <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Yes, delete my account</span>\n      ';
 } ;
__p += '\n    </button>\n  </div>\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/lockout.js":
/*!*****************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/lockout.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CartoNode = __webpack_require__(/*! carto-node */ "./lib/assets/javascripts/carto-node/index.js");
var DeleteAccountView = __webpack_require__(/*! dashboard/components/delete-account/delete-account-view */ "./lib/assets/javascripts/dashboard/components/delete-account/delete-account-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var ConfigModel = __webpack_require__(/*! dashboard/data/config-model */ "./lib/assets/javascripts/dashboard/data/config-model.js");
var UserModel = __webpack_require__(/*! dashboard/data/user-model */ "./lib/assets/javascripts/dashboard/data/user-model.js");

var client = new CartoNode.AuthenticatedClient();
var modals = new ModalsServiceModel();

var configModel = new ConfigModel(_.defaults({ base_url: window.user_data.base_url }, window.config));
var currentUser = new UserModel(window.user_data, { configModel: configModel });

$('.js-deleteAccount').click(function () {
  modals.create(function (modalModel) {
    return new DeleteAccountView({
      userModel: currentUser,
      modalModel: modalModel,
      client: client
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=lockout.js.map