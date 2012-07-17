/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle", function () {
    var namespace = "http://www.w3.org/2000/svg", canvasEl;

    beforeEach(function () {
      canvasEl = document.createElementNS(namespace, 'svg');
    });

    it("can be repositioned", function () {
      var rectangle = WHITEBOARD.createRectangle();

      rectangle.reposition(23, 46);
      expect(rectangle).toHaveDimensions(
        WHITEBOARD.createDimensions(23, 46, 0, 0)
      );
    });

    it("appends its node to the canvas when rendered", function () {
      var node = document.createElementNS(namespace, 'rect'),
        rectangle = WHITEBOARD.createRectangle(canvasEl, node);

      expect(jQuery(canvasEl)).not.toContain(node);
      rectangle.render();
      expect(jQuery(canvasEl)).toContain(node);
    });

    it("removes itself from the canvas when removed", function () {
      var node = document.createElementNS(namespace, 'rect'),
        rectangle = WHITEBOARD.createRectangle(canvasEl, node);

      rectangle.render();
      expect(jQuery(canvasEl)).toContain(node);
      rectangle.remove();
      expect(jQuery(canvasEl)).not.toContain(node);
    });

    describe("when instantiated with a node", function () {
      var node, rectangle;

      beforeEach(function () {
        node = document.createElementNS(namespace, 'rect');

        node.setAttribute('x', 1);
        node.setAttribute('y', 3);
        node.setAttribute('width', 4);
        node.setAttribute('height', 12);

        rectangle = WHITEBOARD.createRectangle(canvasEl, node);
      });

      it("has a read-only version of the node's dimensions", function () {
        try { rectangle.dimensions = 'hello'; } catch (e) {}
        expect(rectangle)
          .toHaveDimensions(WHITEBOARD.createDimensions(1, 3, 4, 12));
      });
    });

    describe("when instantiated with dimensions", function () {
      it("has dimensions that were passed", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createRectangle(canvasEl, dimensions);

        expect(shape).toHaveDimensions(dimensions);
      });
    });
  });
}());
