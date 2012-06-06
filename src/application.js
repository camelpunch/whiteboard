/*global window, document, WHITEBOARD */
(function () {
  "use strict";
  var ns = "http://www.w3.org/2000/svg";
  window.WHITEBOARD = window.WHITEBOARD || {};

  WHITEBOARD.createApplication = function (container, context) {
    var canvas = context.createElementNS(ns, 'svg'),
    self = {
      addHtmlElement: function(type, id, parent) {
        var el = context.createElement(type);
        el.setAttribute('id', id);
        (parent || container).appendChild(el);
        return el;
      }
    };

    canvas.setAttribute('id', 'canvas');
    container.appendChild(canvas);

    return self;
  }
}());
