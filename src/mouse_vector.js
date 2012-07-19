/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMouseVector = function (el, events) {
    var state,
      moveable = function (el) {
        jQuery(el)
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
      };

    return {
      on: events.on,
      waitForMove: function () {
        state = 'started';
        moveable(el);
      },
      waitForDrag: function () {
        state = null;
        moveable(el);
        jQuery(el)
          .mousedown(function (e) {
            if (state !== 'complete') {
              state = 'started';
              events.fire('start', e.offsetX, e.offsetY);
            }
          });
      }
    };
  };
}());
