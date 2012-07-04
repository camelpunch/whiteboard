/*global WHITEBOARD, xdescribe */
(function () {
  "use strict";

  describe("acceptance: drawing", function () {
    var canvasEl, ns = "http://www.w3.org/2000/svg",
      choose = function (type) {
        var menuEl =
          jQuery('<menu><button id="' + type + '">' +
                 'Gimme a ' + type + '</button></menu>');
        WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);
        jQuery(menuEl).find('#' + type).click();
      },
      drag = function (start, middle, end) {
        canvasEl.trigger(jQuery.Event('mousedown', {
          offsetX: start[0],
          offsetY: start[1]
        }));
        canvasEl.trigger(jQuery.Event('mousemove', {
          offsetX: middle[0],
          offsetY: middle[1]
        }));
        canvasEl.trigger(jQuery.Event('mouseup', {
          offsetX: end[0],
          offsetY: end[1]
        }));
      };

    beforeEach(function () {
      canvasEl = jQuery(document.createElementNS(ns, 'svg'));
    });

    describe("square", function () {
      describe("using a menu item", function () {
        var startPosition, middlePosition, endPosition;

        beforeEach(function () {
          choose('square');
          drag([2, 8], [9, 16], [14, 28]);
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
        var startPosition, middlePosition, endPosition;

        beforeEach(function () {
          choose('rectangle');
          drag([2, 8], [9, 16], [14, 28]);
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
        var startPosition, middlePosition, endPosition;

        beforeEach(function () {
          choose('ellipse');
          drag([20, 30], [9, 16], [30, 45]);
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
