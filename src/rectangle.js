/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangle = function (arg) {
    var dimensions,
      svgShape,
      namespace = "http://www.w3.org/2000/svg";

    if (arg && arg.hasOwnProperty('equals')) {
      dimensions = arg;
    } else if (arg) {
      svgShape = arg;
      dimensions = WHITEBOARD.createDimensions(
        svgShape.x.baseVal.value,
        svgShape.y.baseVal.value,
        svgShape.width.baseVal.value,
        svgShape.height.baseVal.value
      );
    } else {
      dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0);
    }

    if (!svgShape) {
      svgShape = document.createElementNS(namespace, 'rect');
      svgShape.setAttribute('x', dimensions.x);
      svgShape.setAttribute('y', dimensions.y);
      svgShape.setAttribute('width', dimensions.width);
      svgShape.setAttribute('height', dimensions.height);
    }

    return Object.create({}, {
      node: {
        value: svgShape,
        enumerable: true
      },
      dimensions: {
        get: function () {
          return WHITEBOARD.createDimensions(
            svgShape.x.baseVal.value,
            svgShape.y.baseVal.value,
            svgShape.width.baseVal.value,
            svgShape.height.baseVal.value
          );
        },
        enumerable: true
      },
      reposition: {
        value: function (x, y) {
          svgShape.setAttribute('x', x);
          svgShape.setAttribute('y', y);
        }
      }
    });
  };
}());
