/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var menu = WHITEBOARD.createMenu(menuEl, WHITEBOARD.createEventRegistry()),
      mouseVector = WHITEBOARD.createMouseVector(canvasEl, WHITEBOARD.createEventRegistry()),
      plotter = WHITEBOARD.createSquarePlotter(canvasEl, document);

    menu
      .tells(mouseVector, { to: 'waitForInput', on: 'select' });

    mouseVector
      .tells(plotter, { to: 'beginDrawing', on: 'start' })
      .tells(plotter, { to: 'resize', on: 'tick' })
      .tells(plotter, { to: 'resize', on: 'complete' });
  };
}());
