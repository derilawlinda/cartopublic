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
/******/ 		"account": 0
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
/******/ 	deferredModules.push(["./lib/assets/javascripts/dashboard/account.js","common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./lib/assets/javascripts/dashboard/account.js":
/*!*****************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/account.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Polyglot = __webpack_require__(/*! node-polyglot */ "./node_modules/node-polyglot/index.js");
var CartoNode = __webpack_require__(/*! carto-node */ "./lib/assets/javascripts/carto-node/index.js");
var AccountMainView = __webpack_require__(/*! dashboard/views/account/account-main-view */ "./lib/assets/javascripts/dashboard/views/account/account-main-view.js");
var ConfigModel = __webpack_require__(/*! dashboard/data/config-model */ "./lib/assets/javascripts/dashboard/data/config-model.js");
var UserModel = __webpack_require__(/*! dashboard/data/user-model */ "./lib/assets/javascripts/dashboard/data/user-model.js");
var OrganizationModel = __webpack_require__(/*! dashboard/data/organization-model */ "./lib/assets/javascripts/dashboard/data/organization-model.js");
var AssetsVersionHelper = __webpack_require__(/*! dashboard/helpers/assets-version */ "./lib/assets/javascripts/dashboard/helpers/assets-version.js");

var Locale = __webpack_require__(/*! locale/index */ "./lib/assets/javascripts/locale/index.js");

var PACKAGE = __webpack_require__(/*! ../../../../package.json */ "./package.json");
var ACTIVE_LOCALE = 'en';

var polyglot = new Polyglot({
  locale: ACTIVE_LOCALE,
  phrases: Locale[ACTIVE_LOCALE]
});

__webpack_require__(/*! dashboard/data/backbone/sync-options */ "./lib/assets/javascripts/dashboard/data/backbone/sync-options.js");

window._t = polyglot.t.bind(polyglot);
window.StaticConfig = window.StaticConfig || {};
window.CartoConfig = window.CartoConfig || {};

var ForbiddenAction = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptors/forbidden-403 */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptors/forbidden-403.js");
var NetworkResponseInterceptor = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptor */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptor.js");
NetworkResponseInterceptor.addURLPattern('api/v');
NetworkResponseInterceptor.addErrorInterceptor(ForbiddenAction());
NetworkResponseInterceptor.start();

document.title = _t('account.title');

var InitAccount = function InitAccount() {
  var client = new CartoNode.AuthenticatedClient();

  var dataLoaded = function dataLoaded(data) {
    var ASSETS_VERSION = AssetsVersionHelper.getAssetsVersion(PACKAGE.version);
    var organizationNotifications = data.organization_notifications;
    var userData = data.user_data || {};

    var configModel = new ConfigModel(_.extend({ base_url: userData.base_url,
      url_prefix: userData.base_url }, data.config));

    var userModelOptions = { groups: userData.groups };

    if (userData.organization) {
      userModelOptions.organization = new OrganizationModel(userData.organization, { configModel: configModel });
    }

    var userModel = new UserModel(_.extend(userData, {
      auth_username_password_enabled: data.auth_username_password_enabled,
      can_be_deleted: data.can_be_deleted,
      can_change_password: data.can_change_password,
      cant_be_deleted_reason: data.cant_be_deleted_reason,
      logged_with_google: data.google_sign_in,
      plan_name: data.plan_name,
      plan_url: data.plan_url,
      services: data.services,
      should_display_old_password: data.should_display_old_password
    }), userModelOptions);

    new AccountMainView({ // eslint-disable-line no-new
      el: document.body,
      userModel: userModel,
      configModel: configModel,
      assetsVersion: ASSETS_VERSION,
      client: client,
      organizationNotifications: organizationNotifications
    });
  };

  if (window.CartoConfig && window.CartoConfig.data) {
    dataLoaded(window.CartoConfig.data);
  } else {
    client.getConfig(function (err, response, data) {
      if (err) {
        console.error(err);
        return err;
      }

      window.CartoConfig.data = data;
      dataLoaded(data);
    });
  }
};

InitAccount();

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

/***/ "./lib/assets/javascripts/dashboard/components/flash-message/flash-message.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/flash-message/flash-message.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="FlashMessage FlashMessage--' +
__e( type ) +
' CDB-Text">\n  <div class="u-inner">\n    <p class="FlashMessage-info">' +
__e( str ) +
'</p>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/pages-subheader/pages-subheader.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/pages-subheader/pages-subheader.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="SideMenu-type">\n  <ul class="SideMenu-list">\n    <li class="SideMenu-typeItem"><a href="' +
((__t = ( profileUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink ';
 if (path === profileUrl) { ;
__p += 'is-selected';
 } ;
__p += '">Profile</a></li>\n    <li class="SideMenu-typeItem"><a href="' +
((__t = ( accountUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink ';
 if (path === accountUrl) { ;
__p += 'is-selected';
 } ;
__p += '">Account</a></li>\n    <li class="SideMenu-typeItem"><a href="' +
((__t = ( connectedAppsUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink ';
 if (path === connectedAppsUrl) { ;
__p += 'is-selected';
 } ;
__p += '">Connected Apps</a></li>\n    ';
 if (!isCartoDBHosted && !isInsideOrg) { ;
__p += '\n      <li class="SideMenu-typeItem"><a href="' +
((__t = ( planUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink">Billing</a></li>\n    ';
 } ;
__p += '\n    ';
 if (isOrgAdmin) { ;
__p += '\n      <li class="SideMenu-typeItem"><a href="' +
((__t = ( organizationUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink ';
 if (path === organizationUrl) { ;
__p += 'is-selected';
 } ;
__p += '">Organization settings</a></li>\n    ';
 } ;
__p += '\n\n    <span class="SideMenu-separator"></span>\n\n    <li class="SideMenu-typeItem"><a href="' +
((__t = ( apiKeysUrl )) == null ? '' : __t) +
'" class="SideMenu-typeLink ';
 if (path === apiKeysUrl) { ;
__p += 'is-selected';
 } ;
__p += '">Developer Settings</a></li>\n  </ul>\n</div>\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/password-confirmation/password-confirmation.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/password-confirmation/password-confirmation.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Text Dialog-header u-inner">\n  <div class="Dialog-headerIcon Dialog-headerIcon--neutral">\n    <i class="CDB-IconFont CDB-IconFont-defaultUser"></i>\n  </div>\n  <h2 class="Dialog-headerTitle">\n    ' +
((__t = ( _t('components.modals.password-confirmation.modal-title') )) == null ? '' : __t) +
'\n  </h2>\n  <p class="Dialog-headerText">\n    ' +
((__t = ( _t('components.modals.password-confirmation.modal-description') )) == null ? '' : __t) +
'\n  </p>\n</div>\n\n<div class="CDB-Text Dialog-body">\n  <form id="password-confirmation-form" method="POST" class="Form-row Form-row--centered has-label">\n    <div class="Form-rowLabel">\n      <label class="Form-label" for="password-confirmation">' +
((__t = ( _t('components.modals.password-confirmation.form.password-label') )) == null ? '' : __t) +
'</label>\n    </div>\n    <div class="Form-rowData">\n      <input type="password" id="password-confirmation" name="password_confirmation" class="CDB-InputText CDB-Text Form-input Form-input--long js-password" value="" autofocus/>\n    </div>\n  </form>\n</div>\n\n<div class="Dialog-footer u-inner">\n  <button type="button" class="CDB-Button CDB-Button--secondary js-cancel">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n      ' +
((__t = ( _t('components.modals.password-confirmation.actions.cancel') )) == null ? '' : __t) +
'\n    </span>\n  </button>\n  <button class="CDB-Button CDB-Button--primary js-ok' +
((__t = ( isConfirmDisabled ? ' is-disabled' : '')) == null ? '' : __t) +
'">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n      ' +
((__t = ( _t('components.modals.password-confirmation.actions.confirm') )) == null ? '' : __t) +
'\n    </span>\n  </button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/service-item/service-item-view.js":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/service-item/service-item-view.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var ServiceOauth = __webpack_require__(/*! dashboard/data/service-oauth-model */ "./lib/assets/javascripts/dashboard/data/service-oauth-model.js");
var ServiceValidToken = __webpack_require__(/*! dashboard/data/service-valid-token-model */ "./lib/assets/javascripts/dashboard/data/service-valid-token-model.js");
var DisconnectDialog = __webpack_require__(/*! dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog-view */ "./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var template = __webpack_require__(/*! ./service-item.tpl */ "./lib/assets/javascripts/dashboard/components/service-item/service-item.tpl");

var REQUIRED_OPTS = ['configModel'];

/**
 *  OAuth service item view
 *  Connect or disconnect from a service
 */

module.exports = CoreView.extend({
  _WINDOW_INTERVAL: 1000,

  className: 'FormAccount-row',

  events: {
    'click .js-connect': '_connect',
    'click .js-disconnect': '_disconnect'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();

    this._modals = new ModalsServiceModel();

    if (this.model.get('connected')) {
      this._checkToken();
    }
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:state change:connected', this.render);
  },

  render: function render() {
    this.$el.html(template(this.model.attributes));

    return this;
  },

  _connect: function _connect(e) {
    var _this = this;

    if (this.model.get('state') === 'loading') {
      return;
    }

    this.model.set('state', 'loading');

    var service = new ServiceOauth(null, {
      datasourceName: this.model.get('name'),
      configModel: this._configModel
    });

    service.fetch({
      success: function success(model, response) {
        if (response.success && response.url) {
          _this._openWindow(response.url);
        }
      },
      error: function error() {
        return _this._setErrorState();
      }
    });
  },

  _disconnect: function _disconnect() {
    var _this2 = this;

    if (this.model.get('state') === 'loading') return;

    this._modals.create(function (modalModel) {
      return new DisconnectDialog({
        serviceModel: _this2.model,
        configModel: _this2._configModel,
        modalModel: modalModel
      });
    });
  },

  _checkToken: function _checkToken(successCallback, errorCallback) {
    var _this3 = this;

    var validToken = new ServiceValidToken({ datasource: this.model.get('name') }, { configModel: this._configModel });

    validToken.fetch({
      success: function success(model, response) {
        _this3.model.set('connected', response.oauth_valid);

        if (response.oauth_valid) {
          successCallback && successCallback();
        } else {
          errorCallback && errorCallback();
        }
      },
      error: function error() {
        errorCallback && errorCallback();
      }
    });
  },

  _setErrorState: function _setErrorState() {
    this.model.set('state', 'error');
  },

  _reloadWindow: function _reloadWindow() {
    window.location.reload();
  },

  _openWindow: function _openWindow(url) {
    var _this4 = this;

    var popupWindow = window.open(url, null, 'menubar=no,toolbar=no,width=600,height=495');

    var checkConnectionInterval = window.setInterval(function () {
      if (popupWindow && popupWindow.closed) {
        // Check valid token to see if user has connected or not.
        _this4._checkToken(_this4._reloadWindow, _this4._setErrorState.bind(_this4));
        clearInterval(checkConnectionInterval);
      }if (!popupWindow) {
        // Show error directly
        _this4._setErrorState();
        clearInterval(checkConnectionInterval);
      }
    }, this._WINDOW_INTERVAL);
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/service-item/service-item.tpl":
/*!***********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/service-item/service-item.tpl ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="FormAccount-rowLabel">\n  <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor FormAccount-label">' +
__e( title ) +
'</label>\n</div>\n<div class="FormAccount-rowData">\n  ';
 if (connected) { ;
__p += '\n    <input class="CDB-InputText CDB-Text FormAccount-input FormAccount-input--med is-disabled" readonly value="Connected" />\n  ';
 } else { ;
__p += '\n    ';
 if (state === "loading") { ;
__p += '\n      <button type="button" class="CDB-Size-medium FormAccount-link is-disabled">Connecting...</button>\n    ';
 } else { ;
__p += '\n      <button type="button" class="CDB-Size-medium FormAccount-link js-connect">\n        <i class="ServiceIcon ServiceIcon--' +
__e( name ) +
'"></i>Connect\n      </button>\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n\n  <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft FormAccount-rowInfoText--multipleLines">\n    <p class="FormAccount-rowInfoText ' +
__e( state === "error" ? 'FormAccount-rowInfoText--error' : '' ) +
'">\n    ';
 if (connected) { ;
__p += '\n      ';
 if (state === "error") { ;
__p += '\n        Ooops! There was an error, please <button type="button" class="FormAccount-link js-disconnect">try it again</button>\n        or <a class="FormAccount-link" href="mailto:support@carto.com">contact us</a> if the problem persists\n      ';
 } else if (state === "loading") { ;
__p += '\n        Disconnecting...\n      ';
 } else { ;
__p += '\n        <button type="button" class="CDB-Size-medium FormAccount-link js-disconnect">Disconnect</button>\n      ';
 } ;
__p += '\n    ';
 } else { ;
__p += '\n      ';
 if (state === "error") { ;
__p += '\n        There was an error, please be sure your pop-up blocker is disabled and try again or\n        <a class="FormAccount-link" href="mailto:support@carto.com">contact us</a> if the problem persists\n      ';
 } ;
__p += '\n    ';
 } ;
__p += '\n    </p>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/trial-notification/trial-notification.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/trial-notification/trial-notification.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Text FlashMessage FlashMessage--main">\n  <div class="u-inner">\n    <div class="FlashMessage FlashMessage-info FlashMessage--main u-flex u-justifyCenter u-alignCenter">\n      <p class="FlashMessage--text">' +
((__t = ( _t('common.trial_notification.views.trial_notification.message', { trial_days: trialDays }) )) == null ? '' : __t) +
'&nbsp;<a href="' +
((__t = ( upgradeUrl )) == null ? '' : __t) +
'" class="FlashMessage--text">' +
((__t = ( _t('common.trial_notification.views.trial_notification.add_payment') )) == null ? '' : __t) +
'</a></p>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/upgrade-message.tpl":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/upgrade-message.tpl ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (closeToLimits && canUpgrade) { ;
__p += '\n  <div class="UpgradeElement">\n    <div class="u-inner u-flex u-alignCenter u-justifyCenter">\n      <div class="UpgradeElement-info">\n        <p class="UpgradeElement-infoText u-ellipsLongText">\n          ';
 if (quotaPer <= 0) { ;
__p += '\n            You have reached your limits.\n          ';
 } else { ;
__p += '\n            You\'re reaching your account limits.\n          ';
 } ;
__p += '\n\n          ';
 if (upgradeableWithoutContactingSales) { ;
__p += '\n            Upgrade your account to boost your quota.\n          ';
 } ;
__p += '\n        </p>\n      </div>\n\n      ';
 if (upgradeableWithoutContactingSales) { ;
__p += '\n        &nbsp;\n        <a href="' +
__e( upgradeUrl ) +
'" class="UpgradeElement-infoText">\n          <span>Upgrade your plan.</span>\n        </a>\n      ';
 } else { ;
__p += '\n        &nbsp;\n        <a href="mailto:sales@carto.com" class="UpgradeElement-infoText">\n          <span>Talk to Sales.</span>\n        </a>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/vendor-scripts/vendor-scripts.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/vendor-scripts/vendor-scripts.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (googleTagManagerId) { ;
__p += '\n  <!-- Google Tag Manager -->\n  ';
 // Tags for GTM are being included in _google_tag_manager.html.erb for Rails templates.
    // So if you change anything here, please make sure that you change it there too. ;
__p += '\n\n  <script>\n    dataLayer = [{\n      \'userId\': \'' +
((__t = ( userId )) == null ? '' : __t) +
'\',\n      \'userAccountType\': \'' +
((__t = ( userAccountType )) == null ? '' : __t) +
'\',\n      \'userSignUpDate\': \'' +
((__t = ( userCreatedAtInSeconds )) == null ? '' : __t) +
'\',\n      \'userJobRole\': \'' +
((__t = ( userJobRole )) == null ? '' : __t) +
'\',\n      \'userInTrialPeriod\': \'' +
((__t = ( userInTrialPeriod )) == null ? '' : __t) +
'\'\n    }];\n  </script>\n\n  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\n  new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n  \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,\'script\',\'dataLayer\',\'' +
((__t = ( googleTagManagerId )) == null ? '' : __t) +
'\');</script>\n  <!-- End Google Tag Manager -->\n';
 } ;
__p += '\n\n';
 if (trackjsEnabled) { ;
__p += '\n  <script type=\'text/javascript\'>\n    window._trackJs = {\n      enabled: true,\n      application: \'' +
((__t = ( trackjsAppKey )) == null ? '' : __t) +
'\',\n      version: \'' +
((__t = ( assetsVersion )) == null ? '' : __t) +
'\',\n      userId: \'' +
((__t = ( userName )) == null ? '' : __t) +
'\',\n      token: \'' +
((__t = ( trackjsCustomer )) == null ? '' : __t) +
'\'\n    };\n  </script>\n\n  <script\n    type=\'text/javascript\'\n    src=\'//d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js\'\n    data-token=\'' +
((__t = ( trackjsCustomer )) == null ? '' : __t) +
'\'>\n  </script>\n';
 } ;
__p += '\n\n';
 if (intercomEnabled) { ;
__p += '\n  <script type=\'text/javascript\'>\n    window.intercomSettings = {\n      app_id: \'' +
((__t = ( intercomAppId )) == null ? '' : __t) +
'\',\n      email: \'' +
((__t = ( userEmail )) == null ? '' : __t) +
'\'\n    };\n  </script>\n  <script type=\'text/javascript\'>\n    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic(\'reattach_activator\');ic(\'update\',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement(\'script\');s.type=\'text/javascript\';s.async=true;s.src=\'https://widget.intercom.io/widget/' +
((__t = ( intercomAppId )) == null ? '' : __t) +
'\';var x=d.getElementsByTagName(\'script\')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent(\'onload\',l);}else{w.addEventListener(\'load\',l,false);}}})();\n  </script>\n';
 } ;
__p += '\n\n';
 if (fullstoryEnabled) { ;
__p += '\n  <script type=\'text/javascript\'>\n    window[\'_fs_debug\'] = false;\n    window[\'_fs_host\'] = \'www.fullstory.com\';\n    window[\'_fs_org\'] = \'' +
((__t = ( fullstoryOrg )) == null ? '' : __t) +
'\';\n    window[\'_fs_namespace\'] = \'FS\';\n    (function(m,n,e,t,l,o,g,y){\n        if (e in m && m.console && m.console.log) { m.console.log(\'FullStory namespace conflict. Please set window["_fs_namespace"].\'); return;}\n        g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];\n        o=n.createElement(t);o.async=1;o.src=\'https://\'+_fs_host+\'/s/fs.js\';\n        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);\n        g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};\n        g.identifyAccount=function(i,v){o=\'account\';v=v||{};v.acctId=i;g(o,v)};\n        g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match(\'fs_uid=[`;`]*`[`;`]*`[`;`]*`\')){\n        d=n.domain;while(1){n.cookie=\'fs_uid=;domain=\'+d+\n        \';path=/;expires=\'+new Date(0).toUTCString();i=d.indexOf(\'.\');if(i<0)break;d=d.slice(i+1)}}};\n    })(window,document,window[\'_fs_namespace\'],\'script\',\'user\');\n    FS.clearUserCookie();\n    FS.identify(\'' +
((__t = ( userName )) == null ? '' : __t) +
'\', {\n      displayName: \'' +
((__t = ( userName )) == null ? '' : __t) +
'\',\n      email: \'' +
((__t = ( userEmail )) == null ? '' : __t) +
'\'\n    });\n  </script>\n  ';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/data/service-invalidate-model.js":
/*!***************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/data/service-invalidate-model.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");

/**
 *  Invalidate service token
 *
 *  - It needs a datasource name or it won't work.
 */

module.exports = Backbone.Model.extend({
  idAttribute: 'datasource',

  url: function url() {
    return '/api/v1/imports/service/' + this.get(this.idAttribute) + '/invalidate_token';
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/data/service-oauth-model.js":
/*!**********************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/data/service-oauth-model.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['datasourceName', 'configModel'];

/**
 *  Get oauth url from the service requested
 *
 *  - It needs a datasource name or it won't work.
 *
 *  new ServiceOauthModel({ datasourceName: 'dropbox', configModel })
 */

module.exports = Backbone.Model.extend({
  _datasourceName: 'dropbox',

  initialize: function initialize(attributes, options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  url: function url(method) {
    var version = this._configModel.urlVersion('imports_service', method);
    return '/api/' + version + '/imports/service/' + this._datasourceName + '/auth_url';
  },

  parse: function parse(response) {
    return response;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/data/service-valid-token-model.js":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/data/service-valid-token-model.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['configModel'];

/**
 *  Check if service token is valid
 *
 *  - It needs a datasource name or it won't work.
 *
 */

module.exports = Backbone.Model.extend({
  idAttribute: 'datasource',

  initialize: function initialize(attributes, options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  url: function url(method) {
    var version = this._configModel.urlVersion('imports_service', method);
    return '/api/' + version + '/imports/service/' + this.get(this.idAttribute) + '/token_valid';
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/account-content-view.js":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/account-content-view.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var PagesSubheader = __webpack_require__(/*! dashboard/components/pages-subheader/pages-subheader.js */ "./lib/assets/javascripts/dashboard/components/pages-subheader/pages-subheader.js");
var AccountFormView = __webpack_require__(/*! ./account-form-view */ "./lib/assets/javascripts/dashboard/views/account/account-form-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var template = __webpack_require__(/*! ./account-content.tpl */ "./lib/assets/javascripts/dashboard/views/account/account-content.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['userModel', 'configModel', 'flashMessageModel', 'client'];

module.exports = CoreView.extend({
  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initModels();
    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:isLoading change:errors', this.render);
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(template());
    this._initViews();
    return this;
  },

  _initModels: function _initModels() {
    this.model = new Backbone.Model();
    this.modals = new ModalsServiceModel();
  },

  _initViews: function _initViews() {
    var pagesSubheader = new PagesSubheader({
      userModel: this._userModel,
      configModel: this._configModel
    });
    this.$('.js-SideMenu').append(pagesSubheader.render().el);
    this.addView(pagesSubheader);

    var accountFormView = new AccountFormView({
      userModel: this._userModel,
      renderModel: this.model,
      configModel: this._configModel,
      modals: this.modals,
      setLoading: this._setLoading.bind(this),
      onSuccess: this._showSuccess.bind(this),
      onError: this._showErrors.bind(this),
      client: this._client,
      errors: this.model.get('errors')
    });

    this.$('.js-AccountContent').append(accountFormView.render().el);
    this.addView(accountFormView);
  },

  _setLoading: function _setLoading(message) {
    this._flashMessageModel.hide();

    this.model.set({
      isLoading: !!message,
      loadingText: message,
      errors: []
    });
  },

  _setFlashMessage: function _setFlashMessage(data, message, type) {
    this._setLoading('');

    var jsonData = data && data.responseJSON || {};
    var errors = jsonData.errors;
    var flashMessage = jsonData.message;

    if (errors) {
      this.model.set({ errors: errors });
    }

    if (!flashMessage) {
      flashMessage = message;
    }

    this._flashMessageModel.show(flashMessage, type);
  },

  _showSuccess: function _showSuccess(data) {
    $(window).scrollTop(0);

    _.extend(this._userModel.attributes, data.user_data);

    this._setFlashMessage(data, _t('account.flash_messages.save_changes.success'), 'success');

    if (data.mfa_required) {
      this._goToMultifactorAuthentication();
    }
  },

  _goToMultifactorAuthentication: function _goToMultifactorAuthentication() {
    window.location = '/multifactor_authentication';
  },

  _showErrors: function _showErrors(data) {
    $(window).scrollTop(0);
    this._setFlashMessage(data, _t('account.flash_messages.save_changes.error'), 'error');
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/account-content.tpl":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/account-content.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Text FormAccount-Section u-inner">\n  <div class="SideMenu CDB-Text CDB-Size-medium js-SideMenu"></div>\n\n  <div class="FormAccount-Content">\n    <div class="FormAccount-title">\n      <p class="FormAccount-titleText">' +
((__t = ( _t('account.views.content.form_title') )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <span class="FormAccount-separator"></span>\n\n    <div class="js-AccountContent"></div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/account-form-view.js":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/account-form-view.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");
var ServiceItem = __webpack_require__(/*! dashboard/components/service-item/service-item-view */ "./lib/assets/javascripts/dashboard/components/service-item/service-item-view.js");
var template = __webpack_require__(/*! ./account-form.tpl */ "./lib/assets/javascripts/dashboard/views/account/account-form.tpl");
var loadingTemplate = __webpack_require__(/*! builder/components/loading/loading.tpl */ "./lib/assets/javascripts/builder/components/loading/loading.tpl");
var DeleteAccountView = __webpack_require__(/*! dashboard/components/delete-account/delete-account-view */ "./lib/assets/javascripts/dashboard/components/delete-account/delete-account-view.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['userModel', 'renderModel', 'configModel', 'modals', 'setLoading', 'onSuccess', 'onError', 'client'];

module.exports = CoreView.extend({
  events: {
    'click .js-save': '_onClickSave',
    'submit form': '_onClickSave',
    'change .js-toggle-mfa': '_onToggleMfa'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initModels();
    this._initBinds();
  },

  _initModels: function _initModels() {
    this._errors = this.options.errors || {};
    this.add_related_model(this._renderModel);
  },

  _initBinds: function _initBinds() {
    this._renderModel.bind('change:isLoading', this.render, this);
  },

  render: function render() {
    this.clearSubViews();

    if (this._renderModel.get('isLoading')) {
      this.$el.html(loadingTemplate({
        title: this._renderModel.get('loadingText'),
        descHTML: randomQuote()
      }));
    } else {
      this.$el.html(template({
        isCartoDBHosted: this._configModel.get('cartodb_com_hosted'),
        formAction: this._configModel.prefixUrl() + '/account',
        username: this._getField('username'),
        errors: this._errors,
        isInsideOrg: this._userModel.isInsideOrg(),
        isAuthUsernamePasswordEnabled: this._getField('auth_username_password_enabled'),
        hidePasswordFields: this._userModel.isInsideOrg() && !this._getField('auth_username_password_enabled'),
        canChangePassword: this._getField('can_change_password'),
        isOrgOwner: this._userModel.isOrgOwner(),
        planName: this._getField('plan_name'),
        planUrl: this._getField('plan_url'),
        cantBeDeletedReason: this._getField('cant_be_deleted_reason'),
        services: this._getField('services') || [],
        mfaEnabled: this._getField('mfa_configured')
      }));

      this._initViews();
    }

    return this;
  },

  _setDeleteAccountView: function _setDeleteAccountView(event) {
    var _this = this;

    this._modals.create(function (modalModel) {
      return new DeleteAccountView({
        userModel: _this._userModel,
        modalModel: modalModel,
        onError: _this._onError,
        client: _this._client
      });
    });
  },

  _initViews: function _initViews() {
    var _this2 = this;

    var services = this._getField('services');

    this.$('.js-deleteAccount').click(function (event) {
      event && event.preventDefault();
      _this2._setDeleteAccountView(event);
    });

    if (services && services.length) {
      _.each(services, function (service) {
        var serviceItem = new ServiceItem({
          model: new Backbone.Model(_.extend({ state: 'idle' }, service)),
          configModel: this._configModel
        });

        this.$('.js-datasourcesContent').after(serviceItem.render().el);
        this.addView(serviceItem);
      }, this);
    }
  },

  _getField: function _getField(field) {
    return this._userModel.get(field);
  },

  _onClickSave: function _onClickSave(event) {
    var _this3 = this;

    this.killEvent(event);

    var origin = this._getUserFields();
    var destination = this._getDestinationValues();
    var destinationKeys = _.keys(destination);
    var differenceKeys = _.filter(destinationKeys, function (key) {
      return origin[key] !== destination[key];
    });

    var user = _.pick(destination, differenceKeys);

    if (!this._userModel.get('needs_password_confirmation')) {
      return this._updateUser(user);
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        return _this3._updateUser(user, password);
      }
    });
  },

  _onToggleMfa: function _onToggleMfa(event) {
    this.killEvent(event);

    var newLabel = this._mfaStatus() ? _t('account.views.form.mfa_enabled') : _t('account.views.form.mfa_disabled');

    this._mfaLabel().html(newLabel);
  },

  _updateUser: function _updateUser(user, password) {
    var _this4 = this;

    this._setLoading('Saving changes');

    var userParams = { user: _extends({}, user, { password_confirmation: password }) };
    this._client.putConfig(userParams, function (errors, response, data) {
      if (errors) {
        _this4.options.onError(data, errors);
        _this4.render();
      } else {
        _this4._getUser();
      }
    });
  },

  _getUser: function _getUser() {
    var _this5 = this;

    this._client.getConfig(function (errors, response, data) {
      if (errors) {
        _this5.options.onError(data, response, errors);
      } else {
        _this5.options.onSuccess(data);
      }

      _this5.render();
    });
  },

  _getUserFields: function _getUserFields() {
    return {
      username: this._getField('username')
    };
  },

  _getDestinationValues: function _getDestinationValues() {
    return {
      username: this._username(),
      new_password: this._newPassword(),
      confirm_password: this._confirmPassword(),
      mfa: this._mfaStatus()
    };
  },

  _username: function _username() {
    return this.$('#user_username').val();
  },

  _newPassword: function _newPassword() {
    return this.$('#user_new_password').val();
  },

  _confirmPassword: function _confirmPassword() {
    return this.$('#confirm_password').val();
  },

  _mfaStatus: function _mfaStatus() {
    if (this.$('.js-toggle-mfa').length === 0) {
      return false;
    }
    return this.$('.js-toggle-mfa')[0].checked;
  },

  _mfaLabel: function _mfaLabel() {
    return this.$('.js-mfa-label');
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/account-form.tpl":
/*!*************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/account-form.tpl ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form accept-charset="UTF-8">\n  <div class="FormAccount-row">\n    <div class="FormAccount-rowLabel">\n      <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
((__t = ( _t('account.views.form.username') )) == null ? '' : __t) +
'</label>\n    </div>\n    <div class="FormAccount-rowData">\n      <input class="CDB-InputText CDB-Text FormAccount-input FormAccount-input--med is-disabled" id="user_username" name="user[username]" readonly="readonly" size="30" type="text" value="' +
((__t = ( username )) == null ? '' : __t) +
'">\n\n      <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n        <p class="CDB-Text CDB-Size-small u-altTextColor">' +
((__t = ( _t('account.views.form.subdomain_info') )) == null ? '' : __t) +
'</p>\n      </div>\n    </div>\n  </div>\n\n  ';
 if (!hidePasswordFields) { ;
__p += '\n    <div class="VerticalAligned--FormRow">\n      <div class="FormAccount-row">\n        <div class="FormAccount-rowLabel">\n          <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
((__t = ( _t('account.views.form.new_password') )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="FormAccount-rowData">\n          <input class="CDB-InputText CDB-Text FormAccount-input FormAccount-input--med ';
 if (errors['new_password']) { ;
__p += 'has-error';
 } ;
__p += ' ';
 if (!canChangePassword) { ;
__p += 'is-disabled';
 } ;
__p += '" id="user_new_password" name="user[new_password]" size="30" type="password" ';
 if (!canChangePassword) { ;
__p += 'readonly="readonly"';
 } ;
__p += '>\n        </div>\n        <div class="FormAccount-rowInfo">\n          ';
 if (errors['new_password']) { ;
__p += '\n            <p class="FormAccount-rowInfoText FormAccount-rowInfoText--error u-tSpace">' +
((__t = ( errors['new_password'][0] )) == null ? '' : __t) +
'</p>\n          ';
 } ;
__p += '\n        </div>\n      </div>\n\n      <div class="FormAccount-row js-confirmPassword">\n        <div class="FormAccount-rowLabel">\n          <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
((__t = ( _t('account.views.form.confirm_password') )) == null ? '' : __t) +
'</label>\n        </div>\n        <div class="FormAccount-rowData">\n          <input class="CDB-InputText CDB-Text FormAccount-input FormAccount-input--med ';
 if (!canChangePassword) { ;
__p += 'is-disabled';
 } ;
__p += '" id="confirm_password" name="user[confirm_password]" size="30" type="password" ';
 if (!canChangePassword) { ;
__p += 'readonly="readonly"';
 } ;
__p += '>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="FormAccount-row">\n    <div class="FormAccount-rowLabel">\n      <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">\n        ' +
((__t = ( _t('account.views.form.multifactor_authentication') )) == null ? '' : __t) +
'\n      </label>\n    </div>\n    <div class="FormAccount-rowData u-tspace-s u-vspace-s">\n      <div class="Toggler">\n        <input name="user[mfa]" type="hidden" value="0">\n        <input class="js-toggle-mfa" id="mfa" name="user[mfa]" type="checkbox" value="1" ';
 if (mfaEnabled) { ;
__p += 'checked="checked"';
 } ;
__p += '>\n        <label for="mfa"></label>\n      </div>\n      <div class="FormAccount-rowInfo u-lSpace--xl">\n        <p class="CDB-Text CDB-Size-medium js-mfa-label">\n          ' +
((__t = ( mfaEnabled ? _t('account.views.form.mfa_enabled') : _t('account.views.form.mfa_disabled') )) == null ? '' : __t) +
'\n        </p>\n      </div>\n    </div>\n    <div class="FormAccount-rowData u-tspace-xs">\n      <p class="CDB-Text CDB-Size-small u-altTextColor">' +
((__t = ( _t('account.views.form.mfa_description') )) == null ? '' : __t) +
'</p>\n    </div>\n  </div>\n  \n  ';
 if ((!isInsideOrg || isOrgOwner) && !isCartoDBHosted) { ;
__p += '\n    <div class="FormAccount-title">\n      <p class="FormAccount-titleText">' +
((__t = ( _t('account.views.form.account_type') )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <span class="FormAccount-separator"></span>\n\n    <div class="FormAccount-row">\n      <div class="FormAccount-rowLabel">\n        <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
((__t = ( _t('account.views.form.billing_plan') )) == null ? '' : __t) +
'</label>\n      </div>\n      <div class="FormAccount-rowData">\n        <div class="FormAccount-planTag CDB-Size-medium">' +
((__t = ( planName )) == null ? '' : __t) +
'</div>\n        <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n          <p class="FormAccount-rowInfoText CDB-Size-medium"><a href="' +
((__t = ( planUrl )) == null ? '' : __t) +
'" class="FormAccount-link">' +
((__t = ( _t('account.views.form.view_details') )) == null ? '' : __t) +
'</a></p>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n  \n\n  ';
 if (services.length > 0) { ;
__p += '\n    <div class="FormAccount-title">\n      <p class="FormAccount-titleText">' +
((__t = ( _t('account.views.form.connect_external_datasources') )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <span class="FormAccount-separator"></span>\n\n    <div class="js-datasourcesContent"></div>\n  ';
 } ;
__p += '\n\n  <div class="FormAccount-footer ';
 if (cantBeDeletedReason) { ;
__p += 'FormAccount-footer--noMarginBottom';
 } ;
__p += '">\n    ';
 if (cantBeDeletedReason) { ;
__p += '\n      <p class="FormAccount-footerText">\n        <i class="CDB-IconFont CDB-IconFont-info FormAccount-footerIcon"></i>\n        <span>' +
((__t = ( cantBeDeletedReason )) == null ? '' : __t) +
'</span>\n      </p>\n    ';
 } else { ;
__p += '\n      <p class="FormAccount-footerText"></p>\n    ';
 } ;
__p += '\n\n    <button type="submit" class="CDB-Button CDB-Button--primary">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">' +
((__t = ( _t('account.views.form.save_changes') )) == null ? '' : __t) +
'</span>\n    </button>\n  </div>\n\n  ';
 if (!cantBeDeletedReason) { ;
__p += '\n    <div class="FormAccount-title">\n      <p class="FormAccount-titleText">' +
((__t = ( _t('account.views.form.delete_account') )) == null ? '' : __t) +
'</p>\n    </div>\n\n    <span class="FormAccount-separator"></span>\n\n    <div class="FormAccount-row FormAccount-row--wideMarginBottom">\n      <div class="FormAccount-rowLabel">\n        <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
((__t = ( _t('account.views.form.confirm') )) == null ? '' : __t) +
'</label>\n      </div>\n      <div class="FormAccount-rowData">\n        <span class="FormAccount-button--deleteAccount CDB-Size-medium js-deleteAccount">' +
((__t = ( _t('account.views.form.delete_all') )) == null ? '' : __t) +
'</span>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/account-main-view.js":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/account-main-view.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var TrialNotificationView = __webpack_require__(/*! dashboard/components/trial-notification/trial-notification-view */ "./lib/assets/javascripts/dashboard/components/trial-notification/trial-notification-view.js");
var AccountContentView = __webpack_require__(/*! ./account-content-view */ "./lib/assets/javascripts/dashboard/views/account/account-content-view.js");
var UpgradeMessage = __webpack_require__(/*! dashboard/components/upgrade-message-view.js */ "./lib/assets/javascripts/dashboard/components/upgrade-message-view.js");
var VendorScriptsView = __webpack_require__(/*! dashboard/components/vendor-scripts/vendor-scripts-view */ "./lib/assets/javascripts/dashboard/components/vendor-scripts/vendor-scripts-view.js");
var FlashMessageModel = __webpack_require__(/*! dashboard/data/flash-message-model */ "./lib/assets/javascripts/dashboard/data/flash-message-model.js");
var FlashMessageView = __webpack_require__(/*! dashboard/components/flash-message/flash-message-view */ "./lib/assets/javascripts/dashboard/components/flash-message/flash-message-view.js");
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var TRIAL_ACCOUNTS = ['PERSONAL30', 'Individual'];

var REQUIRED_OPTS = ['userModel', 'configModel', 'client', 'assetsVersion', 'organizationNotifications'];

module.exports = CoreView.extend({
  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
    this._initViews();
  },

  _initViews: function _initViews() {
    var $app = this.$('#app');
    var accountType = this._userModel.get('account_type');

    if (TRIAL_ACCOUNTS.indexOf(accountType) > -1) {
      var trialEndsAt = moment(this._userModel.get('trial_ends_at'));
      var now = moment();
      var trialNotificationView = new TrialNotificationView({
        userModel: this._userModel,
        upgradeUrl: this._configModel.get('upgrade_url'),
        trialDays: Math.round(trialEndsAt.diff(now, 'days', true))
      });
      $app.append(trialNotificationView.render().el);
      this.addView(trialNotificationView);
    }

    var flashMessageModel = new FlashMessageModel();

    var flashMessageView = new FlashMessageView({
      model: flashMessageModel
    });
    $app.prepend(flashMessageView.render().el);
    this.addView(flashMessageView);

    var accountContentView = new AccountContentView({
      userModel: this._userModel,
      configModel: this._configModel,
      flashMessageModel: flashMessageModel,
      client: this._client
    });
    $app.append(accountContentView.render().el);
    this.addView(accountContentView);

    var upgradeMessage = new UpgradeMessage({
      userModel: this._userModel,
      configModel: this._configModel
    });
    $app.prepend(upgradeMessage.render().el);
    this.addView(upgradeMessage);

    var vendorScriptsView = new VendorScriptsView({
      configModel: this._configModel,
      assetsVersion: this._assetsVersion,
      userModel: this._userModel
    });
    this.$el.append(vendorScriptsView.render().el);
    this.addView(vendorScriptsView);

    return this;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog-view.js":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog-view.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");
var ServiceInvalidate = __webpack_require__(/*! dashboard/data/service-invalidate-model */ "./lib/assets/javascripts/dashboard/data/service-invalidate-model.js");
var loadingTemplate = __webpack_require__(/*! builder/components/loading/loading.tpl */ "./lib/assets/javascripts/builder/components/loading/loading.tpl");
var template = __webpack_require__(/*! ./service-disconnect-dialog.tpl */ "./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['serviceModel', 'modalModel', 'configModel'];

/**
 *  Disconnect service or help user to disconnect it
 *
 *  - It needs the service model
 */

module.exports = CoreView.extend({

  events: {
    'click .js-revoke': '_revokeAccess',
    'click .js-cancel': '_closeDialog'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
    CoreView.prototype.initialize.apply(this);

    this._initBinds();
  },

  render: function render() {
    if (this._serviceModel.get('state') === 'loading') {
      return this.$el.html(loadingTemplate({
        title: 'Revoking access',
        descHTML: randomQuote()
      }));
    }

    return this.$el.html(template(this._serviceModel.attributes));
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._serviceModel, 'change:state', this._maybeReplaceContent);
  },

  _maybeReplaceContent: function _maybeReplaceContent() {
    if (this._serviceModel.get('state') !== 'error') {
      this.render();
    }
  },

  _revokeAccess: function _revokeAccess() {
    var _this = this;

    var invalidateModel = new ServiceInvalidate({ datasource: this._serviceModel.get('name') });
    invalidateModel._configModel = this._configModel;

    this._serviceModel.set('state', 'loading');

    invalidateModel.destroy({
      success: function success(model, response) {
        if (response.success) {
          _this._reloadWindow();
        } else {
          _this._setErrorState();
        }
      },
      error: function error() {
        return _this._setErrorState();
      }
    });
  },

  _setErrorState: function _setErrorState() {
    this._serviceModel.set('state', 'error');
    this._closeDialog();
  },

  _reloadWindow: function _reloadWindow() {
    window.location.reload();
  },

  _closeDialog: function _closeDialog() {
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog.tpl":
/*!****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/account/service-disconnect-dialog/service-disconnect-dialog.tpl ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Text Dialog-header u-inner">\n  <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n    <i class="CDB-IconFont CDB-IconFont-cloud"></i>\n  </div>\n  <p class="Dialog-headerTitle">\n    Disconnect your ' +
((__t = ( title )) == null ? '' : __t) +
' account\n  </p>\n  <p class="Dialog-headerText">\n  ';
 if (revoke_url) { ;
__p += '\n    Revoke the access to CARTO\n  ';
 } else { ;
__p += '\n    Are you sure you want to revoke the CARTO access to your ' +
((__t = ( title )) == null ? '' : __t) +
' account?\n  ';
 } ;
__p += '\n  </p>\n</div>\n\n';
 if (revoke_url) { ;
__p += '\n  <div class="Dialog-body">\n    <p class="DefaultParagraph DefaultParagraph--short DefaultParagraph--centered DefaultParagraph--spaced">\n      We cant revoke the access for your ' +
((__t = ( title )) == null ? '' : __t) +
' account automatically.\n    </p>\n    <p class="DefaultParagraph DefaultParagraph--short DefaultParagraph--centered DefaultParagraph--spaced">\n      For your own security, we are unable to disconnect your ' +
((__t = ( title )) == null ? '' : __t) +
' account from CARTO. You can revoke access yourself by manually editing your ' +
((__t = ( title )) == null ? '' : __t) +
' authorized applications.\n    </p>\n  </div>\n';
 } ;
__p += '\n\n<div class="Dialog-footer u-inner">\n  ';
 if (revoke_url) { ;
__p += '\n    <a href="' +
__e( revoke_url) +
'" target="_blank" class="Button Button-inner Button--inline Button--secondary ">\n      <span>go to' +
((__t = ( title )) == null ? '' : __t) +
'</span>\n    </a>\n  ';
 } else { ;
__p += '\n    <button class="CDB-Text Button Button--secondary Dialog-footerBtn Button--inline js-cancel">\n      <span>cancel</span>\n    </button>\n    <button class="CDB-Text js-revoke Button Button--negative Button--inline">\n      <span>Revoke access</span>\n    </button>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

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

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, repository, author, contributors, license, dependencies, devDependencies, optionalDependencies, browserify, browser, browserify-shim, engine, scripts, default */
/***/ (function(module) {

module.exports = {"name":"cartodb-ui","version":"1.0.0-assets.136","description":"CARTO UI frontend","repository":{"type":"git","url":"git://github.com/CartoDB/cartodb.git"},"author":{"name":"CARTO","url":"https://carto.com/","email":"wadus@carto.com"},"contributors":[],"license":"BSD-3-Clause","dependencies":{"@babel/polyfill":"https://registry.npmjs.org/@babel/polyfill/-/polyfill-7.0.0.tgz","@carto/carto.js":"^4.1.10","@carto/zera":"1.0.7","backbone":"1.2.3","backbone-forms":"0.14.0","backbone-model-file-upload":"CartoDB/backbone-model-file-upload#1.0.2","backbone-undo":"cartodb/Backbone.Undo.js#c10e997","bootstrap-colorpicker":"2.5.0","browserify":"13.0.0","browserify-shim":"3.8.12","camshaft-reference":"0.34.0","carto":"cartodb/carto#master","cartocolor":"4.0.0","cartodb-pecan":"0.2.x","clipboard":"1.6.1","codemirror":"5.14.2","confetti-js":"0.0.14","d3-interpolate":"^1.1.6","d3-queue":"^3.0.7","date-fns":"^1.29.0","fastclick":"^1.0.6","html-webpack-plugin":"^3.2.0","internal-carto.js":"CartoDB/carto.js#v4.1.12-1","jquery":"2.1.4","leaflet":"CartoDB/Leaflet#v1.3.1-carto1","loader-utils":"https://registry.npmjs.org/loader-utils/-/loader-utils-0.2.17.tgz","moment":"2.18.1","moment-timezone":"^0.5.13","node-polyglot":"1.0.0","perfect-scrollbar":"git://github.com/CartoDB/perfect-scrollbar.git#master","postcss":"5.0.19","postcss-scss":"0.4.0","postcss-strip-inline-comments":"0.1.5","promise-polyfill":"https://registry.npmjs.org/promise-polyfill/-/promise-polyfill-6.1.0.tgz","queue-async":"1.2.1","rangeslider.js":"2.3.0","tinycolor2":"^1.4.1","torque.js":"CartoDB/torque#master","trackjs":"^3.1.2","underscore":"1.8.3","urijs":"^1.19.0","url-parse":"^1.4.0","vue":"^2.5.20","vue-i18n":"^8.2.1","vue-js-modal":"^1.3.26","vue-router":"^3.0.1","vue-svg-inline-loader":"^1.2.1","vue-template-compiler":"^2.5.20","vuex":"^3.0.1","webpack":"4.12.0","webpack-cli":"^3.0.4","whatwg-fetch":"https://registry.npmjs.org/whatwg-fetch/-/whatwg-fetch-2.0.3.tgz"},"devDependencies":{"@vue/test-utils":"^1.0.0-beta.25","autoprefixer-core":"5.2.1","aws-sdk":"2.0.0-rc11","babel-core":"6.25.0","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^23.6.0","babel-loader":"7.1.1","babel-plugin-dynamic-import-node":"^2.2.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-es2015-modules-commonjs":"^6.26.2","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-plugin-transform-vue-jsx":"^3.7.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"6.24.1","babel-preset-stage-2":"^6.24.1","babelify":"^8.0.0","bluebird":"3.5.0","brfs":"^1.4.3","browserify-resolutions":"1.1.0","cartoassets":"CartoDB/CartoAssets#master","colors":"1.1.2","copy-webpack-plugin":"^4.5.1","css-loader":"^0.28.11","csswring":"^3.0.5","eslint":"~4.8.0","eslint-config-semistandard":"~11.0.0","eslint-config-standard":"~10.2.1","eslint-plugin-import":"~2.7.0","eslint-plugin-node":"~5.2.0","eslint-plugin-promise":"~3.5.0","eslint-plugin-standard":"~3.0.1","eslint-plugin-vue":"^4.7.1","exports-loader":"0.6.4","extract-text-webpack-plugin":"^3.0.2","file-loader":"^1.1.11","fs-extra":"2.0.0","git-rev":"0.2.1","glob":"7.1.1","grunt":"1.0.1","grunt-available-tasks":"0.6.3","grunt-aws":"0.6.2","grunt-browserify":"5.0.0","grunt-cli":"~0.1.13","grunt-contrib-clean":"0.7.0","grunt-contrib-compass":"1.0.4","grunt-contrib-compress":"1.4.3","grunt-contrib-concat":"1.0.1","grunt-contrib-connect":"0.11.2","grunt-contrib-copy":"0.8.1","grunt-contrib-jasmine":"CartoDB/grunt-contrib-jasmine#headless-chrome","grunt-contrib-jst":"CartoDB/grunt-contrib-jst#merge-master","grunt-contrib-uglify":"2.0.x","grunt-contrib-watch":"1.0.0","grunt-eslint":"~20.1.0","grunt-exorcise":"2.1.1","grunt-postcss":"0.7.2","grunt-sass":"2.0.0","grunt-timer":"0.3.3","jasmine":"2.5.2","jasmine-ajax":"CartoDB/jasmine-ajax#master","jest":"^23.6.0","jest-serializer-vue":"^2.0.2","jstify":"0.13.0","load-grunt-tasks":"3.2.0","mini-css-extract-plugin":"^0.4.0","minimist":"1.2.0","open":"0.0.5","optimize-css-assets-webpack-plugin":"^4.0.2","prettysize":"0.0.3","raw-loader":"0.5.1","recursive-readdir":"2.2.1","sass-loader":"^7.0.1","semver":"4.3.6","shim-loader":"0.1.0","source-map-support":"0.4.0","stringify":"5.1.0","stylelint":"^8.2.0","stylelint-config-property-sort-order-smacss":"^2.0.0","stylelint-config-standard":"^17.0.0","tpl-loader":"CartoDB/tpl-loader#webpack4","uglify-js":"2.7.x","uglifyjs-webpack-plugin":"https://registry.npmjs.org/uglifyjs-webpack-plugin/-/uglifyjs-webpack-plugin-1.2.5.tgz","underscore-template-strict-loader":"^0.3.0","vue-jest":"^3.0.0","vue-loader":"^15.4.2","vue-style-loader":"^4.1.2","watchify":"3.7.0","webpack-bundle-analyzer":"^2.4.0","webpack-delete-after-emit":"^1.0.5","webpack-merge":"^4.1.3","webpack-stats-plugin":"0.1.4"},"optionalDependencies":{"fsevents":"*"},"browserify":{"transform":["browserify-shim",["jstify",{"minifierOpts":false}],"brfs"]},"browser":{"tipsy":"./vendor/assets/javascripts/jquery.tipsy.js","filestyle":"./vendor/assets/javascripts/filestyle.js","tagit":"./vendor/assets/javascripts/tag-it.js","markdown":"./vendor/assets/javascripts/markdown.js","dragster":"./vendor/assets/javascripts/dragster.js","dropzone":"./vendor/assets/javascripts/dropzone.js","datepicker":"./vendor/assets/javascripts/datepicker.js"},"browserify-shim":{"jquery-cdb-v3":"global:$","underscore-cdb-v3":"global:_","cdb.admin":"global:cdb.admin","cdb.Utils":"global:cdb.Utils","cartodb.js-v3":"global:cdb","backbone-cdb-v3":"global:Backbone","moment-v3":"global:moment"},"engine":{"node":"^10.15.1","npm":"^6.4.1"},"scripts":{"start":"npm run carto-node && npm run build:static && npm run dev","ci":"npm run lint:css && npm run test","test":"grunt test && npm run test:ci:new_dashboard","test:builder":"grunt test:browser:builder","test:dashboard":"grunt test:browser:dashboard","test:new_dashboard":"jest --config lib/assets/test/spec/new-dashboard/unit/jest.conf.js --coverage","test:ci:new_dashboard":"jest --config lib/assets/test/spec/new-dashboard/unit/jest.conf.js","test:editor":"grunt affected_editor_specs","lint":"eslint .","lint:css":"stylelint './app/assets/stylesheets/**/*.scss'","lint:fix":"eslint . --fix","bump":"npm --no-git-tag-version version prerelease --preid=assets","postversion":"git add package.json package-lock.json && git commit -m 'Bump assets version' && git push origin master","update-internal-deps":"rm -rf node_modules && npm install","branch-files":"node lib/build/branchFiles/branchFiles.js","affected_specs":"node lib/build/branchFiles/branchFiles.js | xargs node lib/build/affectedFiles/affectedFiles.js","build":"NODE_ENV=production webpack --progress --config webpack/v4/webpack.prod.config.js","build:dev":"NODE_ENV=development webpack --progress --config webpack/v4/webpack.dev.config.js","build:static":"NODE_ENV=production webpack --progress --config webpack/static-pages/webpack.prod.config.js","carto-node":"NODE_ENV=production webpack --progress --config webpack/carto-node/webpack.config.js","dev":"NODE_ENV=development webpack --progress --watch --config webpack/v4/webpack.dev.config.js","dev:editor":"grunt editor","dev:static":"webpack --progress --watch --config webpack/static-pages/webpack.dev.config.js","profile":"NODE_ENV=production webpack --profile --json --config webpack/v4/webpack.prod.config.js > compilation-stats.json"}};

/***/ })

/******/ });
//# sourceMappingURL=account.js.map