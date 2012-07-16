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
      canvasEl = document.createElementNS(namespace, 'svg');
      registry = jasmine.createSpyObj('event registry', ['fire']);
      shapeHandler = WHITEBOARD.createShapeHandler(canvasEl, registry);
    });

    it("fires selectShapeToken when mousedown on an ellipse occurs", function () {
      var mousedown = jQuery.Event('mousedown', { offsetX: 10, offsetY: 20 });

      svgShape = document.createElementNS(namespace, 'ellipse');
      canvasEl.appendChild(svgShape);

      expect(registry.fire).not.toHaveBeenCalled();
      registry.fire.andCallFake(function (eventName, shape, mouseX, mouseY) {
        expect(eventName).toBe('selectShapeToken');
        expect(shape.node).toBe(svgShape);
        expect(mouseX).toBe(10);
        expect(mouseY).toBe(20);
      });
      jQuery(svgShape).trigger(mousedown);
      expect(registry.fire.callCount).toBe(1);
    });

    it("fires selectShapeToken when mousedown on a rect occurs", function () {
      var mousedown = jQuery.Event('mousedown', { offsetX: 14, offsetY: 16 });

      svgShape = document.createElementNS(namespace, 'rect');
      canvasEl.appendChild(svgShape);

      expect(registry.fire).not.toHaveBeenCalled();
      registry.fire.andCallFake(function (eventName, shape, mouseX, mouseY) {
        expect(eventName).toBe('selectShapeToken');
        expect(shape.node).toBe(svgShape);
        expect(mouseX).toBe(14);
        expect(mouseY).toBe(16);
      });
      jQuery(svgShape).trigger(mousedown);
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
