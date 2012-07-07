/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle factory", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("adds the shape to the passed canvas", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        factory = WHITEBOARD.createRectangleFactory(canvas),
        shape = factory.build(dimensions);

      expect(canvas.add).toHaveBeenCalledWith(shape);
    });

    it("returns the shape", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add']),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
        factory = WHITEBOARD.createRectangleFactory(canvas),
        shape = factory.build(dimensions);

      expect(shape).toHaveDimensions(dimensions);
    });

    it("destroys the shape", function () {
      var canvas = jasmine.createSpyObj('canvas', ['add', 'remove']),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        factory = WHITEBOARD.createRectangleFactory(canvas),
        shape = factory.build(dimensions);

      factory.destroy(shape);
      expect(canvas.remove).toHaveBeenCalledWith(shape);
    });
  });
}());
