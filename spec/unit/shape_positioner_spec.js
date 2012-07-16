/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape positioner", function () {
    it("can move shape around, relative to original position and mouse", function () {
      var shape = jasmine.createSpyObj('shape', ['reposition']),
        positioner = WHITEBOARD.createShapePositioner();

      shape.dimensions =
        WHITEBOARD.createDimensions(20, 40, 1, 1);

      positioner
        .setShapeAndStartCoords(shape, 23, 46)
        .reposition(43, 56); // moved across 20, down 10

      expect(shape.reposition).toHaveBeenCalledWith(40, 50);
      shape.reposition.reset();

      // shape dimensions are updated
      shape.dimensions =
        WHITEBOARD.createDimensions(40, 50, 1, 1);

      positioner
        .reposition(63, 66); // moved across 20, down 10 again

      expect(shape.reposition).toHaveBeenCalledWith(60, 60);
    });
  });
}());
