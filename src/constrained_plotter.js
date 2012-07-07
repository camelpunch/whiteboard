/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createConstrainedPlotter = function (factory) {
    var originX, originY, shape;

    return {
      beginDrawing: function (x, y) {
        originX = x;
        originY = y;
        shape = factory.build(
          WHITEBOARD.createDimensions(x, y, 0, 0)
        );
      },

      resize: function (right, bottom) {
        var distanceEast = right - originX,
          distanceSouth = bottom - originY,
          distanceWest = -distanceEast,
          distanceNorth = -distanceSouth,
          furthestNorthWest = Math.min(distanceEast, distanceSouth),
          furthestSouthEast = Math.max(distanceEast, distanceSouth),
          northWest = distanceNorth > 0 && distanceWest > 0,
          southWest = distanceSouth > 0 && distanceWest > 0,
          northEast = distanceNorth > 0 && distanceEast > 0,
          southEast = distanceSouth > 0 && distanceEast > 0,
          westSouthWest = southWest && distanceWest > distanceSouth,
          southSouthWest = southWest && distanceSouth > distanceWest,
          northNorthEast = northEast && distanceNorth > distanceEast,
          eastNorthEast = northEast && distanceEast > distanceNorth,
          resizeTo = function (x, y) {
            if (!y) {
              y = x;
            }
            factory.destroy(shape);
            shape = factory.build(
              WHITEBOARD.createDimensions(originX, originY, x, y)
            );
          };

        if (northWest) {
          resizeTo(furthestNorthWest);
        }
        if (southEast) {
          resizeTo(furthestSouthEast);
        }
        if (westSouthWest) {
          resizeTo(distanceEast, distanceWest);
        }
        if (southSouthWest) {
          resizeTo(distanceNorth, distanceSouth);
        }
        if (northNorthEast) {
          resizeTo(distanceNorth, distanceSouth);
        }
        if (eastNorthEast) {
          resizeTo(distanceEast, distanceWest);
        }
      }
    };
  };
}());
