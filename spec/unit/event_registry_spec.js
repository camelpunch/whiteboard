/*global WHITEBOARD */
(function () {
  "use strict";

  describe("unit: event registry", function () {
    it("notifies subscribers about registered events", function () {
      var listener =
        jasmine.createSpyObj('listener', ['sleep', 'goFish', 'unwind']),
        registry = WHITEBOARD.createEventRegistry();

      registry
        .on('squareCreated',
            { tells: listener, to: 'sleep' },
            { tells: listener, to: 'goFish' })
        .on('circleCreated',
            { tells: listener, to: 'unwind' });

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

      registry
        .on('squareCreated',
            { tells: listenerFunction, to: 'sleep' });

      listenerFunction.andReturn(listenerObject);
      registry.fire('squareCreated', 'myarg1', 'myarg2', 'myarg3');

      expect(listenerObject.sleep).toHaveBeenCalledWith('myarg1', 'myarg2', 'myarg3');
    });

    it("can notify with a dynamically created method name and two arguments", function () {
      var listenerFunction = jasmine.createSpy('listener function'),
        listenerObject = jasmine.createSpyObj('listener object', ['sleep']),
        registry = WHITEBOARD.createEventRegistry();

      registry.on('squareCreated', { tells: listenerFunction });

      listenerFunction.andReturn(listenerObject);
      registry.fire('squareCreated', 'sleep', 'myarg1', 'myarg2');

      expect(listenerObject.sleep).toHaveBeenCalledWith('myarg1', 'myarg2');
    });
  });
}());
