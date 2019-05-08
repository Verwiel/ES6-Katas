// 34: symbol - basics
// A symbol is a unique and immutable data type and may be used as an identifier for object properties
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Symbol', function() {
  it('`Symbol` lives in the global scope', function(){
    
    // const expected = someNamespace.Symbol;
    const expected = Symbol;
    // all it wants is for symbol to be expected
    
    assert.equal(Symbol, expected);
  });
  it('every `Symbol()` is unique', function(){
    
    // const sym1 = Symbol();
    // const sym2 = sym1;
    const sym1 = Symbol();
    const sym2 = Symbol()
    // sym 2 couldnt = sym 1 because they need to be unique
    
    assert.notEqual(sym1, sym2);
  });
  it('every `Symbol()` is unique, also with the same parameter', function(){
    
    // var sym1 = Symbol('foo');
    // var sym1 = Symbol('foo')
    var sym1 = Symbol('foo');
    var sym2 = Symbol('foo');
    // can still have the same parameter but the variable will need to be unique
    
    assert.notEqual(sym1, sym2);
  });
  it('`typeof Symbol()` returns "symbol"', function(){
    
    // const theType = typeof Symbol;
    const theType = typeof Symbol();
    // needed to call symbol to get the type of it
    
    assert.equal(theType, 'symbol');
  });
  it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
    
    // function fn() {
    //   Symbol();
    // }
    function fn() {
      new Symbol();
    }
    // trying to make a new symbol is going to throw an error
    
    assert.throws(fn);
  });
});
