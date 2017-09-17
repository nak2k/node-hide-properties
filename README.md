# hide-properties

Hide properties of an object.

## Installation

```
npm i hide-properties -S
```

## Usage

``` javascript
const { hideProperties } = require('hide-properties');

const obj = { a: 1, b: 2, c: 3 };

console.log(obj);
// => { a: 1, b: 2, c: 3 }

hideProperties(obj, ['a', 'c']);

console.log(obj);
// => { b: 2 }
```

## License

MIT
