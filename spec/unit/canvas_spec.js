/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: canvas", function () {
    var namespace = "http://www.w3.org/2000/svg";

    it("sets a class on the canvas element to show its state", function () {
      var canvasEl = document.createElementNS(namespace, 'canvas'),
        canvas = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); };

      expect(className()).toBeUndefined();
      canvas.enterDrawState();
      expect(className()).toBe('drawing');
      canvas.exitDrawState();
      expect(className()).toBeUndefined();
    });

    it("can add shapes", function () {
      var canvasEl = document.createElementNS(namespace, 'canvas'),
        canvas = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); },
        shape1 = WHITEBOARD.createEllipse(),
        shape2 = WHITEBOARD.createEllipse();

      canvas.add(shape1);
      canvas.add(shape2);

      expect(jQuery(canvasEl)).toContain(shape1.node);
      expect(jQuery(canvasEl)).toContain(shape2.node);
    });

    it("can remove shapes", function () {
      var canvasEl = document.createElementNS(namespace, 'canvas'),
        canvas = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); },
        shape1 = WHITEBOARD.createEllipse(),
        shape2 = WHITEBOARD.createEllipse();

      canvas.add(shape1);
      canvas.add(shape2);
      canvas.remove(shape2);

      expect(jQuery(canvasEl)).toContain(shape1.node);
      expect(jQuery(canvasEl)).not.toContain(shape2.node);
    });

    it("can be cleared of its contents", function () {
      var canvasEl = document.createElementNS(namespace, 'canvas'),
        canvas = WHITEBOARD.createCanvas(canvasEl),
        className = function () { return jQuery(canvasEl).attr('class'); },
        shape1 = WHITEBOARD.createEllipse(),
        shape2 = WHITEBOARD.createEllipse(),
        shape3 = WHITEBOARD.createEllipse();

      canvas.add(shape1);
      canvas.add(shape2);
      canvas.add(shape3);
      canvas.remove(shape2);
      canvas.clear();

      expect(jQuery(canvasEl)).not.toContain(shape1.node);
      expect(jQuery(canvasEl)).not.toContain(shape2.node);
      expect(jQuery(canvasEl)).not.toContain(shape3.node);
    });
  });
}());
