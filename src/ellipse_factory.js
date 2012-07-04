/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEllipseFactory = function (container) {
    var namespace = "http://www.w3.org/2000/svg";

    return {
      build: function (dimensions) {
        var shape = document.createElementNS(namespace, 'ellipse'),
          radiusX = dimensions.width / 2,
          radiusY = dimensions.height / 2,
          centerX = dimensions.x + radiusX,
          centerY = dimensions.y + radiusY;

        shape.setAttribute('cx', centerX);
        shape.setAttribute('cy', centerY);
        shape.setAttribute('rx', radiusX);
        shape.setAttribute('ry', radiusY);
        container.appendChild(shape);

        return {
          destroy: function () {
            container.removeChild(shape);
          }
        };
      }
    };
  };
}());
