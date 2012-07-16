/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapePositioner = function () {
    var shape, shapeOriginCoords, startCoords;

    return {
      setShapeAndStartCoords: function (newShape, x, y) {
        shape = newShape;
        shapeOriginCoords = [shape.dimensions.x, shape.dimensions.y];
        startCoords = [x, y];
        return this;
      },

      reposition: function (endX, endY) {
        var distanceX = endX - startCoords[0],
          distanceY = endY - startCoords[1];

        shape.reposition(
          shapeOriginCoords[0] + distanceX,
          shapeOriginCoords[1] + distanceY
        );
        return this;
      }
    };
  };
}());
