/*jslint indent: 2, browser: true */
/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (menuEl, canvasEl) {
    var menu = WHITEBOARD.createMenu(menuEl, WHITEBOARD.createEventRegistry()),
      squarePlotter = WHITEBOARD.createSquarePlotter(canvasEl, document);

    menu.tells(squarePlotter, { to: 'start', on: 'squareSelect' });
  };
}());
