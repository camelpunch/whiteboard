/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: mouse vector", function () {
    var registry, vector, el,
      ns = "http://www.w3.org/2000/svg";

    beforeEach(function () {
      registry = jasmine.createSpyObj('registry', ['on', 'fire']);
      el = document.createElementNS(ns, 'svg');
      vector = WHITEBOARD.createMouseVector(el, registry);
    });

    it("exposes the on method", function () {
      expect(vector.on).toBe(registry.on);
    });

    it("does not expose the fire method", function () {
      expect(vector.fire).toBeUndefined();
    });

    describe("a move", function () {
      it("fires the tick event when mouse is moved", function () {
        var mousemove = jQuery.Event('mousemove', { offsetX: 250, offsetY: 400 });
        vector.waitForMove();
        jQuery(el).trigger(mousemove);
        expect(registry.fire).toHaveBeenCalledWith('tick', 250, 400);
      });

      it("fires the complete event when mouse button is released", function () {
        var mouseup = jQuery.Event('mouseup', { offsetX: 300, offsetY: 450 });
        vector.waitForMove();
        jQuery(el).trigger(mouseup);
        expect(registry.fire).toHaveBeenCalledWith('complete', 300, 450);
      });

      it("stops firing after mouse button released", function () {
        var mousemove = jQuery.Event('mousemove', { offsetX: 250, offsetY: 400 }),
          mousedown = jQuery.Event('mousedown', { offsetX: 234, offsetY: 321 }),
          mouseup = jQuery.Event('mouseup', { offsetX: 300, offsetY: 450 });
        vector.waitForMove();
        jQuery(el).trigger(mousemove);
        jQuery(el).trigger(mouseup);
        registry.fire.reset();
        jQuery(el).trigger(mousedown);
        jQuery(el).trigger(mousemove);
        jQuery(el).trigger(mouseup);
        expect(registry.fire).not.toHaveBeenCalled();
      });
    });

    describe("a drag", function () {
      it("fires the start event when mouse button depressed", function () {
        var mousedown = jQuery.Event('mousedown', { offsetX: 234, offsetY: 321 });
        vector.waitForDrag();
        expect(registry.fire).not.toHaveBeenCalled();
        jQuery(el).trigger(mousedown);
        expect(registry.fire).toHaveBeenCalledWith('start', 234, 321);
      });

      it("fires the tick event when mouse is moved after button depressed", function () {
        var mousemove = jQuery.Event('mousemove', { offsetX: 250, offsetY: 400 }),
          mousedown = jQuery.Event('mousedown', { offsetX: 234, offsetY: 321 });
        vector.waitForDrag();
        jQuery(el).trigger(mousemove);
        expect(registry.fire).not.toHaveBeenCalled();
        jQuery(el).trigger(mousedown);
        expect(registry.fire).not.toHaveBeenCalledWith('tick', jasmine.any(Array));
        jQuery(el).trigger(mousemove);
        expect(registry.fire).toHaveBeenCalledWith('tick', 250, 400);
      });

      it("fires the complete event when mouse button is released", function () {
        var mousemove = jQuery.Event('mousemove', { offsetX: 250, offsetY: 400 }),
          mousedown = jQuery.Event('mousedown', { offsetX: 234, offsetY: 321 }),
          mouseup = jQuery.Event('mouseup', { offsetX: 300, offsetY: 450 });
        vector.waitForDrag();
        jQuery(el).trigger(mouseup);
        expect(registry.fire).not.toHaveBeenCalled();
        jQuery(el).trigger(mousedown);
        expect(registry.fire).not.toHaveBeenCalledWith('complete', jasmine.any(Array));
        jQuery(el).trigger(mouseup);
        expect(registry.fire).toHaveBeenCalledWith('complete', 300, 450);
      });

      it("stops firing after mouse button released", function () {
        var mousemove = jQuery.Event('mousemove', { offsetX: 250, offsetY: 400 }),
          mousedown = jQuery.Event('mousedown', { offsetX: 234, offsetY: 321 }),
          mouseup = jQuery.Event('mouseup', { offsetX: 300, offsetY: 450 });
        vector.waitForDrag();
        jQuery(el).trigger(mousedown);
        jQuery(el).trigger(mousemove);
        jQuery(el).trigger(mouseup);
        registry.fire.reset();
        jQuery(el).trigger(mousedown);
        jQuery(el).trigger(mousemove);
        expect(registry.fire).not.toHaveBeenCalled();
      });
    });
  });
}());
