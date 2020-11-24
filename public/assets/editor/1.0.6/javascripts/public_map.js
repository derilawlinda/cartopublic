(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var BaseDialog = require('../../views/base_dialog/view');
var randomQuote = require('../../view_helpers/random_quote');

/**
 * Lock/unlock datasets/maps dialog.
 */
module.exports = BaseDialog.extend({

  events: BaseDialog.extendEvents({
    'click .js-ok': '_confirm',
    'click .js-download': '_download',
    'click .js-cancel': '_abortExport'
  }),

  initialize: function (attrs) {
    this.elder('initialize');

    this._initBinds();
  },

  render_content: function () {
    var state = this.model.get('state');

    if (state === 'complete') {
      var w = window.open(this.model.get('url'));

      // If w is undefined, popup was blocked: we show a "click to download" modal. Else, download has started.
      if (w == null) return cdb.templates.getTemplate('common/dialogs/export_map/templates/download');

      w.focus();
      this.close();
    } else if (state === 'failure') {
      return cdb.templates.getTemplate('common/templates/fail')({
        msg: 'Export has failed'
      });
    } else if (state === 'pending' || state === 'exporting' || state === 'uploading') {
      var loadingTitle = state.charAt(0).toUpperCase() + state.slice(1) + ' ...';

      return this.getTemplate('common/templates/loading')({
        title: loadingTitle,
        quote: randomQuote()
      });
    } else {
      return cdb.templates.getTemplate('common/dialogs/export_map/templates/confirm');
    }
  },

  _confirm: function () {
    this.model.requestExport();
  },

  _download: function () {
    window.open(this.model.get('url'));
    window.focus();

    this.close();
  },

  _abortExport: function () {
    this.model.cancelExport();
    this.close();
  },

  _initBinds: function () {
    this.model.bind('change:state', function () { this.render(); }, this);
  }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../view_helpers/random_quote":2,"../../views/base_dialog/view":3}],2:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"./user_industries/dropdown_view":5}],7:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * View to interact with the share buttons in the content.
 *
 * - Twitter code from https://dev.twitter.com/web/intents
 *
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-Navmenu-editLink--more': '_onClickMoreLink'
  },

  initialize: function() {
    this.$metaList = this.$('.js-PublicMap-metaList--mobile');
    this.$moreLink = this.$('.js-Navmenu-editLink--more');

    this.model.on("change:active", this._toggleMeta, this);
  },

  _onClickMoreLink: function(e) {
    this.model.set('active', !this.model.get('active'));
  },

  _toggleMeta: function() {
    if (this.model.get('active')) {
      this.$moreLink.html('Less info');
      this.$metaList.slideDown(250);
    } else {
      this.$moreLink.html('More info');
      this.$metaList.slideUp(250);
    }
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./user_settings/dropdown_view":8}],10:[function(require,module,exports){
(function (global){
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

/**
 * View to interact with the share buttons in the content.
 *
 * - Twitter code from https://dev.twitter.com/web/intents
 *
 */
module.exports = cdb.core.View.extend({

  events: {
    'click .js-Navmenu-shareLink': '_onClickShareLink',
    'click .js-Navmenu-closeLink': '_onClickCloseLink',
    'click .js-Navmenu-link--facebook': '_onClickFacebookLink',
    'click .js-Navmenu-link--linkedin': '_onClickLinkedinLink'
  },

  initialize: function() {
    this.$shareList = $('.js-Navmenu-shareList');

    this.model.on("change:active", this._toggleShare, this);

    this._initBindings();
  },

  _initBindings: function() {
    if (window.__twitterIntentHandler) return;
   
    if (document.addEventListener) {
      document.addEventListener('click', this._handleIntent, false);
    } else if (document.attachEvent) {
      document.attachEvent('onclick', this._handleIntent);
    }
    window.__twitterIntentHandler = true;
  },

  _onClickLinkedinLink: function(e) {
    var href = $(e.target).closest('a').attr('href'),
        m, left, top;

    var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
        width = 550,
        height = 420,
        winHeight = screen.height,
        winWidth = screen.width;

    left = Math.round((winWidth / 2) - (width / 2));
    top = 0;

    if (winHeight > height) {
      top = Math.round((winHeight / 2) - (height / 2));
      console.log(top);
    }
    
    window.open(href, 'facebook', windowOptions + ',width=' + width +
                                       ',height=' + height + ',left=' + left + ',top=' + top);

    e.returnValue = false;
    e.preventDefault && e.preventDefault();
  },

  _onClickFacebookLink: function(e) {
    var href = $(e.target).closest('a').attr('href'),
        m, left, top;

    var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
        width = 550,
        height = 420,
        winHeight = screen.height,
        winWidth = screen.width;

    left = Math.round((winWidth / 2) - (width / 2));
    top = 0;

    if (winHeight > height) {
      top = Math.round((winHeight / 2) - (height / 2));
      console.log(top);
    }
    
    window.open(href, 'facebook', windowOptions + ',width=' + width +
                                       ',height=' + height + ',left=' + left + ',top=' + top);

    e.returnValue = false;
    e.preventDefault && e.preventDefault();
  },

  _handleIntent: function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;
 
    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }
 
    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
          windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
          width = 550,
          height = 420,
          winHeight = screen.height,
          winWidth = screen.width;

      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;
 
        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }
 
        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  },

  close: function() {
    this.model.set('active', false);
  },

  _onClickShareLink: function(e) {
    this.killEvent(e);

    this.model.set('active', !this.model.get('active'));
  },

  _onClickCloseLink: function(e) {
    this.close();
  },

  _toggleShare: function() {
    if (this.model.get('active')) {
      this.$shareList.addClass('is-active');
    } else {
      this.$shareList.removeClass('is-active');
    }
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var UserSettingsView = require('../public_common/user_settings_view');
var UserIndustriesView = require('../public_common/user_industries_view');
var PublicMapWindow = require('./public_map_window');
var MapCardPreview = require('../common/views/mapcard_preview');
var UserShareView = require('../public_common/user_share_view');
var UserMetaView = require('../public_common/user_meta_view');

$(function() {

  // No attributions and no links in this map (at least from cartodb)
  cartodb.config.set({
    cartodb_attributions: "",
    cartodb_logo_link: ""
  });

  $.extend( $.easing, {
    easeInQuad: function (x, t, b, c, d) {
      return c*(t/=d)*t + b;
    }
  });

  cdb.init(function() {
    cdb.templates.namespace = 'cartodb/';
    cdb.config.set(window.config);
    cdb.config.set('url_prefix', window.base_url);

    var userIndustriesView = new UserIndustriesView({
      el: $('.js-user-industries'),
    });

    var userShareView = new UserShareView({
      el: $('.js-Navmenu-share'),
      model: new cdb.core.Model({
        active: false
      })
    });

    var userMetaView = new UserMetaView({
      el: $('.js-user-meta'),
      model: new cdb.core.Model({
        active: false
      })
    });

    $(document.body).bind('click', function() {
      cdb.god.trigger('closeDialogs');
      userShareView.close();
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

        if (user.get('username') === window.owner_username) {
          // Show "Edit in CartoDB" button if logged user
          // is the map owner ;)
          $('.js-Navmenu-editLink').addClass('is-active');
        }
      }
    });

    // More user vis cards
    $('.MapCard').each(function() {
      var visId = $(this).data('visId');
      if (visId) {
        var username = $(this).data('visOwnerName');
        var mapCardPreview = new MapCardPreview({
          el: $(this).find('.js-header'),
          visId: $(this).data('visId'),
          username: username,
          mapsApiResource: cdb.config.getMapsResourceName(username)
        });
        mapCardPreview.load();
      }
    });

    // Check if device is a mobile
    var mobileDevice = /Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Window view
    var public_window = new PublicMapWindow({
      el:                   window,
      user_name:            user_name,
      owner_username:       owner_username,
      vis_id:               vis_id,
      vis_name:             vis_name,
      vizdata:              vizdata,
      config:               config,
      map_options:          map_options,
      isMobileDevice:       mobileDevice,
      belong_organization:  belong_organization
    });

    authenticatedUser.fetch();
  });
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/views/mapcard_preview":4,"../public_common/user_industries_view":6,"../public_common/user_meta_view":7,"../public_common/user_settings_view":9,"../public_common/user_share_view":10,"./public_map_window":13}],12:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);

/** 
 *  Public vis (map itself)
 *
 */

module.exports = cdb.core.View.extend({

  initialize: function() {
    this._createVis();
  },

  _manageError: function(err, layer) {
    if(layer && layer.get('type') === 'torque') {
      this.trigger('map_error', this);
      // hide all the overlays
      var overlays = vis.getOverlays()
      for (var i = 0; i < overlays.length; ++i) {
        var o = overlays[i];
        o.hide && o.hide();
      }
    }
  },

  _sendStats: function() {
    var browser;
    var ua = navigator.userAgent;
    var checks = [
      ['MSIE 11.0', 'ms11'],
      ['MSIE 10.0', 'ms10'],
      ['MSIE 9.0', 'ms9'],
      ['MSIE 8.0', 'ms8'],
      ['MSIE 7.0','ms7'],
      ['Chrome', 'chr'],
      ['Firefox', 'ff'],
      ['Safari', 'ff']
    ]
    for(var i = 0; i < checks.length && !browser; ++i) {
      if(ua.indexOf(checks[i][0]) !== -1) browser = checks[i][1];
    }
    browser = browser || 'none';
    cartodb.core.Profiler.metric('cartodb-js.embed.' + browser).inc();
  },

  _createVis: function() {
    var loadingTime  = cartodb.core.Profiler.metric('cartodb-js.embed.time_full_loaded').start();
    var visReadyTime = cartodb.core.Profiler.metric('cartodb-js.embed.time_vis_loaded').start();
    var self = this;

    cartodb.createVis('map', this.options.vizdata, this.options.map_options, function(vis) {
      self.vis = vis;

      visReadyTime.end();

      vis.on('load', function() { loadingTime.end() });

      // Check fullscreen button
      var fullscreen = vis.getOverlay("fullscreen");
      
      if (fullscreen) {
        fullscreen.options.doc = ".cartodb-public-wrapper";
        fullscreen.model.set("allowWheelOnFullscreen", self.options.map_options.scrollwheelEnabled);
      }

      //some stats
      self._sendStats();

      // Map loaded!
      self.trigger('map_loaded', vis, this);

      self.$('.js-spinner').remove();

    }).on('error', this._manageError);
  },

  // "Public" method

  invalidateMap: function() {
    this.vis && this.vis.mapView.invalidateSize()
  }

});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],13:[function(require,module,exports){
(function (global){
var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var cdb = (typeof window !== "undefined" ? window['cdb'] : typeof global !== "undefined" ? global['cdb'] : null);
var PublicMap = require('./public_map_view');
var ExportMapView = require('../common/dialogs/export_map/export_map_view');

/** 
 *  Public map window "view"
 *
 */

module.exports = cdb.core.View.extend({

  events: {
    'click .js-Navmenu-link--download-map': '_exportMap'
  },

  _exportMap: function (e) {
    e.preventDefault();

    var view = new ExportMapView({
      model: new cdb.admin.ExportMapModel({ 'visualization_id': vis_id }),
      clean_on_hide: true,
      enter_to_confirm: true
    });

    view.appendToBody();
  },

  initialize: function() {
    this.$body = $(this.el.document.body);
    this.$map = this.$body.find('#map');
    this._setupMapDimensions();
    this._initBinds();
    this._initViews();
  },

  _initViews: function() {
    // Map view
    this.mapView = new PublicMap(_.defaults({ el: this.$map }, this.options));
    this.mapView.bind('map_error', this._showNotSupportedDialog, this);
    
    this.addView(this.mapView);
  },

  _initBinds: function() {
    _.bindAll(this, '_onWindowResize', '_onOrientationChange');

    this.$el.on('resize', this._onWindowResize);

    if (!this.el.addEventListener) {
      this.el.attachEvent('orientationchange', this._onOrientationChange, this);
    } else {
      this.el.addEventListener('orientationchange', this._onOrientationChange);
    }
  },

  _showNotSupportedDialog: function() {
    this.$body.find('#not_supported_dialog').show();
  },

  _onWindowResize: function() {
    // Resize window
    this._setupMapDimensions();
    // Close dialogs
    cdb.god.trigger("closeDialogs");
  },

  _onOrientationChange: function() {
    // Reset disqus
    DISQUS && DISQUS.reset({ reload: true });
    // Resize window orientation
    this._setupMapDimensions(true);
  },

  // When window is resized, let's touch some things ;)
  _setupMapDimensions: function(animated) {
    var windowHeight = this.$el.height();
    var mainInfoHeight = this.$body.find('.js-Navmenu').height();
    var headerHeight = this.$body.find('.Header').height();
    var landscapeMode = this.el.matchMedia && this.el.matchMedia("(orientation: landscape)").matches;
    var h, height, top;

    if (this.options.isMobileDevice) {

      if (landscapeMode) {
        h = headerHeight - 20;
      } else {
        if (windowHeight > 670) {
          h = 220;
        } else { // iPhone, etc.
          h = 140;
        }        
      }
    } else {
      h = 260;
    }

    height = windowHeight - h;
    top    = windowHeight - (h - 80);

    if (animated) {
      this.$map.animate({ height: height }, { easing: "easeInQuad", duration: 150 }); 
    } else {

      if (this.options.isMobileDevice) {
        this.$map.css({ height: height, opacity: 1 }); 
      } else {
        // On non mobile devices
        this.$map.css({ height: windowHeight - ( mainInfoHeight + headerHeight), opacity: 1 })
      }
    }

    // If landscape, let's scroll to show the map, and
    // leave the header hidden
    if (this.options.isMobileDevice && landscapeMode && $(window).scrollTop() < headerHeight) {
      this.$body.animate({ scrollTop: headerHeight }, 600);
    }

    if (this.map_view) this.map_view.invalidateMap();
  }

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/dialogs/export_map/export_map_view":1,"./public_map_view":12}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL2RpYWxvZ3MvZXhwb3J0X21hcC9leHBvcnRfbWFwX3ZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdfaGVscGVycy9yYW5kb21fcXVvdGUuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdzL2Jhc2VfZGlhbG9nL3ZpZXcuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvY29tbW9uL3ZpZXdzL21hcGNhcmRfcHJldmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfY29tbW9uL3VzZXJfaW5kdXN0cmllcy9kcm9wZG93bl92aWV3LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19jb21tb24vbGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19jb21tb24vaW5wdXQuanMiLCJsaWIvYXNzZXRzL2phdmFzY3JpcHRzL2NhcnRvZGIvcHVibGljX2NvbW1vbi91c2VyX21ldGFfdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3MvZHJvcGRvd25fdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfY29tbW9uL3VzZXJfc2hhcmVfdmlldy5qcyIsImxpYi9hc3NldHMvamF2YXNjcmlwdHMvY2FydG9kYi9wdWJsaWNfbWFwL2VudHJ5LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19tYXAvcHVibGljX21hcF92aWV3LmpzIiwibGliL2Fzc2V0cy9qYXZhc2NyaXB0cy9jYXJ0b2RiL3B1YmxpY19tYXAvcHVibGljX21hcF93aW5kb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3ZDQSxJQUFJLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakgsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNwRSxJQUFJLENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Ozs7OztBQU0zRyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7RUFFcEMsTUFBTSxFQUFFO0lBQ04sMkJBQTJCLEVBQUUsaUJBQWlCO0dBQy9DOztFQUVELGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRTtJQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDO01BQ2hDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztNQUNwQixlQUFlLEVBQUUsQ0FBQyxFQUFFO01BQ3BCLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRztNQUMzQyxtQkFBbUIsRUFBRSxNQUFNO01BQzNCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUVkLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVztNQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZCxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUVULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiOztDQUVGLENBQUMsQ0FBQzs7Ozs7OztBQ2xDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FGbERBLElBQUksR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqSCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2hFLElBQUksQ0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0FBTTNHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztFQUVwQyxNQUFNLEVBQUU7SUFDTiwyQkFBMkIsRUFBRSxpQkFBaUI7R0FDL0M7O0VBRUQsTUFBTSxFQUFFLFdBQVc7SUFDakIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwRCxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDOztJQUVsQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7TUFDWCxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDdkMsT0FBTyxFQUFFLE9BQU87UUFDaEIsV0FBVyxFQUFFLFdBQVc7T0FDekIsQ0FBQztLQUNILENBQUM7O0lBRUYsT0FBTyxJQUFJLENBQUM7R0FDYjs7RUFFRCxlQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7SUFFaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQztNQUM5QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7TUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO01BQ2pCLGlCQUFpQixFQUFFLEVBQUU7S0FDdEIsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztJQUVkLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVztNQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZCxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUVULElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiOztDQUVGLENBQUMsQ0FBQzs7Ozs7OztBR2hESDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyIEJhc2VEaWFsb2cgPSByZXF1aXJlKCcuLi8uLi92aWV3cy9iYXNlX2RpYWxvZy92aWV3Jyk7XG52YXIgcmFuZG9tUXVvdGUgPSByZXF1aXJlKCcuLi8uLi92aWV3X2hlbHBlcnMvcmFuZG9tX3F1b3RlJyk7XG5cbi8qKlxuICogTG9jay91bmxvY2sgZGF0YXNldHMvbWFwcyBkaWFsb2cuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQmFzZURpYWxvZy5leHRlbmQoe1xuXG4gIGV2ZW50czogQmFzZURpYWxvZy5leHRlbmRFdmVudHMoe1xuICAgICdjbGljayAuanMtb2snOiAnX2NvbmZpcm0nLFxuICAgICdjbGljayAuanMtZG93bmxvYWQnOiAnX2Rvd25sb2FkJyxcbiAgICAnY2xpY2sgLmpzLWNhbmNlbCc6ICdfYWJvcnRFeHBvcnQnXG4gIH0pLFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIChhdHRycykge1xuICAgIHRoaXMuZWxkZXIoJ2luaXRpYWxpemUnKTtcblxuICAgIHRoaXMuX2luaXRCaW5kcygpO1xuICB9LFxuXG4gIHJlbmRlcl9jb250ZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5tb2RlbC5nZXQoJ3N0YXRlJyk7XG5cbiAgICBpZiAoc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHZhciB3ID0gd2luZG93Lm9wZW4odGhpcy5tb2RlbC5nZXQoJ3VybCcpKTtcblxuICAgICAgLy8gSWYgdyBpcyB1bmRlZmluZWQsIHBvcHVwIHdhcyBibG9ja2VkOiB3ZSBzaG93IGEgXCJjbGljayB0byBkb3dubG9hZFwiIG1vZGFsLiBFbHNlLCBkb3dubG9hZCBoYXMgc3RhcnRlZC5cbiAgICAgIGlmICh3ID09IG51bGwpIHJldHVybiBjZGIudGVtcGxhdGVzLmdldFRlbXBsYXRlKCdjb21tb24vZGlhbG9ncy9leHBvcnRfbWFwL3RlbXBsYXRlcy9kb3dubG9hZCcpO1xuXG4gICAgICB3LmZvY3VzKCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ2ZhaWx1cmUnKSB7XG4gICAgICByZXR1cm4gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgnY29tbW9uL3RlbXBsYXRlcy9mYWlsJykoe1xuICAgICAgICBtc2c6ICdFeHBvcnQgaGFzIGZhaWxlZCdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdwZW5kaW5nJyB8fCBzdGF0ZSA9PT0gJ2V4cG9ydGluZycgfHwgc3RhdGUgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICB2YXIgbG9hZGluZ1RpdGxlID0gc3RhdGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdGF0ZS5zbGljZSgxKSArICcgLi4uJztcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUoJ2NvbW1vbi90ZW1wbGF0ZXMvbG9hZGluZycpKHtcbiAgICAgICAgdGl0bGU6IGxvYWRpbmdUaXRsZSxcbiAgICAgICAgcXVvdGU6IHJhbmRvbVF1b3RlKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2RiLnRlbXBsYXRlcy5nZXRUZW1wbGF0ZSgnY29tbW9uL2RpYWxvZ3MvZXhwb3J0X21hcC90ZW1wbGF0ZXMvY29uZmlybScpO1xuICAgIH1cbiAgfSxcblxuICBfY29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW9kZWwucmVxdWVzdEV4cG9ydCgpO1xuICB9LFxuXG4gIF9kb3dubG9hZDogZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vcGVuKHRoaXMubW9kZWwuZ2V0KCd1cmwnKSk7XG4gICAgd2luZG93LmZvY3VzKCk7XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0sXG5cbiAgX2Fib3J0RXhwb3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tb2RlbC5jYW5jZWxFeHBvcnQoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0sXG5cbiAgX2luaXRCaW5kczogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW9kZWwuYmluZCgnY2hhbmdlOnN0YXRlJywgZnVuY3Rpb24gKCkgeyB0aGlzLnJlbmRlcigpOyB9LCB0aGlzKTtcbiAgfVxufSk7XG4iLCIvKipcbiAqIFJhbmRvbSBxdW90ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciB0ZW1wbGF0ZSAgPSBfLnRlbXBsYXRlKCc8cCBjbGFzcz1cIkNEQi1UZXh0IENEQi1TaXplLW1lZGl1bSB1LWFsdFRleHRDb2xvclwiPlwiPCU9IHF1b3RlICU+XCI8L3A+PCUgaWYgKGF1dGhvcikgeyAlPjxwIGNsYXNzPVwiQ0RCLVRleHQgQ0RCLVNpemUtbWVkaXVtIHUtYWx0VGV4dENvbG9yIHUtdFNwYWNlXCI+PGVtPuKAkyA8JS0gYXV0aG9yICU+PC9lbT48L3A+PCUgfSAlPicpO1xuXG4gIHZhciBxdW90ZXMgPSBbXG4gICAgeyBxdW90ZTogXCJHZW9ncmFwaGVycyBuZXZlciBnZXQgbG9zdC4gVGhleSBqdXN0IGRvIGFjY2lkZW50YWwgZmllbGQgd29yay5cIiwgYXV0aG9yOiBcIk5pY2hvbGFzIENocmlzbWFuXCIgfSxcbiAgICB7IHF1b3RlOiBcIkdlb2dyYXBoeSBpcyBqdXN0IHBoeXNpY3Mgc2xvd2VkIGRvd24sIHdpdGggYSBjb3VwbGUgb2YgdHJlZXMgc3R1Y2sgaW4gaXQuXCIsIGF1dGhvcjogXCJUZXJyeSBQcmF0Y2hldHRcIiB9LFxuICAgIHsgcXVvdGU6IFwiTm90IGFsbCB0aG9zZSB3aG8gd2FuZGVyIGFyZSBsb3N0LlwiLCBhdXRob3I6IFwiSi4gUi4gUi4gVG9sa2llblwiIH0sXG4gICAgeyBxdW90ZTogXCJJbiB0aGF0IEVtcGlyZSwgdGhlIEFydCBvZiBDYXJ0b2dyYXBoeSBhdHRhaW5lZCBzdWNoIFBlcmZlY3Rpb24gdGhhdCB0aGUgbWFwIG9mIGEgc2luZ2xlIFByb3ZpbmNlIG9jY3VwaWVkIHRoZSBlbnRpcmV0eSBvZiBhIENpdHkuXCIsIGF1dGhvcjogXCJKb3JnZSBMdWlzIEJvcmdlc1wiIH0sXG4gICAgeyBxdW90ZTogXCJYIG1hcmtzIHRoZSBzcG90XCIsIGF1dGhvcjogXCJJbmRpYW5hIEpvbmVzXCIgfSxcbiAgICB7IHF1b3RlOiBcIkl0J3MgdHVydGxlcyBhbGwgdGhlIHdheSBkb3duLlwiLCBhdXRob3I6IG51bGwgfSxcbiAgICB7IHF1b3RlOiBcIlJlbWVtYmVyOiBubyBtYXR0ZXIgd2hlcmUgeW91IGdvLCB0aGVyZSB5b3UgYXJlLlwiLCBhdXRob3I6IG51bGwgfSxcbiAgICB7IHF1b3RlOiBcIldpdGhvdXQgZ2VvZ3JhcGh5LCB5b3UncmUgbm93aGVyZSFcIiwgYXV0aG9yOiBcIkppbW15IEJ1ZmZldHRcIiB9LFxuICAgIHsgcXVvdGU6IFwib3VyIGVhcnRoIGlzIGEgZ2xvYmUgLyB3aG9zZSBzdXJmYWNlIHdlIHByb2JlIC88YnIgLz5ubyBtYXAgY2FuIHJlcGxhY2UgaGVyIC8gYnV0IGp1c3QgdHJ5IHRvIHRyYWNlIGhlclwiLCBhdXRob3I6IFwiU3RldmUgV2F0ZXJtYW5cIiB9LFxuICAgIHsgcXVvdGU6IFwiRXZlcnl0aGluZyBoYXBwZW5zIHNvbWV3aGVyZS5cIiwgYXV0aG9yOiBcIkRvY3RvciBXaG9cIiB9LFxuICAgIHsgcXVvdGU6IFwiQSBtYXAgaXMgdGhlIGdyZWF0ZXN0IG9mIGFsbCBlcGljIHBvZW1zLiBJdHMgbGluZXMgYW5kIGNvbG9ycyBzaG93IHRoZSByZWFsaXphdGlvbiBvZiBncmVhdCBkcmVhbXMuXCIsIGF1dGhvcjogXCJHaWxiZXJ0IEguIEdyb3N2ZW5vclwiIH0sXG4gICAgeyBxdW90ZTogXCJFdmVyeXRoaW5nIGlzIHJlbGF0ZWQgdG8gZXZlcnl0aGluZyBlbHNlLDxiciAvPmJ1dCBuZWFyIHRoaW5ncyBhcmUgbW9yZSByZWxhdGVkIHRoYW4gZGlzdGFudCB0aGluZ3MuXCIsIGF1dGhvcjogXCJUb2JsZXIncyBmaXJzdCBsYXcgb2YgZ2VvZ3JhcGh5XCIgfSxcbiAgICB7IHF1b3RlOiBcIkhpYyBTdW50IERyYWNvbmVzXCIsIGF1dGhvcjogbnVsbCB9LFxuICAgIHsgcXVvdGU6IFwiSGVyZSBiZSBkcmFnb25zXCIsIGF1dGhvcjogbnVsbCB9LFxuICAgIHsgcXVvdGU6IFwiU3RhbmQgaW4gdGhlIHBsYWNlIHdoZXJlIHlvdSBsaXZlIC8gTm93IGZhY2UgTm9ydGggLzxici8+VGhpbmsgYWJvdXQgZGlyZWN0aW9uIC8gV29uZGVyIHdoeSB5b3UgaGF2ZW4ndCBiZWZvcmVcIiwgYXV0aG9yOiBcIlIuRS5NXCIgfSxcbiAgICB7IHF1b3RlOiBcIlRoZSB2aXJ0dWUgb2YgbWFwcywgdGhleSBzaG93IHdoYXQgY2FuIGJlIGRvbmUgd2l0aCBsaW1pdGVkIHNwYWNlLCB0aGV5IGZvcmVzZWUgdGhhdCBldmVyeXRoaW5nIGNhbiBoYXBwZW4gdGhlcmVpbi5cIiwgYXV0aG9yOiBcIkpvc8OpIFNhcmFtYWdvXCIgfVxuICBdO1xuXG4gIHZhciByID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKHF1b3Rlcy5sZW5ndGggLSAxKSk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlKHF1b3Rlc1tyXSk7XG59O1xuIiwidmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgXyA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydfJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydfJ10gOiBudWxsKTtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG52YXIgQmFzZURpYWxvZyA9IGNkYi51aS5jb21tb24uRGlhbG9nO1xuXG4vKipcbiAqIEFic3RyYWN0IHZpZXcgZm9yIGEgZGlhbG9nLCBhIGtpbmQgb2YgdmlldyB0aGF0IHRha2VzIHVwIHRoZSBmdWxsIHNjcmVlbiBvdmVybGF5aW5nIGFueSBwcmV2aW91cyBjb250ZW50LlxuICpcbiAqIFRvIGJlIGV4dGVuZGVkIGZvciBhIHNwZWNpZmljIHVzZS1jYXNlLlxuICogSXQgaW5oZXJpdHMgZnJvbSBDYXJ0b0RCLmpzJyBEaWFsb2cgdmlldyBzbyBoYXMgc29tZSBwYXJ0aWN1bGFyIGJlaGF2aW9yL2NvbnZlbnRpb24gb2YgaG93IHRvIGJlIHVzZWQsIHNlZSBleGFtcGxlXG4gKlxuICogRXhhbXBsZSBvZiBob3cgdG8gdXNlOlxuICogICAvLyBFeHRlbmQgdGhpcyB2aWV3XG4gKiAgIHZhciBNeURpYWxvZyA9IEJhc2VEaWFsb2cuZXh0ZW5kKHtcbiAqICAgICByZW5kZXJfY29udGVudDogZnVuY3Rpb24oKSB7XG4gKiAgICAgICByZXR1cm4gJ0hlbGxvIHdvcmxkISc7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiAgIC8vIENyZWF0ZSBpbnN0YW5jZSBvYmplY3QuXG4gKiAgIHZhciBkaWFsb2cgPSBuZXcgTXlEaWFsb2coKTtcbiAqXG4gKiAgIC8vIFRvIHJlbmRlciAmIHNob3cgaW5pdGlhbGx5IChvbmx5IHRvIGJlIGNhbGxlZCBvbmNlKTpcbiAqICAgZGlhbG9nLmFwcGVuZFRvQm9keSgpO1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VEaWFsb2cuZXh0ZW5kKHtcblxuICBjbGFzc05hbWU6ICdEaWFsb2cgaXMtb3BlbmluZycsXG5cbiAgb3ZlcnJpZGVEZWZhdWx0czoge1xuICAgIHRlbXBsYXRlX25hbWU6ICdjb21tb24vdmlld3MvYmFzZV9kaWFsb2cvdGVtcGxhdGUnLFxuICAgIHRyaWdnZXJEaWFsb2dFdmVudHM6IHRydWVcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0cyBvZiBwYXJlbnRcbiAgICBfLmRlZmF1bHRzKHRoaXMub3B0aW9ucywgdGhpcy5vdmVycmlkZURlZmF1bHRzKTtcbiAgICB0aGlzLmVsZGVyKCdpbml0aWFsaXplJyk7XG4gICAgdGhpcy5iaW5kKCdzaG93JywgdGhpcy5fc2V0Qm9keUZvckRpYWxvZ01vZGUuYmluZCh0aGlzLCAnYWRkJykpO1xuICAgIHRoaXMuYmluZCgnaGlkZScsIHRoaXMuX3NldEJvZHlGb3JEaWFsb2dNb2RlLmJpbmQodGhpcywgJ3JlbW92ZScpKTtcbiAgfSxcblxuICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5zaG93LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50cmlnZ2VyKCdzaG93Jyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyRGlhbG9nRXZlbnRzKSB7XG4gICAgICBjZGIuZ29kLnRyaWdnZXIoJ2RpYWxvZ09wZW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnaXMtY2xvc2luZycpO1xuXG4gICAgLy8gQmx1ciBjdXJyZW50IGVsZW1lbnQgKGUuZy4gYSA8YT4gdGFnIHRoYXQgd2FzIGNsaWNrZWQgdG8gb3BlbiB0aGlzIHdpbmRvdylcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgQmFzZURpYWxvZy5wcm90b3R5cGUucmVuZGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy4kKCcuY29udGVudCcpLmFkZENsYXNzKCdpcy1uZXdDb250ZW50Jyk7XG5cbiAgICBpZiAodGhpcy5faXNTdGlja3koKSkge1xuICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2lzLXN0aWNreScpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9pc1N0aWNreTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuc3RpY2t5O1xuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYW5jZWwodW5kZWZpbmVkLCB0cnVlKTtcbiAgfSxcblxuICAvKipcbiAgICogQG92ZXJyaWRlIGNkYi51aS5jb21tb24uRGlhbG9nLnByb3RvdHlwZS5vcGVuIGZvciBhbmltYXRlZCBvcGVuaW5nXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5vcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zaG93KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuaGlkZSB0byBpbXBsZW1lbnQgYW5pbWF0aW9uXG4gICAqL1xuICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICBCYXNlRGlhbG9nLnByb3RvdHlwZS5oaWRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50cmlnZ2VyKCdoaWRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuX2NhbmNlbCB0byBpbXBsZW1lbnQgYW5pbWF0aW9uIHVwb24gY2xvc2luZyB0aGUgZGlhbG9nIGFuZCB0byBoYW5kbGUgaGlkZSBldmVudC5cbiAgICovXG4gIF9jYW5jZWw6IGZ1bmN0aW9uKGV2LCBza2lwQ2FuY2VsQ2FsbGJhY2spIHtcbiAgICBpZiAoZXYpIHRoaXMua2lsbEV2ZW50KGV2KTtcblxuICAgIGlmICh0aGlzLl9pc1N0aWNreSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5pbmcnKS5hZGRDbGFzcygnaXMtY2xvc2luZycpO1xuXG4gICAgLy8gVXNlIHRpbWVvdXQgaW5zdGVhZCBvZiBldmVudCBsaXN0ZW5lciBvbiBhbmltYXRpb24gc2luY2UgdGhlIGV2ZW50IHRyaWdnZXJlZCBkaWZmZXJzIGRlcGVuZGluZyBvbiBicm93c2VyXG4gICAgLy8gVGltaW5nIHdvbid0IHBlcmhhcHMgYmUgMTAwJSBhY2N1cmF0ZSBidXQgaXQncyBnb29kIGVub3VnaFxuICAgIC8vIFRoZSB0aW1lb3V0IHNob3VsZCBtYXRjaCB0aGUgLkRpYWxvZy5pcy1jbG9zaW5nIGFuaW1hdGlvbiBkdXJhdGlvbi5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIC8vIGZyb20gb3JpZ2luYWwgX2NhbmNlbFxuICAgICAgaWYgKHNlbGYuY2FuY2VsICYmICFza2lwQ2FuY2VsQ2FsbGJhY2spIHtcbiAgICAgICAgc2VsZi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICAgIEJhc2VEaWFsb2cucHJvdG90eXBlLmhpZGUuY2FsbChzZWxmKTtcbiAgICB9LCA4MCk7IC8vbXNcblxuICAgIC8vIFRyaWdnZXIgZXZlbnRzIGltbWVkaWF0ZWx5LCBkb24ndCB3YWl0IGZvciB0aGUgdGltZW91dCBhYm92ZVxuICAgIHRoaXMudHJpZ2dlcignaGlkZScpO1xuICAgIGlmICh0aGlzLm9wdGlvbnMudHJpZ2dlckRpYWxvZ0V2ZW50cykge1xuICAgICAgY2RiLmdvZC50cmlnZ2VyKCdkaWFsb2dDbG9zZWQnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZSBjZGIudWkuY29tbW9uLkRpYWxvZy5wcm90b3R5cGUuX29rIHRvIG5vdCBoaWRlIGRpYWxvZyBieSBkZWZhdWx0IGlmIHRoZXJlJ3MgYW4gb2sgbWV0aG9kIGRlZmluZWQuXG4gICAqL1xuICBfb2s6IGZ1bmN0aW9uKGV2KSB7XG4gICAgdGhpcy5raWxsRXZlbnQoZXYpO1xuICAgIGlmICh0aGlzLm9rKSB7XG4gICAgICB0aGlzLm9rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgX3NldEJvZHlGb3JEaWFsb2dNb2RlOiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAkKCdib2R5JylbYWN0aW9uICsgJ0NsYXNzJ10oJ2lzLWluRGlhbG9nJyk7XG4gIH1cblxufSk7XG4iLCJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcbnZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyIF8gPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snXyddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnXyddIDogbnVsbCk7XG5cbi8qKlxuICogIE1hcENhcmQgcHJldmlld3NcbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG5cbiAgb3B0aW9uczoge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgaGVpZ2h0OiAxNzAsXG4gICAgcHJpdmFjeTogJ1BVQkxJQycsXG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHZpc0lkOiAnJyxcbiAgICBtYXBzQXBpUmVzb3VyY2U6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgYXV0aFRva2VuczogW11cbiAgfSxcblxuICBfVEVNUExBVEVTOiB7XG4gICAgLy8gVXNpbmcgPCU9ICU+IGluc3RlYWQgb2YgPCUtICU+IGJlY2F1c2UgaWYgbm90IC8gY2hhcmFjdGVycyAoZm9yIGV4YW1wbGUpIHdpbGwgYmUgZXNjYXBlZFxuICAgIHJlZ3VsYXI6ICc8JS0gcHJvdG9jb2wgJT46Ly88JT0gbWFwc0FwaVJlc291cmNlICU+L2FwaS92MS9tYXAvc3RhdGljL25hbWVkLzwlLSB0cGwgJT4vPCUtIHdpZHRoICU+LzwlLSBoZWlnaHQgJT4ucG5nPCU9IGF1dGhUb2tlbnMgJT4nLFxuICAgIGNkbjogJzwlLSBwcm90b2NvbCAlPjovLzwlLSBjZG4gJT4vPCUtIHVzZXJuYW1lICU+L2FwaS92MS9tYXAvc3RhdGljL25hbWVkLzwlLSB0cGwgJT4vPCUtIHdpZHRoICU+LzwlLSBoZWlnaHQgJT4ucG5nPCU9IGF1dGhUb2tlbnMgJT4nXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgXy5lYWNoKFsndmlzSWQnLCAnbWFwc0FwaVJlc291cmNlJywgJ3VzZXJuYW1lJ10sIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zW25hbWVdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUgKyAnIGlzIHJlcXVpcmVkIGZvciBTdGF0aWMgTWFwIGluc3RhbnRpYXRpb24nKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICBsb2FkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zdGFydExvYWRlcigpO1xuICAgIHRoaXMuX2xvYWRGcm9tVmlzSWQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9nZW5lcmF0ZUltYWdlVGVtcGxhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAndHBsXycgKyB0aGlzLm9wdGlvbnMudmlzSWQucmVwbGFjZSgvLS9nLCAnXycpO1xuICB9LFxuXG4gIF9sb2FkRnJvbVZpc0lkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSB0aGlzLl9pc0hUVFBTKCkgPyAnaHR0cHMnOiAnaHR0cCc7XG4gICAgdmFyIGNkbkNvbmZpZyA9IGNkYi5jb25maWcuZ2V0KCdjZG5fdXJsJyk7XG4gICAgdmFyIHRlbXBsYXRlID0gXy50ZW1wbGF0ZShjZG5Db25maWcgPyB0aGlzLl9URU1QTEFURVNbJ2NkbiddIDogdGhpcy5fVEVNUExBVEVTWydyZWd1bGFyJ10pO1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgICB1c2VybmFtZTogdGhpcy5vcHRpb25zLnVzZXJuYW1lLFxuICAgICAgbWFwc0FwaVJlc291cmNlOiB0aGlzLm9wdGlvbnMubWFwc0FwaVJlc291cmNlLFxuICAgICAgdHBsOiB0aGlzLl9nZW5lcmF0ZUltYWdlVGVtcGxhdGUoKSxcbiAgICAgIHdpZHRoOiB0aGlzLm9wdGlvbnMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5oZWlnaHQsXG4gICAgICBhdXRoVG9rZW5zOiB0aGlzLl9nZW5lcmF0ZUF1dGhUb2tlbnNQYXJhbXMoKVxuICAgIH07XG5cbiAgICBpZiAoY2RuQ29uZmlnKSB7XG4gICAgICBvcHRpb25zID0gXy5leHRlbmQob3B0aW9ucywgeyBjZG46IGNkbkNvbmZpZ1twcm90b2NvbF0gfSk7XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IHRlbXBsYXRlKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5fbG9hZEltYWdlKHt9LCB1cmwpO1xuICB9LFxuXG4gIF9nZW5lcmF0ZUF1dGhUb2tlbnNQYXJhbXM6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXV0aFRva2VucyA9IHRoaXMub3B0aW9ucy5hdXRoVG9rZW5zO1xuICAgIGlmIChhdXRoVG9rZW5zICYmIGF1dGhUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuICc/JyArIF8ubWFwKGF1dGhUb2tlbnMsIGZ1bmN0aW9uICh0KSB7IHJldHVybiAnYXV0aF90b2tlbj0nICsgdDsgfSkuam9pbignJicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuXG4gIF9pc0hUVFBTOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBzXCIpID09PSAwO1xuICB9LFxuXG4gIGxvYWRVUkw6IGZ1bmN0aW9uKHVybCkge1xuICAgIHZhciAkaW1nID0gJCgnPGltZyBjbGFzcz1cIk1hcENhcmQtcHJldmlld1wiIHNyYz1cIicgKyB1cmwgKyAnXCIgLz4nKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGltZyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgJGltZy5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAkaW1nLmZhZGVJbigyNTApO1xuICB9LFxuXG4gIHNob3dFcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fb25FcnJvcigpO1xuICB9LFxuXG4gIF9zdGFydExvYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kZWwuYWRkQ2xhc3MoXCJpcy1sb2FkaW5nXCIpO1xuICB9LFxuXG4gIF9zdG9wTG9hZGVyOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcImlzLWxvYWRpbmdcIik7XG4gIH0sXG5cbiAgX29uU3VjY2VzczogZnVuY3Rpb24odXJsKSB7XG4gICAgdGhpcy5fc3RvcExvYWRlcigpO1xuICAgIHRoaXMubG9hZFVSTCh1cmwpO1xuICAgIHRoaXMudHJpZ2dlcihcImxvYWRlZFwiLCB1cmwpO1xuICB9LFxuXG4gIF9vbkVycm9yOiBmdW5jdGlvbihlcnJvcikge1xuICAgIHRoaXMuX3N0b3BMb2FkZXIoKTtcbiAgICB0aGlzLiRlbC5hZGRDbGFzcyhcImhhcy1lcnJvclwiKTtcbiAgICB2YXIgJGVycm9yID0gJCgnPGRpdiBjbGFzcz1cIk1hcENhcmQtZXJyb3JcIiAvPicpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCgkZXJyb3IpO1xuICAgICRlcnJvci5mYWRlSW4oMjUwKTtcbiAgICB0aGlzLnRyaWdnZXIoXCJlcnJvclwiKTtcbiAgfSxcblxuICBfbG9hZEltYWdlOiBmdW5jdGlvbihlcnJvciwgdXJsKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBpbWcgID0gbmV3IEltYWdlKCk7XG5cbiAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fb25FcnJvcihlcnJvcik7XG4gICAgfTtcblxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX29uU3VjY2Vzcyh1cmwpO1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhpcy5fb25FcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xuY2RiLmFkbWluID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddWydhZG1pbiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ11bJ2FkbWluJ10gOiBudWxsKTtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG4vKipcbiAqIFRoZSBjb250ZW50IG9mIHRoZSBkcm9wZG93biBtZW51IG9wZW5lZCBieSB0aGUgaW5kdXN0cmllcyBsaW5rIGluIHRoZSBoZWFkZXIsIGUuZy46XG4gKiAgIENhcnRvREIsIEluZHVzdHJpZXMsIEV4cGxvcmUsIFByaWNpbmdcbiAqICAgICAgICAgICAgIF9fX19fXy9cXF9fX19cbiAqICAgICAgICAgICAgfCAgICAgICAgICAgIHxcbiAqICAgICAgICAgICAgfCAgICB0aGlzICAgIHxcbiAqICAgICAgICAgICAgfF9fX19fX19fX19fX3xcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjZGIuYWRtaW4uRHJvcGRvd25NZW51LmV4dGVuZCh7XG4gIGNsYXNzTmFtZTogJ0NEQi1UZXh0IERyb3Bkb3duIERyb3Bkb3duLS1wdWJsaWMnLFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZWxkZXIoJ2luaXRpYWxpemUnKTtcbiAgICB0aGlzLnRlbXBsYXRlX2Jhc2UgPSBjZGIudGVtcGxhdGVzLmdldFRlbXBsYXRlKCdwdWJsaWNfY29tbW9uL3VzZXJfaW5kdXN0cmllcy9kcm9wZG93bl90ZW1wbGF0ZScpO1xuXG4gICAgLy8gTmVjZXNzYXJ5IHRvIGhpZGUgZGlhbG9nIG9uIGNsaWNrIG91dHNpZGUgcG9wdXAsIGZvciBleGFtcGxlLlxuICAgIGNkYi5nb2QuYmluZCgnY2xvc2VEaWFsb2dzJywgdGhpcy5oaWRlLCB0aGlzKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZV9iYXNlKCkpO1xuXG4gICAgLy8gVE9ETzogdGFrZW4gZnJvbSBleGlzdGluZyBjb2RlLCBob3cgc2hvdWxkIGRyb3Bkb3ducyByZWFsbHkgYmUgYWRkZWQgdG8gdGhlIERPTT9cbiAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgY2xlYW46IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVudGlsIGh0dHBzOi8vZ2l0aHViLmNvbS9DYXJ0b0RCL2NhcnRvZGIuanMvaXNzdWVzLzIzOCBpcyByZXNvbHZlZDpcbiAgICAkKHRoaXMub3B0aW9ucy50YXJnZXQpLnVuYmluZCgnY2xpY2snLCB0aGlzLl9oYW5kbGVDbGljayk7XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5fX3N1cGVyX18uY2xlYW4uYXBwbHkodGhpcyk7XG4gIH1cblxufSk7XG4iLCJ2YXIgY2RiID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ10gOiBudWxsKTtcbnZhciBTZXR0aW5nc0Ryb3Bkb3duID0gcmVxdWlyZSgnLi91c2VyX3NldHRpbmdzL2Ryb3Bkb3duX3ZpZXcnKTtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG4vKipcbiAqIFZpZXcgdG8gcmVuZGVyIHRoZSB1c2VyIHNldHRpbmdzIHNlY3Rpb24gaW4gdGhlIGhlYWRlci5cbiAqIEV4cGVjdGVkIHRvIGJlIGNyZWF0ZWQgZnJvbSBleGlzdGluZyBET00gZWxlbWVudC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG5cbiAgZXZlbnRzOiB7XG4gICAgJ2NsaWNrIC5qcy1kcm9wZG93bi10YXJnZXQnOiAnX2NyZWF0ZURyb3Bkb3duJ1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhc2hib2FyZFVybCA9IHRoaXMubW9kZWwudmlld1VybCgpLmRhc2hib2FyZCgpO1xuICAgIHZhciBkYXRhc2V0c1VybCA9IGRhc2hib2FyZFVybC5kYXRhc2V0cygpO1xuICAgIHZhciBtYXBzVXJsID0gZGFzaGJvYXJkVXJsLm1hcHMoKTtcblxuICAgIHRoaXMuJGVsLmh0bWwoXG4gICAgICBjZGIudGVtcGxhdGVzLmdldFRlbXBsYXRlKCdwdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3NfdGVtcGxhdGUnKSh7XG4gICAgICAgIGF2YXRhclVybDogdGhpcy5tb2RlbC5nZXQoJ2F2YXRhcl91cmwnKSxcbiAgICAgICAgbWFwc1VybDogbWFwc1VybCxcbiAgICAgICAgZGF0YXNldHNVcmw6IGRhdGFzZXRzVXJsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfY3JlYXRlRHJvcGRvd246IGZ1bmN0aW9uKGV2KSB7XG4gICAgdGhpcy5raWxsRXZlbnQoZXYpO1xuICAgIGNkYi5nb2QudHJpZ2dlcignY2xvc2VEaWFsb2dzJyk7XG5cbiAgICB2YXIgdmlldyA9IG5ldyBTZXR0aW5nc0Ryb3Bkb3duKHtcbiAgICAgIHRhcmdldDogJChldi50YXJnZXQpLFxuICAgICAgbW9kZWw6IHRoaXMubW9kZWwsIC8vIHVzZXJcbiAgICAgIGhvcml6b250YWxfb2Zmc2V0OiAxOFxuICAgIH0pO1xuICAgIHZpZXcucmVuZGVyKCk7XG5cbiAgICB2aWV3Lm9uKCdvbkRyb3Bkb3duSGlkZGVuJywgZnVuY3Rpb24oKSB7XG4gICAgICB2aWV3LmNsZWFuKCk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICB2aWV3Lm9wZW4oKTtcbiAgfVxuXG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG5cbi8qKlxuICogVmlldyB0byBpbnRlcmFjdCB3aXRoIHRoZSBzaGFyZSBidXR0b25zIGluIHRoZSBjb250ZW50LlxuICpcbiAqIC0gVHdpdHRlciBjb2RlIGZyb20gaHR0cHM6Ly9kZXYudHdpdHRlci5jb20vd2ViL2ludGVudHNcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGV2ZW50czoge1xuICAgICdjbGljayAuanMtTmF2bWVudS1lZGl0TGluay0tbW9yZSc6ICdfb25DbGlja01vcmVMaW5rJ1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG1ldGFMaXN0ID0gdGhpcy4kKCcuanMtUHVibGljTWFwLW1ldGFMaXN0LS1tb2JpbGUnKTtcbiAgICB0aGlzLiRtb3JlTGluayA9IHRoaXMuJCgnLmpzLU5hdm1lbnUtZWRpdExpbmstLW1vcmUnKTtcblxuICAgIHRoaXMubW9kZWwub24oXCJjaGFuZ2U6YWN0aXZlXCIsIHRoaXMuX3RvZ2dsZU1ldGEsIHRoaXMpO1xuICB9LFxuXG4gIF9vbkNsaWNrTW9yZUxpbms6IGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLm1vZGVsLnNldCgnYWN0aXZlJywgIXRoaXMubW9kZWwuZ2V0KCdhY3RpdmUnKSk7XG4gIH0sXG5cbiAgX3RvZ2dsZU1ldGE6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm1vZGVsLmdldCgnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuJG1vcmVMaW5rLmh0bWwoJ0xlc3MgaW5mbycpO1xuICAgICAgdGhpcy4kbWV0YUxpc3Quc2xpZGVEb3duKDI1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJG1vcmVMaW5rLmh0bWwoJ01vcmUgaW5mbycpO1xuICAgICAgdGhpcy4kbWV0YUxpc3Quc2xpZGVVcCgyNTApO1xuICAgIH1cbiAgfVxuXG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xuY2RiLmFkbWluID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ2NkYiddWydhZG1pbiddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnY2RiJ11bJ2FkbWluJ10gOiBudWxsKTtcbnZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xuXG4vKipcbiAqIFRoZSBjb250ZW50IG9mIHRoZSBkcm9wZG93biBtZW51IG9wZW5lZCBieSB0aGUgdXNlciBhdmF0YXIgaW4gdGhlIHRvcC1yaWdodCBvZiB0aGUgaGVhZGVyLCBlLmcuOlxuICogICBFeHBsb3JlLCBMZWFybiwg4pmeXG4gKiAgICAgICAgICAgICBfX19fX18vXFxfX19fXG4gKiAgICAgICAgICAgIHwgICAgICAgICAgICB8XG4gKiAgICAgICAgICAgIHwgICAgdGhpcyAgICB8XG4gKiAgICAgICAgICAgIHxfX19fX19fX19fX198XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmFkbWluLkRyb3Bkb3duTWVudS5leHRlbmQoe1xuICBjbGFzc05hbWU6ICdDREItVGV4dCBEcm9wZG93bicsXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxkZXIoJ2luaXRpYWxpemUnKTtcbiAgICB0aGlzLnRlbXBsYXRlX2Jhc2UgPSBjZGIudGVtcGxhdGVzLmdldFRlbXBsYXRlKCdwdWJsaWNfY29tbW9uL3VzZXJfc2V0dGluZ3MvZHJvcGRvd25fdGVtcGxhdGUnKTtcblxuICAgIC8vIE5lY2Vzc2FyeSB0byBoaWRlIGRpYWxvZyBvbiBjbGljayBvdXRzaWRlIHBvcHVwLCBmb3IgZXhhbXBsZS5cbiAgICBjZGIuZ29kLmJpbmQoJ2Nsb3NlRGlhbG9ncycsIHRoaXMuaGlkZSwgdGhpcyk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXIgPSB0aGlzLm1vZGVsO1xuICAgIHZhciB1c2VyVXJsID0gdXNlci52aWV3VXJsKCk7XG5cbiAgICB0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGVfYmFzZSh7XG4gICAgICBuYW1lOiB1c2VyLmZ1bGxOYW1lKCkgfHwgdXNlci5nZXQoJ3VzZXJuYW1lJyksXG4gICAgICBlbWFpbDogdXNlci5nZXQoJ2VtYWlsJyksXG4gICAgICBpc09yZ093bmVyOiB1c2VyLmlzT3JnT3duZXIoKSxcbiAgICAgIGRhc2hib2FyZFVybDogdXNlclVybC5kYXNoYm9hcmQoKSxcbiAgICAgIHB1YmxpY1Byb2ZpbGVVcmw6IHVzZXJVcmwucHVibGljUHJvZmlsZSgpLFxuICAgICAgYWNjb3VudFByb2ZpbGVVcmw6IHVzZXJVcmwuYWNjb3VudFByb2ZpbGUoKSxcbiAgICAgIGxvZ291dFVybDogdXNlclVybC5sb2dvdXQoKVxuICAgIH0pKTtcblxuICAgIC8vIFRPRE86IHRha2VuIGZyb20gZXhpc3RpbmcgY29kZSwgaG93IHNob3VsZCBkcm9wZG93bnMgcmVhbGx5IGJlIGFkZGVkIHRvIHRoZSBET00/XG4gICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGNsZWFuOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVW50aWwgaHR0cHM6Ly9naXRodWIuY29tL0NhcnRvREIvY2FydG9kYi5qcy9pc3N1ZXMvMjM4IGlzIHJlc29sdmVkOlxuICAgICQodGhpcy5vcHRpb25zLnRhcmdldCkudW5iaW5kKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrKTtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLl9fc3VwZXJfXy5jbGVhbi5hcHBseSh0aGlzKTtcbiAgfVxuXG59KTtcbiIsInZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xudmFyICQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snJCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnJCddIDogbnVsbCk7XG5cbi8qKlxuICogVmlldyB0byBpbnRlcmFjdCB3aXRoIHRoZSBzaGFyZSBidXR0b25zIGluIHRoZSBjb250ZW50LlxuICpcbiAqIC0gVHdpdHRlciBjb2RlIGZyb20gaHR0cHM6Ly9kZXYudHdpdHRlci5jb20vd2ViL2ludGVudHNcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGV2ZW50czoge1xuICAgICdjbGljayAuanMtTmF2bWVudS1zaGFyZUxpbmsnOiAnX29uQ2xpY2tTaGFyZUxpbmsnLFxuICAgICdjbGljayAuanMtTmF2bWVudS1jbG9zZUxpbmsnOiAnX29uQ2xpY2tDbG9zZUxpbmsnLFxuICAgICdjbGljayAuanMtTmF2bWVudS1saW5rLS1mYWNlYm9vayc6ICdfb25DbGlja0ZhY2Vib29rTGluaycsXG4gICAgJ2NsaWNrIC5qcy1OYXZtZW51LWxpbmstLWxpbmtlZGluJzogJ19vbkNsaWNrTGlua2VkaW5MaW5rJ1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJHNoYXJlTGlzdCA9ICQoJy5qcy1OYXZtZW51LXNoYXJlTGlzdCcpO1xuXG4gICAgdGhpcy5tb2RlbC5vbihcImNoYW5nZTphY3RpdmVcIiwgdGhpcy5fdG9nZ2xlU2hhcmUsIHRoaXMpO1xuXG4gICAgdGhpcy5faW5pdEJpbmRpbmdzKCk7XG4gIH0sXG5cbiAgX2luaXRCaW5kaW5nczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5fX3R3aXR0ZXJJbnRlbnRIYW5kbGVyKSByZXR1cm47XG4gICBcbiAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVJbnRlbnQsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XG4gICAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25jbGljaycsIHRoaXMuX2hhbmRsZUludGVudCk7XG4gICAgfVxuICAgIHdpbmRvdy5fX3R3aXR0ZXJJbnRlbnRIYW5kbGVyID0gdHJ1ZTtcbiAgfSxcblxuICBfb25DbGlja0xpbmtlZGluTGluazogZnVuY3Rpb24oZSkge1xuICAgIHZhciBocmVmID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgbSwgbGVmdCwgdG9wO1xuXG4gICAgdmFyIHdpbmRvd09wdGlvbnMgPSAnc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx0b29sYmFyPW5vLGxvY2F0aW9uPXllcycsXG4gICAgICAgIHdpZHRoID0gNTUwLFxuICAgICAgICBoZWlnaHQgPSA0MjAsXG4gICAgICAgIHdpbkhlaWdodCA9IHNjcmVlbi5oZWlnaHQsXG4gICAgICAgIHdpbldpZHRoID0gc2NyZWVuLndpZHRoO1xuXG4gICAgbGVmdCA9IE1hdGgucm91bmQoKHdpbldpZHRoIC8gMikgLSAod2lkdGggLyAyKSk7XG4gICAgdG9wID0gMDtcblxuICAgIGlmICh3aW5IZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgIHRvcCA9IE1hdGgucm91bmQoKHdpbkhlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvcCk7XG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5vcGVuKGhyZWYsICdmYWNlYm9vaycsIHdpbmRvd09wdGlvbnMgKyAnLHdpZHRoPScgKyB3aWR0aCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLGhlaWdodD0nICsgaGVpZ2h0ICsgJyxsZWZ0PScgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCk7XG5cbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uQ2xpY2tGYWNlYm9va0xpbms6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgaHJlZiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKS5hdHRyKCdocmVmJyksXG4gICAgICAgIG0sIGxlZnQsIHRvcDtcblxuICAgIHZhciB3aW5kb3dPcHRpb25zID0gJ3Njcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMsdG9vbGJhcj1ubyxsb2NhdGlvbj15ZXMnLFxuICAgICAgICB3aWR0aCA9IDU1MCxcbiAgICAgICAgaGVpZ2h0ID0gNDIwLFxuICAgICAgICB3aW5IZWlnaHQgPSBzY3JlZW4uaGVpZ2h0LFxuICAgICAgICB3aW5XaWR0aCA9IHNjcmVlbi53aWR0aDtcblxuICAgIGxlZnQgPSBNYXRoLnJvdW5kKCh3aW5XaWR0aCAvIDIpIC0gKHdpZHRoIC8gMikpO1xuICAgIHRvcCA9IDA7XG5cbiAgICBpZiAod2luSGVpZ2h0ID4gaGVpZ2h0KSB7XG4gICAgICB0b3AgPSBNYXRoLnJvdW5kKCh3aW5IZWlnaHQgLyAyKSAtIChoZWlnaHQgLyAyKSk7XG4gICAgICBjb25zb2xlLmxvZyh0b3ApO1xuICAgIH1cbiAgICBcbiAgICB3aW5kb3cub3BlbihocmVmLCAnZmFjZWJvb2snLCB3aW5kb3dPcHRpb25zICsgJyx3aWR0aD0nICsgd2lkdGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxoZWlnaHQ9JyArIGhlaWdodCArICcsbGVmdD0nICsgbGVmdCArICcsdG9wPScgKyB0b3ApO1xuXG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIGUucHJldmVudERlZmF1bHQgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9oYW5kbGVJbnRlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCxcbiAgICAgICAgbSwgbGVmdCwgdG9wO1xuIFxuICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhJykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuIFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiB0YXJnZXQuaHJlZikge1xuICAgICAgdmFyIGludGVudFJlZ2V4ID0gL3R3aXR0ZXJcXC5jb20oXFw6XFxkezIsNH0pP1xcL2ludGVudFxcLyhcXHcrKS8sXG4gICAgICAgICAgd2luZG93T3B0aW9ucyA9ICdzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHRvb2xiYXI9bm8sbG9jYXRpb249eWVzJyxcbiAgICAgICAgICB3aWR0aCA9IDU1MCxcbiAgICAgICAgICBoZWlnaHQgPSA0MjAsXG4gICAgICAgICAgd2luSGVpZ2h0ID0gc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICB3aW5XaWR0aCA9IHNjcmVlbi53aWR0aDtcblxuICAgICAgbSA9IHRhcmdldC5ocmVmLm1hdGNoKGludGVudFJlZ2V4KTtcbiAgICAgIGlmIChtKSB7XG4gICAgICAgIGxlZnQgPSBNYXRoLnJvdW5kKCh3aW5XaWR0aCAvIDIpIC0gKHdpZHRoIC8gMikpO1xuICAgICAgICB0b3AgPSAwO1xuIFxuICAgICAgICBpZiAod2luSGVpZ2h0ID4gaGVpZ2h0KSB7XG4gICAgICAgICAgdG9wID0gTWF0aC5yb3VuZCgod2luSGVpZ2h0IC8gMikgLSAoaGVpZ2h0IC8gMikpO1xuICAgICAgICB9XG4gXG4gICAgICAgIHdpbmRvdy5vcGVuKHRhcmdldC5ocmVmLCAnaW50ZW50Jywgd2luZG93T3B0aW9ucyArICcsd2lkdGg9JyArIHdpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLGhlaWdodD0nICsgaGVpZ2h0ICsgJyxsZWZ0PScgKyBsZWZ0ICsgJyx0b3A9JyArIHRvcCk7XG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1vZGVsLnNldCgnYWN0aXZlJywgZmFsc2UpO1xuICB9LFxuXG4gIF9vbkNsaWNrU2hhcmVMaW5rOiBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5raWxsRXZlbnQoZSk7XG5cbiAgICB0aGlzLm1vZGVsLnNldCgnYWN0aXZlJywgIXRoaXMubW9kZWwuZ2V0KCdhY3RpdmUnKSk7XG4gIH0sXG5cbiAgX29uQ2xpY2tDbG9zZUxpbms6IGZ1bmN0aW9uKGUpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0sXG5cbiAgX3RvZ2dsZVNoYXJlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2FjdGl2ZScpKSB7XG4gICAgICB0aGlzLiRzaGFyZUxpc3QuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRzaGFyZUxpc3QucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG59KTtcbiIsInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xudmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgVXNlclNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL3B1YmxpY19jb21tb24vdXNlcl9zZXR0aW5nc192aWV3Jyk7XG52YXIgVXNlckluZHVzdHJpZXNWaWV3ID0gcmVxdWlyZSgnLi4vcHVibGljX2NvbW1vbi91c2VyX2luZHVzdHJpZXNfdmlldycpO1xudmFyIFB1YmxpY01hcFdpbmRvdyA9IHJlcXVpcmUoJy4vcHVibGljX21hcF93aW5kb3cnKTtcbnZhciBNYXBDYXJkUHJldmlldyA9IHJlcXVpcmUoJy4uL2NvbW1vbi92aWV3cy9tYXBjYXJkX3ByZXZpZXcnKTtcbnZhciBVc2VyU2hhcmVWaWV3ID0gcmVxdWlyZSgnLi4vcHVibGljX2NvbW1vbi91c2VyX3NoYXJlX3ZpZXcnKTtcbnZhciBVc2VyTWV0YVZpZXcgPSByZXF1aXJlKCcuLi9wdWJsaWNfY29tbW9uL3VzZXJfbWV0YV92aWV3Jyk7XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgLy8gTm8gYXR0cmlidXRpb25zIGFuZCBubyBsaW5rcyBpbiB0aGlzIG1hcCAoYXQgbGVhc3QgZnJvbSBjYXJ0b2RiKVxuICBjYXJ0b2RiLmNvbmZpZy5zZXQoe1xuICAgIGNhcnRvZGJfYXR0cmlidXRpb25zOiBcIlwiLFxuICAgIGNhcnRvZGJfbG9nb19saW5rOiBcIlwiXG4gIH0pO1xuXG4gICQuZXh0ZW5kKCAkLmVhc2luZywge1xuICAgIGVhc2VJblF1YWQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gYyoodC89ZCkqdCArIGI7XG4gICAgfVxuICB9KTtcblxuICBjZGIuaW5pdChmdW5jdGlvbigpIHtcbiAgICBjZGIudGVtcGxhdGVzLm5hbWVzcGFjZSA9ICdjYXJ0b2RiLyc7XG4gICAgY2RiLmNvbmZpZy5zZXQod2luZG93LmNvbmZpZyk7XG4gICAgY2RiLmNvbmZpZy5zZXQoJ3VybF9wcmVmaXgnLCB3aW5kb3cuYmFzZV91cmwpO1xuXG4gICAgdmFyIHVzZXJJbmR1c3RyaWVzVmlldyA9IG5ldyBVc2VySW5kdXN0cmllc1ZpZXcoe1xuICAgICAgZWw6ICQoJy5qcy11c2VyLWluZHVzdHJpZXMnKSxcbiAgICB9KTtcblxuICAgIHZhciB1c2VyU2hhcmVWaWV3ID0gbmV3IFVzZXJTaGFyZVZpZXcoe1xuICAgICAgZWw6ICQoJy5qcy1OYXZtZW51LXNoYXJlJyksXG4gICAgICBtb2RlbDogbmV3IGNkYi5jb3JlLk1vZGVsKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHZhciB1c2VyTWV0YVZpZXcgPSBuZXcgVXNlck1ldGFWaWV3KHtcbiAgICAgIGVsOiAkKCcuanMtdXNlci1tZXRhJyksXG4gICAgICBtb2RlbDogbmV3IGNkYi5jb3JlLk1vZGVsKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQuYm9keSkuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNkYi5nb2QudHJpZ2dlcignY2xvc2VEaWFsb2dzJyk7XG4gICAgICB1c2VyU2hhcmVWaWV3LmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgYXV0aGVudGljYXRlZFVzZXIgPSBuZXcgY2RiLm9wZW4uQXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICBhdXRoZW50aWNhdGVkVXNlci5iaW5kKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhdXRoZW50aWNhdGVkVXNlci5nZXQoJ3VzZXJuYW1lJykpIHtcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgY2RiLmFkbWluLlVzZXIoYXV0aGVudGljYXRlZFVzZXIuYXR0cmlidXRlcyk7XG4gICAgICAgIHZhciB1c2VyU2V0dGluZ3NWaWV3ID0gbmV3IFVzZXJTZXR0aW5nc1ZpZXcoe1xuICAgICAgICAgIGVsOiAkKCcuanMtdXNlci1zZXR0aW5ncycpLFxuICAgICAgICAgIG1vZGVsOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICB1c2VyU2V0dGluZ3NWaWV3LnJlbmRlcigpO1xuXG4gICAgICAgIGlmICh1c2VyLmdldCgndXNlcm5hbWUnKSA9PT0gd2luZG93Lm93bmVyX3VzZXJuYW1lKSB7XG4gICAgICAgICAgLy8gU2hvdyBcIkVkaXQgaW4gQ2FydG9EQlwiIGJ1dHRvbiBpZiBsb2dnZWQgdXNlclxuICAgICAgICAgIC8vIGlzIHRoZSBtYXAgb3duZXIgOylcbiAgICAgICAgICAkKCcuanMtTmF2bWVudS1lZGl0TGluaycpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTW9yZSB1c2VyIHZpcyBjYXJkc1xuICAgICQoJy5NYXBDYXJkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2aXNJZCA9ICQodGhpcykuZGF0YSgndmlzSWQnKTtcbiAgICAgIGlmICh2aXNJZCkge1xuICAgICAgICB2YXIgdXNlcm5hbWUgPSAkKHRoaXMpLmRhdGEoJ3Zpc093bmVyTmFtZScpO1xuICAgICAgICB2YXIgbWFwQ2FyZFByZXZpZXcgPSBuZXcgTWFwQ2FyZFByZXZpZXcoe1xuICAgICAgICAgIGVsOiAkKHRoaXMpLmZpbmQoJy5qcy1oZWFkZXInKSxcbiAgICAgICAgICB2aXNJZDogJCh0aGlzKS5kYXRhKCd2aXNJZCcpLFxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICBtYXBzQXBpUmVzb3VyY2U6IGNkYi5jb25maWcuZ2V0TWFwc1Jlc291cmNlTmFtZSh1c2VybmFtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENhcmRQcmV2aWV3LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENoZWNrIGlmIGRldmljZSBpcyBhIG1vYmlsZVxuICAgIHZhciBtb2JpbGVEZXZpY2UgPSAvQW5kcm9pZHx3ZWJPU3xpUGFkfGlQaG9uZXxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICAvLyBXaW5kb3cgdmlld1xuICAgIHZhciBwdWJsaWNfd2luZG93ID0gbmV3IFB1YmxpY01hcFdpbmRvdyh7XG4gICAgICBlbDogICAgICAgICAgICAgICAgICAgd2luZG93LFxuICAgICAgdXNlcl9uYW1lOiAgICAgICAgICAgIHVzZXJfbmFtZSxcbiAgICAgIG93bmVyX3VzZXJuYW1lOiAgICAgICBvd25lcl91c2VybmFtZSxcbiAgICAgIHZpc19pZDogICAgICAgICAgICAgICB2aXNfaWQsXG4gICAgICB2aXNfbmFtZTogICAgICAgICAgICAgdmlzX25hbWUsXG4gICAgICB2aXpkYXRhOiAgICAgICAgICAgICAgdml6ZGF0YSxcbiAgICAgIGNvbmZpZzogICAgICAgICAgICAgICBjb25maWcsXG4gICAgICBtYXBfb3B0aW9uczogICAgICAgICAgbWFwX29wdGlvbnMsXG4gICAgICBpc01vYmlsZURldmljZTogICAgICAgbW9iaWxlRGV2aWNlLFxuICAgICAgYmVsb25nX29yZ2FuaXphdGlvbjogIGJlbG9uZ19vcmdhbml6YXRpb25cbiAgICB9KTtcblxuICAgIGF1dGhlbnRpY2F0ZWRVc2VyLmZldGNoKCk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgJCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WyckJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWyckJ10gOiBudWxsKTtcbnZhciBjZGIgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snY2RiJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydjZGInXSA6IG51bGwpO1xuXG4vKiogXG4gKiAgUHVibGljIHZpcyAobWFwIGl0c2VsZilcbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjZGIuY29yZS5WaWV3LmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY3JlYXRlVmlzKCk7XG4gIH0sXG5cbiAgX21hbmFnZUVycm9yOiBmdW5jdGlvbihlcnIsIGxheWVyKSB7XG4gICAgaWYobGF5ZXIgJiYgbGF5ZXIuZ2V0KCd0eXBlJykgPT09ICd0b3JxdWUnKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ21hcF9lcnJvcicsIHRoaXMpO1xuICAgICAgLy8gaGlkZSBhbGwgdGhlIG92ZXJsYXlzXG4gICAgICB2YXIgb3ZlcmxheXMgPSB2aXMuZ2V0T3ZlcmxheXMoKVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdmVybGF5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgbyA9IG92ZXJsYXlzW2ldO1xuICAgICAgICBvLmhpZGUgJiYgby5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9zZW5kU3RhdHM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBicm93c2VyO1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIGNoZWNrcyA9IFtcbiAgICAgIFsnTVNJRSAxMS4wJywgJ21zMTEnXSxcbiAgICAgIFsnTVNJRSAxMC4wJywgJ21zMTAnXSxcbiAgICAgIFsnTVNJRSA5LjAnLCAnbXM5J10sXG4gICAgICBbJ01TSUUgOC4wJywgJ21zOCddLFxuICAgICAgWydNU0lFIDcuMCcsJ21zNyddLFxuICAgICAgWydDaHJvbWUnLCAnY2hyJ10sXG4gICAgICBbJ0ZpcmVmb3gnLCAnZmYnXSxcbiAgICAgIFsnU2FmYXJpJywgJ2ZmJ11cbiAgICBdXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNoZWNrcy5sZW5ndGggJiYgIWJyb3dzZXI7ICsraSkge1xuICAgICAgaWYodWEuaW5kZXhPZihjaGVja3NbaV1bMF0pICE9PSAtMSkgYnJvd3NlciA9IGNoZWNrc1tpXVsxXTtcbiAgICB9XG4gICAgYnJvd3NlciA9IGJyb3dzZXIgfHwgJ25vbmUnO1xuICAgIGNhcnRvZGIuY29yZS5Qcm9maWxlci5tZXRyaWMoJ2NhcnRvZGItanMuZW1iZWQuJyArIGJyb3dzZXIpLmluYygpO1xuICB9LFxuXG4gIF9jcmVhdGVWaXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsb2FkaW5nVGltZSAgPSBjYXJ0b2RiLmNvcmUuUHJvZmlsZXIubWV0cmljKCdjYXJ0b2RiLWpzLmVtYmVkLnRpbWVfZnVsbF9sb2FkZWQnKS5zdGFydCgpO1xuICAgIHZhciB2aXNSZWFkeVRpbWUgPSBjYXJ0b2RiLmNvcmUuUHJvZmlsZXIubWV0cmljKCdjYXJ0b2RiLWpzLmVtYmVkLnRpbWVfdmlzX2xvYWRlZCcpLnN0YXJ0KCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgY2FydG9kYi5jcmVhdGVWaXMoJ21hcCcsIHRoaXMub3B0aW9ucy52aXpkYXRhLCB0aGlzLm9wdGlvbnMubWFwX29wdGlvbnMsIGZ1bmN0aW9uKHZpcykge1xuICAgICAgc2VsZi52aXMgPSB2aXM7XG5cbiAgICAgIHZpc1JlYWR5VGltZS5lbmQoKTtcblxuICAgICAgdmlzLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7IGxvYWRpbmdUaW1lLmVuZCgpIH0pO1xuXG4gICAgICAvLyBDaGVjayBmdWxsc2NyZWVuIGJ1dHRvblxuICAgICAgdmFyIGZ1bGxzY3JlZW4gPSB2aXMuZ2V0T3ZlcmxheShcImZ1bGxzY3JlZW5cIik7XG4gICAgICBcbiAgICAgIGlmIChmdWxsc2NyZWVuKSB7XG4gICAgICAgIGZ1bGxzY3JlZW4ub3B0aW9ucy5kb2MgPSBcIi5jYXJ0b2RiLXB1YmxpYy13cmFwcGVyXCI7XG4gICAgICAgIGZ1bGxzY3JlZW4ubW9kZWwuc2V0KFwiYWxsb3dXaGVlbE9uRnVsbHNjcmVlblwiLCBzZWxmLm9wdGlvbnMubWFwX29wdGlvbnMuc2Nyb2xsd2hlZWxFbmFibGVkKTtcbiAgICAgIH1cblxuICAgICAgLy9zb21lIHN0YXRzXG4gICAgICBzZWxmLl9zZW5kU3RhdHMoKTtcblxuICAgICAgLy8gTWFwIGxvYWRlZCFcbiAgICAgIHNlbGYudHJpZ2dlcignbWFwX2xvYWRlZCcsIHZpcywgdGhpcyk7XG5cbiAgICAgIHNlbGYuJCgnLmpzLXNwaW5uZXInKS5yZW1vdmUoKTtcblxuICAgIH0pLm9uKCdlcnJvcicsIHRoaXMuX21hbmFnZUVycm9yKTtcbiAgfSxcblxuICAvLyBcIlB1YmxpY1wiIG1ldGhvZFxuXG4gIGludmFsaWRhdGVNYXA6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudmlzICYmIHRoaXMudmlzLm1hcFZpZXcuaW52YWxpZGF0ZVNpemUoKVxuICB9XG5cbn0pOyIsInZhciAkID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJyQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJyQnXSA6IG51bGwpO1xudmFyIGNkYiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydjZGInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2NkYiddIDogbnVsbCk7XG52YXIgUHVibGljTWFwID0gcmVxdWlyZSgnLi9wdWJsaWNfbWFwX3ZpZXcnKTtcbnZhciBFeHBvcnRNYXBWaWV3ID0gcmVxdWlyZSgnLi4vY29tbW9uL2RpYWxvZ3MvZXhwb3J0X21hcC9leHBvcnRfbWFwX3ZpZXcnKTtcblxuLyoqIFxuICogIFB1YmxpYyBtYXAgd2luZG93IFwidmlld1wiXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2RiLmNvcmUuVmlldy5leHRlbmQoe1xuXG4gIGV2ZW50czoge1xuICAgICdjbGljayAuanMtTmF2bWVudS1saW5rLS1kb3dubG9hZC1tYXAnOiAnX2V4cG9ydE1hcCdcbiAgfSxcblxuICBfZXhwb3J0TWFwOiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB2aWV3ID0gbmV3IEV4cG9ydE1hcFZpZXcoe1xuICAgICAgbW9kZWw6IG5ldyBjZGIuYWRtaW4uRXhwb3J0TWFwTW9kZWwoeyAndmlzdWFsaXphdGlvbl9pZCc6IHZpc19pZCB9KSxcbiAgICAgIGNsZWFuX29uX2hpZGU6IHRydWUsXG4gICAgICBlbnRlcl90b19jb25maXJtOiB0cnVlXG4gICAgfSk7XG5cbiAgICB2aWV3LmFwcGVuZFRvQm9keSgpO1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGJvZHkgPSAkKHRoaXMuZWwuZG9jdW1lbnQuYm9keSk7XG4gICAgdGhpcy4kbWFwID0gdGhpcy4kYm9keS5maW5kKCcjbWFwJyk7XG4gICAgdGhpcy5fc2V0dXBNYXBEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5faW5pdEJpbmRzKCk7XG4gICAgdGhpcy5faW5pdFZpZXdzKCk7XG4gIH0sXG5cbiAgX2luaXRWaWV3czogZnVuY3Rpb24oKSB7XG4gICAgLy8gTWFwIHZpZXdcbiAgICB0aGlzLm1hcFZpZXcgPSBuZXcgUHVibGljTWFwKF8uZGVmYXVsdHMoeyBlbDogdGhpcy4kbWFwIH0sIHRoaXMub3B0aW9ucykpO1xuICAgIHRoaXMubWFwVmlldy5iaW5kKCdtYXBfZXJyb3InLCB0aGlzLl9zaG93Tm90U3VwcG9ydGVkRGlhbG9nLCB0aGlzKTtcbiAgICBcbiAgICB0aGlzLmFkZFZpZXcodGhpcy5tYXBWaWV3KTtcbiAgfSxcblxuICBfaW5pdEJpbmRzOiBmdW5jdGlvbigpIHtcbiAgICBfLmJpbmRBbGwodGhpcywgJ19vbldpbmRvd1Jlc2l6ZScsICdfb25PcmllbnRhdGlvbkNoYW5nZScpO1xuXG4gICAgdGhpcy4kZWwub24oJ3Jlc2l6ZScsIHRoaXMuX29uV2luZG93UmVzaXplKTtcblxuICAgIGlmICghdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsLmF0dGFjaEV2ZW50KCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMuX29uT3JpZW50YXRpb25DaGFuZ2UsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5fb25PcmllbnRhdGlvbkNoYW5nZSk7XG4gICAgfVxuICB9LFxuXG4gIF9zaG93Tm90U3VwcG9ydGVkRGlhbG9nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRib2R5LmZpbmQoJyNub3Rfc3VwcG9ydGVkX2RpYWxvZycpLnNob3coKTtcbiAgfSxcblxuICBfb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlc2l6ZSB3aW5kb3dcbiAgICB0aGlzLl9zZXR1cE1hcERpbWVuc2lvbnMoKTtcbiAgICAvLyBDbG9zZSBkaWFsb2dzXG4gICAgY2RiLmdvZC50cmlnZ2VyKFwiY2xvc2VEaWFsb2dzXCIpO1xuICB9LFxuXG4gIF9vbk9yaWVudGF0aW9uQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZXNldCBkaXNxdXNcbiAgICBESVNRVVMgJiYgRElTUVVTLnJlc2V0KHsgcmVsb2FkOiB0cnVlIH0pO1xuICAgIC8vIFJlc2l6ZSB3aW5kb3cgb3JpZW50YXRpb25cbiAgICB0aGlzLl9zZXR1cE1hcERpbWVuc2lvbnModHJ1ZSk7XG4gIH0sXG5cbiAgLy8gV2hlbiB3aW5kb3cgaXMgcmVzaXplZCwgbGV0J3MgdG91Y2ggc29tZSB0aGluZ3MgOylcbiAgX3NldHVwTWFwRGltZW5zaW9uczogZnVuY3Rpb24oYW5pbWF0ZWQpIHtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gdGhpcy4kZWwuaGVpZ2h0KCk7XG4gICAgdmFyIG1haW5JbmZvSGVpZ2h0ID0gdGhpcy4kYm9keS5maW5kKCcuanMtTmF2bWVudScpLmhlaWdodCgpO1xuICAgIHZhciBoZWFkZXJIZWlnaHQgPSB0aGlzLiRib2R5LmZpbmQoJy5IZWFkZXInKS5oZWlnaHQoKTtcbiAgICB2YXIgbGFuZHNjYXBlTW9kZSA9IHRoaXMuZWwubWF0Y2hNZWRpYSAmJiB0aGlzLmVsLm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IGxhbmRzY2FwZSlcIikubWF0Y2hlcztcbiAgICB2YXIgaCwgaGVpZ2h0LCB0b3A7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmlzTW9iaWxlRGV2aWNlKSB7XG5cbiAgICAgIGlmIChsYW5kc2NhcGVNb2RlKSB7XG4gICAgICAgIGggPSBoZWFkZXJIZWlnaHQgLSAyMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh3aW5kb3dIZWlnaHQgPiA2NzApIHtcbiAgICAgICAgICBoID0gMjIwO1xuICAgICAgICB9IGVsc2UgeyAvLyBpUGhvbmUsIGV0Yy5cbiAgICAgICAgICBoID0gMTQwO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaCA9IDI2MDtcbiAgICB9XG5cbiAgICBoZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBoO1xuICAgIHRvcCAgICA9IHdpbmRvd0hlaWdodCAtIChoIC0gODApO1xuXG4gICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICB0aGlzLiRtYXAuYW5pbWF0ZSh7IGhlaWdodDogaGVpZ2h0IH0sIHsgZWFzaW5nOiBcImVhc2VJblF1YWRcIiwgZHVyYXRpb246IDE1MCB9KTsgXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc01vYmlsZURldmljZSkge1xuICAgICAgICB0aGlzLiRtYXAuY3NzKHsgaGVpZ2h0OiBoZWlnaHQsIG9wYWNpdHk6IDEgfSk7IFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT24gbm9uIG1vYmlsZSBkZXZpY2VzXG4gICAgICAgIHRoaXMuJG1hcC5jc3MoeyBoZWlnaHQ6IHdpbmRvd0hlaWdodCAtICggbWFpbkluZm9IZWlnaHQgKyBoZWFkZXJIZWlnaHQpLCBvcGFjaXR5OiAxIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbGFuZHNjYXBlLCBsZXQncyBzY3JvbGwgdG8gc2hvdyB0aGUgbWFwLCBhbmRcbiAgICAvLyBsZWF2ZSB0aGUgaGVhZGVyIGhpZGRlblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNNb2JpbGVEZXZpY2UgJiYgbGFuZHNjYXBlTW9kZSAmJiAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPCBoZWFkZXJIZWlnaHQpIHtcbiAgICAgIHRoaXMuJGJvZHkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogaGVhZGVySGVpZ2h0IH0sIDYwMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFwX3ZpZXcpIHRoaXMubWFwX3ZpZXcuaW52YWxpZGF0ZU1hcCgpO1xuICB9XG5cbn0pO1xuIl19
