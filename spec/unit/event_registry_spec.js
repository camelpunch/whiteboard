/*global jasmine, describe, it, beforeEach, expect, document, WHITEBOARD */
(function () {
  "use strict";

  describe("unit: event registry", function () {
    it("notifies subscribers about registered events", function () {
      var listener = jasmine.createSpyObj(
        'listener', ['sleep', 'goFish', 'unwind']
      ),
      registry = WHITEBOARD.createEventRegistry();

      registry.tells(listener, { to: 'sleep', on: 'squareCreated' });
      registry.tells(listener, { to: 'goFish', on: 'squareCreated' });
      registry.tells(listener, { to: 'unwind', on: 'circleCreated' });

      registry.fire('squareCreated');

      listener.goFish.andCallFake(function() {
        expect(listener.sleep).toHaveBeenCalled();
      });
      expect(listener.goFish).toHaveBeenCalled();
      expect(listener.unwind).not.toHaveBeenCalled();
    });
  });
}());
