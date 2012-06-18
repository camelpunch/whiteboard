/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMouseVector = function (el, events) {
    var self = {
      tells: events.tells,
      waitForInput: function () {
        var state = null;

        jQuery(el)
          .mousedown(function (e) {
            if (state !== 'complete') {
              state = 'started';
              events.fire('start', e.offsetX, e.offsetY);
            }
          })
          .mousemove(function (e) {
            if (state === 'started') {
              events.fire('tick', e.offsetX, e.offsetY);
            }
          })
          .mouseup(function (e) {
            if (state === 'started') {
              events.fire('complete', e.offsetX, e.offsetY);
              state = 'complete';
            }
          });
      }
    };
    return self;
  };
}());
