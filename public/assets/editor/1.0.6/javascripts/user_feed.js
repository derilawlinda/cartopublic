(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var BaseDialog = require('./views/base_dialog/view');

/**
 * Convenient factory to create views without having to create new files.
 */
module.exports = {

  createDialogByTemplate: function(templateOrStr, templateData, dialogOptions) {
    return this.createDialogByView(this.createByTemplate(templateOrStr, templateData), dialogOptions);
  },

  /**
   * @return {Object} instance of cdb.core.View, which takes two params of template and templateData
   */
  createByTemplate: function(templateOrStr, templateData, viewOpts) {
    var template = _.isString(templateOrStr) ? cdb.templates.getTemplate(templateOrStr) : templateOrStr;

    var view = new cdb.core.View(viewOpts);
    view.render = function() {
      this.$el.html(
        template(templateData)
      );
      return this;
    };

    return view;
  },

  /**
   * Creates a view that holds a list of views to be rendered.
   * @param {Array} list of View object, i.e. have a render method, $el, and clean method.
   * @param {Object,undefined} viewOpts view options, .e.g {className: 'Whatever'}
   * @return {Object} A view
   */
  createByList: function(views, viewOpts) {
    var listView = new cdb.core.View(viewOpts);
    listView.render = function() {
      this.clearSubViews();
      _.each(views, function(view) {
        this.addView(view);
        this.$el.append(view.render().$el);
      }, this);
      return this;
    };
    return listView;
  },

  createDialogByView: function(contentView, dialogOptions) {

    var options = _.extend({ clean_on_hide: true, enter_to_confirm: true }, dialogOptions);

    return new (BaseDialog.extend({
      initialize: function() {
        this.elder('initialize');
        this.addView(contentView);
      },

      render_content: function() {
        return contentView.render().el;
      }
    }))(options);
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./views/base_dialog/view":3}],2:[function(require,module,exports){
/**
 * Random quote
 */
module.exports = function() {

  var template  = _.template('<p class="CDB-Text CDB-Size-medium u-altTextColor">"<%= quote %>"</p><% if (author) { %><p class="CDB-Text CDB-Size-medium u-altTextColor u-tSpace"><em>– <%- author %></em></p><% } %>');

  var quotes = [
    { quote: "Geographers never get lost. They just do accidental field work.", author: "Nicholas Chrisman" },
    { quote: "Geography is just physics slowed down, with a couple of trees stuck in it.", author: "Terry Pratchett" },
    { quote: "Not all those who wander are lost.", author: "J. R. R. Tolkien" },
    { quote: "In that Empire, the Art of Cartography attained such Perfection that the map of a single Province occupied the entirety of a City.", author: "Jorge Luis Borges" },
    { quote: "X marks the spot", author: "Indiana Jones" },
    { quote: "It's turtles all the way down.", author: null },
    { quote: "Remember: no matter where you go, there you are.", author: null },
    { quote: "Without geography, you're nowhere!", author: "Jimmy Buffett" },
    { quote: "our earth is a globe / whose surface we probe /<br />no map can replace her / but just try to trace her", author: "Steve Waterman" },
    { quote: "Everything happens somewhere.", author: "Doctor Who" },
    { quote: "A map is the greatest of all epic poems. Its lines and colors show the realization of great dreams.", author: "Gilbert H. Grosvenor" },
    { quote: "Everything is related to everything else,<br />but near things are more related than distant things.", author: "Tobler's first law of geography" },
    { quote: "Hic Sunt Dracones", author: null },
    { quote: "Here be dragons", author: null },
    { quote: "Stand in the place where you live / Now face North /<br/>Think about direction / Wonder why you haven't before", author: "R.E.M" },
    { quote: "The virtue of maps, they show what can be done with limited space, they foresee that everything can happen therein.", author: "José Saramago" }
  ];

  var r = Math.round(Math.random() * (quotes.length - 1));

  return template(quotes[r]);
};

},{}],3:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var _ = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var BaseDialog = cdb.ui.common.Dialog;

/**
 * Abstract view for a dialog, a kind of view that takes up the full screen overlaying any previous content.
 *
 * To be extended for a specific use-case.
 * It inherits from CartoDB.js' Dialog view so has some particular behavior/convention of how to be used, see example
 *
 * Example of how to use:
 *   // Extend this view
 *   var MyDialog = BaseDialog.extend({
 *     render_content: function() {
 *       return 'Hello world!';
 *     }
 *   });
 *
 *   // Create instance object.
 *   var dialog = new MyDialog();
 *
 *   // To render & show initially (only to be called once):
 *   dialog.appendToBody();
 */
module.exports = BaseDialog.extend({

  className: 'Dialog is-opening',

  overrideDefaults: {
    template_name: 'common/views/base_dialog/template',
    triggerDialogEvents: true
  },

  initialize: function() {
    // Override defaults of parent
    _.defaults(this.options, this.overrideDefaults);
    this.elder('initialize');
    this.bind('show', this._setBodyForDialogMode.bind(this, 'add'));
    this.bind('hide', this._setBodyForDialogMode.bind(this, 'remove'));
  },

  show: function() {
    BaseDialog.prototype.show.apply(this, arguments);
    this.trigger('show');
    if (this.options.triggerDialogEvents) {
      cdb.god.trigger('dialogOpened');
    }
    this.$el.removeClass('is-closing');

    // Blur current element (e.g. a <a> tag that was clicked to open this window)
    if (document.activeElement) {
      document.activeElement.blur();
    }
  },

  render: function() {
    BaseDialog.prototype.render.apply(this, arguments);
    this.$('.content').addClass('is-newContent');

    if (this._isSticky()) {
      this.$el.addClass('is-sticky');
    }

    this.show();
    return this;
  },

  _isSticky: function() {
    return this.options && this.options.sticky;
  },

  close: function() {
    this._cancel(undefined, true);
  },

  /**
   * @override cdb.ui.common.Dialog.prototype.open for animated opening
   */
  open: function() {
    BaseDialog.prototype.open.apply(this, arguments);
    this.show();
  },

  /**
   * @override cdb.ui.common.Dialog.prototype.hide to implement animation
   */
  hide: function() {
    BaseDialog.prototype.hide.apply(this, arguments);
    this.trigger('hide');
  },

  /**
   * @override cdb.ui.common.Dialog.prototype._cancel to implement animation upon closing the dialog and to handle hide event.
   */
  _cancel: function(ev, skipCancelCallback) {
    if (ev) this.killEvent(ev);

    if (this._isSticky()) {
      return;
    }

    this.$el.removeClass('is-opening').addClass('is-closing');

    // Use timeout instead of event listener on animation since the event triggered differs depending on browser
    // Timing won't perhaps be 100% accurate but it's good enough
    // The timeout should match the .Dialog.is-closing animation duration.
    var self = this;
    setTimeout(function() {
      // from original _cancel
      if (self.cancel && !skipCancelCallback) {
        self.cancel();
      }
      BaseDialog.prototype.hide.call(self);
    }, 80); //ms

    // Trigger events immediately, don't wait for the timeout above
    this.trigger('hide');
    if (this.options.triggerDialogEvents) {
      cdb.god.trigger('dialogClosed');
    }
  },

  /**
   * @override cdb.ui.common.Dialog.prototype._ok to not hide dialog by default if there's an ok method defined.
   */
  _ok: function(ev) {
    this.killEvent(ev);
    if (this.ok) {
      this.ok();
    } else {
      this.close();
    }
  },

  _setBodyForDialogMode: function(action) {
    $('body')[action + 'Class']('is-inDialog');
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"../common/views/create_default_fallback_map":4}],12:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var UserSettingsView = require('../public_common/user_settings_view');
var UserIndustriesView = require('../public_common/user_industries_view');
var FavMapView = require('../public_dashboard/fav_map_view');
var Feed = require('./view');
var ScrollableHeader = require('../common/views/scrollable_header');

/**
 * Entry point for the user feed, bootstraps all dependency models and application.
 */
$(function() {

  cdb.init(function() {

    cdb.templates.namespace = 'cartodb/';
    cdb.config.set(window.config);
    cdb.config.set('url_prefix', window.base_url);

    var userIndustriesView = new UserIndustriesView({
      el: $('.js-user-industries')
    });

    var scrollableHeader = new ScrollableHeader({
      el: $('.js-Navmenu'),
      anchorPoint: 520
    });

    var authenticatedUser = new cdb.open.AuthenticatedUser();

    $(document.body).bind('click', function() {
      cdb.god.trigger('closeDialogs');
    });

    authenticatedUser.bind('change', function() {
      if (authenticatedUser.get('username')) {
        var user = new cdb.admin.User(authenticatedUser.attributes);
        var userSettingsView = new UserSettingsView({
          el: $('.js-user-settings'),
          model: user
        });
        userSettingsView.render();

        var userDashboardUrl = user.viewUrl().dashboard();
        $('.js-user-info .UserAvatar-img').wrap($('<a>', {
          href: userDashboardUrl
        }));

        $('.js-login').hide();
        $('.js-learn').show();
      }
    });

    var favMapView = new FavMapView(window.favMapViewAttrs);
    favMapView.render();

    var feed = new Feed({
      el: $('.js-feed'),
      authenticatedUser: authenticatedUser
    });

    feed.render();
    authenticatedUser.fetch();
  });
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/views/scrollable_header":6,"../public_common/user_industries_view":8,"../public_common/user_settings_view":10,"../public_dashboard/fav_map_view":11,"./view":14}],13:[function(require,module,exports){
(function (global){
var Backbone = (typeof window !== "undefined" ? window['Backbone'] : typeof global !== "undefined" ? global['Backbone'] : null);

module.exports = Backbone.Collection.extend({
  url: '/api/v1/viz',
  parse: function(models) {
    this.total_entries = models.total_entries;
    return models.visualizations;
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var ViewFactory = require('../common/view_factory');
var randomQuote = require('../common/view_helpers/random_quote');
var MapCardPreview = require('../common/views/mapcard_preview');
var Visualizations = require('./feed_collection');

module.exports = cdb.core.View.extend({
  tagName: 'div',

  _PAGE: 1,
  _ITEMS_PER_PAGE: 8,

  _SMALL_WIDTH: 544,

  _CARD_HEIGHT: 170,
  _LOADER_TITLE: 'Loading visualizations',

  events: {
    'click .js-more': '_onClickMore'
  },

  initialize: function() {
    _.bindAll(this, '_onFetchError', '_onWindowResize', '_renderStaticMaps');

    this.maps = [];

    this._initTemplates();
    this._initModels();
    this._initBindings();
  },

  render: function() {
    this.$el.html(this.template());
    this._renderLoader();
    this._fetchItems({ page: this._PAGE });

    return this;
  },

  _onWindowResize: function() {
    var width = $(window).width();

    if (width <= this._SMALL_WIDTH) {
      this.model.set('size', 'small');
    } else {
      this.model.set('size', 'big');
    }

    this._renderStaticMaps();
  },

  _initTemplates: function() {
    this.template = cdb.templates.getTemplate('user_feed/template');
    this.mapTemplate = cdb.templates.getTemplate('user_feed/map_item_template');
    this.datasetTemplate = cdb.templates.getTemplate('user_feed/dataset_item_template');
    this.loaderTemplatePath = 'user_feed/loading';
    this.emptyTemplatePath = 'user_feed/empty';
    this.errorTemplatePath = 'user_feed/error';
  },

  _initModels: function() {
    var size = 'big';
    var wWidth = $(window).width();

    if (wWidth <= this._SMALL_WIDTH) {
      size = 'small';
    }

    this.model = new cdb.core.Model({
      vis_count: 0,
      type: '',
      size: size,
      page: 0,
      order_by: 'updated_at'
    });

    this.collection = new Visualizations();
    this.collection.bind('reset', this._renderVisualizations, this);
  },

  _initBindings: function() {
    var self = this;

    this.model.bind('change:show_more', this._onChangeShowMore, this);
    this.model.bind('change:show_loader', this._onChangeShowLoader, this);
    this.model.bind('change:show_mast', this._onChangeShowMast, this);
    this.model.bind('change:vis_count', this._onChangeVisCount, this);

    $(window).bind('resize', this._onWindowResize);
  },

  _onChangeVisCount: function() {
    if (this.model.get('vis_count') >= this.collection.total_entries) {
      this.model.set({ show_more: false });
    } else {
      this.model.set({ show_more: true });
    }
  },

  _onChangeShowMast: function() {
    if (this.model.get('show_mast')) {
      this.$('.js-mast').removeClass('is-hidden');
    } else {
      this.$('.js-mast').addClass('is-hidden');
    }
  },

  _onChangeShowLoader: function() {
    if (this.model.get('show_loader')) {
      this.loader.show();
    } else {
      this.loader.hide();
    }
  },

  _onChangeShowMore: function() {
    this.$('.js-more').toggleClass('is-hidden', !this.model.get('show_more'));
  },

  _renderLoader: function() {
    this.loader = ViewFactory.createByTemplate(this.loaderTemplatePath, {
      title: this._LOADER_TITLE,
      quote: randomQuote()
    });

    this.$el.append(this.loader.render().$el);
  },

  _renderError: function() {
    this.error = ViewFactory.createByTemplate(this.errorTemplatePath, {
    });

    this.$el.append(this.error.render().$el);
  },

  _renderEmpty: function() {
    this.empty = ViewFactory.createByTemplate(this.emptyTemplatePath, {
      name: config.user_name
    });

    this.$el.append(this.empty.render().$el);
  },

  _getDatasetSize: function(item) {
    var size = item.get('table').size;
    return size ? cdb.Utils.readablizeBytes(size, true).split(' ') : 0;
  },

  _getGeometryType: function(geomTypes) {
    if (geomTypes && geomTypes.length > 0) {
      var types = ['point', 'polygon', 'line', 'raster'];
      var geomType = geomTypes[0];

      return _.find(types, function(type) {
        return geomType.toLowerCase().indexOf(type) !== -1;
      });

    } else {
      return null;
    }
  },

  _renderVisualizations: function() {

    if (this.collection.length === 0) {
      this.model.set({ show_loader: false });
      this._renderEmpty();
      return;
    }

    this.model.set({ vis_count: this.model.get('vis_count') + this.collection.length, show_loader: false, show_more: true, show_filters: true, show_mast: true });

    this.collection.each(function(item) {
      var template = item.get('type') === 'derived' ? this.mapTemplate : this.datasetTemplate;
      var geomType = (item.get('table') && item.get('table').geometry_types) ? this._getGeometryType(item.get('table').geometry_types) : null;

      var owner = item.get('permission').owner;

      var el = template({
        vis: item.attributes,
        datasetSize: this._getDatasetSize(item),
        username: owner.username,
        avatar_url: owner.avatar_url,
        table_count: owner.table_count,
        maps_count: owner.maps_count,
        geomType: geomType,
        account_host: config.account_host,
        base_url: cdb.config.get('url_prefix')
      });

      this.$('.js-items').append(el);

      var $item = this.$('.js-items').find('[data-vis-id="' + item.get('id') + '"]');

      if (item.get('type') === 'derived') {
        this.maps.push(item);
      }

      if (item.get('type') === 'derived' && !item.get('rendered_' + this.model.get('size'))) {
        this._renderStaticMap(item, $item);
      }

    }, this);

  },

  _renderStaticMaps: function() {
    _.each(this.maps, function(item) {
      if (!item.get('rendered_' + this.model.get('size'))) {
        var $item = this.$('.js-items').find('[data-vis-id="' + item.get('id') + '"]');
        this._renderStaticMap(item, $item);
      }
    }, this);
  },

  _renderStaticMap: function(vis, $el) {
    var visId = vis.get('id');
    var username = vis.get('permission').owner.username;
    var width = 540;
    var className = 'is-' + this.model.get('size');

    if (this.model.get('size') === 'small') {
      width = 288;
    }

    if (visId && username) {
      vis.set('rendered_' + this.model.get('size'), true);

      new MapCardPreview({
        el: $el.find('.js-header'),
        width: width,
        height: this._CARD_HEIGHT,
        mapsApiResource: cdb.config.getMapsResourceName(username),
        username: username,
        visId: visId,
        className: className
      }).load();
    }
  },

  _fetchItems: function(params) {
    var data = _.extend({
      types: 'table,derived',
      privacy: 'public',
      only_published: 'true',
      exclude_shared: 'true',
      per_page: this._ITEMS_PER_PAGE,
      order: 'updated_at'
    }, params);

    this.collection.fetch({
      data: data,
      error: this._onFetchError
    });
  },

  _onFetchError: function() {
    this.model.set({ show_loader: false });
    this._renderError();
  },

  _onClickMore: function(e) {
    this.killEvent(e);
    this.model.set({ show_more: false, show_loader: true });
    this._fetchItems({ page: ++this._PAGE });
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/view_factory":1,"../common/view_helpers/random_quote":2,"../common/views/mapcard_preview":5,"./feed_collection":13}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdfZmFjdG9yeS5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9jb21tb24vdmlld19oZWxwZXJzL3JhbmRvbV9xdW90ZS5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9jb21tb24vdmlld3MvYmFzZV9kaWFsb2cvdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9jb21tb24vdmlld3MvY3JlYXRlX2RlZmF1bHRfZmFsbGJhY2tfbWFwLmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL2NvbW1vbi92aWV3cy9tYXBjYXJkX3ByZXZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdzL3Njcm9sbGFibGVfaGVhZGVyLmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19jb21tb24vdXNlcl9pbmR1c3RyaWVzL2Ryb3Bkb3duX3ZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvcHVibGljX2NvbW1vbi9saWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvcHVibGljX2NvbW1vbi9pbnB1dC5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3MvZHJvcGRvd25fdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfZGFzaGJvYXJkL2Zhdl9tYXBfdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi91c2VyX2ZlZWQvZW50cnkuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvdXNlcl9mZWVkL2ZlZWRfY29sbGVjdGlvbi5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi91c2VyX2ZlZWQvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2Q0EsSUFBSSxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pILElBQUksa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xudmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgQmFzZURpYWxvZyA9IHJlcXVpcmUoJy4vdmlld3MvYmFzZV9kaWFsb2cvdmlldycpO1xuXG4vKipcbiAqIENvbnZlbmllbnQgZmFjdG9yeSB0byBjcmVhdGUgdmlld3Mgd2l0aG91dCBoYXZpbmcgdG8gY3JlYXRlIG5ldyBmaWxlcy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgY3JlYXRlRGlhbG9nQnlUZW1wbGF0ZTogZnVuY3Rpb24odGVtcGxhdGVPclN0ciwgdGVtcGxhdGVEYXRhLCBkaWFsb2dPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGlhbG9nQnlWaWV3KHRoaXMuY3JlYXRlQnlUZW1wbGF0ZSh0ZW1wbGF0ZU9yU3RyLCB0ZW1wbGF0ZURhdGEpLCBkaWFsb2dPcHRpb25zKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSBvZiBjZGIuY29yZS5WaWV3LCB3aGljaCB0YWtlcyB0d28gcGFyYW1zIG9mIHRlbXBsYXRlIGFuZCB0ZW1wbGF0ZURhdGFcbiAgICovXG4gIGNyZWF0ZUJ5VGVtcGxhdGU6IGZ1bmN0aW9uKHRlbXBsYXRlT3JTdHIsIHRlbXBsYXRlRGF0YSwgdmlld09wdHMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBfLmlzU3RyaW5nKHRlbXBsYXRlT3JTdHIpID8gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSh0ZW1wbGF0ZU9yU3RyKSA6IHRlbXBsYXRlT3JTdHI7XG5cbiAgICB2YXIgdmlldyA9IG5ldyBjZGIuY29yZS5WaWV3KHZpZXdPcHRzKTtcbiAgICB2aWV3LnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kZWwuaHRtbChcbiAgICAgICAgdGVtcGxhdGUodGVtcGxhdGVEYXRhKVxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gdmlldztcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHZpZXcgdGhhdCBob2xkcyBhIGxpc3Qgb2Ygdmlld3MgdG8gYmUgcmVuZGVyZWQuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3Qgb2YgVmlldyBvYmplY3QsIGkuZS4gaGF2ZSBhIHJlbmRlciBtZXRob2QsICRlbCwgYW5kIGNsZWFuIG1ldGhvZC5cbiAgICogQHBhcmFtIHtPYmplY3QsdW5kZWZpbmVkfSB2aWV3T3B0cyB2aWV3IG9wdGlvbnMsIC5lLmcge2NsYXNzTmFtZTogJ1doYXRldmVyJ31cbiAgICogQHJldHVybiB7T2JqZWN0fSBBIHZpZXdcbiAgICovXG4gIGNyZWF0ZUJ5TGlzdDogZnVuY3Rpb24odmlld3MsIHZpZXdPcHRzKSB7XG4gICAgdmFyIGxpc3RWaWV3ID0gbmV3IGNkYi5jb3JlLlZpZXcodmlld09wdHMpO1xuICAgIGxpc3RWaWV3LnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jbGVhclN1YlZpZXdzKCk7XG4gICAgICBfLmVhY2godmlld3MsIGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgICAgdGhpcy5hZGRWaWV3KHZpZXcpO1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodmlldy5yZW5kZXIoKS4kZWwpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBsaXN0VmlldztcbiAgfSxcblxuICBjcmVhdGVEaWFsb2dCeVZpZXc6IGZ1bmN0aW9uKGNvbnRlbnRWaWV3LCBkaWFsb2dPcHRpb25zKSB7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF8uZXh0ZW5kKHsgY2xlYW5fb25faGlkZTogdHJ1ZSwgZW50ZXJfdG9fY29uZmlybTogdHJ1ZSB9LCBkaWFsb2dPcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgKEJhc2VEaWFsb2cuZXh0ZW5kKHtcbiAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmVsZGVyKCdpbml0aWFsaXplJyk7XG4gICAgICAgIHRoaXMuYWRkVmlldyhjb250ZW50Vmlldyk7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJfY29udGVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50Vmlldy5yZW5kZXIoKS5lbDtcbiAgICAgIH1cbiAgICB9KSkob3B0aW9ucyk7XG4gIH1cbn07XG4iLCIvKipcbiAqIFJhbmRvbSBxdW90ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciB0ZW1wbGF0ZSAgPSBfLnRlbXBsYXRlKCc8cCBjbGFzcz1cIkNEQi1UZXh0IENEQi1TaXplLW1lZGl1bSB1LWFsdFRleHRDb2xvclwiPlwiPCU9IHF1b3RlICU+XCI8L3A+PCUgaWYgKGF1dGhvcikgeyAlPjxwIGNsYXNzPVwiQ0RCLVRleHQgQ0RCLVNpemUtbWVkaXVtIHUtYWx0VGV4dENvbG9yIHUtdFNwYWNlXCI+PGVtPuKAkyA8JS0gYXV0aG9yICU+PC9lbT48L3A+PCUgfSAlPicpO1xuXG4gIHZhciBxdW90ZXMgPSBbXG4gICAgeyBxdW90ZTogXCJHZW9ncmFwaGVycyBuZXZlciBnZXQgbG9zdC4gVGhleSBqdXN0IGRvIGFjY2lkZW50YWwgZmllbGQgd29yay5cIiwgYXV0aG9yOiBcIk5pY2hvbGFzIENocmlzbWFuXCIgfSxcbiAgICB7IHF1b3RlOiBcIkdlb2dyYXBoeSBpcyBqdXN0IHBoeXNpY3Mgc2xvd2VkIGRvd24sIHdpdGggYSBjb3VwbGUgb2YgdHJlZXMgc3R1Y2sgaW4gaXQuXCIsIGF1dGhvcjogXCJUZXJyeSBQcmF0Y2hldHRcIiB9LFxuICAgIHsgcXVvdGU6IFwiTm90IGFsbCB0aG9zZSB3aG8gd2FuZGVyIGFyZSBsb3N0LlwiLCBhdXRob3I6IFwiSi4gUi4gUi4gVG9sa2llblwiIH0sXG4gICAgeyBxdW90ZTogXCJJbiB0aGF0IEVtcGlyZSwgdGhlIEFydCBvZiBDYXJ0b2dyYXBoeSBhdHRhaW5lZCBzdWNoIFBlcmZlY3Rpb24gdGhhdCB0aGUgbWFwIG9mIGEgc2luZ2xlIFByb3ZpbmNlIG9jY3VwaWVkIHRoZSBlbnRpcmV0eSBvZiBhIENpdHkuXCIsIGF1dGhvcjogXCJKb3JnZSBMdWlzIEJvcmdlc1wiIH0sXG4gICAgeyBxdW90ZTogXCJYIG1hcmtzIHRoZSBzcG90XCIsIGF1dGhvcjogXCJJbmRpYW5hIEpvbmVzXCIgfSxcbiAgICB7IHF1b3RlOiBcIkl0J3MgdHVydGxlcyBhbGwgdGhlIHdheSBkb3duLlwiLCBhdXRob3I6IG51bGwgfSxcbiAgICB7IHF1b3RlOiBcIlJlbWVtYmVyOiBubyBtYXR0ZXIgd2hlcmUgeW91IGdvLCB0aGVyZSB5b3UgYXJlLlwiLCBhdXRob3I6IG51bGwgfSxcbiAgICB7IHF1b3RlOiBcIldpdGhvdXQgZ2VvZ3JhcGh5LCB5b3UncmUgbm93aGVyZSFcIiwgYXV0aG9yOiBcIkppbW15IEJ1ZmZldHRcIiB9LFxuICAgIHsgcXVvdGU6IFwib3VyIGVhcnRoIGlzIGEgZ2xvYmUgLyB3aG9zZSBzdXJmYWNlIHdlIHByb2JlIC88YnIgLz5ubyBtYXAgY2FuIHJlcGxhY2UgaGVyIC8gYnV0IGp1c3QgdHJ5IHRvIHRyYWNlIGhlclwiLCBhdXRob3I6IFwiU3RldmUgV2F0ZXJtYW5cIiB9LFxuICAgIHsgcXVvdGU6IFwiRXZlcnl0aGluZyBoYXBwZW5zIHNvbWV3aGVyZS5cIiwgYXV0aG9yOiBcIkRvY3RvciBXaG9cIiB9LFxuICAgIHsgcXVvdGU6IFwiQSBtYXAgaXMgdGhlIGdyZWF0ZXN0IG9mIGFsbCBlcGljIHBvZW1zLiBJdHMgbGluZXMgYW5kIGNvbG9ycyBzaG93IHRoZSByZWFsaXphdGlvbiBvZiBncmVhdCBkcmVhbXMuXCIsIGF1dGhvcjogXCJHaWxiZXJ0IEguIEdyb3N2ZW5vclwiIH0sXG4gICAgeyBxdW90ZTogXCJFdmVyeXRoaW5nIGlzIHJlbGF0ZWQgdG8gZXZlcnl0aGluZyBlbHNlLDxiciAvPmJ1dCBuZWFyIHRoaW5ncyBhcmUgbW9yZSByZWxhdGVkIHRoYW4gZGlzdGFudCB0aGluZ3MuXCIsIGF1dGhvcjogXCJUb2JsZXIncyBmaXJzdCBsYXcgb2YgZ2VvZ3JhcGh5XCIgfSxcbiAgICB7IHF1b3RlOiBcIkhpYyBTdW50IERyYWNvbmVzXCIsIGF1dGhvcjogbnVsbCB9LFxuICAgIHsgcXVvdGU6IFwiSGVyZSBiZSBkcmFnb25zXCIsIGF1dGhvcjogbnVsbCB9LFxuICAgIHsgcXVvdGU6IFwiU3RhbmQgaW4gdGhlIHBsYWNlIHdoZXJlIHlvdSBsaXZlIC8gTm93IGZhY2UgTm9ydGggLzxici8+VGhpbmsgYWJvdXQgZGlyZWN0aW9uIC8gV29uZGVyIHdoeSB5b3UgaGF2ZW4ndCBiZWZvcmVcIiwgYXV0aG9yOiBcIlIuRS5NXCIgfSxcbiAgICB7IHF1b3RlOiBcIlRoZSB2aXJ0dWUgb2YgbWFwcywgdGhleSBzaG93IHdoYXQgY2FuIGJlIGRvbmUgd2l0aCBsaW1pdGVkIHNwYWNlLCB0aGV5IGZvcmVzZWUgdGhhdCBldmVyeXRoaW5nIGNhbiBoYXBwZW4gdGhlcmVpbi5cIiwgYXV0aG9yOiBcIkpvc8OpIFNhcmFtYWdvXCIgfVxuICBdO1xuXG4gIHZhciByID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHF1b3Rlcy5sZW5ndGggLSAxKSk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlKHF1b3Rlc1tyXSk7XG59O1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKTtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG52YXIgQmFzZURpYWxvZyA9IGNkYi51aS5jb21tb24uRGlhbG9nO1xuXG4vKipcbiAqIEFic3RyYWN0IHZpZXcgZm9yIGEgZGlhbG9nLCBhIGtpbmQgb2YgdmlldyB0aGF0IHRha2VzIHVwIHRoZSBmdWxsIHNjcmVlbiBvdmVybGF5aW5nIGFueSBwcmV2aW91cyBjb250ZW50LlxuICpcbiAqIFRvIGJlIGV4dGVuZGVkIGZvciBhIHNwZWNpZmljIHVzZS1jYXNlLlxuICogSXQgaW5oZXJpdHMgZnJvbSBDYXJ0b0RCLmpzJyBEaWFsb2cgdmlldyBzbyBoYXMgc29tZSBwYXJ0aWN1bGFyIGJlaGF2aW9yL2NvbnZlbnRpb24gb2YgaG93IHRvIGJlIHVzZWQsIHNlZSBleGFtcGxlXG4gKlxuICogRXhhbXBsZSBvZiBob3cgdG8gdXNlOlxuICogICAvLyBFeHRlbmQgdGhpcyB2aWV3XG4gKiAgIHZhciBNeURpYWxvZyA9IEJhc2VEaWFsb2cuZXh0ZW5kKHtcbiAqICAgICByZW5kZXJfY29udGVudDogZnVuY3Rpb24oKSB7XG4gKiAgICAgICByZXR1cm4gJ0hlbGxvIHdvcmxkISc7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiAgIC8vIENyZWF0ZSBpbnN0YW5jZSBvYmplY3QuXG4gKiAgIHZhciBkaWFsb2cgPSBuZXcgTXlEaWFsb2coKTtcbiAqXG4gKiAgIC8vIFRvIHJlbmRlciAmIHNob3cgaW5pdGlhbGx5IChvbmx5IHRvIGJlIGNhbGxlZCBvbmNlKTpcbiAqICAgZGlhbG9nLmFwcGVuZFRvQm9keSgpO1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VEaWFsb2cuZXh0ZW5kKHtcblxuICBjbGFzc05hbWU6ICdEaWFsb2cgaXMtb3BlbmluZycsXG5cbiAgb3ZlcnJpZGVEZWZhdWx0czoge1xuICAgIHRlbXBsYXRlX25hbWU6ICdjb21tb24vdmlld3MvYmFzZV9kaWFsb2cvdGVtcGxhdGUnLFxuICAgIHRyaWdnZXJEaWFsb2dFdmVudHM6IHRydWVcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0cyBvZiBwYXJlbnRcbiAgICBfLmRlZmF1bHRzKHRoaXMub3B0aW9ucywgdGhpcy5vdmVycmlkZURlZmF1bHRzKTtcbiAgICB0aGlzLmVsZGVyKCdpbml0aWFsaXplJyk7XG4gICAgdGhpcy5iaW5kKCdzaG93JywgdGhpcy5fc2V0Qm9keUZvckRpYWxvZ01vZGUuYmluZCh0aGlzLCAnYWRkJykpO1xuICAgIHRoaXMuYmluZCgnaGlkZScsIHRoaXMuX3NldEJvZHlGb3JEaWFsb2dNb2RlLmJpbmQodGhpcywgJ3JlbW92ZScpKTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5zaG93LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50cmlnZ2VyKCdzaG93Jyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyRGlhbG9nRXZlbnRzKSB7XG4gICAgICBjZGIuZ29kLnRyaWdnZXIoJ2RpYWxvZ09wZW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnaXMtY2xvc2luZycpO1xuXG4gICAgLy8gQmx1ciBjdXJyZW50IGVsZW1lbnQgKGUuZy4gYSA8YT4gdGFnIHRoYXQgd2FzIGNsaWNrZWQgdG8gb3BlbiB0aGlzIHdpbmRvdylcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgQmFzZURpYWxvZy5wcm90b3R5cGUucmVuZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy4kKCcuY29udGVudCcpLmFkZENsYXNzKCdpcy1uZXdDb250ZW50Jyk7XG5cbiAgICBpZiAodGhpcy5faXNTdGlja3koKSkge1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2lzLXN0aWNreScpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9pc1N0aWNreTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc3RpY2t5O1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYW5jZWwodW5kZWZpbmVkLCB0cnVlKTtcbiAgfSxcblxuICAvKipcbiAgICogQG92ZXJyaWRlIGNkYi51aS5jb21tb24uRGlhbG9nLnByb3RvdHlwZS5vcGVuIGZvciBhbmltYXRlZCBvcGVuaW5nXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5vcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zaG93KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuaGlkZSB0byBpbXBsZW1lbnQgYW5pbWF0aW9uXG4gICAqL1xuICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5oaWRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50cmlnZ2VyKCdoaWRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuX2NhbmNlbCB0byBpbXBsZW1lbnQgYW5pbWF0aW9uIHVwb24gY2xvc2luZyB0aGUgZGlhbG9nIGFuZCB0byBoYW5kbGUgaGlkZSBldmVudC5cbiAgICovXG4gIF9jYW5jZWw6IGZ1bmN0aW9uKGV2LCBza2lwQ2FuY2VsQ2FsbGJhY2spIHtcbiAgICBpZiAoZXYpIHRoaXMua2lsbEV2ZW50KGV2KTtcblxuICAgIGlmICh0aGlzLl9pc1N0aWNreSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5pbmcnKS5hZGRDbGFzcygnaXMtY2xvc2luZycpO1xuXG4gICAgLy8gVXNlIHRpbWVvdXQgaW5zdGVhZCBvZiBldmVudCBsaXN0ZW5lciBvbiBhbmltYXRpb24gc2luY2UgdGhlIGV2ZW50IHRyaWdnZXJlZCBkaWZmZXJzIGRlcGVuZGluZyBvbiBicm93c2VyXG4gICAgLy8gVGltaW5nIHdvbid0IHBlcmhhcHMgYmUgMTAwJSBhY2N1cmF0ZSBidXQgaXQncyBnb29kIGVub3VnaFxuICAgIC8vIFRoZSB0aW1lb3V0IHNob3VsZCBtYXRjaCB0aGUgLkRpYWxvZy5pcy1jbG9zaW5nIGFuaW1hdGlvbiBkdXJhdGlvbi5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIC8vIGZyb20gb3JpZ2luYWwgX2NhbmNlbFxuICAgICAgaWYgKHNlbGYuY2FuY2VsICYmICFza2lwQ2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgc2VsZi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICAgIEJhc2VEaWFsb2cucHJvdG90eXBlLmhpZGUuY2FsbChzZWxmKTtcbiAgICB9LCA4MCk7IC8vbXNcblxuICAgIC8vIFRyaWdnZXIgZXZlbnRzIGltbWVkaWF0ZWx5LCBkb24ndCB3YWl0IGZvciB0aGUgdGltZW91dCBhYm92ZVxuICAgIHRoaXMudHJpZ2dlcignaGlkZScpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudHJpZ2dlckRpYWxvZ0V2ZW50cykge1xuICAgICAgY2RiLmdvZC50cmlnZ2VyKCdkaWFsb2dDbG9zZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuX29rIHRvIG5vdCBoaWRlIGRpYWxvZyBieSBkZWZhdWx0IGlmIHRoZXJlJ3MgYW4gb2sgbWV0aG9kIGRlZmluZWQuXG4gICAqL1xuICBfb2s6IGZ1bmN0aW9uKGV2KSB7XG4gICAgdGhpcy5raWxsRXZlbnQoZXYpO1xuICAgIGlmICh0aGlzLm9rKSB7XG4gICAgICB0aGlzLm9rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgX3NldEJvZHlGb3JEaWFsb2dNb2RlOiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAkKCdib2R5JylbYWN0aW9uICsgJ0NsYXNzJ10oJ2lzLWluRGlhbG9nJyk7XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWZhdWx0IGZhbGxiYWNrIG1hcCwgdG8gYmUgdXNlZCB3aGVuIGFuIHVzZXIgZG9uJ3QgaGF2ZSBhbnkgb3duIG1hcCB2aXN1YWxpemF0aW9ucy5cbiAqXG4gKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSBjb25maWdcbiAqICAgZWw6IHtTdHJpbmcsSFRNTEVsZW1lbnR9IGlkIHRvIGVsZW1lbnQgd2hlcmUgdG8gcmVuZGVyIG1hcCAody9vICcjJyBwcmVmaXgpIG9yIGEgSFRNTEVsZW1lbnQgbm9kZVxuICogICBiYXNlbGF5ZXI6IHtPYmplY3R9IGFzIGFuIGl0ZW0gZGVmaW5lZCBpbiBhcHBfY29uZmlnLnltbCAoYmFzZW1hcHMga2V5KVxuICogQHJldHVybnMge09iamVjdH0gYSBuZXcgY3JlYXRlZCBMZWFmbGV0IG1hcFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgdmFyIHByb3ZpZGVyID0gJ2xlYWZsZXQnO1xuICB2YXIgdHlwZSA9ICd0aWxlZCc7XG4gIGlmICghb3B0cy5iYXNlbGF5ZXIudXJsVGVtcGxhdGUpIHtcbiAgICBwcm92aWRlciA9ICdnb29nbGVtYXBzJztcbiAgICB0eXBlID0gJ0dNYXBzQmFzZSc7XG4gIH1cbiAgdmFyIG1hcCA9IGNkYi5jcmVhdGVWaXMob3B0cy5lbCwge1xuICAgICd2ZXJzaW9uJzogJzAuMS4wJyxcbiAgICAndGl0bGUnOiAnZGVmYXVsdCcsXG4gICAgJ3Njcm9sbHdoZWVsJzogb3B0cy5zY3JvbGx3aGVlbCAhPT0gdW5kZWZpbmVkID8gb3B0cy5zY3JvbGx3aGVlbCA6IGZhbHNlLFxuICAgICd6b29tJzogNixcbiAgICBtYXBfcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgIGNlbnRlcjogWzQwLjcxMjc4MzcsIC03NC4wMDU5NDEzXSwgLy8gTllcbiAgICBsYXllcnM6IFsgXy5leHRlbmQoeyB0eXBlOiB0eXBlIH0sIG9wdHMuYmFzZWxheWVyKSBdXG4gIH0pO1xuXG4gIHJldHVybiBtYXA7XG59O1xuIiwidmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG52YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xuXG4vKipcbiAqICBNYXBDYXJkIHByZXZpZXdzXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIG9wdGlvbnM6IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIGhlaWdodDogMTcwLFxuICAgIHByaXZhY3k6ICdQVUJMSUMnLFxuICAgIHVzZXJuYW1lOiAnJyxcbiAgICB2aXNJZDogJycsXG4gICAgbWFwc0FwaVJlc291cmNlOiAnJyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGF1dGhUb2tlbnM6IFtdXG4gIH0sXG5cbiAgX1RFTVBMQVRFUzoge1xuICAgIC8vIFVzaW5nIDwlPSAlPiBpbnN0ZWFkIG9mIDwlLSAlPiBiZWNhdXNlIGlmIG5vdCAvIGNoYXJhY3RlcnMgKGZvciBleGFtcGxlKSB3aWxsIGJlIGVzY2FwZWRcbiAgICByZWd1bGFyOiAnPCUtIHByb3RvY29sICU+Oi8vPCU9IG1hcHNBcGlSZXNvdXJjZSAlPi9hcGkvdjEvbWFwL3N0YXRpYy9uYW1lZC88JS0gdHBsICU+LzwlLSB3aWR0aCAlPi88JS0gaGVpZ2h0ICU+LnBuZzwlPSBhdXRoVG9rZW5zICU+JyxcbiAgICBjZG46ICc8JS0gcHJvdG9jb2wgJT46Ly88JS0gY2RuICU+LzwlLSB1c2VybmFtZSAlPi9hcGkvdjEvbWFwL3N0YXRpYy9uYW1lZC88JS0gdHBsICU+LzwlLSB3aWR0aCAlPi88JS0gaGVpZ2h0ICU+LnBuZzwlPSBhdXRoVG9rZW5zICU+J1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIF8uZWFjaChbJ3Zpc0lkJywgJ21hcHNBcGlSZXNvdXJjZScsICd1c2VybmFtZSddLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uc1tuYW1lXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lICsgJyBpcyByZXF1aXJlZCBmb3IgU3RhdGljIE1hcCBpbnN0YW50aWF0aW9uJyk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc3RhcnRMb2FkZXIoKTtcbiAgICB0aGlzLl9sb2FkRnJvbVZpc0lkKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfZ2VuZXJhdGVJbWFnZVRlbXBsYXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ3RwbF8nICsgdGhpcy5vcHRpb25zLnZpc0lkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgfSxcblxuICBfbG9hZEZyb21WaXNJZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb3RvY29sID0gdGhpcy5faXNIVFRQUygpID8gJ2h0dHBzJzogJ2h0dHAnO1xuICAgIHZhciBjZG5Db25maWcgPSBjZGIuY29uZmlnLmdldCgnY2RuX3VybCcpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUoY2RuQ29uZmlnID8gdGhpcy5fVEVNUExBVEVTWydjZG4nXSA6IHRoaXMuX1RFTVBMQVRFU1sncmVndWxhciddKTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgICAgdXNlcm5hbWU6IHRoaXMub3B0aW9ucy51c2VybmFtZSxcbiAgICAgIG1hcHNBcGlSZXNvdXJjZTogdGhpcy5vcHRpb25zLm1hcHNBcGlSZXNvdXJjZSxcbiAgICAgIHRwbDogdGhpcy5fZ2VuZXJhdGVJbWFnZVRlbXBsYXRlKCksXG4gICAgICB3aWR0aDogdGhpcy5vcHRpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLm9wdGlvbnMuaGVpZ2h0LFxuICAgICAgYXV0aFRva2VuczogdGhpcy5fZ2VuZXJhdGVBdXRoVG9rZW5zUGFyYW1zKClcbiAgICB9O1xuXG4gICAgaWYgKGNkbkNvbmZpZykge1xuICAgICAgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnMsIHsgY2RuOiBjZG5Db25maWdbcHJvdG9jb2xdIH0pO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSB0ZW1wbGF0ZShvcHRpb25zKTtcblxuICAgIHRoaXMuX2xvYWRJbWFnZSh7fSwgdXJsKTtcbiAgfSxcblxuICBfZ2VuZXJhdGVBdXRoVG9rZW5zUGFyYW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGF1dGhUb2tlbnMgPSB0aGlzLm9wdGlvbnMuYXV0aFRva2VucztcbiAgICBpZiAoYXV0aFRva2VucyAmJiBhdXRoVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAnPycgKyBfLm1hcChhdXRoVG9rZW5zLCBmdW5jdGlvbiAodCkgeyByZXR1cm4gJ2F1dGhfdG9rZW49JyArIHQ7IH0pLmpvaW4oJyYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSxcblxuICBfaXNIVFRQUzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwc1wiKSA9PT0gMDtcbiAgfSxcblxuICBsb2FkVVJMOiBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIgJGltZyA9ICQoJzxpbWcgY2xhc3M9XCJNYXBDYXJkLXByZXZpZXdcIiBzcmM9XCInICsgdXJsICsgJ1wiIC8+Jyk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRpbWcpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICRpbWcuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgJGltZy5mYWRlSW4oMjUwKTtcbiAgfSxcblxuICBzaG93RXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX29uRXJyb3IoKTtcbiAgfSxcblxuICBfc3RhcnRMb2FkZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGVsLmFkZENsYXNzKFwiaXMtbG9hZGluZ1wiKTtcbiAgfSxcblxuICBfc3RvcExvYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJpcy1sb2FkaW5nXCIpO1xuICB9LFxuXG4gIF9vblN1Y2Nlc3M6IGZ1bmN0aW9uKHVybCkge1xuICAgIHRoaXMuX3N0b3BMb2FkZXIoKTtcbiAgICB0aGlzLmxvYWRVUkwodXJsKTtcbiAgICB0aGlzLnRyaWdnZXIoXCJsb2FkZWRcIiwgdXJsKTtcbiAgfSxcblxuICBfb25FcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICB0aGlzLl9zdG9wTG9hZGVyKCk7XG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJoYXMtZXJyb3JcIik7XG4gICAgdmFyICRlcnJvciA9ICQoJzxkaXYgY2xhc3M9XCJNYXBDYXJkLWVycm9yXCIgLz4nKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGVycm9yKTtcbiAgICAkZXJyb3IuZmFkZUluKDI1MCk7XG4gICAgdGhpcy50cmlnZ2VyKFwiZXJyb3JcIik7XG4gIH0sXG5cbiAgX2xvYWRJbWFnZTogZnVuY3Rpb24oZXJyb3IsIHVybCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaW1nICA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX29uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9vblN1Y2Nlc3ModXJsKTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRoaXMuX29uRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgXy5iaW5kQWxsKHRoaXMsICdfb25XaW5kb3dTY3JvbGwnKTtcbiAgICB0aGlzLl9iaW5kU2Nyb2xsKCk7XG4gIH0sXG5cbiAgX29uV2luZG93U2Nyb2xsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC50b2dnbGVDbGFzcygnaXMtZml4ZWQnLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiB0aGlzLm9wdGlvbnMuYW5jaG9yUG9pbnQpO1xuICB9LFxuXG4gIF91bmJpbmRTY3JvbGw6IGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS51bmJpbmQoJ3Njcm9sbCcsIHRoaXMuX29uV2luZG93U2Nyb2xsKTtcbiAgfSxcblxuICBfYmluZFNjcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsKCk7XG4gICAgJCh3aW5kb3cpLmJpbmQoJ3Njcm9sbCcsIHRoaXMuX29uV2luZG93U2Nyb2xsKTtcbiAgfSxcblxuICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdW5iaW5kU2Nyb2xsKCk7XG4gICAgdGhpcy5lbGRlcignY2xlYW4nKTtcbiAgfVxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbmNkYi5hZG1pbiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXVsnYWRtaW4nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddWydhZG1pbiddIDogbnVsbCk7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcblxuLyoqXG4gKiBUaGUgY29udGVudCBvZiB0aGUgZHJvcGRvd24gbWVudSBvcGVuZWQgYnkgdGhlIGluZHVzdHJpZXMgbGluayBpbiB0aGUgaGVhZGVyLCBlLmcuOlxuICogICBDYXJ0b0RCLCBJbmR1c3RyaWVzLCBFeHBsb3JlLCBQcmljaW5nXG4gKiAgICAgICAgICAgICBfX19fX18vXFxfX19fXG4gKiAgICAgICAgICAgIHwgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgIHwgICAgdGhpcyAgICB8XG4gKiAgICAgICAgICAgIHxfX19fX19fX19fX198XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmFkbWluLkRyb3Bkb3duTWVudS5leHRlbmQoe1xuICBjbGFzc05hbWU6ICdDREItVGV4dCBEcm9wZG93biBEcm9wZG93bi0tcHVibGljJyxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVsZGVyKCdpbml0aWFsaXplJyk7XG4gICAgdGhpcy50ZW1wbGF0ZV9iYXNlID0gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgncHVibGljX2NvbW1vbi91c2VyX2luZHVzdHJpZXMvZHJvcGRvd25fdGVtcGxhdGUnKTtcblxuICAgIC8vIE5lY2Vzc2FyeSB0byBoaWRlIGRpYWxvZyBvbiBjbGljayBvdXRzaWRlIHBvcHVwLCBmb3IgZXhhbXBsZS5cbiAgICBjZGIuZ29kLmJpbmQoJ2Nsb3NlRGlhbG9ncycsIHRoaXMuaGlkZSwgdGhpcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGVfYmFzZSgpKTtcblxuICAgIC8vIFRPRE86IHRha2VuIGZyb20gZXhpc3RpbmcgY29kZSwgaG93IHNob3VsZCBkcm9wZG93bnMgcmVhbGx5IGJlIGFkZGVkIHRvIHRoZSBET00/XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVbnRpbCBodHRwczovL2dpdGh1Yi5jb20vQ2FydG9EQi9jYXJ0b2RiLmpzL2lzc3Vlcy8yMzggaXMgcmVzb2x2ZWQ6XG4gICAgJCh0aGlzLm9wdGlvbnMudGFyZ2V0KS51bmJpbmQoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuY29uc3RydWN0b3IuX19zdXBlcl9fLmNsZWFuLmFwcGx5KHRoaXMpO1xuICB9XG5cbn0pO1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgU2V0dGluZ3NEcm9wZG93biA9IHJlcXVpcmUoJy4vdXNlcl9zZXR0aW5ncy9kcm9wZG93bl92aWV3Jyk7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcblxuLyoqXG4gKiBWaWV3IHRvIHJlbmRlciB0aGUgdXNlciBzZXR0aW5ncyBzZWN0aW9uIGluIHRoZSBoZWFkZXIuXG4gKiBFeHBlY3RlZCB0byBiZSBjcmVhdGVkIGZyb20gZXhpc3RpbmcgRE9NIGVsZW1lbnQuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGV2ZW50czoge1xuICAgICdjbGljayAuanMtZHJvcGRvd24tdGFyZ2V0JzogJ19jcmVhdGVEcm9wZG93bidcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoYm9hcmRVcmwgPSB0aGlzLm1vZGVsLnZpZXdVcmwoKS5kYXNoYm9hcmQoKTtcbiAgICB2YXIgZGF0YXNldHNVcmwgPSBkYXNoYm9hcmRVcmwuZGF0YXNldHMoKTtcbiAgICB2YXIgbWFwc1VybCA9IGRhc2hib2FyZFVybC5tYXBzKCk7XG5cbiAgICB0aGlzLiRlbC5odG1sKFxuICAgICAgY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgncHVibGljX2NvbW1vbi91c2VyX3NldHRpbmdzX3RlbXBsYXRlJykoe1xuICAgICAgICBhdmF0YXJVcmw6IHRoaXMubW9kZWwuZ2V0KCdhdmF0YXJfdXJsJyksXG4gICAgICAgIG1hcHNVcmw6IG1hcHNVcmwsXG4gICAgICAgIGRhdGFzZXRzVXJsOiBkYXRhc2V0c1VybFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX2NyZWF0ZURyb3Bkb3duOiBmdW5jdGlvbihldikge1xuICAgIHRoaXMua2lsbEV2ZW50KGV2KTtcbiAgICBjZGIuZ29kLnRyaWdnZXIoJ2Nsb3NlRGlhbG9ncycpO1xuXG4gICAgdmFyIHZpZXcgPSBuZXcgU2V0dGluZ3NEcm9wZG93bih7XG4gICAgICB0YXJnZXQ6ICQoZXYudGFyZ2V0KSxcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLCAvLyB1c2VyXG4gICAgICBob3Jpem9udGFsX29mZnNldDogMThcbiAgICB9KTtcbiAgICB2aWV3LnJlbmRlcigpO1xuXG4gICAgdmlldy5vbignb25Ecm9wZG93bkhpZGRlbicsIGZ1bmN0aW9uKCkge1xuICAgICAgdmlldy5jbGVhbigpO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgdmlldy5vcGVuKCk7XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbmNkYi5hZG1pbiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXVsnYWRtaW4nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddWydhZG1pbiddIDogbnVsbCk7XG52YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcblxuLyoqXG4gKiBUaGUgY29udGVudCBvZiB0aGUgZHJvcGRvd24gbWVudSBvcGVuZWQgYnkgdGhlIHVzZXIgYXZhdGFyIGluIHRoZSB0b3AtcmlnaHQgb2YgdGhlIGhlYWRlciwgZS5nLjpcbiAqICAgRXhwbG9yZSwgTGVhcm4sIOKZnlxuICogICAgICAgICAgICAgX19fX19fL1xcX19fX1xuICogICAgICAgICAgICB8ICAgICAgICAgICAgfFxuICogICAgICAgICAgICB8ICAgIHRoaXMgICAgfFxuICogICAgICAgICAgICB8X19fX19fX19fX19ffFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5hZG1pbi5Ecm9wZG93bk1lbnUuZXh0ZW5kKHtcbiAgY2xhc3NOYW1lOiAnQ0RCLVRleHQgRHJvcGRvd24nLFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZGVyKCdpbml0aWFsaXplJyk7XG4gICAgdGhpcy50ZW1wbGF0ZV9iYXNlID0gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgncHVibGljX2NvbW1vbi91c2VyX3NldHRpbmdzL2Ryb3Bkb3duX3RlbXBsYXRlJyk7XG5cbiAgICAvLyBOZWNlc3NhcnkgdG8gaGlkZSBkaWFsb2cgb24gY2xpY2sgb3V0c2lkZSBwb3B1cCwgZm9yIGV4YW1wbGUuXG4gICAgY2RiLmdvZC5iaW5kKCdjbG9zZURpYWxvZ3MnLCB0aGlzLmhpZGUsIHRoaXMpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VyID0gdGhpcy5tb2RlbDtcbiAgICB2YXIgdXNlclVybCA9IHVzZXIudmlld1VybCgpO1xuXG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlX2Jhc2Uoe1xuICAgICAgbmFtZTogdXNlci5mdWxsTmFtZSgpIHx8IHVzZXIuZ2V0KCd1c2VybmFtZScpLFxuICAgICAgZW1haWw6IHVzZXIuZ2V0KCdlbWFpbCcpLFxuICAgICAgaXNPcmdPd25lcjogdXNlci5pc09yZ093bmVyKCksXG4gICAgICBkYXNoYm9hcmRVcmw6IHVzZXJVcmwuZGFzaGJvYXJkKCksXG4gICAgICBwdWJsaWNQcm9maWxlVXJsOiB1c2VyVXJsLnB1YmxpY1Byb2ZpbGUoKSxcbiAgICAgIGFjY291bnRQcm9maWxlVXJsOiB1c2VyVXJsLmFjY291bnRQcm9maWxlKCksXG4gICAgICBsb2dvdXRVcmw6IHVzZXJVcmwubG9nb3V0KClcbiAgICB9KSk7XG5cbiAgICAvLyBUT0RPOiB0YWtlbiBmcm9tIGV4aXN0aW5nIGNvZGUsIGhvdyBzaG91bGQgZHJvcGRvd25zIHJlYWxseSBiZSBhZGRlZCB0byB0aGUgRE9NP1xuICAgICQoJ2JvZHknKS5hcHBlbmQodGhpcy5lbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBjbGVhbjogZnVuY3Rpb24gKCkge1xuICAgIC8vIFVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9DYXJ0b0RCL2NhcnRvZGIuanMvaXNzdWVzLzIzOCBpcyByZXNvbHZlZDpcbiAgICAkKHRoaXMub3B0aW9ucy50YXJnZXQpLnVuYmluZCgnY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljayk7XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5fX3N1cGVyX18uY2xlYW4uYXBwbHkodGhpcyk7XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBfID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ18nXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ18nXSA6IG51bGwpO1xudmFyIGNyZWF0ZURlZmF1bHRGYWxsYmFja01hcCA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3cy9jcmVhdGVfZGVmYXVsdF9mYWxsYmFja19tYXAnKTtcblxuLyoqXG4gKiBWaWV3IHRvIHJlbmRlciB0aGUgXCJmYXZvdXJpdGVcIiBtYXAsIGVpdGhlciBhIHVzZXIncyBtYXAgdmlzdWFsaXphdGlvbiwgb3IgYSBkZWZhdWx0IGZhbGxiYWNrIG1hcC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnaXMtcHJlLWxvYWRpbmcnKS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xuXG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jcmVhdGVWaXMpIHtcbiAgICAgIHByb21pc2UgPSB0aGlzLl9jcmVhdGVWaXNNYXAodGhpcy5vcHRpb25zLmNyZWF0ZVZpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UgPSB0aGlzLl9jcmVhdGVGYWxsYmFja01hcCgpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBwcm9taXNlLmRvbmUoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLiRlbC5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgc2VsZi4kKCcuanMtc3Bpbm5lcicpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX2NyZWF0ZVZpc01hcDogZnVuY3Rpb24oY3JlYXRlVmlzKSB7XG4gICAgcmV0dXJuIGNkYi5jcmVhdGVWaXModGhpcy5lbCwgY3JlYXRlVmlzLnVybCwgXy5kZWZhdWx0cyhjcmVhdGVWaXMub3B0cywge1xuICAgICAgdGl0bGU6ICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgaGVhZGVyOiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb246ICAgICAgIGZhbHNlLFxuICAgICAgc2VhcmNoOiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgbGF5ZXJfc2VsZWN0b3I6ICAgIGZhbHNlLFxuICAgICAgdGV4dDogICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgaW1hZ2U6ICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgc2hhcmVhYmxlOiAgICAgICAgIGZhbHNlLFxuICAgICAgYW5ub3RhdGlvbjogICAgICAgIGZhbHNlLFxuICAgICAgem9vbTogICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgY2FydG9kYl9sb2dvOiAgICAgIGZhbHNlLFxuICAgICAgc2Nyb2xsd2hlZWw6ICAgICAgIGZhbHNlLFxuICAgICAgbW9iaWxlX2xheW91dDogICAgIHRydWUsXG4gICAgICBzbGlkZXNfY29udHJvbGxlcjogZmFsc2UsXG4gICAgICBsZWdlbmRzOiAgICAgICAgICAgZmFsc2UsXG4gICAgICB0aW1lX3NsaWRlcjogICAgICAgZmFsc2UsXG4gICAgICBsb2FkZXI6ICAgICAgICAgICAgZmFsc2UsXG4gICAgICBmdWxsc2NyZWVuOiAgICAgICAgZmFsc2UsXG4gICAgICBub19jZG46ICAgICAgICAgICAgZmFsc2VcbiAgICB9KSk7XG4gIH0sXG5cbiAgX2NyZWF0ZUZhbGxiYWNrTWFwOiBmdW5jdGlvbigpIHtcbiAgICBjcmVhdGVEZWZhdWx0RmFsbGJhY2tNYXAoe1xuICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICBiYXNlbGF5ZXI6IHRoaXMub3B0aW9ucy5mYWxsYmFja0Jhc2VsYXllclxuICAgIH0pO1xuXG4gICAgLy8gRmFrZSBwcm9taXNlLCB0byBrZWVwIHRoZSByZW5kZXIgbWV0aG9kIGNvbnNpc3RlbnQgd2l0aCBob3cgdGhlIHZpcyBtYXAgd291bGQgaGF2ZSBiZWVuIGhhbmRsZWQgKGFzeW5jKVxuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmdW5jdGlvbihmbikge1xuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufSk7XG4iLCJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcbnZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyIFVzZXJTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9wdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3NfdmlldycpO1xudmFyIFVzZXJJbmR1c3RyaWVzVmlldyA9IHJlcXVpcmUoJy4uL3B1YmxpY19jb21tb24vdXNlcl9pbmR1c3RyaWVzX3ZpZXcnKTtcbnZhciBGYXZNYXBWaWV3ID0gcmVxdWlyZSgnLi4vcHVibGljX2Rhc2hib2FyZC9mYXZfbWFwX3ZpZXcnKTtcbnZhciBGZWVkID0gcmVxdWlyZSgnLi92aWV3Jyk7XG52YXIgU2Nyb2xsYWJsZUhlYWRlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3cy9zY3JvbGxhYmxlX2hlYWRlcicpO1xuXG4vKipcbiAqIEVudHJ5IHBvaW50IGZvciB0aGUgdXNlciBmZWVkLCBib290c3RyYXBzIGFsbCBkZXBlbmRlbmN5IG1vZGVscyBhbmQgYXBwbGljYXRpb24uXG4gKi9cbiQoZnVuY3Rpb24oKSB7XG5cbiAgY2RiLmluaXQoZnVuY3Rpb24oKSB7XG5cbiAgICBjZGIudGVtcGxhdGVzLm5hbWVzcGFjZSA9ICdjYXJ0b2RiLyc7XG4gICAgY2RiLmNvbmZpZy5zZXQod2luZG93LmNvbmZpZyk7XG4gICAgY2RiLmNvbmZpZy5zZXQoJ3VybF9wcmVmaXgnLCB3aW5kb3cuYmFzZV91cmwpO1xuXG4gICAgdmFyIHVzZXJJbmR1c3RyaWVzVmlldyA9IG5ldyBVc2VySW5kdXN0cmllc1ZpZXcoe1xuICAgICAgZWw6ICQoJy5qcy11c2VyLWluZHVzdHJpZXMnKVxuICAgIH0pO1xuXG4gICAgdmFyIHNjcm9sbGFibGVIZWFkZXIgPSBuZXcgU2Nyb2xsYWJsZUhlYWRlcih7XG4gICAgICBlbDogJCgnLmpzLU5hdm1lbnUnKSxcbiAgICAgIGFuY2hvclBvaW50OiA1MjBcbiAgICB9KTtcblxuICAgIHZhciBhdXRoZW50aWNhdGVkVXNlciA9IG5ldyBjZGIub3Blbi5BdXRoZW50aWNhdGVkVXNlcigpO1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgY2RiLmdvZC50cmlnZ2VyKCdjbG9zZURpYWxvZ3MnKTtcbiAgICB9KTtcblxuICAgIGF1dGhlbnRpY2F0ZWRVc2VyLmJpbmQoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGF1dGhlbnRpY2F0ZWRVc2VyLmdldCgndXNlcm5hbWUnKSkge1xuICAgICAgICB2YXIgdXNlciA9IG5ldyBjZGIuYWRtaW4uVXNlcihhdXRoZW50aWNhdGVkVXNlci5hdHRyaWJ1dGVzKTtcbiAgICAgICAgdmFyIHVzZXJTZXR0aW5nc1ZpZXcgPSBuZXcgVXNlclNldHRpbmdzVmlldyh7XG4gICAgICAgICAgZWw6ICQoJy5qcy11c2VyLXNldHRpbmdzJyksXG4gICAgICAgICAgbW9kZWw6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHVzZXJTZXR0aW5nc1ZpZXcucmVuZGVyKCk7XG5cbiAgICAgICAgdmFyIHVzZXJEYXNoYm9hcmRVcmwgPSB1c2VyLnZpZXdVcmwoKS5kYXNoYm9hcmQoKTtcbiAgICAgICAgJCgnLmpzLXVzZXItaW5mbyAuVXNlckF2YXRhci1pbWcnKS53cmFwKCQoJzxhPicsIHtcbiAgICAgICAgICBocmVmOiB1c2VyRGFzaGJvYXJkVXJsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAkKCcuanMtbG9naW4nKS5oaWRlKCk7XG4gICAgICAgICQoJy5qcy1sZWFybicpLnNob3coKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBmYXZNYXBWaWV3ID0gbmV3IEZhdk1hcFZpZXcod2luZG93LmZhdk1hcFZpZXdBdHRycyk7XG4gICAgZmF2TWFwVmlldy5yZW5kZXIoKTtcblxuICAgIHZhciBmZWVkID0gbmV3IEZlZWQoe1xuICAgICAgZWw6ICQoJy5qcy1mZWVkJyksXG4gICAgICBhdXRoZW50aWNhdGVkVXNlcjogYXV0aGVudGljYXRlZFVzZXJcbiAgICB9KTtcblxuICAgIGZlZWQucmVuZGVyKCk7XG4gICAgYXV0aGVudGljYXRlZFVzZXIuZmV0Y2goKTtcbiAgfSk7XG59KTtcbiIsInZhciBCYWNrYm9uZSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydCYWNrYm9uZSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnQmFja2JvbmUnXSA6IG51bGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcbiAgdXJsOiAnL2FwaS92MS92aXonLFxuICBwYXJzZTogZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgdGhpcy50b3RhbF9lbnRyaWVzID0gbW9kZWxzLnRvdGFsX2VudHJpZXM7XG4gICAgcmV0dXJuIG1vZGVscy52aXN1YWxpemF0aW9ucztcbiAgfVxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBWaWV3RmFjdG9yeSA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3X2ZhY3RvcnknKTtcbnZhciByYW5kb21RdW90ZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3X2hlbHBlcnMvcmFuZG9tX3F1b3RlJyk7XG52YXIgTWFwQ2FyZFByZXZpZXcgPSByZXF1aXJlKCcuLi9jb21tb24vdmlld3MvbWFwY2FyZF9wcmV2aWV3Jyk7XG52YXIgVmlzdWFsaXphdGlvbnMgPSByZXF1aXJlKCcuL2ZlZWRfY29sbGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNkYi5jb3JlLlZpZXcuZXh0ZW5kKHtcbiAgdGFnTmFtZTogJ2RpdicsXG5cbiAgX1BBR0U6IDEsXG4gIF9JVEVNU19QRVJfUEFHRTogOCxcblxuICBfU01BTExfV0lEVEg6IDU0NCxcblxuICBfQ0FSRF9IRUlHSFQ6IDE3MCxcbiAgX0xPQURFUl9USVRMRTogJ0xvYWRpbmcgdmlzdWFsaXphdGlvbnMnLFxuXG4gIGV2ZW50czoge1xuICAgICdjbGljayAuanMtbW9yZSc6ICdfb25DbGlja01vcmUnXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgXy5iaW5kQWxsKHRoaXMsICdfb25GZXRjaEVycm9yJywgJ19vbldpbmRvd1Jlc2l6ZScsICdfcmVuZGVyU3RhdGljTWFwcycpO1xuXG4gICAgdGhpcy5tYXBzID0gW107XG5cbiAgICB0aGlzLl9pbml0VGVtcGxhdGVzKCk7XG4gICAgdGhpcy5faW5pdE1vZGVscygpO1xuICAgIHRoaXMuX2luaXRCaW5kaW5ncygpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKCkpO1xuICAgIHRoaXMuX3JlbmRlckxvYWRlcigpO1xuICAgIHRoaXMuX2ZldGNoSXRlbXMoeyBwYWdlOiB0aGlzLl9QQUdFIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX29uV2luZG93UmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3aWR0aCA8PSB0aGlzLl9TTUFMTF9XSURUSCkge1xuICAgICAgdGhpcy5tb2RlbC5zZXQoJ3NpemUnLCAnc21hbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbC5zZXQoJ3NpemUnLCAnYmlnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyU3RhdGljTWFwcygpO1xuICB9LFxuXG4gIF9pbml0VGVtcGxhdGVzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgndXNlcl9mZWVkL3RlbXBsYXRlJyk7XG4gICAgdGhpcy5tYXBUZW1wbGF0ZSA9IGNkYi50ZW1wbGF0ZXMuZ2V0VGVtcGxhdGUoJ3VzZXJfZmVlZC9tYXBfaXRlbV90ZW1wbGF0ZScpO1xuICAgIHRoaXMuZGF0YXNldFRlbXBsYXRlID0gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgndXNlcl9mZWVkL2RhdGFzZXRfaXRlbV90ZW1wbGF0ZScpO1xuICAgIHRoaXMubG9hZGVyVGVtcGxhdGVQYXRoID0gJ3VzZXJfZmVlZC9sb2FkaW5nJztcbiAgICB0aGlzLmVtcHR5VGVtcGxhdGVQYXRoID0gJ3VzZXJfZmVlZC9lbXB0eSc7XG4gICAgdGhpcy5lcnJvclRlbXBsYXRlUGF0aCA9ICd1c2VyX2ZlZWQvZXJyb3InO1xuICB9LFxuXG4gIF9pbml0TW9kZWxzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2l6ZSA9ICdiaWcnO1xuICAgIHZhciB3V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIGlmICh3V2lkdGggPD0gdGhpcy5fU01BTExfV0lEVEgpIHtcbiAgICAgIHNpemUgPSAnc21hbGwnO1xuICAgIH1cblxuICAgIHRoaXMubW9kZWwgPSBuZXcgY2RiLmNvcmUuTW9kZWwoe1xuICAgICAgdmlzX2NvdW50OiAwLFxuICAgICAgdHlwZTogJycsXG4gICAgICBzaXplOiBzaXplLFxuICAgICAgcGFnZTogMCxcbiAgICAgIG9yZGVyX2J5OiAndXBkYXRlZF9hdCdcbiAgICB9KTtcblxuICAgIHRoaXMuY29sbGVjdGlvbiA9IG5ldyBWaXN1YWxpemF0aW9ucygpO1xuICAgIHRoaXMuY29sbGVjdGlvbi5iaW5kKCdyZXNldCcsIHRoaXMuX3JlbmRlclZpc3VhbGl6YXRpb25zLCB0aGlzKTtcbiAgfSxcblxuICBfaW5pdEJpbmRpbmdzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm1vZGVsLmJpbmQoJ2NoYW5nZTpzaG93X21vcmUnLCB0aGlzLl9vbkNoYW5nZVNob3dNb3JlLCB0aGlzKTtcbiAgICB0aGlzLm1vZGVsLmJpbmQoJ2NoYW5nZTpzaG93X2xvYWRlcicsIHRoaXMuX29uQ2hhbmdlU2hvd0xvYWRlciwgdGhpcyk7XG4gICAgdGhpcy5tb2RlbC5iaW5kKCdjaGFuZ2U6c2hvd19tYXN0JywgdGhpcy5fb25DaGFuZ2VTaG93TWFzdCwgdGhpcyk7XG4gICAgdGhpcy5tb2RlbC5iaW5kKCdjaGFuZ2U6dmlzX2NvdW50JywgdGhpcy5fb25DaGFuZ2VWaXNDb3VudCwgdGhpcyk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgncmVzaXplJywgdGhpcy5fb25XaW5kb3dSZXNpemUpO1xuICB9LFxuXG4gIF9vbkNoYW5nZVZpc0NvdW50OiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ3Zpc19jb3VudCcpID49IHRoaXMuY29sbGVjdGlvbi50b3RhbF9lbnRyaWVzKSB7XG4gICAgICB0aGlzLm1vZGVsLnNldCh7IHNob3dfbW9yZTogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwuc2V0KHsgc2hvd19tb3JlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSxcblxuICBfb25DaGFuZ2VTaG93TWFzdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdzaG93X21hc3QnKSkge1xuICAgICAgdGhpcy4kKCcuanMtbWFzdCcpLnJlbW92ZUNsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kKCcuanMtbWFzdCcpLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQ2hhbmdlU2hvd0xvYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdzaG93X2xvYWRlcicpKSB7XG4gICAgICB0aGlzLmxvYWRlci5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQ2hhbmdlU2hvd01vcmU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJCgnLmpzLW1vcmUnKS50b2dnbGVDbGFzcygnaXMtaGlkZGVuJywgIXRoaXMubW9kZWwuZ2V0KCdzaG93X21vcmUnKSk7XG4gIH0sXG5cbiAgX3JlbmRlckxvYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5sb2FkZXIgPSBWaWV3RmFjdG9yeS5jcmVhdGVCeVRlbXBsYXRlKHRoaXMubG9hZGVyVGVtcGxhdGVQYXRoLCB7XG4gICAgICB0aXRsZTogdGhpcy5fTE9BREVSX1RJVExFLFxuICAgICAgcXVvdGU6IHJhbmRvbVF1b3RlKClcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLmxvYWRlci5yZW5kZXIoKS4kZWwpO1xuICB9LFxuXG4gIF9yZW5kZXJFcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lcnJvciA9IFZpZXdGYWN0b3J5LmNyZWF0ZUJ5VGVtcGxhdGUodGhpcy5lcnJvclRlbXBsYXRlUGF0aCwge1xuICAgIH0pO1xuXG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuZXJyb3IucmVuZGVyKCkuJGVsKTtcbiAgfSxcblxuICBfcmVuZGVyRW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW1wdHkgPSBWaWV3RmFjdG9yeS5jcmVhdGVCeVRlbXBsYXRlKHRoaXMuZW1wdHlUZW1wbGF0ZVBhdGgsIHtcbiAgICAgIG5hbWU6IGNvbmZpZy51c2VyX25hbWVcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLmVtcHR5LnJlbmRlcigpLiRlbCk7XG4gIH0sXG5cbiAgX2dldERhdGFzZXRTaXplOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdmFyIHNpemUgPSBpdGVtLmdldCgndGFibGUnKS5zaXplO1xuICAgIHJldHVybiBzaXplID8gY2RiLlV0aWxzLnJlYWRhYmxpemVCeXRlcyhzaXplLCB0cnVlKS5zcGxpdCgnICcpIDogMDtcbiAgfSxcblxuICBfZ2V0R2VvbWV0cnlUeXBlOiBmdW5jdGlvbihnZW9tVHlwZXMpIHtcbiAgICBpZiAoZ2VvbVR5cGVzICYmIGdlb21UeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdHlwZXMgPSBbJ3BvaW50JywgJ3BvbHlnb24nLCAnbGluZScsICdyYXN0ZXInXTtcbiAgICAgIHZhciBnZW9tVHlwZSA9IGdlb21UeXBlc1swXTtcblxuICAgICAgcmV0dXJuIF8uZmluZCh0eXBlcywgZnVuY3Rpb24odHlwZSkge1xuICAgICAgICByZXR1cm4gZ2VvbVR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHR5cGUpICE9PSAtMTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBfcmVuZGVyVmlzdWFsaXphdGlvbnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubW9kZWwuc2V0KHsgc2hvd19sb2FkZXI6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5fcmVuZGVyRW1wdHkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsLnNldCh7IHZpc19jb3VudDogdGhpcy5tb2RlbC5nZXQoJ3Zpc19jb3VudCcpICsgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aCwgc2hvd19sb2FkZXI6IGZhbHNlLCBzaG93X21vcmU6IHRydWUsIHNob3dfZmlsdGVyczogdHJ1ZSwgc2hvd19tYXN0OiB0cnVlIH0pO1xuXG4gICAgdGhpcy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIHRlbXBsYXRlID0gaXRlbS5nZXQoJ3R5cGUnKSA9PT0gJ2Rlcml2ZWQnID8gdGhpcy5tYXBUZW1wbGF0ZSA6IHRoaXMuZGF0YXNldFRlbXBsYXRlO1xuICAgICAgdmFyIGdlb21UeXBlID0gKGl0ZW0uZ2V0KCd0YWJsZScpICYmIGl0ZW0uZ2V0KCd0YWJsZScpLmdlb21ldHJ5X3R5cGVzKSA/IHRoaXMuX2dldEdlb21ldHJ5VHlwZShpdGVtLmdldCgndGFibGUnKS5nZW9tZXRyeV90eXBlcykgOiBudWxsO1xuXG4gICAgICB2YXIgb3duZXIgPSBpdGVtLmdldCgncGVybWlzc2lvbicpLm93bmVyO1xuXG4gICAgICB2YXIgZWwgPSB0ZW1wbGF0ZSh7XG4gICAgICAgIHZpczogaXRlbS5hdHRyaWJ1dGVzLFxuICAgICAgICBkYXRhc2V0U2l6ZTogdGhpcy5fZ2V0RGF0YXNldFNpemUoaXRlbSksXG4gICAgICAgIHVzZXJuYW1lOiBvd25lci51c2VybmFtZSxcbiAgICAgICAgYXZhdGFyX3VybDogb3duZXIuYXZhdGFyX3VybCxcbiAgICAgICAgdGFibGVfY291bnQ6IG93bmVyLnRhYmxlX2NvdW50LFxuICAgICAgICBtYXBzX2NvdW50OiBvd25lci5tYXBzX2NvdW50LFxuICAgICAgICBnZW9tVHlwZTogZ2VvbVR5cGUsXG4gICAgICAgIGFjY291bnRfaG9zdDogY29uZmlnLmFjY291bnRfaG9zdCxcbiAgICAgICAgYmFzZV91cmw6IGNkYi5jb25maWcuZ2V0KCd1cmxfcHJlZml4JylcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiQoJy5qcy1pdGVtcycpLmFwcGVuZChlbCk7XG5cbiAgICAgIHZhciAkaXRlbSA9IHRoaXMuJCgnLmpzLWl0ZW1zJykuZmluZCgnW2RhdGEtdmlzLWlkPVwiJyArIGl0ZW0uZ2V0KCdpZCcpICsgJ1wiXScpO1xuXG4gICAgICBpZiAoaXRlbS5nZXQoJ3R5cGUnKSA9PT0gJ2Rlcml2ZWQnKSB7XG4gICAgICAgIHRoaXMubWFwcy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5nZXQoJ3R5cGUnKSA9PT0gJ2Rlcml2ZWQnICYmICFpdGVtLmdldCgncmVuZGVyZWRfJyArIHRoaXMubW9kZWwuZ2V0KCdzaXplJykpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlclN0YXRpY01hcChpdGVtLCAkaXRlbSk7XG4gICAgICB9XG5cbiAgICB9LCB0aGlzKTtcblxuICB9LFxuXG4gIF9yZW5kZXJTdGF0aWNNYXBzOiBmdW5jdGlvbigpIHtcbiAgICBfLmVhY2godGhpcy5tYXBzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoIWl0ZW0uZ2V0KCdyZW5kZXJlZF8nICsgdGhpcy5tb2RlbC5nZXQoJ3NpemUnKSkpIHtcbiAgICAgICAgdmFyICRpdGVtID0gdGhpcy4kKCcuanMtaXRlbXMnKS5maW5kKCdbZGF0YS12aXMtaWQ9XCInICsgaXRlbS5nZXQoJ2lkJykgKyAnXCJdJyk7XG4gICAgICAgIHRoaXMuX3JlbmRlclN0YXRpY01hcChpdGVtLCAkaXRlbSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX3JlbmRlclN0YXRpY01hcDogZnVuY3Rpb24odmlzLCAkZWwpIHtcbiAgICB2YXIgdmlzSWQgPSB2aXMuZ2V0KCdpZCcpO1xuICAgIHZhciB1c2VybmFtZSA9IHZpcy5nZXQoJ3Blcm1pc3Npb24nKS5vd25lci51c2VybmFtZTtcbiAgICB2YXIgd2lkdGggPSA1NDA7XG4gICAgdmFyIGNsYXNzTmFtZSA9ICdpcy0nICsgdGhpcy5tb2RlbC5nZXQoJ3NpemUnKTtcblxuICAgIGlmICh0aGlzLm1vZGVsLmdldCgnc2l6ZScpID09PSAnc21hbGwnKSB7XG4gICAgICB3aWR0aCA9IDI4ODtcbiAgICB9XG5cbiAgICBpZiAodmlzSWQgJiYgdXNlcm5hbWUpIHtcbiAgICAgIHZpcy5zZXQoJ3JlbmRlcmVkXycgKyB0aGlzLm1vZGVsLmdldCgnc2l6ZScpLCB0cnVlKTtcblxuICAgICAgbmV3IE1hcENhcmRQcmV2aWV3KHtcbiAgICAgICAgZWw6ICRlbC5maW5kKCcuanMtaGVhZGVyJyksXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9DQVJEX0hFSUdIVCxcbiAgICAgICAgbWFwc0FwaVJlc291cmNlOiBjZGIuY29uZmlnLmdldE1hcHNSZXNvdXJjZU5hbWUodXNlcm5hbWUpLFxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHZpc0lkOiB2aXNJZCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgIH0pLmxvYWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZldGNoSXRlbXM6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBkYXRhID0gXy5leHRlbmQoe1xuICAgICAgdHlwZXM6ICd0YWJsZSxkZXJpdmVkJyxcbiAgICAgIHByaXZhY3k6ICdwdWJsaWMnLFxuICAgICAgb25seV9wdWJsaXNoZWQ6ICd0cnVlJyxcbiAgICAgIGV4Y2x1ZGVfc2hhcmVkOiAndHJ1ZScsXG4gICAgICBwZXJfcGFnZTogdGhpcy5fSVRFTVNfUEVSX1BBR0UsXG4gICAgICBvcmRlcjogJ3VwZGF0ZWRfYXQnXG4gICAgfSwgcGFyYW1zKTtcblxuICAgIHRoaXMuY29sbGVjdGlvbi5mZXRjaCh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZXJyb3I6IHRoaXMuX29uRmV0Y2hFcnJvclxuICAgIH0pO1xuICB9LFxuXG4gIF9vbkZldGNoRXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubW9kZWwuc2V0KHsgc2hvd19sb2FkZXI6IGZhbHNlIH0pO1xuICAgIHRoaXMuX3JlbmRlckVycm9yKCk7XG4gIH0sXG5cbiAgX29uQ2xpY2tNb3JlOiBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5raWxsRXZlbnQoZSk7XG4gICAgdGhpcy5tb2RlbC5zZXQoeyBzaG93X21vcmU6IGZhbHNlLCBzaG93X2xvYWRlcjogdHJ1ZSB9KTtcbiAgICB0aGlzLl9mZXRjaEl0ZW1zKHsgcGFnZTogKyt0aGlzLl9QQUdFIH0pO1xuICB9XG59KTtcbiJdfQ==
