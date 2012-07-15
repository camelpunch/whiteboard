/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: constrained plotter", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("begins at a point with 0 width / height", function () {
      var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 0, 0),
        factory = jasmine.createSpyObj('factory', ['build']),
        plotter = WHITEBOARD.createConstrainedPlotter(factory);

      plotter.beginDrawing(4, 8);
      expect(factory.build).toHaveBeenCalledWith(expectedDimensions);
    });

    describe("resizing", function () {
      var plotter, factory, shape,
        expectWidthHeight = function (width, height) {
          expect(factory.build.callCount).toBe(1);
          expect(factory.build).toHaveBeenCalledWith(
            WHITEBOARD.createDimensions(20, 20, width, height)
          );
        };

      beforeEach(function () {
        shape = WHITEBOARD.createEllipse();

        factory = jasmine.createSpyObj('factory', ['build', 'destroy']);
        plotter = WHITEBOARD.createConstrainedPlotter(factory);

        factory.build.andReturn(shape);
        plotter.beginDrawing(20, 20);
        factory.build.reset();
      });

      it("destroys and rebuilds the shape", function () {
        factory.build.andCallFake(function () {
          expect(factory.destroy).toHaveBeenCalledWith(shape);
        });
        plotter.resize(21, 5);
        expect(factory.build).toHaveBeenCalled();
      });

      it("uses distance north when north-north-east", function () {
        plotter.resize(21, 5);
        expectWidthHeight(15, -15);
      });

      it("uses distance east when east-north-east", function () {
        plotter.resize(35, 19);
        expectWidthHeight(15, -15);
      });

      it("uses distance south when south-south-east", function () {
        plotter.resize(30, 21);
        expectWidthHeight(10, 10);
      });

      it("uses distance east when east-south-east", function () {
        plotter.resize(21, 30);
        expectWidthHeight(10, 10);
      });

      it("uses distance west when west-south-west", function () {
        plotter.resize(10, 25);
        expectWidthHeight(-10, 10);
      });

      it("uses distance south when south-south-west", function () {
        plotter.resize(10, 35);
        expectWidthHeight(-15, 15);
      });

      it("uses distance west when west-north-west", function () {
        plotter.resize(4, 10);
        expectWidthHeight(-16, -16);
      });

      it("uses distance north when north-north-west", function () {
        plotter.resize(19, 9);
        expectWidthHeight(-11, -11);
      });
    });
  });
}());
