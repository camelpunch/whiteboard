/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: canvas", function () {
    it("sets a class on the canvas element to show its state", function () {
      var namespace = "http://www.w3.org/2000/svg",
        canvasEl = document.createElementNS(namespace, 'canvas'),
        manager = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); };

      expect(className()).toBeUndefined();
      manager.enterDrawState();
      expect(className()).toBe('drawing');
      manager.exitDrawState();
      expect(className()).toBeUndefined();
    });
  });
}());
