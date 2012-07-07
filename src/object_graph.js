/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var events = function () { return WHITEBOARD.createEventRegistry(); },
      canvas = WHITEBOARD.createCanvas(canvasEl),
      menu = WHITEBOARD.createMenu(menuEl, events()),
      mouseVector = WHITEBOARD.createMouseVector(canvasEl, events()),
      plotters = WHITEBOARD.createPlotterCollection({
        square: WHITEBOARD.createConstrainedPlotter(
          WHITEBOARD.createRectangleFactory(canvas)
        ),
        rectangle: WHITEBOARD.createUnconstrainedPlotter(
          WHITEBOARD.createRectangleFactory(canvas)
        ),
        circle: WHITEBOARD.createConstrainedPlotter(
          WHITEBOARD.createEllipseFactory(canvas)
        ),
        ellipse: WHITEBOARD.createUnconstrainedPlotter(
          WHITEBOARD.createEllipseFactory(canvas)
        )
      });

    menu
      .tells(plotters, { to: 'switch', on: 'selectShape' })
      .tells(mouseVector, { to: 'waitForInput', on: 'selectShape' })
      .tells(canvas, { to: 'enterDrawState', on: 'selectShape' })
      .tells(canvas, { on: 'selectAction' });

    mouseVector
      .tells(plotters.current, { to: 'beginDrawing', on: 'start' })
      .tells(plotters.current, { to: 'resize', on: 'tick' })
      .tells(plotters.current, { to: 'resize', on: 'complete' })
      .tells(canvas, { to: 'exitDrawState', on: 'complete' });
  };
}());
