/*global WHITEBOARD */
(function () {
  "use strict";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createMenu = function (menuEl, events) {
    jQuery(menuEl).on('click', '.shape', function (event) {
      events.fire('selectShapeType', event.currentTarget.id);
    });

    jQuery(menuEl).on('click', '.action', function (event) {
      events.fire('selectAction', event.currentTarget.id);
    });

    return { on: events.on };
  };
}());
