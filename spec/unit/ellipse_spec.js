/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("can be repositioned", function () {
      var ellipse = WHITEBOARD.createEllipse();

      ellipse.reposition(23, 46);
      expect(ellipse).toHaveDimensions(
        WHITEBOARD.createDimensions(23, 46, 0, 0)
      );
    });

    describe("when instantiated with a node", function () {
      var node, ellipse;

      beforeEach(function () {
        node = document.createElementNS(namespace, 'ellipse');

        node.setAttribute('rx', 2);
        node.setAttribute('ry', 6);
        node.setAttribute('cx', 15);
        node.setAttribute('cy', 14);

        ellipse = WHITEBOARD.createEllipse(node);
      });

      it("has a read-only version of the node's dimensions", function () {
        try { ellipse.dimensions = 'hello'; } catch (e) {}
        expect(ellipse)
          .toHaveDimensions(WHITEBOARD.createDimensions(13, 8, 4, 12));
      });

      it("has a read-only node getter for the same node", function () {
        try { ellipse.node = 'hello'; } catch (e) {}
        expect(ellipse.node).toBe(node);
      });
    });

    describe("when instantiated with dimensions", function () {
      it("has dimensions that were passed", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createEllipse(dimensions);

        expect(shape).toHaveEllipseDimensions(dimensions);
      });

      it("has a node with correct dimensions", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createEllipse(dimensions);

        expect(jQuery(shape.node)).toHaveAttr('cx');
        expect(shape.node).toHaveEllipseDimensions(dimensions);
      });
    });
  });
}());
