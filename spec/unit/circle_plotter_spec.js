/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: circle plotter", function () {
    var namespace = "http://www.w3.org/2000/svg";

    describe("drawing", function () {
      it("begins at a point with 0 width / height", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 0, 0),
          canvas = jQuery(document.createElementNS(namespace, 'svg')),
          plotter = WHITEBOARD.createCirclePlotter(canvas[0]),
          shape;

        shape = canvas.find('ellipse');
        expect(shape).not.toExist();

        plotter.beginDrawing(4, 8);

        shape = canvas.find('ellipse');
        expect(shape).toExist();
        expect(shape).toHaveEllipseDimensions(expectedDimensions);
      });

      it("changes width / height when resized", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(2, 6, 14, 14),
          canvas = jQuery(document.createElementNS(namespace, 'svg')),
          plotter = WHITEBOARD.createCirclePlotter(canvas[0], document),
          shape;

        plotter.beginDrawing(2, 6);

        plotter.resize(10, 20);
        shape = canvas.find('ellipse');
        expect(shape).toHaveEllipseDimensions(expectedDimensions);

        plotter.resize(10, 20);
        shape = canvas.find('ellipse');
        expect(shape).toHaveEllipseDimensions(expectedDimensions);
      });
    });
  });
}());
