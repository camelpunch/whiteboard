/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse", function () {
    var namespace = "http://www.w3.org/2000/svg", canvasEl;

    beforeEach(function () {
      canvasEl = document.createElementNS(namespace, 'svg');
    });

    it("can be repositioned", function () {
      var ellipse = WHITEBOARD.createEllipse();

      ellipse.reposition(23, 46);
      expect(ellipse).toHaveDimensions(
        WHITEBOARD.createDimensions(23, 46, 0, 0)
      );
    });

    it("appends its node to the canvas when rendered", function () {
      var node = document.createElementNS(namespace, 'ellipse'),
        ellipse = WHITEBOARD.createEllipse(canvasEl, node);

      expect(jQuery(canvasEl)).not.toContain(node);
      ellipse.render();
      expect(jQuery(canvasEl)).toContain(node);
    });

    it("removes itself from the canvas when removed", function () {
      var node = document.createElementNS(namespace, 'ellipse'),
        ellipse = WHITEBOARD.createEllipse(canvasEl, node);

      ellipse.render();
      expect(jQuery(canvasEl)).toContain(node);
      ellipse.remove();
      expect(jQuery(canvasEl)).not.toContain(node);
    });

    describe("when instantiated with a node", function () {
      var node, ellipse;

      beforeEach(function () {
        node = document.createElementNS(namespace, 'ellipse');

        node.setAttribute('rx', 2);
        node.setAttribute('ry', 6);
        node.setAttribute('cx', 15);
        node.setAttribute('cy', 14);

        ellipse = WHITEBOARD.createEllipse(canvasEl, node);
      });

      it("has a read-only version of the node's dimensions", function () {
        try { ellipse.dimensions = 'hello'; } catch (e) {}
        expect(ellipse)
          .toHaveDimensions(WHITEBOARD.createDimensions(13, 8, 4, 12));
      });
    });

    describe("when instantiated with dimensions", function () {
      it("has dimensions that were passed", function () {
        var dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          shape = WHITEBOARD.createEllipse(canvasEl, dimensions);

        expect(shape).toHaveEllipseDimensions(dimensions);
      });
    });
  });
}());
