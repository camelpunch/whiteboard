/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createSquarePlotter = function (el, context) {
    var self, x, y, width, height, rect,
      ns = "http://www.w3.org/2000/svg";

    self = {
      beginDrawing: function (startX, startY) {
        width = 0;
        height = 0;
        x = startX;
        y = startY;

        rect = context.createElementNS(ns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        el.appendChild(rect);
      },

      resize: function (right, bottom) {
        var side = Math.max(right - x, bottom - y);
        el.removeChild(rect);
        rect = context.createElementNS(ns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', side);
        rect.setAttribute('height', side);
        el.appendChild(rect);
      }
    };
    return self;
  };
}());
