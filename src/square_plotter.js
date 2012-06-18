/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createSquarePlotter = function (el) {
    var self, x, y, rectangle;

    self = {
      beginDrawing: function (startX, startY) {
        x = startX;
        y = startY;
        rectangle = WHITEBOARD.createRectangle(
          el,
          WHITEBOARD.createDimensions(startX, startY, 0, 0)
        );
      },

      resize: function (right, bottom) {
        var side = Math.max(right - x, bottom - y);
        rectangle.destroy();
        rectangle = WHITEBOARD.createRectangle(
          el,
          WHITEBOARD.createDimensions(x, y, side, side)
        );
      }
    };
    return self;
  };
}());
