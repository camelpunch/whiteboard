/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var events = function () { return WHITEBOARD.createEventRegistry(); },
      canvas = WHITEBOARD.createCanvas(canvasEl),
      menu = WHITEBOARD.createMenu(menuEl, events()),
      drawVector = WHITEBOARD.createMouseVector(canvasEl, events()),
      moveVector = WHITEBOARD.createMouseVector(canvasEl, events()),
      shapes = WHITEBOARD.createShapeCollection(),
      shapeHandler = WHITEBOARD.createShapeHandler(canvasEl, shapes, events()),
      shapePositioner = WHITEBOARD.createShapePositioner(),
      plotters = WHITEBOARD.createPlotterCollection({
        square: WHITEBOARD.createConstrainedPlotter(
          WHITEBOARD.createShapeFactory(
            canvasEl, shapes, WHITEBOARD.createRectangle
          )
        ),
        rectangle: WHITEBOARD.createUnconstrainedPlotter(
          WHITEBOARD.createShapeFactory(
            canvasEl, shapes, WHITEBOARD.createRectangle
          )
        ),
        circle: WHITEBOARD.createConstrainedPlotter(
          WHITEBOARD.createShapeFactory(
            canvasEl, shapes, WHITEBOARD.createEllipse
          )
        ),
        ellipse: WHITEBOARD.createUnconstrainedPlotter(
          WHITEBOARD.createShapeFactory(
            canvasEl, shapes, WHITEBOARD.createEllipse
          )
        )
      });

    menu
      .tells(plotters, { to: 'switch', on: 'selectShapeType' })
      .tells(drawVector, { to: 'waitForDrag', on: 'selectShapeType' })
      .tells(canvas, { to: 'enterDrawState', on: 'selectShapeType' })
      .tells(canvas, { on: 'selectAction' });

    drawVector
      .tells(plotters.current, { to: 'beginDrawing', on: 'start' })
      .tells(plotters.current, { to: 'resize', on: 'tick' })
      .tells(plotters.current, { to: 'resize', on: 'complete' })
      .tells(canvas, { to: 'exitDrawState', on: 'complete' });

    shapeHandler
      .tells(moveVector, { to: 'waitForMove', on: 'selectShapeToken' })
      .tells(shapePositioner, { to: 'setShapeAndStartCoords', on: 'selectShapeToken' });

    moveVector
      .tells(shapePositioner, { to: 'reposition', on: 'tick' })
      .tells(shapePositioner, { to: 'reposition', on: 'complete' });
  };
}());
