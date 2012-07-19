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
      shapeHandler = WHITEBOARD.createShapeHandler(canvasEl, events()),
      shapePositioner = WHITEBOARD.createShapePositioner(),
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
      .on('selectShapeType',
          { tells: plotters, to: 'switch' },
          { tells: drawVector, to: 'waitForDrag' },
          { tells: canvas, to: 'enterDrawState' })
      .on('selectAction',
          { tells: canvas });

    drawVector
      .on('start',
          { tells: plotters.current, to: 'beginDrawing' })
      .on('tick',
          { tells: plotters.current, to: 'resize' })
      .on('complete',
          { tells: plotters.current, to: 'resize' },
          { tells: canvas, to: 'exitDrawState' });

    shapeHandler
      .on('selectShapeToken',
          { tells: moveVector, to: 'waitForMove' },
          { tells: shapePositioner, to: 'setShapeAndStartCoords' });

    moveVector
      .on('tick',
          { tells: shapePositioner, to: 'reposition' })
      .on('complete',
          { tells: shapePositioner, to: 'reposition' });
  };
}());
