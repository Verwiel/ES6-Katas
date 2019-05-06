// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Classes can inherit from another using `extends`', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      
      // let A
      class A {}
      //class defaults as object so i set variable A to a class A
      
      assert.equal(new A() instanceof Object, true);
    });
    it('when B extends A, B is also instance of `Object`', () => {
      
      // class A {}
      // class B {}
      class A {}
      class B extends A {}
      // B extends A is saying B will be the same type as A
      
      assert.equal(new B() instanceof A, true);
      assert.equal(new B() instanceof Object, true);
    });
    it('a class can extend `null`, and is not an instance of Object', () => {
      
      // class NullClass extends Object {}
      // let nullInstance = new NullClass();
      class NullClass extends null {}
      let nullInstance = new NullClass();
      // changed object to null so it could return null
      
      assert.equal(nullInstance instanceof Object, false);
    });
  });
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      
      // let A;
      // class B extends A {}
      class A {}
      class B extends A {}
      //A needed to be a class, example is showing parent-child essentially
      
      assert.equal(new B() instanceof A, true);
    });
    it('extend over multiple levels', () => {
      
      // class A {}
      class A {}
      class B extends A {}
      class C extends B {}
      //added the class B to extend to A so that it could link with C in the ext line
      
      assert.equal(new C instanceof A, true);
    });
  });
});
