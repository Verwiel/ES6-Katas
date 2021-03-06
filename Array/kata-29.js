// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two', length: 2};
  it('call `Array.from` with an array-like object', function() {
    
    // const arr = arrayLike;
    const arr = Array.from(arrayLike);
    // changed arrayLike into an array using Array.from
    
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    
    // const classList = domNode.classList;
    const classList = Array.from(domNode.classList);
    // same as an exampe above
    
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    
    // const divs = nodeList.filter((node) => node.tagName === 'div');
    const divs = Array.from(nodeList).filter((node) => node.tagName === 'div');
    // changed nodeList into an array and filtering from there
    
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      
      // const arr = Array.from(arrayLike, (value) => value);
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      // changed so the values from arrayLike (line 6) would be uppercase
      
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    it('and we also get the object`s key as second parameter', function() {
      
      // const arr = Array.from(arrayLike, (value) => `${key}=${value}`);
      const arr = Array.from(arrayLike, (value,key) => `${key}=${value}`);
      // added key as the second parameter
      
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
});
