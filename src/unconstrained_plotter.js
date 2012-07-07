/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createUnconstrainedPlotter = function (factory) {
    var x, y, shape;

    return {
      beginDrawing: function (startX, startY) {
        x = startX;
        y = startY;
        shape = factory.build(
          WHITEBOARD.createDimensions(startX, startY, 0, 0)
        );
      },

      resize: function (right, bottom) {
        factory.destroy(shape);
        shape = factory.build(
          WHITEBOARD.createDimensions(x, y, right - x, bottom - y)
        );
      }
    };
  };
}());
