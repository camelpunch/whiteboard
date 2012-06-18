/*jslint indent: 2, browser: true */
/*global jasmine, describe, it, beforeEach, expect, WHITEBOARD */
(function () {
  "use strict";

  describe("unit: event registry", function () {
    it("notifies subscribers about registered events", function () {
      var listener =
        jasmine.createSpyObj('listener', ['sleep', 'goFish', 'unwind']),
        registry = WHITEBOARD.createEventRegistry();

      registry
        .tells(listener, { to: 'sleep', on: 'squareCreated' })
        .tells(listener, { to: 'goFish', on: 'squareCreated' })
        .tells(listener, { to: 'unwind', on: 'circleCreated' });

      registry.fire('squareCreated', 'myarg1', 'myarg2');

      listener.goFish.andCallFake(function () {
        expect(listener.sleep).toHaveBeenCalledWith('myarg1', 'myarg2');
      });
      expect(listener.goFish).toHaveBeenCalledWith('myarg1', 'myarg2');
      expect(listener.unwind).not.toHaveBeenCalled();
    });
  });
}());
