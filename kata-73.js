// 73: Generator - `return` inside a generator is special
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`return` in a generator function is special', function() {
  describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
    it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
      function* generatorFunction() { return 1; }
      const returned = generatorFunction().next();
      
      // const propertyNames = [];
      const propertyNames = [`value`, `done`];
      // shows the properties it contains as prompted
      
      assert.deepEqual(Object.keys(returned), propertyNames);
    });
    it('the property `value` is the returned value', function() {
      function* generatorFunction() { return 23; }
      const {value} = generatorFunction().next();
      // value is whatever is returned
      
      assert.equal(value, 23);
    });
    it('the property `done` is true', function() {
      
      // function* generatorFunction() { yield 42; }
      // const {done} = generatorFunction().next();
      function* generatorFunction() { return 42; }
      const {done} = generatorFunction().next();
      // needed to change yield to return. done equals true if nothings left
      
      assert.equal(done, true);
    });
    it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
      
      // function* generatorFunction() { return 1; }
      // const returned = generatorFunction().next();
      function* generatorFunction() { yield 1; }
      const returned = generatorFunction().next();
      // opposite logic from the last problem
      
      assert.deepEqual(returned, {value: 1, done: false});
    });
    it('a missing `return` returns `{value: undefined, done: true}`', function() {
      
      // function* generatorFunction() { yield; }	
      // const returned = generatorFunction().next();
      function* generatorFunction() {}	
      const returned = generatorFunction().next();
      // if return isnt specified, it returns no value but still done: true
      
      assert.deepEqual(returned, {value: void 0, done: true});
    });
  });

  describe('mixing `return` and `yield`', function() {
    function* generatorFunctionWithYieldAndReturn() {
      yield 1;
      
      return 2;
      // add return to show that a function can have both a yield and a return
    
      
    }
    it('is possible', function() {
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [
        iterator.next(),
        iterator.next()
      ];
      
      assert.deepEqual(values, [{value: 1, done: false}, {value: 2, done: true}]);
    });
    it('the mix behaves different to two `yield`s', function() {
      
      
      const iterator = generatorFunctionWithYieldAndReturn();
      const values = [1];
      // a yield and return only returns 1 value
      
      assert.deepEqual(Array.from(iterator), values);
    });
    it('two `yield`s returning values', function() {
      function* generatorFunctionWithTwoYields() {
        yield 1
        yield 2
      }
      // add both yields to make it pass, returns both values
      
      assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
    });
    it('return a yielded value by "chaining" `return` and `yield`', function() {
      function* generatorFunction() {
        yield 1;
        return 2
        // chaining causes both values to return, look above at 'is possible' prompt
      }
      const iterator = generatorFunction();
      const values = [
        iterator.next(1).value,
        iterator.next(2).value
      ];
      
      assert.deepEqual(values, [1, 2]);
    });
  });
});
