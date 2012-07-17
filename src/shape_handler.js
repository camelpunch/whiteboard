/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapeHandler = function (canvasEl, shapes, events) {
    jQuery(canvasEl).on('mousedown', 'rect,ellipse', function (event) {
      events.fire('selectShapeToken',
                  shapes.shapeForNode(event.currentTarget),
                  event.offsetX,
                  event.offsetY);
    });

    return { tells: events.tells };
  };
}());
