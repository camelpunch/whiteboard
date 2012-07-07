/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse", function () {
    it("has dimensions that were passed", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createEllipse(dimensions, canvas);

      expect(shape).toHaveEllipseDimensions(dimensions);
    });

    it("has a node with correct dimensions", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        shape = WHITEBOARD.createEllipse(dimensions, canvas);

      expect(jQuery(shape.node)).toHaveAttr('cx');
      expect(shape.node).toHaveEllipseDimensions(dimensions);
    });

    it("can be destroyed", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add', 'remove']),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        shape = WHITEBOARD.createEllipse(dimensions, canvas);

      shape.destroy();
      expect(canvas.remove).toHaveBeenCalledWith(shape);
    });
  });
}());
