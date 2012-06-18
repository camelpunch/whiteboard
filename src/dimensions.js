/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createDimensions = function (x, y, width, height) {
    var self = Object.create({}, {
      x: { value: x, enumerable: true },
      y: { value: y, enumerable: true },
      width: { value: width, enumerable: true },
      height: { value: height, enumerable: true },
      equals: {
        get: function () {
          return function (other) {
            return this.x === other.x && this.y === other.y &&
              this.width === other.width && this.height === other.height;
          };
        }
      },
      toString: {
        get: function () {
          return function () {
            return [
              ['x: ' + x], ['y: ' + y], [width, height].join('x')
            ].join(', ');
          };
        }
      }
    });
    return self;
  };
}());
