/*jslint indent: 2, browser: true*/
/*global WHITEBOARD, jQuery*/
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
        el.removeChild(rect);
        rect = context.createElementNS(ns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', right - x);
        rect.setAttribute('height', bottom - y);
        el.appendChild(rect);
      }
    };
    return self;
  };
}());
