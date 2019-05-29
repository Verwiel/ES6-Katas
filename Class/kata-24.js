// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class you can use the `static` keyword', () => {
  describe('for methods', () => {
    class UnitTest {}
    it('a static method just has the prefix `static`', () => {
      
      // class TestFactory {
      //   makeTest() { return new UnitTest(); }
      // }
      class TestFactory {
        static makeTest() { return new UnitTest(); }
      }
      //added the static prefix.
      
      assert.ok(TestFactory.makeTest() instanceof UnitTest);
    });
    it('the method name can be dynamic/computed at runtime', () => {
      
      // const methodName = 'makeTest';
      // class TestFactory {
      //   static [methodName]() { return new UnitTest(); }
      // }
      const methodName = 'createTest';
      class TestFactory {
        static [methodName]() { return new UnitTest(); }
      }
      // changed the value of methodName to create test so it pulls the right string
      
      assert.ok(TestFactory.createTest() instanceof UnitTest);
    });
  });
  describe('for accessors', () => {
    it('a getter name can be static, just prefix it with `static`', () => {
      
      // class UnitTest {
      //   get testType() { return 'unit'; }
      // }
      class UnitTest {
        static get testType() { return 'unit'; }
      }
      // added static in front of get, like prompted
      
      assert.equal(UnitTest.testType, 'unit');
    });
    it('even a static getter name can be dynamic/computed at runtime', () => {
      
      // const type = 'test' + 'Type';
      // class IntegrationTest {
      //   get type() { return 'integration'; }
      // }
      const type = 'test' + 'Type';
      class IntegrationTest {
        static get [type]() { return 'integration'; }
      }
      //get is static but set type to be dynamic/computed
      
      assert.ok('testType' in IntegrationTest);
      assert.equal(IntegrationTest.testType, 'integration');
    });
  });
});
