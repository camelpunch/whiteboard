/*jslint indent: 2, browser: true */
/*global jasmine, describe, it, beforeEach, expect, WHITEBOARD, jQuery */
(function () {
  "use strict";

  describe("unit: square plotter", function () {
    it("draws a square using mouse events", function () {
      var expectedDimensions = WHITEBOARD.createDimensions(4, 8, 10, 20),
        ns = "http://www.w3.org/2000/svg",
        canvas = jQuery(document.createElementNS(ns, 'svg')),
        plotter = WHITEBOARD.createSquarePlotter(canvas[0], document),
        startPosition,
        endPosition,
        rect;

      startPosition = { offsetX: 4, offsetY: 8 };
      endPosition = { offsetX: 14, offsetY: 28 };

      plotter.start();

      canvas.trigger(jQuery.Event('mousedown', startPosition));

      rect = canvas.find('rect');
      expect(rect).not.toExist();

      canvas.trigger(jQuery.Event('mouseup', endPosition));

      rect = canvas.find('rect');
      expect(rect).toExist();
      expect(rect).toHaveDimensions(expectedDimensions);
    });
  });
}());
