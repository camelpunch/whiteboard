/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle factory", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("appends to the passed container", function () {
      var container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        factory = WHITEBOARD.createRectangleFactory(container);

      factory.build(dimensions);
      expect(jQuery('rect', container)).toExist();
    });

    describe("returned shape", function () {
      it("has dimensions that were passed", function () {
        var container = document.createElementNS(namespace, 'svg'),
          dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4),
          factory = WHITEBOARD.createRectangleFactory(container);

        factory.build(dimensions);
        expect(jQuery('rect', container)).toHaveDimensions(dimensions);
      });

      it("can be destroyed", function () {
        var container = document.createElementNS(namespace, 'svg'),
          dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
          factory = WHITEBOARD.createRectangleFactory(container),
          rectangle = factory.build(dimensions);

        rectangle.destroy();
        expect(jQuery('rect', container)).not.toExist();
      });
    });
  });
}());
