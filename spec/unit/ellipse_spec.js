/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: ellipse", function () {
    it("is appended to the passed container", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0);

      WHITEBOARD.createEllipse(container, dimensions);
      expect(jQuery('ellipse', container)).toExist();
    });

    it("has the dimensions that were passed", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(1, 2, 3, 4);

      WHITEBOARD.createEllipse(container, dimensions);
      expect(jQuery('ellipse', container)).toHaveEllipseDimensions(dimensions);
    });

    it("can be destroyed", function () {
      var namespace = "http://www.w3.org/2000/svg",
        container = document.createElementNS(namespace, 'svg'),
        dimensions = WHITEBOARD.createDimensions(0, 0, 0, 0),
        ellipse = WHITEBOARD.createEllipse(container, dimensions);

      ellipse.destroy();
      expect(jQuery('ellipse', container)).not.toExist();
    });
  });
}());
