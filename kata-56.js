// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', function() {
    
    let fn = function() {};
    function* generatorFunction() {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next();
    
    // iterator.next();
    iterator.next(fn);
    // passed function into iterator.next
    
  });
  it('pass a function to the iterator, which calls it', function() {
    
    let fn = () => 2;
    // created a function that would give me an value of 2 after the first value one was given
    function* generatorFunction() {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(fn).value];
    // called the function i created in the iterator.next
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('nesting yielded function calls', function() {
    
    let fn = () => 2;
    // did the same as the last problem so i knew i would end up with [1, 2]
    function* generatorFunction() {
      yield (yield (yield 1)());
    }
    var iterator = generatorFunction();
    // added this line to define iterator for the next line
    var iteratedOver = [iterator.next().value, iterator.next(fn).value, iterator.next(3).value];
    // added 3 to the last value since i already knew how to get [1, 2]
    
    
    assert.deepEqual([1, 2, 3], iteratedOver);
  });
});

