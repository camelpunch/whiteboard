/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape positioner", function () {
    it("can move a shape around", function () {
      var shape = jasmine.createSpyObj('shape', ['reposition']),
        positioner = WHITEBOARD.createShapePositioner();

      positioner
        .setShape(shape)
        .reposition(23, 46);

      expect(shape.reposition).toHaveBeenCalledWith(23, 46);
    });
  });
}());
