(function () {
  "use strict";
  beforeEach(function () {
    this.addMatchers({
      toHaveDimensions: function (expected) {
        var success, actualX, actualY, actualWidth, actualHeight, shape;

        if (this.actual.dimensions) {
          success = this.actual.dimensions.equals(expected);
        } else {
          shape = jQuery(this.actual);
          actualX = parseInt(shape.attr('x'), 10);
          actualY = parseInt(shape.attr('y'), 10);
          actualWidth = parseInt(shape.attr('width'), 10);
          actualHeight = parseInt(shape.attr('height'), 10);

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
      }
    });
  });
}());
