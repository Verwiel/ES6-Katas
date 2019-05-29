// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Promise` API overview', function() {
  it('`new Promise()` requires a function as param', () => {
    
    // const param = null;
    const param = () => {};
    // rewrote as a function
    
    assert.doesNotThrow(() => { new Promise(param); });
  });
  describe('resolving a promise', () => {
    // reminder: the test passes when a fulfilled promise is returned
    it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
      
      // const param = () => { resolve(); };
      const param = (resolve) => { resolve(); };
      // added resolve as a parameter
      
      return new Promise(param);
    });
    it('using `Promise.resolve()`', () => {
      return Promise.resolve('all fine');
      // changed reject to resolve
    });
  });
  describe('a rejected promise', () => {
    it('using the constructor parameter', (done) => {
      const promise = new Promise((resolve, reject) => { reject(); });
      // need to have resolve first if youre going to have reject
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
    it('via `Promise.reject()`', (done) => {
      const promise = Promise.reject();
      // changed resolve to reject
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });
  describe('`Promise.all()`', () => {
    it('`Promise.all([p1, p2])` resolves when all promises resolve', () => {
      return Promise.all([Promise.resolve(), Promise.resolve()])
      // remove the reject so it resolves all
    });
    it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
      Promise.all([Promise.resolve(), Promise.reject()])
      // added a reject
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
  });
  describe('`Promise.race()`', () => {
    it('`Promise.race([p1, p2])` resolves/reject when one of the promises resolves/rejects', () => {
      return Promise.race([Promise.resolve(), Promise.reject()])
      // changed the first reject to a resolve so the race could work
    });
    it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
      Promise.race([ Promise.reject()])
      // added a reject
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
    it('`Promise.race([p1, p2])` order matters (and timing)', () => {
      return Promise.race([Promise.resolve() ,Promise.reject()])
      // order matters so i swapped them around
      
    });
  });
});
