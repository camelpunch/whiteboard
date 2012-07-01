/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: plotting manager", function () {
    it("delegates methods through to the current plotter", function () {
      var methods = ['beginDrawing', 'resize'],
        plotter1 = jasmine.createSpyObj('plotter1', methods),
        plotter2 = jasmine.createSpyObj('plotter2', methods),
        manager = WHITEBOARD.createPlottingManager({
          one: plotter1,
          two: plotter2
        });

      manager.switch('one');
      manager.beginDrawing(4, 5);
      expect(plotter1.beginDrawing).toHaveBeenCalledWith(4, 5);

      plotter1.beginDrawing.reset();
      manager.switch('two');
      manager.beginDrawing(7, 8);
      expect(plotter1.beginDrawing).not.toHaveBeenCalled();
      expect(plotter2.beginDrawing).toHaveBeenCalledWith(7, 8);

      manager.switch('one');
      manager.resize(1, 2);
      expect(plotter1.resize).toHaveBeenCalledWith(1, 2);
      expect(plotter2.resize).not.toHaveBeenCalled();

      plotter1.resize.reset();
      plotter2.resize.reset();
      manager.switch('two');
      manager.resize(2, 3);
      expect(plotter1.resize).not.toHaveBeenCalled();
      expect(plotter2.resize).toHaveBeenCalledWith(2, 3);
    });
  });
}());
