/*global window, document, WHITEBOARD */
(function () {
  "use strict";
  var ns = "http://www.w3.org/2000/svg";
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
      },

      fire: function (event) {
        var i;
        for (i = 0; i < listeners.length; i += 1) {
          if (listeners[i].event === event) {
            listeners[i].listener[listeners[i].message]();
          }
        }
      }
    };
  };
}());
