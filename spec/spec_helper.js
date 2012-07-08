/*global WHITEBOARD */
(function () {
  "use strict";
  beforeEach(function () {
    this.addMatchers({
      toHaveEllipseDimensions: function (expected) {
        var actual = this.actual,
          get = function (key) { return parseFloat(jQuery(actual).attr(key)); };

        this.actual = this.actual.dimensions ||
          WHITEBOARD.createDimensions(
            get('cx') - get('rx'),
            get('cy') - get('ry'),
            get('rx') * 2,
            get('ry') * 2
          );
        return this.actual.equals(expected);
      },

      toHaveDimensions: function (expected) {
        var actual = this.actual,
          get = function (key) { return parseFloat(jQuery(actual).attr(key)); };

        this.actual = this.actual.dimensions ||
          WHITEBOARD.createDimensions(
            get('x'),
            get('y'),
            get('width'),
            get('height')
          );
        return this.actual.equals(expected);
      }
    });
  });
}());
