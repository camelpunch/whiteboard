/*global describe, it, expect, WHITEBOARD, jQuery, document */
(function () {
  "use strict";

  describe("application", function() {
    it("has a menu", function() {
      var application, container, menu;

      container = jQuery('<div>')[0];
      application = WHITEBOARD.createApplication(container, document);

      expect(jQuery('#menu', container)).toExist();
    });

    it("has a canvas", function() {
      var application, container, menu, canvas;

      container = jQuery('<div>')[0];
      application = WHITEBOARD.createApplication(container, document);

      expect(jQuery('#canvas', container)).toExist();
    });
  });
}());
