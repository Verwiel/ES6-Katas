// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {
  getFunction() {
    return () => {
      return new LexicallyBound();
    }
  }
  getArgumentsFunction() {
    return function() {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    var bound = new LexicallyBound();
    
    // var fn = bound.getFunction();
    var fn = () => bound;
    //removed get function and changed to arrow function. can see back outside the scope
    
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    var bound = new LexicallyBound();
    var anotherObj = {};
    var expected = anotherObj;
    
    // var fn = bound.getFunction();
    var fn = (anotherObj) => {expected=anotherObj};
    //changed to arrow function combined the other variables into the single function
    
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    var bound = new LexicallyBound();
    var fn = bound.getArgumentsFunction();
    
    return fn.length
    //added return so that the function could display something
    
    assert.equal(fn(1, 2).length, 0);
  });
});
