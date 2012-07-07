/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangle = function (dimensions, canvas) {
    dimensions = dimensions || WHITEBOARD.createDimensions(0, 0, 0, 0);

    var namespace = "http://www.w3.org/2000/svg",
      svgShape = document.createElementNS(namespace, 'rect'),
      shape = {
        node: svgShape,
        dimensions: dimensions,
        destroy: function () {
          canvas.remove(shape);
        }
      };

    svgShape.setAttribute('x', dimensions.x);
    svgShape.setAttribute('y', dimensions.y);
    svgShape.setAttribute('width', dimensions.width);
    svgShape.setAttribute('height', dimensions.height);

    return shape;
  };
}());
