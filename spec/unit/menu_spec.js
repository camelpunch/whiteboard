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

    describe("items", function () {
      var menuEl, menu;

      beforeEach(function () {
        menuEl = jQuery('<div>' +
                        '<button id="square"/>' +
                        '<button id="rectangle"/>' +
                        '<button id="circle"/>' +
                        '<button id="ellipse"/>' +
                        '</div>');
        menu = WHITEBOARD.createMenu(menuEl[0], registry);
      });

      describe("square", function () {
        it("fires a select event on click", function () {
          jQuery('#square', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('select', 'square');
        });
      });

      describe("rectangle", function () {
        it("fires a select event on click", function () {
          jQuery('#rectangle', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('select', 'rectangle');
        });
      });

      describe("circle", function () {
        it("fires a select event on click", function () {
          jQuery('#circle', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('select', 'circle');
        });
      });

      describe("ellipse", function () {
        it("fires a select event on click", function () {
          jQuery('#ellipse', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('select', 'ellipse');
        });
      });
    });
  });
}());
