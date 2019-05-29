// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class creation', () => {
  it('is as simple as `class XXX {}`', function() {
    
    // let TestClass'
    class TestClass {}
    //changed the variable into a class
    
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });
  it('a class is block scoped', () => {
    
    // class Inside {}
    // {class Inside {}}
    
    {class Inside {}}
    //removed the top class. so putting the second class inside a class {} it blocks the scope
    
    assert.equal(typeof Inside, 'undefined');
  });
  it('the `constructor` is a special method', function() {
    
    // class User {
    //   constructor(id) {}
    // }
    // const user = new User(42);
    class User {
      constructor(id) {this.id = id}
    }
    const user = new User(42);
    //needed to call the id and define it
    
    assert.equal(user.id, 42);
  });
  it('defining a method by writing it inside the class body', function() {
    
    //     class User {
    // }
    // const notATester = new User();
    class User {
      writesTests () {
        return false
      }
    }
    const notATester = new User();
    // wrote the writesTest function to return false in the class
    
    assert.equal(notATester.writesTests(), false);
  });
  it('multiple methods need no commas (opposed to object notation)', function() {
    
    
    // class User {
    //   wroteATest() { this.everWroteATest = true; }
    //   isLazy() {  }
    // }
    // const tester = new User();
    class User {
      wroteATest() { this.everWroteATest = true }
      isLazy() { return !this.everWroteATest  }
    }
    const tester = new User();
    // added return !this.everWroteATest
    
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });
  it('anonymous class', () => {
    
    // const classType = typeof {};
    const classType = typeof class {};
    // a class is a function so typeof a class is a function
    
    assert.equal(classType, 'function');
  });
});