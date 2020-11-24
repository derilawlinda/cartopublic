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
/******/ 		"builder_embed": 0
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
/******/ 	deferredModules.push([19,"common_vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/stylesheets/deep-insights/entry.scss":
/*!*****************************************************!*\
  !*** ./assets/stylesheets/deep-insights/entry.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/stylesheets/plugins/tipsy.scss":
/*!***********************************************!*\
  !*** ./assets/stylesheets/plugins/tipsy.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-banner-view.js":
/*!*******************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-banner-view.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./embed-banner.tpl */ "./lib/assets/javascripts/builder/embed/embed-banner.tpl");

var SIGN_UP_URL = 'https://carto.com/signup';
var REMOVE_BANNER_URL = 'https://carto.com/help/building-maps/remove-banner-from-map/';

var EmbedBannerView = CoreView.extend({

  className: 'CDB-Embed-banner--inner',

  events: {
    'click .js-close': '_close'
  },

  initialize: function initialize() {
    this.template = template;
  },

  render: function render() {
    this.$el.html(this.template({
      startNowUrl: this._getStartNowUrl(),
      removeBannerUrl: REMOVE_BANNER_URL
    }));
    return this;
  },

  _getStartNowUrl: function _getStartNowUrl() {
    return SIGN_UP_URL + '?utm_source=embed' + '&utm_medium=referral' + '&utm_campaing=Free_Public_Map_Banner';
  },

  _close: function _close() {
    this.hide();
  }
});

module.exports = EmbedBannerView;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-banner.tpl":
/*!***************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-banner.tpl ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div <div class="CDB-Embed-banner__inner">\n  <div class="CDB-Embed-banner__close js-close"></div>\n  <p class="CDB-Embed-banner__title">Want to create maps like this?</p>\n  <a class="CDB-Embed-banner__button" href="' +
((__t = ( startNowUrl )) == null ? '' : __t) +
'" target="_blank"><span>Start now</span></a>\n  <a class="CDB-Embed-banner__link" href="' +
((__t = ( removeBannerUrl )) == null ? '' : __t) +
'" target="_blank">Remove this banner</a>\n</div>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-integrations.js":
/*!********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-integrations.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var LegendManager = __webpack_require__(/*! ./legend-manager */ "./lib/assets/javascripts/builder/embed/legend-manager.js");

var REQUIRED_OPTS = ['deepInsightsDashboard', 'layerStyleCollection'];

/**
 * Integration between embed view with cartodb.js and deep-insights.
 */
var EmbedIntegrations = function EmbedIntegrations(opts) {
  checkAndBuildOpts(opts, REQUIRED_OPTS, this);

  this._getWidgets().each(function (model) {
    this._bindWidgetChanges(model);
  }, this);

  LegendManager.trackLegends(this._getLayers());
};

EmbedIntegrations.prototype._bindWidgetChanges = function (model) {
  // wait until the widget has the state from the url
  model.bind('change:hasInitialState', function (model) {
    model.bind('change:autoStyle', this._onWidgetAutoStyleChanged, this);

    // In order to trigger legend update, we wait until the cartocss from autostyle is applied
    if (model.isAutoStyle()) {
      if (!model.layerModel.get('initialStyle')) {
        model.layerModel.once('change:initialStyle', function () {
          this._onWidgetAutoStyleChanged(model);
        }, this);
      } else {
        this._onWidgetAutoStyleChanged(model);
      }
    }
  }, this);
};

EmbedIntegrations.prototype._onWidgetAutoStyleChanged = function (model) {
  var isAnyAutoStyleApplied = this._getWidgets().any(function (model) {
    return model.isAutoStyle();
  }, this);

  var isAutoStyleApplied = model.isAutoStyle();
  var layerId = model.layerModel.id;
  var layerStyle;

  if (isAutoStyleApplied) {
    LegendManager.updateLegends(layerId);

    layerStyle = this._layerStyleCollection.findById(layerId);
    // setting this in order to restore initial style when disable autostyle
    if (model.layerModel) {
      model.layerModel.attributes.initialStyle = layerStyle.get('cartocss');
    }
  } else if (!isAnyAutoStyleApplied) {
    LegendManager.resetLegends(layerId);
  }
};

EmbedIntegrations.prototype._getLayer = function (model) {
  return this.visMap().getLayerById(model.id);
};

EmbedIntegrations.prototype._getLayers = function (model) {
  return this.visMap().layers;
};

EmbedIntegrations.prototype.visMap = function () {
  return this._vis().map;
};

EmbedIntegrations.prototype._getWidgets = function () {
  return this._deepInsightsDashboard._dashboard.widgets._widgetsCollection;
};

EmbedIntegrations.prototype._vis = function () {
  return this._deepInsightsDashboard.getMap();
};

module.exports = EmbedIntegrations;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-overlay-view.js":
/*!********************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-overlay-view.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var embedOverlayTemplate = __webpack_require__(/*! ./embed-overlay.tpl */ "./lib/assets/javascripts/builder/embed/embed-overlay.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['title', 'description', 'showMenu'];

var EmbedOverlayView = CoreView.extend({
  className: 'CDB-Embed-overlay',

  events: {
    'click .js-toggle': '_toggle'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    if (!_.isUndefined(options.template)) {
      this._template = options.template;
    }

    this._initModels();
    this._initBinds();
  },

  render: function render() {
    this.$el.empty();

    var opts = {
      title: this._title,
      description: this._description,
      legends: true,
      showMenu: this._showMenu
    };

    var content = this._renderOverlay(opts);

    if (this._template) {
      content = this._renderTemplate(opts);
    }

    this.$el.html(content);

    return this;
  },

  _renderOverlay: function _renderOverlay(opts) {
    return embedOverlayTemplate(opts);
  },

  _renderTemplate: function _renderTemplate(opts) {
    return this._template({
      content: this._renderOverlay(_.extend(opts, { legends: false }))
    });
  },

  _initModels: function _initModels() {
    this.model = new Backbone.Model({
      collapsed: false
    });
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.model, 'change:collapsed', this._toggleCollapsed, this);
  },

  _toggle: function _toggle() {
    this.model.set('collapsed', !this.model.get('collapsed'));
  },

  _toggleCollapsed: function _toggleCollapsed() {
    var collapsed = this.model.get('collapsed');

    this.$('.CDB-Overlay-title').toggleClass('is-collapsed', collapsed);
    this.$('.CDB-ArrowToogle').toggleClass('is-down', !collapsed);
    this.$('.CDB-Overlay-inner').toggleClass('is-active', !collapsed);
  }
});

module.exports = EmbedOverlayView;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-overlay.tpl":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-overlay.tpl ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Overlay-title';
 if (!description && !legends) { ;
__p += ' is-collapsed';
 } ;
