// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators returns an iterable object', function() {
  function* generatorFunction(){
    yield 1;
    yield 2;
  }
  let generator;
  beforeEach(() => {
    generator = generatorFunction();
  });
  it('a generator returns an object', function() {
    
    // const typeOfTheGenerator = '';
    const typeOfTheGenerator = typeof generator;
    // the type of a generator is an object
    
    assert.equal(typeof generator, typeOfTheGenerator);
  });
  it('a generator object has a key `Symbol.iterator`', function() {
    
    // const key = '???';
    const key = Symbol.iterator;
    // the key of a generator is the symbol.iterator
    
    assert.equal(key in generator, true);
  });
  it('the `Symbol.iterator` is a function', function() {
    
    // const theType = typeof generator.Symbol.iterator;
    const theType = typeof generator[Symbol.iterator];
    // type of a generator symbol.iterator is a function
    
    assert.equal(theType, 'function');
  });
  it('can be looped with `for-of`, which expects an iterable', function() {
    
    // function iterateForOf(){
    //   for (let value of {}) {
    //     // no statements needed
    //   }
    // }
    function iterateForOf(){
      for (let value of generator) {
        // no statements needed
      }
    }
    // replaced object with generator since it expects an iterator
    
    assert.doesNotThrow(iterateForOf);
  });
});
