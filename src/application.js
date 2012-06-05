/*global window, document */
(function () {
  "use strict";

  window.WHITEBOARD = {
    createApplication: function (container, context) {
      var ns = "http://www.w3.org/2000/svg",
      canvas = context.createElementNS(ns, 'svg'),
      menu = context.createElement('div'),
      squareMenuItem = context.createElement('a'),
      rect = context.createElementNS(ns, 'rect');

      menu.setAttribute('id', 'menu');
      squareMenuItem.setAttribute('id', 'square');

      rect.setAttribute('width', '500');
      rect.setAttribute('height', '500');

      canvas.setAttribute('id', 'canvas');

      menu.appendChild(squareMenuItem);

      canvas.appendChild(rect);

      container.appendChild(menu);
      container.appendChild(canvas);
    }
  }
}());