__p += '">\n  <h1 class="CDB-Text CDB-Size-large u-ellipsis" title="' +
((__t = ( title )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n\n  ';
 if (description || legends) { ;
__p += '\n    <div class="CDB-Overlay-options">\n      <button class="CDB-Shape js-toggle u-lSpace">\n        <div class="CDB-ArrowToogle is-blue is-down is-mini"></div>\n      </button>\n    </div>\n  ';
 } ;
__p += '\n</div>\n\n';
 if (description || legends) { ;
__p += '\n  <div class="CDB-Overlay-inner is-active';
 if (!legends) { ;
__p += ' is-description';
 } ;
__p += '">\n    ';
 if (description) { ;
__p += '<div class="CDB-Embed-description';
 if (legends) { ;
__p += ' is-legends';
 } ;
__p += ' CDB-Text CDB-Size-medium u-altTextColor" title="' +
((__t = ( description )) == null ? '' : __t) +
'">' +
((__t = ( description )) == null ? '' : __t) +
'</div>';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed-view.js":
/*!************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed-view.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var Ps = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/index.js");
var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");
var TabsView = __webpack_require__(/*! ./tabs/tabs-view */ "./lib/assets/javascripts/builder/embed/tabs/tabs-view.js");
var template = __webpack_require__(/*! ./embed.tpl */ "./lib/assets/javascripts/builder/embed/embed.tpl");
var EmbedOverlayView = __webpack_require__(/*! ./embed-overlay-view */ "./lib/assets/javascripts/builder/embed/embed-overlay-view.js");
var EmbedBannerView = __webpack_require__(/*! ./embed-banner-view */ "./lib/assets/javascripts/builder/embed/embed-banner-view.js");

var TAB_NAMES = {
  map: 'map',
  legends: 'legends'
};

var TAB_TITLES = {
  map: 'map',
  legends: 'legends',
  layers: 'layers'
};

var MOBILE_VIEWPORT_BREAKPOINT = 599;
var FULLSCREEN_VIEWPORT_BREAKPOINT = 1199;

var REQUIRED_OPTS = ['title', 'description', 'showMenu', 'showLegends', 'showLayerSelector', 'showBanner'];

var EmbedView = CoreView.extend({
  module: 'embed:embed-view',

  className: 'CDB-Embed-view',

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this._onlyLayerSelector = !this._showLegends && this._showLayerSelector;
    this._showLegends = this._showLegends || this._showLayerSelector;

    if (this._showLegends) {
      var selectedTab = _.find(this._tabs, function (tab) {
        return tab.isSelected;
      });

      this._tabsModel = new Backbone.Model({
        selected: selectedTab ? selectedTab.name : TAB_NAMES.map
      });

      this._initBinds();
    }
  },

  render: function render() {
    this.$el.html(template({
      title: this._title,
      description: this._description,
      showMenu: this._showMenu,
      showLegends: this._showLegends,
      showBanner: this._showBanner
    }));

    var mapTabConfig = {
      name: TAB_NAMES.map,
      title: TAB_TITLES.map,
      isSelected: true
    };
    var legendTabConfig = {
      name: TAB_NAMES.legends,
      title: this._onlyLayerSelector ? TAB_TITLES.layers : TAB_NAMES.legends
    };

    if (this._showLegends) {
      var tabsView = new TabsView({
        model: this._tabsModel,
        tabs: [mapTabConfig, legendTabConfig]
      });
      this.addView(tabsView);

      this.$('.js-tabs').replaceWith(tabsView.render().$el);
    }

    if (this._showBanner) {
      var embedView = new EmbedBannerView();
      this.$('.js-embed-banner').append(embedView.render().el);
      this.addView(embedView);
    }

    return this;
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._tabsModel, 'change:selected', this._onSelectedTabChanged);

    window.addEventListener('resize', this.onWindowResized.bind(this), { passive: true });
  },

  _onSelectedTabChanged: function _onSelectedTabChanged() {
    var contentId = '.js-embed-' + this._tabsModel.get('selected');
    var content = this.$(contentId);

    content.siblings().removeClass('is-active');
    content.addClass('is-active');

    // Update PerfectScrollbar
    var perfectScrollbarContainer = content.find('.ps-container').get(0);
    if (perfectScrollbarContainer) {
      Ps.update(perfectScrollbarContainer);
    }
  },

  injectTitle: function injectTitle(mapEl) {
    var legendsEl = mapEl.find('.CDB-Legends-canvasInner');
    this.$scrollShadowTop = mapEl.find('.CDB-Legends-canvasShadow--top');
    this.$scrollShadowBottom = mapEl.find('.CDB-Legends-canvasShadow--bottom');

    this.titleView = new EmbedOverlayView({
      title: this._title,
      description: this._description,
      showMenu: this._showMenu
    });
    this.addView(this.titleView);
    this.listenTo(this.titleView.model, 'change:collapsed', function (model) {
      // Hack because PS is not triggering events
      if (model.get('collapsed')) {
        this.$scrollShadowTop.removeClass('is-visible');
        this.$scrollShadowBottom.removeClass('is-visible');
        // This is the correct way of doing it, the lines above are a hack, because PS is not triggering events
        legendsEl.scrollTop(0);
        Ps.update(legendsEl.get(0));
      } else {
        // Hack as well, see comment above
        if (legendsEl.get(0).scrollHeight > legendsEl.height()) {
          this.$scrollShadowBottom.addClass('is-visible');
        }
      }
    });

    legendsEl.prepend(this.titleView.render().el);

    legendsEl.find('.CDB-LayerLegends').detach().appendTo(legendsEl.find('.CDB-Overlay-inner'));
  },

  onWindowResized: function onWindowResized() {
    if (window.innerWidth > MOBILE_VIEWPORT_BREAKPOINT && this._tabsModel.get('selected') !== TAB_NAMES.map) {
      this._tabsModel.set({ selected: TAB_NAMES.map });
    }

    if (this.titleView && window.innerWidth > FULLSCREEN_VIEWPORT_BREAKPOINT) {
      this.titleView.model.set('collapsed', false);
    }
  }
});

module.exports = EmbedView;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/embed.tpl":
/*!********************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/embed.tpl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (showMenu && showLegends) { ;
__p += '\n  <header class="CDB-Embed-header ';
 if (!showLegends) { ;
__p += ' CDB-Embed-header--shadow ';
 } ;
__p += '">\n    <h1 class="CDB-Text CDB-Size-large u-ellipsis" title="' +
((__t = ( title )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n    ';
 if (description) { ;
__p += '<div class="CDB-Embed-description CDB-Text CDB-Size-medium u-altTextColor" title="' +
((__t = ( description )) == null ? '' : __t) +
'">' +
((__t = ( description )) == null ? '' : __t) +
'</div>';
 } ;
__p += '\n  </header>\n';
 } ;
__p += '\n\n';
 if (showLegends) { ;
__p += '\n  <div class="CDB-Embed-tabs CDB-NavMenu js-tabs"></div>\n';
 } ;
__p += '\n\n<div class="CDB-Embed-content">\n  <div class="CDB-Embed-tab ';
 if (showMenu) { ;
__p += ' CDB-Embed-tab--menu ';
 } ;
__p += ' is-active js-embed-map"></div>\n\n  ';
 if (showLegends) { ;
__p += '\n    <div class="CDB-Embed-tab CDB-Embed-legends js-embed-legends"></div>\n  ';
 } ;
__p += '\n</div>\n';
 if (showBanner) { ;
__p += '\n<div class="CDB-Embed-banner js-embed-banner"></div>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/legend-manager.js":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/legend-manager.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var legendsMetadata = __webpack_require__(/*! builder/data/legends/legends-metadata */ "./lib/assets/javascripts/builder/data/legends/legends-metadata.js");

var legends;

var LEGENDS_METADATA = _.keys(legendsMetadata);
var LEGENDS_COLOR = ['category', 'choropleth'];

var LegendManager = {
  trackLegends: function trackLegends(layers) {
    legends = {};

    _.each(layers.models, function (layerModel) {
      var legendsLayer;
      var options = {};
      if (layerModel.legends != null) {
        legendsLayer = layerModel.legends;
        _.each(LEGENDS_METADATA, function (legend) {
          var legendModel = legendsLayer[legend];
          if (legendModel.get('visible') === true) {
            options[legend] = legendModel;
          }
        });
        legends[layerModel.id] = options;
      }
    });
  },

  getLegends: function getLegends() {
    return legends;
  },

  updateLegends: function updateLegends(layerId) {
    var legendsLayer = legends[layerId];
    _.each(LEGENDS_COLOR, function (legend) {
      var legendModel = legendsLayer[legend];
      legendModel && legendModel.set({ visible: false });
    });
  },

  resetLegends: function resetLegends(layerId) {
    var legendsLayer = legends[layerId];
    _.each(legendsLayer, function (legend) {
      legend.set({ visible: true });
    });
  }
};

module.exports = LegendManager;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/style-collection.js":
/*!******************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/style-collection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(/*! backbone */ "./node_modules/backbone/backbone.js");
module.exports = Backbone.Collection.extend({
  model: function model(d, opts) {
    var attrs = {};
    attrs.id = d.id;
    if (d.options.tile_style) {
      attrs.cartocss = d.options.tile_style;
    }
    return new Backbone.Model(attrs);
  },

  resetByLayersData: function resetByLayersData(data) {
    this.reset(data, {
      silent: true
    });
  },

  findById: function findById(id) {
    return this.findWhere({ id: id });
  }
});

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/tabs/tab-item.tpl":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/tabs/tab-item.tpl ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="CDB-NavMenu-item js-tab';
 if (isSelected) { ;
__p += ' is-selected';
 } ;
__p += '" data-tab="' +
((__t = ( name )) == null ? '' : __t) +
'">\n    <button class="CDB-NavMenu-link u-upperCase">' +
((__t = ( title )) == null ? '' : __t) +
'</button>\n</li>';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/tabs/tabs-view.js":
/*!****************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/tabs/tabs-view.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CoreView = __webpack_require__(/*! backbone/core-view */ "./lib/assets/javascripts/vendor/backbone/core-view.js");
var template = __webpack_require__(/*! ./tabs.tpl */ "./lib/assets/javascripts/builder/embed/tabs/tabs.tpl");
var tabItemTemplate = __webpack_require__(/*! ./tab-item.tpl */ "./lib/assets/javascripts/builder/embed/tabs/tab-item.tpl");
var checkAndBuildOpts = __webpack_require__(/*! builder/helpers/required-opts */ "./lib/assets/javascripts/builder/helpers/required-opts.js");

var REQUIRED_OPTS = ['tabs'];

var TabsView = CoreView.extend({
  module: 'embed:tabs:tabs-view',

  tagName: 'nav',

  className: 'CDB-Embed-tabs CDB-NavMenu js-tabs',

  events: {
    'click .js-tab': '_onTabClicked'
  },

  initialize: function initialize(options) {
    checkAndBuildOpts(options, REQUIRED_OPTS, this);

    this.listenTo(this.model, 'change:selected', this._onSelectedTabChanged);
  },

  render: function render() {
    this.$el.empty();

    this.$el.html(template());

    this._tabs.map(function (tab) {
      this.$('.js-tabs-container').append(tabItemTemplate({
        name: tab.name,
        title: tab.title || tab.name,
        isSelected: tab.isSelected
      }));
    }.bind(this));

    return this;
  },

  _onSelectedTabChanged: function _onSelectedTabChanged() {
    var tabName = this.model.get('selected');
    var tab = this.$('[data-tab="' + tabName + '"]');

    tab.siblings().removeClass('is-selected');
    tab.addClass('is-selected');
  },

  _onTabClicked: function _onTabClicked(event) {
    var tab = this.$(event.currentTarget);
    var tabName = tab.data('tab');

    this.model.set({
      selected: tabName
    });
  }
});

