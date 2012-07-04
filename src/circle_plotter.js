/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createCirclePlotter = function (el) {
    var self, x, y, shape;

    self = {
      beginDrawing: function (startX, startY) {
        x = startX;
        y = startY;
        shape = WHITEBOARD.createEllipse(
          el,
          WHITEBOARD.createDimensions(startX, startY, 0, 0)
        );
      },

      resize: function (right, bottom) {
        var side = Math.max(right - x, bottom - y);
        shape.destroy();
        shape = WHITEBOARD.createEllipse(
          el,
          WHITEBOARD.createDimensions(x, y, side, side)
        );
      }
    };
    return self;
  };
}());
