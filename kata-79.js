// 79: Promise - catch
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!
// Here we use promises to trigger, don't modify the block with the 
// returning promise!

describe('`catch()` returns a Promise and deals with rejected cases only', () => {
  describe('prerequisites for understanding', () => {
    it('*return* a fulfilled promise, to pass a test', () => {
      return Promise.resolve();
      // followed prompt and added a return
      assert(false); // Don't touch! Make the test pass in the line above!
    });
    it('reminder: the test passes when a fulfilled promise is returned', () => {
      return Promise.resolve('I should fulfill.');
      // needs to resolve for it to fulfill
    });
  });
  describe('`catch` method basics', () => {
    it('is an instance method', () => {
      const p = Promise.reject();
      // reject is going to cause catch, its type is a function
      assert.equal(typeof p.catch, 'function');
    });
    it('catches only promise rejections', (done) => {
      const promise = Promise.reject();
      // changed resolve to reject. will only catch reject
      promise
        .then(() => { done('Should not be called!'); })
        .catch(done);
    });
    it('returns a new promise', () => {
      const whatToReturn = (resolve) => Promise.resolve();
      // fixed syntax to pass
      const promise = Promise.reject();
      return promise.catch(() =>
        whatToReturn()
      );
    });
    it('converts it`s return value into a promise', () => {
      const p = Promise.reject();
      const p1 = p.catch(() => 'promise?');
      // changed void to fit the string in the assert
      return p1.then(result => assert.equal('promise?', result));
    });
    it('the first parameter is the rejection reason', () => {
      const p = Promise.reject('oops');
      // fixed string to match assert
      return p.catch(reason => {
        assert.equal(reason, 'oops');
      });
    });
  });
  describe('multiple `catch`es', () => {
    it('only the first `catch` is called', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => '1 AND 2')
          // changed to match assert string again
          .catch(reason => `${reason} AND 3`)
        ;
      return p1.then(result =>
        assert.equal(result, '1 AND 2')
      );
    });
    it('if a `catch` throws, the next `catch` catches it', () => {
      const p = Promise.reject('1');
      const p1 = p
          .catch(reason => { throw Error(`${reason} AND 2`) })
          .catch(err => (`${err.message} AND 3`))
          // .catch(err => `${err} but NOT THIS`)
          
          //commented out last catch (wouldnt have read anyways)
          // removed extra throw error
        
      return p1.then(result =>
        assert.equal(result, '1 AND 2 AND 3')
      );
    });
  });
});
