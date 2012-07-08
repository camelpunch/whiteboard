/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape handler", function () {
    var namespace = "http://www.w3.org/2000/svg",
      svgShape,
      canvasEl,
      registry,
      shapeHandler;

    beforeEach(function () {
      svgShape = document.createElementNS(namespace, 'rect');
      canvasEl = document.createElementNS(namespace, 'svg');
      registry = jasmine.createSpyObj('event registry', ['fire']);
      shapeHandler = WHITEBOARD.createShapeHandler(canvasEl, registry);
      canvasEl.appendChild(svgShape);
    });

    it("fires shapeMoveBegin when mousedown on a DOM shape received", function () {
      expect(registry.fire).not.toHaveBeenCalled();
      registry.fire.andCallFake(function (eventName, shape) {
        expect(eventName).toBe('shapeMoveBegin');
        expect(shape.node).toBe(svgShape);
      });
      jQuery(svgShape).mousedown();
      expect(registry.fire.callCount).toBe(1);
    });

    it("exposes a tells method", function () {
      expect(shapeHandler.tells).toBe(registry.tells);
    });

    it("does not expose the fire method", function () {
      expect(shapeHandler.fire).toBeUndefined();
    });
  });
}());
