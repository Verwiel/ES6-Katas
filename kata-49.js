// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators can be created in multiple ways', function() {
  it('the most common way is by adding `*` after `function`', function() {
    
    // function g() {}
    function* g() {}
    // putting a * after function makes it a generator
    
    assertIsGenerator(g());
  });
  it('as a function expression, by adding a `*` after `function`', function() {
    
    // let g = function() {};
    let g = function*() {};
    // works the same as the above answer, difference is its an expression
    
    assertIsGenerator(g());
  });
  it('inside an object by prefixing the function name with `*`', function() {
    
    // let obj = {
    //   g() {}
    // };
    let obj = {
      *g() {}
    };
   // prefixed function with * this time since its in an object 
    
    assertIsGenerator(obj.g());
  });
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    
    // let obj = {
    //   [generatorName]() {}
    // };
    let obj = {
      *[generatorName]() {}
    };
    // prefixed the name with a *, similar to the last one since its in an object
    
    assertIsGenerator(obj.g());
  });
  it('inside a class the same way', function() {
    const generatorName = 'g';
    
    // class Klazz {
    //   [generatorName]() {}
    // }
    class Klazz {
      *[generatorName]() {}
    }
    // same as above except in a class
    
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;
    assert.equal(toStringed, '[object Generator]');
  }
});
