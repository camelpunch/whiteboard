/*global WHITEBOARD, xdescribe */
(function () {
  "use strict";

  describe("acceptance: drawing", function () {
    var canvasEl, ns = "http://www.w3.org/2000/svg";

    beforeEach(function () {
      canvasEl = jQuery(document.createElementNS(ns, 'svg'));
    });

    describe("square", function () {
      describe("using a menu item", function () {
        var menuEl, startPosition, middlePosition, endPosition;

        beforeEach(function () {
          menuEl = jQuery('<menu><button id="square">Gimme a square</button></menu>');

          WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);

          jQuery(menuEl).find('#square').click();

          startPosition = { offsetX: 2, offsetY: 8 };
          middlePosition = { offsetX: 9, offsetY: 16 };
          endPosition = { offsetX: 14, offsetY: 28 };

          canvasEl.trigger(jQuery.Event('mousedown', startPosition));
          canvasEl.trigger(jQuery.Event('mousemove', middlePosition));
          canvasEl.trigger(jQuery.Event('mouseup', endPosition));
        });

        it("exists", function () {
          expect(canvasEl.find('rect')).toExist();
        });

        it("has dimensions relative to mouse, constrained to a square", function () {
          expect(canvasEl.find('rect'))
            .toHaveDimensions(WHITEBOARD.createDimensions(2, 8, 20, 20));
        });
      });
    });

    describe("rectangle", function () {
      describe("using a menu item", function () {
        var menuEl, startPosition, middlePosition, endPosition;

        beforeEach(function () {
          menuEl = jQuery('<menu><button id="rectangle">Gimme a rectangle</button></menu>');

          WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);

          jQuery(menuEl).find('#rectangle').click();

          startPosition = { offsetX: 2, offsetY: 8 };
          middlePosition = { offsetX: 9, offsetY: 16 };
          endPosition = { offsetX: 14, offsetY: 28 };

          canvasEl.trigger(jQuery.Event('mousedown', startPosition));
          canvasEl.trigger(jQuery.Event('mousemove', middlePosition));
          canvasEl.trigger(jQuery.Event('mouseup', endPosition));
        });

        it("exists", function () {
          expect(canvasEl.find('rect')).toExist();
        });

        it("has dimensions relative to mouse", function () {
          expect(canvasEl.find('rect'))
            .toHaveDimensions(WHITEBOARD.createDimensions(2, 8, 12, 20));
        });
      });
    });

    describe("ellipse", function () {
      describe("using a menu item", function () {
        var menuEl, startPosition, middlePosition, endPosition;

        beforeEach(function () {
          menuEl = jQuery('<menu><button id="ellipse">Gimme an ellipse</button></menu>');

          WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);

          jQuery(menuEl).find('#ellipse').click();

          startPosition = { offsetX: 20, offsetY: 30 };
          middlePosition = { offsetX: 9, offsetY: 16 };
          endPosition = { offsetX: 30, offsetY: 45 };

          canvasEl.trigger(jQuery.Event('mousedown', startPosition));
          canvasEl.trigger(jQuery.Event('mousemove', middlePosition));
          canvasEl.trigger(jQuery.Event('mouseup', endPosition));
        });

        it("exists", function () {
          expect(canvasEl.find('ellipse')).toExist();
        });

        it("has dimensions relative to mouse", function () {
          expect(canvasEl.find('ellipse'))
            .toHaveEllipseDimensions(WHITEBOARD.createDimensions(20, 30, 10, 15));
        });
      });
    });
  });
}());
