/*global describe, it, beforeEach, expect, WHITEBOARD, jQuery, document */
(function () {
  "use strict";

  describe("acceptance: square", function () {
    it("has a menu item", function () {
      var graph, container, menu, startPosition, endPosition, canvas;

      container = document.createElement('div');
      graph = WHITEBOARD.createObjectGraph(container);

      menu = jQuery('#menu', container);
      canvas = jQuery('#canvas', container);

      expect(menu).toExist();
      expect(canvas).toExist();
      expect(menu.find('a#square')).toExist();
    });

    describe("when drawn using a menu item", function () {
      var application, container, menu, startPosition, endPosition, canvas;

      beforeEach(function () {
        container = jQuery('<div>')[0];
        application = WHITEBOARD.createApplication(container, document);

        menu = jQuery('#menu', container);
        canvas = jQuery('#canvas', container);

        menu.find('#square').click();

        startPosition = {
          offsetX: 4,
          offsetY: 8
        };

        endPosition = {
          offsetX: 14,
          offsetY: 28
        };

        canvas.trigger(jQuery.Event('mousedown', startPosition));
        canvas.trigger(jQuery.Event('mouseup', endPosition));
      });

      it("exists", function () {
        expect(canvas.find('rect')).toExist();
      });

      it("has width and height relative to mouse movement", function () {
        expect(canvas.find('rect').attr('width')).toBe(
          endPosition.offsetX - startPosition.offsetX
        );
      });
    });
  });
}());
