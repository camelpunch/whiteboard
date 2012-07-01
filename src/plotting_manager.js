/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createPlottingManager = function (plotters) {
    var plotter;

    return {
      switch: function (plotterName) {
        plotter = plotters[plotterName];
      },

      beginDrawing: function (x, y) {
        plotter.beginDrawing(x, y);
      },

      resize: function (x, y) {
        plotter.resize(x, y);
      }
    };
  };
}());
