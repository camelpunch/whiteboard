/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: dimensions value object", function () {
    it("is comparable with other dimensions objects", function () {
      var a = WHITEBOARD.createDimensions(10, 20, 67, 545),
        b = WHITEBOARD.createDimensions(10, 20, 67, 545),
        c = WHITEBOARD.createDimensions(10, 20, 67, 546);
      expect(a.equals(b)).toBeTruthy();
      expect(a.equals(c)).toBeFalsy();
    });

    it("has read-only properties for x, y, width and height", function () {
      var dims = WHITEBOARD.createDimensions(23, 43, 67, 545);
      expect(dims.x).toBe(23);
      expect(dims.y).toBe(43);
      expect(dims.width).toBe(67);
      expect(dims.height).toBe(545);

      try {
        dims.x = 123;
        dims.y = 321;
        dims.width = 123;
        dims.height = 321;
      } catch (e) {}

      expect(dims.x).toBe(23);
      expect(dims.y).toBe(43);
      expect(dims.width).toBe(67);
      expect(dims.height).toBe(545);
    });

    it("has a readable string representation", function () {
      var dims = WHITEBOARD.createDimensions(23, 43, 67, 545);
      expect(dims.toString()).toEqual(
        'x: 23, y: 43, 67x545'
      );
    });
  });
}());
