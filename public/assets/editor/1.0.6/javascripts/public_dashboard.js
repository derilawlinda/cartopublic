(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * Check if Linux user used right/middle click at the time of the event
 *
 * @param ev {Event}
 * @returns {boolean}
 */
function isLinuxMiddleOrRightClick(ev) {
  return ev.which === 2 || ev.which === 3;
}

/**
 * Check if Mac user used CMD key at the time of the event Mac user used CMD key at the time of the event.
 *
 * @param ev {Event}
 * @returns {boolean}
 */
function isMacCmdKeyPressed(ev) {
  return ev.metaKey;
}

function isCtrlKeyPressed(ev) {
  return ev.ctrlKey;
}

/**
 * Click handler for a cartodb.js view, to navigate event target's href URL through the view's router.navigate method.
 *
 * The default behavior is:
 * Unless cmd/ctrl keys are pressed it will cancel the default link behavior and instead navigate to the URL set in the
 * target's href attribute.
 *
 * Prerequisities:
 *  - view has a this.router instance.
 *
 * Example of how to use:
 *   - In a template:
 *     <a href="/some/uri" id="#my-link" ...
 *     <a href="/special/uri" id="#my-special-link" ...
 *
 *   - In the view file:
 *     var navigateThroughRouter = require('../../common/view_helpers/navigateThroughRouter');
 *     module.exports = new cdb.core.View.extend({
 *       events: {
 *         'click a#my-link': navigateThroughRouter
 *         'click a#my-special-link': this._myCustomRoute
 *       }
 *
 *       _myCustomRoute: function(ev) {
 *         // Here you can do you custom logic before/after the routing, e.g.:
 *         console.log('before changing route');
 *         navigateThroughRouter.apply(this, arguments);
 *         console.log('after changing route');
 *       }
 *
 * @param ev {Event}
 */
module.exports = function(ev) {
  // We always kill the default behaviour of the event, since container around view might have other click behavior.
  // In case of a cmd/ctrl click by an user.
  this.killEvent(ev);
  var url = $(ev.target).closest('a').attr('href');

  if (!url) {
    return false;
  }

  if (!isLinuxMiddleOrRightClick(ev) && !isMacCmdKeyPressed(ev)) {
    (this.router || this.options.router).navigate(url, { trigger: true });
  } else if (isCtrlKeyPressed(ev) || isMacCmdKeyPressed(ev)) {
    window.open(url, '_blank');
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

/**
 * Creates a default fallback map, to be used when an user don't have any own map visualizations.
 *
 * @param opts {Object} config
 *   el: {String,HTMLElement} id to element where to render map (w/o '#' prefix) or a HTMLElement node
 *   baselayer: {Object} as an item defined in app_config.yml (basemaps key)
 * @returns {Object} a new created Leaflet map
 */
module.exports = function(opts) {
  var provider = 'leaflet';
  var type = 'tiled';
  if (!opts.baselayer.urlTemplate) {
    provider = 'googlemaps';
    type = 'GMapsBase';
  }
  var map = cdb.createVis(opts.el, {
    'version': '0.1.0',
    'title': 'default',
    'scrollwheel': opts.scrollwheel !== undefined ? opts.scrollwheel : false,
    'zoom': 6,
    map_provider: provider,
    center: [40.7127837, -74.0059413], // NY
    layers: [ _.extend({ type: type }, opts.baselayer) ]
  });

  return map;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

/**
 *  MapCard previews
 *
 */

module.exports = cdb.core.View.extend({

  options: {
    width: 300,
    height: 170,
    privacy: 'PUBLIC',
    username: '',
    visId: '',
    mapsApiResource: '',
    className: '',
    authTokens: []
  },

  _TEMPLATES: {
    // Using <%= %> instead of <%- %> because if not / characters (for example) will be escaped
    regular: '<%- protocol %>://<%= mapsApiResource %>/api/v1/map/static/named/<%- tpl %>/<%- width %>/<%- height %>.png<%= authTokens %>',
    cdn: '<%- protocol %>://<%- cdn %>/<%- username %>/api/v1/map/static/named/<%- tpl %>/<%- width %>/<%- height %>.png<%= authTokens %>'
  },

  initialize: function() {
    _.each(['visId', 'mapsApiResource', 'username'], function(name) {
      if (!this.options[name]) {
        console.log(name + ' is required for Static Map instantiation');
      }
    }, this);
  },

  load: function() {
    this._startLoader();
    this._loadFromVisId();

    return this;
  },

  _generateImageTemplate: function() {
    return 'tpl_' + this.options.visId.replace(/-/g, '_');
  },

  _loadFromVisId: function() {
    var protocol = this._isHTTPS() ? 'https': 'http';
    var cdnConfig = cdb.config.get('cdn_url');
    var template = _.template(cdnConfig ? this._TEMPLATES['cdn'] : this._TEMPLATES['regular']);

    var options = {
      protocol: protocol,
      username: this.options.username,
      mapsApiResource: this.options.mapsApiResource,
      tpl: this._generateImageTemplate(),
      width: this.options.width,
      height: this.options.height,
      authTokens: this._generateAuthTokensParams()
    };

    if (cdnConfig) {
      options = _.extend(options, { cdn: cdnConfig[protocol] });
    }

    var url = template(options);

    this._loadImage({}, url);
  },

  _generateAuthTokensParams: function () {
    var authTokens = this.options.authTokens;
    if (authTokens && authTokens.length > 0) {
      return '?' + _.map(authTokens, function (t) { return 'auth_token=' + t; }).join('&');
    } else {
      return '';
    }
  },

  _isHTTPS: function() {
    return location.protocol.indexOf("https") === 0;
  },

  loadURL: function(url) {
    var $img = $('<img class="MapCard-preview" src="' + url + '" />');
    this.$el.append($img);

    if (this.options.className) {
      $img.addClass(this.options.className);
    }

    $img.fadeIn(250);
  },

  showError: function() {
    this._onError();
  },

  _startLoader: function() {
    this.$el.addClass("is-loading");
  },

  _stopLoader: function() {
    this.$el.removeClass("is-loading");
  },

  _onSuccess: function(url) {
    this._stopLoader();
    this.loadURL(url);
    this.trigger("loaded", url);
  },

  _onError: function(error) {
    this._stopLoader();
    this.$el.addClass("has-error");
    var $error = $('<div class="MapCard-error" />');
    this.$el.append($error);
    $error.fadeIn(250);
    this.trigger("error");
  },

  _loadImage: function(error, url) {
    var self = this;
    var img  = new Image();

    img.onerror = function() {
      self._onError(error);
    };

    img.onload = function() {
      self._onSuccess(url);
    };

    try {
      img.src = url;
    } catch(err) {
      this._onError(err);
    }
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

/**
 * View model intended to be responsible for pagination logic, and to be used in conjunction with a Pagination view.
 */
module.exports = cdb.core.Model.extend({
  defaults: {
    total_count:          0,
    per_page:             10,
    current_page:         1,
    display_count:        5,
    extras_display_count: 1,
    url_to:               undefined
  },

  pagesCount: function() {
    return Math.max(
        Math.ceil(
          this.get('total_count') / this.get('per_page')
        ), 1);
  },

  isCurrentPage: function(page) {
    return this.get('current_page') === page;
  },

  shouldBeVisible: function() {
    var pagesCount = this.pagesCount();
    return this.get('total_count') > 0 && pagesCount > 1 && this.get('current_page') <= pagesCount;
  },

  urlTo: function(page) {
    if (this.hasUrl()) {
      return this.get('url_to')(page);
    }
  },

  hasUrl: function() {
    return typeof this.get('url_to') === 'function';
  },

  /**
   * Get the pages that are expected to be displayed.
   * The current page will be in the middle of the returned sequence.
   *
   * @returns {number[]} a sequence of Numbers
   */
  pagesToDisplay: function() {
    var rangeStart;

    if (this._inLowRange()) {
      rangeStart = 1;
    } else if (this._inHighRange()) {
      rangeStart = this.get('current_page') - this._startOffset();
    } else {
      // Somewhere between the low and high boundary
      rangeStart = this.pagesCount() - this.get('display_count') + 1;
    }
    rangeStart = Math.max(rangeStart, 1);

    return this._withExtraPages(
      _.range(rangeStart, this._rangeEnd(rangeStart))
    );
  },

  _withExtraPages: function(pagesRelativeToCurrentPage) {
    var lastPage = this.pagesCount();
    var extraCount = this.get('extras_display_count');
    var extraStartPages = _.range(1, extraCount + 1);
    var extraEndPages = _.range(lastPage - extraCount + 1, lastPage + 1);

    var startPagesDiff = pagesRelativeToCurrentPage[0] - extraStartPages.slice(-1)[0];
    if (startPagesDiff === 2) {
      // There is only one missing page in the gap, so add it
      extraStartPages.push(pagesRelativeToCurrentPage[0] - 1);
    } else if (startPagesDiff > 2) {
      // There are more hidden pages at low range, add padding at end
      extraStartPages.push(-1);
    }

    var endPagesDiff = extraEndPages[0] - pagesRelativeToCurrentPage.slice(-1);
    if (endPagesDiff === 2) {
      // There is only one missing page in the gap, so add it
      extraEndPages.unshift(extraEndPages[0] - 1);
    } if (endPagesDiff > 2) {
      // There are more hidden pages at high range, add padding at beginning
      extraEndPages.unshift(-2);
    }

    return _.union(extraStartPages, pagesRelativeToCurrentPage, extraEndPages);
  },

  _inLowRange: function() {
    return this.get('current_page') < this._startOffset();
  },

  _inHighRange: function() {
    return this.get('current_page') < this._highBoundary();
  },

  _highBoundary: function() {
    return this.pagesCount() - this._startOffset();
  },

  _startOffset: function() {
    return Math.floor(this.get('display_count') / 2);
  },

  _rangeEnd: function(rangeStart) {
    // If we are too close to the range end then cap to the pages count.
    return Math.min(rangeStart + this.get('display_count'), this.pagesCount() + 1);
  }
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var navigateThroughRouter = require('../../view_helpers/navigate_through_router');

/**
 * Responsible for pagination.
 *
 * Expected to be created with a pagination model, see the model for available params, here we create w/ the minimum:
 *   new PaginationView({
 *     model: new PaginationModel({
 *       // Compulsory:
 *       urlTo:  function(page) { return '/?page='+ page },

         // Optional, to router clicks on <a> tags through router.navigate by default
 *       router: new Router(...)
 *     })
 *   });
 */
module.exports = cdb.core.View.extend({

  className: 'Pagination CDB-Text CDB-Size-medium',

  events: {
    'click a': '_paginate'
  },

  initialize: function() {
    this.template = cdb.templates.getTemplate('common/views/pagination/template');
    this.router = this.options.router;

    if (this.router && !this.model.hasUrl()) {
      throw new Error('since router is set the model must have a url method set too');
    }

    this.model.bind('change', this.render, this);
  },

  render: function() {
    if (this.model.shouldBeVisible()) {
      this.$el.html(
        this.template({
          m: this.model,
          pagesCount: this.model.pagesCount(),
          currentPage: this.model.get('current_page')
        })
      );
      this.$el.addClass(this.className);
      this.delegateEvents();
    } else {
      this.$el.html('');
    }

    return this;
  },

  _paginate: function(ev) {
    if (this.router) {
      navigateThroughRouter.apply(this, arguments);
    } else if (!this.model.hasUrl()) {
      this.killEvent(ev);
    }

    var page = $(ev.target).data('page');
    this.model.set('current_page', page);
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../view_helpers/navigate_through_router":1}],6:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);

module.exports = cdb.core.View.extend({

  initialize: function() {
    _.bindAll(this, '_onWindowScroll');
    this._bindScroll();
  },

  _onWindowScroll: function() {
    this.$el.toggleClass('is-fixed', $(window).scrollTop() > this.options.anchorPoint);
  },

  _unbindScroll: function() {
    $(window).unbind('scroll', this._onWindowScroll);
  },

  _bindScroll: function() {
    this._unbindScroll();
    $(window).bind('scroll', this._onWindowScroll);
  },

  clean: function() {
    this._unbindScroll();
    this.elder('clean');
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
cdb.admin = (typeof window !== "undefined" ? window['cdb']['admin'] : typeof global !== "undefined" ? global['cdb']['admin'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * The content of the dropdown menu opened by the industries link in the header, e.g.:
 *   CartoDB, Industries, Explore, Pricing
 *             ______/\____
 *            |            |
 *            |    this    |
 *            |____________|
 */
module.exports = cdb.admin.DropdownMenu.extend({
  className: 'CDB-Text Dropdown Dropdown--public',

  initialize: function() {
    this.elder('initialize');
    this.template_base = cdb.templates.getTemplate('public_common/user_industries/dropdown_template');

    // Necessary to hide dialog on click outside popup, for example.
    cdb.god.bind('closeDialogs', this.hide, this);
  },

  render: function() {
    this.$el.html(this.template_base());

    // TODO: taken from existing code, how should dropdowns really be added to the DOM?
    $('body').append(this.el);

    return this;
  },

  clean: function() {
    // Until https://github.com/CartoDB/cartodb.js/issues/238 is resolved:
    $(this.options.target).unbind('click', this._handleClick);
    this.constructor.__super__.clean.apply(this);
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var IndustriesDropdown = require('./user_industries/dropdown_view');
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * View to render the user industries section in the header.
 * Expected to be created from existing DOM element.
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-dropdown-target': '_createDropdown'
  },

  _createDropdown: function(ev) {
    this.killEvent(ev);
    cdb.god.trigger('closeDialogs');

    var view = new IndustriesDropdown({
      target: $(ev.target),
      vertical_offset: -10,
      horizontal_offset: $(ev.target).width()-100,
      horizontal_position: 'left',
      tick: 'center'
    });
    view.render();

    view.on('onDropdownHidden', function() {
      view.clean();
    }, this);

    view.open();
  }

});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./user_industries/dropdown_view":7}],9:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
cdb.admin = (typeof window !== "undefined" ? window['cdb']['admin'] : typeof global !== "undefined" ? global['cdb']['admin'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * The content of the dropdown menu opened by the user avatar in the top-right of the header, e.g.:
 *   Explore, Learn, ♞
 *             ______/\____
 *            |            |
 *            |    this    |
 *            |____________|
 */
module.exports = cdb.admin.DropdownMenu.extend({
  className: 'CDB-Text Dropdown',

  initialize: function () {
    this.elder('initialize');
    this.template_base = cdb.templates.getTemplate('public_common/user_settings/dropdown_template');

    // Necessary to hide dialog on click outside popup, for example.
    cdb.god.bind('closeDialogs', this.hide, this);
  },

  render: function () {
    var user = this.model;
    var userUrl = user.viewUrl();

    this.$el.html(this.template_base({
      name: user.fullName() || user.get('username'),
      email: user.get('email'),
      isOrgOwner: user.isOrgOwner(),
      dashboardUrl: userUrl.dashboard(),
      publicProfileUrl: userUrl.publicProfile(),
      accountProfileUrl: userUrl.accountProfile(),
      logoutUrl: userUrl.logout()
    }));

    // TODO: taken from existing code, how should dropdowns really be added to the DOM?
    $('body').append(this.el);

    return this;
  },

  clean: function () {
    // Until https://github.com/CartoDB/cartodb.js/issues/238 is resolved:
    $(this.options.target).unbind('click', this._handleClick);
    this.constructor.__super__.clean.apply(this);
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var SettingsDropdown = require('./user_settings/dropdown_view');
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * View to render the user settings section in the header.
 * Expected to be created from existing DOM element.
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-dropdown-target': '_createDropdown'
  },

  render: function() {
    var dashboardUrl = this.model.viewUrl().dashboard();
    var datasetsUrl = dashboardUrl.datasets();
    var mapsUrl = dashboardUrl.maps();

    this.$el.html(
      cdb.templates.getTemplate('public_common/user_settings_template')({
        avatarUrl: this.model.get('avatar_url'),
        mapsUrl: mapsUrl,
        datasetsUrl: datasetsUrl
      })
    );

    return this;
  },

  _createDropdown: function(ev) {
    this.killEvent(ev);
    cdb.god.trigger('closeDialogs');

    var view = new SettingsDropdown({
      target: $(ev.target),
      model: this.model, // user
      horizontal_offset: 18
    });
    view.render();

    view.on('onDropdownHidden', function() {
      view.clean();
    }, this);

    view.open();
  }

});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./user_settings/dropdown_view":9}],11:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var FavMapView = require('./fav_map_view');
var UserInfoView = require('./user_info_view');
var PaginationModel = require('../common/views/pagination/model');
var PaginationView = require('../common/views/pagination/view');
var UserSettingsView = require('../public_common/user_settings_view');
var UserIndustriesView = require('../public_common/user_industries_view');
var MapCardPreview = require('../common/views/mapcard_preview');
var ScrollableHeader = require('../common/views/scrollable_header');

$(function() {
  cdb.init(function() {
    cdb.templates.namespace = 'cartodb/';
    cdb.config.set(window.config);
    cdb.config.set('url_prefix', window.base_url);

    var scrollableHeader = new ScrollableHeader({
      el: $('.js-Navmenu'),
      anchorPoint: 350
    });

    var userIndustriesView = new UserIndustriesView({
      el: $('.js-user-industries')
    });

    $(document.body).bind('click', function() {
      cdb.god.trigger('closeDialogs');
    });

    var authenticatedUser = new cdb.open.AuthenticatedUser();
    authenticatedUser.bind('change', function() {
      if (authenticatedUser.get('username')) {
        var user = new cdb.admin.User(authenticatedUser.attributes);
        var userSettingsView = new UserSettingsView({
          el: $('.js-user-settings'),
          model: user
        });
        userSettingsView.render();

        $('.js-login').hide();
        $('.js-learn').show();
      }
    });

    var favMapView = new FavMapView(window.favMapViewAttrs);
    favMapView.render();

    var userInfoView = new UserInfoView({
      el: $('.js-user-info')
    });
    userInfoView.render();

    var paginationView = new PaginationView({
      el: '.js-content-footer',
      model: new PaginationModel(window.paginationModelAttrs)
    });
    paginationView.render();

    $('.MapCard').each(function() {
      var visId = $(this).data('visId');
      if (visId) {
        var username = $(this).data('visOwnerName');
        var mapCardPreview = new MapCardPreview({
          el: $(this).find('.js-header'),
          height: 220,
          visId: $(this).data('visId'),
          username: username,
          mapsApiResource: cdb.config.getMapsResourceName(username)
        });
        mapCardPreview.load();
      }
    });

    authenticatedUser.fetch();
  });
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/views/mapcard_preview":3,"../common/views/pagination/model":4,"../common/views/pagination/view":5,"../common/views/scrollable_header":6,"../public_common/user_industries_view":8,"../public_common/user_settings_view":10,"./fav_map_view":12,"./user_info_view":14}],12:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);
var createDefaultFallbackMap = require('../common/views/create_default_fallback_map');

/**
 * View to render the "favourite" map, either a user's map visualization, or a default fallback map.
 */
module.exports = cdb.core.View.extend({

  render: function() {
    this.$el.removeClass('is-pre-loading').addClass('is-loading');

    var promise;
    if (this.options.createVis) {
      promise = this._createVisMap(this.options.createVis);
    } else {
      promise = this._createFallbackMap();
    }

    var self = this;
    promise.done(function() {
      self.$el.removeClass('is-loading');
      self.$('.js-spinner').remove();
    });

    return this;
  },

  _createVisMap: function(createVis) {
    return cdb.createVis(this.el, createVis.url, _.defaults(createVis.opts, {
      title:             false,
      header:            false,
      description:       false,
      search:            false,
      layer_selector:    false,
      text:              false,
      image:             false,
      shareable:         false,
      annotation:        false,
      zoom:              false,
      cartodb_logo:      false,
      scrollwheel:       false,
      mobile_layout:     true,
      slides_controller: false,
      legends:           false,
      time_slider:       false,
      loader:            false,
      fullscreen:        false,
      no_cdn:            false
    }));
  },

  _createFallbackMap: function() {
    createDefaultFallbackMap({
      el: this.el,
      baselayer: this.options.fallbackBaselayer
    });

    // Fake promise, to keep the render method consistent with how the vis map would have been handled (async)
    return {
      done: function(fn) {
        fn();
      }
    };
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/views/create_default_fallback_map":2}],13:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);

/**
 * The content of the dropdown menu opened by the link at the end of the breadcrumbs menu, e.g.
 *   username / Maps v
 *            ______/\____
 *           |            |
 *           |    this    |
 *           |____________|
 */
module.exports = cdb.admin.DropdownMenu.extend({
  className: 'Dropdown',

  initialize: function() {
    this.elder('initialize');

    // Necessary to hide dialog on click outside popup, for example.
    cdb.god.bind('closeDialogs', this.hide, this);
  },

  render: function() {
    this.$el.show();

    return this;
  },

  clean: function() {
    this.$el.hide();
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var BreadcrumbDropdown = require('./user_info/breadcrumb_dropdown_view');

/**
 * View to render the user info section.
 * Expected to be created from existing DOM element.
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-breadcrumb-dropdown-target': '_createBreadcrumbDropdown'
  },

  render: function() {
    return this;
  },

  _createBreadcrumbDropdown: function(ev) {
    this.killEvent(ev);
    var dropdown = new BreadcrumbDropdown({
      target: $('.js-breadcrumb-dropdown-target'),
      el: $('.js-breadcrumb-dropdown-content'),
      horizontal_offset: 3, // to match the dropdown indicator/arrow
      horizontal_position: 'right',
      tick: 'right'
    });
    this.addView(dropdown);
    dropdown.on('onDropdownShown', function () {
      cdb.god.trigger('closeDialogs');
    }, this);
    dropdown.open();
  }
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./user_info/breadcrumb_dropdown_view":13}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdfaGVscGVycy9uYXZpZ2F0ZV90aHJvdWdoX3JvdXRlci5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9jb21tb24vdmlld3MvY3JlYXRlX2RlZmF1bHRfZmFsbGJhY2tfbWFwLmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL2NvbW1vbi92aWV3cy9tYXBjYXJkX3ByZXZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdzL3BhZ2luYXRpb24vbGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL2NvbW1vbi92aWV3cy9wYWdpbmF0aW9uL2lucHV0LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL2NvbW1vbi92aWV3cy9wYWdpbmF0aW9uL3ZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdzL3Njcm9sbGFibGVfaGVhZGVyLmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19jb21tb24vdXNlcl9pbmR1c3RyaWVzL2Ryb3Bkb3duX3ZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvcHVibGljX2NvbW1vbi9saWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvcHVibGljX2NvbW1vbi9pbnB1dC5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3MvZHJvcGRvd25fdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfZGFzaGJvYXJkL2VudHJ5LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19kYXNoYm9hcmQvZmF2X21hcF92aWV3LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19kYXNoYm9hcmQvdXNlcl9pbmZvL2JyZWFkY3J1bWJfZHJvcGRvd25fdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfZGFzaGJvYXJkL2xpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfZGFzaGJvYXJkL2lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUlBLElBQUksR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqSCxJQUFJLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Ozs7O0FBSzNHLE1BQU0sQ0FBQyxP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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUNsRDs7RUFFRCxTQUFTLEVBQUUsU0FBUyxVQUFVLEVBQUU7O0lBRTlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDaEY7Q0FDRixDQUFDLENBQUM7Ozs7Ozs7QUNqSEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2Q0Es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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM5QkEsSUFBSSxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pILElBQUksQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUMzRyxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDOzs7Ozs7QUFNekUsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O0VBRXBDLE1BQU0sRUFBRTtJQUNOLHNDQUFzQyxFQUFFLDJCQUEyQjtHQUNwRTs7RUFFRCxNQUFNLEVBQUUsV0FBVztJQUNqQixPQUFPLElBQUksQ0FBQztHQUNiOztFQUVELHlCQUF5QixFQUFFLFNBQVMsRUFBRSxFQUFFO0lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQztNQUNwQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDO01BQzNDLEVBQUUsRUFBRSxDQUFDLENBQUMsaUNBQWlDLENBQUM7TUFDeEMsaUJBQWlCLEVBQUUsQ0FBQztNQUNwQixtQkFBbUIsRUFBRSxPQUFPO01BQzVCLElBQUksRUFBRSxPQUFPO0tBQ2QsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixRQUFRLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVk7TUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDakMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNULFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNqQjtDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG4vKipcbiAqIENoZWNrIGlmIExpbnV4IHVzZXIgdXNlZCByaWdodC9taWRkbGUgY2xpY2sgYXQgdGhlIHRpbWUgb2YgdGhlIGV2ZW50XG4gKlxuICogQHBhcmFtIGV2IHtFdmVudH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0xpbnV4TWlkZGxlT3JSaWdodENsaWNrKGV2KSB7XG4gIHJldHVybiBldi53aGljaCA9PT0gMiB8fCBldi53aGljaCA9PT0gMztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBNYWMgdXNlciB1c2VkIENNRCBrZXkgYXQgdGhlIHRpbWUgb2YgdGhlIGV2ZW50IE1hYyB1c2VyIHVzZWQgQ01EIGtleSBhdCB0aGUgdGltZSBvZiB0aGUgZXZlbnQuXG4gKlxuICogQHBhcmFtIGV2IHtFdmVudH1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc01hY0NtZEtleVByZXNzZWQoZXYpIHtcbiAgcmV0dXJuIGV2Lm1ldGFLZXk7XG59XG5cbmZ1bmN0aW9uIGlzQ3RybEtleVByZXNzZWQoZXYpIHtcbiAgcmV0dXJuIGV2LmN0cmxLZXk7XG59XG5cbi8qKlxuICogQ2xpY2sgaGFuZGxlciBmb3IgYSBjYXJ0b2RiLmpzIHZpZXcsIHRvIG5hdmlnYXRlIGV2ZW50IHRhcmdldCdzIGhyZWYgVVJMIHRocm91Z2ggdGhlIHZpZXcncyByb3V0ZXIubmF2aWdhdGUgbWV0aG9kLlxuICpcbiAqIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzOlxuICogVW5sZXNzIGNtZC9jdHJsIGtleXMgYXJlIHByZXNzZWQgaXQgd2lsbCBjYW5jZWwgdGhlIGRlZmF1bHQgbGluayBiZWhhdmlvciBhbmQgaW5zdGVhZCBuYXZpZ2F0ZSB0byB0aGUgVVJMIHNldCBpbiB0aGVcbiAqIHRhcmdldCdzIGhyZWYgYXR0cmlidXRlLlxuICpcbiAqIFByZXJlcXVpc2l0aWVzOlxuICogIC0gdmlldyBoYXMgYSB0aGlzLnJvdXRlciBpbnN0YW5jZS5cbiAqXG4gKiBFeGFtcGxlIG9mIGhvdyB0byB1c2U6XG4gKiAgIC0gSW4gYSB0ZW1wbGF0ZTpcbiAqICAgICA8YSBocmVmPVwiL3NvbWUvdXJpXCIgaWQ9XCIjbXktbGlua1wiIC4uLlxuICogICAgIDxhIGhyZWY9XCIvc3BlY2lhbC91cmlcIiBpZD1cIiNteS1zcGVjaWFsLWxpbmtcIiAuLi5cbiAqXG4gKiAgIC0gSW4gdGhlIHZpZXcgZmlsZTpcbiAqICAgICB2YXIgbmF2aWdhdGVUaHJvdWdoUm91dGVyID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3ZpZXdfaGVscGVycy9uYXZpZ2F0ZVRocm91Z2hSb3V0ZXInKTtcbiAqICAgICBtb2R1bGUuZXhwb3J0cyA9IG5ldyBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG4gKiAgICAgICBldmVudHM6IHtcbiAqICAgICAgICAgJ2NsaWNrIGEjbXktbGluayc6IG5hdmlnYXRlVGhyb3VnaFJvdXRlclxuICogICAgICAgICAnY2xpY2sgYSNteS1zcGVjaWFsLWxpbmsnOiB0aGlzLl9teUN1c3RvbVJvdXRlXG4gKiAgICAgICB9XG4gKlxuICogICAgICAgX215Q3VzdG9tUm91dGU6IGZ1bmN0aW9uKGV2KSB7XG4gKiAgICAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyB5b3UgY3VzdG9tIGxvZ2ljIGJlZm9yZS9hZnRlciB0aGUgcm91dGluZywgZS5nLjpcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2JlZm9yZSBjaGFuZ2luZyByb3V0ZScpO1xuICogICAgICAgICBuYXZpZ2F0ZVRocm91Z2hSb3V0ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGNoYW5naW5nIHJvdXRlJyk7XG4gKiAgICAgICB9XG4gKlxuICogQHBhcmFtIGV2IHtFdmVudH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihldikge1xuICAvLyBXZSBhbHdheXMga2lsbCB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlIGV2ZW50LCBzaW5jZSBjb250YWluZXIgYXJvdW5kIHZpZXcgbWlnaHQgaGF2ZSBvdGhlciBjbGljayBiZWhhdmlvci5cbiAgLy8gSW4gY2FzZSBvZiBhIGNtZC9jdHJsIGNsaWNrIGJ5IGFuIHVzZXIuXG4gIHRoaXMua2lsbEV2ZW50KGV2KTtcbiAgdmFyIHVybCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCdhJykuYXR0cignaHJlZicpO1xuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFpc0xpbnV4TWlkZGxlT3JSaWdodENsaWNrKGV2KSAmJiAhaXNNYWNDbWRLZXlQcmVzc2VkKGV2KSkge1xuICAgICh0aGlzLnJvdXRlciB8fCB0aGlzLm9wdGlvbnMucm91dGVyKS5uYXZpZ2F0ZSh1cmwsIHsgdHJpZ2dlcjogdHJ1ZSB9KTtcbiAgfSBlbHNlIGlmIChpc0N0cmxLZXlQcmVzc2VkKGV2KSB8fCBpc01hY0NtZEtleVByZXNzZWQoZXYpKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gIH1cbn07XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWZhdWx0IGZhbGxiYWNrIG1hcCwgdG8gYmUgdXNlZCB3aGVuIGFuIHVzZXIgZG9uJ3QgaGF2ZSBhbnkgb3duIG1hcCB2aXN1YWxpemF0aW9ucy5cbiAqXG4gKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSBjb25maWdcbiAqICAgZWw6IHtTdHJpbmcsSFRNTEVsZW1lbnR9IGlkIHRvIGVsZW1lbnQgd2hlcmUgdG8gcmVuZGVyIG1hcCAody9vICcjJyBwcmVmaXgpIG9yIGEgSFRNTEVsZW1lbnQgbm9kZVxuICogICBiYXNlbGF5ZXI6IHtPYmplY3R9IGFzIGFuIGl0ZW0gZGVmaW5lZCBpbiBhcHBfY29uZmlnLnltbCAoYmFzZW1hcHMga2V5KVxuICogQHJldHVybnMge09iamVjdH0gYSBuZXcgY3JlYXRlZCBMZWFmbGV0IG1hcFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgdmFyIHByb3ZpZGVyID0gJ2xlYWZsZXQnO1xuICB2YXIgdHlwZSA9ICd0aWxlZCc7XG4gIGlmICghb3B0cy5iYXNlbGF5ZXIudXJsVGVtcGxhdGUpIHtcbiAgICBwcm92aWRlciA9ICdnb29nbGVtYXBzJztcbiAgICB0eXBlID0gJ0dNYXBzQmFzZSc7XG4gIH1cbiAgdmFyIG1hcCA9IGNkYi5jcmVhdGVWaXMob3B0cy5lbCwge1xuICAgICd2ZXJzaW9uJzogJzAuMS4wJyxcbiAgICAndGl0bGUnOiAnZGVmYXVsdCcsXG4gICAgJ3Njcm9sbHdoZWVsJzogb3B0cy5zY3JvbGx3aGVlbCAhPT0gdW5kZWZpbmVkID8gb3B0cy5zY3JvbGx3aGVlbCA6IGZhbHNlLFxuICAgICd6b29tJzogNixcbiAgICBtYXBfcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgIGNlbnRlcjogWzQwLjcxMjc4MzcsIC03NC4wMDU5NDEzXSwgLy8gTllcbiAgICBsYXllcnM6IFsgXy5leHRlbmQoeyB0eXBlOiB0eXBlIH0sIG9wdHMuYmFzZWxheWVyKSBdXG4gIH0pO1xuXG4gIHJldHVybiBtYXA7XG59O1xuIiwidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG52YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xuXG4vKipcbiAqICBNYXBDYXJkIHByZXZpZXdzXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIG9wdGlvbnM6IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogMTcwLFxuICAgIHByaXZhY3k6ICdQVUJMSUMnLFxuICAgIHVzZXJuYW1lOiAnJyxcbiAgICB2aXNJZDogJycsXG4gICAgbWFwc0FwaVJlc291cmNlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGF1dGhUb2tlbnM6IFtdXG4gIH0sXG5cbiAgX1RFTVBMQVRFUzoge1xuICAgIC8vIFVzaW5nIDwlPSAlPiBpbnN0ZWFkIG9mIDwlLSAlPiBiZWNhdXNlIGlmIG5vdCAvIGNoYXJhY3RlcnMgKGZvciBleGFtcGxlKSB3aWxsIGJlIGVzY2FwZWRcbiAgICByZWd1bGFyOiAnPCUtIHByb3RvY29sICU+Oi8vPCU9IG1hcHNBcGlSZXNvdXJjZSAlPi9hcGkvdjEvbWFwL3N0YXRpYy9uYW1lZC88JS0gdHBsICU+LzwlLSB3aWR0aCAlPi88JS0gaGVpZ2h0ICU+LnBuZzwlPSBhdXRoVG9rZW5zICU+JyxcbiAgICBjZG46ICc8JS0gcHJvdG9jb2wgJT46Ly88JS0gY2RuICU+LzwlLSB1c2VybmFtZSAlPi9hcGkvdjEvbWFwL3N0YXRpYy9uYW1lZC88JS0gdHBsICU+LzwlLSB3aWR0aCAlPi88JS0gaGVpZ2h0ICU+LnBuZzwlPSBhdXRoVG9rZW5zICU+J1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIF8uZWFjaChbJ3Zpc0lkJywgJ21hcHNBcGlSZXNvdXJjZScsICd1c2VybmFtZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uc1tuYW1lXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgJyBpcyByZXF1aXJlZCBmb3IgU3RhdGljIE1hcCBpbnN0YW50aWF0aW9uJyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc3RhcnRMb2FkZXIoKTtcbiAgICB0aGlzLl9sb2FkRnJvbVZpc0lkKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfZ2VuZXJhdGVJbWFnZVRlbXBsYXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ3RwbF8nICsgdGhpcy5vcHRpb25zLnZpc0lkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgfSxcblxuICBfbG9hZEZyb21WaXNJZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3RvY29sID0gdGhpcy5faXNIVFRQUygpID8gJ2h0dHBzJzogJ2h0dHAnO1xuICAgIHZhciBjZG5Db25maWcgPSBjZGIuY29uZmlnLmdldCgnY2RuX3VybCcpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoY2RuQ29uZmlnID8gdGhpcy5fVEVNUExBVEVTWydjZG4nXSA6IHRoaXMuX1RFTVBMQVRFU1sncmVndWxhciddKTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgICAgdXNlcm5hbWU6IHRoaXMub3B0aW9ucy51c2VybmFtZSxcbiAgICAgIG1hcHNBcGlSZXNvdXJjZTogdGhpcy5vcHRpb25zLm1hcHNBcGlSZXNvdXJjZSxcbiAgICAgIHRwbDogdGhpcy5fZ2VuZXJhdGVJbWFnZVRlbXBsYXRlKCksXG4gICAgICB3aWR0aDogdGhpcy5vcHRpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLm9wdGlvbnMuaGVpZ2h0LFxuICAgICAgYXV0aFRva2VuczogdGhpcy5fZ2VuZXJhdGVBdXRoVG9rZW5zUGFyYW1zKClcbiAgICB9O1xuXG4gICAgaWYgKGNkbkNvbmZpZykge1xuICAgICAgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnMsIHsgY2RuOiBjZG5Db25maWdbcHJvdG9jb2xdIH0pO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSB0ZW1wbGF0ZShvcHRpb25zKTtcblxuICAgIHRoaXMuX2xvYWRJbWFnZSh7fSwgdXJsKTtcbiAgfSxcblxuICBfZ2VuZXJhdGVBdXRoVG9rZW5zUGFyYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGF1dGhUb2tlbnMgPSB0aGlzLm9wdGlvbnMuYXV0aFRva2VucztcbiAgICBpZiAoYXV0aFRva2VucyAmJiBhdXRoVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAnPycgKyBfLm1hcChhdXRoVG9rZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gJ2F1dGhfdG9rZW49JyArIHQ7IH0pLmpvaW4oJyYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSxcblxuICBfaXNIVFRQUzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwc1wiKSA9PT0gMDtcbiAgfSxcblxuICBsb2FkVVJMOiBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgJGltZyA9ICQoJzxpbWcgY2xhc3M9XCJNYXBDYXJkLXByZXZpZXdcIiBzcmM9XCInICsgdXJsICsgJ1wiIC8+Jyk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRpbWcpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICRpbWcuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgJGltZy5mYWRlSW4oMjUwKTtcbiAgfSxcblxuICBzaG93RXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29uRXJyb3IoKTtcbiAgfSxcblxuICBfc3RhcnRMb2FkZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiaXMtbG9hZGluZ1wiKTtcbiAgfSxcblxuICBfc3RvcExvYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJpcy1sb2FkaW5nXCIpO1xuICB9LFxuXG4gIF9vblN1Y2Nlc3M6IGZ1bmN0aW9uKHVybCkge1xuICAgIHRoaXMuX3N0b3BMb2FkZXIoKTtcbiAgICB0aGlzLmxvYWRVUkwodXJsKTtcbiAgICB0aGlzLnRyaWdnZXIoXCJsb2FkZWRcIiwgdXJsKTtcbiAgfSxcblxuICBfb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICB0aGlzLl9zdG9wTG9hZGVyKCk7XG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJoYXMtZXJyb3JcIik7XG4gICAgdmFyICRlcnJvciA9ICQoJzxkaXYgY2xhc3M9XCJNYXBDYXJkLWVycm9yXCIgLz4nKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGVycm9yKTtcbiAgICAkZXJyb3IuZmFkZUluKDI1MCk7XG4gICAgdGhpcy50cmlnZ2VyKFwiZXJyb3JcIik7XG4gIH0sXG5cbiAgX2xvYWRJbWFnZTogZnVuY3Rpb24oZXJyb3IsIHVybCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaW1nICA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX29uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9vblN1Y2Nlc3ModXJsKTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRoaXMuX29uRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xuXG4vKipcbiAqIFZpZXcgbW9kZWwgaW50ZW5kZWQgdG8gYmUgcmVzcG9uc2libGUgZm9yIHBhZ2luYXRpb24gbG9naWMsIGFuZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYSBQYWdpbmF0aW9uIHZpZXcuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuTW9kZWwuZXh0ZW5kKHtcbiAgZGVmYXVsdHM6IHtcbiAgICB0b3RhbF9jb3VudDogICAgICAgICAgMCxcbiAgICBwZXJfcGFnZTogICAgICAgICAgICAgMTAsXG4gICAgY3VycmVudF9wYWdlOiAgICAgICAgIDEsXG4gICAgZGlzcGxheV9jb3VudDogICAgICAgIDUsXG4gICAgZXh0cmFzX2Rpc3BsYXlfY291bnQ6IDEsXG4gICAgdXJsX3RvOiAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICB9LFxuXG4gIHBhZ2VzQ291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLm1heChcbiAgICAgICAgTWF0aC5jZWlsKFxuICAgICAgICAgIHRoaXMuZ2V0KCd0b3RhbF9jb3VudCcpIC8gdGhpcy5nZXQoJ3Blcl9wYWdlJylcbiAgICAgICAgKSwgMSk7XG4gIH0sXG5cbiAgaXNDdXJyZW50UGFnZTogZnVuY3Rpb24ocGFnZSkge1xuICAgIHJldHVybiB0aGlzLmdldCgnY3VycmVudF9wYWdlJykgPT09IHBhZ2U7XG4gIH0sXG5cbiAgc2hvdWxkQmVWaXNpYmxlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGFnZXNDb3VudCA9IHRoaXMucGFnZXNDb3VudCgpO1xuICAgIHJldHVybiB0aGlzLmdldCgndG90YWxfY291bnQnKSA+IDAgJiYgcGFnZXNDb3VudCA+IDEgJiYgdGhpcy5nZXQoJ2N1cnJlbnRfcGFnZScpIDw9IHBhZ2VzQ291bnQ7XG4gIH0sXG5cbiAgdXJsVG86IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICBpZiAodGhpcy5oYXNVcmwoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1cmxfdG8nKShwYWdlKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFzVXJsOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuZ2V0KCd1cmxfdG8nKSA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBwYWdlcyB0aGF0IGFyZSBleHBlY3RlZCB0byBiZSBkaXNwbGF5ZWQuXG4gICAqIFRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBiZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSByZXR1cm5lZCBzZXF1ZW5jZS5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlcltdfSBhIHNlcXVlbmNlIG9mIE51bWJlcnNcbiAgICovXG4gIHBhZ2VzVG9EaXNwbGF5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFuZ2VTdGFydDtcblxuICAgIGlmICh0aGlzLl9pbkxvd1JhbmdlKCkpIHtcbiAgICAgIHJhbmdlU3RhcnQgPSAxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faW5IaWdoUmFuZ2UoKSkge1xuICAgICAgcmFuZ2VTdGFydCA9IHRoaXMuZ2V0KCdjdXJyZW50X3BhZ2UnKSAtIHRoaXMuX3N0YXJ0T2Zmc2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWV3aGVyZSBiZXR3ZWVuIHRoZSBsb3cgYW5kIGhpZ2ggYm91bmRhcnlcbiAgICAgIHJhbmdlU3RhcnQgPSB0aGlzLnBhZ2VzQ291bnQoKSAtIHRoaXMuZ2V0KCdkaXNwbGF5X2NvdW50JykgKyAxO1xuICAgIH1cbiAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgocmFuZ2VTdGFydCwgMSk7XG5cbiAgICByZXR1cm4gdGhpcy5fd2l0aEV4dHJhUGFnZXMoXG4gICAgICBfLnJhbmdlKHJhbmdlU3RhcnQsIHRoaXMuX3JhbmdlRW5kKHJhbmdlU3RhcnQpKVxuICAgICk7XG4gIH0sXG5cbiAgX3dpdGhFeHRyYVBhZ2VzOiBmdW5jdGlvbihwYWdlc1JlbGF0aXZlVG9DdXJyZW50UGFnZSkge1xuICAgIHZhciBsYXN0UGFnZSA9IHRoaXMucGFnZXNDb3VudCgpO1xuICAgIHZhciBleHRyYUNvdW50ID0gdGhpcy5nZXQoJ2V4dHJhc19kaXNwbGF5X2NvdW50Jyk7XG4gICAgdmFyIGV4dHJhU3RhcnRQYWdlcyA9IF8ucmFuZ2UoMSwgZXh0cmFDb3VudCArIDEpO1xuICAgIHZhciBleHRyYUVuZFBhZ2VzID0gXy5yYW5nZShsYXN0UGFnZSAtIGV4dHJhQ291bnQgKyAxLCBsYXN0UGFnZSArIDEpO1xuXG4gICAgdmFyIHN0YXJ0UGFnZXNEaWZmID0gcGFnZXNSZWxhdGl2ZVRvQ3VycmVudFBhZ2VbMF0gLSBleHRyYVN0YXJ0UGFnZXMuc2xpY2UoLTEpWzBdO1xuICAgIGlmIChzdGFydFBhZ2VzRGlmZiA9PT0gMikge1xuICAgICAgLy8gVGhlcmUgaXMgb25seSBvbmUgbWlzc2luZyBwYWdlIGluIHRoZSBnYXAsIHNvIGFkZCBpdFxuICAgICAgZXh0cmFTdGFydFBhZ2VzLnB1c2gocGFnZXNSZWxhdGl2ZVRvQ3VycmVudFBhZ2VbMF0gLSAxKTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0UGFnZXNEaWZmID4gMikge1xuICAgICAgLy8gVGhlcmUgYXJlIG1vcmUgaGlkZGVuIHBhZ2VzIGF0IGxvdyByYW5nZSwgYWRkIHBhZGRpbmcgYXQgZW5kXG4gICAgICBleHRyYVN0YXJ0UGFnZXMucHVzaCgtMSk7XG4gICAgfVxuXG4gICAgdmFyIGVuZFBhZ2VzRGlmZiA9IGV4dHJhRW5kUGFnZXNbMF0gLSBwYWdlc1JlbGF0aXZlVG9DdXJyZW50UGFnZS5zbGljZSgtMSk7XG4gICAgaWYgKGVuZFBhZ2VzRGlmZiA9PT0gMikge1xuICAgICAgLy8gVGhlcmUgaXMgb25seSBvbmUgbWlzc2luZyBwYWdlIGluIHRoZSBnYXAsIHNvIGFkZCBpdFxuICAgICAgZXh0cmFFbmRQYWdlcy51bnNoaWZ0KGV4dHJhRW5kUGFnZXNbMF0gLSAxKTtcbiAgICB9IGlmIChlbmRQYWdlc0RpZmYgPiAyKSB7XG4gICAgICAvLyBUaGVyZSBhcmUgbW9yZSBoaWRkZW4gcGFnZXMgYXQgaGlnaCByYW5nZSwgYWRkIHBhZGRpbmcgYXQgYmVnaW5uaW5nXG4gICAgICBleHRyYUVuZFBhZ2VzLnVuc2hpZnQoLTIpO1xuICAgIH1cblxuICAgIHJldHVybiBfLnVuaW9uKGV4dHJhU3RhcnRQYWdlcywgcGFnZXNSZWxhdGl2ZVRvQ3VycmVudFBhZ2UsIGV4dHJhRW5kUGFnZXMpO1xuICB9LFxuXG4gIF9pbkxvd1JhbmdlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoJ2N1cnJlbnRfcGFnZScpIDwgdGhpcy5fc3RhcnRPZmZzZXQoKTtcbiAgfSxcblxuICBfaW5IaWdoUmFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnY3VycmVudF9wYWdlJykgPCB0aGlzLl9oaWdoQm91bmRhcnkoKTtcbiAgfSxcblxuICBfaGlnaEJvdW5kYXJ5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlc0NvdW50KCkgLSB0aGlzLl9zdGFydE9mZnNldCgpO1xuICB9LFxuXG4gIF9zdGFydE9mZnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5nZXQoJ2Rpc3BsYXlfY291bnQnKSAvIDIpO1xuICB9LFxuXG4gIF9yYW5nZUVuZDogZnVuY3Rpb24ocmFuZ2VTdGFydCkge1xuICAgIC8vIElmIHdlIGFyZSB0b28gY2xvc2UgdG8gdGhlIHJhbmdlIGVuZCB0aGVuIGNhcCB0byB0aGUgcGFnZXMgY291bnQuXG4gICAgcmV0dXJuIE1hdGgubWluKHJhbmdlU3RhcnQgKyB0aGlzLmdldCgnZGlzcGxheV9jb3VudCcpLCB0aGlzLnBhZ2VzQ291bnQoKSArIDEpO1xuICB9XG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG52YXIgbmF2aWdhdGVUaHJvdWdoUm91dGVyID0gcmVxdWlyZSgnLi4vLi4vdmlld19oZWxwZXJzL25hdmlnYXRlX3Rocm91Z2hfcm91dGVyJyk7XG5cbi8qKlxuICogUmVzcG9uc2libGUgZm9yIHBhZ2luYXRpb24uXG4gKlxuICogRXhwZWN0ZWQgdG8gYmUgY3JlYXRlZCB3aXRoIGEgcGFnaW5hdGlvbiBtb2RlbCwgc2VlIHRoZSBtb2RlbCBmb3IgYXZhaWxhYmxlIHBhcmFtcywgaGVyZSB3ZSBjcmVhdGUgdy8gdGhlIG1pbmltdW06XG4gKiAgIG5ldyBQYWdpbmF0aW9uVmlldyh7XG4gKiAgICAgbW9kZWw6IG5ldyBQYWdpbmF0aW9uTW9kZWwoe1xuICogICAgICAgLy8gQ29tcHVsc29yeTpcbiAqICAgICAgIHVybFRvOiAgZnVuY3Rpb24ocGFnZSkgeyByZXR1cm4gJy8/cGFnZT0nKyBwYWdlIH0sXG5cbiAgICAgICAgIC8vIE9wdGlvbmFsLCB0byByb3V0ZXIgY2xpY2tzIG9uIDxhPiB0YWdzIHRocm91Z2ggcm91dGVyLm5hdmlnYXRlIGJ5IGRlZmF1bHRcbiAqICAgICAgIHJvdXRlcjogbmV3IFJvdXRlciguLi4pXG4gKiAgICAgfSlcbiAqICAgfSk7XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGNsYXNzTmFtZTogJ1BhZ2luYXRpb24gQ0RCLVRleHQgQ0RCLVNpemUtbWVkaXVtJyxcblxuICBldmVudHM6IHtcbiAgICAnY2xpY2sgYSc6ICdfcGFnaW5hdGUnXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IGNkYi50ZW1wbGF0ZXMuZ2V0VGVtcGxhdGUoJ2NvbW1vbi92aWV3cy9wYWdpbmF0aW9uL3RlbXBsYXRlJyk7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLm9wdGlvbnMucm91dGVyO1xuXG4gICAgaWYgKHRoaXMucm91dGVyICYmICF0aGlzLm1vZGVsLmhhc1VybCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NpbmNlIHJvdXRlciBpcyBzZXQgdGhlIG1vZGVsIG11c3QgaGF2ZSBhIHVybCBtZXRob2Qgc2V0IHRvbycpO1xuICAgIH1cblxuICAgIHRoaXMubW9kZWwuYmluZCgnY2hhbmdlJywgdGhpcy5yZW5kZXIsIHRoaXMpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuc2hvdWxkQmVWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMuJGVsLmh0bWwoXG4gICAgICAgIHRoaXMudGVtcGxhdGUoe1xuICAgICAgICAgIG06IHRoaXMubW9kZWwsXG4gICAgICAgICAgcGFnZXNDb3VudDogdGhpcy5tb2RlbC5wYWdlc0NvdW50KCksXG4gICAgICAgICAgY3VycmVudFBhZ2U6IHRoaXMubW9kZWwuZ2V0KCdjdXJyZW50X3BhZ2UnKVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHRoaXMuJGVsLmFkZENsYXNzKHRoaXMuY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuZGVsZWdhdGVFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kZWwuaHRtbCgnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3BhZ2luYXRlOiBmdW5jdGlvbihldikge1xuICAgIGlmICh0aGlzLnJvdXRlcikge1xuICAgICAgbmF2aWdhdGVUaHJvdWdoUm91dGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tb2RlbC5oYXNVcmwoKSkge1xuICAgICAgdGhpcy5raWxsRXZlbnQoZXYpO1xuICAgIH1cblxuICAgIHZhciBwYWdlID0gJChldi50YXJnZXQpLmRhdGEoJ3BhZ2UnKTtcbiAgICB0aGlzLm1vZGVsLnNldCgnY3VycmVudF9wYWdlJywgcGFnZSk7XG4gIH1cbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIF8uYmluZEFsbCh0aGlzLCAnX29uV2luZG93U2Nyb2xsJyk7XG4gICAgdGhpcy5fYmluZFNjcm9sbCgpO1xuICB9LFxuXG4gIF9vbldpbmRvd1Njcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwudG9nZ2xlQ2xhc3MoJ2lzLWZpeGVkJywgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gdGhpcy5vcHRpb25zLmFuY2hvclBvaW50KTtcbiAgfSxcblxuICBfdW5iaW5kU2Nyb2xsOiBmdW5jdGlvbigpIHtcbiAgICAkKHdpbmRvdykudW5iaW5kKCdzY3JvbGwnLCB0aGlzLl9vbldpbmRvd1Njcm9sbCk7XG4gIH0sXG5cbiAgX2JpbmRTY3JvbGw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VuYmluZFNjcm9sbCgpO1xuICAgICQod2luZG93KS5iaW5kKCdzY3JvbGwnLCB0aGlzLl9vbldpbmRvd1Njcm9sbCk7XG4gIH0sXG5cbiAgY2xlYW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VuYmluZFNjcm9sbCgpO1xuICAgIHRoaXMuZWxkZXIoJ2NsZWFuJyk7XG4gIH1cbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG5jZGIuYWRtaW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ11bJ2FkbWluJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXVsnYWRtaW4nXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG5cbi8qKlxuICogVGhlIGNvbnRlbnQgb2YgdGhlIGRyb3Bkb3duIG1lbnUgb3BlbmVkIGJ5IHRoZSBpbmR1c3RyaWVzIGxpbmsgaW4gdGhlIGhlYWRlciwgZS5nLjpcbiAqICAgQ2FydG9EQiwgSW5kdXN0cmllcywgRXhwbG9yZSwgUHJpY2luZ1xuICogICAgICAgICAgICAgX19fX19fL1xcX19fX1xuICogICAgICAgICAgICB8ICAgICAgICAgICAgfFxuICogICAgICAgICAgICB8ICAgIHRoaXMgICAgfFxuICogICAgICAgICAgICB8X19fX19fX19fX19ffFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5hZG1pbi5Ecm9wZG93bk1lbnUuZXh0ZW5kKHtcbiAgY2xhc3NOYW1lOiAnQ0RCLVRleHQgRHJvcGRvd24gRHJvcGRvd24tLXB1YmxpYycsXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lbGRlcignaW5pdGlhbGl6ZScpO1xuICAgIHRoaXMudGVtcGxhdGVfYmFzZSA9IGNkYi50ZW1wbGF0ZXMuZ2V0VGVtcGxhdGUoJ3B1YmxpY19jb21tb24vdXNlcl9pbmR1c3RyaWVzL2Ryb3Bkb3duX3RlbXBsYXRlJyk7XG5cbiAgICAvLyBOZWNlc3NhcnkgdG8gaGlkZSBkaWFsb2cgb24gY2xpY2sgb3V0c2lkZSBwb3B1cCwgZm9yIGV4YW1wbGUuXG4gICAgY2RiLmdvZC5iaW5kKCdjbG9zZURpYWxvZ3MnLCB0aGlzLmhpZGUsIHRoaXMpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlX2Jhc2UoKSk7XG5cbiAgICAvLyBUT0RPOiB0YWtlbiBmcm9tIGV4aXN0aW5nIGNvZGUsIGhvdyBzaG91bGQgZHJvcGRvd25zIHJlYWxseSBiZSBhZGRlZCB0byB0aGUgRE9NP1xuICAgICQoJ2JvZHknKS5hcHBlbmQodGhpcy5lbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gVW50aWwgaHR0cHM6Ly9naXRodWIuY29tL0NhcnRvREIvY2FydG9kYi5qcy9pc3N1ZXMvMjM4IGlzIHJlc29sdmVkOlxuICAgICQodGhpcy5vcHRpb25zLnRhcmdldCkudW5iaW5kKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLl9fc3VwZXJfXy5jbGVhbi5hcHBseSh0aGlzKTtcbiAgfVxuXG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyIFNldHRpbmdzRHJvcGRvd24gPSByZXF1aXJlKCcuL3VzZXJfc2V0dGluZ3MvZHJvcGRvd25fdmlldycpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG5cbi8qKlxuICogVmlldyB0byByZW5kZXIgdGhlIHVzZXIgc2V0dGluZ3Mgc2VjdGlvbiBpbiB0aGUgaGVhZGVyLlxuICogRXhwZWN0ZWQgdG8gYmUgY3JlYXRlZCBmcm9tIGV4aXN0aW5nIERPTSBlbGVtZW50LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5jb3JlLlZpZXcuZXh0ZW5kKHtcblxuICBldmVudHM6IHtcbiAgICAnY2xpY2sgLmpzLWRyb3Bkb3duLXRhcmdldCc6ICdfY3JlYXRlRHJvcGRvd24nXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGFzaGJvYXJkVXJsID0gdGhpcy5tb2RlbC52aWV3VXJsKCkuZGFzaGJvYXJkKCk7XG4gICAgdmFyIGRhdGFzZXRzVXJsID0gZGFzaGJvYXJkVXJsLmRhdGFzZXRzKCk7XG4gICAgdmFyIG1hcHNVcmwgPSBkYXNoYm9hcmRVcmwubWFwcygpO1xuXG4gICAgdGhpcy4kZWwuaHRtbChcbiAgICAgIGNkYi50ZW1wbGF0ZXMuZ2V0VGVtcGxhdGUoJ3B1YmxpY19jb21tb24vdXNlcl9zZXR0aW5nc190ZW1wbGF0ZScpKHtcbiAgICAgICAgYXZhdGFyVXJsOiB0aGlzLm1vZGVsLmdldCgnYXZhdGFyX3VybCcpLFxuICAgICAgICBtYXBzVXJsOiBtYXBzVXJsLFxuICAgICAgICBkYXRhc2V0c1VybDogZGF0YXNldHNVcmxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9jcmVhdGVEcm9wZG93bjogZnVuY3Rpb24oZXYpIHtcbiAgICB0aGlzLmtpbGxFdmVudChldik7XG4gICAgY2RiLmdvZC50cmlnZ2VyKCdjbG9zZURpYWxvZ3MnKTtcblxuICAgIHZhciB2aWV3ID0gbmV3IFNldHRpbmdzRHJvcGRvd24oe1xuICAgICAgdGFyZ2V0OiAkKGV2LnRhcmdldCksXG4gICAgICBtb2RlbDogdGhpcy5tb2RlbCwgLy8gdXNlclxuICAgICAgaG9yaXpvbnRhbF9vZmZzZXQ6IDE4XG4gICAgfSk7XG4gICAgdmlldy5yZW5kZXIoKTtcblxuICAgIHZpZXcub24oJ29uRHJvcGRvd25IaWRkZW4nLCBmdW5jdGlvbigpIHtcbiAgICAgIHZpZXcuY2xlYW4oKTtcbiAgICB9LCB0aGlzKTtcblxuICAgIHZpZXcub3BlbigpO1xuICB9XG5cbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG5jZGIuYWRtaW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ11bJ2FkbWluJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXVsnYWRtaW4nXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG5cbi8qKlxuICogVGhlIGNvbnRlbnQgb2YgdGhlIGRyb3Bkb3duIG1lbnUgb3BlbmVkIGJ5IHRoZSB1c2VyIGF2YXRhciBpbiB0aGUgdG9wLXJpZ2h0IG9mIHRoZSBoZWFkZXIsIGUuZy46XG4gKiAgIEV4cGxvcmUsIExlYXJuLCDimZ5cbiAqICAgICAgICAgICAgIF9fX19fXy9cXF9fX19cbiAqICAgICAgICAgICAgfCAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgfCAgICB0aGlzICAgIHxcbiAqICAgICAgICAgICAgfF9fX19fX19fX19fX3xcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjZGIuYWRtaW4uRHJvcGRvd25NZW51LmV4dGVuZCh7XG4gIGNsYXNzTmFtZTogJ0NEQi1UZXh0IERyb3Bkb3duJyxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGRlcignaW5pdGlhbGl6ZScpO1xuICAgIHRoaXMudGVtcGxhdGVfYmFzZSA9IGNkYi50ZW1wbGF0ZXMuZ2V0VGVtcGxhdGUoJ3B1YmxpY19jb21tb24vdXNlcl9zZXR0aW5ncy9kcm9wZG93bl90ZW1wbGF0ZScpO1xuXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGhpZGUgZGlhbG9nIG9uIGNsaWNrIG91dHNpZGUgcG9wdXAsIGZvciBleGFtcGxlLlxuICAgIGNkYi5nb2QuYmluZCgnY2xvc2VEaWFsb2dzJywgdGhpcy5oaWRlLCB0aGlzKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlciA9IHRoaXMubW9kZWw7XG4gICAgdmFyIHVzZXJVcmwgPSB1c2VyLnZpZXdVcmwoKTtcblxuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZV9iYXNlKHtcbiAgICAgIG5hbWU6IHVzZXIuZnVsbE5hbWUoKSB8fCB1c2VyLmdldCgndXNlcm5hbWUnKSxcbiAgICAgIGVtYWlsOiB1c2VyLmdldCgnZW1haWwnKSxcbiAgICAgIGlzT3JnT3duZXI6IHVzZXIuaXNPcmdPd25lcigpLFxuICAgICAgZGFzaGJvYXJkVXJsOiB1c2VyVXJsLmRhc2hib2FyZCgpLFxuICAgICAgcHVibGljUHJvZmlsZVVybDogdXNlclVybC5wdWJsaWNQcm9maWxlKCksXG4gICAgICBhY2NvdW50UHJvZmlsZVVybDogdXNlclVybC5hY2NvdW50UHJvZmlsZSgpLFxuICAgICAgbG9nb3V0VXJsOiB1c2VyVXJsLmxvZ291dCgpXG4gICAgfSkpO1xuXG4gICAgLy8gVE9ETzogdGFrZW4gZnJvbSBleGlzdGluZyBjb2RlLCBob3cgc2hvdWxkIGRyb3Bkb3ducyByZWFsbHkgYmUgYWRkZWQgdG8gdGhlIERPTT9cbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgY2xlYW46IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBVbnRpbCBodHRwczovL2dpdGh1Yi5jb20vQ2FydG9EQi9jYXJ0b2RiLmpzL2lzc3Vlcy8yMzggaXMgcmVzb2x2ZWQ6XG4gICAgJCh0aGlzLm9wdGlvbnMudGFyZ2V0KS51bmJpbmQoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuY29uc3RydWN0b3IuX19zdXBlcl9fLmNsZWFuLmFwcGx5KHRoaXMpO1xuICB9XG5cbn0pO1xuIiwidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG52YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBGYXZNYXBWaWV3ID0gcmVxdWlyZSgnLi9mYXZfbWFwX3ZpZXcnKTtcbnZhciBVc2VySW5mb1ZpZXcgPSByZXF1aXJlKCcuL3VzZXJfaW5mb192aWV3Jyk7XG52YXIgUGFnaW5hdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vY29tbW9uL3ZpZXdzL3BhZ2luYXRpb24vbW9kZWwnKTtcbnZhciBQYWdpbmF0aW9uVmlldyA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3cy9wYWdpbmF0aW9uL3ZpZXcnKTtcbnZhciBVc2VyU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi4vcHVibGljX2NvbW1vbi91c2VyX3NldHRpbmdzX3ZpZXcnKTtcbnZhciBVc2VySW5kdXN0cmllc1ZpZXcgPSByZXF1aXJlKCcuLi9wdWJsaWNfY29tbW9uL3VzZXJfaW5kdXN0cmllc192aWV3Jyk7XG52YXIgTWFwQ2FyZFByZXZpZXcgPSByZXF1aXJlKCcuLi9jb21tb24vdmlld3MvbWFwY2FyZF9wcmV2aWV3Jyk7XG52YXIgU2Nyb2xsYWJsZUhlYWRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3cy9zY3JvbGxhYmxlX2hlYWRlcicpO1xuXG4kKGZ1bmN0aW9uKCkge1xuICBjZGIuaW5pdChmdW5jdGlvbigpIHtcbiAgICBjZGIudGVtcGxhdGVzLm5hbWVzcGFjZSA9ICdjYXJ0b2RiLyc7XG4gICAgY2RiLmNvbmZpZy5zZXQod2luZG93LmNvbmZpZyk7XG4gICAgY2RiLmNvbmZpZy5zZXQoJ3VybF9wcmVmaXgnLCB3aW5kb3cuYmFzZV91cmwpO1xuXG4gICAgdmFyIHNjcm9sbGFibGVIZWFkZXIgPSBuZXcgU2Nyb2xsYWJsZUhlYWRlcih7XG4gICAgICBlbDogJCgnLmpzLU5hdm1lbnUnKSxcbiAgICAgIGFuY2hvclBvaW50OiAzNTBcbiAgICB9KTtcblxuICAgIHZhciB1c2VySW5kdXN0cmllc1ZpZXcgPSBuZXcgVXNlckluZHVzdHJpZXNWaWV3KHtcbiAgICAgIGVsOiAkKCcuanMtdXNlci1pbmR1c3RyaWVzJylcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQuYm9keSkuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNkYi5nb2QudHJpZ2dlcignY2xvc2VEaWFsb2dzJyk7XG4gICAgfSk7XG5cbiAgICB2YXIgYXV0aGVudGljYXRlZFVzZXIgPSBuZXcgY2RiLm9wZW4uQXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICBhdXRoZW50aWNhdGVkVXNlci5iaW5kKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhdXRoZW50aWNhdGVkVXNlci5nZXQoJ3VzZXJuYW1lJykpIHtcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgY2RiLmFkbWluLlVzZXIoYXV0aGVudGljYXRlZFVzZXIuYXR0cmlidXRlcyk7XG4gICAgICAgIHZhciB1c2VyU2V0dGluZ3NWaWV3ID0gbmV3IFVzZXJTZXR0aW5nc1ZpZXcoe1xuICAgICAgICAgIGVsOiAkKCcuanMtdXNlci1zZXR0aW5ncycpLFxuICAgICAgICAgIG1vZGVsOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICB1c2VyU2V0dGluZ3NWaWV3LnJlbmRlcigpO1xuXG4gICAgICAgICQoJy5qcy1sb2dpbicpLmhpZGUoKTtcbiAgICAgICAgJCgnLmpzLWxlYXJuJykuc2hvdygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGZhdk1hcFZpZXcgPSBuZXcgRmF2TWFwVmlldyh3aW5kb3cuZmF2TWFwVmlld0F0dHJzKTtcbiAgICBmYXZNYXBWaWV3LnJlbmRlcigpO1xuXG4gICAgdmFyIHVzZXJJbmZvVmlldyA9IG5ldyBVc2VySW5mb1ZpZXcoe1xuICAgICAgZWw6ICQoJy5qcy11c2VyLWluZm8nKVxuICAgIH0pO1xuICAgIHVzZXJJbmZvVmlldy5yZW5kZXIoKTtcblxuICAgIHZhciBwYWdpbmF0aW9uVmlldyA9IG5ldyBQYWdpbmF0aW9uVmlldyh7XG4gICAgICBlbDogJy5qcy1jb250ZW50LWZvb3RlcicsXG4gICAgICBtb2RlbDogbmV3IFBhZ2luYXRpb25Nb2RlbCh3aW5kb3cucGFnaW5hdGlvbk1vZGVsQXR0cnMpXG4gICAgfSk7XG4gICAgcGFnaW5hdGlvblZpZXcucmVuZGVyKCk7XG5cbiAgICAkKCcuTWFwQ2FyZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlzSWQgPSAkKHRoaXMpLmRhdGEoJ3Zpc0lkJyk7XG4gICAgICBpZiAodmlzSWQpIHtcbiAgICAgICAgdmFyIHVzZXJuYW1lID0gJCh0aGlzKS5kYXRhKCd2aXNPd25lck5hbWUnKTtcbiAgICAgICAgdmFyIG1hcENhcmRQcmV2aWV3ID0gbmV3IE1hcENhcmRQcmV2aWV3KHtcbiAgICAgICAgICBlbDogJCh0aGlzKS5maW5kKCcuanMtaGVhZGVyJyksXG4gICAgICAgICAgaGVpZ2h0OiAyMjAsXG4gICAgICAgICAgdmlzSWQ6ICQodGhpcykuZGF0YSgndmlzSWQnKSxcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgbWFwc0FwaVJlc291cmNlOiBjZGIuY29uZmlnLmdldE1hcHNSZXNvdXJjZU5hbWUodXNlcm5hbWUpXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDYXJkUHJldmlldy5sb2FkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhdXRoZW50aWNhdGVkVXNlci5mZXRjaCgpO1xuICB9KTtcbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKTtcbnZhciBjcmVhdGVEZWZhdWx0RmFsbGJhY2tNYXAgPSByZXF1aXJlKCcuLi9jb21tb24vdmlld3MvY3JlYXRlX2RlZmF1bHRfZmFsbGJhY2tfbWFwJyk7XG5cbi8qKlxuICogVmlldyB0byByZW5kZXIgdGhlIFwiZmF2b3VyaXRlXCIgbWFwLCBlaXRoZXIgYSB1c2VyJ3MgbWFwIHZpc3VhbGl6YXRpb24sIG9yIGEgZGVmYXVsdCBmYWxsYmFjayBtYXAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2lzLXByZS1sb2FkaW5nJykuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcblxuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlVmlzKSB7XG4gICAgICBwcm9taXNlID0gdGhpcy5fY3JlYXRlVmlzTWFwKHRoaXMub3B0aW9ucy5jcmVhdGVWaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlID0gdGhpcy5fY3JlYXRlRmFsbGJhY2tNYXAoKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcHJvbWlzZS5kb25lKGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi4kZWwucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcbiAgICAgIHNlbGYuJCgnLmpzLXNwaW5uZXInKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9jcmVhdGVWaXNNYXA6IGZ1bmN0aW9uKGNyZWF0ZVZpcykge1xuICAgIHJldHVybiBjZGIuY3JlYXRlVmlzKHRoaXMuZWwsIGNyZWF0ZVZpcy51cmwsIF8uZGVmYXVsdHMoY3JlYXRlVmlzLm9wdHMsIHtcbiAgICAgIHRpdGxlOiAgICAgICAgICAgICBmYWxzZSxcbiAgICAgIGhlYWRlcjogICAgICAgICAgICBmYWxzZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAgICAgICBmYWxzZSxcbiAgICAgIHNlYXJjaDogICAgICAgICAgICBmYWxzZSxcbiAgICAgIGxheWVyX3NlbGVjdG9yOiAgICBmYWxzZSxcbiAgICAgIHRleHQ6ICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgIGltYWdlOiAgICAgICAgICAgICBmYWxzZSxcbiAgICAgIHNoYXJlYWJsZTogICAgICAgICBmYWxzZSxcbiAgICAgIGFubm90YXRpb246ICAgICAgICBmYWxzZSxcbiAgICAgIHpvb206ICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgIGNhcnRvZGJfbG9nbzogICAgICBmYWxzZSxcbiAgICAgIHNjcm9sbHdoZWVsOiAgICAgICBmYWxzZSxcbiAgICAgIG1vYmlsZV9sYXlvdXQ6ICAgICB0cnVlLFxuICAgICAgc2xpZGVzX2NvbnRyb2xsZXI6IGZhbHNlLFxuICAgICAgbGVnZW5kczogICAgICAgICAgIGZhbHNlLFxuICAgICAgdGltZV9zbGlkZXI6ICAgICAgIGZhbHNlLFxuICAgICAgbG9hZGVyOiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgZnVsbHNjcmVlbjogICAgICAgIGZhbHNlLFxuICAgICAgbm9fY2RuOiAgICAgICAgICAgIGZhbHNlXG4gICAgfSkpO1xuICB9LFxuXG4gIF9jcmVhdGVGYWxsYmFja01hcDogZnVuY3Rpb24oKSB7XG4gICAgY3JlYXRlRGVmYXVsdEZhbGxiYWNrTWFwKHtcbiAgICAgIGVsOiB0aGlzLmVsLFxuICAgICAgYmFzZWxheWVyOiB0aGlzLm9wdGlvbnMuZmFsbGJhY2tCYXNlbGF5ZXJcbiAgICB9KTtcblxuICAgIC8vIEZha2UgcHJvbWlzZSwgdG8ga2VlcCB0aGUgcmVuZGVyIG1ldGhvZCBjb25zaXN0ZW50IHdpdGggaG93IHRoZSB2aXMgbWFwIHdvdWxkIGhhdmUgYmVlbiBoYW5kbGVkIChhc3luYylcbiAgICByZXR1cm4ge1xuICAgICAgZG9uZTogZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG5cbi8qKlxuICogVGhlIGNvbnRlbnQgb2YgdGhlIGRyb3Bkb3duIG1lbnUgb3BlbmVkIGJ5IHRoZSBsaW5rIGF0IHRoZSBlbmQgb2YgdGhlIGJyZWFkY3J1bWJzIG1lbnUsIGUuZy5cbiAqICAgdXNlcm5hbWUgLyBNYXBzIHZcbiAqICAgICAgICAgICAgX19fX19fL1xcX19fX1xuICogICAgICAgICAgIHwgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgfCAgICB0aGlzICAgIHxcbiAqICAgICAgICAgICB8X19fX19fX19fX19ffFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5hZG1pbi5Ecm9wZG93bk1lbnUuZXh0ZW5kKHtcbiAgY2xhc3NOYW1lOiAnRHJvcGRvd24nLFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZWxkZXIoJ2luaXRpYWxpemUnKTtcblxuICAgIC8vIE5lY2Vzc2FyeSB0byBoaWRlIGRpYWxvZyBvbiBjbGljayBvdXRzaWRlIHBvcHVwLCBmb3IgZXhhbXBsZS5cbiAgICBjZGIuZ29kLmJpbmQoJ2Nsb3NlRGlhbG9ncycsIHRoaXMuaGlkZSwgdGhpcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5zaG93KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwuaGlkZSgpO1xuICB9XG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG52YXIgQnJlYWRjcnVtYkRyb3Bkb3duID0gcmVxdWlyZSgnLi91c2VyX2luZm8vYnJlYWRjcnVtYl9kcm9wZG93bl92aWV3Jyk7XG5cbi8qKlxuICogVmlldyB0byByZW5kZXIgdGhlIHVzZXIgaW5mbyBzZWN0aW9uLlxuICogRXhwZWN0ZWQgdG8gYmUgY3JlYXRlZCBmcm9tIGV4aXN0aW5nIERPTSBlbGVtZW50LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5jb3JlLlZpZXcuZXh0ZW5kKHtcblxuICBldmVudHM6IHtcbiAgICAnY2xpY2sgLmpzLWJyZWFkY3J1bWItZHJvcGRvd24tdGFyZ2V0JzogJ19jcmVhdGVCcmVhZGNydW1iRHJvcGRvd24nXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfY3JlYXRlQnJlYWRjcnVtYkRyb3Bkb3duOiBmdW5jdGlvbihldikge1xuICAgIHRoaXMua2lsbEV2ZW50KGV2KTtcbiAgICB2YXIgZHJvcGRvd24gPSBuZXcgQnJlYWRjcnVtYkRyb3Bkb3duKHtcbiAgICAgIHRhcmdldDogJCgnLmpzLWJyZWFkY3J1bWItZHJvcGRvd24tdGFyZ2V0JyksXG4gICAgICBlbDogJCgnLmpzLWJyZWFkY3J1bWItZHJvcGRvd24tY29udGVudCcpLFxuICAgICAgaG9yaXpvbnRhbF9vZmZzZXQ6IDMsIC8vIHRvIG1hdGNoIHRoZSBkcm9wZG93biBpbmRpY2F0b3IvYXJyb3dcbiAgICAgIGhvcml6b250YWxfcG9zaXRpb246ICdyaWdodCcsXG4gICAgICB0aWNrOiAncmlnaHQnXG4gICAgfSk7XG4gICAgdGhpcy5hZGRWaWV3KGRyb3Bkb3duKTtcbiAgICBkcm9wZG93bi5vbignb25Ecm9wZG93blNob3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2RiLmdvZC50cmlnZ2VyKCdjbG9zZURpYWxvZ3MnKTtcbiAgICB9LCB0aGlzKTtcbiAgICBkcm9wZG93bi5vcGVuKCk7XG4gIH1cbn0pO1xuIl19
