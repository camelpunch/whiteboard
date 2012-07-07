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
        var i, resolvedListener,
          callMethod = function (obj) {
            var receiver = typeof obj.listener === 'function'
              ? obj.listener()
              : obj.listener;

            return obj.message
              ? receiver[obj.message](arg1, arg2)
              : receiver[arg1](arg2);
          };

        for (i = 0; i < listeners.length; i += 1) {
          if (listeners[i].event === event) {
            callMethod(listeners[i]);
          }
        }
      }
    };
  };
}());
