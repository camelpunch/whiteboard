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
      var plotter, factory;

      beforeEach(function () {
        var shape = jasmine.createSpyObj('shape', ['destroy']);

        factory = jasmine.createSpyObj('factory', ['build']);
        plotter = WHITEBOARD.createConstrainedPlotter(factory);

        factory.build.andReturn(shape);
        plotter.beginDrawing(20, 20);
        factory.build.reset();
      });

      it("uses distance north when north-north-east", function () {
        plotter.resize(21, 5);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, 15, -15)
        );
      });

      it("uses distance east when east-north-east", function () {
        plotter.resize(35, 19);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, 15, -15)
        );
      });

      it("uses distance south if south-south-east", function () {
        plotter.resize(30, 21);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, 10, 10)
        );
      });

      it("uses distance east if east-south-east", function () {
        plotter.resize(21, 30);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, 10, 10)
        );
      });

      it("uses distance west when west-south-west", function () {
        plotter.resize(10, 25);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, -10, 10)
        );
      });

      it("uses distance south when south-south-west", function () {
        plotter.resize(10, 35);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, -15, 15)
        );
      });

      it("uses distance west when west-north-west", function () {
        plotter.resize(5, 10);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, -15, -15)
        );
      });

      it("uses distance north when north-north-west", function () {
        plotter.resize(19, 10);
        expect(factory.build).toHaveBeenCalledWith(
          WHITEBOARD.createDimensions(20, 20, -10, -10)
        );
      });
    });
  });
}());
