/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: canvas", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("sets a class on the canvas element to show its state", function () {
      var canvasEl = document.createElementNS(namespace, 'canvas'),
        canvas = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); };

      expect(className()).toBeUndefined();
      canvas.enterDrawState();
      expect(className()).toBe('drawing');
      canvas.exitDrawState();
      expect(className()).toBeUndefined();
    });
  });
}());
