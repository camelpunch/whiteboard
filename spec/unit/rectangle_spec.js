/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("can be repositioned", function () {
      var rectangle = WHITEBOARD.createRectangle();

      rectangle.reposition(23, 46);
      expect(rectangle).toHaveDimensions(
        WHITEBOARD.createDimensions(23, 46, 0, 0)
      );
    });

    describe("when instantiated with a node", function () {
      var node, rectangle;

      beforeEach(function () {
        node = document.createElementNS(namespace, 'rect');

        node.setAttribute('x', 1);
        node.setAttribute('y', 3);
        node.setAttribute('width', 4);
        node.setAttribute('height', 12);

        rectangle = WHITEBOARD.createRectangle(node);
      });

      it("has a read-only version of the node's dimensions", function () {
        try { rectangle.dimensions = 'hello'; } catch (e) {}
        expect(rectangle)
          .toHaveDimensions(WHITEBOARD.createDimensions(1, 3, 4, 12));
      });

      it("has a read-only node getter for the same node", function () {
        try { rectangle.node = 'hello'; } catch (e) {}
        expect(rectangle.node).toBe(node);
      });
    });

    describe("when instantiated with dimensions", function () {
      it("has dimensions that were passed", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createRectangle(dimensions);

        expect(shape).toHaveDimensions(dimensions);
      });

      it("has a node with correct dimensions", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createRectangle(dimensions);

        expect(jQuery(shape.node)).toHaveAttr('width');
        expect(shape.node).toHaveDimensions(dimensions);
      });
    });
  });
}());
