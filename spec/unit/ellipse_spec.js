/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse", function () {
    it("has dimensions that were passed", function () {
      var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createEllipse(dimensions);

      expect(shape).toHaveEllipseDimensions(dimensions);
    });

    it("has a node with correct dimensions", function () {
      var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createEllipse(dimensions);

      expect(jQuery(shape.node)).toHaveAttr('cx');
      expect(shape.node).toHaveEllipseDimensions(dimensions);
    });
  });
}());
