/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createShapeCollection = function () {
    var shapes = [];

    return {
      add: function (shape) {
        shapes.push(shape);
        shape.render();
        return this;
      },
      remove: function (shape) {
        var index = jQuery.inArray(shape, shapes);
        shape.remove();
        shapes.splice(index, 1);
        return this;
      },
      clear: function () {
        while (shapes.length > 0) {
          this.remove(shapes[0]);
        }
      },
      toString: function () {
        return 'shapes collection';
      }
    };
  };
}());
