/*global jasmine, describe, it, beforeEach, expect, document, WHITEBOARD */
(function () {
  "use strict";

  describe("unit: menu", function() {
    var app, registry;

    beforeEach(function() {
      app = jasmine.createSpyObj(
        'app', ['addHtmlElement', 'addSvgElement']
      );
      registry = jasmine.createSpyObj('registry', ['tells', 'fire']);
      app.addHtmlElement.andReturn(document.createElement('div'));
    });

    it("adds a menu element", function() {
      WHITEBOARD.createMenu(app, registry);
      expect(app.addHtmlElement).toHaveBeenCalledWith('div', 'menu');
    });

    it("exposes the event registry interface", function() {
      var menu = WHITEBOARD.createMenu(app, registry);
      expect(menu.tells).toBe(registry.tells);
    });

    describe("square menu item", function() {
      it("is a link inside the menu element", function() {
        var menuEl = document.createElement('div');

        app.addHtmlElement.andReturn(menuEl);

        WHITEBOARD.createMenu(app, registry);

        expect(app.addHtmlElement).toHaveBeenCalledWith(
          'a', 'square', menuEl
        );
      });

      it("fires a beginSquareCreation event on click", function() {
        var link = document.createElement('a'), menu;

        app.addHtmlElement.andCallFake(function(type, id) {
          if (id === 'square') {
            return link;
          }
        });

        menu = WHITEBOARD.createMenu(app, registry);

        link.click();
        expect(registry.fire).toHaveBeenCalledWith('beginSquareCreation');
      });
    });
  });
}());
