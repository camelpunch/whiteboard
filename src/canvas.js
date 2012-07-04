/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createCanvas = function (canvasEl) {
    var jQueryCanvasEl = jQuery(canvasEl);

    return {
      enterDrawState: function () {
        jQueryCanvasEl.attr('class', 'drawing');
      },
      exitDrawState: function () {
        jQueryCanvasEl.attr('class', null);
      }
    };
  };
}());