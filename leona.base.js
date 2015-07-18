/**
 * Basic enhancement.
 */
(function() {
  if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (prefix) {
      return this.slice(0, prefix.length) === prefix;
    };
  }
  if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
  }
})();

/*global jQuery*/

if (typeof Leona == 'undefined') {
  var Leona = {};
}

(function($) {
  Leona.start = function(obj) {
    if (obj.init) {
      $(function() {
        obj.init();
      });
    }
    return obj;
  };
  Leona.callback = function(func) {
    if (func) {
      func();
    }
  };
  Leona.requireExternal = function(src, success) {
    $.getScript(src, success);
  };
})(jQuery);