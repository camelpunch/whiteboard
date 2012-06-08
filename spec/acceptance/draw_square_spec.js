/*jslint indent: 2, browser: true */
/*global describe, it, beforeEach, expect, WHITEBOARD, jQuery, document */
(function () {
  "use strict";

  describe("acceptance: square", function () {
    describe("when drawn using a menu item", function () {
      var container, menuEl, startPosition, endPosition, canvasEl,
        ns = "http://www.w3.org/2000/svg";

      beforeEach(function () {
        menuEl = jQuery('<div><a id="square"/></div>');
        canvasEl = jQuery(document.createElementNS(ns, 'svg'));

        WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);

        jQuery(menuEl).find('#square').click();

        startPosition = {
          offsetX: 2,
          offsetY: 8
        };

        endPosition = {
          offsetX: 14,
          offsetY: 28
        };

        canvasEl.trigger(jQuery.Event('mousedown', startPosition));
        canvasEl.trigger(jQuery.Event('mouseup', endPosition));
      });

      it("exists", function () {
        expect(canvasEl.find('rect')).toExist();
      });

      it("has dimensions relative to mouse movement", function () {
        expect(canvasEl.find('rect'))
          .toHaveDimensions(WHITEBOARD.createDimensions(2, 8, 20, 20));
      });
    });
  });
}());
