/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: shape handler", function () {
    var shapes, canvasEl, registry, shapeHandler,
      namespace = "http://www.w3.org/2000/svg",
      expectEventToFireFor = function (type) {
        var shape = {},
          mousedown = jQuery.Event('mousedown', { offsetX: 14, offsetY: 16 }),
          svgShape = document.createElementNS(namespace, type);

        shapes.shapeForNode.andCallFake(function (node) {
          return node === svgShape ? shape : null;
        });
        canvasEl.appendChild(svgShape);

        expect(registry.fire).not.toHaveBeenCalled();
        registry.fire.andCallFake(function (eventName, firedShape, mouseX, mouseY) {
          expect(eventName).toBe('selectShapeToken');
          expect(firedShape).toBe(shape);
          expect(mouseX).toBe(14);
          expect(mouseY).toBe(16);
        });
        jQuery(svgShape).trigger(mousedown);
        expect(registry.fire.callCount).toBe(1);
      };

    beforeEach(function () {
      canvasEl = document.createElementNS(namespace, 'svg');
      registry = jasmine.createSpyObj('event registry', ['fire']);
      shapes = jasmine.createSpyObj('shape collection', ['shapeForNode']);
      shapeHandler = WHITEBOARD.createShapeHandler(canvasEl, shapes, registry);
    });

    it("fires selectShapeToken when mousedown on an ellipse occurs", function () {
      expectEventToFireFor('ellipse');
    });

    it("fires selectShapeToken when mousedown on a rect occurs", function () {
      expectEventToFireFor('rect');
    });

    it("exposes a tells method", function () {
      expect(shapeHandler.tells).toBe(registry.tells);
    });

    it("does not expose the fire method", function () {
      expect(shapeHandler.fire).toBeUndefined();
    });
  });
}());
