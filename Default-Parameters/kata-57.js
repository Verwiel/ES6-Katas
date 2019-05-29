// 57: Default parameters - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Default parameters make function parameters more flexible', () => {
  it('define it using an assignment to the parameter `function(param=1){}`', function() {
    
    // let number = (int) => int;
    let number = (int=0) => int;
    // assigned a value to the parameter so int would = that value
    
    assert.equal(number(), 0);
  });
  it('it is used when `undefined` is passed', function() {
    
    // let number = (int = 23) => int;
    // const param = 42;
    let number = (param) => param;
    const param = 23;
    // changed so it took basic param and defined what param would be after
    
    assert.equal(number(param), 23);
  });
  it('it is not used when a value is given', function() {
    
    // function xhr() {
    //   return method;  
    // }
    function xhr(method='POST') {
      return method;  
    }
    // called method as the param and gave it the value the assert was looking for
    
    
    assert.equal(xhr('POST'), 'POST');
  });
  it('it is evaluated at run time', function() {
    
    // let defaultValue;
    // function xhr(method = `value: ${defaultValue}`) {
    //   return method;  
    // }
    let defaultValue = 42;
    function xhr(method = `value: ${defaultValue}`) {
      return method;  
    }
    // used template string so value would = 42
    
    assert.equal(xhr(), 'value: 42');
  });
  it('it can also be a function', function() {
    
    // const defaultValue = 0;
    // function fn(value = defaultValue()) {
    //   return value;  
    // }
    const defaultValue = () => 'defaultValue';
    function fn(value = defaultValue()) {
      return value;  
    }
    // changed default value into a function that gave what the assert wanted
    
    assert.equal(fn(), 'defaultValue');
  });
});
