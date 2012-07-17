/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape collection", function () {
    var shapes, namespace = "http://www.w3.org/2000/svg";

    beforeEach(function () {
      shapes = WHITEBOARD.createShapeCollection();
    });

    it("can add shapes", function () {
      var shape1 = jasmine.createSpyObj('shape 1', ['render']),
        shape2 = jasmine.createSpyObj('shape 2', ['render']);

      shapes.add(shape1);
      expect(shape1.render).toHaveBeenCalled();
      shapes.add(shape2);
      expect(shape2.render).toHaveBeenCalled();
    });

    it("can remove shapes", function () {
      var shape1 = jasmine.createSpyObj('shape 1', ['render']),
        shape2 = jasmine.createSpyObj('shape 2', ['render', 'remove']);

      shapes.add(shape1);
      shapes.add(shape2);
      shapes.remove(shape2);

      expect(shape2.remove).toHaveBeenCalled();
    });

    it("can be cleared", function () {
      var shape1 = jasmine.createSpyObj('shape 1', ['render', 'remove']),
        shape2 = jasmine.createSpyObj('shape 2', ['render', 'remove']),
        shape3 = jasmine.createSpyObj('shape 3', ['render', 'remove']);

      shapes
        .add(shape1)
        .add(shape2)
        .add(shape3)
        .remove(shape2)
        .clear();

      expect(shape1.remove.callCount).toBe(1);
      expect(shape2.remove.callCount).toBe(1);
      expect(shape3.remove.callCount).toBe(1);
    });
  });
}());
