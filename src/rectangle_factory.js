/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangleFactory = function (container) {
    var namespace = "http://www.w3.org/2000/svg";

    return {
      build: function (dimensions) {
        var shape = document.createElementNS(namespace, 'rect');

        shape.setAttribute('x', dimensions.x);
        shape.setAttribute('y', dimensions.y);
        shape.setAttribute('width', dimensions.width);
        shape.setAttribute('height', dimensions.height);
        container.appendChild(shape);

        return {
          destroy: function () {
            container.removeChild(shape);
          }
        };
      },
    };
  };
}());
