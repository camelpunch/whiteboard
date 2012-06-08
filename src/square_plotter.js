/*jslint indent: 2, browser: true*/
/*global WHITEBOARD, jQuery*/
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createSquarePlotter = function (el, context) {
    var self,
      ns = "http://www.w3.org/2000/svg";

    self = {
      start: function () {
        var rect, x, y;

        rect = context.createElementNS(ns, 'rect');

        jQuery(el)
          .mousedown(function (e) {
            x = e.offsetX;
            y = e.offsetY;
            rect.setAttribute('x', e.offsetX);
            rect.setAttribute('y', e.offsetY);
          })
          .mouseup(function (e) {
            rect.setAttribute('width', e.offsetX - x);
            rect.setAttribute('height', e.offsetY - y);
            el.appendChild(rect);
          });
      }
    };
    return self;
  };
}());
