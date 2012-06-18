/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: square plotter", function () {
    describe("drawing", function () {
      it("begins at a point with 0 width / height", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 0, 0),
          ns = "http://www.w3.org/2000/svg",
          canvas = jQuery(document.createElementNS(ns, 'svg')),
          plotter = WHITEBOARD.createSquarePlotter(canvas[0], document),
          rect;

        rect = canvas.find('rect');
        expect(rect).not.toExist();

        plotter.beginDrawing(4, 8);

        rect = canvas.find('rect');
        expect(rect).toExist();
        expect(rect).toHaveDimensions(expectedDimensions);
      });

      it("changes width / height when resized", function () {
        var expectedDimensions = WHITEBOARD.createDimensions(2, 6, 14, 14),
          ns = "http://www.w3.org/2000/svg",
          canvas = jQuery(document.createElementNS(ns, 'svg')),
          plotter = WHITEBOARD.createSquarePlotter(canvas[0], document),
          rect;

        plotter.beginDrawing(2, 6);

        plotter.resize(10, 20);
        rect = canvas.find('rect');
        expect(rect).toHaveDimensions(expectedDimensions);

        plotter.resize(10, 20);
        rect = canvas.find('rect');
        expect(rect).toHaveDimensions(expectedDimensions);
      });
    });
  });
}());
