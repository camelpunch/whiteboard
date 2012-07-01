/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var manager = WHITEBOARD.createCanvasManager(canvasEl),
      menu = WHITEBOARD.createMenu(menuEl, WHITEBOARD.createEventRegistry()),
      mouseVector = WHITEBOARD.createMouseVector(canvasEl, WHITEBOARD.createEventRegistry()),
      plotter = WHITEBOARD.createSquarePlotter(canvasEl, document);

    menu
      .tells(mouseVector, { to: 'waitForInput', on: 'select' })
      .tells(manager, { to: 'enterDrawState', on: 'select' });

    mouseVector
      .tells(plotter, { to: 'beginDrawing', on: 'start' })
      .tells(plotter, { to: 'resize', on: 'tick' })
      .tells(plotter, { to: 'resize', on: 'complete' })
      .tells(manager, { to: 'exitDrawState', on: 'complete' });
  };
}());
