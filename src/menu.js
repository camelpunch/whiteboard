/*global window, document, WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function(app, events) {
    var menuEl = app.addHtmlElement('div', 'menu'),
    link = app.addHtmlElement('a', 'square', menuEl),
    self = Object.create(events);

    link.addEventListener('click', function() {
      events.fire('beginSquareCreation');
    });

    return self;
    // var rect = context.createElementNS(ns, 'rect'),
    // menu = context.createElement('div'),
    // squareMenuItem = context.createElement('a');

    // menu.setAttribute('id', 'menu');
    // squareMenuItem.setAttribute('id', 'square');

    // rect.setAttribute('width', '500');
    // rect.setAttribute('height', '500');

    // menu.appendChild(squareMenuItem);

    // canvas.appendChild(rect);

    // container.appendChild(menu);
  };
}());