module.exports = TabsView;

/***/ }),

/***/ "./lib/assets/javascripts/builder/embed/tabs/tabs.tpl":
/*!************************************************************!*\
  !*** ./lib/assets/javascripts/builder/embed/tabs/tabs.tpl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<ul class="CDB-NavMenu-inner CDB-NavMenu-inner--legends CDB-Text is-semibold CDB-Size-medium js-tabs-container"></ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/builder/public_editor.js":
/*!*********************************************************!*\
  !*** ./lib/assets/javascripts/builder/public_editor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
__webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/promise.js");

var FastClick = __webpack_require__(/*! fastclick */ "./node_modules/fastclick/lib/fastclick.js");
FastClick.attach(document.body);

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
var ConfigModel = __webpack_require__(/*! builder/data/config-model */ "./lib/assets/javascripts/builder/data/config-model.js");
var LayerStyleCollection = __webpack_require__(/*! builder/embed/style-collection */ "./lib/assets/javascripts/builder/embed/style-collection.js");
var MetricsTracker = __webpack_require__(/*! builder/components/metrics/metrics-tracker */ "./lib/assets/javascripts/builder/components/metrics/metrics-tracker.js");
var deepInsights = __webpack_require__(/*! deep-insights/index */ "./lib/assets/javascripts/deep-insights/index.js");
var EmbedIntegrations = __webpack_require__(/*! builder/embed/embed-integrations */ "./lib/assets/javascripts/builder/embed/embed-integrations.js");
var URLStateHelper = __webpack_require__(/*! deep-insights/api/url-helper.js */ "./lib/assets/javascripts/deep-insights/api/url-helper.js");
var EmbedView = __webpack_require__(/*! builder/embed/embed-view */ "./lib/assets/javascripts/builder/embed/embed-view.js");
var utils = __webpack_require__(/*! builder/helpers/utils */ "./lib/assets/javascripts/builder/helpers/utils.js");

var BANNER_ACCOUNTS = ['FREE'];

var vizJSON = window.vizJSON;
var authTokens = window.authTokens;
var stateJSON = window.stateJSON;
var layersData = window.layersData;
var ownerData = window.ownerData;
var anyLayerWithLegends = vizJSON.layers.some(function (layer) {
  return layer.legends && layer.legends.length;
});

var configModel = new ConfigModel({ base_url: ownerData.base_url });

var layerStyleCollection = new LayerStyleCollection();
layerStyleCollection.resetByLayersData(layersData);

var embedView = new EmbedView({
  title: vizJSON.title,
  description: utils.stripHTML(vizJSON.description),
  showMenu: vizJSON.options.dashboard_menu,
  showLegends: vizJSON.options.legends && anyLayerWithLegends,
  showLayerSelector: !!vizJSON.options.layer_selector,
  showBanner: ownerData && BANNER_ACCOUNTS.indexOf(ownerData.account_type) > -1
});

MetricsTracker.init({
  visId: vizJSON.id,
  configModel: configModel
});

$('#dashboard').prepend(embedView.render().$el);

var cartoLogoOption = _.findWhere(vizJSON.overlays, { type: 'logo' });
var dashboardOpts = {
  no_cdn: false,
  cartodb_logo: cartoLogoOption !== undefined,
  renderMenu: vizJSON.options.dashboard_menu,
  share_urls: true,
  authToken: authTokens,
  layerSelectorEnabled: true
};

var stateFromURL = URLStateHelper.getStateFromCurrentURL();
if (stateFromURL && !_.isEmpty(stateFromURL)) {
  _.extend(dashboardOpts, {
    state: stateFromURL
  });
} else if (stateJSON && stateJSON !== '{}') {
  _.extend(dashboardOpts, {
    state: stateJSON
  });
}

deepInsights.createDashboard('.js-embed-map', vizJSON, dashboardOpts, function (error, dashboard) {
  if (error) {
    window.trackJs && window.trackJs.console.log({
      type: 'Dashboard:',
      data: error
    });
  }

  var map = dashboard.getMap().map;
  var scrollwheel = vizJSON.options.scrollwheel;
  var method = scrollwheel ? 'enableScrollWheel' : 'disableScrollWheel';
  map && map[method] && map[method]();

  embedView.injectTitle($('.js-embed-map'));

  var embedIntegrations = new EmbedIntegrations({
    deepInsightsDashboard: dashboard,
    layerStyleCollection: layerStyleCollection
  });

  window.embedIntegrations = embedIntegrations;
});

