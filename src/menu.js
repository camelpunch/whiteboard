/*jslint indent: 2, browser: true */
/*global WHITEBOARD, jQuery */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    var self, link = jQuery('#square', menuEl);

    self = { tells: events.tells };

    link.click(function () {
      events.fire('squareSelect');
    });

    return self;
  };
}());
