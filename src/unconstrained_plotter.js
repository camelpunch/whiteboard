/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createUnconstrainedPlotter = function (factory) {
    var originX, originY, shape;

    return {
      beginDrawing: function (x, y) {
        originX = x;
        originY = y;
        shape = factory.build(WHITEBOARD.createDimensions(x, y, 0, 0));
      },

      resize: function (right, bottom) {
        factory.destroy(shape);
        shape = factory.build(
          WHITEBOARD.createDimensions(originX, originY, right - originX, bottom - originY)
        );
      }
    };
  };
}());
