/*global WHITEBOARD */
(function () {
  "use strict";
  beforeEach(function () {
    this.addMatchers({
      toHaveEllipseDimensions: function (expected) {
        var success, actualX, actualY, actualWidth, actualHeight, shape,
          get = function (key) { return parseFloat(shape.attr(key)); },
          centerX, centerY, radiusX, radiusY;

        if (this.actual.dimensions) {
          success = this.actual.dimensions.equals(expected);
        } else {
          shape = jQuery(this.actual);
          centerX = get('cx');
          centerY = get('cy');
          radiusX = get('rx');
          radiusY = get('ry');

          actualX = centerX - radiusX;
          actualY = centerY - radiusY;
          actualWidth = radiusX * 2;
          actualHeight = radiusY * 2;

          success =
            actualX === expected.x &&
            actualY === expected.y &&
            actualWidth === expected.width &&
            actualHeight === expected.height;

          if (!success) {
            console.log("expected: '" + expected + "'\nbut got: x: " + actualX +
                        ", y: " + actualY + ", " + actualWidth + 'x' +
                        actualHeight);
          }
        }

        return success;
      },

      toHaveDimensions: function (expected) {
        var success, actualX, actualY, actualWidth, actualHeight, shape,
          actualDimensions,
          get = function (key) { return parseFloat(shape.attr(key)); };

        if (this.actual.dimensions) {
          actualDimensions = this.actual.dimensions;
        } else {
          shape = jQuery(this.actual);
          actualDimensions = WHITEBOARD.createDimensions(
            get('x'),
            get('y'),
            get('width'),
            get('height')
          );
        }

        success = actualDimensions.equals(expected);
        if (!success) {
          console.log("expected", expected, "\nbut got", actualDimensions);
        }

        return success;
      }
    });
  });
}());
