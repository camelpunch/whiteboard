/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createEllipse = function (canvasEl, arg) {
    var dimensions, svgShape,
      namespace = "http://www.w3.org/2000/svg",
      shapeFromDimensions = function (dimensions) {
        var radiusX = dimensions.width / 2,
          radiusY = dimensions.height / 2,
          centerX = dimensions.x + radiusX,
          centerY = dimensions.y + radiusY,
          svgShape = document.createElementNS(namespace, 'ellipse');

        svgShape.setAttribute('cx', centerX);
        svgShape.setAttribute('cy', centerY);
        svgShape.setAttribute('rx', radiusX);
        svgShape.setAttribute('ry', radiusY);

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
          var radiusX = svgShape.rx.baseVal.value,
            radiusY = svgShape.ry.baseVal.value,
            centerX = svgShape.cx.baseVal.value,
            centerY = svgShape.cy.baseVal.value;

          return WHITEBOARD.createDimensions(
            centerX - radiusX,
            centerY - radiusY,
            radiusX * 2,
            radiusY * 2
          );
        },
        enumerable: true
      },
      reposition: {
        value: function (x, y) {
          svgShape.setAttribute('cx', x + svgShape.rx.baseVal.value);
          svgShape.setAttribute('cy', y + svgShape.ry.baseVal.value);
        }
      },
      toString: {
        value: function () {
          return 'ellipse';
        }
      }
    });
  };
}());
