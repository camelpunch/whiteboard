/*global WHITEBOARD */
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

    it("can notify the result of a function", function () {
      var listenerFunction = jasmine.createSpy('listener function'),
        listenerObject = jasmine.createSpyObj('listener object', ['sleep']),
        registry = WHITEBOARD.createEventRegistry();

      registry.tells(listenerFunction,
                     { to: 'sleep', on: 'squareCreated' });

      listenerFunction.andReturn(listenerObject);
      registry.fire('squareCreated', 'myarg1', 'myarg2', 'myarg3');

      expect(listenerObject.sleep).toHaveBeenCalledWith('myarg1', 'myarg2', 'myarg3');
    });

    it("can notify with a dynamically created method name and two arguments", function () {
      var listenerFunction = jasmine.createSpy('listener function'),
        listenerObject = jasmine.createSpyObj('listener object', ['sleep']),
        registry = WHITEBOARD.createEventRegistry();

      registry.tells(listenerFunction, { on: 'squareCreated' });

      listenerFunction.andReturn(listenerObject);
      registry.fire('squareCreated', 'sleep', 'myarg1', 'myarg2');

      expect(listenerObject.sleep).toHaveBeenCalledWith('myarg1', 'myarg2');
    });
  });
}());
