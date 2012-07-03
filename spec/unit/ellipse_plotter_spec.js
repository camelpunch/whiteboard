/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse plotter", function () {
    var namespace = "http://www.w3.org/2000/svg";

    describe("drawing", function () {
      it("begins at a point with 0 width / height", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 0, 0),
          canvas = jQuery(document.createElementNS(namespace, 'svg')),
          plotter = WHITEBOARD.createEllipsePlotter(canvas[0]),
          ellipse;

        ellipse = canvas.find('ellipse');
        expect(ellipse).not.toExist();

        plotter.beginDrawing(4, 8);

        ellipse = canvas.find('ellipse');
        expect(ellipse).toExist();
        expect(ellipse).toHaveEllipseDimensions(expectedDimensions);
      });

      it("changes width / height when resized", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(2, 6, 8, 14),
          canvas = jQuery(document.createElementNS(namespace, 'svg')),
          plotter = WHITEBOARD.createEllipsePlotter(canvas[0], document),
          ellipse;

        plotter.beginDrawing(2, 6);

        plotter.resize(10, 20);
        ellipse = canvas.find('ellipse');
        expect(ellipse).toHaveEllipseDimensions(expectedDimensions);

        plotter.resize(10, 20);
        ellipse = canvas.find('ellipse');
        expect(ellipse).toHaveEllipseDimensions(expectedDimensions);
      });
    });
  });
}());
