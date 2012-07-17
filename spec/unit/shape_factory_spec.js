/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape factory", function () {
    var collection, canvasEl, func, shape, dimensions, factory,
      namespace = "http://www.w3.org/2000/svg";

    beforeEach(function () {
      collection = jasmine.createSpyObj('collection', ['add']);
      canvasEl = document.createElementNS(namespace, 'svg');
      shape = {};
      dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4);
      func = function (buildCanvasEl, buildDimensions) {
        if (buildCanvasEl === canvasEl &&
            buildDimensions === dimensions) {
          return shape;
        } else {
          throw 'bad args!';
        }
      };
      factory = WHITEBOARD.createShapeFactory(canvasEl, collection, func);
    });

    it("adds the shape to the passed collection", function () {
      factory.build(dimensions);
      expect(collection.add).toHaveBeenCalledWith(shape);
    });

    it("returns the shape", function () {
      expect(factory.build(dimensions)).toBe(shape);
    });

    it("destroys the shape", function () {
      var newShape = factory.build(dimensions);

      collection.remove = jasmine.createSpy();
      factory.destroy(newShape);
      expect(collection.remove).toHaveBeenCalledWith(newShape);
    });
  });
}());
