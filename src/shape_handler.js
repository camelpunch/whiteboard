/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapeHandler = function (canvasEl, events) {
    jQuery(canvasEl).on('mousedown', 'rect', function (event) {
      events.fire('shapeMoveBegin',
                  WHITEBOARD.createRectangle(event.currentTarget));
    });

    jQuery(canvasEl).on('mousedown', 'ellipse', function (event) {
      events.fire('shapeMoveBegin',
                  WHITEBOARD.createEllipse(event.currentTarget));
    });

    return { tells: events.tells };
  };
}());
