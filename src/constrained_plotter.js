/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createConstrainedPlotter = function (factory) {
    var originX, originY, shape,
      createCompass = function (startX, startY, x, y) {
        return {
          northWest: function () { return this.distanceNorth() > 0 && this.distanceWest() > 0; },
          southEast: function () { return this.distanceSouth() > 0 && this.distanceEast() > 0; },
          westSouthWest: function () { return this.southWest() && this.distanceWest() > this.distanceSouth(); },
          southSouthWest: function () { return this.southWest() && this.distanceSouth() > this.distanceWest(); },
          northNorthEast: function () { return this.northEast() && this.distanceNorth() > this.distanceEast(); },
          eastNorthEast: function () { return this.northEast() && this.distanceEast() > this.distanceNorth(); },
          furthestNorthWest: function () { return Math.min(this.distanceEast(), this.distanceSouth()); },
          furthestSouthEast: function () { return Math.max(this.distanceEast(), this.distanceSouth()); },
          distanceEast: function () { return x - startX; },
          distanceWest: function () { return -this.distanceEast(); },
          distanceSouth: function () { return y - startY; },
          distanceNorth: function () { return -this.distanceSouth(); },
          southWest: function () { return this.distanceSouth() > 0 && this.distanceWest() > 0; },
          northEast: function () { return this.distanceNorth() > 0 && this.distanceEast() > 0; },
        };
      };

    return {
      beginDrawing: function (x, y) {
        originX = x;
        originY = y;
        shape = factory.build(WHITEBOARD.createDimensions(x, y, 0, 0));
      },

      resize: function (x, y) {
        var compass = createCompass(originX, originY, x, y),
          resizeTo = function (x, y) {
            if (!y) {
              y = x;
            }
            factory.destroy(shape);
            shape = factory.build(
              WHITEBOARD.createDimensions(originX, originY, x, y)
            );
          };

        if (compass.northWest()) { resizeTo(compass.furthestNorthWest()); }
        if (compass.southEast()) { resizeTo(compass.furthestSouthEast()); }
        if (compass.westSouthWest()) { resizeTo(compass.distanceEast(), compass.distanceWest()); }
        if (compass.southSouthWest()) { resizeTo(compass.distanceNorth(), compass.distanceSouth()); }
        if (compass.northNorthEast()) { resizeTo(compass.distanceNorth(), compass.distanceSouth()); }
        if (compass.eastNorthEast()) { resizeTo(compass.distanceEast(), compass.distanceWest()); }
      }
    };
  };
}());
