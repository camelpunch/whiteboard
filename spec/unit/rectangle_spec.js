/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle", function () {
    it("has dimensions that were passed", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createRectangle(dimensions, canvas);

      expect(shape).toHaveDimensions(dimensions);
    });

    it("has a node with correct dimensions", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createRectangle(dimensions, canvas);

      expect(jQuery(shape.node)).toHaveAttr('width');
      expect(shape.node).toHaveDimensions(dimensions);
    });

    it("can be destroyed", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add', 'remove']),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        shape = WHITEBOARD.createRectangle(dimensions, canvas);

      shape.destroy();
      expect(canvas.remove).toHaveBeenCalledWith(shape);
    });
  });
}());
