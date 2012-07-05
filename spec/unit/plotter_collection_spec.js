/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: plotter", function () {
    it("delegates methods through to the current plotter", function () {
      var methods = ['beginDrawing', 'resize'],
        plotter1 = jasmine.createSpyObj('plotter1', methods),
        plotter2 = jasmine.createSpyObj('plotter2', methods),
        collection = WHITEBOARD.createPlotterCollection({
          one: plotter1,
          two: plotter2
        });

      collection.switch('one');
      collection.beginDrawing(4, 5);
      expect(plotter1.beginDrawing).toHaveBeenCalledWith(4, 5);

      plotter1.beginDrawing.reset();
      collection.switch('two');
      collection.beginDrawing(7, 8);
      expect(plotter1.beginDrawing).not.toHaveBeenCalled();
      expect(plotter2.beginDrawing).toHaveBeenCalledWith(7, 8);

      collection.switch('one');
      collection.resize(1, 2);
      expect(plotter1.resize).toHaveBeenCalledWith(1, 2);
      expect(plotter2.resize).not.toHaveBeenCalled();

      plotter1.resize.reset();
      plotter2.resize.reset();
      collection.switch('two');
      collection.resize(2, 3);
      expect(plotter1.resize).not.toHaveBeenCalled();
      expect(plotter2.resize).toHaveBeenCalledWith(2, 3);
    });

    it("can return the current plotter", function () {
      var methods = ['beginDrawing', 'resize'],
        plotter1 = {},
        plotter2 = {},
        collection = WHITEBOARD.createPlotterCollection({
          one: plotter1,
          two: plotter2
        });

      collection.switch('one');
      expect(collection.current()).toBe(plotter1);
      collection.switch('two');
      expect(collection.current()).toBe(plotter2);
    });
  });
}());
