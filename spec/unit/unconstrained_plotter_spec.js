/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: unconstrained plotter", function () {
    var namespace = "http://www.w3.org/2000/svg";

    describe("drawing", function () {
      it("begins at a point with 0 width / height", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 0, 0),
          factory = jasmine.createSpyObj('factory', ['build']),
          plotter = WHITEBOARD.createUnconstrainedPlotter(factory);

        plotter.beginDrawing(4, 8);
        expect(factory.build).toHaveBeenCalledWith(expectedDimensions);
      });

      describe("resizing", function () {
        it("changes width / height", function () {
          var expectedDimensions = WHITEBOARD.createDimensions(2, 6, 8, 14),
            factory = jasmine.createSpyObj('factory', ['build', 'destroy']),
            shape = WHITEBOARD.createEllipse(),
            plotter = WHITEBOARD.createUnconstrainedPlotter(factory);

          factory.build.andReturn(shape);
          plotter.beginDrawing(2, 6);

          plotter.resize(10, 20);
          factory.build.andCallFake(function () {
            expect(factory.destroy).toHaveBeenCalledWith(shape);
          });
          expect(factory.build).toHaveBeenCalledWith(expectedDimensions);

          factory.build.reset();
          factory.build.andReturn(shape);
          factory.destroy.reset();

          plotter.resize(10, 20);
          factory.build.andCallFake(function () {
            expect(factory.destroy).toHaveBeenCalledWith(shape);
          });
          expect(factory.build).toHaveBeenCalledWith(expectedDimensions);
        });
      });
    });
  });
}());
