/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEllipse = function (dimensions) {
    dimensions = dimensions || WHITEBOARD.createDimensions(0, 0, 0, 0);

    var namespace = "http://www.w3.org/2000/svg",
      radiusX = dimensions.width / 2,
      radiusY = dimensions.height / 2,
      centerX = dimensions.x + radiusX,
      centerY = dimensions.y + radiusY,

      svgShape = document.createElementNS(namespace, 'ellipse'),
      shape = {
        node: svgShape,
        dimensions: dimensions
      };

    svgShape.setAttribute('cx', centerX);
    svgShape.setAttribute('cy', centerY);
    svgShape.setAttribute('rx', radiusX);
    svgShape.setAttribute('ry', radiusY);

    return shape;
  };
}());