window.layerStyleCollection = layerStyleCollection;

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/dashboard-menu-view.tpl":
/*!**********************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/dashboard-menu-view.tpl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Dashboard-menuContainer">\n  <div class="CDB-Dashboard-menuInner">\n    <div class="CDB-Dashboard-menuHeader">\n      ';
 if (showLogo === true) { ;
__p += '\n      <div class="CDB-Dashboard-menuLogo">\n        <a href="http://carto.com" target="_blank">\n          <svg viewBox="0 0 62 24" height="24" width="62">\n              <g class="CDB-EmbedLogo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                  <path d="M3.94693333,15.9877346 C5.63066667,15.9877346 6.60373333,15.2552013 7.32533333,14.260268 L5.72906667,13.1232013 C5.26986667,13.6808013 4.79973333,14.0525346 4.0016,14.0525346 C2.93013333,14.0525346 2.17573333,13.1560013 2.17573333,12.0080013 L2.17573333,11.9861346 C2.17573333,10.8709346 2.93013333,9.95253464 4.0016,9.95253464 C4.73413333,9.95253464 5.23706667,10.3133346 5.6744,10.849068 L7.27066667,9.6136013 C6.5928,8.68426797 5.58693333,8.02826797 4.02346667,8.02826797 C1.7056,8.02826797 0,9.7776013 0,12.0080013 L0,12.029868 C0,14.3149346 1.76026667,15.9877346 3.94693333,15.9877346 L3.94693333,15.9877346 Z M10.93653,15.834668 L13.1559967,15.834668 L13.7026634,14.457068 L16.6655967,14.457068 L17.2122634,15.834668 L19.4863967,15.834668 L16.2282634,8.12666797 L14.18373,8.12666797 L10.93653,15.834668 Z M14.3258634,12.8061346 L15.1895967,10.6413346 L16.0423967,12.8061346 L14.3258634,12.8061346 Z M23.61653,15.834668 L25.7375966,15.834668 L25.7375966,13.5168013 L26.6778633,13.5168013 L28.2194633,15.834668 L30.6575966,15.834668 L28.83173,13.1669346 C29.78293,12.7624013 30.40613,11.9861346 30.40613,10.8053346 L30.40613,10.783468 C30.40613,10.029068 30.17653,9.4496013 29.7282633,9.00133464 C29.2143966,8.48746797 28.40533,8.18133464 27.2354633,8.18133464 L23.61653,8.18133464 L23.61653,15.834668 Z M25.7375966,11.8549346 L25.7375966,10.0072013 L27.1370633,10.0072013 C27.8367966,10.0072013 28.2850633,10.3133346 28.2850633,10.9256013 L28.2850633,10.947468 C28.2850633,11.505068 27.8586633,11.8549346 27.1479966,11.8549346 L25.7375966,11.8549346 Z M36.7338633,15.834668 L38.8549299,15.834668 L38.8549299,10.0400013 L41.1509299,10.0400013 L41.1509299,8.18133464 L34.4487966,8.18133464 L34.4487966,10.0400013 L36.7338633,10.0400013 L36.7338633,15.834668 Z" class="CDB-EmbedLogo-text" fill="#FFFFFF"></path>\n                  <g class="CDB-EmbedLogo-image"\n                    ';
 if (hasTranslation) { ;
__p += '\n                      transform="translate(37.000000, 0.000000)"\n                    ';
 } ;
__p += '\n                  >\n                      <circle class="CDB-EmbedLogo-halo" fill="rgba(255, 255, 255, 0.20)"  cx="12.3333333" cy="12" r="12"></circle>\n                      <path d="M12.3333333,16.5 C14.8186147,16.5 16.8333333,14.4852814 16.8333333,12 C16.8333333,9.51471863 14.8186147,7.5 12.3333333,7.5 C9.84805196,7.5 7.83333333,9.51471863 7.83333333,12 C7.83333333,14.4852814 9.84805196,16.5 12.3333333,16.5 L12.3333333,16.5 Z" class="CDB-EmbedLogo-point" fill="#FFFFFF" ></path>\n                  </g>\n              </g>\n          </svg>\n        </a>\n      </div>\n      ';
 } ;
__p += '\n\n      <ul class="CDB-Dashboard-menuActions">\n        <li class="CDB-Dashboard-menuActionsItem">\n          <a href="https://twitter.com/share?url=' +
__e( urlWithoutParams ) +
'&text=' +
__e( shortTitle ) +
'" target="_blank" class="u-hintTextColor">\n            <i class="CDB-IconFont CDB-IconFont-twitter CDB-Size-large"></i>\n          </a>\n        </li>\n        <li class="CDB-Dashboard-menuActionsItem">\n          <a href="http://www.facebook.com/sharer.php?u=' +
__e( urlWithoutParams ) +
'&text=' +
__e( shortTitle ) +
'" target="_blank" class="u-hintTextColor">\n            <i class="CDB-IconFont CDB-IconFont-facebook CDB-Size-medium"></i>\n          </a>\n        </li>\n        ';
 if (inIframe) { ;
__p += '\n          <li class="CDB-Dashboard-menuActionsItem">\n            <a href="' +
__e( url ) +
'" target="_blank" class="u-hintTextColor">\n              <i class="CDB-IconFont CDB-IconFont-anchor CDB-Size-medium"></i>\n            </a>\n          </li>\n        ';
 } ;
__p += '\n      </ul>\n\n\n      <div class="CDB-Dashboard-menuInfo">\n        <button class="js-toggle-view">\n          <i class="CDB-IconFont CDB-Size-medium CDB-IconFont-rArrowLight Size-large"></i>\n        </button>\n      </div>\n\n      <div class="CDB-Dashboard-menuTexts CDB-Dashboard-hideMobile">\n        <div class="CDB-Dashboard-menuTextInner js-content">\n          <button class="js-toggle-view u-actionTextColor CDB-Dashboard-menuTextActions">\n            <svg width="10px" height="7px" viewBox="12 13 10 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <path d="M12,13.5 C12,13.2238576 12.1908338,13 12.4169561,13 L21.5830439,13 C21.8133224,13 22,13.2319336 22,13.5 C22,13.7761424 21.8091662,14 21.5830439,14 L12.4169561,14 C12.1866776,14 12,13.7680664 12,13.5 L12,13.5 L12,13.5 Z M12,16.5 C12,16.2238576 12.1908338,16 12.4169561,16 L21.5830439,16 C21.8133224,16 22,16.2319336 22,16.5 C22,16.7761424 21.8091662,17 21.5830439,17 L12.4169561,17 C12.1866776,17 12,16.7680664 12,16.5 L12,16.5 L12,16.5 Z M12,19.5 C12,19.2238576 12.1908338,19 12.4169561,19 L21.5830439,19 C21.8133224,19 22,19.2319336 22,19.5 C22,19.7761424 21.8091662,20 21.5830439,20 L12.4169561,20 C12.1866776,20 12,19.7680664 12,19.5 L12,19.5 L12,19.5 Z" id="Combined-Shape" stroke="none" fill="#1785fB" fill-rule="evenodd"></path>\n            </svg>\n          </button>\n          <p class="CDB-Dashboard-menuTime CDB-Text CDB-Size-small u-upperCase u-altTextColor u-bSpace--m js-timeAgo">UPDATED ' +
__e( updatedAt ) +
'</p>\n          <div class="CDB-Dashboard-metadata">\n            <h1 class="CDB-Dashboard-menuTitle CDB-Dashboard-menuTitle--mobile CDB-Text CDB-Size-huge u-ellipsis js-title" title="' +
__e( title ) +
'">' +
__e( title ) +
'</h1>\n\n            <div class="CDB-Dashboard-scrollWrapper js-scroll-wrapper">\n              <div class="CDB-Dashboard-scrollContent js-scroll-content">\n                <h2 class="CDB-Dashboard-menuDescription CDB-Text CDB-Size-large is-light u-secondaryTextColor js-description">' +
((__t = ( cdb.core.sanitize.html(description) )) == null ? '' : __t) +
'</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class="CDB-Dashboard-menuFooter">\n      <ul>\n        <li class="CDB-Dashboard-menuFooterItem ">\n          <div class="CDB-Dashboard-menuMedia CDB-Dashboard-menuAvatar">\n            <img src="' +
__e( userAvatarURL ) +
'" alt="avatar" class="inline-block"/>\n          </div>\n          <p class="CDB-Text CDB-Size-medium CDB-Dashboard-menuFooterTxt">Map by <a href="' +
__e( userProfileURL ) +
'" target="_blank">' +
__e( userName ) +
'</a></p>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="CDB-Dashboard-bg js-toggle-view"></div>\n\n  <div class="CDB-Dashboard-menuHeaderMobile">\n    <div class="u-flex u-alignStart CDB-Dashboard-menuHeaderMobileInner">\n      <button class="js-toggle-view u-actionTextColor CDB-Dashboard-menuHeaderMobileActions">\n        <i class="CDB-IconFont CDB-Size-medium CDB-IconFont-rArrowLight Size-large"></i>\n      </button>\n      <div class="CDB-Dashboard-menuHeaderMobileText">\n        ';
 if (showLogo === true) { ;
__p += '\n        <div class="CDB-Dashboard-menuLogo">\n          <a href="http://carto.com" target="_blank">\n          <svg width="62px" height="24px" viewBox="35 63 62 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n              <g class="CDB-EmbedLogo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(35.000000, 63.000000)">\n                  <path d="M3.94693333,15.9877346 C5.63066667,15.9877346 6.60373333,15.2552013 7.32533333,14.260268 L5.72906667,13.1232013 C5.26986667,13.6808013 4.79973333,14.0525346 4.0016,14.0525346 C2.93013333,14.0525346 2.17573333,13.1560013 2.17573333,12.0080013 L2.17573333,11.9861346 C2.17573333,10.8709346 2.93013333,9.95253464 4.0016,9.95253464 C4.73413333,9.95253464 5.23706667,10.3133346 5.6744,10.849068 L7.27066667,9.6136013 C6.5928,8.68426797 5.58693333,8.02826797 4.02346667,8.02826797 C1.7056,8.02826797 0,9.7776013 0,12.0080013 L0,12.029868 C0,14.3149346 1.76026667,15.9877346 3.94693333,15.9877346 L3.94693333,15.9877346 Z M10.93653,15.834668 L13.1559967,15.834668 L13.7026634,14.457068 L16.6655967,14.457068 L17.2122634,15.834668 L19.4863967,15.834668 L16.2282634,8.12666797 L14.18373,8.12666797 L10.93653,15.834668 Z M14.3258634,12.8061346 L15.1895967,10.6413346 L16.0423967,12.8061346 L14.3258634,12.8061346 Z M23.61653,15.834668 L25.7375966,15.834668 L25.7375966,13.5168013 L26.6778633,13.5168013 L28.2194633,15.834668 L30.6575966,15.834668 L28.83173,13.1669346 C29.78293,12.7624013 30.40613,11.9861346 30.40613,10.8053346 L30.40613,10.783468 C30.40613,10.029068 30.17653,9.4496013 29.7282633,9.00133464 C29.2143966,8.48746797 28.40533,8.18133464 27.2354633,8.18133464 L23.61653,8.18133464 L23.61653,15.834668 Z M25.7375966,11.8549346 L25.7375966,10.0072013 L27.1370633,10.0072013 C27.8367966,10.0072013 28.2850633,10.3133346 28.2850633,10.9256013 L28.2850633,10.947468 C28.2850633,11.505068 27.8586633,11.8549346 27.1479966,11.8549346 L25.7375966,11.8549346 Z M36.7338633,15.834668 L38.8549299,15.834668 L38.8549299,10.0400013 L41.1509299,10.0400013 L41.1509299,8.18133464 L34.4487966,8.18133464 L34.4487966,10.0400013 L36.7338633,10.0400013 L36.7338633,15.834668 Z" class="CDB-EmbedLogo-text" fill="#FFFFFF"></path>\n                  <g class="CDB-EmbedLogo-image" transform="translate(37.000000, 0.000000)">\n                      <circle class="CDB-EmbedLogo-halo" fill="rgba(255, 255, 255, 0.20)"  cx="12.3333333" cy="12" r="12"></circle>\n                      <path d="M12.3333333,16.5 C14.8186147,16.5 16.8333333,14.4852814 16.8333333,12 C16.8333333,9.51471863 14.8186147,7.5 12.3333333,7.5 C9.84805196,7.5 7.83333333,9.51471863 7.83333333,12 C7.83333333,14.4852814 9.84805196,16.5 12.3333333,16.5 L12.3333333,16.5 Z" class="CDB-EmbedLogo-point" fill="#FFFFFF" ></path>\n                  </g>\n              </g>\n          </svg>\n          </a>\n        </div>\n        ';
 } ;
__p += '\n        <p class="CDB-Dashboard-menuTime CDB-Text CDB-Size-small u-upperCase u-altTextColor u-bSpace--m js-timeAgo">UPDATED ' +
__e( updatedAt ) +
'</p>\n        <h1 class="CDB-Text CDB-Size-large u-ellipsis js-title u-bSpace--xl u-ellipsis">' +
__e( title ) +
'</h1>\n        <h2 class="CDB-Text CDB-Size-medium u-secondaryTextColor js-description">' +
((__t = ( cdb.core.sanitize.html(description) )) == null ? '' : __t) +
'</h2>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/dashboard-sidebar.tpl":
/*!********************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/dashboard-sidebar.tpl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Widget-canvasInner js-container"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/dashboard.tpl":
/*!************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/dashboard.tpl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Dashboard-mapWrapper js-map-wrapper">\n  <div class="CDB-Map-canvas">\n    <div class="CDB-Map" id="map"></div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/content-template.tpl":
/*!************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/content-template.tpl ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Widget-header js-header"></div>\n<div class="CDB-Widget-content CDB-Widget-content--noSidesMargin">\n  <div class="CDB-Widget-listWrapper js-content"></div>\n</div>\n<div class="CDB-Widget-footer js-footer"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/list/item/item-clickable-template.tpl":
/*!*****************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/list/item/item-clickable-template.tpl ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button type="button" class="CDB-Widget-listItemInner CDB-Widget-listButton js-button ' +
__e( isDisabled ? 'is-disabled' : '' ) +
'">\n  <div class="CDB-Widget-contentSpaced">\n    <p class="CDB-Text is-semibold u-upperCase CDB-Size-medium u-ellipsis u-rSpace--xl" title="' +
__e( name ) +
'">' +
__e( name ) +
'</p>\n    <p class="CDB-Text CDB-Size-small u-secondaryTextColor" title="' +
__e( value ) +
'">' +
__e( prefix ) +
'' +
__e( formattedValue ) +
'' +
__e( suffix ) +
'</p>\n  </div>\n  <div class="CDB-Widget-progressBar">\n    <div class="CDB-Widget-progressState ' +
__e( isAggregated ? 'CDB-Widget-progressState--pattern' : '' ) +
' ' +
__e( isAccepted ? 'is-accepted' : '' ) +
'" style="width: ' +
__e( percentage ) +
'%; background-color: ' +
__e( color ) +
'"></div>\n  </div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/list/item/item-unclickable-template.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/list/item/item-unclickable-template.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Widget-listItemInner ' +
__e( isDisabled ? 'is-disabled' : '' ) +
'">\n  <div class="CDB-Widget-contentSpaced">\n    <p class="CDB-Text is-semibold u-upperCase CDB-Size-medium u-ellipsis u-rSpace--xl" title="' +
__e( name ) +
'">' +
__e( name ) +
'</p>\n    <p class="CDB-Text CDB-Size-small u-secondaryTextColor" title="' +
__e( value ) +
'">' +
__e( prefix ) +
'' +
__e( formattedValue ) +
'' +
__e( suffix ) +
'</p>\n  </div>\n  <div class="CDB-Widget-progressBar">\n    <div class="CDB-Widget-progressState CDB-Widget-progressState--pattern ' +
__e( isAggregated ? 'CDB-Widget-progressState--inactive' : '' ) +
'"\n      style="width: ' +
__e( percentage ) +
'%; background-color: ' +
__e( color ) +
'"></div>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/list/item/search-item-clickable-template.tpl":
/*!************************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/list/item/search-item-clickable-template.tpl ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button type="button" class="CDB-Widget-listItemInner CDB-Widget-listItemInner--fullSpace CDB-Widget-listButton js-button ' +
__e( isDisabled ? 'is-disabled' : '' ) +
'">\n  <span class="CDB-Widget-checkbox ' +
__e( isDisabled ? '' : 'is-checked' ) +
'"></span>\n  <div class="u-lSpace u-ellipsis">\n    <div class="CDB-Widget-contentSpaced">\n      <p class="CDB-Text is-semibold u-upperCase CDB-Size-medium u-ellipsis u-rSpace--xl" title="' +
__e( name ) +
'">' +
__e( name ) +
'</p>\n      <p class="CDB-Text CDB-Size-small u-secondaryTextColor" title="' +
__e( value ) +
'">' +
__e( prefix ) +
'' +
__e( formattedValue ) +
'' +
__e( suffix ) +
'</p>\n    </div>\n    <div class="CDB-Widget-progressBar">\n      <div class="CDB-Widget-progressState is-accepted" style="width: ' +
__e( percentage ) +
'%"></div>\n    </div>\n  </div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/list/items-placeholder-template.tpl":
/*!***************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/list/items-placeholder-template.tpl ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<li class="CDB-Widget-listItem CDB-Widget-listItem--fake"></li>\n<li class="CDB-Widget-listItem CDB-Widget-listItem--fake"></li>\n<li class="CDB-Widget-listItem CDB-Widget-listItem--fake"></li>\n<li class="CDB-Widget-listItem CDB-Widget-listItem--fake"></li>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/list/search-items-no-results-template.tpl":
/*!*********************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/list/search-items-no-results-template.tpl ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="CDB-Widget-listItem">\n  <h4 class="CDB-Text CDB-Size-large">No results</h4>\n  <p class="CDB-Text CDB-Size-medium u-tSpace-xl u-altTextColor">Your search "' +
__e( q ) +
'" didn\'t match<br/>with any value.</p>\n  <p class="CDB-Text CDB-Size-medium u-tSpace-xl u-altTextColor">Try searching again.</p>\n</li>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/options/options-template.tpl":
/*!********************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/options/options-template.tpl ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (isSearchEnabled) { ;
__p += '\n  <p class="CDB-Text is-semibold CDB-Size-small u-upperCase js-lockCategories">' +
__e( totalLocked ) +
' selected</p>\n';
 } else { ;
__p += '\n  <p class="CDB-Text is-semibold CDB-Size-small u-upperCase js-textInfo">\n    ';
 if (isLocked) { ;
__p += '\n      ' +
__e( totalCats ) +
' blocked <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor CDB-Widget-link u-lSpace js-unlock">unlock</button>\n    ';
 } else { ;
__p += '\n      ';
 if (noneSelected) { ;
__p += '\n        None selected\n      ';
 } else { ;
__p += '\n        ' +
__e( allSelected ? "All selected" : acceptedCats + " selected" ) +
'\n        ';
 if (canBeLocked) { ;
__p += '\n          <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor CDB-Widget-link u-lSpace js-lock">lock</button>\n        ';
 };
__p += '\n      ';
 };
__p += '\n    ';
 } ;
__p += '\n  </p>\n  ';
 if (canSelectAll) { ;
__p += '\n    <div class="CDB-Widget-filterButtons">\n      <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor CDB-Widget-link CDB-Widget-filterButton js-all">all</button>\n    </div>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/paginator/pagination-template.tpl":
/*!*************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/paginator/pagination-template.tpl ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="CDB-Widget-pagination">\n  <button class="CDB-Widget-paginationButton u-rSpace--m js-prev">\n    <svg width="6px" height="10px" viewBox="0 0 6 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g fill="#1785FB">\n        <path d="M5.09530663,4.3528203 C5.12374481,4.37148693 5.15072296,4.39333837 5.17574487,4.41836028 C5.20217765,4.44479306 5.22503325,4.47380933 5.24426546,4.50470442 C5.4081023,4.70181793 5.39325947,4.99960853 5.21412378,5.17874423 C5.15044967,5.24241833 5.07410755,5.28556158 4.99327465,5.30793729 L0.85159735,9.44961458 C0.653891927,9.64732 0.339500325,9.64512912 0.144238179,9.44986697 C-0.0453133946,9.2603154 -0.0509109683,8.93790934 0.144490568,8.7425078 L4.10763557,4.7793628 L0.182869475,0.85459671 C-0.012532062,0.659195174 -0.00693448836,0.336789113 0.182617085,0.14723754 C0.377879231,-0.0480246061 0.692270834,-0.050215493 0.889976256,0.147489929 L5.09530663,4.3528203 Z" transform="translate(2.679181, 4.798552) scale(-1, 1) translate(-2.679181, -4.798552) "></path>\n      </g>\n    </svg>\n  </button>\n  <p class="CDB-Text CDB-Size-small is-semibold u-upperCase">\n    <span class="u-mainTextColor">' +
__e( currentPage ) +
'</span>\n    <span class="u-altTextColor u-lSpace u-rSpace">of</span>\n    <span class="u-mainTextColor">' +
__e( pages ) +
'</span>\n  </p>\n  <button class="CDB-Widget-paginationButton u-lSpace--m js-next">\n    <svg width="6px" height="10px" viewBox="0 0 6 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g fill="#1785FB">\n        <path d="M5.28600662,4.78918286 C5.3144448,4.80784949 5.34142295,4.82970094 5.36644486,4.85472284 C5.39287764,4.88115562 5.41573324,4.91017189 5.43496545,4.94106698 C5.59880229,5.13818049 5.58395946,5.4359711 5.40482376,5.61510679 C5.34114966,5.6787809 5.26480754,5.72192414 5.18397463,5.74429985 L1.04229734,9.88597714 C0.844591917,10.0836826 0.530200314,10.0814917 0.334938168,9.88622953 C0.145386595,9.69667796 0.139789021,9.3742719 0.335190558,9.17887036 L4.29833556,5.21572536 L0.373569464,1.29095927 C0.178167927,1.09555773 0.183765501,0.773151675 0.373317075,0.583600101 C0.56857922,0.388337955 0.882970823,0.386147068 1.08067625,0.58385249 L5.28600662,4.78918286 Z"></path>\n      </g>\n    </svg>\n  </button>\n</section>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/paginator/paginator-template.tpl":
/*!************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/paginator/paginator-template.tpl ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="CDB-Widget-contentFlex">\n  <button class="u-rSpace--m CDB-Text is-semibold u-upperCase CDB-Size-small js-searchToggle">\n    <div class="CDB-Shape u-iBlock">\n      <span class="CDB-Shape-magnify is-small is-blue"></span>\n    </div>\n    <span class="u-iBlock u-actionTextColor">\n      search in ' +
__e( categoriesCount ) +
' categor' +
__e( categoriesCount === 1 ? 'y' : 'ies' ) +
'\n    </span>\n  </button>\n</div>\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/paginator/search-paginator-template.tpl":
/*!*******************************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/paginator/search-paginator-template.tpl ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Widget-contentFlex u-rSpace--xl">\n  <button class="CDB-Text is-semibold u-upperCase CDB-Size-small u-rSpace--m js-searchToggle u-actionTextColor">cancel</button>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/stats/cats-template.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/stats/cats-template.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( value ) +
'\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/stats/stats-template.tpl":
/*!****************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/stats/stats-template.tpl ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (isSearchEnabled) { ;
__p += '\n    ';
 if (isSearchApplied) { ;
__p += '\n      <dt class="CDB-Widget-infoCount">' +
__e( resultsCount ) +
'</dt><dd class="CDB-Widget-infoDescription">found</dd>\n    ';
 } else { ;
__p += '\n      &nbsp;\n    ';
 } ;
__p += '\n  </dt>\n';
 } else { ;
__p += '\n  <dt class="CDB-Widget-infoCount">' +
__e( nullsPer ) +
'%</dt><dd class="CDB-Widget-infoDescription"> null rows</dd>\n  <dt class="CDB-Widget-infoCount"><span class="js-cats">' +
__e( catsPer ) +
'</span>%</dt><dd class="CDB-Widget-infoDescription">of total</dd>\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/category/title/search-title-template.tpl":
/*!***********************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/category/title/search-title-template.tpl ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (isSearchEnabled) { ;
__p += '\n  <form class="CDB-Widget-search js-form">\n    <div class="CDB-Shape CDB-Widget-searchLens u-iBlock u-rSpace js-searchIcon">\n      <span class="CDB-Shape-magnify is-small is-blue"></span>\n    </div>\n    <input type="text" class="CDB-Text CDB-Size-large CDB-Widget-textInput CDB-Widget-searchTextInput js-textInput" value="' +
__e( q ) +
'" placeholder="Search by ' +
__e( columnName ) +
'"/>\n    ';
 if (canShowApply) { ;
__p += '\n      <button type="button" class="CDB-Text is-semibold u-upperCase CDB-Size-small CDB-Widget-searchApply js-applyLocked u-actionTextColor">apply</button>\n    ';
 } ;
__p += '\n  </form>\n';
 } else { ;
__p += '\n  <div class="CDB-Widget-title CDB-Widget-contentSpaced js-title">\n    <h3 class="CDB-Text CDB-Size-large u-ellipsis js-titleText" title="' +
__e( title ) +
'">' +
__e( title ) +
'</h3>\n    <div class="CDB-Widget-options CDB-Widget-contentSpaced">\n      ';
 if (isAutoStyleEnabled) { ;
__p += '\n        <button class="CDB-Widget-buttonIcon CDB-Widget-buttonIcon--circle js-colors\n          ' +
__e( isAutoStyle ? 'is-selected' : '' ) +
'\n          ' +
__e( isAutoStyle ? 'js-cancelAutoStyle' : 'js-autoStyle' ) +
'\n          " data-tooltip="\n            ' +
__e( isAutoStyle ? 'Remove Auto style' : 'Apply Auto Style' ) +
'\n          ">\n          <i class="CDB-IconFont CDB-IconFont-drop CDB-IconFont--small CDB-IconFont--top"></i>\n        </button>\n      ';
 } ;
__p += '\n      <button class="CDB-Shape CDB-Widget-actions js-actions u-lSpace" data-tooltip="More options">\n        <div class="CDB-Shape-threePoints is-blue is-small">\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n        </div>\n      </button>\n    </div>\n  </div>\n  ';
 if (showSource) { ;
__p += '\n    <dl class="CDB-Widget-info u-tSpace">\n      <div class="u-flex u-alignCenter u-ellipsis">\n        <span class="CDB-Text CDB-Size-small is-semibold u-upperCase" style="color: ' +
__e( sourceColor ) +
';">\n          ' +
__e( sourceId ) +
'\n        </span>\n\n        ';
 if (!isSourceType) { ;
__p += '\n          <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( sourceColor ) +
';">\n            <i class="CDB-IconFont CDB-IconFont-ray CDB-Size-small"></i>\n          </span>\n        ';
 } ;
__p += '\n\n        <span class="CDB-Text CDB-Size-small u-mainTextColor u-lSpace">\n          ' +
((__t = ( sourceType )) == null ? '' : __t) +
'\n        </span>\n\n        <span class="CDB-Text CDB-Size-small u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n          ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n        </span>\n      </div>\n    </dl>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/dropdown/template.tpl":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/dropdown/template.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="CDB-Dropdown-list CDB-Text CDB-Size-medium">\n\n  ';
 if (flags.canCollapse) { ;
__p += '\n    <li class="CDB-Dropdown-item">\n      <button class="CDB-Dropdown-link js-toggleCollapsed">\n        Toggle widget\n          <div class="CDB-Dropdown-toggle">\n          ';
 if (collapsed) { ;
__p += '\n            <input class="CDB-Toggle js-inputCollapsed" checked="checked" type="checkbox" name="collapsed">\n          ';
 } else { ;
__p += '\n            <input class="CDB-Toggle js-inputCollapsed" type="checkbox" name="collapsed">\n          ';
 } ;
__p += '\n            <span class="u-iBlock CDB-ToggleFace"></span>\n          </div>\n      </button>\n    </li>\n  ';
 } ;
__p += '\n\n  ';
 if (flags.localTimezone) { ;
__p += '\n  <li class="CDB-Dropdown-item">\n    <button class="CDB-Dropdown-link js-toggleLocalTimezone">\n      Local Time Zone\n      <div class="CDB-Dropdown-toggle">\n        ';
 if (local_timezone) { ;
__p += '\n          <input class="CDB-Toggle u-iBlock js-localTimezone" checked="checked" type="checkbox" name="localtimezone">\n        ';
 } else { ;
__p += '\n          <input class="CDB-Toggle u-iBlock js-localTimezone" type="checkbox" name="localtimezone">\n        ';
 } ;
__p += '\n        <span class="u-iBlock CDB-ToggleFace"></span>\n      </div>\n    </button>\n  </li>\n  ';
 } ;
__p += '\n\n  ';
 if (flags.normalizeHistogram) { ;
__p += '\n  <li class="CDB-Dropdown-item">\n    <button class="CDB-Dropdown-link js-toggleNormalized">\n      Show totals\n      <div class="CDB-Dropdown-toggle">\n        ';
 if (normalized) { ;
__p += '\n          <input class="CDB-Toggle u-iBlock js-inputNormalized" type="checkbox" name="normalized">\n        ';
 } else { ;
__p += '\n          <input class="CDB-Toggle u-iBlock js-inputNormalized" checked="checked" type="checkbox" name="normalized">\n        ';
 } ;
__p += '\n        <span class="u-iBlock CDB-ToggleFace"></span>\n      </div>\n    </button>\n  </li>\n  ';
 } ;
__p += '\n\n  ';
 if (show_options) { ;
__p += '\n    <li class="CDB-Dropdown-item">\n      <button type="button" class="CDB-Dropdown-link u-ellipsis u-actionTextColor js-editWidget" title="Edit">Edit</button>\n    </li>\n    <li class="CDB-Dropdown-item">\n      <button type="button" class="CDB-Dropdown-link u-ellipsis u-errorTextColor js-removeWidget" title="Delete...">Delete...</button>\n    </li>\n  ';
 } ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/formula/animation-template.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/formula/animation-template.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p +=
((__t = ( prefix )) == null ? '' : __t) +
'' +
((__t = ( value )) == null ? '' : __t) +
'' +
((__t = ( suffix )) == null ? '' : __t) +
'\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/formula/placeholder.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/formula/placeholder.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Widget-listItem--fake"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/formula/template.tpl":
/*!***************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/formula/template.tpl ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-header js-header">\n  <div class="CDB-Widget-title CDB-Widget-contentSpaced">\n    <h3 class="CDB-Text CDB-Size-large u-ellipsis js-title ' +
__e( isCollapsed ? 'is-collapsed' : '' ) +
'">' +
__e( title ) +
'</h3>\n    <div class="CDB-Widget-options">\n      <button class="CDB-Shape CDB-Widget-actions js-actions" data-tooltip="More options">\n        <div class="CDB-Shape-threePoints is-blue is-small">\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n          <div class="CDB-Shape-threePointsItem"></div>\n        </div>\n      </button>\n    </div>\n  </div>\n  ';
 if (showSource) { ;
__p += '\n    <dl class="CDB-Widget-info u-tSpace">\n      <div class="u-flex u-alignCenter u-ellipsis">\n        <span class="CDB-Text CDB-Size-small is-semibold u-upperCase" style="color: ' +
__e( sourceColor ) +
';">\n          ' +
__e( sourceId ) +
'\n        </span>\n\n        ';
 if (!isSourceType) { ;
__p += '\n          <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( sourceColor ) +
';">\n            <i class="CDB-IconFont CDB-IconFont-ray CDB-Size-small"></i>\n          </span>\n        ';
 } ;
__p += '\n\n        <span class="CDB-Text CDB-Size-small u-mainTextColor u-lSpace">\n          ' +
((__t = ( sourceType )) == null ? '' : __t) +
'\n        </span>\n\n        <span class="CDB-Text CDB-Size-small u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n          ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n        </span>\n      </div>\n    </dl>\n  ';
 } ;
__p += '\n  ';
 if (showStats) { ;
__p += '\n    <dl class="CDB-Widget-info CDB-Text CDB-Size-small u-secondaryTextColor u-upperCase u-tSpace">\n      <dt class="CDB-Widget-infoCount">' +
__e( nulls ) +
'</dt><dd class="CDB-Widget-infoDescription">null rows</dd>\n    </dl>\n  ';
 } ;
__p += '\n</div>\n<div class="CDB-Widget-content CDB-Widget-content--formula">\n  ';
 if (_.isNumber(value)) { ;
__p += '\n    <h4 class="CDB-Text CDB-Size-huge ' +
__e( !isCollapsed ? 'js-value' : '' ) +
'" title="' +
__e( value ) +
'">\n      ' +
((__t = ( prefix )) == null ? '' : __t) +
'' +
__e( value ) +
'' +
((__t = ( suffix )) == null ? '' : __t) +
'\n    </h4>\n    ';
 if (description) { ;
__p += '\n      <p class="CDB-Text CDB-Size-small u-tSpace js-description">' +
__e( description ) +
'</p>\n    ';
 } ;
__p += '\n  ';
 } else { ;
__p += '\n    <div class="CDB-Widget-listItem--fake"></div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/histogram/animation-template.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/histogram/animation-template.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( value ) +
' ' +
__e( suffix ) +
'\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/histogram/content.tpl":
/*!****************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/histogram/content.tpl ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-header js-header">\n  <div class="js-title"></div>\n  ';
 if (showSource) { ;
__p += '\n    <dl class="CDB-Widget-info u-tSpace">\n      <div class="u-flex u-alignCenter u-ellipsis">\n        <span class="CDB-Text CDB-Size-small is-semibold u-upperCase" style="color: ' +
__e( sourceColor ) +
';">\n          ' +
__e( sourceId ) +
'\n        </span>\n\n        ';
 if (!isSourceType) { ;
__p += '\n          <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( sourceColor ) +
';">\n            <i class="CDB-IconFont CDB-IconFont-ray CDB-Size-small"></i>\n          </span>\n        ';
 } ;
__p += '\n\n        <span class="CDB-Text CDB-Size-small u-mainTextColor u-lSpace">\n          ' +
((__t = ( sourceType )) == null ? '' : __t) +
'\n        </span>\n\n        <span class="CDB-Text CDB-Size-small u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n          ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n        </span>\n      </div>\n    </dl>\n  ';
 } ;
__p += '\n  ';
 if (showStats) { ;
__p += '\n    <dl class="CDB-Widget-info CDB-Text CDB-Size-small u-secondaryTextColor u-upperCase u-tSpace">\n      ';
 if (showNulls) { ;
__p += '\n      <dt class="CDB-Widget-infoCount js-nulls">0</dt><dd class="CDB-Widget-infoDescription">NULL ROWS</dd>\n      ';
 } ;
__p += '\n      <dt class="CDB-Widget-infoCount js-min">0</dt><dd class="CDB-Widget-infoDescription">MIN</dd>\n      <dt class="CDB-Widget-infoCount js-avg">0</dt><dd class="CDB-Widget-infoDescription">AVG</dd>\n      <dt class="CDB-Widget-infoCount js-max">0</dt><dd class="CDB-Widget-infoDescription">MAX</dd>\n    </dl>\n  ';
 } ;
__p += '\n</div>\n\n<div class="CDB-Widget-content CDB-Widget-content--histogram js-content">\n  <div class="CDB-Widget-filter CDB-Widget-contentSpaced ">\n    <p class="CDB-Text CDB-Size-small is-semibold u-upperCase js-val">…</p>\n    <div class="CDB-Widget-filterButtons js-filter is-hidden">\n      <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor CDB-Widget-filterButton js-zoom">zoom</button>\n      <button class="CDB-Text CDB-Size-small u-upperCase u-actionTextColor CDB-Widget-filterButton js-clear">clear</button>\n    </div>\n  </div>\n  <div class="js-mini-chart"></div>\n  <div class="CDB-Chart--histogram js-chart"></div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/histogram/histogram-title-template.tpl":
/*!*********************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/histogram/histogram-title-template.tpl ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-title CDB-Widget-contentSpaced">\n  <h3 class="CDB-Text CDB-Size-large u-ellipsis" title="' +
__e( title ) +
'">' +
__e( title ) +
'</h3>\n  <div class="CDB-Widget-options CDB-Widget-contentSpaced">\n    ';
 if (isAutoStyleEnabled) { ;
__p += '\n      <button class="CDB-Widget-buttonIcon CDB-Widget-buttonIcon--circle js-sizes\n        ' +
__e( isAutoStyle ? 'is-selected' : '' ) +
'\n        ' +
__e( isAutoStyle ? 'js-cancelAutoStyle' : 'js-autoStyle' ) +
'\n        " data-tooltip="' +
__e( isAutoStyle ? 'Remove Auto style' : 'Apply Auto Style' ) +
'">\n        <i class="CDB-IconFont CDB-IconFont-drop CDB-IconFont--small CDB-IconFont--top"></i>\n      </button>\n    ';
 } ;
__p += '\n    <button class="CDB-Shape CDB-Widget-actions js-actions u-lSpace" data-tooltip="More options">\n      <div class="CDB-Shape-threePoints is-blue is-small">\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n      </div>\n    </button>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/histogram/placeholder.tpl":
/*!********************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/histogram/placeholder.tpl ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="CDB-Widget-chart CDB-Widget-chart--fake">\n  ';
 for (var i = 0; i < 15; i++) { ;
__p += '\n  <li class="CDB-Widget-chartItem CDB-Widget-chartItem--' +
__e( _.sample(['small', 'medium', 'big'], 1)[0] ) +
' CDB-Widget-chartItem--fake"></li>\n  ';
 } ;
__p += '\n</ul>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/animation-template.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/animation-template.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( value ) +
' ' +
__e( suffix ) +
'\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/content.tpl":
/*!******************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/content.tpl ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-header js-header">\n  <div class="js-title"></div>\n\n  ';
 if (showSource) { ;
__p += '\n    <div class="CDB-Widget-contentSpaced CDB-Widget-contentFull">\n      <dl class="CDB-Widget-info u-tSpace">\n        <div class="u-flex u-alignCenter u-ellipsis">\n          <span class="CDB-Text CDB-Size-small is-semibold u-upperCase" style="color: ' +
__e( sourceColor ) +
';">\n            ' +
__e( sourceId ) +
'\n          </span>\n\n          ';
 if (!isSourceType) { ;
__p += '\n            <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( sourceColor ) +
';">\n              <i class="CDB-IconFont CDB-IconFont-ray CDB-Size-small"></i>\n            </span>\n          ';
 } ;
__p += '\n\n          <span class="CDB-Text CDB-Size-small u-mainTextColor u-lSpace">\n            ' +
((__t = ( sourceType )) == null ? '' : __t) +
'\n          </span>\n\n          <span class="CDB-Text CDB-Size-small u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n            ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n          </span>\n        </div>\n      </dl>\n    </div>\n  ';
 } ;
__p += '\n</div>\n\n<div class="CDB-Widget-content CDB-Widget-content--timeSeries js-content"></div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/placeholder.tpl":
/*!**********************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/placeholder.tpl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-header CDB-Widget-header--timeSeries">\n  <div class="CDB-Widget-timeSeriesTimeInfo CDB-Widget-timeSeriesTimeInfo--fake"></div>\n</div>\n<div class="CDB-Widget-content CDB-Widget-content--';
 if (hasTorqueLayer) { ;
__p += 'torqueTimeSeries';
 } else { ;
__p += 'timeSeries';
 } ;
__p += ' u-flex u-alignCenter">\n  ';
 if (hasTorqueLayer) { ;
__p += '\n    <div class="CDB-Widget-timeSeriesFakeControl"></div>\n  ';
 } ;
__p += '\n  <div class="CDB-Widget-timeSeriesFakeChart ';
 if (hasTorqueLayer) { ;
__p += 'CDB-Widget-timeSeriesFakeChart--torque';
 } ;
__p += '">\n    ';
 for (var i = 0; i < 50; i++) { ;
__p += '\n      <div class="CDB-Widget-timeSeriesFakeChartItem" style="height: ' +
__e( Math.floor(Math.random() * 100) ) +
'%"></div>\n    ';
 } ;
__p += '\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/time-series-header.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/time-series-header.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<p class="CDB-Text CDB-Size-large js-widget-title u-iBlock u-ellipsis u-rSpace">' +
__e( title ) +
'</p>\n<div class="CDB-Widget-contentSpaced--end">\n  <div class="CDB-Widget-options CDB-Widget-contentSpaced">\n    <p class="CDB-Text CDB-Size-small is-semibold u-upperCase u-rSpace--m js-val">…</p>\n\n    ';
 if (showSelection && start && end) { ;
__p += '\n      <div class="CDB-Chart-staticTips">\n        <div class="CDB-Chart-staticTip u-iBlock u-rSpace">\n          <p class="CDB-Text CDB-Size-small CDB-Chart-staticTipText">' +
((__t = ( start )) == null ? '' : __t) +
'</p>\n        </div>\n\n        <p class="CDB-Text CDB-Size-small is-semibold u-upperCase u-iBlock u-rSpace">to</p>\n\n        <div class="CDB-Chart-staticTip u-iBlock">\n          <p class="CDB-Text CDB-Size-small CDB-Chart-staticTipText">' +
((__t = ( end )) == null ? '' : __t) +
'</p>\n        </div>\n      </div>\n    ';
 } ;
__p += '\n\n    ';
 if (showClearButton) { ;
__p += '\n      <button class="CDB-Text CDB-Size-small is-semibold u-upperCase u-actionTextColor CDB-Widget-filterButton js-clear">Clear</button>\n    ';
 } ;
__p += '\n    <button class="CDB-Shape CDB-Widget-actions js-actions u-lSpace" data-tooltip="More options">\n      <div class="CDB-Shape-threePoints is-blue is-small">\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n        <div class="CDB-Shape-threePointsItem"></div>\n      </div>\n    </button>\n  </div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/torque-controls.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/torque-controls.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button class="CDB-Widget-controlButton ';
 if (disabled) { ;
__p += 'is-disabled ';
 } ;
__p += '" ';
 if (disabled) { ;
__p += ' disabled ';
 } ;
__p += '>\n    <div class="CDB-Widget-controlButtonContent">\n\n    ';
 if (running) { ;
__p += '\n        <svg width="6px" height="10px" viewBox="0 0 6 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Time-series" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Time-Series" transform="translate(-201.000000, -543.000000)" fill="#FFFFFF">\n                <g id="TS---01" transform="translate(168.000000, 432.000000)">\n                    <g id="Torque-bar" transform="translate(24.000000, 100.000000)">\n                        <g id="Button-Pause" transform="translate(0.000000, 4.000000)">\n                            <path d="M9,7 L10,7 L10,17 L9,17 L9,7 Z M14,7 L15,7 L15,17 L14,17 L14,7 Z" id="Combined-Shape"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        </svg>\n    ';
} else { ;
__p += '\n        <svg width="9px" height="11px" viewBox="0 0 9 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g id="Time-series" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Time-Series" transform="translate(-200.000000, -279.000000)" fill-rule="nonzero" fill="#FFFFFF">\n                <g id="TS---01" transform="translate(168.000000, 168.000000)">\n                    <g id="Torque-bar" transform="translate(24.000000, 72.000000)">\n                        <g id="Button-Play" transform="translate(0.000000, 32.000000)">\n                            <path d="M15.766443,12.044867 L9.20456553,8.10774058 C8.92171794,7.93803203 9,7.89347968 9,8.22734108 L9,16.2102807 C9,16.5418859 8.92367044,16.4984182 9.20456553,16.3298812 L15.766443,12.3927547 C16.0692969,12.2110424 16.0693051,12.2265843 15.766443,12.044867 Z M16.2809387,11.1873741 C17.23035,11.7570209 17.2319213,12.6796581 16.2809387,13.2502477 L9.71906129,17.1873741 C8.76964995,17.7570209 8,17.3168605 8,16.2102807 L8,8.22734108 C8,7.11806049 8.76807871,6.67965811 9.71906129,7.25024766 L16.2809387,11.1873741 Z" id="Triangle"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        </svg>\n    ';
 } ;
__p += '\n    </div>\n</button>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/torque-header-view.tpl":
/*!*****************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/torque-header-view.tpl ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="CDB-Widget-contentSpaced CDB-Widget-contentSpaced--end js-torque-controls"></div>\n<div class="CDB-Widget-contentFull">\n  <div class="js-time-series-header"></div>\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/torque-template.tpl":
/*!**************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/torque-template.tpl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-header js-header">\n  <div class="js-torque-header"></div>\n\n  ';
 if (showSource) { ;
__p += '\n    <div class="CDB-Widget-contentSpaced CDB-Widget-contentFull">\n      <dl class="CDB-Widget-info u-tSpace">\n        <div class="u-flex u-alignCenter u-ellipsis">\n          <span class="CDB-Text CDB-Size-small is-semibold u-upperCase" style="color: ' +
__e( sourceColor ) +
';">\n            ' +
__e( sourceId ) +
'\n          </span>\n\n          ';
 if (!isSourceType) { ;
__p += '\n            <span class="CDB-Text CDB-Size-small u-lSpace--s u-flex" style="color: ' +
__e( sourceColor ) +
';">\n              <i class="CDB-IconFont CDB-IconFont-ray CDB-Size-small"></i>\n            </span>\n          ';
 } ;
__p += '\n\n          <span class="CDB-Text CDB-Size-small u-mainTextColor u-lSpace">\n            ' +
((__t = ( sourceType )) == null ? '' : __t) +
'\n          </span>\n\n          <span class="CDB-Text CDB-Size-small u-altTextColor u-ellipsis u-lSpace" title="' +
((__t = ( layerName )) == null ? '' : __t) +
'">\n            ' +
((__t = ( layerName )) == null ? '' : __t) +
'\n          </span>\n        </div>\n      </dl>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/time-series/torque-time-info.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/time-series/torque-time-info.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p class="CDB-Text CDB-Size-large u-secondaryTextColor u-iBlock">\n  ' +
__e( time ) +
'\n</p>\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/widget-error-button-template.tpl":
/*!***************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/widget-error-button-template.tpl ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p +=
((__t = ( placeholder )) == null ? '' : __t) +
'\n<button class="CDB-Button CDB-Button--secondary CDB-Button--medium CDB-Widget-errorButton js-refresh">\n  <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium">REFRESH</span>\n</button>\n\n';

}
return __p
}

/***/ }),

