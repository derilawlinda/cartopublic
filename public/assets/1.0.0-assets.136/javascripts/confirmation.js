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
/******/ 		"confirmation": 0
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
/******/ 	deferredModules.push(["./lib/assets/javascripts/dashboard/confirmation.js","common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/assets/javascripts/dashboard/confirmation.js":
/*!**********************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/confirmation.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var ConfirmationView = __webpack_require__(/*! ./confirmation/confirmation-view */ "./lib/assets/javascripts/dashboard/confirmation/confirmation-view.js");

var ForbiddenAction = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptors/forbidden-403 */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptors/forbidden-403.js");
var NetworkResponseInterceptor = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptor */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptor.js");
NetworkResponseInterceptor.addURLPattern('api/v1');
NetworkResponseInterceptor.addErrorInterceptor(ForbiddenAction());
NetworkResponseInterceptor.start();

$(function () {
  var _window = window,
      userCreationId = _window.userCreationId,
      username = _window.username,
      customHosted = _window.customHosted,
      userURL = _window.userURL;


  var confirmation = new ConfirmationView({ // eslint-disable-line
    el: '.js-info',
    userCreationId: userCreationId,
    username: username,
    customHosted: customHosted,
    userURL: userURL
  });
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/confirmation/confirmation-info.tpl":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/confirmation/confirmation-info.tpl ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="js-info">\n  <h1 class="Sessions-title u-tspace-m">\n    ';
 if (state === "success") { ;
__p += '\n      Your account is ready\n    ';
 } else if (state === "failure") { ;
__p += '\n      Oops! There was a problem\n    ';
 } else { ;
__p += '\n      Your account is being created\n    ';
 } ;
__p += '\n  </h1>\n  <p class="Sessions-description">\n    ';
 if (state === "success") { ;
__p += '\n      ';
 if (googleSignup) { ;
__p += '\n        You will be redirected to your dashboard in a moment...\n      ';
 } else if (!requiresValidationEmail) { ;
__p += '\n        You will be redirected to the login page in a moment...\n      ';
 } else { ;
__p += '\n        Check your email inbox and validate your email.\n      ';
 };
__p += '\n    ';
 } else if (state === "failure") { ;
__p += '\n      Unfortunately there was a problem creating your account. ';
 if (!customHosted) { ;
__p += 'Please, <a href="mailto:support@carto.com?subject=User creation error: ' +
__e( userCreationId ) +
'">contact us</a>';
 } ;
__p += '.\n    ';
 } else { ;
__p += '\n      It will take us some time, just a few seconds.\n    ';
 } ;
__p += '\n  </p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/confirmation/confirmation-model.js":
/*!*****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/confirmation/confirmation-model.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");

var POLL_TIMER = 2000; // Interval time between poll checkings
var TIMER_MULTIPLY = 2.5; // Multiply interval for this number
var MAX_TRIES = 30; // Max tries until interval change
var STATES = {
  success: 'success',
  failure: 'failure'
};

/**
 *  User creation model
 *
 */

module.exports = Backbone.Model.extend({

  defaults: {
    email: '',
    google_sign_in: false,
    requires_validation_email: false,
    state: '',
    username: ''
  },

  url: function url(method) {
    return '/api/v1/user_creations/' + this.id;
  },

  initialize: function initialize() {
    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.bind('change:state', this._checkState, this);
  },

  _checkState: function _checkState() {
    if (this.hasFinished() || this.hasFailed()) {
      this.destroyCheck();
    }
  },

  pollCheck: function pollCheck() {
    var _this = this;

    if (this.pollTimer) return;
    var tries = 0;

    var request = function request() {
      _this.destroyCheck();
      _this.fetch();

      tries += 1;

      // Multiply polling timer by a number when a max
      // of tries have been reached
      var multiply = tries > MAX_TRIES ? TIMER_MULTIPLY : 1;

      _this.pollTimer = setInterval(request, POLL_TIMER * multiply);
    };

    this.pollTimer = setInterval(request, POLL_TIMER);

    // Start doing a fetch
    request();
  },

  destroyCheck: function destroyCheck() {
    clearInterval(this.pollTimer);
    delete this.pollTimer;
  },

  hasUsedGoogle: function hasUsedGoogle() {
    return this.get('google_sign_in');
  },

  requiresValidationEmail: function requiresValidationEmail() {
    return this.get('requires_validation_email');
  },

  hasFinished: function hasFinished() {
    return this.get('state') === STATES.success;
  },

  hasFailed: function hasFailed() {
    return this.get('state') === STATES.failure;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/confirmation/confirmation-view.js":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/confirmation/confirmation-view.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var ConfirmationModel = __webpack_require__(/*! ./confirmation-model */ "./lib/assets/javascripts/dashboard/confirmation/confirmation-model.js");
var template = __webpack_require__(/*! ./confirmation-info.tpl */ "./lib/assets/javascripts/dashboard/confirmation/confirmation-info.tpl");

/**
 *  Confirmation view
 *
 */

module.exports = CoreView.extend({
  initialize: function initialize(opts) {
    if (!opts.userCreationId) {
      throw new Error('user creation id is needed to check its state');
    }

    this.model = new ConfirmationModel({
      id: opts.userCreationId
    });

    this._initBinds();

    this.model.pollCheck();
  },

  render: function render() {
    this.$el.html(template({
      googleSignup: this.model.get('google_sign_in'),
      requiresValidationEmail: this.model.requiresValidationEmail(),
      userCreationId: this.model.get('id'),
      state: this.model.get('state'),
      customHosted: this.options.customHosted
    }));

    return this;
  },

  _initBinds: function _initBinds() {
    this.model.bind('change:state', function () {
      this._setLogo();
      this.render();

      if (this.model.hasFinished() && (this.model.hasUsedGoogle() || !this.model.requiresValidationEmail())) {
        this._goToUserURL();
      }
    }, this);
  },

  // Instead of rendering logo each time and f**k the animation
  // we toggle the 'is-loading' class when process has finished
  _setLogo: function _setLogo() {
    // Loading state
    this.$('.js-logo').toggleClass('is-loading', !this.model.hasFailed() && !this.model.hasFinished());

    // Remove unnecessary notification, if needed
    if (this.model.hasFailed()) {
      this.$('.js-successNotification').remove();
    } else if (this.model.hasFinished()) {
      this.$('.js-errorNotification').remove();
    }

    // Show notification if it is failed or finished
    if (this.model.hasFailed() || this.model.hasFinished()) {
      this.$('.js-notification').show();
    }
  },

  _goToUserURL: function _goToUserURL() {
    if (this.options.userURL) {
      window.location.href = this.options.userURL;
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=confirmation.js.map