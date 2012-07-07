/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEllipseFactory = function (canvas) {
    return {
      build: function (dimensions) {
        var shape = WHITEBOARD.createEllipse(dimensions);
        canvas.add(shape);
        return shape;
      },
      destroy: function (shape) {
        canvas.remove(shape);
      }
    };
  };
}());
