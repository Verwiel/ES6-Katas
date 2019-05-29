// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another', () => {
  it('extend an `old style` "class", a function, still works', () => {
    
    // let A;
    // class B extends A {}
    function A (){}
    class B extends A {}
    // you can extend a function
    
    assert.equal(new B() instanceof A, true);
  });
  
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
      
      // const isIt = A.isPrototypeOf(null);
      const isIt = A.isPrototypeOf(B);
      //A needed to = a prototype of B, not null
      
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      
      // const proto = B;
      const proto = B.prototype;
      // set proto to B .prototype
      
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('e.g. the inline assignment of the parent class', () => {
      
      // let A;
      // class B extends (A = {}) {}
      let A;
      class B extends (A = class {}) {}
      // called a function of A that = the class
      
      assert.equal(new B() instanceof A, true);
    });
    it('or calling a function that returns the parent class', () => {
      
      // const returnParent = (beNull) => beNull ? null : class {};
      // class B extends returnParent {}
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent(true)) {}
      // added true to the return parent extension
      
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
});
