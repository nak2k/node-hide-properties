const test = require('tape');
const { hideProperties } = require('..');

test('test', t => {
  t.plan(5);

  const obj = { a: 1, b: 2, c: 3 };

  hideProperties(obj, ['a', 'c']);

  t.equal(obj.a, 1);
  t.equal(obj.b, 2);
  t.equal(obj.c, 3);

  const keys = Object.keys(obj);
  t.equal(keys.length, 1);
  t.equal(keys[0], 'b');
});
