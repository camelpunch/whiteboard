/*global jasmine, describe, it, spyOn, beforeEach, expect, document, jQuery,
  WHITEBOARD */
(function () {
  "use strict";

  describe("unit: application", function () {
    var container;

    beforeEach(function () {
      spyOn(WHITEBOARD, 'createMenu');
      container = document.createElement('div');
    });

    it("allows adding of HTML elements", function () {
      var element,
      application = WHITEBOARD.createApplication(
        container, document
      );

      element = application.addHtmlElement('div', 'menu');

      expect(jQuery('div#menu', container)).toExist();
      expect(jQuery(element).attr('id')).toEqual('menu');
    });

    it("can nest new HTML elements within others", function () {
      var element,
      parentEl = document.createElement('div'),
      application = WHITEBOARD.createApplication(
        container, document
      );

      element = application.addHtmlElement('a', 'square', parentEl);

      expect(jQuery('a#square', parentEl)).toExist();
      expect(jQuery(element).attr('id')).toEqual('square');
    });
  });
}());

