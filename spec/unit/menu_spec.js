/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: menu", function () {
    var app, registry;

    beforeEach(function () {
      registry = jasmine.createSpyObj('registry', ['on', 'fire']);
    });

    it("exposes the on method", function () {
      var menu = WHITEBOARD.createMenu(app, registry);
      expect(menu.on).toBe(registry.on);
    });

    it("does not expose the fire method", function () {
      var menu = WHITEBOARD.createMenu(app, registry);
      expect(menu.fire).toBeUndefined();
    });

    describe("items", function () {
      var menuEl, menu;

      beforeEach(function () {
        menuEl = jQuery('<div>');
        menu = WHITEBOARD.createMenu(menuEl[0], registry);
        menuEl.append('<button id="square" class="shape"/>',
                      '<button id="rectangle" class="shape"/>',
                      '<button id="circle" class="shape"/>',
                      '<button id="ellipse" class="shape"/>',
                      '<button id="clear" class="action"/>');
      });

      describe("square", function () {
        it("fires a selectShapeType event on click", function () {
          jQuery('#square', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('selectShapeType', 'square');
        });
      });

      describe("rectangle", function () {
        it("fires a selectShapeType event on click", function () {
          jQuery('#rectangle', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('selectShapeType', 'rectangle');
        });
      });

      describe("circle", function () {
        it("fires a selectShapeType event on click", function () {
          jQuery('#circle', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('selectShapeType', 'circle');
        });
      });

      describe("ellipse", function () {
        it("fires a selectShapeType event on click", function () {
          jQuery('#ellipse', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('selectShapeType', 'ellipse');
        });
      });

      describe("clear", function () {
        it("fires a selectAction event on click", function () {
          jQuery('#clear', menuEl).click();
          expect(registry.fire).toHaveBeenCalledWith('selectAction', 'clear');
        });
      });
    });
  });
}());
