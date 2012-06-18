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
        var i;
        for (i = 0; i < listeners.length; i += 1) {
          if (listeners[i].event === event) {
            listeners[i].listener[listeners[i].message](arg1, arg2);
          }
        }
      }
    };
  };
}());
