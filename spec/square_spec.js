/*global describe, it, expect, WHITEBOARD, jQuery, document */
(function () {
  "use strict";

  describe("square", function() {
    it("has a menu item", function() {
      var application, container, menu, startPosition, endPosition, canvas,
      mouseDownPosition, mouseUpPosition;

      container = jQuery('<div>')[0];
      application = WHITEBOARD.createApplication(container, document);

      menu = jQuery('#menu', container);
      canvas = jQuery('#canvas', container);

      expect(menu.find('a#square')).toExist();
    });

    it("can be selected from a menu and drawn", function() {
      var application, container, menu, startPosition, endPosition, canvas,
      mouseDownPosition, mouseUpPosition;

      container = jQuery('<div>')[0];
      application = WHITEBOARD.createApplication(container, document);

      menu = jQuery('#menu', container);
      canvas = jQuery('#canvas', container);

      menu.find('#square').click();

      canvas.trigger(jQuery.Event('mousedown', mouseDownPosition));
      canvas.trigger(jQuery.Event('mouseup', mouseUpPosition));

      expect(canvas.find('rect')).toExist();
    });
  });
}());
