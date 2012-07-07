/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    jQuery(menuEl).on('click', '.shape', function (event) {
      events.fire('selectShape', event.currentTarget.id);
    });

    jQuery(menuEl).on('click', '.action', function (event) {
      events.fire('selectAction', event.currentTarget.id);
    });

    return { tells: events.tells };
  };
}());
