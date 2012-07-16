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

      fire: function () {
        var args = Array.prototype.slice.call(arguments),
          event = args[0],
          callArgs = args.slice(1),
          callMethod = function (obj) {
            var receiver = typeof obj.listener === 'function'
              ? obj.listener()
              : obj.listener;

            return obj.message
              ? receiver[obj.message].apply(receiver, callArgs)
              : receiver[callArgs[0]].apply(receiver, callArgs.slice(1));
          },
          i,
          resolvedListener;

        for (i = 0; i < listeners.length; i += 1) {
          if (listeners[i].event === event) {
            callMethod(listeners[i]);
          }
        }
      }
    };
  };
}());
