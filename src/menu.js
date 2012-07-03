/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    var self,
      squareLink = jQuery('#square', menuEl),
      rectangleLink = jQuery('#rectangle', menuEl);

    self = { tells: events.tells };

    squareLink.click(function () {
      events.fire('select', 'square');
    });

    rectangleLink.click(function () {
      events.fire('select', 'rectangle');
    });

    return self;
  };
}());
