/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapePositioner = function () {
    var shape;

    return {
      setShape: function (newShape) {
        shape = newShape;
        return this;
      },
      reposition: function (x, y) {
        shape.reposition(x, y);
      }
    };
  };
}());
