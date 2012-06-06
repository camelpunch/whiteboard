/*global window, document, WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createObjectGraph = function (container) {
    var app = WHITEBOARD.createApplication(container, document),
    menu = WHITEBOARD.createMenu(app, WHITEBOARD.createEventRegistry());

    // menu.tells(squarePlotter, { to: 'start', on: 'beginSquareCreation' });
  };
}());
