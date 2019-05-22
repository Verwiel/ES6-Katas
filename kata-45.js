// 45: Map.prototype.get()
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Map.prototype.get` returns the element from the map for a key', function(){
  it('`get(key)` returns the value stored for this key', function() {
    let map = new Map();
    map.set('key', 'value');
    
    // const value = map.get;
    const value = map.get('key');
    // used get to grab the key
    
    assert.equal(value, 'value');
  });
  it('multiple calls still return the same value', function() {
    let map = new Map();
    map.set('value', 'value');
    
    // var value = map.get(map.get(map.get()));
    var value = map.get(map.get(map.get('value')));
    // drilled down but still returns the same value
    
    
    assert.equal(value, 'value');
  });
  it('requires exactly the value as passed to `set()`', function() {
    let map = new Map();
    const obj = {};
    
    // map.set({}, 'object is key');
    map.set(obj, 'object is key');
    // set variable of obj to the key. cant get a value that isnt set explicitly
    
    assert.equal(map.get(obj), 'object is key');
  });
  it('leave out the key, and you get the value set for the key `undefined` (void 0)', function() {
    let map = new Map();
    map.set(void 0, 'yo');
    
    // const value = map.get(___);
    const value = map.get();
    // getting a key that dosent exist will still return the value
    
    assert.equal(value, 'yo');
  });
  it('returns undefined for an unknown key', function() {
    let map = new Map();
    map.set(void 0, 1);
    
    // const value = map.get();
    const value = map.get('anything');
    // returns void if youre trying to get something that dosent exist
    
    assert.equal(value, void 0);
  });
});
