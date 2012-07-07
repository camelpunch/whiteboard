/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse factory", function () {
    it("adds the shape to the passed canvas", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        factory = WHITEBOARD.createEllipseFactory(canvas),
        shape = factory.build(dimensions);

      expect(canvas.add).toHaveBeenCalledWith(shape);
    });

    it("returns the shape", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        factory = WHITEBOARD.createEllipseFactory(canvas),
        shape = factory.build(dimensions);

      expect(shape).toHaveEllipseDimensions(dimensions);
    });
  });
}());
