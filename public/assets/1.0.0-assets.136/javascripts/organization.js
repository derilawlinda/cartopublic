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
/******/ 		"organization": 0
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
/******/ 	deferredModules.push([16,"common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/stylesheets/editor-3/_assets.scss":
/*!**************************************************!*\
  !*** ./assets/stylesheets/editor-3/_assets.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/editor-3/_modals-elements.scss":
/*!***********************************************************!*\
  !*** ./assets/stylesheets/editor-3/_modals-elements.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/editor-3/_modals-layout.scss":
/*!*********************************************************!*\
  !*** ./assets/stylesheets/editor-3/_modals-layout.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/editor-3/_scroll-view.scss":
/*!*******************************************************!*\
  !*** ./assets/stylesheets/editor-3/_scroll-view.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/editor-3/_tab-pane.scss":
/*!****************************************************!*\
  !*** ./assets/stylesheets/editor-3/_tab-pane.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/assets.scss":
/*!*****************************************************!*\
  !*** ./assets/stylesheets/organization/assets.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/invite_users_dialog.scss":
/*!******************************************************************!*\
  !*** ./assets/stylesheets/organization/invite_users_dialog.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/organization_user_details.scss":
/*!************************************************************************!*\
  !*** ./assets/stylesheets/organization/organization_user_details.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/organization_user_quota.scss":
/*!**********************************************************************!*\
  !*** ./assets/stylesheets/organization/organization_user_quota.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/organization_user_search.scss":
/*!***********************************************************************!*\
  !*** ./assets/stylesheets/organization/organization_user_search.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/organization/organization_users_list.scss":
/*!**********************************************************************!*\
  !*** ./assets/stylesheets/organization/organization_users_list.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/plugins/tagit.scss":
/*!***********************************************!*\
  !*** ./assets/stylesheets/plugins/tagit.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./lib/assets/javascripts/dashboard/common/router-base.js":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/common/router-base.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");

/**
 * @extends http://backbonejs.org/#Router With some common functionality in the context of this app.
 */
var RouterBase = Backbone.Router.extend({

  /**
   * Placeholder, is replaced by enableAfterMainView().
   */
  navigate: function navigate() {
    throw new Error('router.enableAfterMainView({ ... }) must be called before you can navigate');
  },

  /**
   * Enable router to monitor and manage browser URL and history.
   * Expected to be called after main view as the function name indicates,
   */
  enableAfterMainView: function enableAfterMainView() {
    /**
     * @override http://backbonejs.org/#Router-navigate Allow
     * @param fragmentOrUrl {String} Either a fragment (e.g. '/dashboard/datasets') or a full URL
     *  (e.g. http://user.carto.com/dashboard/datasets), the navigate method takes care to route correctly.
     */
    this.navigate = function (fragmentOrUrl, opts) {
      Backbone.Router.prototype.navigate.call(this, this.normalizeFragmentOrUrl(fragmentOrUrl), opts);
    };

    Backbone.history.start({
      pushState: true,
      root: this.rootPath() + '/' // Yes, this trailing slash is necessary for the router to update the history state properly.
    });
  },

  rootPath: function rootPath() {
    throw new Error('implement rootPath in child router (no trailing slash)');
  },

  /**
   * Normalise a given fragment or URL for navigation mechanisms to work.
   * Typically, remove the leading base URL from the given fragment or URL.
   *
   * @param {String} fragmentOrUrl
   * @return {String}
   */
  normalizeFragmentOrUrl: function normalizeFragmentOrUrl(fragmentOrUrl) {
    throw new Error('implement normalizeFragmentOrUrl in child router');
  }
});

RouterBase.supportTrailingSlashes = function (obj) {
  return _.reduce(obj, function (res, val, key) {
    res[key] = val;
    res[key + '/'] = val;
    return res;
  }, {});
};

module.exports = RouterBase;

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/common/router-organization-groups.js":
/*!*******************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/common/router-organization-groups.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RouterBase = __webpack_require__(/*! dashboard/common/router-base */ "./lib/assets/javascripts/dashboard/common/router-base.js");
var RouterModel = __webpack_require__(/*! dashboard/views/organization/groups-admin/router-model */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/router-model.js");
var GroupHeaderView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-header/group-header-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header-view.js");
var GroupsIndexView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-index/group-index-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-view.js");
var CreateGroupView = __webpack_require__(/*! dashboard/views/organization/groups-admin/create-group/create-group-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group-view.js");
var GroupUsersView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-users/group-users-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users/group-users-view.js");
var EditGroupView = __webpack_require__(/*! dashboard/views/organization/groups-admin/edit-group/edit-group-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group-view.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['rootUrl', 'groups', 'userModel', 'flashMessageModel', 'modals'];

/**
 *  Backbone router for organization groups urls.
 */
module.exports = RouterBase.extend({

  routes: RouterBase.supportTrailingSlashes({
    '': 'renderGroupsIndex',
    'new': 'renderCreateGroup',
    ':id': 'renderGroupUsers',
    ':id/edit': 'renderEditGroup',

    // If URL is lacking the trailing slash (e.g. 'http://username.carto.com/organization/groups'), treat it like index
    '*prefix/groups': 'renderGroupsIndex'
  }),

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.rootPath = this._rootUrl.pathname.bind(this._rootUrl);

    this.model = new RouterModel();
    this.model.createLoadingView('Loading view'); // Until router's history is started
    this.listenTo(this.model, 'change', this._onChange);
  },

  normalizeFragmentOrUrl: function normalizeFragmentOrUrl(fragmentOrUrl) {
    return fragmentOrUrl ? fragmentOrUrl.toString().replace(this._rootUrl.toString(), '') : '';
  },

  isWithinCurrentRoutes: function isWithinCurrentRoutes(url) {
    return url.indexOf(this._rootUrl.pathname()) !== -1;
  },

  renderGroupsIndex: function renderGroupsIndex() {
    this.model.set('view', new GroupsIndexView({
      newGroupUrl: this._groupUrl.bind(this),
      groups: this._groups,
      router: this
    }));
  },

  renderCreateGroup: function renderCreateGroup() {
    var _this = this;

    var group = this._groups.newGroupById();

    this.model.set('view', ViewFactory.createListView([function () {
      return _this._createGroupHeader(group);
    }, function () {
      return new CreateGroupView({
        flashMessageModel: _this._flashMessageModel,
        group: group,
        onCreated: _this._navigateToGroup.bind(_this, group)
      });
    }]));
  },

  renderGroupUsers: function renderGroupUsers(id) {
    var _this2 = this;

    this.model.createGroupView(this._groups, id, function (group) {
      return ViewFactory.createListView([function () {
        return _this2._createGroupHeader(group, 'group_users');
      }, function () {
        return new GroupUsersView({
          group: group,
          orgUsers: _this2._userModel.organization.users,
          userModel: _this2._userModel
        });
      }]);
    });
  },

  renderEditGroup: function renderEditGroup(id) {
    var _this3 = this;

    this.model.createGroupView(this._groups, id, function (group) {
      return ViewFactory.createListView([function () {
        return _this3._createGroupHeader(group, 'edit_group');
      }, function () {
        return new EditGroupView({
          group: group,
          flashMessageModel: _this3._flashMessageModel,
          modals: _this3._modals,
          userModel: _this3._userModel,
          onSaved: _this3._navigateToGroup.bind(_this3, group),
          onDeleted: _this3.navigate.bind(_this3, _this3._rootUrl, { trigger: true })
        });
      }]);
    });
  },

  _navigateToGroup: function _navigateToGroup(group) {
    this.navigate(this._rootUrl.urlToPath(group.id), { trigger: true });
  },

  _groupUrl: function _groupUrl(group, subpath) {
    var path = group.id;

    if (subpath) {
      path += '/' + subpath;
    }

    return this._rootUrl.urlToPath(path);
  },

  _createGroupHeader: function _createGroupHeader(group, current) {
    var urls = {
      root: this._rootUrl,
      users: this._groupUrl(group),
      edit: this._groupUrl(group, 'edit')
    };
    urls.users.isCurrent = current === 'group_users';
    urls.edit.isCurrent = current === 'edit_group';

    return new GroupHeaderView({ group: group, urls: urls });
  },

  _onChange: function _onChange() {
    this._flashMessageModel.hide();
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/avatar-selector/avatar-selector.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/avatar-selector/avatar-selector.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Text js-avatarSelector">\n  <div class="FormAccount-rowLabel">\n    <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">\n      ';
 if (inputName == "user[avatar_url]") { ;
__p += '\n        Avatar*\n      ';
 } else if (inputName == "organization[avatar_url]") { ;
__p += '\n        Organization logo\n      ';
 } ;
__p += '\n    </label>\n  </div>\n  <div class="FormAccount-rowData FormAccount-avatar">\n    <div class="FormAccount-avatarPreview">\n      ';
 if (avatarURL) { ;
__p += '\n        <img src="' +
__e( avatarURL ) +
'" title="' +
__e( username ) +
'" alt="' +
__e( username ) +
'" class="FormAccount-avatarPreviewImage" />\n      ';
 } else { ;
__p += '\n        <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="FormAccount-avatarPreviewImage">\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Group-2">\n              <rect id="Rectangle" fill="#F9F9F9" x="0" y="0" width="100" height="100"></rect>\n              <g id="seats-icon" transform="translate(21.093750, 25.000000)" fill="#B1B8C1">\n                <g id="Group">\n                  <path d="M13.0696615,16.6666666 L1.18815104,16.6666666 C0.532291666,16.6666666 0,17.2 0,17.8571429 L0,25 C0,27.5785714 0.7984375,29.1190477 2.37630209,29.6 L2.37630209,39.2857143 C2.37630209,39.9428571 2.90859375,40.4761905 3.56445312,40.4761905 L10.6933594,40.4761905 C11.3492187,40.4761905 11.8815104,39.9428571 11.8815104,39.2857143 L11.8815104,29.6 C13.4569987,29.1190477 14.2554362,27.5785714 14.2578125,25 L14.2578125,17.8571429 C14.2578125,17.2 13.7255209,16.6666666 13.0696615,16.6666666 L13.0696615,16.6666666 L13.0696615,16.6666666 Z M11.8815104,25 C11.8791341,27.3809523 11.2208984,27.3809523 10.6933594,27.3809523 C10.0375,27.3809523 9.50520836,27.9142857 9.50520836,28.5714286 L9.50520836,38.0952381 L4.75260416,38.0952381 L4.75260416,28.5714286 C4.75260416,27.9142857 4.2203125,27.3809523 3.56445312,27.3809523 C3.03453776,27.3809523 2.37630209,27.3809523 2.37630209,25 L2.37630209,19.0476191 L11.8815104,19.0476191 L11.8815104,25 L11.8815104,25 L11.8815104,25 Z M55.843099,16.6666666 L43.9615885,16.6666666 C43.3057291,16.6666666 42.7734375,17.2 42.7734375,17.8571429 L42.7734375,25 C42.7734375,27.5785714 43.571875,29.1190477 45.1497396,29.6 L45.1497396,39.2857143 C45.1497396,39.9428571 45.6820313,40.4761905 46.3378906,40.4761905 L53.4667969,40.4761905 C54.1226562,40.4761905 54.6549479,39.9428571 54.6549479,39.2857143 L54.6549479,29.6 C56.2304362,29.1190477 57.0288737,27.5785714 57.03125,25 L57.03125,17.8571429 C57.03125,17.2 56.4989584,16.6666666 55.843099,16.6666666 L55.843099,16.6666666 L55.843099,16.6666666 Z M54.6549479,25 C54.6525716,27.3809523 53.9943359,27.3809523 53.4667969,27.3809523 C52.8109375,27.3809523 52.2786459,27.9142857 52.2786459,28.5714286 L52.2786459,38.0952381 L47.5260416,38.0952381 L47.5260416,28.5714286 C47.5260416,27.9142857 46.99375,27.3809523 46.3378906,27.3809523 C45.8079752,27.3809523 45.1497396,27.3809523 45.1497396,25 L45.1497396,19.0476191 L54.6549479,19.0476191 L54.6549479,25 L54.6549479,25 L54.6549479,25 Z M36.8326823,16.6666666 L20.1985677,16.6666666 C19.5427084,16.6666666 19.0104166,17.2 19.0104166,17.8571429 L19.0104166,29.7619048 C19.0104166,32.6380952 21.0540365,35.0404762 23.7630209,35.5952381 L23.7630209,48.8095238 C23.7630209,49.4666666 24.2953125,50 24.9511719,50 L32.0800781,50 C32.7359375,50 33.2682291,49.4666666 33.2682291,48.8095238 L33.2682291,35.5952381 C35.9772135,35.0428571 38.0208334,32.6380952 38.0208334,29.7619048 L38.0208334,17.8571429 C38.0208334,17.2 37.4885416,16.6666666 36.8326823,16.6666666 L36.8326823,16.6666666 L36.8326823,16.6666666 Z M35.6445312,29.7619048 C35.6445312,31.7309523 34.0452799,33.3333334 32.0800781,33.3333334 C31.4242188,33.3333334 30.8919271,33.8666666 30.8919271,34.5238095 L30.8919271,47.6190477 L26.1393229,47.6190477 L26.1393229,34.5238095 C26.1393229,33.8666666 25.6070312,33.3333334 24.9511719,33.3333334 C22.9859701,33.3333334 21.3867188,31.7309523 21.3867188,29.7619048 L21.3867188,19.0476191 L35.6445312,19.0476191 L35.6445312,29.7619048 L35.6445312,29.7619048 L35.6445312,29.7619048 Z M7.12890625,14.2857143 C9.74996742,14.2857143 11.8815104,12.15 11.8815104,9.52380953 C11.8815104,6.89523809 9.74996742,4.76190477 7.12890625,4.76190477 C4.50784505,4.76190477 2.37630209,6.89523809 2.37630209,9.52380953 C2.37630209,12.15 4.50784505,14.2857143 7.12890625,14.2857143 L7.12890625,14.2857143 L7.12890625,14.2857143 Z M7.12890625,7.14285714 C8.43824867,7.14285714 9.50520836,8.21190477 9.50520836,9.52380953 C9.50520836,10.8357143 8.43824867,11.9047619 7.12890625,11.9047619 C5.8195638,11.9047619 4.75260416,10.8357143 4.75260416,9.52380953 C4.75260416,8.21190477 5.8195638,7.14285714 7.12890625,7.14285714 L7.12890625,7.14285714 L7.12890625,7.14285714 Z M49.9023438,14.2857143 C52.5234049,14.2857143 54.6549479,12.15 54.6549479,9.52380953 C54.6549479,6.89523809 52.5234049,4.76190477 49.9023438,4.76190477 C47.2812826,4.76190477 45.1497396,6.89523809 45.1497396,9.52380953 C45.1497396,12.15 47.2812826,14.2857143 49.9023438,14.2857143 L49.9023438,14.2857143 L49.9023438,14.2857143 Z M49.9023438,7.14285714 C51.2116862,7.14285714 52.2786459,8.21190477 52.2786459,9.52380953 C52.2786459,10.8357143 51.2116862,11.9047619 49.9023438,11.9047619 C48.5930013,11.9047619 47.5260416,10.8357143 47.5260416,9.52380953 C47.5260416,8.21190477 48.5930013,7.14285714 49.9023438,7.14285714 L49.9023438,7.14285714 L49.9023438,7.14285714 Z M28.515625,14.2857143 C32.4460287,14.2857143 35.6445312,11.0809523 35.6445312,7.14285714 C35.6445312,3.20476191 32.4460287,0 28.515625,0 C24.5852213,0 21.3867188,3.20476191 21.3867188,7.14285714 C21.3867188,11.0809523 24.5852213,14.2857143 28.515625,14.2857143 L28.515625,14.2857143 L28.515625,14.2857143 Z M28.515625,2.38095238 C31.1366862,2.38095238 33.2682291,4.51428571 33.2682291,7.14285714 C33.2682291,9.76904766 31.1366862,11.9047619 28.515625,11.9047619 C25.8945638,11.9047619 23.7630209,9.76904766 23.7630209,7.14285714 C23.7630209,4.51428571 25.8945638,2.38095238 28.515625,2.38095238 L28.515625,2.38095238 L28.515625,2.38095238 Z" id="Shape"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n        </svg>\n      ';
 } ;
__p += '\n\n      ';
 if (state === "loading") { ;
__p += '\n        <div class="FormAccount-avatarPreviewLoader">\n          <div class="Spinner FormAccount-avatarPreviewSpinner"></div>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n    <input class="js-fileAvatar" type="file" value="Choose image" accept="' +
__e( avatarAcceptedExtensions ) +
'" />\n    <input class="js-inputAvatar" id="user_avatar_url" name="' +
__e( inputName ) +
'" type="hidden" value="' +
__e( avatarURL ) +
'" />\n    <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n      ';
 if (state === "error") { ;
__p += '\n        <p class="FormAccount-rowInfoText FormAccount-rowInfoText--error FormAccount-rowInfoText--maxWidth">There was an error uploading your avatar. Check the height and size (max 1MB) of the image</p>\n      ';
 } else { ;
__p += '\n        <p class="FormAccount-rowInfoText FormAccount-rowInfoText--smaller">Recommended images should be 128x128 pixels of size</p>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';

}
return __p
}

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

/***/ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-dialog-wrapper.tpl":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/paged-search/paged-search-dialog-wrapper.tpl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Dialog-body Dialog-body--share Dialog-body--withoutBorder Dialog-body--expanded">\n  <div class="u-inner">\n    ' +
((__t = ( htmlToWrap )) == null ? '' : __t) +
'\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-view.js":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/paged-search/paged-search-view.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var Utils = __webpack_require__(/*! builder/helpers/utils */ "./lib/assets/javascripts/builder/helpers/utils.js");
var PaginationModel = __webpack_require__(/*! builder/components/pagination/pagination-model */ "./lib/assets/javascripts/builder/components/pagination/pagination-model.js");
var template = __webpack_require__(/*! ./paged-search.tpl */ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search.tpl");
var pagedSearchDialogWrapperTemplate = __webpack_require__(/*! ./paged-search-dialog-wrapper.tpl */ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-dialog-wrapper.tpl");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var noResultsView = __webpack_require__(/*! builder/components/no-results/render-no-results.js */ "./lib/assets/javascripts/builder/components/no-results/render-no-results.js");
var TabPane = __webpack_require__(/*! dashboard/components/tabpane/tabpane */ "./lib/assets/javascripts/dashboard/components/tabpane/tabpane.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var PaginationView = __webpack_require__(/*! builder/components/pagination/pagination-view */ "./lib/assets/javascripts/builder/components/pagination/pagination-view.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['collection', 'pagedSearchModel'];

/**
 * View to render a searchable/pageable collection.
 * Also allows to filter/search list.
 * Set {isUsedInDialog: true} in view opts if intended to be used in a dialog, to have proper classes to position views
 * properly.
 *
 * - collection is a collection which has a PagedSearchModel.
 */
module.exports = CoreView.extend({

  events: {
    'click .js-search-link': '_onSearchClick',
    'click .js-clean-search': '_onCleanSearchClick',
    'keydown .js-search-input': '_onKeyDown',
    'submit .js-search-form': 'killEvent'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.options.noResults = this.options.noResults || {};

    var params = this._pagedSearchModel;
    this.paginationModel = new PaginationModel({
      current_page: params.get('page'),
      total_count: this._collection.totalCount() || 0,
      per_page: params.get('per_page')
    });

    this._initBinds();
    this._pagedSearchModel.fetch(this._collection);
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._collection, 'fetching', function () {
      this._toggleCleanSearchBtn();
      this._activatePane('loading');
    });

    this.listenTo(this._collection, 'error', function (e) {
      // Old requests can be stopped, so aborted requests are not
      // considered as an error
      if (!e || e && e.statusText !== 'abort') {
        this._activatePane('error');
      }
      this._toggleCleanSearchBtn();
    });

    this.listenTo(this._collection, 'sync', function (collection) {
      this.paginationModel.set({
        total_count: this._collection.totalCount(),
        current_page: this._pagedSearchModel.get('page')
      });
      this._activatePane(this._collection.totalCount() > 0 ? 'list' : 'no_results');
      this._toggleCleanSearchBtn();
    });

    this.listenTo(this.paginationModel, 'change:current_page', function (model, newPage) {
      this._pagedSearchModel.set('page', newPage);
      this._pagedSearchModel.fetch(this._collection);
    });
  },

  render: function render() {
    this.clearSubViews();

    this._renderContent(template({
      thinFilters: this.options.thinFilters || false,
      q: this._pagedSearchModel.get('q')
    }));

    this._initViews();
    this._$cleanSearchBtn().hide();
    this._renderExtraFilters();

    return this;
  },

  _renderExtraFilters: function _renderExtraFilters() {
    if (this.options.filtersExtrasView) {
      this.$('.js-filters').append(this.options.filtersExtrasView.render().el);
    }
  },

  _renderContent: function _renderContent(html) {
    if (this.options.isUsedInDialog) {
      html = pagedSearchDialogWrapperTemplate({
        htmlToWrap: html
      });
    }
    this.$el.html(html);

    // Needs to be called after $el html changed:
    if (this.options.isUsedInDialog) {
      this.$el.addClass('Dialog-expandedSubContent');
      this._$tabPane().addClass('Dialog-bodyInnerExpandedWithSubFooter');
    }
  },

  _toggleCleanSearchBtn: function _toggleCleanSearchBtn() {
    this._$cleanSearchBtn().toggle(!!this._pagedSearchModel.get('q'));
  },

  _initViews: function _initViews() {
    var _this = this;

    this._panes = new TabPane({
      el: this._$tabPane()
    });

    this.addView(this._panes);

    this._panes.addTab('list', ViewFactory.createListView([function () {
      return _this._createListView();
    }, function () {
      return new PaginationView({
        className: 'CDB-Text CDB-Size-medium Pagination Pagination--shareList',
        model: _this.paginationModel
      });
    }]));

    this._panes.addTab('error', ViewFactory.createByHTML(errorTemplate({
      msg: ''
    })).render());

    this._panes.addTab('no_results', ViewFactory.createByHTML(noResultsView({
      icon: this.options.noResults.icon || 'CDB-IconFont-defaultUser',
      title: this.options.noResults.title || 'Oh! No results',
      msg: this.options.noResults.msg || 'Unfortunately we could not find anything with these parameters'
    })).render());

    this._panes.addTab('loading', ViewFactory.createByHTML(loadingView({
      title: 'Searching'
    })).render());

    if (this._pagedSearchModel.get('q')) {
      this._focusSearchInput();
    }

    this._activatePane(this._chooseActivePaneName(this._collection.totalCount()));
  },

  _createListView: function _createListView() {
    var view = this.options.createListView();
    if (view instanceof CoreView) {
      return view;
    } else {
      console.error('createListView function must return a view');
      // fallback for view to not fail miserably
      return new CoreView();
    }
  },

  _activatePane: function _activatePane(name) {
    // Only change active pane if the panes is actually initialized
    if (this._panes && this._panes.size() > 0) {
      // explicit render required, since tabpane doesn't do it
      this._panes.active(name).render();
    }
  },

  _chooseActivePaneName: function _chooseActivePaneName(totalCount) {
    if (totalCount === 0) {
      return 'no_results';
    } else if (totalCount > 0) {
      return 'list';
    } else {
      return 'loading';
    }
  },

  _focusSearchInput: function _focusSearchInput() {
    // also selects the current search str on the focus
    this._$searchInput().focus().val(this._$searchInput().val());
  },

  _onSearchClick: function _onSearchClick(ev) {
    this.killEvent(ev);
    this._$searchInput().focus();
  },

  _onCleanSearchClick: function _onCleanSearchClick(ev) {
    this.killEvent(ev);
    this._cleanSearch();
  },

  _onKeyDown: function _onKeyDown(ev) {
    var enterPressed = ev.key === 'Enter';
    var escapePressed = ev.key === 'Escape';
    if (enterPressed) {
      this.killEvent(ev);
      this._submitSearch();
    } else if (escapePressed) {
      this.killEvent(ev);
      if (this._pagedSearchModel.get('q')) {
        this._cleanSearch();
      }
    }
  },

  _submitSearch: function _submitSearch(e) {
    this._makeNewSearch(Utils.stripHTML(this._$searchInput().val().trim()));
  },

  _cleanSearch: function _cleanSearch() {
    this._$searchInput().val('');
    this._makeNewSearch();
  },

  _makeNewSearch: function _makeNewSearch(query) {
    this._pagedSearchModel.set({
      q: query,
      page: 1
    });
    this._pagedSearchModel.fetch(this._collection);
  },

  _$searchInput: function _$searchInput() {
    return this.$('.js-search-input');
  },

  _$cleanSearchBtn: function _$cleanSearchBtn() {
    return this.$('.js-clean-search');
  },

  _$tabPane: function _$tabPane() {
    return this.$('.js-tab-pane');
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search.tpl":
/*!***********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/components/paged-search/paged-search.tpl ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Filters is-relative ';
 if (thinFilters) { ;
__p += 'Filters--thin';
 } ;
__p += '">\n  <div class="Filters-inner">\n    <div class="Filters-row js-filters">\n      <div class="Filters-typeItem Filters-typeItem--searchEnabler">\n        <p class="Filters-searchLink js-search-link u-alignCenter CDB-Text CDB-Size-medium">\n          <i class="Filters-searchLinkIcon CDB-IconFont CDB-IconFont-lens"></i> Search\n        </p>\n      </div>\n      <div class="Filters-typeItem Filters-typeItem--searchField">\n        <form class="Filters-searchForm js-search-form" action="#">\n          <input class="Filters-searchInput CDB-Text CDB-Size-medium js-search-input" type="text" value="' +
__e( q ) +
'" placeholder="Search by username or email" />\n          <button type="button" class="Filters-cleanSearch js-clean-search u-actionTextColor">\n            <i class="CDB-IconFont CDB-IconFont-close"></i>\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <span class="Filters-separator"></span>\n</div>\n<div class="js-tab-pane"></div>\n';

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

/***/ "./lib/assets/javascripts/dashboard/data/organization-invite-model.js":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/data/organization-invite-model.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['organizationId', 'configModel'];

module.exports = Backbone.Model.extend({
  defaults: {
    users_emails: []
  },

  initialize: function initialize(attrs, options) {
    this.attributes['welcome_text'] = 'I\'d like to invite you to my ' + options.configModel['attributes'].app_name + ' organization,\nBest regards';
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  url: function url() {
    return '/api/v1/organization/' + this._organizationId + '/invitations';
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/data/paged-search-model.js":
/*!*********************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/data/paged-search-model.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");

/**
 * Model representing the query string params for a "paged search" of a collection (matching the server-side APIs).
 *
 * @example usage
 *   const PagedSearch = require('dashboard/data/paged-search-model');
 *   pagedSearch = new PagedSearch({ … })
 *   pagedSearch.fetch(collection) // => jqXHR, GET /collection/123?page=1&per_page20
 *   pagedSearch.set({ page: 2, per_page: 10, q: 'test' });
 *   pagedSearch.fetch(collection) // => GET /collection/123?page=2&per_page10&q=test
 */
module.exports = Backbone.Model.extend({
  defaults: {
    per_page: 20,
    page: 1
    // order: 'name'
    // q: '',
  },

  fetch: function fetch(collection) {
    collection.trigger('fetching');

    return collection.fetch({
      data: this.attributes
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/helpers/response-parser.js":
/*!*********************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/helpers/response-parser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (response) {
  var responseJSON = response && response.responseJSON;
  var errors = responseJSON && responseJSON.message;

  if (responseJSON && responseJSON.errors && responseJSON.errors.length) {
    errors = responseJSON.errors.join('. ') + '. ';
  }

  return errors;
};

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/organization.js":
/*!**********************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/organization.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Polyglot = __webpack_require__(/*! node-polyglot */ "./node_modules/node-polyglot/index.js");
var Locale = __webpack_require__(/*! locale/index */ "./lib/assets/javascripts/locale/index.js");

var ACTIVE_LOCALE = window.ACTIVE_LOCALE || 'en';
var polyglot = new Polyglot({
  locale: ACTIVE_LOCALE, // Needed for pluralize behaviour
  phrases: Locale[ACTIVE_LOCALE]
});
window._t = polyglot.t.bind(polyglot);

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var UserModel = __webpack_require__(/*! dashboard/data/user-model */ "./lib/assets/javascripts/dashboard/data/user-model.js");
var OrganizationModel = __webpack_require__(/*! dashboard/data/organization-model */ "./lib/assets/javascripts/dashboard/data/organization-model.js");
var ConfigModel = __webpack_require__(/*! dashboard/data/config-model */ "./lib/assets/javascripts/dashboard/data/config-model.js");
var DashboardHeaderView = __webpack_require__(/*! dashboard/components/dashboard-header-view */ "./lib/assets/javascripts/dashboard/components/dashboard-header-view.js");
var HeaderViewModel = __webpack_require__(/*! ./views/organization/header-view-model */ "./lib/assets/javascripts/dashboard/views/organization/header-view-model.js");
var LocalStorage = __webpack_require__(/*! dashboard/helpers/local-storage */ "./lib/assets/javascripts/dashboard/helpers/local-storage.js");
var FlashMessageModel = __webpack_require__(/*! dashboard/data/flash-message-model */ "./lib/assets/javascripts/dashboard/data/flash-message-model.js");
var FlashMessageView = __webpack_require__(/*! dashboard/components/flash-message/flash-message-view */ "./lib/assets/javascripts/dashboard/components/flash-message/flash-message-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");
var OrganizationUsersView = __webpack_require__(/*! dashboard/views/organization/organization-users/organization-users-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-view.js");
var OrganizationNotificationView = __webpack_require__(/*! dashboard/views/organization/organization-notification/organization-notification-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/organization-notification-view.js");
var OrganizationUserQuota = __webpack_require__(/*! dashboard/views/organization/organization-user-quota */ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota.js");
var AvatarSelector = __webpack_require__(/*! dashboard/components/avatar-selector/avatar-selector-view */ "./lib/assets/javascripts/dashboard/components/avatar-selector/avatar-selector-view.js");
var OrganizationUserForm = __webpack_require__(/*! dashboard/views/organization/organization-user-form */ "./lib/assets/javascripts/dashboard/views/organization/organization-user-form.js");
var RegenerateKeysDialog = __webpack_require__(/*! dashboard/views/organization/regenerate-keys-dialog-view */ "./lib/assets/javascripts/dashboard/views/organization/regenerate-keys-dialog-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var DeleteOrganization = __webpack_require__(/*! dashboard/views/organization/delete-organization-view */ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-view.js");
var IconPickerView = __webpack_require__(/*! dashboard/views/organization/icon-picker/organization-icon-picker-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker-view.js");
var DeleteOrganizationUser = __webpack_require__(/*! dashboard/views/organization/delete-organization-user-view */ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-user-view.js");
var GroupsRouter = __webpack_require__(/*! dashboard/common/router-organization-groups */ "./lib/assets/javascripts/dashboard/common/router-organization-groups.js");
var GroupsMainView = __webpack_require__(/*! dashboard/views/organization/groups-admin/groups-main-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-main-view.js");
var OrganizationGroupsCollection = __webpack_require__(/*! dashboard/data/organization-groups-collection */ "./lib/assets/javascripts/dashboard/data/organization-groups-collection.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var getObjectValue = __webpack_require__(/*! deep-insights/util/get-object-value */ "./lib/assets/javascripts/deep-insights/util/get-object-value.js");
__webpack_require__(/*! dashboard/data/backbone/sync-options */ "./lib/assets/javascripts/dashboard/data/backbone/sync-options.js");

var ForbiddenAction = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptors/forbidden-403 */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptors/forbidden-403.js");
var NetworkResponseInterceptor = __webpack_require__(/*! builder/data/backbone/network-interceptors/interceptor */ "./lib/assets/javascripts/builder/data/backbone/network-interceptors/interceptor.js");
NetworkResponseInterceptor.addURLPattern('api/v');
NetworkResponseInterceptor.addErrorInterceptor(ForbiddenAction());
NetworkResponseInterceptor.start();

var DOMAIN_REGEXP = /^[a-zA-Z0-9*][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})$/;
var configModel = new ConfigModel(_.defaults({
  base_url: window.user_data.base_url,
  url_prefix: window.user_data.base_url
}, window.config));

if (window.trackJs) {
  window.trackJs.configure({
    userId: window.user_data.username
  });
}

/**
 *  Entry point for the new organization, bootstraps all
 *  dependency models and application.
 */

$(function () {
  var organizationUser = void 0;
  var organization = void 0;
  var organizationUsers = void 0;

  var modalsService = new ModalsServiceModel();

  var userModel = new UserModel(window.user_data, { configModel: configModel });

  if (window.user_data.organization) {
    organization = new OrganizationModel(_extends({}, window.user_data.organization, window.organization_data), {
      userModel: userModel,
      configModel: configModel,
      currentUserId: window.user_data.id
    });
    organizationUsers = organization.users;
    organization.owner = new UserModel(getObjectValue(window.user_data, 'organization.owner'));
    userModel.setOrganization(organization);
  }

  if (window.organization_user_data) {
    organizationUser = new UserModel(window.organization_user_data, { configModel: configModel });

    if (organization) {
      organizationUser.setOrganization(organization);
    }
  }

  var headerView = new DashboardHeaderView({
    el: $('#header'), // pre-rendered in DOM by Rails app
    model: userModel,
    userModelUrl: userModel.viewUrl(),
    viewModel: new HeaderViewModel(),
    localStorage: new LocalStorage(),
    configModel: configModel
  });
  headerView.render();

  var flashMessageModel = new FlashMessageModel();
  var flashMessageView = new FlashMessageView({
    model: flashMessageModel
  });
  flashMessageView.render();
  flashMessageView.$el.insertAfter(headerView.$el);

  // Avatar
  if ($('.js-avatarSelector').length > 0) {
    var avatarSelector = new AvatarSelector({
      el: $('.js-avatarSelector'),
      renderModel: new Backbone.Model({
        inputName: $('.js-fileAvatar').attr('name'),
        name: userModel.organization.get('name'),
        avatar_url: userModel.organization.get('avatar_url'),
        id: userModel.get('id')
      }),
      avatarAcceptedExtensions: window.avatar_valid_extensions,
      configModel: configModel
    });

    avatarSelector.render();
  }

  // Tooltips
  $('[data-title]').each(function (i, el) {
    new TipsyTooltipView({ // eslint-disable-line
      el: el,
      title: function title() {
        return $(this).attr('data-title');
      }
    });
  });

  // Icon picker
  if ($('.js-iconPicker').length > 0) {
    this.icon_picker_view = new IconPickerView({
      el: $('.js-iconPicker'),
      orgId: userModel.organization.get('id'),
      configModel: configModel
    });
  }

  // Domain whitelisting
  if ($('.js-domains').length > 0) {
    __webpack_require__(/*! jquery-ui */ "./lib/assets/javascripts/vendor/jquery-ui.js");
    __webpack_require__(/*! tagit */ "./vendor/assets/javascripts/tag-it.js");

    $('.js-domainsList').tagit({
      allowSpaces: false,
      singleField: true,
      singleFieldNode: $('.js-whitelist'),
      fieldName: $('.js-whitelist').attr('name'),
      tagLimit: 10,
      readOnly: false,
      onBlur: function onBlur() {
        $('.js-domains').removeClass('is-focus');

        if ($('.tagit-choice').length > 0) {
          $('.js-placeholder').hide();
        } else {
          $('.js-placeholder').show();
        }

        if ($('.tagit-new').length > 0) {
          $('.tagit-new input').val('');
        }
      },
      onFocus: function onFocus() {
        $('.js-domains').addClass('is-focus');

        $('.js-placeholder').hide();
      },
      beforeTagAdded: function beforeTagAdded(ev, ui) {
        if (!DOMAIN_REGEXP.test(ui.tagLabel)) {
          return false;
        }

        if ($('.tagit-choice').length > 0) {
          $('.js-placeholder').hide();
        } else {
          $('.js-placeholder').show();
        }
      },
      afterTagAdded: function afterTagAdded(ev, ui) {
        if ($('.tagit-choice').length > 0) {
          $('.js-placeholder').hide();
        } else {
          $('.js-placeholder').show();
        }
      }
    });
  }

  // Organization user form
  if (organizationUser) {
    this.organization_user_form = new OrganizationUserForm({
      el: $('.js-organizationUserForm'),
      model: organizationUser
    });
  }

  // User quota main view
  if (organizationUser) {
    this.organization_user_quota = new OrganizationUserQuota({
      el: $('.js-userQuota'),
      model: organizationUser
    });
  }

  // Organization users list
  if ($('.js-orgUsersList').length === 1) {
    this.organizationUsersView = new OrganizationUsersView({
      el: '.js-orgUsersList',
      organization: organization,
      organizationUsers: organizationUsers,
      userModel: userModel,
      configModel: configModel
    });

    this.organizationUsersView.render();
  }

  // User deletion
  var deleteAccountButton = $('.js-deleteAccount');
  if (deleteAccountButton.length > 0 && window.authenticity_token) {
    deleteAccountButton.click(function (ev) {
      if (ev) {
        ev.preventDefault();
      }

      modalsService.create(function (modalModel) {
        return new DeleteOrganizationUser({
          modalModel: modalModel,
          configModel: configModel,
          organizationUser: organizationUser,
          authenticityToken: window.authenticity_token,
          passwordNeeded: userModel.needsPasswordConfirmation()
        });
      });
    });
  }

  // Organization deletion
  if ($('.js-deleteOrganization').length > 0 && window.authenticity_token) {
    $('.js-deleteOrganization').click(function (event) {
      if (event) event.preventDefault();

      modalsService.create(function (modalModel) {
        return new DeleteOrganization({
          authenticityToken: window.authenticity_token,
          userModel: userModel,
          modalModel: modalModel
        });
      });
    });
  }

  // Notifications
  if ($('.js-OrganizationNotification').length > 0) {
    var authenticityToken = $('[name=authenticity_token][value]').get(0).value;

    this.organization_notification_view = new OrganizationNotificationView({
      el: '.js-OrganizationNotification',
      authenticityToken: authenticityToken,
      userModel: userModel
    });

    this.organization_notification_view.render();
  }

  // User quotas
  var toggleUserQuotas = function toggleUserQuotas() {
    var viewer = $('.js-userViewerOption:checked').val();
    if (viewer === 'true') {
      $('.user-quotas').hide();
      $('.js-org-admin-row').hide();
      $('#org_admin').prop('checked', false);
    } else {
      $('.user-quotas').show();
      $('.js-org-admin-row').show();
    }
  };

  toggleUserQuotas();

  $('.js-userViewerOption').bind('change', function (ev) {
    toggleUserQuotas();
  });

  // API keys
  var regenerateApiKeyHandler = function regenerateApiKeyHandler(event, scope, form_action) {
    if (event) event.preventDefault();

    var authenticity_token = $('[name=authenticity_token][value]').get(0).value;

    modalsService.create(function (modalModel) {
      return new RegenerateKeysDialog({
        type: 'api',
        scope: scope,
        form_action: form_action,
        authenticity_token: authenticity_token,
        modalModel: modalModel,
        passwordNeeded: userModel.needsPasswordConfirmation()
      });
    });
  };

  $('.js-regenerateOrgUsersApiKey').bind('click', function (event) {
    var current_username = $(this).attr('data-current_username');

    regenerateApiKeyHandler(event, 'organization', '/u/' + current_username + '/organization/regenerate_api_keys');
  });

  $('.js-regenerateOrgUserApiKey').bind('click', function (ev) {
    var username = $(this).attr('data-username');
    var current_username = $(this).attr('data-current_username');

    regenerateApiKeyHandler(ev, 'organization_user', '/u/' + current_username + '/organization/users/' + username + '/regenerate_api_key');
  });

  var $groups = $('.js-groups-content');
  if ($groups) {
    if (!userModel.isOrgAdmin()) {
      window.location = userModel.viewUrl().accountProfile();
      return false;
    }

    var groups = new OrganizationGroupsCollection([], {
      organization: userModel.organization,
      configModel: configModel
    });

    var router = new GroupsRouter({
      rootUrl: userModel.viewUrl().organization().groups(),
      flashMessageModel: flashMessageModel,
      groups: groups,
      userModel: userModel,
      modals: modalsService
    });

    var groupsMainView = new GroupsMainView({
      el: $groups,
      groups: groups,
      routerModel: router,
      user: userModel
    });
    groupsMainView.render();

    router.enableAfterMainView();
  }

  // Password Expiration
  var listenToExpirationSettingsChanges = function listenToExpirationSettingsChanges() {
    var expirationInput = $('#organization_password_expiration_in_d');
    var unlimitedExpirationInput = $('#unlimited_password_expiration');

    unlimitedExpirationInput.change(function () {
      var isChecked = this.checked;
      isChecked ? expirationInput.attr('disabled', 'disabled') : expirationInput.removeAttr('disabled');
      expirationInput.val(null);
    });
  };
  listenToExpirationSettingsChanges();

  // Form Validations
  PasswordValidatedForm.bindEventTo('.FormAccount-Content form', {
    modals: modalsService,
    passwordConfirmationNeeded: userModel.get('needs_password_confirmation')
  });
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="LayoutIcon LayoutIcon--negative">\n    <i class="CDB-IconFont CDB-IconFont-cockroach"></i>\n  </div>\n  ';
 if (msg) { ;
__p += '\n    <p class="CDB-Text CDB-Size-medium u-altTextColor u-tSpace-xl">' +
((__t = ( msg )) == null ? '' : __t) +
'</p>\n  ';
 } ;
__p += '\n  <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">Oouch! There has been an error</h4>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">If the problem persists contact us at <a class="js-mail-link" href="mailto:support@carto.com">support@carto.com</a>.</p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/data-library/content/request-error-template.tpl":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/data-library/content/request-error-template.tpl ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="IntermediateInfo">\n  <div class="LayoutIcon LayoutIcon--negative">\n    <i class="CDB-IconFont CDB-IconFont-info"></i>\n  </div>\n  ';
 if (msg) { ;
__p += '\n    <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">' +
((__t = ( msg )) == null ? '' : __t) +
'</h4>\n  ';
 } else { ;
__p += '\n    <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">Oouch! There has been an error</h4>\n  ';
 } ;
__p += '\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">If the problem persists contact us at <a class="js-mail-link" href="mailto:support@carto.com">support@carto.com</a>.</p>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-user-view.js":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/delete-organization-user-view.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./delete-organization-user.tpl */ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-user.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['modalModel', 'configModel', 'passwordNeeded', 'organizationUser', 'authenticityToken'];

module.exports = CoreView.extend({
  events: {
    'click .js-cancel': '_closeDialog',
    'submit .js-form': '_closeDialog'
  },

  options: {
    authenticityToken: '',
    organizationUser: {}
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
    CoreView.prototype.initialize.apply(this);
  },

  render: function render() {
    this.$el.html(template({
      username: this._organizationUser.get('username'),
      formAction: this._configModel.prefixUrl() + '/organization/users/' + this._organizationUser.get('username'),
      authenticityToken: this._authenticityToken,
      passwordNeeded: this._passwordNeeded
    }));

    return this;
  },

  _closeDialog: function _closeDialog() {
    if (this._modalModel) {
      this._modalModel.destroy();
    }
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-user.tpl":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/delete-organization-user.tpl ***!
  \******************************************************************************************/
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
'" />\n  <input name="_method" type="hidden" value="delete" />\n\n  <div class="CDB-Text Dialog-header u-inner">\n    <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n      <i class="CDB-IconFont CDB-IconFont-defaultUser"></i>\n    </div>\n    <p class="Dialog-headerTitle">You are about to delete ' +
__e( username ) +
'\'s account.</p>\n    <p class="Dialog-headerText">\n      By deleting this account all ' +
__e( username ) +
'\'s maps and datasets will be lost,\n      but extra credits will be reassigned to your user.\n      ';
 if (passwordNeeded) { ;
__p += '\n        Type your password, please.\n      ';
 } ;
__p += '\n    </p>\n  </div>\n\n  ';
 if (passwordNeeded) { ;
__p += '\n    <div class="CDB-Text Dialog-body">\n      <div class="Form-row Form-row--centered has-label">\n        <div class="Form-rowLabel">\n          <label class="Form-label">Your password</label>\n        </div>\n        <div class="Form-rowData">\n          <input type="password" id="deletion_password_confirmation" name="password_confirmation" class="CDB-InputText CDB-Text Form-input Form-input--long" value=""/>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="CDB-Text Dialog-footer u-inner">\n    <button class="CDB-Button CDB-Button--secondary Dialog-footerBtn js-cancel" type="button">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Cancel</span>\n    </button>\n    <button type="submit" class="CDB-Button CDB-Button--error js-ok">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Yes, delete ' +
__e( username ) +
' account</span>\n    </button>\n  </div>\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/delete-organization-view.js":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/delete-organization-view.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./delete-organization.tpl */ "./lib/assets/javascripts/dashboard/views/organization/delete-organization.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['userModel', 'modalModel', 'authenticityToken'];
/**
 *  When an organization owner wants to delete the full organization
 *
 */

module.exports = CoreView.extend({
  options: {
    authenticityToken: ''
  },

  events: {
    'click .js-cancel': '_closeDialog',
    'submit .js-form': '_closeDialog'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    return this.$el.html(template({
      formAction: this._userModel.get('base_url') + '/organization',
      authenticityToken: this._authenticityToken,
      passwordNeeded: !!this._userModel.get('needs_password_confirmation')
    }));
  },

  _closeDialog: function _closeDialog() {
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/delete-organization.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/delete-organization.tpl ***!
  \*************************************************************************************/
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
'" />\n  <input name="_method" type="hidden" value="delete" />\n\n  <div class="CDB-Text Dialog-header u-inner">\n    <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n      <i class="CDB-IconFont CDB-IconFont-defaultUser"></i>\n    </div>\n    <p class="Dialog-headerTitle">You are about to delete your organization.</p>\n    <p class="Dialog-headerText">\n      You will remove this organization and all its users (including this account)<br/>\n      and it will not be possible to recover its information (including tables and data) after this deletion.<br/>\n      ';
 if (passwordNeeded) { ;
__p += '\n          If you want to proceed, type your password:<br/>\n      ';
 } ;
__p += '\n    </p>\n  </div>\n\n  ';
 if (passwordNeeded) { ;
__p += '\n  <div class="CDB-Text Dialog-body">\n    <div class="Form-row Form-row--centered has-label">\n      <div class="Form-rowLabel">\n        <label class="Form-label">Your password</label>\n      </div>\n      <div class="Form-rowData">\n        <input type="password" name="deletion_password_confirmation" class="CDB-InputText CDB-Text Form-input Form-input--long" value=""/>\n      </div>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n\n  <div class="Dialog-footer u-inner">\n    <button type="button" class="CDB-Button CDB-Button--secondary js-cancel">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Cancel</span>\n    </button>\n    <button type="submit" class="CDB-Button CDB-Button--error js-ok">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Yes, delete the organization</span>\n    </button>\n  </div>\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.js":
/*!******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var PagedSearchView = __webpack_require__(/*! dashboard/components/paged-search/paged-search-view */ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-view.js");
var PagedSearchModel = __webpack_require__(/*! dashboard/data/paged-search-model */ "./lib/assets/javascripts/dashboard/data/paged-search-model.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var template = __webpack_require__(/*! ./add-group-users-view.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.tpl");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading.js */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var requestErrorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/request-error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/request-error-template.tpl");
var responseParser = __webpack_require__(/*! dashboard/helpers/response-parser */ "./lib/assets/javascripts/dashboard/helpers/response-parser.js");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var GroupUsersListView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-users-list/group-users-list-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users-list/group-users-list-view.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'orgUsers', 'userModel', 'modalModel'];

/**
 * Dialog to add custom basemap to current map.
 */
module.exports = CoreView.extend({
  events: {
    'click .ok': 'ok'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
    this.model = new Backbone.Model();

    // Include current user in fetch results
    this._orgUsers.excludeCurrentUser(false);

    this._modals = new ModalsServiceModel();

    this._initBinds();
    this._initViews();
  },

  clean: function clean() {
    // restore org users
    this._orgUsers.restoreExcludeCurrentUser();
    CoreView.prototype.clean.apply(this);
  },

  /**
   * @override cdb.ui.common.Dialog.prototype.render
   */
  render: function render() {
    this.$el.html(this.render_content());
    this.$el.addClass('Dialog-contentWrapper');
    this._onChangeSelected();
    return this;
  },

  /**
   * @implements cdb.ui.common.Dialog.prototype.render_content
   */
  render_content: function render_content() {
    switch (this.model.get('state')) {
      case 'saving':
        return loadingView({
          title: 'Adding users to group'
        });
      case 'passwordConfirmationFail':
        return requestErrorTemplate({
          msg: this.model.get('failMessage')
        });
      case 'saveFail':
        return errorTemplate({
          msg: ''
        });
      default:
        var $content = $(template());
        $content.find('.js-dlg-body').replaceWith(this._PagedSearchView.render().el);
        return $content;
    }
  },

  ok: function ok() {
    var _this = this;

    var selectedUsers = this._selectedUsers();

    if (!selectedUsers.length) return;

    if (!this._userModel.needsPasswordConfirmation()) {
      this.model.set('state', 'saving');
      return this._addUsers();
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        _this.model.set('state', 'saving');
        _this._addUsers(password);
      }
    });
  },

  _initViews: function _initViews() {
    this._PagedSearchView = new PagedSearchView({
      isUsedInDialog: true,
      pagedSearchModel: new PagedSearchModel({
        per_page: 50,
        order: 'username'
      }),
      collection: this._orgUsers,
      createListView: this._createUsersListView.bind(this)
    });

    this.addView(this._PagedSearchView);
  },

  _createUsersListView: function _createUsersListView() {
    return new GroupUsersListView({
      users: this._orgUsers
    });
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._orgUsers, 'change:selected', this._onChangeSelected);
    this.listenTo(this.model, 'change:state', this.render);
  },

  _onChangeSelected: function _onChangeSelected() {
    this.$('.ok').toggleClass('is-disabled', this._selectedUsers().length === 0);
  },

  _selectedUsers: function _selectedUsers() {
    return this._orgUsers.where({ selected: true });
  },

  _addUsers: function _addUsers(password) {
    var _this2 = this;

    var selectedUsers = this._selectedUsers();
    var ids = _.pluck(selectedUsers, 'id');

    this._group.users.addInBatch(ids, password).done(function () {
      _this2._group.users.add(selectedUsers);
      _this2._modalModel.destroy();
    }).fail(function (response) {
      var errors = responseParser(response) || '';

      if (errors.indexOf('Confirmation password') > -1) {
        return _this2.model.set({
          state: 'passwordConfirmationFail',
          failMessage: errors || ''
        });
      }

      _this2.model.set({ state: 'saveFail' });
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.tpl":
/*!*******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.tpl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Text Dialog-content Dialog-content--expanded">\n  <div class="Dialog-header Dialog-header--expanded CreateDialog-header">\n    <ul class="CreateDialog-headerSteps">\n      <li class="CreateDialog-headerStep CreateDialog-headerStep--single">\n        <div class="Dialog-headerIcon Dialog-headerIcon--neutral">\n          <i class="CDB-IconFont CDB-IconFont-boss"></i>\n        </div>\n        <p class="Dialog-headerTitle">Add users to this group</p>\n        <p class="Dialog-headerText">When sharing a dataset or map with a group all the users within that group will get the same permissions.</p>\n      </li>\n    </ul>\n  </div>\n  <div class="CDB-Text js-dlg-body"></div>\n\n  <div class="Dialog-stickyFooter">\n    <div class="Dialog-footer ChangePrivacy-shareFooter u-inner">\n      <div></div>\n      <button class="CDB-Button CDB-Button--primary ok is-disabled">\n        <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Add users</span>\n      </button>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group-view.js":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group-view.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var createGroupTemplate = __webpack_require__(/*! ./create-group.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'onCreated', 'flashMessageModel'];

/**
 * View to create a new group for an organization.
 */
module.exports = CoreView.extend({

  tagName: 'form',

  events: {
    'click .js-create': '_onClickCreate',
    'keyup .js-name': '_onChangeName'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.model = new Backbone.Model();
    this._initBinds();
  },

  render: function render() {
    if (this.model.get('isLoading')) {
      this.$el.html(loadingView({
        title: 'Creating group'
      }));
    } else {
      this.$el.html(createGroupTemplate());
    }
    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:isLoading', this.render);
  },

  _onClickCreate: function _onClickCreate(ev) {
    this.killEvent(ev);

    var name = this._name();

    if (name) {
      this.model.set('isLoading', true);

      this._group.save({ display_name: name }, {
        wait: true,
        success: this._onCreated,
        error: this._showErrors.bind(this)
      });
    }
  },

  _showErrors: function _showErrors(message, response, request) {
    this.model.set('isLoading', false);

    var flashMessage = 'Could not create group for some unknown reason, please try again';
    var jsonData = void 0;

    try {
      jsonData = response && JSON.parse(response.responseText);
    } catch (e) {
      jsonData = {};
    }

    if (jsonData && jsonData.errors) {
      flashMessage = jsonData.errors.join('. ');
    }

    this._flashMessageModel.show(flashMessage, 'error');
  },

  _onChangeName: function _onChangeName() {
    this._flashMessageModel.hide();
    this.$('.js-create').toggleClass('is-disabled', this._name().length === 0);
  },

  _name: function _name() {
    return this.$('.js-name').val();
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group.tpl":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/create-group/create-group.tpl ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="FormAccount-separator"></div>\n<div class="FormAccount-row">\n  <div class="FormAccount-rowLabel">\n    <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor" for="group-name">Group name</label>\n  </div>\n  <div class="FormAccount-rowData">\n    <input type="text" class="CDB-InputText CDB-Text js-name" id="group-name" size="30" maxlength="28" placeholder="Enter a name of group" />\n    <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n    </div>\n  </div>\n</div>\n<div class="FormAccount-footer u-justifyEnd">\n  <button class="CDB-Button CDB-Button--primary is-disabled js-create">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Create group</span>\n  </button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group-view.js":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group-view.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var template = __webpack_require__(/*! ./edit-group.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group.tpl");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'userModel', 'flashMessageModel', 'modals', 'onSaved', 'onDeleted'];

/**
 * View to edit an organization group.
 */
module.exports = CoreView.extend({
  tagName: 'form',

  events: {
    'click .js-delete': '_onClickDelete',
    'click .js-save': '_onClickSave',
    'submit form': '_onClickSave',
    'keyup .js-name': '_onChangeName'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.model = new Backbone.Model();
    this._initBinds();
  },

  render: function render() {
    if (this.model.get('isLoading')) {
      this.$el.html(loadingView({
        title: this.model.get('loadingText')
      }));
    } else {
      this.$el.html(template({ displayName: this._group.get('display_name') }));
    }
    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:isLoading', this.render);
  },

  _onClickSave: function _onClickSave(ev) {
    this.killEvent(ev);

    var name = this._name();

    if (name && name !== this._group.get('display_name')) {
      this._setLoading('Saving changes');
      this._group.save({ display_name: name }, {
        wait: true,
        success: this._onSaved,
        error: this._showErrors.bind(this)
      });
    }
  },

  _onClickDelete: function _onClickDelete(ev) {
    var _this = this;

    this.killEvent(ev);

    if (!this._userModel.needsPasswordConfirmation()) {
      return this._destroyGroup();
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        return _this._destroyGroup(password);
      }
    });
  },

  _destroyGroup: function _destroyGroup(password) {
    this._setLoading('Deleting group');

    this._group.destroy({
      wait: true,
      data: JSON.stringify(_extends({}, this._group.attributes, {
        password_confirmation: password
      })),
      contentType: 'application/json; charset=utf-8',
      success: this._onDeleted,
      error: this._showErrors.bind(this)
    });
  },

  _setLoading: function _setLoading(msg) {
    this._flashMessageModel.hide();

    this.model.set({
      isLoading: !!msg,
      loadingText: msg
    });
  },

  _showErrors: function _showErrors(message, response, request) {
    this._setLoading('');

    var flashMessage = 'Could not update group for some unknown reason, please try again';
    var jsonData = void 0;

    try {
      jsonData = response && JSON.parse(response.responseText);
    } catch (e) {
      jsonData = {};
    }

    if (jsonData && jsonData.errors) {
      flashMessage = jsonData.errors.join('. ');
    }

    this._flashMessageModel.show(flashMessage, 'error');
  },

  _onChangeName: function _onChangeName() {
    this.$('.js-save').toggleClass('is-disabled', this._name().length === 0);
    this._flashMessageModel.hide();
  },

  _name: function _name() {
    return this.$('.js-name').val();
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/edit-group/edit-group.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="FormAccount-separator"></div>\n\n<div class="FormAccount-row">\n  <div class="FormAccount-rowLabel">\n    <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor" for="group-name">Group name</label>\n  </div>\n  <div class="FormAccount-rowData">\n    <input type="text" class="CDB-InputText CDB-Text FormAccount-input FormAccount-input--med js-name" id="group-name" size="30" maxlength="28" value="' +
__e( displayName ) +
'" placeholder="Enter a name of group" />\n    <div class="FormAccount-rowInfo FormAccount-rowInfo--marginLeft">\n    </div>\n  </div>\n</div>\n<div class="FormAccount-footer">\n  <button type="submit" class="CDB-Button CDB-Button--error js-delete">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Delete this group</span>\n  </button>\n\n  <button type="submit" class="CDB-Button CDB-Button--primary js-save">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Save changes</span>\n  </button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra-view.js":
/*!**********************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra-view.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var AddGroupUsersView = __webpack_require__(/*! dashboard/views/organization/groups-admin/add-group-users/add-group-users-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/add-group-users/add-group-users-view.js");
var template = __webpack_require__(/*! ./add-or-remove-group-users-filters-extra.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra.tpl");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading.js */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var requestErrorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/request-error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/request-error-template.tpl");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var responseParser = __webpack_require__(/*! dashboard/helpers/response-parser */ "./lib/assets/javascripts/dashboard/helpers/response-parser.js");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'orgUsers', 'userModel'];

/**
 * View for the add/remove button in the filters part.
 */
module.exports = CoreView.extend({
  className: 'Filters-group',

  events: {
    'click .js-add-users': '_onClickAddUsers',
    'click .js-rm-users': '_onClickRemoveUsers'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._modals = new ModalsServiceModel();

    this.listenTo(this._group.users, 'change:selected', this._onChangeSelectedUser);
    this.listenTo(this._group.users, 'add remove reset', this.render);
  },

  render: function render() {
    this.$el.html(template());
    return this;
  },

  _onClickAddUsers: function _onClickAddUsers(event) {
    this.killEvent(event);
    this._openAddGroupsUsersDialog();
  },

  _openAddGroupsUsersDialog: function _openAddGroupsUsersDialog() {
    var _this = this;

    this._modals.create(function (modalModel) {
      return new AddGroupUsersView({
        group: _this._group,
        orgUsers: _this._orgUsers,
        modalModel: modalModel,
        userModel: _this._userModel
      });
    });
  },

  _onChangeSelectedUser: function _onChangeSelectedUser() {
    var hasSelectedUsers = this._selectedUsers().length > 0;
    this.$('.js-add-users').toggle(!hasSelectedUsers);
    this.$('.js-rm-users').toggle(hasSelectedUsers);
  },

  _onClickRemoveUsers: function _onClickRemoveUsers(ev) {
    var _this2 = this;

    this.killEvent(ev);

    if (!this._userModel.needsPasswordConfirmation()) {
      return this._removeUsers();
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        return _this2._removeUsers(password);
      }
    });
  },

  _removeUsers: function _removeUsers(password) {
    var _this3 = this;

    var selectedUsers = this._selectedUsers();

    if (selectedUsers.length > 0) {
      var userIds = _.pluck(selectedUsers, 'id');

      var modalModel = this._modals.create(function () {
        return _this3._createLoadingView();
      });

      this._group.users.removeInBatch(userIds, password).always(function () {
        modalModel.destroy();
      }).fail(function (response) {
        modalModel.destroy();

        var errors = responseParser(response) || '';

        if (errors.indexOf('Confirmation password') > -1) {
          return _this3._modals.create(function (modalModel) {
            return ViewFactory.createByHTML(requestErrorTemplate({ msg: errors }));
          });
        }

        _this3._modals.create(function (modalModel) {
          return ViewFactory.createByHTML(errorTemplate({ msg: errors }));
        });
      });
    }
  },

  _createLoadingView: function _createLoadingView() {
    return ViewFactory.createByHTML(loadingView({
      title: 'Removing users',
      descHTML: randomQuote()
    }));
  },

  _selectedUsers: function _selectedUsers() {
    return this._group.users.where({ selected: true });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra.tpl":
/*!******************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra.tpl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<button class="CDB-Button CDB-Button--primary js-add-users">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Add users</span>\n</button>\n<button class="CDB-Button CDB-Button--error js-rm-users" style="display: none;">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Remove from group</span>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra-view.js":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra-view.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var template = __webpack_require__(/*! ./empty-group-filters-extra.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra.tpl");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading.js */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var requestErrorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/request-error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/request-error-template.tpl");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var responseParser = __webpack_require__(/*! dashboard/helpers/response-parser */ "./lib/assets/javascripts/dashboard/helpers/response-parser.js");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['groupUsers', 'orgUsers', 'userModel'];

/**
 * View for the add users button and state.
 */
module.exports = CoreView.extend({
  className: 'Filters-group',

  events: {
    'click .js-add-users': '_onClickAddUsers'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._modals = new ModalsServiceModel();

    // Init binds
    this.listenTo(this._orgUsers, 'change:selected', this._onChangeSelectedUser);
  },

  render: function render() {
    this.$el.html(template());
    return this;
  },

  _onChangeSelectedUser: function _onChangeSelectedUser() {
    this.$('.js-add-users').toggleClass('is-disabled', this._selectedUsers().length === 0);
  },

  _onClickAddUsers: function _onClickAddUsers(ev) {
    var _this = this;

    this.killEvent(ev);

    if (!this._userModel.needsPasswordConfirmation()) {
      return this._addUsers();
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        return _this._addUsers(password);
      }
    });
  },

  _addUsers: function _addUsers(password) {
    var _this2 = this;

    var selectedUsers = this._selectedUsers();

    if (selectedUsers.length > 0) {
      var userIds = _.pluck(selectedUsers, 'id');

      var modalModel = this._modals.create(function (modalModel) {
        return _this2._createLoadingView();
      });

      this._groupUsers.addInBatch(userIds, password).always(function () {
        return modalModel.destroy();
      }).fail(function (response) {
        var errors = responseParser(response) || '';

        if (errors.indexOf('Confirmation password') > -1) {
          return _this2._modals.create(function (modalModel) {
            return ViewFactory.createByHTML(requestErrorTemplate({ msg: errors }));
          });
        }

        _this2._modals.create(function (modalModel) {
          return ViewFactory.createByHTML(errorTemplate({ msg: errors }));
        });
      });
    }
  },

  _createLoadingView: function _createLoadingView() {
    return ViewFactory.createByHTML(loadingView({
      title: 'Adding users',
      descHTML: randomQuote()
    }));
  },

  _selectedUsers: function _selectedUsers() {
    return this._orgUsers.where({ selected: true });
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra.tpl":
/*!****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra.tpl ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<button class="CDB-Button CDB-Button--primary is-disabled js-add-users">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Add users</span>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header-view.js":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header-view.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var pluralizeString = __webpack_require__(/*! dashboard/helpers/pluralize */ "./lib/assets/javascripts/dashboard/helpers/pluralize.js");
var template = __webpack_require__(/*! ./group-header.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'urls'];

/**
 * Header view when looking at details of a specific group.
 */
module.exports = CoreView.extend({
  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._group, 'change:display_name', this.render);
    this.listenTo(this._group.users, 'reset add remove', this.render);
  },

  render: function render() {
    this._$orgSubheader().hide();

    var isNewGroup = this._group.isNew();
    var templateData = {
      backUrl: this._urls.root,
      title: this._group.get('display_name') || 'Create new group',
      isNewGroup: isNewGroup,
      usersUrl: false
    };

    if (isNewGroup) {
      templateData.editUrl = window.location;
      templateData.editUrl.isCurrent = true;
    } else {
      templateData.editUrl = this._urls.edit;
      templateData.usersUrl = this._urls.users;

      var usersCount = this._group.users.length;
      templateData.usersLabel = usersCount === 0 ? 'Users' : usersCount + ' ' + pluralizeString('User', 'Users', usersCount);

      if (!this._urls.users.isCurrent) {
        templateData.backUrl = this._urls.users;
      }
    }

    this.$el.html(template(templateData));
    return this;
  },

  _$orgSubheader: function _$orgSubheader() {
    return $('.js-org-subheader');
  },

  clean: function clean() {
    this._$orgSubheader().show();
    CoreView.prototype.clean.call(this);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header.tpl":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-header/group-header.tpl ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="Filters is-relative">\n  <span class="Filters-separator"></span>\n  <div class="Filters-inner">\n    <div class="Filters-row">\n      <ul class="Filters-group CDB-Text CDB-Size-medium">\n        <li class="u-flex u-alignCenter">\n          <a href="' +
__e( backUrl ) +
'" class="u-actionTextColor u-flex u-alignCenter">\n            <i class="CDB-IconFont CDB-IconFont-arrowPrev u-rSpace--xl"></i>\n          </a>\n        </li>\n        <li class="Filters-typeItem">\n          <div class="FormAccount-title">\n            <p class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor">' +
__e( title ) +
'</p>\n          </div>\n        </li>\n      </ul>\n      <ul class="Filters-group CDB-Text CDB-Size-medium">\n        ';
 if (usersUrl) { ;
__p += '\n          <li class="Filters-typeItem">\n            <a href="' +
__e( usersUrl ) +
'" class="CDB-Text CDB-Size-medium u-mainTextColor Filters-typeLink ' +
__e( usersUrl.isCurrent ? 'is-selected' : '' ) +
'">\n              ' +
__e( usersLabel ) +
'\n            </a>\n          </li>\n        ';
 } ;
__p += '\n        <li class="Filters-typeItem">\n          <a href="' +
__e( editUrl ) +
'" class="CDB-Text CDB-Size-medium u-mainTextColor Filters-typeLink ' +
__e( editUrl.isCurrent ? 'is-selected' : '' ) +
'">\n            Settings\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-filters-extra.tpl":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-filters-extra.tpl ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="' +
__e( createGroupUrl ) +
'" class="CDB-Button CDB-Button--primary">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Create new group</span>\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var GroupsListView = __webpack_require__(/*! dashboard/views/organization/groups-admin/groups-list/groups-list-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-list/groups-list-view.js");
var groupsIndexFiltersExtraTemplate = __webpack_require__(/*! ./group-index-filters-extra.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-index/group-index-filters-extra.tpl");
var PagedSearchView = __webpack_require__(/*! dashboard/components/paged-search/paged-search-view */ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-view.js");
var PagedSearchModel = __webpack_require__(/*! dashboard/data/paged-search-model */ "./lib/assets/javascripts/dashboard/data/paged-search-model.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['groups', 'router', 'newGroupUrl'];

/**
 * Index view of groups to list groups of an organization
 */
module.exports = CoreView.extend({

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    this.clearSubViews();

    var pagedSearchView = new PagedSearchView({
      pagedSearchModel: new PagedSearchModel({
        fetch_users: true,
        fetch_shared_maps_count: true,
        fetch_shared_tables_count: true
      }),
      collection: this._groups,
      createListView: this._createGroupsView.bind(this),
      thinFilters: true,
      filtersExtrasView: this._createFiltersExtraView(),
      noResults: {
        icon: 'CDB-IconFont-group',
        title: 'You have not created any groups yet',
        msg: 'Creating groups enables you to visualize and search for user members assigned to a business group or team in your organization.'
      }
    });
    this.addView(pagedSearchView);

    this.$el.empty();
    this.$el.append(pagedSearchView.render().el);
    return this;
  },

  _createGroupsView: function _createGroupsView() {
    return new GroupsListView({
      groups: this._groups,
      newGroupUrl: this._newGroupUrl
    });
  },

  _createFiltersExtraView: function _createFiltersExtraView() {
    return ViewFactory.createByTemplate(groupsIndexFiltersExtraTemplate, {
      createGroupUrl: this._router._rootUrl.urlToPath('new')
    }, {
      className: 'Filters-group'
    });
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user-view.js":
/*!********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user-view.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./group-user.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user.tpl");
var pluralizeStr = __webpack_require__(/*! dashboard/helpers/pluralize */ "./lib/assets/javascripts/dashboard/helpers/pluralize.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['model'];

/**
 * View of a single group user.
 */
module.exports = CoreView.extend({
  tagName: 'li',
  className: 'OrganizationList-user is-selectable',
  events: {
    'click': '_onClick'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:selected', this._onChangeSelected);
  },

  render: function render() {
    this.$el.html(template({
      avatarUrl: this.model.get('avatar_url'),
      username: this.model.get('username'),
      email: this.model.get('email'),
      maps_count: pluralizeStr.prefixWithCount('map', 'maps', this.model.get('all_visualization_count')),
      table_count: pluralizeStr.prefixWithCount('dataset', 'datasets', this.model.get('table_count'))
    }));

    return this;
  },

  _onChangeSelected: function _onChangeSelected(model, isSelected) {
    this.$el.toggleClass('is-selected', !!isSelected);
  },

  _onClick: function _onClick(ev) {
    this.killEvent(ev);
    this.model.set('selected', !this.model.get('selected'));
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user.tpl":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user.tpl ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="CDB-Text OrganizationList-userLink">\n  <div class="OrganizationList-userAvatar UserAvatar">\n    <img src="' +
__e( avatarUrl ) +
'" alt="' +
__e( username ) +
'" src="' +
__e( username ) +
'" class="UserAvatar-img UserAvatar-img--medium-large OrganizationList-userAvatar--img" />\n  </div>\n  <div class="OrganizationList-userInfo">\n    <div class="OrganizationList-userInfoName">\n      <h3 class="CDB-Size-medium OrganizationList-userInfoTitle u-ellipsLongText" title="' +
__e( username ) +
'">\n        ' +
__e( username ) +
'\n      </h3>\n      <h4 class="CDB-Text CDB-Size-small u-ellipis u-secondaryTextColor" title="' +
__e( email ) +
'">\n        ' +
__e( email ) +
'\n      </h4>\n    </div>\n    <div class="OrganizationList-userInfoData CDB-Text CDB-Size-small u-altTextColor u-alignCenter">\n      <p class="u-flex u-alignCenter">\n        <i class="CDB-IconFont CDB-IconFont-map OrganizationList-userInfoData--paragraph-icon"></i>\n        ' +
__e( maps_count ) +
'\n      </p>\n      <p class="u-flex u-alignCenter u-lSpace--xl">\n        <i class="CDB-IconFont CDB-IconFont-rows OrganizationList-userInfoData--paragraph-icon"></i>\n        ' +
__e( table_count ) +
'\n      </p>\n    </div>\n  </div>\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users-list/group-users-list-view.js":
/*!********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users-list/group-users-list-view.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var GroupUserView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-user/group-user-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-user/group-user-view.js");

var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['users'];

/**
 * View of group users.
 */
module.exports = CoreView.extend({
  tagName: 'ul',
  className: 'OrganizationList',

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    // init binds
    this.listenTo(this._users, 'reset add remove', this.render);
  },

  render: function render() {
    this.clearSubViews();
    this._renderUsers();
    return this;
  },

  _renderUsers: function _renderUsers() {
    this._users.each(this._createUserView, this);
  },

  _createUserView: function _createUserView(user) {
    var view = new GroupUserView({
      model: user
    });

    this.addView(view);
    this.$el.append(view.render().el);
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users/group-users-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users/group-users-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var PagedSearchView = __webpack_require__(/*! dashboard/components/paged-search/paged-search-view */ "./lib/assets/javascripts/dashboard/components/paged-search/paged-search-view.js");
var PagedSearchModel = __webpack_require__(/*! dashboard/data/paged-search-model */ "./lib/assets/javascripts/dashboard/data/paged-search-model.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var loadingTemplate = __webpack_require__(/*! builder/components/loading/loading.tpl */ "./lib/assets/javascripts/builder/components/loading/loading.tpl");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");
var AddRemoveFiltersExtraView = __webpack_require__(/*! dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/add-or-remove-group-users-filters-extra-view.js");
var EmptyGroupFiltersExtraView = __webpack_require__(/*! dashboard/views/organization/groups-admin/filters/empty-group-filters-extra-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/filters/empty-group-filters-extra-view.js");
var GroupUsersListView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-users-list/group-users-list-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-users-list/group-users-list-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['group', 'orgUsers', 'userModel'];

/**
 * View to manage users of a group
 * It basically has two states, each which relies on its own collection:
 * - Empty group: i.e. no users, show organization users and allow to add users directly by selecting
 * - Group users: allow to add or remove users from group.
 */
module.exports = CoreView.extend({
  initialize: function initialize(options) {
    var _this = this;

    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._groupUsers = this._group.users;
    this._hasPrefetchedGroupUsers = false;
    this._orgUsers.excludeCurrentUser(false);

    this.model = new Backbone.Model({
      hasPrefetchedGroupUsers: false,
      lastRendered: null //, 'groupUsers', 'empty'
    });

    // Init binds
    this.listenTo(this._groupUsers, 'sync', this._onResetGroupUsers);

    // Pre-fetch to know what view to render
    this._groupUsers.fetch({
      success: function success() {
        _this.model.set('hasPrefetchedGroupUsers', true);
        _this.render();
      }
    });
  },

  render: function render() {
    this.clearSubViews();
    this.$el.empty();

    var view = void 0;
    if (this.model.get('hasPrefetchedGroupUsers')) {
      view = this._groupUsers.totalCount() > 0 ? this._createViewForGroupUsers() : this._createViewForEmptyGroup();
    } else {
      view = this._createInitialPreloadingView();
    }

    this.addView(view);
    this.$el.append(view.render().el);

    return this;
  },

  clean: function clean() {
    this._orgUsers.restoreExcludeCurrentUser();
    CoreView.prototype.clean.apply(this);
  },

  _createInitialPreloadingView: function _createInitialPreloadingView() {
    return ViewFactory.createByTemplate(loadingTemplate, {
      title: 'Getting users',
      descHTML: randomQuote()
    });
  },

  _createViewForGroupUsers: function _createViewForGroupUsers() {
    this.model.set('lastRendered', 'groupUsers');

    var filtersExtrasView = new AddRemoveFiltersExtraView({
      group: this._group,
      orgUsers: this._orgUsers,
      userModel: this._userModel
    });
    this.addView(filtersExtrasView);

    return new PagedSearchView({
      pagedSearchModel: new PagedSearchModel(),
      collection: this._groupUsers,
      createListView: this._createGroupUsersListView.bind(this, this._groupUsers),
      thinFilters: true,
      filtersExtrasView: filtersExtrasView
    });
  },

  _createViewForEmptyGroup: function _createViewForEmptyGroup() {
    this.model.set('lastRendered', 'empty');

    var filtersExtrasView = new EmptyGroupFiltersExtraView({
      groupUsers: this._groupUsers,
      orgUsers: this._orgUsers,
      userModel: this._userModel
    });
    this.addView(filtersExtrasView);

    return new PagedSearchView({
      pagedSearchModel: new PagedSearchModel(),
      collection: this._orgUsers,
      createListView: this._createGroupUsersListView.bind(this, this._orgUsers),
      thinFilters: true,
      filtersExtrasView: filtersExtrasView
    });
  },

  _createGroupUsersListView: function _createGroupUsersListView(usersCollection) {
    return new GroupUsersListView({
      users: usersCollection
    });
  },

  _onResetGroupUsers: function _onResetGroupUsers() {
    // just this.render() is not enough, because each sub-view re-renders its view on state changes,
    // Instead, only re-render when hitting the edge-cases after a rest
    var lastRendered = this.model.get('lastRendered');
    var totalGroupUsersCount = this._groupUsers.totalCount();

    if (lastRendered === 'empty') {
      // scenario: added at least one user, so group is no longer empty => change to group users view to add users
      if (totalGroupUsersCount > 0) {
        this.render();
      }
    } else if (lastRendered === 'groupUsers') {
      // scenario: removed last group user(s), so the group is now "empty" => change to org users view to add users
      if (totalGroupUsersCount === 0) {
        this.render();
      }
    }
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group-view.js":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group-view.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./group.tpl */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group.tpl");
var pluralizeStr = __webpack_require__(/*! dashboard/helpers/pluralize */ "./lib/assets/javascripts/dashboard/helpers/pluralize.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['model', 'url'];

/**
 * View for an individual group.
 */
module.exports = CoreView.extend({
  tagName: 'li',
  className: 'OrganizationList-user',
  _PREVIEW_COUNT: 3,

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    var sharedMapsCount = this.model.get('shared_maps_count');
    var sharedDatasetsCount = this.model.get('shared_tables_count');

    this.$el.html(template({
      displayName: this.model.get('display_name'),
      sharedMapsCount: pluralizeStr('1 shared map', sharedMapsCount + ' shared maps', sharedMapsCount),
      sharedDatasetsCount: pluralizeStr('1 shared dataset', sharedDatasetsCount + ' shared datasets', sharedDatasetsCount),
      url: this._url,
      previewUsers: this.model.users.toArray().slice(0, this._PREVIEW_COUNT),
      usersCount: Math.max(this.model.users.length - this._PREVIEW_COUNT, 0)
    }));
    return this;
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a class="CDB-Text OrganizationList-userLink" href="' +
__e( url ) +
'">\n  <div class="OrganizationList-userInfo">\n    <div class="OrganizationList-userInfoName">\n      <h3 class="CDB-Size-medium OrganizationList-userInfoTitle u-ellipsLongText" title="' +
__e( displayName ) +
'">\n        ' +
__e( displayName ) +
'\n      </h3>\n      <h4 class="OrganizationList-userInfoSubtitle u-ellipsLongText">\n        ' +
__e( sharedMapsCount ) +
' &bull; ' +
__e( sharedDatasetsCount ) +
'\n      </h4>\n    </div>\n  </div>\n  <div class="OrganizationList-userInfoData">\n    ';
 previewUsers.forEach(function(u) { ;
__p += '\n        <span class="UserAvatar is-in-list">\n          <img class="UserAvatar-img UserAvatar-img--medium" src="' +
__e( u.get('avatar_url') ) +
'" title="' +
__e( u.nameOrUsername() ) +
'" />\n        </span>\n    ';
 }) ;
__p += '\n    ';
 if (usersCount > 0) { ;
__p += '\n      <span class="UserAvatar is-in-list">\n        <span class="UserAvatar-img UserAvatar-img--medium UserAvatar-img--textReplacement">\n          +' +
__e( usersCount ) +
'\n        </span>\n      </span>\n    ';
 } ;
__p += '\n  </div>\n</a>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-list/groups-list-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-list/groups-list-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var GroupView = __webpack_require__(/*! dashboard/views/organization/groups-admin/group-view/group-view */ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/group-view/group-view.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['groups', 'newGroupUrl'];

module.exports = CoreView.extend({
  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    this.clearSubViews();
    this.$el.empty();
    this._renderGroupsView();
    return this;
  },

  _renderGroupsView: function _renderGroupsView() {
    var view = ViewFactory.createListView(this._createGroupViews(), {
      tagName: 'ul',
      className: 'OrganizationList'
    });
    this.addView(view);
    this.$el.append(view.render().el);
  },

  _createGroupViews: function _createGroupViews() {
    var _this = this;

    return this._groups.map(function (model) {
      return function () {
        return new GroupView({
          model: model,
          url: _this._newGroupUrl(model)
        });
      };
    });
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-main-view.js":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/groups-main-view.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var navigateThroughRouter = __webpack_require__(/*! builder/helpers/navigate-through-router */ "./lib/assets/javascripts/builder/helpers/navigate-through-router.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['routerModel'];

/**
 * Controller view, managing view state of the groups entry point
 */
module.exports = CoreView.extend({
  events: {
    'click': '_onClick'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();
    this.$el.html(this._contentView().render().el);
    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._routerModel.model, 'change:view', this._onChangeView);
  },

  _onChangeView: function _onChangeView(model) {
    model.previous('view').clean();
    this.render();
  },

  _contentView: function _contentView() {
    return this._routerModel.model.get('view');
  },

  _onClick: function _onClick(event) {
    if (!this._isEventTriggeredOutsideOf(event, 'a')) {
      var url = $(event.target).closest('a').attr('href');
      if (this._routerModel.isWithinCurrentRoutes(url)) {
        navigateThroughRouter.apply(this, arguments);
      }
    }
  },

  _isEventTriggeredOutsideOf: function _isEventTriggeredOutsideOf(ev, selector) {
    return $(ev.target).closest(selector).length === 0;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/groups-admin/router-model.js":
/*!******************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/groups-admin/router-model.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var loadingTemplate = __webpack_require__(/*! builder/components/loading/loading.tpl */ "./lib/assets/javascripts/builder/components/loading/loading.tpl");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var randomQuote = __webpack_require__(/*! builder/components/loading/random-quote */ "./lib/assets/javascripts/builder/components/loading/random-quote.js");

/**
 * Model representing the router state
 */
module.exports = Backbone.Model.extend({
  defaults: {
    view: ''
  },

  createGroupView: function createGroupView(groups, id, fetchedCallback) {
    var _this = this;

    var group = groups.newGroupById(id);
    fetchedCallback = fetchedCallback.bind(this, group);

    var setFetchedCallbackView = function setFetchedCallbackView() {
      _this.set('view', fetchedCallback());
    };

    if (group.get('display_name')) {
      setFetchedCallbackView();
    } else {
      // No display name == model not fetched yet, so show loading msg meanwhile
      this.createLoadingView('Loading group details');

      group.fetch({
        data: {
          fetch_users: true
        },
        success: function success() {
          groups.add(group);
          setFetchedCallbackView();
        },
        error: this.createErrorView.bind(this)
      });
    }
  },

  createLoadingView: function createLoadingView(msg) {
    this.set('view', ViewFactory.createByTemplate(loadingTemplate, {
      title: msg,
      descHTML: randomQuote()
    }));
  },

  createErrorView: function createErrorView() {
    // Generic error view for now
    this.set('view', ViewFactory.createByTemplate(errorTemplate, {
      msg: ''
    }));
  }

});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/header-view-model.js":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/header-view-model.js ***!
  \**********************************************************************************/
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

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog-view.js":
/*!***********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog-view.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var OrganizationIconsView = __webpack_require__(/*! ../icons/organization-icons-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons-view.js");
var template = __webpack_require__(/*! ./icon-picker-dialog.tpl */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog.tpl");

var REQUIRED_OPTS = ['orgId', 'configModel'];

module.exports = CoreView.extend({

  className: 'Dialog Modal IconPickerDialog',

  events: {
    'click .js-addIcon': '_onAddIconClicked'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    this.clearSubViews();

    this.$el.html(template());
    this.$('.content').addClass('Dialog-content--expanded');

    this._initViews();

    return this;
  },

  _initViews: function _initViews() {
    this.icon_picker = new OrganizationIconsView({
      el: this.$('.js-dialogIconPicker'),
      orgId: this._orgId,
      configModel: this._configModel
    });
    this.addView(this.icon_picker);

    this.icon_picker.model.on('change:isProcessRunning', this._onIsProcessRunningChanged, this);
  },

  _onIsProcessRunningChanged: function _onIsProcessRunningChanged() {
    var running = this.icon_picker.model.get('isProcessRunning');
    if (running) {
      this.$el.css('pointer-events', 'none');
    } else {
      this.$el.css('pointer-events', 'auto');
    }
  },

  _onAddIconClicked: function _onAddIconClicked(event) {
    this.killEvent(event);

    this._hideErrorMessage();
    this.$('.js-inputFile').trigger('click');
  },

  _hideErrorMessage: function _hideErrorMessage() {
    this._hide('.js-errorMessage');
  },

  _hide: function _hide(selector) {
    this.$(selector).addClass('is-hidden');
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog.tpl":
/*!*******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog.tpl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="Modal-header">\n  <div class="Modal-headerContainer">\n    <h2 class="CDB-Text CDB-Size-huge is-light u-bSpace">Organization icons</h2>\n    <h3 class="CDB-Text CDB-Size-medium u-altTextColor"><a data-type="upload_file" href="#/upload" class="js-addIcon">Upload organization icons</a></h3>\n  </div>\n</div>\n\n<div class="Modal-container IconModal">\n  <div class="Tab-pane">\n    <div class="Modal-inner">\n      <div class="Dialog-body Dialog-body--expanded Dialog-body--create Dialog-body--withoutBorder">\n        <div class="u-inner">\n          <div class="js-dialogIconPicker"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog-view.js":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog-view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./delete-icons-dialog.tpl */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['modalModel', 'onSubmit'];

module.exports = CoreView.extend({
  events: {
    'click .js-submit': '_onSubmitClicked',
    'click .js-cancel': '_closeDialog'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._numOfIcons = this.options.numOfIcons || 0;
  },

  render: function render() {
    this.$el.html(template({
      numOfIcons: this._numOfIcons
    }));
  },

  _onSubmitClicked: function _onSubmitClicked() {
    this._onSubmit();
    this._closeDialog();
  },

  _closeDialog: function _closeDialog() {
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Text Dialog-header u-inner">\n  <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n    <i class="CDB-IconFont CDB-IconFont-trash"></i>\n    ';
 if (numOfIcons > 0) { ;
__p += '\n    <span class="Badge Badge--negative Dialog-headerIconBadge CDB-Text CDB-Size-small">' +
__e( numOfIcons ) +
'</span>\n    ';
 } ;
__p += '\n  </div>\n  <h4 class="CDB-Text CDB-Size-large u-mainTextColor u-secondaryTextColor u-bSpace--m u-tSpace-xl">\n    You are deleting\n    ';
 if (numOfIcons <= 0) { ;
__p += '\n      icons\n    ';
 } else if (numOfIcons === 1) { ;
__p += '\n      1 icon\n    ';
 } else { ;
__p += '\n      ' +
__e( numOfIcons  ) +
' icons\n    ';
 } ;
__p += '\n    from your organization.\n  </h4>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">\n    Once icons are deleted they cannot be recovered. Any maps within the organization that use\n    ';
 if (numOfIcons === 1) { ;
__p += '\n      this icon\n    ';
 } else { ;
__p += '\n      these icons\n    ';
 } ;
__p += '\n    will be adversely affected.\n  </p>\n  <p class="CDB-Text CDB-Size-medium u-altTextColor">Please be sure before proceeding.</p>\n</div>\n\n<div class="Dialog-footer Dialog-footer--simple u-inner">\n  <div class="Dialog-footerContent">\n    <button class="CDB-Button CDB-Button--secondary js-cancel">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Cancel</span>\n    </button>\n    <button class="u-lSpace--xl CDB-Button CDB-Button--error js-submit">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Ok, delete</span>\n    </button>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-collection.js":
/*!***************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-collection.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var IconModel = __webpack_require__(/*! ./organization-icon-model */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-model.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['orgId', 'configModel'];

module.exports = Backbone.Collection.extend({
  initialize: function initialize(models, options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  model: function model(attrs, opts) {
    var options = _extends({}, opts, { configModel: opts.collection._configModel });

    return new IconModel(attrs, options);
  },

  url: function url(method) {
    var version = this._configModel.urlVersion('organization-assets', method);

    return '/api/' + version + '/organization/' + this._orgId + '/assets';
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-model.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-model.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['configModel'];

module.exports = Backbone.Model.extend({
  defaults: {
    selected: false,
    visible: false,
    deleted: false
  },

  fileAttribute: 'resource',

  initialize: function initialize(models, options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  save: function save(attrs) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    attrs = attrs || _.clone(this.attributes);

    attrs = _.omit(attrs, ['selected', 'visible', 'deleted']);
    options.data = JSON.stringify(attrs);

    return Backbone.Model.prototype.save.call(this, attrs, options);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-view.js":
/*!*********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-view.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./organization-icon.tpl */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon.tpl");

module.exports = CoreView.extend({
  tagName: 'li',

  className: 'IconList-item IconList-item--small',

  events: {
    'click': '_onClick'
  },

  initialize: function initialize(options) {
    if (_.isUndefined(options.model)) {
      throw new Error('An organization icon model is mandatory.');
    }

    this._initBinds();
  },

  render: function render() {
    this.$el.html(template({
      url: this.model.get('public_url')
    }));

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:selected', this._onSelectedChanged);
    this.listenTo(this.model, 'change:deleted', this._onDeletedChanged);
  },

  _onClick: function _onClick() {
    this.model.set('selected', !this.model.get('selected'));
  },

  _onSelectedChanged: function _onSelectedChanged() {
    this.$el.toggleClass('is-selected', this.model.get('selected'));
  },

  _onDeletedChanged: function _onDeletedChanged() {
    if (this.model.get('deleted')) {
      this.$el.remove();
    }
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="IconItem-icon js-asset">\n  <img height="24" src="' +
__e( url ) +
'" alt="icon" crossorigin="anonymous" />\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var IconCollection = __webpack_require__(/*! ./organization-icon-collection */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-collection.js");
var IconView = __webpack_require__(/*! ./organization-icon-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-view.js");
var DeleteIconsDialog = __webpack_require__(/*! ./delete-icons-dialog-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/delete-icons-dialog-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var template = __webpack_require__(/*! ./organization-icons.tpl */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['orgId', 'configModel'];

module.exports = CoreView.extend({

  events: {
    'click .js-addIcon': '_onAddIconClicked',
    'click .js-selectAllIcons': '_onSelectAllIconsClicked',
    'click .js-deselectAllIcons': '_onDeselectAllIconsClicked',
    'click .js-deleteIcons': '_onDeleteIconsClicked',
    'change .js-inputFile': '_onFileSelected'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._modals = new ModalsServiceModel();
    this.model = new Backbone.Model({
      isProcessRunning: false
    });
    this._iconCollection = new IconCollection(null, {
      orgId: this._orgId,
      configModel: this._configModel
    });
    this._numOfUploadingProcesses = 0;
    this._numOfDeletingProcesses = 0;
    this._fetchErrorMessage = 'Error fetching organization icons. Please refresh the page.';
    this._runningMessage = '';

    this.render();
    this._fetchAllIcons();
    this._initBinds();
  },

  render: function render() {
    this.$el.html(template());

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._iconCollection, 'change:selected', this._refreshActions);
    this.listenTo(this.model, 'change:isProcessRunning', this._onProcessRunningChanged);
  },

  _fetchAllIcons: function _fetchAllIcons() {
    this._iconCollection.fetch({
      success: this._renderAllIcons.bind(this),
      error: this._onFetchIconsError.bind(this)
    });
  },

  _renderAllIcons: function _renderAllIcons() {
    _.each(this._iconCollection.models, this._addIconElement, this);
  },

  _onFetchIconsError: function _onFetchIconsError() {
    this._showErrorMessage(this._fetchErrorMessage);
  },

  _renderIcon: function _renderIcon(iconModel) {
    var iconView = new IconView({
      model: iconModel
    });
    iconView.render();
    iconModel.set('visible', true);
    this.$('.js-items').append(iconView.$el);
  },

  _addIconElement: function _addIconElement(iconModel) {
    this._renderIcon(iconModel);
  },

  _onAddIconClicked: function _onAddIconClicked(event) {
    this.killEvent(event);

    this._hideErrorMessage();
    this.$('.js-inputFile').trigger('click');
  },

  _parseResponseText: function _parseResponseText(response) {
    if (response && response.responseText) {
      try {
        var text = JSON.parse(response.responseText);
        if (text && text.errors && typeof text.errors === 'string') {
          return text.errors;
        }
      } catch (exc) {
        // Swallow
      }
    }
    return '';
  },

  _getSelectedFiles: function _getSelectedFiles() {
    return this.$('.js-inputFile').prop('files');
  },

  _onFileSelected: function _onFileSelected() {
    var files = this._getSelectedFiles();

    _.each(files, function (file) {
      this._iconCollection.create({
        kind: 'organization_asset',
        resource: file
      }, {
        beforeSend: this._beforeIconUpload.bind(this),
        success: this._onIconUploaded.bind(this),
        error: this._onIconUploadError.bind(this),
        complete: this._onIconUploadComplete.bind(this)
      });
    }, this);
  },

  _beforeIconUpload: function _beforeIconUpload() {
    this._numOfUploadingProcesses++;
    if (this._numOfUploadingProcesses > 0) {
      this._runningMessage = 'Uploading icons...';
      this.model.set('isProcessRunning', true);
    }
  },

  _onIconUploaded: function _onIconUploaded(iconModel) {
    this._resetFileSelection();
    this._addIconElement(iconModel);
  },

  _onIconUploadError: function _onIconUploadError(model, response) {
    var errorText = this._parseResponseText(response);
    this._resetFileSelection();
    this._showErrorMessage(this._uploadErrorMessage(errorText));
  },

  _onIconUploadComplete: function _onIconUploadComplete() {
    this._numOfUploadingProcesses--;
    if (this._numOfUploadingProcesses <= 0) {
      this.model.set('isProcessRunning', false);
    }
  },

  _resetFileSelection: function _resetFileSelection() {
    this.$('.js-inputFile').val('');
  },

  _show: function _show(selector) {
    this.$(selector).removeClass('is-hidden');
  },

  _hide: function _hide(selector) {
    this.$(selector).addClass('is-hidden');
  },

  _refreshActions: function _refreshActions() {
    if (this.model.get('isProcessRunning')) {
      return;
    }
    var limit = Math.min(this._iconCollection.length);
    var numOfSelectedIcons = this._getNumberOfSelectedIcons();
    var iconText = numOfSelectedIcons === 1 ? '1 icon selected' : '' + numOfSelectedIcons + ' icons selected';
    this.$('.js-iconMainLabel').text(iconText);

    if (numOfSelectedIcons === 0) {
      this.$('.js-iconMainLabel').text('');
      this._hide('.js-iconMainLabel, .js-selectAllIcons, .js-deselectAllIcons, .js-deleteIcons');
      this._show('.js-iconsInfo');
    } else if (numOfSelectedIcons < limit) {
      this._show('.js-iconMainLabel, .js-selectAllIcons, .js-deleteIcons');
      this._hide('.js-deselectAllIcons, .js-iconsInfo');
    } else {
      this._show('.js-iconMainLabel, .js-deselectAllIcons, .js-deleteIcons');
      this._hide('.js-selectAllIcons, .js-iconsInfo');
    }

    if (numOfSelectedIcons > 1) {
      this.$('.js-deleteIcons a').text('Delete icons...');
    } else if (numOfSelectedIcons === 1) {
      this.$('.js-deleteIcons a').text('Delete icon...');
    }
  },

  _hideActions: function _hideActions() {
    this._hide('.js-selectAllIcons, .js-deselectAllIcons, .js-deleteIcons, .js-iconsInfo');
  },

  _onDeselectAllIconsClicked: function _onDeselectAllIconsClicked(event) {
    event.preventDefault();
    this._iconCollection.each(function (icon) {
      icon.set('selected', false);
    });
  },

  _onSelectAllIconsClicked: function _onSelectAllIconsClicked(event) {
    event.preventDefault();
    this._iconCollection.each(function (icon) {
      if (icon.get('visible')) {
        icon.set('selected', true);
      }
    });
  },

  _onDeleteIconsClicked: function _onDeleteIconsClicked(event) {
    event.preventDefault();
    this._openDeleteIconsDialog();
  },

  _openDeleteIconsDialog: function _openDeleteIconsDialog(event) {
    var _this = this;

    this.killEvent(event);

    this._modals.create(function (modalModel) {
      return new DeleteIconsDialog({
        modalModel: modalModel,
        numOfIcons: _this._getNumberOfSelectedIcons(),
        onSubmit: _this._deleteIcons.bind(_this)
      });
    });
  },

  _deleteIcons: function _deleteIcons() {
    this._hideErrorMessage();
    var iconsToDelete = this._iconCollection.where({ selected: true });

    _.each(iconsToDelete, function (icon) {
      icon.destroy({
        beforeSend: this._beforeIconDelete.bind(this),
        success: this._onIconDeleted.bind(this),
        error: this._onIconDeleteError.bind(this),
        complete: this._onIconDeleteComplete.bind(this)
      });
    }, this);
  },

  _getNumberOfSelectedIcons: function _getNumberOfSelectedIcons() {
    return this._iconCollection.where({ selected: true }).length;
  },

  _beforeIconDelete: function _beforeIconDelete() {
    this._numOfDeletingProcesses++;
    if (this._numOfDeletingProcesses > 0) {
      this._runningMessage = 'Deleting icons...';
      this.model.set('isProcessRunning', true);
    }
  },

  _onIconDeleted: function _onIconDeleted(icon) {
    icon.set('deleted', true);
    this._addExtraIcon();
  },

  _onIconDeleteError: function _onIconDeleteError(icon, response) {
    var errorText = this._parseResponseText(response);
    // Even if API throws error the icon has been already removed from the collection.
    // We must add it again
    this._iconCollection.add(icon);
    this._resetSelection();
    this._showErrorMessage(this._deleteErrorMessage(errorText));
  },

  _onIconDeleteComplete: function _onIconDeleteComplete() {
    this._numOfDeletingProcesses--;
    if (this._numOfDeletingProcesses <= 0) {
      this.model.set('isProcessRunning', false);
    }
  },

  _showSpinner: function _showSpinner(enable) {
    if (enable) {
      this._hide('.js-plusSign');
      this._show('.js-spinner');
    } else {
      this._show('.js-plusSign');
      this._hide('.js-spinner');
    }
  },

  _showErrorMessage: function _showErrorMessage(message) {
    this.$('.js-errorMessage label').text(message);
    this._show('.js-errorMessage');
  },

  _hideErrorMessage: function _hideErrorMessage() {
    this._hide('.js-errorMessage');
  },

  _resetSelection: function _resetSelection() {
    this._iconCollection.each(function (icon) {
      icon.set('selected', false);
    });
    this._refreshActions();
  },

  _addExtraIcon: function _addExtraIcon() {
    var iconAdded = false;
    this._iconCollection.each(function (icon) {
      if (!icon.get('visible') && !iconAdded) {
        this._addIconElement(icon);
        iconAdded = true;
      }
    }, this);
  },

  _onProcessRunningChanged: function _onProcessRunningChanged() {
    var running = this.model.get('isProcessRunning');
    this._showSpinner(running);
    if (running) {
      this.$el.css('pointer-events', 'none');
      this._hideActions();
      this.$('.js-runningInfo').text(this._runningMessage);
      this._show('.js-runningInfo');
    } else {
      this.$('.js-runningInfo').text('');
      this._hide('.js-runningInfo');
      this._refreshActions();
      this._iconCollection.trigger('refreshCollection', { cid: this.cid });
      this.$el.css('pointer-events', 'auto');
    }
  },

  _uploadErrorMessage: function _uploadErrorMessage(errorText) {
    var message = 'Error uploading your image. ';
    if (errorText) {
      message += '[ ' + errorText + ' ]. ';
    }
    message += 'Please try again.';

    return message;
  },

  _deleteErrorMessage: function _deleteErrorMessage(errorText) {
    var message = 'Error deleting your image. ';
    if (errorText) {
      message += '[ ' + errorText + ' ]. ';
    }
    message += 'Please try again.';

    return message;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons.tpl":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons.tpl ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="FormAccount-rowLabel IconActions">\n  <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor u-rSpace--xl js-iconMainLabel is-hidden"></label>\n  <label class="CDB-Text CDB-Size-small u-rSpace--xl u-altTextColor js-iconsInfo">These icons can be used as markers.</label>\n  <label class="CDB-Text CDB-Size-small u-rSpace--xl u-altTextColor js-runningInfo is-hidden"></label>\n  <label class="CDB-Text CDB-Size-medium u-rSpace--xl js-selectAllIcons is-hidden"><a href="#/select_all">Select all</a></label>\n  <label class="CDB-Text CDB-Size-medium u-rSpace--xl js-deselectAllIcons is-hidden"><a href="#/deselect_all">Deselect all</a></label>\n  <label class="CDB-Text CDB-Size-medium js-deleteIcons is-hidden"><a class="IconText is--critical" href="#/delete_icons">Delete icons...</a></label>\n</div>\n<div class="FormAccount-rowData js-asset-icons">\n  <ul class="IconList js-items">\n\n    <li class="IconList-item IconList-item--small IconList-item--dashed js-addIcon">\n      <div class="IconItem-icon js-plusSign">\n        <svg width="11px" height="11px" viewBox="15 15 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <polygon id="Mas" stroke="none" fill="#1785FB" fill-rule="evenodd" points="15 20 15 21 20 21 20 26 21 26 21 21 26 21 26 20 21 20 21 15 20 15 20 20"></polygon>\n        </svg>\n      </div>\n      <div class="CDB-LoaderIcon is-blue js-spinner is-hidden">\n        <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n          <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n        </svg>\n      </div>\n    </li>\n\n  </ul>\n</div>\n<div class="FormAccount-rowData js-errorMessage is-hidden">\n  <label class="CDB-Text CDB-Size-medium IconText is--critical"></label>\n</div>\n<input id="iconfile" class="js-inputFile" type="file" value="Choose icon" accept="image/jpeg,image/jpg,image/gif,image/png,image/svg+xml" tabindex="-1" style="position: absolute; clip: rect(0px 0px 0px 0px); opacity: 0;" multiple>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var IconPickerView = __webpack_require__(/*! ./icons/organization-icons-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icons-view.js");
var OrganizationIconCollection = __webpack_require__(/*! ./icons/organization-icon-collection */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-collection.js");
var IconView = __webpack_require__(/*! ./icons/organization-icon-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icons/organization-icon-view.js");
var IconPickerDialog = __webpack_require__(/*! ./icon-picker-dialog/icon-picker-dialog-view */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/icon-picker-dialog/icon-picker-dialog-view.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var template = __webpack_require__(/*! ./organization-icon-picker.tpl */ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['orgId', 'configModel'];

module.exports = IconPickerView.extend({

  events: IconPickerView.extendEvents({
    'click .js-viewAllIcons': '_onViewAllIconsClicked'
  }),

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._maxIcons = 23;
    this._modals = new ModalsServiceModel();
    this.model = new Backbone.Model({
      isProcessRunning: false
    });
    this._iconCollection = new OrganizationIconCollection(null, {
      orgId: this._orgId,
      configModel: this._configModel
    });
    this._numOfUploadingProcesses = 0;
    this._numOfDeletingProcesses = 0;
    this._fetchErrorMessage = 'Error fetching organization icons. Please refresh the page.';
    this._runningMessage = '';
    this.teplate = template;

    this.render();
    this._fetchAllIcons();
    this._initBinds();
  },

  render: function render() {
    this.$el.html(template());

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._iconCollection, 'change:selected', this._refreshActions);
    this.listenTo(this._iconCollection, 'refreshCollection', this._refreshCollection);
    this.listenTo(this.model, 'change:isProcessRunning', this._onProcessRunningChanged);
  },

  _refreshCollection: function _refreshCollection(data) {
    if (data.cid && this.cid !== data.cid) {
      this.render();
      this._fetchAllIcons();
    }
  },

  _renderIcon: function _renderIcon(iconModel) {
    if (iconModel.get('index') < this._maxIcons) {
      var iconView = new IconView({
        model: iconModel
      });
      iconView.render();
      iconModel.set('visible', true);
      this.$('.js-items').append(iconView.$el);
    }
  },

  _addIconElement: function _addIconElement(iconModel) {
    iconModel.set('index', this._getIconIndex(iconModel));
    this._renderIcon(iconModel);
    this._refreshActions();
  },

  _refreshActions: function _refreshActions() {
    if (this.model.get('isProcessRunning')) {
      return;
    }
    var limit = Math.min(this._maxIcons, this._iconCollection.length);
    var numOfSelectedIcons = this._getNumberOfSelectedIcons();
    var iconText = numOfSelectedIcons === 1 ? '1 icon selected' : '' + numOfSelectedIcons + ' icons selected';
    this.$('.js-iconMainLabel').text(iconText);

    if (numOfSelectedIcons === 0) {
      this.$('.js-iconMainLabel').text('Icons');
      this._hide('.js-selectAllIcons, .js-deselectAllIcons, .js-deleteIcons');
      this._show('.js-iconsInfo');
    } else if (numOfSelectedIcons < limit) {
      this._show('.js-selectAllIcons, .js-deleteIcons');
      this._hide('.js-deselectAllIcons, .js-iconsInfo');
    } else {
      this._hide('.js-selectAllIcons, .js-iconsInfo');
      this._show('.js-deselectAllIcons, .js-deleteIcons');
    }

    if (numOfSelectedIcons > 1) {
      this.$('.js-deleteIcons a').text('Delete icons...');
    } else if (numOfSelectedIcons === 1) {
      this.$('.js-deleteIcons a').text('Delete icon...');
    }

    if (this._iconCollection.length > this._maxIcons) {
      this._show('.js-viewAllIcons');
    } else {
      this._hide('.js-viewAllIcons');
    }
  },

  _hideActions: function _hideActions() {
    this._hide('.js-selectAllIcons, .js-deselectAllIcons, .js-deleteIcons, .js-iconsInfo, .js-viewAllIcons');
  },

  _getIconIndex: function _getIconIndex(icon) {
    return this._iconCollection.indexOf(icon);
  },

  _addExtraIcon: function _addExtraIcon() {
    var iconAdded = false;
    this._iconCollection.each(function (icon) {
      var index = this._getIconIndex(icon);
      if (index < this._maxIcons && !icon.get('visible') && !iconAdded) {
        this._addIconElement(icon);
        iconAdded = true;
      }
    }, this);
  },

  _onViewAllIconsClicked: function _onViewAllIconsClicked(event) {
    var _this = this;

    this.killEvent(event);

    this._modals.create(function (modalModel) {
      return new IconPickerDialog({
        orgId: _this._orgId,
        configModel: _this._configModel
      });
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker.tpl":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/icon-picker/organization-icon-picker.tpl ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="FormAccount-rowLabel">\n  <label class="CDB-Text CDB-Size-medium is-semibold u-mainTextColor u-rSpace--xl js-iconMainLabel">Icons</label>\n  <label class="CDB-Text CDB-Size-medium u-rSpace--xl js-viewAllIcons is-hidden"><a href="#/view_icons">View all icons</a></label>\n  <label class="CDB-Text CDB-Size-small u-rSpace--xl u-altTextColor js-iconsInfo">These icons can be used as markers.</label>\n  <label class="CDB-Text CDB-Size-small u-rSpace--xl u-altTextColor js-runningInfo is-hidden"></label>\n  <label class="CDB-Text CDB-Size-medium u-rSpace--xl js-selectAllIcons is-hidden"><a href="#/select_all">Select all</a></label>\n  <label class="CDB-Text CDB-Size-medium u-rSpace--xl js-deselectAllIcons is-hidden"><a href="#/deselect_all">Deselect all</a></label>\n  <label class="CDB-Text CDB-Size-medium js-deleteIcons is-hidden"><a class="IconText is--critical" href="#/delete_icons">Delete icons...</a></label>\n</div>\n<div class="FormAccount-rowData js-asset-icons">\n  <ul class="IconList js-items">\n\n    <li class="IconList-item IconList-item--small IconList-item--dashed js-addIcon">\n      <div class="IconItem-icon js-plusSign">\n        <svg width="11px" height="11px" viewBox="15 15 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <polygon id="Mas" stroke="none" fill="#1785FB" fill-rule="evenodd" points="15 20 15 21 20 21 20 26 21 26 21 21 26 21 26 20 21 20 21 15 20 15 20 20"></polygon>\n        </svg>\n      </div>\n      <div class="CDB-LoaderIcon is-blue js-spinner is-hidden">\n        <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n          <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n        </svg>\n      </div>\n    </li>\n\n  </ul>\n</div>\n<div class="FormAccount-rowData js-errorMessage is-hidden">\n  <label class="CDB-Text CDB-Size-medium IconText is--critical"></label>\n</div>\n<input id="iconfile" class="js-inputFile" type="file" value="Choose icon" accept="image/jpeg,image/jpg,image/gif,image/png,image/svg+xml" tabindex="-1" style="position: absolute; clip: rect(0px 0px 0px 0px); opacity: 0;" multiple>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog-view.js":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog-view.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var OrganizationInviteModel = __webpack_require__(/*! dashboard/data/organization-invite-model */ "./lib/assets/javascripts/dashboard/data/organization-invite-model.js");
var TabPane = __webpack_require__(/*! dashboard/components/tabpane/tabpane */ "./lib/assets/javascripts/dashboard/components/tabpane/tabpane.js");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var InviteUsersFormView = __webpack_require__(/*! ./invite-users-form-view */ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form-view.js");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");
var template = __webpack_require__(/*! ./invite-users-dialog.tpl */ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog.tpl");

__webpack_require__(/*! jquery-ui */ "./lib/assets/javascripts/vendor/jquery-ui.js");
__webpack_require__(/*! tagit */ "./vendor/assets/javascripts/tag-it.js");

var REQUIRED_OPTS = ['modalModel', 'organization', 'organizationUsers', 'configModel'];

/**
 *  Invite users dialog
 *
 *  - Send invites via email.
 *  - Shouldn't send emails to already enabled users.
 *
 */

module.exports = CoreView.extend({

  className: 'InviteUsers',

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.model = new OrganizationInviteModel({}, {
      configModel: options.configModel,
      organizationId: this._organization.id,
      enable_organization_signup: false
    });
  },

  render: function render() {
    this.clearSubViews();

    this.$el.html(template());

    this.$('.content').addClass('Dialog-content--expanded');

    this._initViews();

    return this;
  },

  _initViews: function _initViews() {
    // Panes
    this._panes = new TabPane({
      el: this.$('.js-content')
    });

    // Create form
    this._form = new InviteUsersFormView({
      model: this.model,
      organization: this._organization,
      organizationUsers: this._organizationUsers,
      el: this.$('.js-form')
    });

    this._form.bind('onSubmit', this._sendInvites, this);

    this._panes.addTab('form', this._form.render());

    // Create loading
    this._panes.addTab('loading', ViewFactory.createByHTML(loadingView({
      title: 'Sending invites...'
    })).render());

    // Create error
    this._panes.addTab('error', ViewFactory.createByHTML(errorTemplate({
      msg: 'Sorry, something went wrong.'
    })).render());

    this._panes.active('form');
  },

  _sendInvites: function _sendInvites() {
    var _this = this;

    this._panes.active('loading');

    this.model.save(null, {
      success: function success() {
        return _this._modalModel.destroy();
      },
      error: function error(model, _error) {
        try {
          var message = JSON.parse(_error.responseText).errors.users_emails[0];

          _this._form.showSubmitError(message);
          _this._panes.active('form');
        } catch (e) {
          _this._panes.active('error');
        }
      }
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog.tpl":
/*!**************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog.tpl ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Text Dialog-header Dialog-header--expanded">\n  <div class="Dialog-headerIcon Dialog-headerIcon--neutral">\n    <i class="CDB-IconFont CDB-IconFont-boss"></i>\n  </div>\n  <h3 class="Dialog-headerTitle">Invite users to your Organization</h3>\n  <p class="Dialog-headerText">New user will become part of your CARTO organization account.</p>\n</div>\n<div class="CDB-Text Dialog-expandedSubContent js-content">\n  <div class="InviteUsers-form">\n    <div class="js-form"></div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-flash-message.tpl":
/*!*********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-flash-message.tpl ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="FlashMessage js-signInMessage">\n  <div class=\'u-inner\'>\n    <div class="FlashMessage-content js-flashNotice">\n      <p class=\'FlashMessage-info FlashMessage-info--larger\'>If you want to invite users you need to enable the sign in page for your organization.</p>\n      <button class=\'FlashMessage--button js-enableSignInButton\'><span>Enable sign in</span></button>\n    </div>\n\n    <div class="FlashMessage-content js-flashSuccess">\n      <p class=\'FlashMessage-info FlashMessage-info--larger\'>You have enabled the sign in page successfully!</p>\n    </div>\n  </div>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form-view.js":
/*!****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form-view.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var Utils = __webpack_require__(/*! builder/helpers/utils */ "./lib/assets/javascripts/builder/helpers/utils.js");
var template = __webpack_require__(/*! ./invite-users-form.tpl */ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form.tpl");
var flashTemplate = __webpack_require__(/*! ./invite-users-flash-message.tpl */ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-flash-message.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['organization', 'organizationUsers'];

/**
 *  Form view for invite users dialog
 *
 */

module.exports = CoreView.extend({

  events: {
    'submit .js-invitesForm': '_onSubmit',
    'keyup .js-welcomeText': '_onTextareaChange',
    'click .js-enableSignInButton': '_signInEnabledMessage'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  render: function render() {
    this.$el.html(template({
      welcomeText: this.model.get('welcome_text'),
      signupEnabled: this._organization.get('signup_enabled'),
      viewerEnabled: this._organization.get('viewer_seats') > 0
    }));

    this._toggleEmailError(false);
    this._initViews();

    return this;
  },

  _renderFlashMessage: function _renderFlashMessage() {
    this.$('.js-signInMessageContainer').html(flashTemplate());
    this.$('.js-flashSuccess').hide();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change', this._onChange);
  },

  _initViews: function _initViews() {
    var _this = this;

    var organizationUsersEmail = this._organizationUsers.pluck('email');

    this.$('.js-tagsList').tagit({
      allowSpaces: true,
      placeholderText: this.$('.js-tags').data('title'),
      onBlur: function onBlur() {
        return _this.$('.js-tags').removeClass('is-focus');
      },
      onFocus: function onFocus() {
        return _this.$('.js-tags').addClass('is-focus');
      },
      beforeTagAdded: function beforeTagAdded(event, ui) {
        var value = ui.tagLabel;
        _this._removeSubmitError();

        // It is an email
        if (!Utils.isValidEmail(value)) {
          return false;
        }

        // It is already in the organization
        if (_.contains(organizationUsersEmail, value)) {
          _this._toggleEmailError(true);
          return false;
        } else {
          _this._toggleEmailError(false);
        }
      },
      beforeTagRemoved: function beforeTagRemoved() {
        return _this._removeSubmitError();
      },
      afterTagRemoved: function afterTagRemoved() {
        return _this._updateUsers();
      },
      afterTagAdded: function afterTagAdded() {
        return _this._updateUsers();
      },
      onSubmitTags: function onSubmitTags(event) {
        event.preventDefault();
        _this._onSubmit();
        return false;
      }
    });

    if (!this._organization.get('signup_enabled')) {
      this._renderFlashMessage();
    }
  },

  _onTextareaChange: function _onTextareaChange() {
    this.model.set('welcome_text', this.$('.js-welcomeText').val());
  },

  _updateUsers: function _updateUsers() {
    this.model.set('users_emails', this.$('.js-tagsList').tagit('assignedTags'));
  },

  _onSubmit: function _onSubmit(event) {
    event && this.killEvent(event);

    var emails = this.model.get('users_emails');

    if (emails.length > 0) {
      this.model.set('welcome_text', this.$('.js-welcomeText').val());
      this.model.set('viewer', this.$('[name=viewer]').get(0).checked);
      this.trigger('onSubmit', this);
    }
  },

  _signInEnabledMessage: function _signInEnabledMessage() {
    this.$('.js-signInMessage').addClass('FlashMessage--success');
    this.$('.js-flashNotice').hide();
    this.$('.js-flashSuccess').show();

    this.model.set('enable_organization_signup', true);
  },

  _toggleEmailError: function _toggleEmailError(visible) {
    this.$('.js-emailError')[visible ? 'show' : 'hide']();
  },

  showSubmitError: function showSubmitError(msg) {
    var $serverError = this.$('.js-serverError');

    if ($serverError.length === 0) {
      this.$('.js-emailError').after('<p class="Form-rowInfoText Form-rowInfoText--error Form-rowInfoText--multipleLines js-serverError">' + msg + '</p>');
    }
  },

  _removeSubmitError: function _removeSubmitError() {
    this.$('.js-serverError').remove();
  },

  _onChange: function _onChange() {
    var users = this.model.get('users_emails');
    var welcomeText = this.model.get('welcome_text');

    this.$('.js-submit').toggleClass('is-disabled', users.length === 0 || !welcomeText);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form.tpl":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-form.tpl ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="js-signInMessageContainer"></div>\n\n<form class="Form InviteUsers-formContent js-invitesForm">\n  <div class="Form-row Form-row--centered has-label">\n    <div class="Form-rowLabel">\n      <label class="Form-label">Users email</label>\n    </div>\n    <div class="Form-rowData Form-rowData--longer">\n      <div class="Form-tags js-tags" data-title="Separate emails by commas">\n        <ul class="Form-tagsList js-tagsList"></ul>\n      </div>\n    </div>\n    <div class="Form-rowInfo">\n      <p class="Form-rowInfoText Form-rowInfoText--error Form-rowInfoText--multipleLines js-emailError">That email is already used in this organization</p>\n    </div>\n  </div>\n\n  <div class="Form-row Form-row--centered has-label">\n    <div class="Form-rowLabel">\n      <label class="Form-label">Welcome text</label>\n    </div>\n    <div class="Form-rowData Form-rowData--longer">\n      <textarea class="CDB-Textarea Form-input Form-input--longer Form-textarea js-welcomeText" placeholder="Send them a welcome text">' +
__e( welcomeText ) +
'</textarea>\n    </div>\n    <div class="Form-rowInfo"></div>\n  </div>\n\n  <div class="Form-row Form-row--centered has-label">\n    <div class="Form-rowLabel">\n      <label class="Form-label">Viewer user</label>\n    </div>\n    <div class="Form-rowData Form-rowData--longer InviteUsers-userType">\n      <div class="Toggler js-toggler InviteUsers-userTypeToggler ';
 if (!viewerEnabled) { ;
__p += 'is-disabled';
 } ;
__p += '"\n             ';
 if (!viewerEnabled) { ;
__p += 'title="You can\'t send viewer invitations because you don\'t have viewer seats"';
 } ;
__p += '>\n        <input type="checkbox" id="InviteUsers-userType" name="viewer" class="js-input" ';
 if (!viewerEnabled) { ;
__p += 'disabled="disabled"';
 } ;
__p += '/>\n        <label for="InviteUsers-userType"></label>\n      </div>\n      <div class="Form-label">Viewer users can only read, not write, data and maps</div>\n    </div>\n  </div>\n\n  <div class="InviteUsers-formFooterSticky">\n    <div class="Dialog-footer InviteUsers-formFooter">\n      <div>';
/* placeholder for flex layout */;
__p += '</div>\n      <button type="submit" class="CDB-Button CDB-Button--primary is-disabled js-submit">\n        <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Invite users</span>\n      </button>\n    </div>\n  </div>\n</form>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog-view.js":
/*!**************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog-view.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var template = __webpack_require__(/*! ./delete-notification-dialog.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog.tpl");

var REQUIRED_OPTS = ['userModel', 'modalModel', 'authenticityToken', 'notificationId'];

module.exports = CoreView.extend({
  events: {
    'click .js-submit': '_onSubmit',
    'click .js-cancel': '_closeDialog'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    var _options = this.options,
        authenticityToken = _options.authenticityToken,
        notificationId = _options.notificationId;


    return this.$el.html(template({
      formAction: this._userModel.get('base_url') + '/organization/notifications/' + notificationId,
      authenticityToken: authenticityToken
    }));
  },

  _onSubmit: function _onSubmit(event) {
    event.preventDefault();

    this.$('form').submit();

    this.$('.Modal-inner').hide();

    this.$('.Modal-inner').after(loadingView({
      title: 'Removing...'
    }));
  },

  _closeDialog: function _closeDialog(event) {
    event && event.preventDefault();
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog.tpl":
/*!**********************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog.tpl ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="u-flex u-justifyCenter">\n  <div class="Modal-inner Modal-inner--grid u-flex u-justifyCenter">\n    <div class="Modal-icon">\n      <svg width="24px" height="25px" viewbox="521 436 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M524.5,440 L540.5,440 L540.5,460 L524.5,460 L524.5,440 Z M528.5,437 L536.5,437 L536.5,440 L528.5,440 L528.5,437 Z M522,440 L544,440 L522,440 Z M528.5,443.5 L528.5,455.5 L528.5,443.5 Z M532.5,443.5 L532.5,455.5 L532.5,443.5 Z M536.5,443.5 L536.5,455.5 L536.5,443.5 Z" id="Shape" stroke="#F19243" stroke-width="1" fill="none"/>\n      </svg>\n    </div>\n    <div>\n      <form accept-charset="UTF-8" action="' +
__e( formAction ) +
'" method="post">\n        <input name="utf8" type="hidden" value="&#x2713;" />\n        <input name="authenticity_token" type="hidden" value="' +
__e( authenticityToken ) +
'" />\n        <input name="_method" type="hidden" value="delete" />\n\n        <h2 class=" CDB-Text CDB-Size-huge is-light u-bSpace--xl">You are about to remove a notification</h2>\n        <p class="CDB-Text CDB-Size-large u-altTextColor">Are you sure you want to remove it?</p>\n\n        <ul class="Modal-listActions u-flex u-alignCenter">\n          <li class="Modal-listActionsitem">\n            <button class="CDB-Button CDB-Button--secondary CDB-Button--big js-cancel">\n              <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">Cancel</span>\n            </button>\n          </li>\n          <li class="Modal-listActionsitem">\n            <button class="CDB-Button CDB-Button--primary CDB-Button--big js-submit">\n              <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium u-upperCase">Ok, remove it</span>\n            </button>\n          </li>\n        </ul>\n      </form>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/organization-notification-view.js":
/*!*************************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-notification/organization-notification-view.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var markdown = __webpack_require__(/*! markdown */ "./vendor/assets/javascripts/markdown.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var RemoveNotificationDialogView = __webpack_require__(/*! ./delete-notification-dialog-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/delete-notification-dialog-view.js");
var SendButtonView = __webpack_require__(/*! ./send-button-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button-view.js");

var REQUIRED_OPTS = ['userModel'];

module.exports = CoreView.extend({

  events: {
    'click .js-resend': '_onClickResend',
    'click .js-remove': '_onClickRemove',
    'keydown .js-textarea': '_onTextareaKeydown',
    'input .js-textarea': '_updateCounter',
    'propertychange .js-textarea': '_updateCounter'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);
  },

  render: function render() {
    this.$textarea = this.$('#carto_notification_body');
    this._modals = new ModalsServiceModel();

    this._initViews();
    this._initBinds();

    this._updateCounter();

    return this;
  },

  _initViews: function _initViews() {
    this.sendButton = new SendButtonView({
      needsPasswordConfirmation: this._userModel.get('needs_password_confirmation'),
      modals: this._modals
    });
    this.$('.js-send').html(this.sendButton.render().el);
    this.addView(this.sendButton);
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.sendButton, 'submitForm', this._submitForm);
  },

  _submitForm: function _submitForm() {
    if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
      this.$('form').clone().appendTo('body').submit(); // FF only
    } else {
      this.$('form').submit();
    }
  },

  _updateCounter: function _updateCounter() {
    var textLength = $(markdown.toHTML(this.$textarea.val())).text().length;
    this.sendButton.updateCounter(textLength);
  },

  _onClickResend: function _onClickResend(event) {
    var $notificationItem = $(event.target).closest('.js-NotificationsList-item');
    var title = $notificationItem.find('.js-html_body').data('body');
    var recipients = $notificationItem.find('.js-recipients').data('recipients');

    this.$textarea.val(title);
    this.$('input[name="carto_notification[recipients]"]').prop('checked', false);
    this.$('input[name="carto_notification[recipients]"][value="' + recipients + '"]').prop('checked', true);

    $('body').animate({
      scrollTop: 0
    });

    this._updateCounter();
  },

  _onTextareaKeydown: function _onTextareaKeydown(event) {
    if (event.key === 'Enter' && event.metaKey) {
      this.sendButton.onUpdate();
    }
  },

  _onClickRemove: function _onClickRemove(event) {
    var _this = this;

    var $target = $(event.target);

    this._modals.create(function (modalModel) {
      return new RemoveNotificationDialogView({
        userModel: _this._userModel,
        modalModel: modalModel,
        authenticityToken: _this.options.authenticityToken,
        notificationId: $target.data('id')
      });
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button-view.js":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button-view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var PasswordValidatedForm = __webpack_require__(/*! dashboard/helpers/password-validated-form */ "./lib/assets/javascripts/dashboard/helpers/password-validated-form.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var template = __webpack_require__(/*! ./send-button.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button.tpl");

var REQUIRED_OPTS = ['modals', 'needsPasswordConfirmation'];

var MAX_NOTIFICATION_LENGTH = 140;

module.exports = CoreView.extend({
  className: 'FormAccount-rowData',

  events: {
    'click .js-button': 'onUpdate'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.model = new Backbone.Model({
      status: 'idle',
      counter: 0
    });

    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();

    this.$el.html(template({
      isLoading: this._isLoading(),
      isDisabled: this._isDisabled(),
      isNegative: this._isNegative(),
      counter: MAX_NOTIFICATION_LENGTH - this.model.get('counter')
    }));

    return this;
  },

  updateCounter: function updateCounter(strLen) {
    this.model.set('counter', strLen);
  },

  _initBinds: function _initBinds() {
    this.model.bind('change', this.render, this);
  },

  _isNegative: function _isNegative() {
    return this.model.get('counter') > MAX_NOTIFICATION_LENGTH;
  },

  _isDisabled: function _isDisabled() {
    return this.model.get('counter') === 0 || this._isNegative() || this._isLoading();
  },

  _isLoading: function _isLoading() {
    return this.model.get('status') === 'loading';
  },

  _submit: function _submit() {
    this.trigger('submitForm');
  },

  onUpdate: function onUpdate(event) {
    var _this = this;

    this.killEvent(event);

    var form = $('#new_carto_notification');

    if (this._isDisabled()) return false;

    if (!this._needsPasswordConfirmation) {
      this.model.set({ status: 'loading' });
      return this._submit();
    }

    PasswordValidatedForm.showPasswordModal({
      modalService: this._modals,
      onPasswordTyped: function onPasswordTyped(password) {
        PasswordValidatedForm.addPasswordToForm(form, password, {
          doNotSubmit: true
        });

        _this.model.set({ status: 'loading' });
        _this._submit();
      }
    });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-notification/send-button.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p class="Md-counter CDB-Text CDB-Size-medium u-secondaryTextColor u-rSpace--xl ';
 if (isNegative) { ;
__p += 'Md-counter--negative';
 } ;
__p += '">' +
((__t = ( counter )) == null ? '' : __t) +
'</p>\n\n<button class="OrganizationNotifications-button CDB-Button CDB-Button--primary ';
 if (isDisabled) { ;
__p += 'is-disabled';
 } ;
__p += ' js-button js-save">\n  <div class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase u-flex">\n    ';
 if (isLoading) { ;
__p += '\n      <div class="CDB-LoaderIcon CDB-LoaderIcon--small u-iBlock">\n        <svg class="CDB-LoaderIcon-spinner" viewBox="0 0 50 50">\n          <circle class="CDB-LoaderIcon-path" cx="25" cy="25" r="20" fill="none"></circle>\n        </svg>\n      </div>\n      Sending\n    ';
 } else { ;
__p += '\n      Send\n    ';
 } ;
__p += '\n  </div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-user-form.js":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-user-form.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");

/* Organization user form */
module.exports = CoreView.extend({
  events: {
    'submit': '_validateFormSubmit'
  },

  _validateFormSubmit: function _validateFormSubmit(event) {
    if (this.$('.js-userQuotaError').length > 0) {
      return false;
    }
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider-input.js":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider-input.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");

/* Progress quota bar for organization users input */

module.exports = CoreView.extend({

  events: {
    'keyup .js-assignedSize': '_onKeyup'
  },

  initialize: function initialize() {
    this._initBinds();
    this._initViews();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:quota_in_bytes', this._onQuotaChange);
  },

  _initViews: function _initViews() {
    var quotaInMb = Math.max(Math.floor(this.model.get('quota_in_bytes') / 1024 / 1024).toFixed(0), 1);
    this.$('.js-assignedSize').val(quotaInMb);
  },

  _onQuotaChange: function _onQuotaChange() {
    this.$('.js-assignedSize').val(Math.max(this.model.assignedQuotaInRoundedMb(), 1));
  },

  _onKeyup: function _onKeyup() {
    var modifiedQuotaInBytes = Math.max(Math.floor(this.$('.js-assignedSize').val() * 1048576), 1048576);
    var assignedPer = modifiedQuotaInBytes * 100 / this.model.organization.get('available_quota_for_user');
    var errorMessage = '<p class="FormAccount-rowInfoText FormAccount-rowInfoText--error js-userQuotaError">Invalid quota, insert a valid one.</p>';

    if (!isNaN(assignedPer)) {
      this.model.set('quota_in_bytes', modifiedQuotaInBytes);
    }

    if (isNaN(assignedPer) || this.model.get('quota_in_bytes') > this.model.organization.get('available_quota_for_user') || this.model.get('quota_in_bytes') < this.model.get('db_size_in_bytes')) {
      this.$('.js-assignedSize').addClass('has-error');

      if (this.$('.js-userQuotaError').length === 0) {
        $('.js-userQuotaSliderInput').append(errorMessage);
      }
    } else {
      this.$('.js-assignedSize').removeClass('has-error');
      this.$('.js-userQuotaError').remove();
    }
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider.js":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var TipsyTooltipView = __webpack_require__(/*! builder/components/tipsy-tooltip-view */ "./lib/assets/javascripts/builder/components/tipsy-tooltip-view.js");

var MAX_QUOTA_BITS = 104857600; // 100Mb

/* Progress quota bar for organization users */

module.exports = CoreView.extend({

  events: {
    'hover .js-quotaProgressSlider': '_showTooltip'
  },

  initialize: function initialize() {
    this._initBinds();
    this._initViews();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:quota_in_bytes', this._onQuotaChange);
  },

  _initViews: function _initViews() {
    var userMinQuota = MAX_QUOTA_BITS / this.model.organization.get('available_quota_for_user');

    // Init slider
    this.$('.js-slider').slider({
      max: 100,
      min: userMinQuota,
      step: 1,
      value: this.model.assignedQuotaPercentage(),
      range: 'min',
      orientation: 'horizontal',
      slide: this._onSlideChange.bind(this)
    });

    $('.ui-slider-handle').addClass('js-quotaProgressSlider');
  },

  _onSlideChange: function _onSlideChange(ev, ui) {
    var userQuota = Math.max(Math.floor(this.model.organization.get('available_quota_for_user') * ui.value / 100), 1);
    var assignedPer = userQuota * 100 / this.model.organization.get('available_quota_for_user');

    if (ui.value >= this.model.usedQuotaPercentage()) {
      this.$('.ui-slider-range').css('width', assignedPer + '%');
      this.$('.js-quotaProgressSlider').css('left', assignedPer + '%');

      var tooltipLeft = $('.js-quotaProgressSlider').offset().left - $('.js-orgUserQuotaTooltip').outerWidth() / 2 + $('.js-quotaProgressSlider').outerWidth() / 2;

      $('.js-orgUserQuotaTooltip').css('left', tooltipLeft);

      this.model.set('quota_in_bytes', userQuota);
    } else {
      return false;
    }
  },

  _onQuotaChange: function _onQuotaChange() {
    if (this.model.assignedQuotaPercentage() >= this.model.usedQuotaPercentage()) {
      var assignedQuotaPercentage = Math.min(this.model.assignedQuotaPercentage(), 100);

      $('.ui-slider-range').css('width', assignedQuotaPercentage + '%');
      $('.js-quotaProgressSlider').css('left', assignedQuotaPercentage + '%');
    }
  },

  _showTooltip: function _showTooltip() {
    var viewModel = this.model;

    this.addView(new TipsyTooltipView({
      el: $('.js-quotaProgressSlider'),
      className: 'js-orgUserQuotaTooltip',
      title: function title() {
        var quotaPercentage = viewModel.assignedQuotaPercentage().toFixed(0);

        return quotaPercentage + '% of the available org quota';
      }
    }));
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota.js":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-user-quota.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var UserQuotaSlider = __webpack_require__(/*! ./organization-user-quota-slider */ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider.js");
var UserQuotaSliderInput = __webpack_require__(/*! ./organization-user-quota-slider-input */ "./lib/assets/javascripts/dashboard/views/organization/organization-user-quota-slider-input.js");

/* Progress quota bar for organization users */

module.exports = CoreView.extend({

  initialize: function initialize() {
    this._initBinds();
    this._initViews();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:quota_in_bytes', this._onQuotaChange);
  },

  _initViews: function _initViews() {
    // Quota slider
    var userQuotaSlider = new UserQuotaSlider({
      el: this.$('.js-userQuotaSlider'),
      model: this.model
    });

    this.addView(userQuotaSlider);

    // Quota slider input
    var userQuotaSliderInput = new UserQuotaSliderInput({
      el: this.$('.js-userQuotaSliderInput'),
      model: this.model
    });

    this.addView(userQuotaSliderInput);
  },

  _onQuotaChange: function _onQuotaChange(model, quota) {
    this.$('#user_quota').val(quota);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/add-users.tpl":
/*!**********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/add-users.tpl ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="DropdownList DropdownList--list CDB-Text CDB-Size-medium">\n  <li class="DropdownList-item DropdownList-item--verticalPadding"><a href="' +
__e( createUrl ) +
'">Create User</a></li>\n  <li class="DropdownList-item DropdownList-item--verticalPadding"><a href="#" class="js-inviteUser">Invite User</a></li>\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user-view.js":
/*!**********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user-view.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var Utils = __webpack_require__(/*! builder/helpers/utils */ "./lib/assets/javascripts/builder/helpers/utils.js");
var pluralize = __webpack_require__(/*! dashboard/helpers/pluralize */ "./lib/assets/javascripts/dashboard/helpers/pluralize.js");
var template = __webpack_require__(/*! ./organization-user.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user.tpl");

module.exports = CoreView.extend({

  className: 'OrganizationList-user',

  tagName: 'li',

  render: function render() {
    this.$el.html(template({
      totalPer: this.options.totalPer,
      userPer: this.options.userPer,
      usedPer: this.options.usedPer,
      isOwner: this.options.isOwner,
      isAdmin: this.options.isAdmin,
      isViewer: this.options.isViewer,
      editable: this.options.editable,
      url: this.options.url,
      sizeOnBytes: Utils.readablizeBytes(this.model.get('db_size_in_bytes')),
      quotaInBytes: Utils.readablizeBytes(this.model.get('quota_in_bytes')),
      avatarUrl: this.model.get('avatar_url'),
      username: this.model.get('username'),
      user_email: this.model.get('email'),
      table_count: pluralize.prefixWithCount('Dataset', 'Datasets', this.model.get('table_count')),
      maps_count: pluralize.prefixWithCount('Map', 'Maps', this.model.get('all_visualization_count'))
    }));

    return this;
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user.tpl":
/*!******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user.tpl ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (editable) { ;
__p += '\n  <a class="OrganizationList-userLink" href="' +
__e( url ) +
'">\n';
 } else { ;
__p += '\n  <span class="OrganizationList-userLink is-disabled">\n';
 } ;
__p += '\n  <div class="OrganizationList-userAvatar UserAvatar">\n    <img src="' +
__e( avatarUrl ) +
'" alt="' +
__e( username ) +
'" src="' +
__e( username ) +
'" class="UserAvatar-img UserAvatar-img--medium-large OrganizationList-userAvatar--img" />\n  </div>\n    <div class="OrganizationList-userInfo">\n      <div class="OrganizationList-userInfoName">\n        <div class="u-flex u-alignCenter">\n          <h3 class="CDB-Text u-ellipsLongText CDB-Size-medium is-semibold u-rSpace" title="' +
__e( username ) +
'">' +
__e( username ) +
'</h3>\n          ';
 if (isOwner) { ;
__p += '\n            <span class="UserRoleIndicator UserRoleIndicator--filled is-green u-lSpace">OWNER</span>\n          ';
 } else if (isAdmin) { ;
__p += '\n            <span class="UserRoleIndicator UserRoleIndicator--filled is-grey u-lSpace">ADMIN</span>\n          ';
 } ;
__p += '\n          <span class="UserRoleIndicator u-altTextColor u-lSpace">\n            ';
 if (isViewer) { ;
__p += '\n              VIEWER\n            ';
 } else { ;
__p += '\n              BUILDER\n            ';
 } ;
__p += '\n          </span>\n        </div>\n        <h4 class="OrganizationList-userInfoSubtitle u-ellipsLongText" title="' +
__e( user_email ) +
'">' +
__e( user_email ) +
'</h4>\n      </div>\n      <ul class="OrganizationList-userInfoData u-upperCase u-altTextColor">\n        <li class="CDB-Text CDB-Size-small u-rSpace--xl u-flex u-alignCenter">\n          <i class="CDB-IconFont CDB-IconFont-map CDB-Size-medium u-rSpace"></i>\n          <span>' +
__e( maps_count ) +
'</span>\n        </li>\n        <li class="CDB-Text CDB-Size-small u-flex u-alignCenter">\n          <i class="CDB-IconFont CDB-IconFont-rows CDB-Size-medium u-rSpace"></i>\n          <span>' +
__e( table_count ) +
'</span>\n        </li>\n      </ul>\n    </div>\n';
 if (editable) { ;
__p += '\n  </a>\n';
 } else { ;
__p += '\n  </span>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer-view.js":
/*!******************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer-view.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var template = __webpack_require__(/*! ./organization-users-footer.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer.tpl");

var REQUIRED_OPTS = ['configModel'];

module.exports = CoreView.extend({

  className: 'Form-footer',

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  render: function render() {
    this.$el.html(template({
      seats: this.model.get('seats'),
      users: this.options.organizationUsers.totalCount(),
      newUserUrl: this.model.viewUrl().create(),
      upgradeUrl: window.upgrade_url,
      customHosted: this._configModel.isHosted()
    }));

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:total_users', this.render);
    this.listenTo(this.options.organizationUsers, 'sync', this.render);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer.tpl":
/*!**************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer.tpl ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (seats > users) { ;
__p += '\n  ';
 if ((seats - users) < 5) { ;
__p += '\n    <p class="CDB-Text Form-footerText">\n      <i class="CDB-IconFont CDB-IconFont-info Form-footerIcon"></i>\n      You are near your seats limit. Consider to <a href="' +
__e( upgradeUrl ) +
'">upgrade your account</a>.\n    </p>\n  ';
 } else { ;
__p += '\n    <em></em>\n  ';
 } ;
__p += '\n';
 } else if (!customHosted) { ;
__p += '\n  <p class="CDB-Text Form-footerText">\n    <i class="CDB-IconFont CDB-IconFont-info Form-footerIcon"></i>\n    <a href="mailto:sales@carto.com">Contact us</a> if you have any questions.\n  </p>\n  <a href="' +
__e( upgradeUrl ) +
'" class="CDB-Text Button Button--positive"><span>Upgrade account</span></a>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-list-view.js":
/*!****************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-list-view.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var PaginationView = __webpack_require__(/*! builder/components/pagination/pagination-view.js */ "./lib/assets/javascripts/builder/components/pagination/pagination-view.js");
var OrganizationUserView = __webpack_require__(/*! ./organization-user-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-user-view.js");

var REQUIRED_OPTS = ['userModel', 'organization', 'paginationModel'];

module.exports = CoreView.extend({

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._initBinds();
  },

  render: function render() {
    this.clearSubViews();

    this.$el.empty();

    // Users list
    var $ul = $('<ul>').addClass('OrganizationList');
    this.$el.append($ul);

    var totalPer = 0;
    this.collection.each(function (user) {
      // Calculations to create organization user bars
      var userPer = user.get('quota_in_bytes') * 100 / this._organization.get('quota_in_bytes');
      var usedPer = user.get('db_size_in_bytes') * 100 / this._organization.get('quota_in_bytes');
      user.organization = this._organization;

      var view = new OrganizationUserView({
        model: user,
        isOwner: user.isOrgOwner(),
        isAdmin: user.isOrgAdmin(),
        isViewer: user.get('viewer'),
        editable: this._userModel.isOrgOwner() || this._userModel.id === user.id || !user.isOrgAdmin(),
        userPer: userPer,
        usedPer: usedPer,
        totalPer: totalPer,
        url: this._organization.viewUrl().edit(user)
      });

      $ul.append(view.render().el);
      this.addView(view);

      totalPer = totalPer + userPer;
    }, this);

    // Paginator
    var $paginatorWrapper = $('<div>').addClass('OrganizationList-paginator');
    this.$el.append($paginatorWrapper);
    var paginationView = new PaginationView({
      model: this._paginationModel
    });
    $paginatorWrapper.append(paginationView.render().el);
    this.addView(paginationView);

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.collection, 'sync', this.render);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-view.js":
/*!***********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-view.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var Utils = __webpack_require__(/*! builder/helpers/utils */ "./lib/assets/javascripts/builder/helpers/utils.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var ModalsServiceModel = __webpack_require__(/*! builder/components/modals/modals-service-model */ "./lib/assets/javascripts/builder/components/modals/modals-service-model.js");
var PaginationModel = __webpack_require__(/*! builder/components/pagination/pagination-model */ "./lib/assets/javascripts/builder/components/pagination/pagination-model.js");
var template = __webpack_require__(/*! ./organization-users.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users.tpl");
var OrganizationUsersFooterView = __webpack_require__(/*! ./organization-users-footer-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-footer-view.js");
var DropdownAdminView = __webpack_require__(/*! dashboard/components/dropdown/dropdown-admin-view */ "./lib/assets/javascripts/dashboard/components/dropdown/dropdown-admin-view.js");
var PagedSearchModel = __webpack_require__(/*! dashboard/data/paged-search-model */ "./lib/assets/javascripts/dashboard/data/paged-search-model.js");
var TabPane = __webpack_require__(/*! dashboard/components/tabpane/tabpane */ "./lib/assets/javascripts/dashboard/components/tabpane/tabpane.js");
var InviteUsersDialogView = __webpack_require__(/*! ../invite-users/invite-users-dialog-view */ "./lib/assets/javascripts/dashboard/views/organization/invite-users/invite-users-dialog-view.js");
var addUsersTemplate = __webpack_require__(/*! ./add-users.tpl */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/add-users.tpl");
var OrganizationUsersListView = __webpack_require__(/*! ./organization-users-list-view */ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users-list-view.js");
var loadingView = __webpack_require__(/*! builder/components/loading/render-loading */ "./lib/assets/javascripts/builder/components/loading/render-loading.js");
var noResultsTemplate = __webpack_require__(/*! builder/components/no-results/no-results.tpl */ "./lib/assets/javascripts/builder/components/no-results/no-results.tpl");
var errorTemplate = __webpack_require__(/*! dashboard/views/data-library/content/error-template.tpl */ "./lib/assets/javascripts/dashboard/views/data-library/content/error-template.tpl");
var ViewFactory = __webpack_require__(/*! builder/components/view-factory */ "./lib/assets/javascripts/builder/components/view-factory.js");

var REQUIRED_OPTS = ['userModel', 'configModel', 'organization', 'organizationUsers'];

/**
 *  Organization users content, list, pagination,
 *  form, footer...
 *
 */

module.exports = CoreView.extend({

  events: {
    'click .js-addUserOptions': '_openAddUserDropdown',
    'click .js-search-link': '_onSearchClick',
    'click .js-clean-search': '_onCleanSearchClick',
    'keydown .js-search-input': '_onKeyDown',
    'submit .js-search-form': 'killEvent'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._modals = new ModalsServiceModel();

    this.pagedSearchModel = new PagedSearchModel({
      per_page: 50,
      order: 'username'
    });

    this.paginationModel = new PaginationModel({
      current_page: this.pagedSearchModel.get('page'),
      total_count: this._organizationUsers.totalCount(),
      per_page: this.pagedSearchModel.get('per_page')
    });

    // Include current user in fetch results
    this._organizationUsers.excludeCurrentUser(false);

    this._initBinds();

    this.pagedSearchModel.fetch(this._organizationUsers);
  },

  render: function render() {
    this.clearSubViews();

    this.$el.html(template({
      seats: this._organization.get('seats'),
      assigned_seats: this._organization.get('assigned_seats'),
      viewer_seats: this._organization.get('viewer_seats'),
      assigned_viewer_seats: this._organization.get('assigned_viewer_seats'),
      newUserUrl: this._organization.viewUrl().create()
    }));

    this._initViews();

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._organizationUsers, 'fetching', function () {
      this._panes && this._panes.active('loading');
    });

    this.listenTo(this._organizationUsers, 'error', function (error) {
      // Old requests can be stopped, so aborted requests are not
      // considered as an error
      if (!error || error && error.statusText !== 'abort') {
        this._panes.active('error');
      }
    });

    this.listenTo(this._organizationUsers, 'sync', function (collection) {
      var total = collection.totalCount();

      this.paginationModel.set({
        total_count: total,
        current_page: this.pagedSearchModel.get('page')
      });
      this._panes && this._panes.active(total > 0 ? 'users' : 'no_results');
    });

    this.listenTo(this._organizationUsers, 'sync error loading', function (collection) {
      this[this.pagedSearchModel.get('q') ? '_showCleanSearchButton' : '_hideCleanSearchButton']();
    });

    this.listenTo(this.paginationModel, 'change:current_page', function (model) {
      var newPage = model.get('current_page');

      this.pagedSearchModel.set('page', newPage);
      this.pagedSearchModel.fetch(this._organizationUsers);
    });

    $(document).on('click', '.js-inviteUser', this._onInviteClick.bind(this));
  },

  _initViews: function _initViews() {
    this._panes = new TabPane({
      el: this.$('.js-organizationUsersPanes')
    });
    this.addView(this._panes);

    this._panes.addTab('users', new OrganizationUsersListView({
      organization: this._organization,
      collection: this._organizationUsers,
      paginationModel: this.paginationModel,
      userModel: this._userModel
    }).render());

    this._panes.addTab('error', ViewFactory.createByHTML(errorTemplate({
      msg: ''
    })).render());

    this._panes.addTab('no_results', ViewFactory.createByHTML(noResultsTemplate({
      icon: 'CDB-IconFont-defaultUser',
      title: 'Oh! No results',
      desc: 'Unfortunately we haven\'t found any user with these parameters'
    })).render());

    this._panes.addTab('loading', ViewFactory.createByHTML(loadingView({
      title: 'Getting users...'
    })).render());

    // Form footer
    var footer = new OrganizationUsersFooterView({
      model: this._organization,
      organizationUsers: this._organizationUsers,
      configModel: this._configModel
    });
    this.addView(footer);
    this.$el.append(footer.render().el);

    var activePane = 'loading';

    if (this._organizationUsers.totalCount() === 0) {
      activePane = 'no_results';
    } else if (this._organizationUsers.totalCount() > 0) {
      activePane = 'users';
    }

    this._panes.active(activePane);
  },

  _openAddUserDropdown: function _openAddUserDropdown(event) {
    if (this._dropdownView) this._dropdownView.clean();

    this._dropdownView = new DropdownAdminView({
      className: 'Dropdown border',
      target: $(event.target),
      width: 120,
      template: addUsersTemplate,
      vertical_position: 'down',
      horizontal_position: 'right',
      createUrl: this._organization.viewUrl().create(),
      tick: 'right'
    });

    $('body').append(this._dropdownView.render().el);

    this._dropdownView.on('onDropdownHidden', function () {
      this._dropdownView.clean();
    }, this);

    this._dropdownView.open(event);
  },

  _showCleanSearchButton: function _showCleanSearchButton() {
    this.$('.js-clean-search').show();
  },

  _hideCleanSearchButton: function _hideCleanSearchButton() {
    this.$('.js-clean-search').hide();
  },

  _focusSearchInput: function _focusSearchInput() {
    var $searchInput = this._$searchInput();
    $searchInput.focus().val($searchInput.val());
  },

  _onSearchClick: function _onSearchClick(e) {
    if (e) this.killEvent(e);
    this._$searchInput().focus();
  },

  _onCleanSearchClick: function _onCleanSearchClick(ev) {
    this.killEvent(ev);
    this._cleanSearch();
  },

  _onKeyDown: function _onKeyDown(ev) {
    var enterPressed = ev.keyCode === $.ui.keyCode.ENTER;
    var escapePressed = ev.keyCode === $.ui.keyCode.ESCAPE;
    if (enterPressed) {
      this.killEvent(ev);
      this._submitSearch();
    } else if (escapePressed) {
      this.killEvent(ev);
      if (this.pagedSearchModel.get('q')) {
        this._cleanSearch();
      }
    }
  },

  _submitSearch: function _submitSearch(e) {
    var search = this._$searchInput().val().trim();
    this.pagedSearchModel.set({
      q: Utils.stripHTML(search),
      page: 1
    });

    this.pagedSearchModel.fetch(this._organizationUsers);
  },

  _$searchInput: function _$searchInput() {
    return this.$('.js-search-input');
  },

  _cleanSearch: function _cleanSearch() {
    this._$searchInput().val('');
    this.pagedSearchModel.set({
      q: '',
      page: 1
    });

    this.pagedSearchModel.fetch(this._organizationUsers);
  },

  _onInviteClick: function _onInviteClick(event) {
    var _this = this;

    event.preventDefault();

    this._dropdownView.clean();

    this._modals.create(function (modalModel) {
      return new InviteUsersDialogView({
        configModel: _this._configModel,
        organization: _this._organization,
        organizationUsers: _this._organizationUsers,
        modalModel: modalModel
      });
    });
  },

  clean: function clean() {
    this._organizationUsers.restoreExcludeCurrentUser();
    $(document).off('click', '.js-inviteUser', this._onInviteClick.bind(this));
    CoreView.prototype.clean.apply(this);
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/organization-users/organization-users.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="OrganizationSearch">\n  <div class="OrganizationSearch-Item">\n    <button class="OrganizationSearch-FormButton js-search-link u-alignCenter CDB-Text CDB-Size-medium u-actionTextColor">\n      <i class="CDB-IconFont CDB-IconFont-lens"></i>Search\n    </button>\n  </div>\n  <div class="OrganizationSearch-Item">\n    <form class="OrganizationSearch-Form js-search-form" action="#">\n      <input class="OrganizationSearch-FormInput CDB-Text CDB-Size-medium u-secondaryTextColor js-search-input" type="text" placeholder="Search by username or email" />\n      <button type="button" class="CDB-Text CDB-Size-large u-actionTextColor OrganizationSearch-FormButton--clean js-clean-search" style="display: none;">x</button>\n    </form>\n  </div>\n  <div class="u-flex u-alignCenter CDB-Text CDB-Size-small u-secondaryTextColor">\n    Builder (' +
__e( assigned_seats ) +
'/' +
__e( seats ) +
') - Viewer (' +
__e( assigned_viewer_seats ) +
'/' +
__e( viewer_seats ) +
')\n  </div>\n  <div class="OrganizationSearch-Item">\n    <button class="CDB-Button CDB-Button--secondary CDB-Button--small js-addUserOptions">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">\n          Add users\n          <i class="Button-arrowMenu CDB-IconFont CDB-IconFont-caretDown"></i>\n      </span>\n    </button>\n  </div>\n</div>\n\n<div class="CDB-Text js-organizationUsersPanes"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/regenerate-keys-dialog-view.js":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/regenerate-keys-dialog-view.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./regenerate-keys.tpl */ "./lib/assets/javascripts/dashboard/views/organization/regenerate-keys.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['modalModel', 'type', 'scope', 'form_action', 'passwordNeeded', 'authenticity_token'];

module.exports = CoreView.extend({
  events: {
    'click .js-cancel': '_closeDialog'
  },

  defaults: {
    method: 'post'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._method = this.options.method;
  },

  render: function render() {
    return this.$el.html(template({
      type: this._type,
      scope: this._scope,
      form_action: this._form_action,
      passwordNeeded: this._passwordNeeded,
      authenticity_token: this._authenticity_token,
      method: this._method
    }));
  },

  _closeDialog: function _closeDialog() {
    this._modalModel.destroy();
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/dashboard/views/organization/regenerate-keys.tpl":
/*!*********************************************************************************!*\
  !*** ./lib/assets/javascripts/dashboard/views/organization/regenerate-keys.tpl ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


if (scope === 'organization') {
  person_scope = 'You and all organization users';
} else if (scope === 'organization_user') {
  person_scope = 'The user';
} else {
  person_scope = 'You';
}
;
__p += '\n\n<div class="CDB-Text Dialog-header u-inner">\n  <div class="Dialog-headerIcon Dialog-headerIcon--negative">\n    <i class="CDB-IconFont CDB-IconFont-keys"></i>\n  </div>\n  <p class="Dialog-headerTitle u-ellipsLongText">\n  ';
 if (scope === 'organization') { ;
__p += '\n    You are about to regenerate the ' +
__e( type === "api" ? 'API keys' : 'OAuth credentials' ) +
' for all the users of the organization\n  ';
 } else if (scope === 'organization_user') { ;
__p += '\n    You are about to regenerate the ' +
__e( type === "api" ? 'API keys' : 'OAuth credentials' ) +
' for this user of the organization\n  ';
 } else { ;
__p += '\n    You are about to regenerate your ' +
__e( type === "api" ? 'API keys' : 'OAuth credentials' ) +
'\n  ';
 } ;
__p += '\n  </p>\n  <p class="Dialog-headerText">\n    ';
 if (type === "api") { ;
__p += '\n      ' +
__e( person_scope ) +
' will need to update all deployed apps with the new API keys. Are you sure you want to continue?\n    ';
 } else { ;
__p += '\n      ' +
__e( person_scope ) +
' will have to update all OAuth keys in apps where you are using CARTO. Are you sure?\n    ';
 } ;
__p += '\n  </p>\n</div>\n<form action="' +
__e( form_action ) +
'" method="post">\n  ';
 if (passwordNeeded) { ;
__p += '\n    <div class="CDB-Text Dialog-body">\n      <div class="Form-row Form-row--centered has-label">\n        <div class="Form-rowLabel">\n          <label class="Form-label">Your password</label>\n        </div>\n        <div class="Form-rowData">\n          <input type="password" id="deletion_password_confirmation" name="password_confirmation" class="CDB-InputText CDB-Text Form-input Form-input--long" value=""/>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n  <div class="Dialog-footer u-inner">\n    <button type="button" class="CDB-Button CDB-Button--secondary js-cancel">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">cancel</span>\n    </button>\n\n    <input name="utf8" type="hidden" value="&#x2713;" />\n    <input name="_method" type="hidden" value="' +
__e( method ) +
'" />\n    <input name="authenticity_token" type="hidden" value="' +
__e( authenticity_token ) +
'" />\n    <button type="submit" class="CDB-Button CDB-Button--error">\n      <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-small u-upperCase">Regenerate ' +
__e( type === "api" ? 'API keys' : 'OAuth credentials' ) +
'</span>\n    </button>\n  </div>\n</form>\n';

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

/***/ 16:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib/assets/javascripts/dashboard/organization.js ./assets/stylesheets/plugins/tagit.scss ./assets/stylesheets/organization/assets.scss ./assets/stylesheets/organization/invite_users_dialog.scss ./assets/stylesheets/organization/organization_user_details.scss ./assets/stylesheets/organization/organization_user_quota.scss ./assets/stylesheets/organization/organization_user_search.scss ./assets/stylesheets/organization/organization_users_list.scss ./assets/stylesheets/editor-3/_assets.scss ./assets/stylesheets/editor-3/_modals-layout.scss ./assets/stylesheets/editor-3/_tab-pane.scss ./assets/stylesheets/editor-3/_modals-elements.scss ./assets/stylesheets/editor-3/_scroll-view.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /cartodb/lib/assets/javascripts/dashboard/organization.js */"./lib/assets/javascripts/dashboard/organization.js");
__webpack_require__(/*! /cartodb/assets/stylesheets/plugins/tagit.scss */"./assets/stylesheets/plugins/tagit.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/assets.scss */"./assets/stylesheets/organization/assets.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/invite_users_dialog.scss */"./assets/stylesheets/organization/invite_users_dialog.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/organization_user_details.scss */"./assets/stylesheets/organization/organization_user_details.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/organization_user_quota.scss */"./assets/stylesheets/organization/organization_user_quota.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/organization_user_search.scss */"./assets/stylesheets/organization/organization_user_search.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/organization/organization_users_list.scss */"./assets/stylesheets/organization/organization_users_list.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/editor-3/_assets.scss */"./assets/stylesheets/editor-3/_assets.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/editor-3/_modals-layout.scss */"./assets/stylesheets/editor-3/_modals-layout.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/editor-3/_tab-pane.scss */"./assets/stylesheets/editor-3/_tab-pane.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/editor-3/_modals-elements.scss */"./assets/stylesheets/editor-3/_modals-elements.scss");
module.exports = __webpack_require__(/*! /cartodb/assets/stylesheets/editor-3/_scroll-view.scss */"./assets/stylesheets/editor-3/_scroll-view.scss");


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
//# sourceMappingURL=organization.js.map