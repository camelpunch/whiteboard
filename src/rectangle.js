/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangle = function (container, dimensions) {
    var namespace = "http://www.w3.org/2000/svg",
      rect = document.createElementNS(namespace, 'rect');

    rect.setAttribute('x', dimensions.x);
    rect.setAttribute('y', dimensions.y);
    rect.setAttribute('width', dimensions.width);
    rect.setAttribute('height', dimensions.height);
    container.appendChild(rect);

    return {
      destroy: function () {
        container.removeChild(rect);
      }
    };
  };
}());
