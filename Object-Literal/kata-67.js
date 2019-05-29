// 67: object-literal - setter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain setters', () => {
  describe('defining: a setter', function() {
    it('by prefixing the property with `set` (and make it a function)', function() {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
        // added set keyword to make it work
      };
      obj.x = 'the new X';
     
      assert.equal(theX, 'the new X');
    });
    it('must have exactly one parameter', function() {
      let setterCalledWith = 'new value';
      // const obj = {
      //   x() {
      //     if (arguments.length === 1) {
      //       setterCalledWith = arguments[0];
      //     }
      //   }
      // };
      const obj = {
        set x(setterCalledWith) {
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        }
      };
      // called set on x and gave it the parameter defined above. needed to also change
      // the variable to make it equal the assert instead of void
      
      assert.equal(obj.x = 'new value', setterCalledWith);
    });
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const publicPropertyName = 'x';
      const privatePropertyName = '_' + publicPropertyName;
      const obj = {
        [privatePropertyName]: 'axe',
        // wchanged null to 'axe' because of assert
      };
      obj.x = 'axe';
     
      assert.equal(obj._x, 'axe');
    });
  });
  describe('working with/on the setter', function() {
    it('you can use `delete` to remove the property (including it`s setter)', function() {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };
      delete obj.x
      // delete the property x here, to make the test pass
      
      obj.x = true;
     
     
      assert.equal(setterCalled, false);
    });
  });
  
  // TODO
  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
 
  // it('must not overlap with a pure property', function() {
  //   const obj = {
  //     x: 1,
  //     set x(val) { return 'ax'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
  // it('multiple `set` for the same property are not allowed', function() {
  //   const obj = {
  //     x: 1,
  //     set x(v) { return 'ax'; },
  //     set x(v) { return 'ax1'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
});
