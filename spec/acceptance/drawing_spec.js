/*global WHITEBOARD, xdescribe */
(function () {
  "use strict";

  describe("acceptance:", function () {
    var menuEl, canvasEl, ns = "http://www.w3.org/2000/svg",
      createButton = function (type, slug) {
        return jQuery('<button>')
          .attr('id', slug)
          .addClass(type)
          .html('Perform: ' + slug);
      },

      chooseAction = function (slug) {
        menuEl.append(createButton('action', slug));
        jQuery(menuEl).find('#' + slug).click();
      },

      chooseShape = function (slug) {
        menuEl.append(createButton('shape', slug));
        jQuery(menuEl).find('#' + slug).click();
      },

      draw = function (start, middle, end) {
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
      menuEl = jQuery('<menu></menu>');
      canvasEl = jQuery(document.createElementNS(ns, 'svg'));
      WHITEBOARD.createObjectGraph(menuEl[0], canvasEl[0]);
    });

    describe("drawing", function () {
      describe("square", function () {
        describe("using a menu item", function () {
          var startPosition, middlePosition, endPosition;

          beforeEach(function () {
            chooseShape('square');
            draw([2, 8], [9, 16], [14, 28]);
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
            chooseShape('rectangle');
            draw([2, 8], [9, 16], [14, 28]);
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

      describe("circle", function () {
        describe("using a menu item", function () {
          var startPosition, middlePosition, endPosition;

          beforeEach(function () {
            chooseShape('circle');
            draw([20, 30], [9, 16], [30, 45]);
          });

          it("exists", function () {
            expect(canvasEl.find('ellipse')).toExist();
          });

          it("has dimensions relative to mouse", function () {
            expect(canvasEl.find('ellipse'))
              .toHaveEllipseDimensions(WHITEBOARD.createDimensions(20, 30, 15, 15));
          });
        });
      });

      describe("ellipse", function () {
        describe("using a menu item", function () {
          var startPosition, middlePosition, endPosition;

          beforeEach(function () {
            chooseShape('ellipse');
            draw([20, 30], [9, 16], [30, 45]);
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

    describe("clearing", function () {
      it("removes all elements from the canvas", function () {
        chooseShape('ellipse');
        draw([20, 30], [9, 16], [30, 45]);
        chooseShape('square');
        draw([20, 30], [9, 16], [30, 45]);
        chooseAction('clear');
        expect(canvasEl).toBeEmpty();
      });
    });

    describe("moving", function () {
      it("allows movement of drawn shapes", function () {
        var shape;

        chooseShape('square');
        draw([20, 30], [9, 16], [30, 45]);
        shape = canvasEl.find('rect');

        shape.mousedown();
        canvasEl.trigger(jQuery.Event('mousemove', {
          offsetX: 35,
          offsetY: 50
        }));
        canvasEl.trigger(jQuery.Event('mouseup', {
          offsetX: 50,
          offsetY: 60
        }));
        expect(shape).toHaveDimensions(
          WHITEBOARD.createDimensions(50, 60, 15, 15)
        );
      });
    });
  });
}());
