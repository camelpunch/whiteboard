/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEventRegistry = function () {
    var listeners = [];

    return {
      tells: function (listener, options) {
        listeners.push({
          event: options.on,
          listener: listener,
          message: options.to
        });
        return this;
      },

      fire: function (event, arg1, arg2) {
        var i, resolvedListener;
        for (i = 0; i < listeners.length; i += 1) {
          if (listeners[i].event === event) {
            resolvedListener = listeners[i].listener;
            if (typeof resolvedListener === 'function') {
              resolvedListener()[listeners[i].message](arg1, arg2);
            } else {
              resolvedListener[listeners[i].message](arg1, arg2);
            }
          }
        }
      }
    };
  };
}());
