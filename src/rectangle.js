/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createRectangle = function (canvasEl, arg) {
    var dimensions,
      svgShape,
      namespace = "http://www.w3.org/2000/svg",
      shapeFromDimensions = function (dimensions) {
        var svgShape = document.createElementNS(namespace, 'rect');
        svgShape.setAttribute('x', dimensions.x);
        svgShape.setAttribute('y', dimensions.y);
        svgShape.setAttribute('width', dimensions.width);
        svgShape.setAttribute('height', dimensions.height);
        return svgShape;
      };

    svgShape = arg && arg.hasOwnProperty('equals')
      ? shapeFromDimensions(arg)
      : arg || shapeFromDimensions(
        WHITEBOARD.createDimensions(0, 0, 0, 0)
      );

    return Object.create({}, {
      render: {
        value: function () {
          canvasEl.appendChild(svgShape);
        }
      },
      remove: {
        value: function () {
          canvasEl.removeChild(svgShape);
        }
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
      },
      toString: {
        value: function () {
          return 'rectangle';
        }
      }
    });
  };
}());
