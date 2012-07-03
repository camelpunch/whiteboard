/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectanglePlotter = function (el) {
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
        rectangle.destroy();
        rectangle = WHITEBOARD.createRectangle(
          el,
          WHITEBOARD.createDimensions(x, y, right - x, bottom - y)
        );
      }
    };
    return self;
  };
}());
