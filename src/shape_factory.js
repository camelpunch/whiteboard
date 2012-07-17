/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapeFactory = function (canvasEl, collection, builder) {
    return {
      build: function (dimensions) {
        var shape = builder(canvasEl, dimensions);
        collection.add(shape);
        return shape;
      },

      destroy: function (shape) {
        collection.remove(shape);
      }
    };
  };
}());
