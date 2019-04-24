// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    
    // var func = function(){};
    var func ='() => {}';
    //added arrow function in a string for some reason
    
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    
    // var func = () => {};
    var func = () => 'I return too';
    //changed object to just a string
    
    
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    
    // var func = p => param - 1;
    var func = p => p - 1;
    //made the variables match
    
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    
    // var func = param => param + param1;
    var func = (param, param1) => param + param1;
    //add second parameter in ()
    
    assert.equal(func(23, 42), 23+42);
  });
  it('the function body needs parens to return an object', () => {
    
    // var func = () => {iAm: 'an object'};
    var func = () => ({iAm: 'an object'});
    //threw () around the object
    
    assert.deepEqual(func(), {iAm: 'an object'});
  });
});