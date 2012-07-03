/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: rectangle", function () {
    it("is appended to the passed container", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0);

      WHITEBOARD.createRectangle(container, dimensions);
      expect(jQuery('rect', container)).toExist();
    });

    it("has dimensions passed", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4);

      WHITEBOARD.createRectangle(container, dimensions);
      expect(jQuery('rect', container)).toHaveDimensions(dimensions);
    });

    it("can be destroyed", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        rectangle = WHITEBOARD.createRectangle(container, dimensions);

      rectangle.destroy();
      expect(jQuery('rect', container)).not.toExist();
    });
  });
}());
