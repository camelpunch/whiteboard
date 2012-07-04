/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEllipsePlotter = function (el) {
    var self, x, y, shape;

    self = {
      beginDrawing: function (startX, startY) {
        x = startX;
        y = startY;
        shape = WHITEBOARD.createEllipseFactory(el).build(
          WHITEBOARD.createDimensions(startX, startY, 0, 0)
        );
      },

      resize: function (right, bottom) {
        shape.destroy();
        shape = WHITEBOARD.createEllipseFactory(el).build(
          WHITEBOARD.createDimensions(x, y, right - x, bottom - y)
        );
      }
    };
    return self;
  };
}());
