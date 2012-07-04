/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    jQuery(menuEl).find('button').click(function (event) {
      events.fire('select', event.currentTarget.id);
    });

    return { tells: events.tells };
  };
}());
