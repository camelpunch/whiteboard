/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle", function () {
    it("has dimensions that were passed", function () {
      var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createRectangle(dimensions);

      expect(shape).toHaveDimensions(dimensions);
    });

    it("has a node with correct dimensions", function () {
      var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createRectangle(dimensions);

      expect(jQuery(shape.node)).toHaveAttr('width');
      expect(shape.node).toHaveDimensions(dimensions);
    });
  });
}());
