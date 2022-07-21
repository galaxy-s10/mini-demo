'use strict';

require('core-js/modules/es.array.includes.js');

var _foo = require('./foo');

var _bar = require('./bar');

console.log((0, _foo.sum)(1, 2));
console.log((0, _bar.sub)(1, 2));
console.log([2, 3].includes(23));
console.log([21, 23].includes(2352));

var b = function b() {
  console.log('123');
};