/***/ "./lib/assets/javascripts/deep-insights/widgets/widget-error-text-template.tpl":
/*!*************************************************************************************!*\
  !*** ./lib/assets/javascripts/deep-insights/widgets/widget-error-text-template.tpl ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="CDB-Widget-title CDB-Widget-contentSpaced">\n  <h3 class="CDB-Text CDB-Size-large u-ellipsis" title="' +
__e( title ) +
'">' +
__e( title ) +
'</h3>\n</div>\n\n<h2 class="CDB-Text CDB-Size-small is-semibold u-upperCase u-tSpace">' +
__e( error ) +
'</h2>\n\n<div class="CDB-Text CDB-Size-medium u-tSpace-xl">' +
__e( message ) +
'</div>\n\n';
 if (refresh) { ;
__p += '\n  <button class="CDB-Button CDB-Button--secondary CDB-Button--medium u-tSpace-xl js-refresh">\n    <span class="CDB-Button-Text CDB-Text is-semibold CDB-Size-medium">REFRESH</span>\n  </button>\n';
 }  else { ;
__p += '\n  ' +
((__t = ( placeholder )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n';

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

/***/ "./node_modules/cartoassets/src/scss/entry.scss":
/*!******************************************************!*\
  !*** ./node_modules/cartoassets/src/scss/entry.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./node_modules/internal-carto.js/themes/scss/entry.scss":
/*!***************************************************************!*\
  !*** ./node_modules/internal-carto.js/themes/scss/entry.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 19:
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi whatwg-fetch ./lib/assets/javascripts/builder/public_editor.js ./assets/stylesheets/plugins/tipsy.scss ./assets/stylesheets/deep-insights/entry.scss ./node_modules/internal-carto.js/themes/scss/entry.scss ./node_modules/cartoassets/src/scss/entry.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! whatwg-fetch */"./node_modules/whatwg-fetch/fetch.js");
__webpack_require__(/*! /cartodb/lib/assets/javascripts/builder/public_editor.js */"./lib/assets/javascripts/builder/public_editor.js");
__webpack_require__(/*! /cartodb/assets/stylesheets/plugins/tipsy.scss */"./assets/stylesheets/plugins/tipsy.scss");
__webpack_require__(/*! /cartodb/assets/stylesheets/deep-insights/entry.scss */"./assets/stylesheets/deep-insights/entry.scss");
__webpack_require__(/*! /cartodb/node_modules/internal-carto.js/themes/scss/entry.scss */"./node_modules/internal-carto.js/themes/scss/entry.scss");
module.exports = __webpack_require__(/*! /cartodb/node_modules/cartoassets/src/scss/entry.scss */"./node_modules/cartoassets/src/scss/entry.scss");


/***/ }),

/***/ 20:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

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
//# sourceMappingURL=builder_embed.js.map