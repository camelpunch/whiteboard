/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: menu", function () {
    var app, registry;

    beforeEach(function () {
      registry = jasmine.createSpyObj('registry', ['tells', 'fire']);
    });

    it("exposes the tells method", function () {
      var menu = WHITEBOARD.createMenu(app, registry);
      expect(menu.tells).toBe(registry.tells);
    });

    it("does not expose the fire method", function () {
      var menu = WHITEBOARD.createMenu(app, registry);
      expect(menu.fire).toBeUndefined();
    });

    describe("square menu item", function () {
      it("fires a select event on click", function () {
        var menu,
          menuEl = jQuery('<div><a id="square"/></div>');

        menu = WHITEBOARD.createMenu(menuEl, registry);

        jQuery('#square', menuEl).click();
        expect(registry.fire).toHaveBeenCalledWith('select', 'square');
      });
    });

    describe("rectangle menu item", function () {
      it("fires a select event on click", function () {
        var menu,
          menuEl = jQuery('<div><a id="rectangle"/></div>');

        menu = WHITEBOARD.createMenu(menuEl, registry);

        jQuery('#rectangle', menuEl).click();
        expect(registry.fire).toHaveBeenCalledWith('select', 'rectangle');
      });
    });

    describe("circle menu item", function () {
      it("fires a select event on click", function () {
        var menu,
          menuEl = jQuery('<div><a id="circle"/></div>');

        menu = WHITEBOARD.createMenu(menuEl, registry);

        jQuery('#circle', menuEl).click();
        expect(registry.fire).toHaveBeenCalledWith('select', 'circle');
      });
    });

    describe("ellipse menu item", function () {
      it("fires a select event on click", function () {
        var menu,
          menuEl = jQuery('<div><a id="ellipse"/></div>');

        menu = WHITEBOARD.createMenu(menuEl, registry);

        jQuery('#ellipse', menuEl).click();
        expect(registry.fire).toHaveBeenCalledWith('select', 'ellipse');
      });
    });
  });
}());
