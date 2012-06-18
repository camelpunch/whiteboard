/*jslint indent: 2, browser: true*/
/*global WHITEBOARD, jQuery*/
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMouseVector = function (el, events) {
    var self = {
      tells: events.tells,
      waitForInput: function () {
        var started = false;

        jQuery(el)
          .mousedown(function (e) {
            started = true;
            events.fire('start', e.offsetX, e.offsetY);
          })
          .mousemove(function (e) {
            if (started) {
              events.fire('tick', e.offsetX, e.offsetY);
            }
          })
          .mouseup(function (e) {
            if (started) {
              events.fire('complete', e.offsetX, e.offsetY);
              started = false;
            }
          });
      }
    };
    return self;
  };
}());
