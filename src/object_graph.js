/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var events = function () { return WHITEBOARD.createEventRegistry(); },
      canvas = WHITEBOARD.createCanvasManager(canvasEl),
      menu = WHITEBOARD.createMenu(menuEl, events()),
      mouseVector = WHITEBOARD.createMouseVector(canvasEl, events()),
      plotter = WHITEBOARD.createPlottingManager({
        square: WHITEBOARD.createSquarePlotter(canvasEl, document),
        rectangle: WHITEBOARD.createRectanglePlotter(canvasEl, document)
      });

    menu
      .tells(plotter, { to: 'switch', on: 'select' })
      .tells(mouseVector, { to: 'waitForInput', on: 'select' })
      .tells(canvas, { to: 'enterDrawState', on: 'select' });

    mouseVector
      .tells(plotter, { to: 'beginDrawing', on: 'start' })
      .tells(plotter, { to: 'resize', on: 'tick' })
      .tells(plotter, { to: 'resize', on: 'complete' })
      .tells(canvas, { to: 'exitDrawState', on: 'complete' });
  };
}());
