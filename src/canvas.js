/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createCanvas = function (canvasEl) {
    var jQueryCanvasEl = jQuery(canvasEl),
      shapes = [];

    return {
      add: function (shape) {
        shapes.push(shape);
        canvasEl.appendChild(shape.node);
      },
      remove: function (shape) {
        var index = jQuery.inArray(shape, shapes);
        canvasEl.removeChild(shape.node);
        shapes.splice(index, 1);
      },
      clear: function () {
        while (shapes.length > 0) {
          this.remove(shapes[0]);
        }
      },
      enterDrawState: function () {
        jQueryCanvasEl.attr('class', 'drawing');
      },
      exitDrawState: function () {
        jQueryCanvasEl.attr('class', null);
      },
      toString: function () {
        return 'canvas';
      }
    };
  };
}());
