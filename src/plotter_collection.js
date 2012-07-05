/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createPlotterCollection = function (plotters) {
    var plotter;

    return {
      switch: function (plotterName) {
        plotter = plotters[plotterName];
      },

      current: function () {
        return plotter;
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
