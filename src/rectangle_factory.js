/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangleFactory = function (canvas) {
    return {
      build: function (dimensions) {
        var shape = WHITEBOARD.createRectangle(dimensions, canvas);
        canvas.add(shape);
        return shape;
      },
    };
  };
}());
