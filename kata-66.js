// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', function() {
    
    // const obj = {
    //   x() { return 'ax'; }
    // };
    const obj = {
      get x() { return 'ax'; }
    };
    // needed to add get 
    
    assert.equal(obj.x, 'ax');
  });
  it('must have NO parameters', function() {
    
    // const obj = {
    //   x(param) { return 'ax'; }
    const obj = {
      get x() { return 'ax'; }
    // needed to remove parameters and add get. getters cannot have parameters.
      
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be a computed property (an expression enclosed in `[]`)', function() {
    
    // const keyName = 'x';
    // const obj = {
    //   get keyName() { return 'ax'; }
    const keyName = 'x';
    const obj = {
      get [keyName]() { return 'ax'; }
    // put the variable keyName in [] to show its grabbing a computed property
      
      
    };
    assert.equal(obj.x, 'ax');
  });
  it('can be removed using delete', function() {
    
    // const obj = {
    //   get x() { return 'ax'; }
    // };
    // delete obj.y;
    const obj = {
      get x() { return 'ax'; }
    };
    delete obj.x;
    // changed the delete to delete x. 
    
    assert.equal(obj.x, void 0);
  });

  // The following dosent seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
  
  //it('must not overlap with a pure property', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; }
  //  };
  //  
  //  assert.equal(obj.x, 'ax');
  //});
  //
  //it('multiple `get` for the same property are not allowed', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; },
  //    get x() { return 'ax1'; }
  //  };
  //  
  //  assert.equal(obj.x, 'ax');
  //});
});
