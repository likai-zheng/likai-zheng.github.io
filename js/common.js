(function ($) { 
  function Tabs($div, options) { 
    this.$div = $div,
    this.options = $.extend(true, {}, this.defaultOptions, options);
    this.init();
  }

  Tabs.prototype = {
    construct: Tabs,
    init: function () { 
      var options = this.options;
      var that = this;
      that._class(options.linkClass).click(function () {
        that._class(options.linkClass).removeClass(options.linkHoverClass);
        $(this).addClass(options.linkHoverClass);

        that._class(options.tabClass).hide();
        var id = $(this).attr(options.linkAttr);
        that._id(id).show();
      });

      that._class(options.linkClass).first().click();
    },

    _class: function (clazz) { 
      return  this.$div.find("." + clazz);
    },

    _id: function (id) { 
      return this.$div.find("#" + id);
    },

    defaultOptions: {
      linkClass: "tab-link-title",
      tabClass: "tab-content",
      linkHoverClass: "tab-content-active",
      linkAttr: "tab"
    }
  }

  $.fn.tabs = function (options) {
    var tabs = new Tabs($(this), options);
    $(this).data("tabs", tabs);
  };
}(jQuery))