/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    var self,
      squareLink = jQuery('#square', menuEl),
      rectangleLink = jQuery('#rectangle', menuEl),
      circleLink = jQuery('#circle', menuEl),
      ellipseLink = jQuery('#ellipse', menuEl);

    self = { tells: events.tells };

    squareLink.click(function () {
      events.fire('select', 'square');
    });

    rectangleLink.click(function () {
      events.fire('select', 'rectangle');
    });

    circleLink.click(function () {
      events.fire('select', 'circle');
    });

    ellipseLink.click(function () {
      events.fire('select', 'ellipse');
    });

    return self;
  };
}());
