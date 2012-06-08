/*jslint indent: 2, browser: true*/
/*global WHITEBOARD, jQuery*/
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createSquarePlotter = function (el, context) {
    var self, width, height,
      ns = "http://www.w3.org/2000/svg";

    self = {
      start: function () {
        var rect, x, y,
          eventWidth = function (e) {
            return e.offsetX - x;
          },
          eventHeight = function (e) {
            return e.offsetY - y;
          };

        rect = context.createElementNS(ns, 'rect');

        jQuery(el)
          .mousedown(function (e) {
            x = e.offsetX;
            y = e.offsetY;
            rect.setAttribute('x', e.offsetX);
            rect.setAttribute('y', e.offsetY);
          })
          .mouseup(function (e) {
            var side = Math.max(eventWidth(e), eventHeight(e));
            rect.setAttribute('width', side);
            rect.setAttribute('height', side);
            el.appendChild(rect);
          });
      }
    };
    return self;
  };
}());
